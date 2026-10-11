# Loading, failed requests and empty filters are different React table states

A blank table can mean several things: a request is still running, a request failed, the server returned an empty list, or a local filter excluded every record. Showing the same “No leads” message for all four leaves the reader without a useful next step.

This tutorial adds a small results component to the [mock-to-API example](https://daoduong007.hashnode.dev/replace-mock-dashboard-data-with-api). The code is an independent teaching example. It is not an API feature shipped with LeadFlow and does not provide authentication, a database or persistence. AI assisted the draft and example; the stated checks are recorded below.

## Choose the action from the cause

| Situation | Message | Available recovery |
|---|---|---|
| Initial request pending | Loading leads… | Wait; avoid displaying an empty-result claim |
| Request rejected | Could not load leads. Try again. | Retry the request |
| Successful response containing `[]` | No leads returned by this request. | Explain the current request scope |
| Loaded records, no search matches | No leads match your search. | Clear the local filter |
| Loaded matching records | X of Y leads shown | Display the matching rows |

An empty response says nothing about every lead in a database. It describes this request, under its authorization and query scope. Retry is appropriate for a transient failure; it does not repair missing authorization or a broken response contract. In production, distinguish those failures and provide a safe action such as signing in again when appropriate.

## Let request state own the first decision

The earlier hook returns a discriminated union. It starts at `loading`, becomes `ready` only after the adapter validates the response, and becomes `error` when loading fails:

```ts
type LeadsState =
  | { kind: 'loading' }
  | { kind: 'error'; message: string }
  | { kind: 'ready'; records: ApiLead[] };
```

Keep search text separately. Derive the visible rows from the loaded records; do not overwrite those records with a filtered copy. Otherwise clearing the search cannot recover the original dataset.

```tsx
const [query, setQuery] = useState('');
const normalized = query.trim().toLowerCase();
const records = state.kind === 'ready' ? state.records : [];
const visible = records.filter(lead =>
  lead.name.toLowerCase().includes(normalized)
);

let message: string;
if (state.kind === 'loading') message = 'Loading leads…';
else if (state.kind === 'error') message = state.message;
else if (records.length === 0) message = 'No leads returned by this request.';
else if (visible.length === 0) message = 'No leads match your search.';
else message = `${visible.length} of ${records.length} leads shown.`;
```

The order matters: the temporary empty array used during loading is not a successful response. With server pagination, `records` covers only the loaded scope. Search the server when the user expects a complete dataset search; this small example intentionally searches only locally loaded names.

## Keep feedback visible and available to assistive technology

A small, persistent status node can report loading and result-count updates. Keep the node mounted when its text changes. This follows the intent of [W3C guidance for status messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html). Test announcements with the screen readers used by your audience; markup alone does not verify that experience.

```tsx
<p role="status" aria-atomic="true">{message}</p>
<div aria-busy={state.kind === 'loading'}>
  {state.kind === 'error' && (
    <button type="button" onClick={onRetry}>Retry loading leads</button>
  )}
  {state.kind === 'ready' && visible.length > 0 && (
    <table>
      <caption>Matching leads</caption>
      <thead><tr><th scope="col">Name</th><th scope="col">Status</th></tr></thead>
      <tbody>{visible.map(lead => (
        <tr key={lead.id}><td>{lead.name}</td><td>{lead.status}</td></tr>
      ))}</tbody>
    </table>
  )}
</div>
```

Place the status outside the busy region so its loading text is not deferred by that region. Keep search labeled and use real buttons. The complete example includes a Clear filters button; it resets search text, while Retry calls the request hook. [React's conditional-rendering guide](https://react.dev/learn/conditional-rendering) explains the ordinary JavaScript branches used here. Use `visible.length > 0`, rather than placing a numeric length on the left of `&&`, to avoid rendering an unwanted zero.

Import `LeadResults` from a Client Component and pass `state` and `retry` from `useLeads()`. Callbacks must remain inside the client boundary. The earlier adapter expects your application to implement `/api/leads`; copying this component alone does not create that endpoint.

## Complete results component

The imports below use the types and hook from the linked mock-to-API tutorial. Keep this file alongside those examples; it is not a complete API implementation.

```tsx
'use client';

import { useState } from 'react';
import type { ApiLead } from './lead-api';
import type { LeadsState } from './use-leads';

// Teaching UI. Call from a Client Component; callbacks do not cross a server boundary.
export function LeadResults({ state, onRetry }: {
  state: LeadsState;
  onRetry: () => void;
}) {
  const [query, setQuery] = useState('');
  const normalized = query.trim().toLowerCase();
  const records: ApiLead[] = state.kind === 'ready' ? state.records : [];
  const visible = records.filter(lead => lead.name.toLowerCase().includes(normalized));

  let message: string;
  if (state.kind === 'loading') message = 'Loading leads…';
  else if (state.kind === 'error') message = state.message;
  else if (records.length === 0) message = 'No leads returned by this request.';
  else if (visible.length === 0) message = 'No leads match your search.';
  else message = `${visible.length} of ${records.length} leads shown.`;

  return (
    <section aria-label="Lead results">
      <label>
        Search lead names
        <input
          type="search" value={query}
          onChange={event => setQuery(event.target.value)}
          disabled={state.kind !== 'ready' || records.length === 0}
        />
      </label>
      {query !== '' && (
        <button type="button" onClick={() => setQuery('')}>Clear filters</button>
      )}
      {/* Keep this node mounted; announce updates without moving focus. */}
      <p role="status" aria-atomic="true">{message}</p>
      <div aria-busy={state.kind === 'loading'}>
        {state.kind === 'error' && (
          <button type="button" onClick={onRetry}>Retry loading leads</button>
        )}
        {state.kind === 'ready' && visible.length > 0 && (
          <table>
            <caption>Matching leads</caption>
            <thead><tr><th scope="col">Name</th><th scope="col">Status</th></tr></thead>
            <tbody>{visible.map(lead => (
              <tr key={lead.id}><td>{lead.name}</td><td>{lead.status}</td></tr>
            ))}</tbody>
          </table>
        )}
      </div>
    </section>
  );
}
```

## Decide what happens during refresh

This example replaces the table with a loading message when retrying and keeps the search text. That is a deliberately small policy, not a background-refresh implementation. Keeping stale rows visible requires additional state for the last successful response, the refresh request and its error. Label stale results and prevent a late response from overwriting newer data. Do not claim failed writes succeeded just because a list still displays the previous record.

## Check the transitions, not just the screenshot

Verify loading → ready, loading → error → retry → ready, and ready → empty response. Search for a name with no matches, then clear the filter and confirm the original rows return. A search consisting only of whitespace should behave as an empty query. Confirm that Retry makes a new request and cannot leave two competing responses updating the screen.

The companion static-render tests check that pending and failed requests are not labeled empty, empty successes do not expose a misleading retry action, and loaded rows use table headers and escaped text. These tests do not exercise typing, focus, request timing or screen-reader announcements; those still need browser and assistive-technology checks.

## Try the table before choosing a starter

[Try the free LeadFlow table sample](https://leadflow-table-sample.daotungduong-photos2.chatgpt.site) or [read its MIT source](https://github.com/daoduong007/leadflow-table-sample). It includes fictional records, search and status filtering. It does not include detail or pipeline screens.

The separate [LeadFlow UI Kit](https://daoduong007.gumroad.com/l/leadflow-ui-kit) adds connected table/detail/pipeline UI and customization docs for **$29, paid once**, with 14-day defect/setup support and a 14-day refund policy. It uses fictional client-side records; refresh resets edits. Your backend, authentication and persistence remain your application's work. Pipeline changes use status controls, without drag-and-drop.

---

Owner note (omit from publication): prepared 11/10/2026 after the owner deferred the independent-install step and requested subsequent plan work. Article #4 corresponds to day 39; published 11/10/2026 at https://daoduong007.hashnode.dev/react-table-loading-error-empty-states, shared on YouTube Community at https://www.youtube.com/post/Ugkx4avTRBaTvePCn87xXSkZvWXPTL8usEUz. Full example: `examples/lead-results.tsx`, alongside the existing `lead-api.ts` and `use-leads.tsx`. Tests: `node --import tsx --test project-docs/marketing/examples/lead-results.test.tsx`. No new shipped feature or backend. Topic evidence: public TanStack issue https://github.com/TanStack/table/issues/4566 reports problems handling empty data in a table example; this is an adjacent engineering signal, not evidence of purchase intent, search volume, or a LeadFlow defect. Sources and installed Next.js client-boundary/data-fetching docs checked 11/10/2026.
