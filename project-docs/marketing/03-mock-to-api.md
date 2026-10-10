# Article draft — What changes when a lead dashboard moves from mock data to an API?

A frontend demo can update a lead immediately because every record is already in memory. A real application also has requests, permissions and failed writes. Replacing the mock array is only one part of the integration.

LeadFlow's current kit uses fictional records and resets changes on refresh. It includes guidance for connecting an application-owned data layer, but no backend adapter, API route or authentication implementation.

## Agree on the data contract

Define stable unique lead IDs, allowed status values, owner identifiers and the meaning of monetary fields. Validate incoming records before rendering them. Decide how the UI handles invalid records or an unknown status rather than silently assigning a pipeline stage.

The current kit's value labels are mock USD amounts. A real application should agree on currency and units with its backend; formatting the number is separate from defining what it means.

## Replace demo states with request states

The demo's loading/error/empty selector lets you inspect those layouts. It doesn't issue a request. When integrating your API, derive those states from the actual loader. Retry should repeat the failed request. A successful empty response should show an empty dataset rather than an error message.

## Decide how writes reach the interface

Choose whether the interface waits for a confirmed server response or shows a temporary optimistic change with a rollback path. In either case, an unsuccessful mutation needs a visible outcome, and the server response should reconcile the canonical record.

The local demo update cannot report a network failure. Its activity text and timestamps are mock values; server-generated activity is needed for real history.

## Revisit pagination and selection

Client-side search operates on every loaded demo record. With server pagination, searching only the current page gives incomplete results. Send query/status criteria to the server and handle server totals or cursors.

Decide whether selection spans pages or query changes. The local kit retains selected IDs. A server bulk action must validate the records and the user's access again; client-side selection doesn't establish permission.

## Keep the public demo fictional

Use application-owned authentication and authorization for real leads. Keep secrets server-side, and keep client/customer records out of public previews. Test loading, failed writes, empty results and pagination before treating the dashboard as an operational tool.

## Inspect the UI before integrating

[Try the free table sample](https://leadflow-table-sample.daotungduong-photos2.chatgpt.site) or [inspect the source](https://github.com/daoduong007/leadflow-table-sample). It runs locally without accounts or API keys and can help you evaluate the table behavior before wiring up your own data layer.

---

Owner note: this article is an integration decision guide grounded in `kit/docs/CUSTOMIZATION.md`. It does not claim to ship an adapter or provide production-ready backend code. Add a paid CTA only when its listing exists and delivery has been checked.
