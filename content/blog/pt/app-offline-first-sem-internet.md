---
title: App que funciona sem internet: como construir um sistema offline-first
description: Como projetar um app web que continua funcionando quando a internet cai: armazenamento local, fila de envio, idempotência e sincronização, usando o exemplo de apps de campo.
date: 2026-11-03
tags: offline-first, PWA, IndexedDB, sincronização, apps de campo
---

Pense em quem usa o app: um vaqueiro no curral, um técnico em uma obra, um entregador em uma área sem sinal. Para essas pessoas, "sem conexão" não é exceção, **é rotina**. Apps como o Gado na Mão, em que o trato do dia e a pesagem ficam salvos no aparelho quando a internet cai e são enviados depois, seguem o padrão **offline-first**. Veja como a ideia funciona.

## A mudança de mentalidade

No modelo comum, a tela pede dados ao servidor e espera. No offline-first, a tela **sempre** lê e escreve no armazenamento local, e uma parte separada do app cuida de sincronizar com o servidor quando houver conexão. O usuário nunca fica esperando a rede.

## Peças principais

**1. Armazenamento local: IndexedDB**
É o banco do navegador, assíncrono e com bom volume de dados. Bibliotecas como `idb` ou Dexie facilitam o uso. (`localStorage` é pequeno e síncrono, não serve para isso.)

**2. Service Worker para o "casco" do app**
Guarda em cache o HTML, JS e CSS, para o app abrir mesmo sem rede. É o que torna uma aplicação instalável como PWA.

**3. Fila de saída (outbox)**
Cada ação do usuário (registrar um trato, uma pesagem) vira um registro em uma fila local, com estado "pendente". Quando há conexão, a fila é enviada em ordem.

```ts
type OutboxItem = {
  id: string;            // gerado NO APARELHO (UUID)
  type: "weighing.create";
  payload: { animalTag: string; kg: number; at: string };
  status: "pending" | "sent";
};

async function register(item: Omit<OutboxItem, "status">) {
  await db.outbox.add({ ...item, status: "pending" });
  void flushOutbox(); // tenta enviar agora; se não der, fica na fila
}
```

## O detalhe que evita dor de cabeça: idempotência

Se a conexão cai **depois** de o servidor receber o dado e **antes** de o app receber a confirmação, o app vai reenviar. Sem cuidado, o animal ganha duas pesagens. A solução é gerar o `id` no aparelho e fazer o servidor ignorar um `id` que já processou:

```ts
// no servidor: operação idempotente por id
await db.weighing.upsert({
  where: { id: item.id },
  create: { id: item.id, ...item.payload },
  update: {}, // já existe: não faz nada
});
```

## Conflitos: o que acontece se duas pessoas editarem o mesmo dado?

Escolha uma estratégia consciente:
- **Último a escrever vence:** simples, serve para muitos casos.
- **Mesclar por campo:** quando pessoas editam partes diferentes do mesmo registro.
- **Registros imutáveis (só acrescentar):** pesagens e tratos são eventos, não edições. Registrar um novo evento em vez de editar elimina boa parte dos conflitos.

## Reenvio e retentativas

Use *backoff* exponencial (esperar cada vez mais entre tentativas) para não sobrecarregar a rede nem o servidor. A API *Background Sync* ajuda onde há suporte, mas não é universal; mantenha também um gatilho por evento `online` e ao abrir o app.

## Mostre o estado ao usuário

Quem trabalha no campo precisa de **confiança**: "isto está salvo?". Mostre claramente: "Salvo no aparelho" e "Enviado". Esse pequeno detalhe de interface vale tanto quanto a engenharia por trás.

## Resumo

Offline-first é: **ler e escrever localmente, enviar depois, tornar o envio seguro para repetir e deixar o usuário saber o que está acontecendo**. Se o seu público trabalha onde o sinal falha, é um diferencial de produto, não um luxo. Conheça o [Gado na Mão](https://gadonamao.gabrielfragoso.com).
