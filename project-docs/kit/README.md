# LeadFlow — Lead Dashboard UI Kit v0.1.0

A Next.js + TypeScript source starter with a connected lead table, lead detail screen and Kanban pipeline. Plain CSS, 12 fictional records, client-side interactions. Designed for developers building their own CRM interface or internal dashboard.

**This is a UI kit, not a ready-to-use CRM.** No backend, auth, database, persistence, server pagination, integrations, payment or analytics. Refresh resets the dataset. The loading/error/empty selector demonstrates UI states without making API requests. Estimated values and activities are fictional.

## Install and run

Install Node.js **20.9+** and npm, then extract the ZIP and open its `leadflow-ui-kit` folder:

```sh
npm ci
npm run dev -- --port 4322
```

Open <http://127.0.0.1:4322>. No account, API key or environment variable is required. From the original workspace, `cd kit` first. Choose a free port if 4322 is busy.

Production preview:

```sh
npm run build
npm run start -- --port 4322
```

## Included behavior

- **Table:** name/company search, status filter, six rows per page, row/page selection and bulk status changes. Filters reset to page one. Selection survives changes of page/filter; the visible notice explains that hidden selections are included. Clear selection explicitly, reset the demo or switch Demo state. Changing Demo state clears selection and exits detail.
- **Detail:** contact/company/source/value/notes, owner and status controls, mock activity. Each actual owner/status change adds activity. Changes appear in table/pipeline/metrics immediately.
- **Pipeline:** five status columns, per-card status controls, empty columns, horizontal scrolling. Works with touch and keyboard. No drag-and-drop.
- **States:** ready/loading/error/empty demonstration, retry and reset. No actual network request or save.
- **Responsive:** table/pipeline scroll inside their containers; detail stacks on narrow screens. Browser tests use Chromium desktop and mobile emulation.

The detail screen is a client view inside the workspace; it has no dedicated URL or deep link. The table filter applies to the table only. The pipeline always shows every record.

## Files and customization

| File | Responsibility |
|---|---|
| `src/lib/sample-data.ts` | Base fictional contacts, statuses and sample types |
| `src/lib/model.ts` | Extended Lead/Activity types, shared filtering, pagination, immutable updates and selection |
| `src/components/workspace.tsx` | Single client-side state owner and demo state controls |
| `src/components/lead-table.tsx` | Controlled table, selection, pagination and bulk action |
| `src/components/lead-detail.tsx` | Contact screen, assignment controls and activity |
| `src/components/pipeline.tsx` | Status columns and keyboard/touch movement |
| `src/components/shared.tsx` | Avatar, badges and status options |
| `src/app/globals.css` | Shared visual system and responsive layout |

Read [customization and API boundaries](docs/CUSTOMIZATION.md) and the [step-by-step walkthrough](docs/WALKTHROUGH.md). Watch `docs/leadflow-walkthrough.webm` in a browser or video player; it is an actual UI screencast without audio. Setup and customization are explained in the written guide.

## Checks

```sh
npm test
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

Browser tests start their own dev server on **4321** and refuse to reuse an existing server. On Linux, missing browser system libraries may require `npx playwright install --with-deps chromium` with your normal system-install permissions. Tests cover edits across views, hidden selections, filters/pagination, reset/reload, demo states, keyboard movement/focus, empty stage and mobile overflow. This does not certify Safari or every accessibility requirement.

## Troubleshooting

- Use `npm ci` with the included lockfile; do not mix package managers.
- If a port is occupied, use another port for manual preview; keep 4321 free for browser tests.
- A status change can remove a lead from the current filtered table; clear filters or open pipeline.
- A bulk action affects all selected IDs, including off-page/filtered rows. Clear selection when finished.
- Mobile tables/columns scroll horizontally. Keyboard users can focus the scroll container.
- Reload losing changes is intentional. Connecting a backend is your application's implementation task.

See [license](LICENSE.md), [third-party notices](THIRD_PARTY_NOTICES.md), [support scope](SUPPORT.md) and [changelog](CHANGELOG.md). The free sample is independently available at <https://github.com/daoduong007/leadflow-table-sample>; it is not the full kit.

## Ghi chú cho chủ sản phẩm

Kit v0.1.0 đã được làm theo scope duyệt sau khi bỏ qua lấy feedback. Giá 29 USD là giả thuyết; kit chưa có listing, checkout, giao hàng tự động hoặc khách mua. Tài liệu/support policy mô tả bản đầu; thông tin liên hệ và điều kiện bán cần được thiết lập khi mở trang bán.
