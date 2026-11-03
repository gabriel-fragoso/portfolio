---
title: Apps that work without internet: how to build an offline-first system
description: How to design a web app that keeps working when the connection drops: local storage, an outbox queue, idempotency and sync, using field apps as the example.
date: 2026-11-03
tags: offline-first, PWA, IndexedDB, sync, field apps
---

Think about who uses the app: a rancher in the corral, a technician on a construction site, a courier in a dead zone. For these people, "no connection" isn't an exception, **it's routine**. Apps like Gado na Mão, where the day's feeding and weigh-ins are saved on the device when the internet drops and sent later, follow the **offline-first** pattern. Here's how the idea works.

## The mindset shift

In the usual model, the screen asks the server for data and waits. In offline-first, the screen **always** reads from and writes to local storage, and a separate part of the app syncs with the server whenever there's a connection. The user never waits on the network.

## Key pieces

**1. Local storage: IndexedDB**
The browser's database: asynchronous and able to hold a lot of data. Libraries like `idb` or Dexie make it pleasant. (`localStorage` is small and synchronous, it's not suited for this.)

**2. A Service Worker for the app shell**
Caches the HTML, JS and CSS so the app opens even without a network. This is what makes a web app installable as a PWA.

**3. An outbox queue**
Every user action (log a feeding, a weigh-in) becomes a local record with a "pending" status. When a connection is available, the queue is sent in order.

```ts
type OutboxItem = {
  id: string;            // generated ON THE DEVICE (UUID)
  type: "weighing.create";
  payload: { animalTag: string; kg: number; at: string };
  status: "pending" | "sent";
};

async function register(item: Omit<OutboxItem, "status">) {
  await db.outbox.add({ ...item, status: "pending" });
  void flushOutbox(); // try now; if it fails, it stays queued
}
```

## The detail that saves headaches: idempotency

If the connection drops **after** the server receives the data and **before** the app gets the confirmation, the app will resend. Without care, the animal gets two weigh-ins. The fix is to generate the `id` on the device and make the server ignore an `id` it has already processed:

```ts
// on the server: idempotent by id
await db.weighing.upsert({
  where: { id: item.id },
  create: { id: item.id, ...item.payload },
  update: {}, // already exists: do nothing
});
```

## Conflicts: what if two people edit the same data?

Pick a strategy on purpose:
- **Last write wins:** simple, fine for many cases.
- **Merge per field:** when people edit different parts of the same record.
- **Append-only records:** weigh-ins and feedings are events, not edits. Recording a new event instead of editing removes most conflicts.

## Retries

Use exponential *backoff* (wait longer between attempts) so you don't hammer the network or the server. The Background Sync API helps where it's supported, but it isn't universal; also trigger on the `online` event and on app open.

## Show the state to the user

People working in the field need **confidence**: "is this saved?" Show it clearly: "Saved on device" and "Sent". That small interface detail is worth as much as the engineering behind it.

## Summary

Offline-first is: **read and write locally, send later, make sending safe to repeat and let the user know what's happening**. If your audience works where the signal fails, it's a product differentiator, not a luxury. See [Gado na Mão](https://gadonamao.gabrielfragoso.com).
