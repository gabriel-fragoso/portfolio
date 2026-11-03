---
title: Como reduzi em 35% o tempo de carregamento de uma interface React
description: Code splitting, cache e otimizações de renderização na prática: por onde começar, o que medir e os erros mais comuns ao tentar deixar uma aplicação React mais rápida.
date: 2026-11-03
tags: React, Next.js, performance, code splitting
---

Em um dos meus trabalhos como engenheiro frontend, reduzi em **35% o tempo de carregamento** de uma interface com três frentes: *code splitting*, cache e otimizações de renderização. Vale dizer: esse número é daquele projeto, o seu resultado depende do ponto de partida. O que se repete de projeto em projeto é o **método**.

## Regra zero: meça antes de mexer

Otimizar sem medir é adivinhar. Antes de qualquer mudança:

1. Rode o Lighthouse e o painel *Performance* do Chrome DevTools.
2. Veja o que pesa no pacote JavaScript. No Next.js, o `@next/bundle-analyzer` mostra um mapa visual do bundle.
3. Anote os números "antes" para poder comparar depois.

## 1. Code splitting: não envie o que a tela não usa

Se a página inicial carrega o código de um gráfico, de um editor e de um modal que quase ninguém abre, o usuário paga por tudo isso antes de ver qualquer coisa.

```tsx
import dynamic from "next/dynamic";

// O gráfico só é baixado quando este componente for renderizado
const SalesChart = dynamic(() => import("./SalesChart"), {
  loading: () => <p>Carregando…</p>,
  ssr: false,
});
```

Boas candidatas a carregamento sob demanda: bibliotecas grandes, modais, editores, mapas, gráficos e telas pouco acessadas. No Next.js, **cada rota já é dividida automaticamente**, então o ganho está em quebrar o que sobra *dentro* de uma rota.

## 2. Cache: não busque duas vezes o que já tem

Para dados, uma biblioteca como o React Query evita requisições repetidas e deixa a interface mais rápida ao navegar entre telas:

```tsx
const { data } = useQuery({
  queryKey: ["orders", filters],
  queryFn: () => fetchOrders(filters),
  staleTime: 60_000, // por 1 min, reaproveita sem refazer a requisição
});
```

Para arquivos estáticos (JS, CSS, imagens com hash no nome), use cabeçalhos de cache longos: `Cache-Control: public, max-age=31536000, immutable`. Como o nome muda a cada build, não há risco de servir versão velha.

## 3. Renderização: faça menos trabalho por interação

- **Listas grandes:** virtualize (renderize só as linhas visíveis).
- **Re-renderizações desnecessárias:** use o React Profiler para achar componentes que renderizam sem necessidade antes de sair colocando `memo` em tudo. `memo`, `useMemo` e `useCallback` custam e só valem quando o Profiler apontar o problema.
- **Estado no lugar certo:** estado global que muda toda hora faz muita coisa re-renderizar. Mantenha o estado perto de quem usa, ou use seletores (como em Zustand) para assinar só o pedaço necessário.
- **Imagens:** `next/image` ou equivalente, com tamanhos corretos e formatos modernos.

## Erros comuns

- **Otimizar o que não é gargalo.** Meça primeiro.
- **Trocar uma biblioteca por outra "mais leve" sem checar** quanto ela realmente pesa no bundle.
- **Ignorar scripts de terceiros** (chat, analytics, pixels), que muitas vezes pesam mais que o seu código.
- **Não repetir a medição** depois de cada mudança.

## O que levar daqui

O ganho veio de **três coisas simples aplicadas com disciplina**, não de um truque mágico: enviar menos JavaScript, reaproveitar dados e reduzir o trabalho de renderização, medindo a cada passo. Para entender o que o Google considera "rápido", veja [Core Web Vitals sem mistério](/pt/blog/core-web-vitals-sem-misterio).
