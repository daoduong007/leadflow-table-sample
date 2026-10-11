# Replace mock dashboard data with an API: validation, request states and retry

A frontend demo can update a lead immediately because every record is already in memory. A real application also has requests, permissions and failed writes. Replacing the mock array is only one part of the integration.

LeadFlow's current kit uses fictional records and resets changes on refresh. It includes guidance for connecting an application-owned data layer, but no backend adapter, API route or authentication implementation.

This guide includes an independent teaching example, prepared with AI assistance and checked with TypeScript and adapter tests. It is not an extract of the paid kit. The endpoint `/api/leads` below is illustrative: your application must implement it and authorize access.

## Agree on the data contract

Define stable unique lead IDs, allowed status values, owner identifiers and the meaning of monetary fields. Validate incoming records before rendering them. Decide how the UI handles invalid records or an unknown status rather than silently assigning a pipeline stage.

The current kit's value labels are mock USD amounts. A real application should agree on currency and units with its backend; formatting the number is separate from defining what it means.

For this example, the endpoint returns a JSON array using this smaller contract. `valueCents` is a nonnegative safe integer in USD cents; this differs from the kit's mock `value` field and needs an explicit mapping if you use the kit.

```ts
export type LeadStatus = 'New' | 'Qualified' | 'Proposal' | 'Won' | 'Lost';
export type ApiLead = {
  id: string;
  name: string;
  status: LeadStatus;
  valueCents: number;
};
```

A TypeScript annotation does not validate JSON received over the network. Start with `unknown`; return a new object with only accepted fields. Validate the whole response before replacing the current dataset. Reject duplicate IDs so one row cannot accidentally stand in for another.

```ts
const statuses = ['New', 'Qualified', 'Proposal', 'Won', 'Lost'] as const;

export function parseLeads(payload: unknown): ApiLead[] {
  if (!Array.isArray(payload)) throw new Error('Expected an array of leads');
  const ids = new Set<string>();
  return payload.map((item: unknown) => {
    if (typeof item !== 'object' || item === null) throw new Error('Invalid lead');
    const row = item as Record<string, unknown>;
    if (typeof row.id !== 'string' || !row.id.trim() || ids.has(row.id)) {
      throw new Error('Lead IDs must be nonempty and unique');
    }
    if (typeof row.name !== 'string' || !row.name.trim()) throw new Error('Invalid lead name');
    if (typeof row.status !== 'string' || !statuses.some(status => status === row.status)) {
      throw new Error('Unknown lead status');
    }
    if (typeof row.valueCents !== 'number' || !Number.isSafeInteger(row.valueCents) || row.valueCents < 0) {
      throw new Error('Expected a nonnegative safe integer for valueCents');
    }
    ids.add(row.id);
    return { id: row.id, name: row.name, status: row.status as LeadStatus, valueCents: row.valueCents };
  });
}
```

## Replace demo states with request states

The demo's loading/error/empty selector lets you inspect those layouts. It doesn't issue a request. When integrating your API, derive those states from the actual loader. Retry should repeat the failed request. A successful empty response should show an empty dataset rather than an error message.

The [Fetch API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) explains why you must check HTTP status: a response such as 403 or 500 does not itself reject the fetch promise.

```ts
export async function loadLeads(signal: AbortSignal): Promise<ApiLead[]> {
  const response = await fetch('/api/leads', { signal, cache: 'no-store' });
  if (!response.ok) throw new Error(`Could not load leads (HTTP ${response.status})`);
  const payload: unknown = await response.json();
  return parseLeads(payload);
}
```

For a small client-only demonstration, put this hook in a separate file, import `loadLeads` and `ApiLead` from your adapter, and use its `state` to choose the layout:

```tsx
'use client';
import { useEffect, useState } from 'react';
import { loadLeads, type ApiLead } from './lead-api';

type LeadsState =
  | { kind: 'loading' }
  | { kind: 'error'; message: string }
  | { kind: 'ready'; records: ApiLead[] };

export function useLeads() {
  const [state, setState] = useState<LeadsState>({ kind: 'loading' });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    setState({ kind: 'loading' });
    loadLeads(controller.signal).then(
      records => { if (active) setState({ kind: 'ready', records }); },
      () => { if (active) setState({ kind: 'error', message: 'Could not load leads. Try again.' }); },
    );
    return () => { active = false; controller.abort(); };
  }, [attempt]);
  return { state, retry: () => setAttempt(value => value + 1) };
}
```

