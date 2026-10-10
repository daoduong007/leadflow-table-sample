# LeadFlow UI Kit v0.1.0 — QA và bàn giao

Ngày thực hiện: 10/10/2026. Người dùng chủ động bỏ qua feedback và chấp thuận làm kit. Không xem đây là gate nhu cầu đã đạt. Source trả phí ở kit/ riêng; không public source hoặc tạo listing trong lượt này.

## Phạm vi đã bàn giao

- Table search/status, phân trang 6, chọn row/page, giữ selection giữa trang/filter, bulk status cho mọi selected ID với notice bao gồm lead ẩn.
- Detail contact/company/source/value/notes, sửa owner/status và mock activity; table/pipeline/metrics dùng chung state.
- Pipeline 5 cột, status select cho touch/keyboard, cột rỗng, khôi phục focus sau chuyển cột.
- Demo ready/loading/error/empty, retry và reset; refresh reset, không backend/persistence. Đổi demo state xóa selection và thoát detail.
- Responsive table/pipeline cuộn nội bộ, detail stack trên mobile; labels, heading focus, back focus và live update notice.
- README, customization/API boundary, walkthrough chữ, WebM không lời 23.68 giây 1280×900, license, notices, support scope và changelog.

## Kết quả kiểm tra thực

Môi trường Node 20.20.2; Next.js 16.4.0; React 19.3.0; lockfile đi kèm. npm ci báo 0 vulnerabilities lúc cài, không xem là chứng nhận bảo mật.

| Kiểm tra | Kết quả |
|---|---|
| Model tests | 7/7 pass |
| Playwright desktop/mobile Chromium | 8/8 pass |
| Typecheck | Pass |
| Production build | Pass |
| Review ảnh table/detail/pipeline desktop/mobile | Đã xem, không có tràn trang trong tests |
| Review độc lập | Không Critical/Important; một lệch docs selection đã sửa |
| Unzip ở thư mục mới + npm ci | Pass |
| Unit tests từ ZIP đã giải nén | 7/7 pass |
| Typecheck/build từ ZIP đã giải nén | Pass |
| ZIP integrity + required docs/video/license + file parity | Pass, 27 files |
| Video codec/duration/frame | VP9 WebM, 23.68s, video-only; frame đã xem |

Đã quan sát 6 model tests fail với stub trước implementation. Browser tests fail trên blank page đúng cổng 4321 trước UI. Khi nối UI, đã sửa label status rõ ràng và test locator trùng route announcer của Next; luồng desktop/mobile cuối đã pass. Hai assertions bổ sung kiểm tra filter có sẵn và empty-column/focus. Không tuyên bố mọi dòng code có regression test riêng.

Review độc lập còn kiểm tra overflow của table/detail ở 320/375/640/641/768px và movement trên production. Mobile là Chromium emulation, chưa kiểm tra Safari thật hoặc audit accessibility đầy đủ. Screencast quay app production; không giả quay cài đặt terminal. Setup/customization nằm trong tài liệu chữ.

Sau review chỉ sửa README và walkthrough để ghi hành vi selection khi đổi demo state; executable source không đổi. Đã đóng gói lại, kiểm tra mọi file ZIP khớp source và cập nhật hai docs trong thư mục kiểm tra. Không chạy lại các tests không liên quan tới thay đổi docs.

## Artifact

Preview local: http://127.0.0.1:4322 (server production, chưa URL share public cho kit).

ZIP: ../releases/leadflow-ui-kit-v0.1.0.zip

SHA256: 1548ad7d544c426d4ce6322a3c6f359a84bae3d13db6344f09f5911a8981e4e0

27 files, 2669542 bytes. Không có node_modules/.next/.git/.env/test-results/tsbuildinfo. Không commit/push kit vào repo sample.

## Bước tiếp theo chưa thực hiện

Thiết lập seller/KYC/payout thực, support contact và điều kiện bán; trang bán với giá thử 29 USD; upload ZIP, test checkout/delivery theo nền tảng. Chưa có listing, khách mua, doanh thu, payout hoặc bằng chứng sẵn sàng trả tiền. Không đặt mua domain/dịch vụ trả phí trong lượt này.
