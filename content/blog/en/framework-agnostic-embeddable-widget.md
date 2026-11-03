---
title: How to build an embeddable widget that works in React, Vue, Angular and plain HTML
description: Architecture decisions for a framework-agnostic JavaScript widget: style isolation with Shadow DOM, build, size, accessibility and distribution via npm and script tag.
date: 2026-11-03
tags: JavaScript, Web Components, Shadow DOM, npm, architecture
---

An embeddable widget (like the Feedget feedback widget, which I published on npm and which works with React, Next.js, Vue, Angular, Astro and plain JS) has one golden rule: **it lives on someone else's site**. It can't break the page's styles, can't require a framework and can't be heavy. These are the decisions that matter most.

## 1. Style isolation: Shadow DOM

If your widget's CSS leaks into the page (or the page's CSS leaks into the widget), someone is going to have a bad day. **Shadow DOM** draws a boundary:

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

- CSS variables (`--fw-accent`) **cross** the Shadow DOM boundary, so customers can theme colors without giving up isolation.
- `part` and `::part()` expose specific styling hooks.
- For even stronger isolation (scripts included), an `<iframe>` is the alternative, at the cost of `postMessage` communication.

## 2. Zero framework dependency

The core should be plain JavaScript/TypeScript (or a Web Component). For React, Vue or Angular users, offer **thin wrappers** over that core instead of rewriting the widget per framework. You keep a single implementation.

## 3. Two ways to ship

**Via npm** (ESM, for bundler users):

```js
import { init } from "@your-scope/widget";
init({ projectId: "abc123" });
```

**Via `<script>` tag** (any site, plain HTML included):

```html
<script async src="https://cdn.example.com/widget.js" data-project="abc123"></script>
```

Produce ESM (for npm) and IIFE (for script) builds from the same source; tools like `tsup` or Vite's library mode handle this.

## 4. SSR-safe

In Next.js and Astro, code runs on the server before the browser. Never touch `window` or `document` at module load; only inside functions called on the client.

```ts
export function init(options: Options) {
  if (typeof window === "undefined") return; // SSR: do nothing
  // ...
}
```

## 5. Size and loading

- Set a **size budget** (a few KB gzipped) and enforce it in CI.
- Load with `async` so you don't block the host page.
- Avoid heavy dependencies; every KB of yours is a KB your customer pays for.

## 6. Accessibility and good manners

- Managed focus (opening and closing the panel returns focus correctly), keyboard navigation and ARIA attributes.
- Respect `prefers-reduced-motion`.
- Don't pollute the global scope: expose **one** name and nothing else.
- Tolerate strict CSPs and network failures without throwing errors in the customer's console.

## 7. Versioning

People who embed a widget don't want surprises. Use **semantic versioning**, avoid breaking API changes and, for the CDN script, offer pinned versions in addition to "latest".

## Summary

A good embeddable widget is small, isolated, dependency-free and polite to the page hosting it. See the result in [Feedget](https://feedget.com.br/), and read about the [AI feedback triage](/blog/ai-feedback-triage) running behind it.
