# Customize and connect your application

## Start with the data model

`sample-data.ts` contains 12 fictional contacts. `model.ts` extends each record with `value` (mock USD), `notes` and `activity`. IDs must be stable and unique; every row, selected record, activity and detail lookup depends on them. Activity IDs must also be unique within each lead.

Replace `initialLeads` in `model.ts` with records matching `Lead`. Update `owners` for the owner dropdown. If changing statuses, update the union/status array in `sample-data.ts`, status colors in `globals.css`, and the open/won metric rules in `workspace.tsx`. All columns read the same status array. Value display uses `formatValue`; change its currency/locale and the corresponding UI copy together.

`updateLead` changes status/owner immutably and adds a “Just now (demo)” activity. It does not validate permissions, save data or create a real audit trail. `updateSelected` applies this function to every selected ID. `paginate` performs client-side slicing, not server pagination. Page size is six in `lead-table.tsx`.

## Component boundaries

`Workspace` owns records, active lead ID, view, filter, current page and selected IDs. Table/detail/pipeline receive records and callbacks; keep edits flowing through the parent to avoid separate copies becoming inconsistent.

`LeadTable.data` is filtered records; `total` is the full dataset count. Selection belongs to Workspace and survives filters/pages. Select-visible toggles only IDs on the current page and preserves other selections. A bulk change can make selected rows disappear from a status filter; pagination clamps to a valid page. Pipeline does not use the table's filter.

`LeadDetail` focuses its heading on entry. Back returns to the previous view and focuses its navigation control. Pipeline status movement restores focus to the moved card's select after rendering. Preserve labels and these focus behaviors when changing markup.

## Styling

All UI styling is in `src/app/globals.css`. Edit the root variables for ink, muted text, teal, borders and background. Table min-width is 850px; pipeline uses five columns with a minimum grid width of 1180px. Their scroll containers keep the page within a narrow viewport. Detail switches to a stacked layout below 640px; assignment comes first visually on mobile. Reduced-motion preference disables the loading animation.

## Connecting an API

This release contains no API route, backend adapter or auth. Use the boundaries below when implementing your own backend:

1. Fetch your records in an application-owned loader. Validate the response shape, allowed statuses, unique IDs and numeric values before storing it in Workspace state. Treat unknown/malformed records as errors.
2. Replace the simulated `demo` control with real loading/error/empty state derived from your request. Retry should repeat that request. The current retry only returns to the in-memory mock dataset.
3. Replace `edit` and the bulk handler with server mutations. Decide whether to wait for confirmation or implement optimistic changes with rollback. The current synchronous setter cannot report a network failure.
4. Let the backend authorize every read/write and enforce ownership. Use server-generated timestamps and activity IDs for real history; current mock activity text is not an audit log.
5. If using server pagination, carry server totals and cursors separately. Search/status filters must be sent to the server; filtering the currently loaded page does not search your whole database.
6. Define whether selected IDs can span pages or query changes. The current local behavior retains them. For server datasets, make that policy explicit and re-check permissions/existence during bulk operations.

Keep secrets and credentials server-side. Do not replace mock contacts with real client records in a public demo. No integration, API endpoint or deployment provider is implied by these instructions.

## Deployment

Build and run with Node as documented in the README. This app also supports Next.js static export because it has no server feature: add a `next.config.mjs` with `export default { output: 'export' };`, run the build, then serve the generated `out` folder on your chosen static host. Do not use `next start` for a static export. Choose your own private source hosting and access policy; publishing paid source publicly gives visitors access to it.
