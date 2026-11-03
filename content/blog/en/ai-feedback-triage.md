---
title: "AI feedback triage: classifying urgency, sentiment and duplicates"
description: How to design an AI feedback triage system: structured output, categories, duplicate detection with embeddings and how to keep a human in control.
date: 2026-11-03
tags: AI, LLM, embeddings, feedback, architecture
---

Once a product starts getting real feedback, the problem stops being "collecting" and becomes **"reading it all and deciding what to do"**. That's the problem I faced building Feedget, where I implemented AI triage that classifies feedback by **urgency, sentiment and category** and detects **duplicates**. Here is the general approach, not tied to any AI vendor.

## 1. Treat classification as a contract

Don't ask for "an analysis" in free text. Ask for **structured output** with a fixed schema your code can validate:

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

If the response fails validation, retry or fall back to manual review. **Never blindly trust model output.**

## 2. Define urgency with criteria, not vibes

"High urgency" needs a definition in the prompt: for example, *the user can't complete an essential action, data is lost or a charge is wrong*. The clearer the criteria (and a few examples), the more consistent the results.

## 3. Duplicates: embeddings and similarity

Asking the model to compare each item against all the others doesn't scale. The usual approach:

1. Generate an **embedding** (vector) for each feedback item.
2. Compare the new one against existing ones using **cosine similarity**.
3. Above a threshold, flag it as a "possible duplicate" and group.

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

The threshold (something in the 0.85 to 0.92 range, **which you must calibrate on your own data**) sets the balance between over-merging and missing duplicates. In production, use a vector-capable database (such as Postgres with `pgvector`) instead of comparing everything in memory.

## 4. Keep a human in control

- Show the classification as a **suggestion** that can be corrected.
- Log corrections: they become an evaluation set to improve the prompt.
- Route low-confidence cases to review.

## 5. Evaluate with real data

Build a small set of feedback already labeled by people and **measure agreement** with the AI whenever you change the prompt or model. Without that, every tweak is a guess.

## 6. Watch out for

- **Privacy:** feedback may contain personal data. Minimize what you send to the model and check the vendor's terms.
- **Cost and latency:** classify asynchronously (in a queue), not inside the user's request.
- **Language:** test with your users' real languages, slang included.

## Summary

Good AI triage isn't "a magic prompt": it's **validated output, clear criteria, similarity for duplicates and a person who reviews**. If you build products that collect feedback, this is one of the places where AI saves real time. Meet [Feedget](https://feedget.com.br/).
