# Keep a lead table, detail view and Kanban board in sync with React

A lead is marked Won in its detail view, but the table still says Qualified and its Kanban card stays in the old column. Each screen looks correct on its own; the problem appears when you move between them.

This can happen when each view owns a separate copy of the same record. A more manageable design gives the records one owner and lets each view read from that owner.

This article uses LeadFlow, a frontend dashboard with fictional records, as the example. The principles apply to other React dashboards too. The free sample contains the table; the separate paid kit adds connected detail and pipeline views. Product links are at the end. This article was prepared with AI assistance and checked against the current kit implementation.

## Give the records one owner

The workspace holds the lead records. The table receives a filtered list, the detail view receives the record matching the selected ID, and the pipeline groups records by status. Edits go back to the workspace through callbacks.

This follows React's [sharing state between components](https://react.dev/learn/sharing-state-between-components) guidance: move shared state to the closest common parent and pass values and handlers to its children.

```text
                   Workspace: lead records
                     /        |        \
                  Table     Detail    Pipeline
                     \        |        /
                      edit(id, change)
```

There is no need for one effect to copy a detail edit into table state and another to update pipeline state. The views render projections of the same records.

## Store the selected ID; derive the selected record

Here is a small teaching example, independent of the kit's source. These fragments belong inside a client component; they show state ownership rather than a complete dashboard.

```tsx
type Status = "New" | "Qualified" | "Won";
type Lead = { id: string; name: string; status: Status };

const [leads, setLeads] = useState<Lead[]>([
  { id: "example-1", name: "Example lead", status: "Qualified" },
]);
const [selectedId, setSelectedId] = useState<string | null>(null);
const [statusFilter, setStatusFilter] = useState<Status | "All">("All");

const selectedLead = leads.find(lead => lead.id === selectedId);
const tableRows = leads.filter(
  lead => statusFilter === "All" || lead.status === statusFilter,
);
const wonCards = leads.filter(lead => lead.status === "Won");
```

Import `useState` from React when trying the example. The three statuses keep the example small; LeadFlow's pipeline has five stages.

Keeping a full selected-lead object in another state variable would create a second copy to maintain. Looking up the ID gives the detail view the latest record on each render. If that record no longer exists, render an unavailable-record state or return to the list.

The same reasoning applies to counts and totals. Calculate them from the records instead of incrementing several independent counters whenever something changes. React's [state structure guide](https://react.dev/learn/choosing-the-state-structure) discusses avoiding redundant and duplicated state.

## Send edits through the same handler

```tsx
function changeStatus(id: string, nextStatus: Status) {
  setLeads(previous => previous.map(lead =>
    lead.id === id && lead.status !== nextStatus
      ? { ...lead, status: nextStatus }
      : lead,
  ));
}
```

Both a detail status control and a pipeline card control can call this handler. The functional update reads the previous state, and the changed record is replaced immutably. The next render supplies the new status to every view.

In LeadFlow, a status or owner change also adds a mock activity entry. Choosing the existing value adds no entry. That history demonstrates UI behavior; it is not a server audit trail. Pipeline cards move through a status dropdown rather than drag and drop.

## Make filters and selection explicit

Shared records do not require every view to use the same filters. In LeadFlow, search and status filters apply to the table. The pipeline and summary metrics use the complete dataset.

Suppose the table is filtered to Qualified leads. Open one, change it to Won, and return to the table. Its row should disappear from that filtered result. Its card should now be in Won, and the won count should reflect the change. A disappearing row can be the correct outcome.

Selection needs a separate decision. LeadFlow retains selected IDs across filters and pages. The visible-page checkbox affects only that page, while a bulk action includes selected leads hidden elsewhere. The interface states this scope. A different product might clear selection when filters change; choose deliberately and explain the behavior before users apply a bulk edit.

## Test transitions, not just screens

Use this checklist when checking a connected dashboard:

1. Change a lead from Qualified to Won in detail. Check its table status, pipeline column and won count.
2. Repeat with a Qualified table filter active. Confirm the row leaves that result while the record remains available in the pipeline.
3. Change status from the pipeline. Reopen the detail view and check the same record.
4. Select leads across pages, hide some with a filter, then apply a bulk change. Check all selected IDs.
5. Choose the current status again. Confirm the mock activity list has no extra entry.
6. Refresh the demo. Confirm that the fictional records reset, as the interface promises.

## Know where this design stops

One client-side owner keeps these views consistent within the running workspace. It does not provide persistent storage or coordinate changes made by another user.

When adding an API, decide how failed writes, concurrent edits and server responses should update the client cache. With server pagination, a loaded page is not the complete dataset: search, totals and bulk operations need server behavior appropriate to their scope. The backend must validate record access and allowed changes.

LeadFlow currently includes no backend, authentication or persistence. Its loading and error controls simulate UI states; they do not exercise network requests.

## See the views in action

[Watch the silent LeadFlow walkthrough on YouTube](https://youtu.be/ZPnR-D8Gg-0). It shows the separate paid kit with fictional data.

## Try the table, then inspect the connected kit

[Try the free table sample](https://leadflow-table-sample.daotungduong-photos2.chatgpt.site) or [inspect its MIT-licensed source](https://github.com/daoduong007/leadflow-table-sample). It includes search and status filtering, so you can evaluate the table before considering the fuller dashboard.

For connected table, detail and pipeline views, the separate [LeadFlow UI Kit is available for $29, paid once](https://daoduong007.gumroad.com/l/leadflow-ui-kit). It uses fictional data and includes source, setup documentation and a walkthrough. It has 14-day support for defects/setup and a 14-day refund policy; backend integration and custom implementation are outside that scope.
