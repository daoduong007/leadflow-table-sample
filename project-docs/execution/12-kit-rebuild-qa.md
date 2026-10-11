# Kit v0.1.1 — dựng lại, QA và upload

Ngày: 10/10/2026. Người dùng cung cấp email hỗ trợ `daoduong.007@gmail.com` và yêu cầu chuẩn bị ZIP. Không tìm thấy private kit v0.1.0 trong checkout hoặc các vị trí đã tìm trên máy hiện tại, nên dựng lại theo spec đã duyệt thành **v0.1.1**. Không coi bản mới là bản sao byte-identical hoặc kế thừa kết quả QA của v0.1.0.

## Artifact hiện tại

- Source riêng: `D:/leadflow-ui-kit` (không nằm trong repo public).
- ZIP: `D:/leadflow-releases/leadflow-ui-kit-v0.1.1.zip`.
- 28 files, 2,171,830 bytes; root `leadflow-ui-kit/`.
- SHA256: `b29d24d02db55dba25efaeb48f8330dc5fc2268e00257c5ed68c89d4c56402cc`.
- File inventory/checksums nằm trong ZIP: `FILE_SHA256.json`.
- Source, lockfile, docs, license, support contact, unit/browser tests và video; không có node_modules/.next/.git/.env/test-results hoặc script capture có đường dẫn máy local.

## Kiểm tra mới thực hiện

| Kiểm tra | Kết quả |
|---|---|
| Unit model tests | 7/7 pass |
| Browser Chromium desktop/mobile | 8/8 pass |
| Typecheck | Pass |
| Production build | Pass |
| ZIP integrity | Pass |
| Clean extraction + npm ci | Pass |
| Unit/typecheck/build từ bản giải nén sạch | Pass |
| Visual QA | Đã xem desktop table/pipeline và mobile detail, frame video |
| Video | Production screencast, VP9 WebM, 18.36 giây, 1280x900, không lời |

Môi trường: Windows, Node.js 23.11.0, Next.js 16.4.0, React 19.3.0; version dependencies được khóa. Mobile là Chromium emulation, không phải Safari thật. Lần đầu 2 browser tests fail vì accessible label của Bulk status bao gồm option text; đã thêm aria-label rõ ràng và chạy lại toàn bộ 8 tests đạt. Dev server có Watchpack warning với `D:/System Volume Information`, không làm tests/build fail.

Sau clean check chỉ bổ sung ghi chú Windows PowerShell vào README/walkthrough rồi đóng gói lại. Dùng `npm.cmd` cho lệnh có `-- --port` nếu npm PowerShell wrapper bỏ flag. Executable source/lockfile không đổi sau clean check; không chạy lại tests cho thay đổi docs.

## Gumroad

Draft: https://gumroad.com/products/rgoywv/edit. Đã cập nhật v0.1.1, email hỗ trợ, cover/thumbnail thật của bản mới, buyer instructions và receipt message. Receipt preview hiển thị đúng `daoduong.007@gmail.com`.

ZIP đã upload vào buyer content, không phải cover hay download public của free sample. Xác minh file card và link Download còn hiện sau reload. Tải lại bằng browser tool bị timeout, chưa có file tải xuống để đối chiếu hash. Chưa coi đây là test purchase/delivery thành công.

Gumroad vẫn báo chưa kết nối payout và chưa thể publish. Support/refund 14 ngày và giá 29 USD vẫn là đề xuất cần chốt trước mở bán; chưa bật refund policy trong tài khoản. Không có giao dịch, doanh thu, bài đăng hoặc lịch tự động phát sinh.