Render an empty layout only when `state.kind === 'ready'` and `state.records.length === 0`. An error layout can call `retry()` from its button. This version deliberately replaces previous content with a loading state on retry.

Cleanup cancels the request and marks its result inactive, so an obsolete request cannot overwrite a later attempt or update an unmounted consumer. This follows [React's Effect cleanup guidance](https://react.dev/reference/react/useEffect). React also describes tradeoffs of manual fetching in Effects. For a larger application, use your framework's loader or a client data library to manage caching and revalidation. The hook above has no cache, pagination, mutation or offline behavior.

In Next.js, keep this interactive hook behind a client boundary. A server-side loader is another option; follow the [data-fetching guide](https://nextjs.org/docs/app/getting-started/fetching-data) for your installed version. This article does not require adding an API route to the free sample.

## Decide how writes reach the interface

Choose whether the interface waits for a confirmed server response or shows a temporary optimistic change with a rollback path. In either case, an unsuccessful mutation needs a visible outcome, and the server response should reconcile the canonical record.

The local demo update cannot report a network failure. Its activity text and timestamps are mock values; server-generated activity is needed for real history.

For the first integration, waiting for server confirmation is a smaller state machine: disable the affected edit while saving, display a failure beside it, and replace the canonical record with the confirmed server response. Do not let a background list refresh silently undo a recent successful edit. If you choose optimistic writes instead, define rollback and conflict handling before allowing concurrent edits.

## Revisit pagination and selection

Client-side search operates on every loaded demo record. With server pagination, searching only the current page gives incomplete results. Send query/status criteria to the server and handle server totals or cursors.

Decide whether selection spans pages or query changes. The local kit retains selected IDs. A server bulk action must validate the records and the user's access again; client-side selection doesn't establish permission.

## Keep the public demo fictional

Use application-owned authentication and authorization for real leads. Keep secrets server-side, and keep client/customer records out of public previews. Test loading, failed writes, empty results and pagination before treating the dashboard as an operational tool.

## Check the adapter before connecting the screens

Exercise a valid list and `[]`, a non-array response, missing fields, duplicate IDs, an unknown status and an unsafe amount. Also test 403/500 responses, invalid JSON, network failure and cancellation. The standalone example passed seven adapter tests covering these cases; its React hook was typechecked, but it has not been validated against a live backend or tested in a browser. Write your own integration tests for authorization, retries, stale responses and mutations before deploying a real application.

## Inspect the UI before integrating

[Try the free table sample](https://leadflow-table-sample.daotungduong-photos2.chatgpt.site) or [inspect the source](https://github.com/daoduong007/leadflow-table-sample). It runs locally without accounts or API keys and can help you evaluate the table behavior before wiring up your own data layer.

If you need connected table/detail/pipeline UI, the separate [LeadFlow UI Kit](https://daoduong007.gumroad.com/l/leadflow-ui-kit) is $29, paid once. It includes source and customization guidance, with 14-day support for defects/setup and a 14-day refund policy. Your backend, authentication and persistence remain your application's work. Pipeline movement uses status controls rather than drag and drop.

---

Owner note (omit from publication): published 10/10/2026 at https://daoduong007.hashnode.dev/replace-mock-dashboard-data-with-api after the user's instruction. Public title/subheading, four TypeScript code blocks, CTA links and tags verified. This owner note was excluded. Standalone runnable files: `examples/lead-api.ts`, `examples/use-leads.tsx`, `examples/lead-api.test.ts`. Run `node --import tsx --test project-docs/marketing/examples/lead-api.test.ts` and `npm run typecheck` from the sample repository. The tutorial adapter is separate from the product; no backend capability was added to the shipped kit. Sources checked 10/10/2026, including the installed Next.js data-fetching/client-boundary guides. No real user question or search volume has been established for the article.
