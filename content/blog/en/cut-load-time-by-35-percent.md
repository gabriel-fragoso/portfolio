---
title: How I cut the load time of a React interface by 35%
description: Code splitting, caching and rendering optimizations in practice: where to start, what to measure and the most common mistakes when making a React app faster.
date: 2026-11-03
tags: React, Next.js, performance, code splitting
---

In one of my frontend engineering roles I cut an interface's **load time by 35%** with three levers: *code splitting*, caching and rendering optimizations. To be clear, that number belongs to that project; your result depends on where you start. What repeats from project to project is the **method**.

## Rule zero: measure before you touch anything

Optimizing without measuring is guessing. Before any change:

1. Run Lighthouse and the Chrome DevTools *Performance* panel.
2. See what's heavy in the JavaScript bundle. In Next.js, `@next/bundle-analyzer` gives you a visual map.
3. Write down the "before" numbers so you can compare.

## 1. Code splitting: don't ship what the screen doesn't use

If the home page loads the code for a chart, an editor and a modal almost nobody opens, users pay for all of it before they see anything.

```tsx
import dynamic from "next/dynamic";

// The chart is only downloaded when this component renders
const SalesChart = dynamic(() => import("./SalesChart"), {
  loading: () => <p>Loading…</p>,
  ssr: false,
});
```

Good candidates for lazy loading: large libraries, modals, editors, maps, charts and rarely visited screens. In Next.js **each route is already split automatically**, so the win is in splitting what's left *inside* a route.

## 2. Caching: don't fetch twice what you already have

For data, a library like React Query avoids repeated requests and makes navigation feel instant:

```tsx
const { data } = useQuery({
  queryKey: ["orders", filters],
  queryFn: () => fetchOrders(filters),
  staleTime: 60_000, // for 1 min, reuse without refetching
});
```

For static files (JS, CSS, images with hashed names) use long cache headers: `Cache-Control: public, max-age=31536000, immutable`. Since the name changes on every build, there's no risk of serving an old version.

## 3. Rendering: do less work per interaction

- **Large lists:** virtualize (render only the visible rows).
- **Unnecessary re-renders:** use the React Profiler to find components that re-render for no reason before sprinkling `memo` everywhere. `memo`, `useMemo` and `useCallback` have a cost and only pay off where the Profiler points.
- **State in the right place:** frequently changing global state re-renders a lot. Keep state close to where it's used, or use selectors (like in Zustand) to subscribe to just the piece you need.
- **Images:** `next/image` or equivalent, with correct sizes and modern formats.

## Common mistakes

- **Optimizing what isn't the bottleneck.** Measure first.
- **Swapping a library for a "lighter" one** without checking how much it actually weighs in the bundle.
- **Ignoring third-party scripts** (chat, analytics, pixels), which often weigh more than your own code.
- **Not re-measuring** after each change.

## Takeaway

The gain came from **three simple things applied with discipline**, not a magic trick: ship less JavaScript, reuse data and reduce rendering work, measuring at every step. To understand what Google considers "fast", read [Core Web Vitals explained](/blog/core-web-vitals-explained).
