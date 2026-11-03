---
title: Como saber se a sua landing page está trazendo pacientes: 5 números que importam
description: Os cinco números para acompanhar em uma landing page de clínica, como medir cliques no botão de WhatsApp e como não se enganar com métricas de vaidade.
date: 2026-11-03
tags: analytics, WhatsApp, conversão, landing page
---

Publicar a página é só o começo. Sem medir, você não sabe se ela está funcionando, e fica no "acho que está indo bem". A boa notícia é que dá para responder isso com **poucos números**.

## Os 5 números

**1. Visitantes**
Quantas pessoas abriram a página no período. É o ponto de partida, mas sozinho não diz muito.

**2. De onde vieram**
Busca no Google, Instagram, anúncio, link direto. Isso mostra quais canais realmente trazem gente interessada.

**3. Cliques no botão de WhatsApp**
Esse é o número mais importante da página: é o momento em que o visitante decide começar uma conversa.

**4. Taxa de conversão**
Cliques no WhatsApp ÷ visitantes. Se 100 pessoas entram e 8 clicam, a taxa é de 8%. Compare ao longo das semanas: o que importa é a tendência, não um valor "mágico".

**5. Consultas que realmente foram marcadas**
O clique não é a consulta. Anote quantos contatos viraram avaliação marcada e quantos compareceram. É o número que paga as contas.

## Como medir os cliques no WhatsApp

O link `wa.me` não informa nada por si só. Para contar os cliques, a página precisa registrar um evento quando o botão é clicado. Com o Google Analytics 4, por exemplo:

```html
<a href="https://wa.me/55DDDNUMERO?text=Ola!%20Quero%20agendar%20uma%20avaliacao"
   onclick="gtag('event', 'whatsapp_click', { location: 'hero' })">
  Agendar pelo WhatsApp
</a>
```

O parâmetro `location` diz **qual botão** foi clicado (topo, meio, rodapé), o que ajuda a entender onde as pessoas decidem.

## Um truque simples: a mensagem pronta como etiqueta

Quando o paciente chega ao WhatsApp, você não sabe de onde ele veio. Use mensagens diferentes por origem:

- Página: "Olá! Vim pelo site e quero agendar uma avaliação."
- Anúncio: "Olá! Vi o anúncio e quero agendar uma avaliação."

Assim, na primeira mensagem, você já identifica o canal, mesmo sem ferramenta nenhuma.

## Cuidados

- **Métricas de vaidade enganam:** milhares de visitas sem cliques significam uma página que não convence ou um público errado.
- **Amostras pequenas oscilam:** com poucas visitas, não tire conclusões por dia, olhe semanas.
- **Privacidade:** ferramentas de análise usam cookies. Informe isso na página e considere a [LGPD](/pt/blog/lgpd-em-landing-pages-de-clinicas).

## O ciclo

Meça, descubra o gargalo (pouca gente chega? pouca gente clica? o contato não vira consulta?), melhore **uma coisa de cada vez** e meça de novo. É assim que uma landing page deixa de ser "um site bonito" e vira uma ferramenta de captação.

Quer uma página já preparada para ser medida? Veja [o que eu construo para clínicas](/pt/clinicas).
