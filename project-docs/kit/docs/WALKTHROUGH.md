# Setup, customization and UI walkthrough

## 1. Set up

Extract the purchased ZIP, enter `leadflow-ui-kit`, use Node 20.9+, run `npm ci`, then `npm run dev -- --port 4322`. Open localhost:4322. There are no environment variables or seller accounts needed to run the UI. Source and docs are local files; no subscription is involved in the kit.

## 2. Explore the table

The initial dataset has 12 fictional leads, six per page. Search “harbor” to see one company. Clear filters. Select Mina Chen on page one and Jules Martin on page two; the selection notice shows two records across pages. Filter to another company: both selections remain. A bulk status operation affects both IDs, even if hidden. Clear selection when finished.

## 3. Open a lead

Click Mina Chen. The detail screen shows contact, source, value, notes and mock activity. Change owner to Jordan Lee and status to Won. Each actual change adds an activity. Go back: the table owner/status and metrics reflect the changes.

## 4. Use pipeline

Click Pipeline. Five columns represent the status array. Move Mina Chen with the per-card status select; the card appears in the target column, with keyboard focus preserved on the moved control. Open the card to verify detail. Move Omar Malik from Lost to New to see an empty Lost column. There is no drag-and-drop interaction.

## 5. Preview states and reset

Changing Demo state clears the current selection and exits detail. Choose Loading from Demo state: no fetch occurs, and the label describes a simulation. Choose Error and use Retry demo to return to ready. Choose Empty to preview a dataset-empty screen. Reset demo restores contacts, filters, selections and updates. Reload also resets data.

## 6. Customize safely

Open `src/lib/model.ts`. Change a fictional record's notes/value or the owner list, then inspect the UI. Change root CSS variables for branding. Keep ID/status contracts consistent between components. Read `CUSTOMIZATION.md` before connecting a real API, authorization or persistence.

## Video

`leadflow-walkthrough.webm` is a silent UI screencast, recorded from the production build of this release. It demonstrates search, detail edits, shared table/pipeline state, movement and demo error/retry. Installation/customization are explained in this document; the video does not simulate a terminal installation. Controls and visible labels are in English.
