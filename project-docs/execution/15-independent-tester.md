# Thử cài LeadFlow UI Kit — v0.1.2

Ngày chuẩn bị: 10/10/2026. Chưa có người thử độc lập hoặc phản hồi thực tế. Bộ này dành cho một developer biết React/Next.js; thời gian thử đề xuất 20–30 phút.

Cập nhật: chủ sản phẩm chỉ định một địa chỉ email và yêu cầu gửi lời mời. Đã gửi lời mời T001 ngày 10/10/2026 lúc 23:06 (Asia/Saigon), xác minh trong Gmail Sent. Nội dung có demo miễn phí, checklist và mẫu phản hồi; chờ người nhận đồng ý để cấp bản thử riêng. Chưa gửi ZIP, chưa xác nhận người nhận là tester độc lập và chưa có feedback. Địa chỉ/bằng chứng email giữ ngoài repo public.

## Lời mời để chủ sản phẩm gửi

> Mình vừa ra mắt LeadFlow, một UI kit Next.js có table, detail và pipeline dùng chung dữ liệu. Bạn có thể dành khoảng 20–30 phút thử cài theo README và báo giúp chỗ nào khó hiểu hoặc lỗi không? Mình cần phản hồi về cài đặt và thao tác thực tế, không cần review tích cực hay mua hàng. Nếu bạn đồng ý, mình sẽ gửi bản thử riêng. Kit dùng dữ liệu giả, chưa có backend hoặc lưu dữ liệu sau reload.

Chủ sản phẩm đã chọn người nhận T001 và ủy quyền gửi lời mời. Không đưa ZIP/source trả phí vào repo public. Chưa cấp quyền tải hoặc gửi bản trả phí cho người nhận.

## Checklist cho người thử

1. Nhận ZIP v0.1.2 riêng, giải nén vào thư mục mới bên ngoài repo của người tạo. Không clone free sample. Ghi hệ điều hành và kết quả `node --version`, `npm --version`.
2. Chỉ dùng README: vào thư mục có package.json, chạy `npm ci`, rồi `npm run dev -- --port 4322`. PowerShell có thể dùng `npm.cmd` thay `npm`. Ghi thời gian đến khi nhìn thấy table và mọi lỗi terminal.
3. Tìm “harbor”, xóa bộ lọc và chuyển trang. Ghi điều gì khác với kỳ vọng.
4. Mở Mina Chen, đổi owner và status. Trở lại table, rồi mở pipeline để xác nhận cùng một lead được cập nhật.
5. Chọn một lead ở mỗi trang; lọc để ẩn chúng. Đọc thông báo selection trước khi đổi status hàng loạt. Ghi liệu phạm vi bulk action có rõ ràng không; xóa selection khi xong.
6. Đổi status một card trong pipeline bằng select. Thử bàn phím và màn hình hẹp nếu thuận tiện. Pipeline không có drag-and-drop; filter table không áp dụng cho pipeline.
7. Thử Loading/Error/Retry/Empty, rồi Reset demo. Reload sẽ mất chỉnh sửa vì dữ liệu nằm trong bộ nhớ; xác nhận README giải thích đủ rõ.
8. Dừng server bằng Ctrl+C. Gửi ghi chú theo mẫu dưới; không gửi source trả phí, secret hoặc thông tin khách hàng.

## Mẫu phản hồi

```text
Ngày thử / phiên bản ZIP:
Hệ điều hành / trình duyệt / Node / npm:
Cài từ thư mục độc lập: có / không
Thời gian đến khi chạy được:
Bước đầu tiên bị vướng:
Lệnh hoặc thao tác gây lỗi:
Kỳ vọng:
Thực tế / thông báo lỗi (đã loại secret):
Có tái hiện được sau Reset/restart không:
Điều khó hiểu nhất trong README/UI:
Điều gì cần có trước khi bạn dùng kit trong một dự án:
Ảnh minh họa tùy chọn:
```

## Cách xử lý phản hồi

Ưu tiên lỗi ngăn cài/chạy, tiếp đến lỗi đồng bộ dữ liệu, rồi hướng dẫn hoặc thao tác gây hiểu nhầm. Tái hiện vấn đề trước khi sửa; ghi trước/sau, phiên bản và phép kiểm tra xác nhận. Không coi đề xuất tính năng là lỗi trong scope đã bán. Chưa có phản hồi thì giữ trạng thái “chờ người thử”, không tạo testimonial hay kết quả giả.

## Kết quả hiện tại

- Chủ sản phẩm yêu cầu tạm gác thử cài ngày 11/10/2026 để thực hiện công việc sau trong plan. Giữ lời mời T001 đã gửi, chưa cấp ZIP; không coi trì hoãn là activation/validation và không gửi nhắc lại tự động.

- 11/10/2026 khoảng 19:10 Asia/Saigon: truy vấn Gmail theo người gửi T001 từ 10/10 không có kết quả. Vẫn chờ đồng ý; chưa gửi lại lời mời hoặc cấp ZIP. Đây không phải kiểm tra tất cả kênh phản hồi.

- Kiểm tra của người tạo phát hiện dependency local không dùng trong v0.1.1; đã sửa trong v0.1.2. Chi tiết: `16-standalone-release-fix.md`.
- Đây chưa phải kết quả thử độc lập. Các mục thời gian, khó hiểu và phản hồi người dùng vẫn chưa có dữ liệu.
