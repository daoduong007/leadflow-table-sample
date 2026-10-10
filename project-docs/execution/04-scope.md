# Ngày 4 — Scope và mockup đề xuất

Ngày viết: 10/10/2026. Bám theo sản phẩm đã được chọn trong plan; chưa phải kết quả kiểm chứng nhu cầu. [Wireframe ba màn hình](04-wireframe.svg) là hình tĩnh với dữ liệu giả.

## Sample trước, kit sau gate

Sample miễn phí: Next.js + TypeScript, một lead table; tên/công ty/trạng thái/owner; tìm tên/công ty và lọc trạng thái; empty state; README; dữ liệu giả. Giới hạn 4–6 giờ nếu gate ngày 7 chưa đủ mạnh. Sample không cần tài khoản/email để xem.

Kit có điều kiện: table thêm pagination/chọn lead; detail với owner/status/activity giả; pipeline chuyển trạng thái cùng data model; mobile, loading/error/empty; docs, walkthrough và policy. Giá giả thuyết 29 USD theo plan.

## Hành vi cần thống nhất

- Trạng thái: New → Qualified → Proposal → Won/Lost; cho phép đổi trực tiếp, không áp workflow backend.
- Mỗi lead có ID ổn định; table/detail/pipeline đọc cùng nguồn dữ liệu trong bộ nhớ.
- Đổi status ở detail hoặc pipeline phản ánh ngay tại table; refresh reset dữ liệu và có nhãn giải thích.
- Filter mới đưa về trang đầu; selected IDs cần xử lý rõ khi đổi trang/filter; không quảng cáo server bulk-action.
- Pipeline có nút đổi status dùng được bằng bàn phím; drag/drop chỉ thêm khi đảm bảo hoạt động và QA cột trống/mobile.
- Chỉ minh họa loading/error bằng chế độ demo; không giả vờ đã có API thật.
- Chưa chọn phiên bản dependency qua số phiên bản nhớ lại; khóa phiên bản thực tại bước sample và ghi môi trường đã kiểm thử.

## Ngoài phạm vi

Backend, login, DB, CRM sync, email, billing riêng, AI, nested pipeline, auth/permissions production, deploy hộ, custom feature. Không đưa logo/ảnh đối thủ vào release.

## Câu hỏi dùng để thử mockup

Trong dự án gần nhất của bạn, ba màn hình này có cùng xuất hiện không? Việc nào hiện vẫn phải tự ghép? Nếu đã dùng starter miễn phí, phần nào làm bạn phải sửa? Nếu chỉ cần table, bản đầy đủ này có thể không phù hợp — ghi nhận để thu nhỏ scope.
