# Article draft — Keeping a lead table, detail screen and pipeline in sync

A lead can appear in several places: a row in a table, a detail view and a card in a pipeline. If its status changes from Qualified to Won, each view should show the same result.

For the LeadFlow frontend demo, I keep the lead records in a parent workspace. The table, detail screen and pipeline receive data and callbacks from that workspace. React describes this approach as lifting shared state to a common parent. [React: sharing state between components](https://react.dev/learn/sharing-state-between-components).

## Store the record once

The detail selection stores a lead ID. The detail view looks up the current record by that ID. It doesn't keep another full copy of the selected lead that can become stale.

The table gets a filtered projection of the records. Pipeline columns group the same records by status. Summary metrics are calculated from those records. Keeping derived values out of independent state reduces synchronization work. [React: choosing the state structure](https://react.dev/learn/choosing-the-state-structure).

In this demo, the table's search/status filters intentionally apply only to the table. Pipeline shows the complete dataset. That choice should be visible in the interface and documentation.

## Route edits through the same owner

A detail edit or pipeline status control calls the workspace's edit handler with a lead ID and the proposed change. The handler updates the record immutably. The rendered views then read that updated record.

In the kit, actual owner/status changes also add a mock activity entry. Re-selecting the current value doesn't create another activity entry. This history is a UI demonstration; it is not a server audit trail.

## Decide what hidden selection means

Pagination and filtering can hide selected rows. LeadFlow retains selected IDs across those changes and explicitly says bulk actions include hidden selections. The select-visible checkbox only affects rows on the current page.

Another application may clear selection when a query changes. Either choice needs a clear interface. When using server data, bulk operations must also check permissions and record existence on the backend.

## Check an edit across views

Open a lead, change its status, return to the table, then inspect its pipeline column and summary metrics. Check what happens when a status change removes the row from an active filter. In this kit, reloading resets the fictional dataset because there is no persistence layer.

These checks catch inconsistencies that a screenshot of each screen cannot show.

## Try the free table sample

[Open the free LeadFlow table demo](https://leadflow-table-sample.daotungduong-photos2.chatgpt.site) or [run its MIT-licensed source](https://github.com/daoduong007/leadflow-table-sample).

The public sample contains the table's search/filter interactions. Connected detail/pipeline views are in the separate fuller kit, which has been built but is not yet available for purchase.

---

Owner note: use `sales/assets/desktop-pipeline.png` with a caption identifying it as the separate kit, not the free demo. Replace the final availability sentence only after a real paid listing is verified. This draft contains no paid source code.
