# Baseline sau xuất bản — 11/10/2026

Kiểm tra khoảng **19:10–19:13 Asia/Saigon**. Đây là snapshot sớm, chưa thay thế review 48–72 giờ ngày 12–13/10 hoặc review 7 ngày ngày 17/10. Số liệu có thể tiếp tục được nền tảng xử lý.

## Kết quả đọc trực tiếp

| Nguồn / kỳ đo | Chỉ số và giá trị đúng UI | Giới hạn |
|---|---|---|
| Gumroad Analytics / 10–11/10/2026, gồm hai đầu ngày | Views **5**, Sales **0**, Total **$0** | All products chỉ có LeadFlow; timezone dashboard chưa hiển thị. Không loại được lượt QA; views không đồng nghĩa người riêng biệt |
| Gumroad Referrer / cùng kỳ | Direct, email, IM: **4** views; sample Sites: **1** view; cả hai **0** sales | Không suy ra attribution Hashnode/YouTube, không suy ra 5 khách mới |
| YouTube video setup `NhiFp3-CdOs` / từ khi xuất bản 10/10 tới lúc đọc | Impressions **90**; overview báo chưa có views; realtime 48 giờ **0** | Thẻ views/CTR/watch time còn hiện `—`; unique viewers đang xử lý. Funnel 10/10 hiển thị CTR **0,0%**, views từ impressions **0**; không thay toàn bộ dấu `—` bằng 0 |
| YouTube video walkthrough `ZPnR-D8Gg-0` / từ khi xuất bản 10/10 tới lúc đọc | Views **7**, impressions **94**, CTR **2,1%**, watch time **0,0 giờ** theo làm tròn UI; danh sách Nội dung có comments **0** | Chưa loại QA; unique viewers/retention chưa có dữ liệu. Watch time làm tròn không có nghĩa không ai xem |
| YouTube walkthrough / nguồn lưu lượng từ khi xuất bản | Channel pages **85,7%**, Suggested videos **14,3%** | Chỉ 7 views; chưa chứng minh người xem đúng ICP. Funnel riêng ngày 10/10 có 93 impressions, CTR 2,2%, 2 views, average view duration 0:13, watch time 0,01 giờ; không trộn funnel này với thẻ realtime 94 impressions |
| Hashnode Analytics / Last 7 days | Publication **4 Views (7 days)**, **4 Views (30 days)**, **4 All-time views**; bảng bài: connected views **2**, mock→API **1** | UI nói cập nhật mỗi 4 giờ. Tổng blog 4 khác tổng hai hàng bài 3; giữ nguyên số UI, không tự phân bổ lượt còn lại. Không loại được QA; không phải unique readers |
| Demo activation, refund, phút hỗ trợ | **Chưa đo** | Không tự thay ô thiếu bằng 0 |

Gumroad không ghi nhận sale trong kỳ này; test purchase trước đó không tính là doanh thu. Không có activation tester được xác nhận.

## Người thử T001

Tìm Gmail theo người gửi T001 và `after:2026/10/10`: giao diện báo không có thư khớp. Đây là kết quả của truy vấn cụ thể, không khẳng định mọi kênh đều không có phản hồi. Chưa gửi lại lời mời, chưa gửi ZIP. Chờ người nhận đồng ý; tính độc lập của tester còn chưa xác minh.

## Quyết định tiếp theo

Traffic hiện quá ít và còn rất sớm để kết luận về giá, thumbnail hay nhu cầu. Giữ giá và scope, ưu tiên nhận kết quả thử cài. Khi T001 đồng ý, cấp ZIP riêng v0.1.2 và ghi môi trường/thời gian/bước vướng theo `15-independent-tester.md`. Tái hiện lỗi thật trước khi sửa và cập nhật FAQ.

Review 12–13/10: đọc lại Gumroad cùng ngày bắt đầu 10/10; đọc Analytics từng video gồm impressions, CTR, watch time; đọc lại Hashnode với cùng bộ lọc Last 7 days và ghi rõ cửa sổ trượt, delay và QA. Chỉ chọn một thay đổi khi có bằng chứng. Chưa tạo automation hoặc gửi thêm email.

Bằng chứng ảnh giữ ngoài repo public: `D:/leadflow-releases/distribution-proof/gumroad-baseline-2026-10-11.png` và `youtube-setup-baseline-2026-10-11.png`. Email/danh tính người nhận không đưa vào tài liệu public.

Bổ sung hai ảnh `hashnode-baseline-2026-10-11.png` và `youtube-walkthrough-baseline-2026-10-11.png` trong cùng thư mục private. Dữ liệu đã đọc đủ ba nền tảng cho baseline; activation, refund và hỗ trợ vẫn chưa đo. Chưa có căn cứ để coi CTR nhỏ này là vấn đề lớn nhất cần sửa.
