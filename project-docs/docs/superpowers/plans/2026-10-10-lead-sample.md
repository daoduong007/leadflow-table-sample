# Lead Table Sample Implementation Plan

> **For agentic workers:** Use executing-plans to implement this plan task-by-task in the current session.

**Goal:** Deliver the approved free lead table sample for validation.

**Architecture:** Next.js App Router with one client component. Fictional records and filtering live in a small typed module; plain CSS handles desktop/mobile. No network data or persistence.

**Tech Stack:** Next.js 16.4.0, React 19.3.0, TypeScript, Node test runner via tsx, Playwright.

## Global Constraints

- Search name/company, filter status, combine both, clear filters and useful empty state.
- English interface for the plan's audience; Vietnamese setup notes allowed.
- No paid detail/pipeline, login, backend, analytics, checkout or external publication.
- No third-party images, fonts or icon assets; no secrets or real contacts.
- Existing folder is not a Git repository; no branch/commit operations apply.

## Task 1 — Typed data and search

Files: `sample/package.json`, `sample/src/lib/leads.ts`, `sample/tests/leads.test.ts`, TypeScript config.

Interface: `Lead { id, name, company, email, owner, status, source, added }`; `filterLeads(leads, query, status)` returns matching records in original order. Status union: New/Qualified/Proposal/Won/Lost; filter accepts All.

- [x] Write tests for case-insensitive trimmed search, company search, combined status, unmatched/empty results and unchanged input.
- [x] Run `npm test`; observe absent-function failure.
- [x] Implement mock records and filtering; rerun tests to green.

## Task 2 — Usable table

Files: `sample/src/app/{layout,page}.tsx`, `sample/src/app/globals.css`, `sample/src/components/lead-table.tsx`, `sample/tests/sample.spec.ts`, `sample/playwright.config.ts`.

- [x] Write browser tests against accessible labels for search/status/reset/empty state and mobile overflow.
- [x] Run against initial blank page and observe missing UI failure.
- [x] Build the client UI: labelled controls, semantic table, live result count, clear action, responsive table scrolling, mock-data notice.
- [x] Run browser tests, inspect desktop/mobile screenshots, typecheck and production build.

## Task 3 — Self-service package

Files: `sample/README.md`, `sample/LICENSE`, `execution/08-sample-qa.md`, `execution/README.md`.

- [x] Document npm ci/dev/build/start, data customization, scope, license and feedback questions.
- [x] Verify clean dependency install and checks; package source ZIP excluding dependencies/build/test artifacts.
- [x] Update execution log with actual verification and publication status.
