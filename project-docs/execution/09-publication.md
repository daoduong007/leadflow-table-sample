# Phát hành sample — 10/10/2026

## Phạm vi đã được yêu cầu

Tiếp tục ngày 12 của plan: demo công khai, source miễn phí và kiểm tra license. Giữ bảng lead đã duyệt; không xây bản trả phí hoặc backend. Bản hosting riêng ở `sites/leadflow-sample`, source người dùng ở `sample`.

## Checklist thực hiện

- [x] Đăng ký Site, lưu ID hosting; bật audience public theo bước demo công khai trong plan.
- [x] Build static và kiểm tra hành vi trên bản export.
- [x] Đồng bộ source hosting, lưu version và deploy thành công.
- [x] Kiểm tra URL demo và ZIP bằng truy cập không đăng nhập.
- [x] Repo GitHub public: https://github.com/daoduong007/leadflow-table-sample
- [ ] Thu ít nhất 3 phản hồi phù hợp ICP; chưa có phản hồi.

## License và dữ liệu

Source gốc MIT; dependency giữ license riêng. Không có font/ảnh/icon bên ngoài đóng gói. 12 contacts giả, email example.com. ZIP không kèm .env, node_modules hoặc dữ liệu khách thật.

## Giới hạn

Site được đăng ký chưa đồng nghĩa deploy thành công. Chỉ ghi URL live sau xác nhận deploy. Chưa đo traffic/download/activation. Không tự đăng bài hoặc gửi DM thay người dùng.

## Sự cố kiểm tra

Lần build đầu bị Turbopack chặn symlink dependency sang thư mục sample. Đã bỏ symlink và cài dependency trong checkout hosting bằng helper chính thức. Không sửa logic ứng dụng để xử lý lỗi môi trường này.

## Kết quả đã xác minh

Demo public: https://leadflow-table-sample.daotungduong-photos2.chatgpt.site

Source tải miễn phí: https://leadflow-table-sample.daotungduong-photos2.chatgpt.site/downloads/lead-table-sample-v0.1.0.zip

Site ID: `appgprj_6ac9d3f861dc8191bd68dbfb9a9760d6`.
Saved version: `appgprj_6ac9d3f861dc8191bd68dbfb9a9760d6~appgver_dafd6b16e18c8191976651da73cbd630` (version 1).
Deployment: `appgdep_6ac9d49ecd3c8191a6fdbf31e8319311`, status succeeded.
Source commit hosting: `e59a0b98ac0ac1ac87eb83e27d7f253ca7a7f3d6`.

Build static + TypeScript thành công; 5/5 kiểm tra filter pass. Browser kiểm tra bản export và URL live bằng context không đăng nhập, viewport 1280/390: search, status, empty, reset, không tràn trang, không pageerror. Demo HTTP 200, ZIP HTTP 200 và SHA256 khớp bản local ở cả hai viewport. Archive deployment được helper chuẩn hóa sang dist; đã kiểm tra manifest, index và không có dependency/env/Git metadata. ZIP 16 file, kiểm tra integrity và MIT license pass.

Đã chuẩn bị [bài chia sẻ và nhật ký feedback](10-sample-feedback-post.md), chưa đăng/gửi. Người dùng đã chọn daoduong007; repo public đã tạo và source đã push lên main. Ngày 12 hoàn thành demo + tải source + repo public.

Không mua domain hoặc dịch vụ trả phí trong lượt này. Chưa xác minh quota/billing của tài khoản hosting; không khẳng định hosting miễn phí vĩnh viễn. Chưa có dữ liệu nhu cầu/doanh thu để qua gate bản trả phí.

## Hoàn tất GitHub

Repo public: https://github.com/daoduong007/leadflow-table-sample

16 file source/docs/tests; lockfile và MIT license. README có hướng dẫn clone và link demo; homepage của repo trỏ tới demo. Không đưa plan kinh doanh, nhật ký nội bộ, dependencies hoặc build artifacts vào repo. Commit đầu tiên được xác nhận khớp remote main; xem lịch sử GitHub.
