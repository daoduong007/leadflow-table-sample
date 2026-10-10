# LeadFlow UI Kit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Bản kit nhỏ có table, detail và Kanban tương tác dùng chung dữ liệu giả, chạy local và đóng gói được.

**Architecture:** Kit riêng bên cạnh sample public. Model thuần xử lý pagination và immutable updates; workspace giữ state, view components nhận props. Mọi update client-only, không persistence.

**Tech Stack:** Next.js 16.4.0, React 19.3.0, TypeScript, plain CSS, Node test runner, Playwright Chromium.

## Global Constraints

- Scope theo spec 2026-10-10-leadflow-kit-design.md; không public paid source.
- Node >=20.9, npm ci bằng lockfile, không thêm runtime dependency.
- Không backend/API/auth; UI labels nêu rõ mock và reset khi refresh.
- Không coi bỏ feedback là đạt gate nhu cầu; checkout/seller còn ngoài lượt này.

### Task 1: Shared model

Files: kit/src/lib/model.ts, sample-data.ts; kit/tests/model.test.ts.
Interface: Lead có value, notes, activity; updateLead(data, id, patch), updateSelected(data, ids, status), paginate(data, page, size), togglePageSelection(selected, visibleIDs).

- [x] Viết assertions pagination clamping, nonmutation, detail status/owner activities, unknown ID, selection qua trang/filter và bulk selected-only.
- [x] Chạy npm test, xác nhận fail với stub trả dữ liệu không đổi/trang đầu.
- [x] Implement functions thuần immutable, mỗi status/owner change thêm một activity, no-op không thêm.
- [x] Chạy npm test đến pass. Ví dụ: assert.equal(updateLead(seed, 'L001', {status:'Won'})[0].status, 'Won').

### Task 2: Workspace and views

Files: kit/src/components/workspace.tsx, lead-table.tsx, lead-detail.tsx, pipeline.tsx, shared.tsx; kit/src/app/page.tsx, layout.tsx, globals.css; kit/tests/kit.spec.ts, playwright.config.ts.
Interface: controlled props đọc cùng Lead[]; callbacks onOpen(id), onUpdate(id, patch), onQuery/onStatus, onSelection.

- [x] Viết browser flows: paginate/select hidden lead/bulk, detail edit→table→pipeline, keyboard pipeline→detail, all demo states/retry/reset, mobile no page overflow.
- [x] Chạy browser tests với blank page, xác nhận fail thiếu heading/controls trên cổng 4321 riêng, reuse false.
- [x] Implement shared workspace state và 3 view như spec. Filter đưa về page=1, selection persistent theo ID, detail autofocus heading/back focus navigation, labels trên controls.
- [x] Chạy tests desktop/mobile, typecheck/build; xem screenshot và sửa lỗi quan sát được.

### Task 3: Self-service release

Files: kit/README.md, docs/CUSTOMIZATION.md, docs/WALKTHROUGH.md, LICENSE.md, SUPPORT.md, CHANGELOG.md; releases/leadflow-ui-kit-v0.1.0.zip; execution/11-kit-qa.md.

- [x] Viết setup/customization/API boundary/license/support/changelog theo hành vi thật. Không cam kết custom implementation.
- [x] Ghi screencast local thực bằng Playwright recordVideo, kèm hướng dẫn chữ và nêu video không lời.
- [x] Fresh-folder unzip/npm ci/test/typecheck/build xác nhận package đủ file; không .env/.git/deps/build artifacts.
- [x] Cập nhật execution log và bàn giao local preview/ZIP; không đánh dấu listing/checkout hoặc doanh thu hoàn thành.

Không có repo Git cho paid kit; không tạo commit hoặc push paid source. Thực hiện inline theo yêu cầu người dùng.
