---
title: "Core Web Vitals explained: LCP, INP and CLS for non-developers"
description: What LCP, INP and CLS are, which values Google considers good, how to measure them and what to do to make a clinic or product website faster.
date: 2026-11-03
tags: Core Web Vitals, performance, SEO, Lighthouse
---

Google uses page experience as one of its ranking signals and measures it with three metrics called **Core Web Vitals**. The name sounds scary, but the idea is simple: *does the page show up fast? Does it respond when I tap? Does it stay still or jump around while loading?*

## The three metrics

| Metric | Question it answers | Considered good |
|---|---|---|
| **LCP** (Largest Contentful Paint) | How long until the main content shows up? | up to 2.5 s |
| **INP** (Interaction to Next Paint) | How long does the page take to react to taps and clicks? | up to 200 ms |
| **CLS** (Cumulative Layout Shift) | Does the layout "jump" while loading? | up to 0.1 |

INP replaced FID as the official metric in March 2024. These thresholds apply to the **75th percentile** of real visits: 3 out of 4 visitors need a good experience.

## What it means in plain words

- **Bad LCP:** the visitor stares at a blank screen where the headline or hero image should be.
- **Bad INP:** the WhatsApp button seems broken because the page is too busy to react.
- **Bad CLS:** you're about to tap a button and a banner pushes everything down, so you tap the wrong thing.

## How to measure

- **PageSpeed Insights** (free): shows **field** data (real visitors, when there's enough traffic) and **lab** data (simulation).
- **Search Console:** the "Core Web Vitals" report shows which URLs need attention.
- **Lighthouse** (Chrome DevTools): great during development, but it's a simulation, not a replacement for real data.

## What usually improves each metric

**LCP**
- Optimize and size the main image properly (modern formats, right dimensions).
- Don't use `loading="lazy"` on the image at the very top; give it priority.
- Cut render-blocking JavaScript and use good hosting/CDN.

**INP**
- Break up long JavaScript tasks and ship only what the page needs.
- Avoid heavy third-party scripts (chat widgets, too many pixels).

**CLS**
- Always set **width and height** on images and videos so the browser reserves space.
- Reserve space for banners, ads and embeds.
- Watch out for fonts that resize while loading.

```html
<!-- Reserving space prevents layout shift -->
<img src="/clinic.jpg" width="800" height="600" alt="Clinic reception">
```

## Does it really matter for Google?

Core Web Vitals are **one** signal; relevant content is still the main one. But between two similar pages the faster one tends to have an edge, and more importantly, **a visitor who leaves because the page is slow is a lost customer**, ranking aside.

I build pages with this in mind from the start. See [the landing pages I build for clinics](/clinics) and the article on [how I cut interface load time by 35%](/blog/cut-load-time-by-35-percent).
