---
title: Core Web Vitals sem mistério: LCP, INP e CLS para quem não é dev
description: O que são LCP, INP e CLS, quais valores o Google considera bons, como medir e o que fazer para melhorar a velocidade do site da sua clínica ou do seu produto.
date: 2026-11-03
tags: Core Web Vitals, performance, SEO, Lighthouse
---

O Google usa a experiência de uso como um dos sinais para ranquear páginas, e mede isso com três métricas chamadas **Core Web Vitals**. O nome assusta, mas a ideia é simples: *a página aparece rápido? Responde quando eu toco? Fica parada ou pula enquanto carrega?*

## As três métricas

| Métrica | Pergunta que responde | Considerado bom |
|---|---|---|
| **LCP** (Largest Contentful Paint) | Em quanto tempo o conteúdo principal aparece? | até 2,5 s |
| **INP** (Interaction to Next Paint) | Quanto a página demora para reagir aos meus toques e cliques? | até 200 ms |
| **CLS** (Cumulative Layout Shift) | O layout "pula" enquanto carrega? | até 0,1 |

O INP substituiu o FID como métrica oficial em março de 2024. Os limites acima valem para o **percentil 75** dos acessos reais: ou seja, 3 em cada 4 visitantes precisam ter uma boa experiência.

## Para quem não é dev: o que isso significa

- **LCP ruim:** o visitante olha uma tela em branco ou um espaço vazio onde deveria estar o título ou a foto principal.
- **INP ruim:** o botão de WhatsApp parece não funcionar porque a página está ocupada demais para reagir.
- **CLS ruim:** você vai tocar em um botão e, no último instante, um banner empurra tudo para baixo, e você clica no lugar errado.

## Como medir

- **PageSpeed Insights** (grátis): mostra dados de **campo** (visitantes reais, quando há tráfego suficiente) e de **laboratório** (simulação).
- **Search Console:** o relatório "Core Web Vitals" mostra quais URLs do seu site precisam de atenção.
- **Lighthouse** (no Chrome DevTools): bom para testar durante o desenvolvimento, mas é simulação, não substitui dados reais.

## O que normalmente melhora cada métrica

**LCP**
- Otimizar e dimensionar a imagem principal (formatos modernos, tamanho adequado).
- Não carregar com `loading="lazy"` a imagem que aparece logo no topo; ela deve ter prioridade.
- Reduzir o JavaScript que bloqueia a renderização e usar boa hospedagem/CDN.

**INP**
- Quebrar tarefas longas de JavaScript e carregar só o que a página precisa.
- Evitar scripts de terceiros pesados (chats, widgets, pixels demais).

**CLS**
- Sempre definir **largura e altura** de imagens e vídeos, para o navegador reservar o espaço.
- Reservar espaço para banners, anúncios e embeds.
- Cuidado com fontes que trocam de tamanho ao carregar (`font-display` e fontes bem escolhidas).

```html
<!-- Reservar espaço evita o "pulo" de layout -->
<img src="/consultorio.jpg" width="800" height="600" alt="Recepção da clínica">
```

## Isso importa mesmo para o Google?

Core Web Vitals são **um** dos sinais; conteúdo relevante continua sendo o principal. Mas, entre duas páginas parecidas, a que carrega melhor tende a ter vantagem, e, mais importante, **a pessoa que desiste porque a página é lenta é um paciente perdido**, independentemente do ranking.

Eu construo as páginas pensando nisso desde o início. Veja [como são as landing pages que faço para clínicas](/pt/clinicas) e o artigo sobre [como reduzi 35% do tempo de carregamento de uma interface](/pt/blog/reduzi-35-por-cento-tempo-de-carregamento).
