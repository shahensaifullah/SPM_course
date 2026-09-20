# HNU AIDA — Strategy and Performance Management Field Guide

This repository contains my personal educational study website for the
**Strategy and Performance Management (SPM)** subject in the **AIDA program at
Hochschule Neu-Ulm (HNU)**.

The guide is designed for a scenario-based English exam. Its main goal is to
help a student recognise the issue in a business case, select the appropriate
strategy model, connect evidence to the model, recommend an action, and state a
meaningful limitation.

> This is an independent personal learning resource. It is not an official HNU
> publication. The professor's current lecture pages and wording remain the
> primary source for the course.

## Learning approach

The explanations are mainly in Bangla so the concepts are easier to understand.
English is retained for model names, formulas, exam vocabulary, and reusable
answer sentences.

The learning sequence is:

1. Understand the topic and the problem it solves.
2. Study a fully worked scenario.
3. Explain the model in your own words.
4. Recall the important terms without looking at the notes.
5. Distinguish between similar models in mixed scenarios.
6. Write an exam answer using `Signal → Model → Evidence → Action → Caveat`.

## Course coverage

The site covers the eight main SPM topics:

1. Definition and Schools
2. Competition and Positioning
3. Resource-based Advantages
4. Strategy Formation
5. Organizational Design
6. Ethics and Values
7. Corporate Performance Management
8. Objectives and Key Results

It also contains a dedicated preparation lab for **Meta Case Pt. 2**, including
acquisition ROI, AI/AGI investment, Reality Labs break-even, and Balanced
Scorecard analysis.

## Main routes

- `/` — course map, topic summaries, scenario decoder, formulas, and exam plan
- `/topics/[slug]` — detailed Bangla lesson for each course topic
- `/trainer` — mixed scenario quiz, model contrasts, and SMEAC answer studio
- `/case-2` — detailed Meta Case Pt. 2 preparation lab

## Interactive learning tools

- Value Stick simulator
- Five Forces pressure board
- VRIO decision gates
- Rumelt Kernel and deliberate–emergent strategy lab
- Organizational structure-fit selector
- Ethical decision gate
- NPV calculator
- OKR quality game
- Mixed exam scenario trainer
- Meta Reality Labs break-even calculator

All interactions run in the browser. The project intentionally uses **no
database, no Drizzle ORM, no user accounts, and no server-side persistence**.
Topic-review preferences use browser `localStorage` only.

## Lecture sources

- [Definition and Schools](https://awe-hnu.de/lectures/SPM/26WT/definition/)
- [Competition and Positioning](https://awe-hnu.de/lectures/SPM/26WT/competition/)
- [Resource-based Advantages](https://awe-hnu.de/lectures/SPM/26WT/resources/)
- [Strategy Formation](https://awe-hnu.de/lectures/SPM/26WT/formation/)
- [Organizational Design](https://awe-hnu.de/lectures/SPM/26WT/organization/)
- [Ethics and Values](https://awe-hnu.de/lectures/SPM/26WT/ethics/)
- [Corporate Performance Management](https://awe-hnu.de/lectures/SPM/26WT/cpm/)
- [Objectives and Key Results](https://awe-hnu.de/lectures/SPM/26WT/OKRs/)
- [Meta Case Pt. 2 Preparation](https://awe-hnu.de/lectures/SPM/26WT/case-2/preparation.html)

## Technology

- React 19
- vinext / Vite
- TypeScript
- CSS and browser-local state
- Cloudflare-compatible worker output through OpenAI Sites

`package-lock.json` is the single package-manager lockfile for this project.

## Local development

Requirements: Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Validation:

```bash
npm test
```

`npm test` runs both linting and the production build.

## Content structure

- `app/studyData.ts` — homepage summaries, decoder cases, formulas, and sources
- `app/topicLessons.ts` — detailed lessons and exam-oriented explanations
- `app/courseCoverage.ts` — mapping between lecture-page coverage and lessons
- `app/topics/[slug]/` — detailed topic route and topic-specific learning labs
- `app/trainer/` — mixed exam-transfer practice
- `app/case-2/` — Meta case preparation lab
- `app/globals.css` — complete responsive visual system
- `public/` — favicon and social preview image

## Live site

[SPM Field Guide](https://spm-field-guide-hnu.shahensaifullah.chatgpt.site)
