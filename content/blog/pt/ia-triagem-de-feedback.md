---
title: IA para triagem de feedback: como classificar urgência, sentimento e duplicados
description: Como projetar um sistema de triagem de feedback com IA: saída estruturada, categorias, detecção de duplicados com embeddings e como manter um humano no controle.
date: 2026-11-03
tags: IA, LLM, embeddings, feedback, arquitetura
---

Quando um produto começa a receber feedback de verdade, o problema deixa de ser "coletar" e passa a ser **"ler tudo e decidir o que fazer"**. Foi o problema que enfrentei ao construir o Feedget, onde implementei uma triagem com IA que classifica o feedback por **urgência, sentimento e categoria** e detecta **duplicados**. Aqui vai a abordagem geral, sem amarrar a nenhum fornecedor de IA.

## 1. Trate a classificação como um contrato

Não peça "uma análise" em texto livre. Peça uma **saída estruturada**, com um esquema fixo, que o seu código possa validar:

```ts
import { z } from "zod";

export const Triage = z.object({
  category: z.enum(["bug", "feature_request", "question", "praise", "other"]),
  sentiment: z.enum(["negative", "neutral", "positive"]),
  urgency: z.enum(["low", "medium", "high"]),
  summary: z.string().max(200),
});
export type Triage = z.infer<typeof Triage>;
```

Se a resposta não passa na validação, você tenta de novo ou cai para "revisão manual". **Nunca confie cegamente na saída do modelo.**

## 2. Defina urgência com critérios, não com "achismo"

"Alta urgência" precisa de definição no prompt: por exemplo, *o usuário não consegue concluir uma ação essencial, há perda de dados ou cobrança incorreta*. Quanto mais claros os critérios (e alguns exemplos), mais consistentes ficam os resultados.

## 3. Duplicados: embeddings e similaridade

Pedir ao modelo para comparar cada feedback com todos os outros não escala. A abordagem usual:

1. Gere um **embedding** (vetor) de cada feedback.
2. Compare o novo com os existentes usando **similaridade de cosseno**.
3. Acima de um limiar, marque como "possível duplicado" e agrupe.

```ts
function cosine(a: number[], b: number[]) {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}
```

O limiar (por exemplo, algo na faixa de 0,85 a 0,92, **que você deve calibrar com seus dados**) decide o equilíbrio entre juntar demais e deixar escapar duplicatas. Em produção, use um banco com busca vetorial (como Postgres com `pgvector`) em vez de comparar tudo em memória.

## 4. Mantenha um humano no controle

- Mostre a classificação como **sugestão**, permitindo corrigir.
- Registre as correções: elas viram um conjunto de avaliação para melhorar o prompt.
- Em casos de baixa confiança, encaminhe para revisão.

## 5. Avalie com dados reais

Monte um conjunto pequeno de feedbacks já classificados por pessoas e **meça a concordância** com a IA sempre que mudar o prompt ou o modelo. Sem isso, cada ajuste é um palpite.

## 6. Cuidados

- **Privacidade:** feedback pode conter dados pessoais. Minimize o que é enviado ao modelo e verifique os termos do fornecedor.
- **Custo e latência:** classifique de forma assíncrona (em fila), não dentro da requisição do usuário.
- **Idioma:** teste com os idiomas reais dos seus usuários, inclusive gírias.

## Resumo

Uma boa triagem com IA não é "um prompt mágico": é **saída validada, critérios claros, similaridade para duplicados e uma pessoa que revisa**. Se você constrói produtos com feedback, esse é um dos lugares onde a IA mais economiza tempo de verdade. Conheça o [Feedget](https://feedget.com.br/).
