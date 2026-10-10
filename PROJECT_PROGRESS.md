# LeadFlow — ghi chú tiến độ

Cập nhật: **10/10/2026**. Ngày trong plan 60 ngày là mốc tham chiếu; nhiều bước đã được làm trước lịch. Tài liệu này ghi trạng thái thực tế, không quy đổi giờ dự kiến thành giờ đã làm.

## Hướng đi đã chốt

Xây sản phẩm số cho developer làm lead dashboard: nội dung hữu ích → free sample → UI Kit trả phí → checkout và giao ZIP tự động. Giá mở bán đề xuất là **29 USD, thanh toán một lần**; chưa được kiểm chứng bằng giao dịch.

Người dùng đã chọn bỏ qua bước lấy feedback trước khi build kit. Đây là quyết định tiếp tục khi chưa có bằng chứng nhu cầu, không phải gate validation đã đạt.

## Trạng thái hiện tại

| Hạng mục | Trạng thái | Ghi chú |
|---|---|---|
| ICP/scope và desk research | Đã ghi nhận giả thuyết | Chưa có khách hàng/review/network được xác minh |
| Free sample | Đã làm và public | Search tên/công ty, status filter, empty state và mobile scroll; 12 lead giả |
| GitHub sample | Đã public | Repo này chứa source sample MIT |
| Demo và ZIP miễn phí | Đã public | [Demo/sample download](https://leadflow-table-sample.daotungduong-photos2.chatgpt.site) |
| UI Kit v0.1.0 | Hoàn thành local | Table có pagination/selection/bulk changes, detail và pipeline dùng chung dữ liệu |
| Docs/video/license của kit | Đã chuẩn bị local | Setup/customization, walkthrough, license và phạm vi hỗ trợ |
| ZIP trả phí | Đã đóng gói local | Cài/build từ bản giải nén đã được kiểm tra ở bước kit; không nằm trong repo public |
| QA kit | Đã kiểm tra ở bước trước | 7 unit tests + 8 browser tests; typecheck/build và kiểm tra cài sạch đã đạt |
| Listing/FAQ/buyer content | Có bản nháp local | Chưa tạo listing trong tài khoản Gumroad |
| Ảnh sản phẩm | Có 6 ảnh production local | Desktop/mobile; dữ liệu demo |
| Nội dung thu hút khách | Có bản nháp local | Bài sample, connected views, mock-to-API; caption và kịch bản video |
| Đăng bài/phân phối | Chưa thực hiện | Không có bài đăng/DM/lịch tự động được tạo |
| Gumroad seller/KYC/payout | Chưa xác minh | Lần kiểm tra browser gần nhất ở màn hình đăng nhập |
| Checkout/receipt/giao ZIP | Chưa kiểm tra thực tế | Đã có checklist; chưa có test purchase |
| Mở bán | Chưa thực hiện | Giá/contact/refund terms cần chốt trước publish |
| Traffic/khách mua/doanh thu | Chưa có dữ liệu xác minh | Không tính test hoặc việc chuẩn bị tài liệu là kết quả bán hàng |

Kết quả QA trên là ghi nhận từ bước kit trước đó. Lần cập nhật tiến độ này chỉ sửa tài liệu, không chạy lại test ứng dụng và không thay đổi tính năng sample.

## Việc tiếp theo

1. Người dùng đăng nhập Gumroad và cung cấp email hỗ trợ công khai.
2. Kiểm tra seller status và yêu cầu xác minh/payout còn thiếu; người dùng tự xử lý thông tin định danh/ngân hàng.
3. Tạo listing nháp từ bộ nội dung đã chuẩn bị, upload ZIP vào buyer content.
4. Chốt giá và điều khoản hỗ trợ/hoàn tiền. Đề xuất hiện tại: hỗ trợ lỗi/setup 14 ngày và hoàn tiền 14 ngày; chưa áp dụng trong tài khoản.
5. Test purchase bằng phương thức test của Gumroad, kiểm tra receipt/content/download và file tải.
6. Publish khi release gate đạt, rồi thêm CTA với URL mua thật vào sample.
7. Đăng nội dung tại kênh được chọn/cho phép, ghi URL và số liệu thật để tìm điểm nghẽn của flow.

## Phạm vi repo public

Repo này chứa free sample và ghi chú tiến độ. Source/ZIP của UI Kit trả phí cùng các tài liệu vận hành local chưa được publish trong repo này.

Sample và kit hiện đều là frontend với dữ liệu giả; không có backend, authentication, persistence hoặc CRM sync. Kit không bao gồm dịch vụ cài đặt/tùy biến hộ. Không có cam kết doanh thu hoặc mức tiết kiệm thời gian chưa đo.

## Tài liệu dự án được công khai

Theo yêu cầu người dùng, [project-docs](project-docs/README.md) bổ sung plan ban đầu (Markdown/Word/PDF), plan mới và tài liệu nghiên cứu, triển khai, QA, sử dụng kit, sales/marketing. Công khai bản nháp không có nghĩa đã mở bán hoặc đăng bài. Source/ZIP/video giao hàng của kit trả phí vẫn ở local.
