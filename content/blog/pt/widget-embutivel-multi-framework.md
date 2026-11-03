---
title: Como construir um widget embutível que funciona em React, Vue, Angular e HTML puro
description: Decisões de arquitetura ao criar um widget JavaScript agnóstico de framework: isolamento de estilos com Shadow DOM, build, tamanho, acessibilidade e distribuição via npm e script.
date: 2026-11-03
tags: JavaScript, Web Components, Shadow DOM, npm, arquitetura
---

Um widget embutível (como o de feedback do Feedget, que publiquei no npm e funciona com React, Next.js, Vue, Angular, Astro e JS puro) tem uma regra de ouro: **ele vive no site dos outros**. Não pode quebrar o estilo da página, não pode exigir um framework e não pode pesar. Estas são as decisões que mais importam.

## 1. Isolamento de estilos: Shadow DOM

Se o CSS do seu widget vaza para a página (ou o CSS da página vaza para o widget), alguém vai ter um dia ruim. O **Shadow DOM** cria uma fronteira:

```ts
class FeedbackWidget extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = `
      <style>
        :host { all: initial; font-family: system-ui, sans-serif; }
        button { background: var(--fw-accent, #111); color: #fff; }
      </style>
      <button part="trigger">Feedback</button>
    `;
  }
}
customElements.define("feedback-widget", FeedbackWidget);
```

- Variáveis CSS (`--fw-accent`) **atravessam** o Shadow DOM, então o cliente pode personalizar cores sem abrir mão do isolamento.
- `part` e `::part()` permitem expor pontos específicos de estilo.
- Se precisar de isolamento ainda mais forte (inclusive de scripts), um `<iframe>` é a alternativa, com custo de comunicação via `postMessage`.

## 2. Zero dependência de framework

O núcleo deve ser JavaScript/TypeScript puro (ou Web Component). Para quem usa React, Vue ou Angular, ofereça **wrappers finos** sobre esse núcleo, em vez de reescrever o widget em cada framework. Assim você mantém uma só implementação.

## 3. Duas formas de distribuição

**Via npm** (ESM, para quem usa bundler):

```js
import { init } from "@seu-escopo/widget";
init({ projectId: "abc123" });
```

**Via tag `<script>`** (para qualquer site, inclusive HTML puro):

```html
<script async src="https://cdn.exemplo.com/widget.js" data-project="abc123"></script>
```

Gere builds ESM (para npm) e IIFE (para script) a partir da mesma base; ferramentas como `tsup` ou o modo biblioteca do Vite resolvem isso.

## 4. Seguro para SSR

Em Next.js e Astro, o código roda no servidor antes do navegador. Nunca acesse `window` ou `document` no carregamento do módulo; só dentro de funções chamadas no cliente.

```ts
export function init(options: Options) {
  if (typeof window === "undefined") return; // SSR: não faz nada
  // ...
}
```

## 5. Tamanho e carregamento

- Defina um **orçamento de tamanho** (por exemplo, alguns KB comprimidos) e acompanhe no CI.
- Carregue com `async` para não bloquear a página hospedeira.
- Evite dependências pesadas; cada KB seu é um KB que o cliente paga.

## 6. Acessibilidade e boas maneiras

- Foco gerenciado (abrir e fechar o painel devolve o foco corretamente), navegação por teclado e atributos ARIA.
- Respeitar `prefers-reduced-motion`.
- Não poluir o escopo global: exponha **um** nome, e nada mais.
- Tolerar CSP restritivas e falhas de rede sem lançar erros no console do cliente.

## 7. Versionamento

Quem embute um widget não quer surpresas. Use **versionamento semântico**, evite mudanças que quebrem a API e, para o script via CDN, ofereça versões fixas além da "latest".

## Resumo

Um widget embutível bom é pequeno, isolado, sem dependências e educado com a página que o hospeda. Conheça o resultado no [Feedget](https://feedget.com.br/), e leia também sobre a [triagem de feedback com IA](/pt/blog/ia-triagem-de-feedback) que roda por trás.
