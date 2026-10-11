# LeadFlow — Free lead table sample

A small Next.js + TypeScript starter for developers building their own lead dashboard. Search names/companies, filter by status, combine both and clear filters. Includes 12 fictional contacts and a responsive, horizontally scrollable table.

**This is a free sample, not a working CRM.** No sign-in, backend, database, saving, detail page, Kanban, integrations or checkout. The summary numbers describe the full mock dataset, not sales or usage. Filters reset on refresh. No analytics, marketing email capture or external requests from the app.

Try the [live demo](https://leadflow-table-sample.daotungduong-photos2.chatgpt.site). Download the original v0.1.0 ZIP from the demo, or clone this repository for the current README. No email or purchase required.

## Full LeadFlow UI Kit

Need a connected table, detail and Kanban flow? [View LeadFlow UI Kit v0.1.2 on Gumroad — $29 USD, one-time](https://daoduong007.gumroad.com/l/leadflow-ui-kit).

The paid kit adds pagination, row/page selection, bulk status changes and shared edits across the three views. Includes source, setup/customization guides and a short silent walkthrough. It uses mock data; backend, authentication and persistence are not included. Includes 14 days of defect/setup support and a 14-day money-back guarantee; see the listing for scope and license terms. Gumroad may display the price in your local currency.

This free sample works independently and requires no purchase. See [project progress](PROJECT_PROGRESS.md) for release status.

## Plans and project documents

The [project documents](project-docs/README.md) include the original and current plans, research, implementation notes, recorded QA, kit usage documentation, and draft sales/marketing materials. The Word/PDF files preserve the original plan. Paid kit source, delivery ZIP and video are separate and are not included here.

## Run locally

Use Node.js **20.9 or newer** and npm. Tested with Node 20.20.2.

```sh
git clone https://github.com/daoduong007/leadflow-table-sample.git
cd leadflow-table-sample
npm ci
npm run dev -- --port 4318
```

Open <http://127.0.0.1:4318>. If you extracted the ZIP, enter its `lead-table-sample` folder and skip the clone step. If using the original plan workspace, enter `sample`. No environment variables or account required. A busy port can be replaced with another unused port.

For a production preview:

```sh
npm run build
npm run start -- --port 4318
```

## Customize

- `src/lib/leads.ts`: `Lead` type, fictional records, statuses and `filterLeads`.
- `src/components/lead-table.tsx`: labelled search/status controls, result count and table.
- `src/app/globals.css`: colors, layout, typography and mobile breakpoints.
- `src/app/layout.tsx`: title, description and document language.

Replace the `leads` array with records matching `Lead`. IDs must be unique. Use `example.com` emails while demonstrating; don't add real client information to a public repository. Search currently matches **name/company**, not owner/email/source. Status labels are New, Qualified, Proposal, Won and Lost.

For a real API, fetch records outside this sample and pass them into a component you adapt. Client filtering works only on records loaded in the browser; it does not query a full server dataset. Backend authorization, privacy and server pagination remain your application's responsibility.

## Checks

```sh
npm test
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

Browser tests use their own dev server on **4317**, which must be free. Desktop and mobile tests cover search/status/reset, empty results, runtime errors and page overflow. Mobile emulation uses Chromium; it is not a real-device Safari test. On Linux, missing browser libraries may require `npx playwright install --with-deps chromium` with your normal system-install permissions.

## Troubleshooting

- Port in use: select another port for manual preview; release 4317 before browser tests.
- Dependencies differ: use `npm ci` with the included lockfile.
- Search returns no rows: clear filters; both search and status apply together.
- Table is wider than your phone: scroll the table sideways; controls and page stay within the viewport. The table scroll region supports keyboard focus.
- Filter state disappears after refresh: intentional; there is no persistence.

## Feedback for validation

Does your current project need only a table, or a connected table/detail/pipeline? What did you have to wire together yourself in your last dashboard? Which free starter already solves that well? Feedback and tester use have not yet been collected.

## License and assets

Original sample code is MIT licensed; see `LICENSE`. Dependency licenses remain their own; this license does not replace them. No external font, image or icon asset is bundled. The paid kit is sold separately and has its own license; paid source and delivery files are not included in this repository. Demand and pricing have not yet been validated by real sales.

Stack versions are locked in `package-lock.json`. Installation approach follows the [official Next.js documentation](https://nextjs.org/docs/app/getting-started/installation).

## Ghi chú

Đây là sample miễn phí để thu phản hồi theo plan. Demo public: <https://leadflow-table-sample.daotungduong-photos2.chatgpt.site>. Có thể tải ZIP ngay trên demo. Source: <https://github.com/daoduong007/leadflow-table-sample>. Ghi chú trong ZIP v0.1.0 phản ánh trạng thái trước khi publish. Có thể tự sửa và dùng trong dự án theo license. Không cam kết hỗ trợ tùy biến hoặc cài đặt hộ.
