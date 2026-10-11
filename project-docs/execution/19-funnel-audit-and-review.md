# Funnel audit và review hai đợt phân phối — 11/10/2026

Kiểm tra trực tiếp khoảng 19:29–19:33 Asia/Saigon. Thực hiện sớm phần link audit trong plan ngày 50 khi chủ sản phẩm tạm gác thử cài. Đây là QA của chủ sản phẩm, không phải activation độc lập hoặc review 48–72 giờ.

## Kết quả kiểm tra

| Đường đi / thao tác | Kết quả | Giới hạn |
|---|---|---|
| Sample public, viewport 390×844 | Mở được; innerWidth 390, document scrollWidth 375, không tràn ngang trang | Browser emulation, không phải thiết bị vật lý |
| Tìm MINA | 1/12 records | Fictional data |
| MINA + Won | 0/12, No matching leads, gợi ý Clear filters | Không giả thành network error |
| Clear filters | 12/12, search rỗng, All statuses | Kiểm tra owner |
| Free source ZIP v0.1.0 | Tải qua nút UI; 16 entries, ZIP integrity đạt, có README/package.json | Chưa chạy cài đặt; thử cài vẫn tạm gác |
| Sample → View full UI Kit | Đến đúng listing Gumroad, v0.1.2, scope/support/refund rõ | Listing lượt QA có thể tăng analytics |
| Listing mobile | innerWidth 390, document scrollWidth 375; Buy this có mặt | Chưa audit toàn bộ thiết bị/browser |
| Listing → checkout | Đúng LeadFlow, quantity 1, No Tip, total US$29 khi chọn USD | Tài khoản creator: UI báo test purchase; chưa kiểm tra guest hoặc thanh toán mới |

Gumroad tự phát hiện VND: listing và checkout lúc kiểm tra hiển thị hai giá quy đổi khác nhau. Giá gốc USD ở checkout đúng $29; không coi giá VND là mức cố định hoặc tự đổi giá sản phẩm. Currency đã khôi phục và mục thêm khi QA đã xóa khỏi giỏ; không bấm Pay. Viewport đã trả về mặc định.

Bằng chứng mobile ngoài repo public: `D:/leadflow-releases/distribution-proof/mobile-sample-funnel-audit-2026-10-11.png`. Không lưu email, tên trên payment form hoặc URL chứa tracking session vào repo.

## Lịch review theo ngày đăng thực

| Đợt | Nội dung | Review 48–72 giờ | Review 7 ngày |
|---|---|---|---|
| A — 10/10 | Connected views + mock→API; hai video | 12–13/10 | 17/10 |
| B — 11/10 khoảng 19:25 | Table states Hashnode + YouTube Community | 13–14/10 sau khoảng 19:25 | 18/10 sau khoảng 19:25 |

Tất cả lịch thủ công, múi giờ Asia/Saigon, chưa tạo automation. Baseline 19:10–19:13 ngày 11/10 ở `18-first-baseline.md` được đọc trước khi đăng đợt B; không gán số liệu đó cho bài #4. QA lần này chưa phải snapshot analytics mới.

## Bảng ghi khi đến kỳ

| Chỉ số | Baseline trước đợt B | Lần review A | Lần review B |
|---|---|---|---|
| Hashnode blog / bài | Blog 4; connected 2; API 1; bài #4 chưa đăng lúc đo | Chưa đo | Chưa đo |
| YT walkthrough impressions / CTR / views | 94 / 2,1% / 7 | Chưa đo | Chưa đo |
| YT setup impressions / views | 90 / overview chưa có views; thẻ còn — | Chưa đo | Chưa đo |
| YT Community bài #4 | Chưa đăng lúc baseline; QA sau đăng 0 comments | Không thuộc đợt A | Chưa đo |
| Gumroad views / sales / gross, kỳ 10–11/10 | 5 / 0 / $0 | Chưa đo | Chưa đo |
| Activation độc lập | Chưa xác nhận; thử cài tạm gác | Chưa đo | Chưa đo |

Mỗi snapshot ghi kỳ bắt đầu/kết thúc, thời điểm đọc, timezone nếu UI cung cấp, metric name đúng UI và độ trễ. Không cộng impressions/views giữa nền tảng thành khách. Không chia Gumroad sales tổng cho views của một bài để tự tạo conversion rate. Nếu nền tảng không có post impressions/link clicks, ghi chưa đo. Lượt QA không được loại tự động; ghi rõ khả năng ảnh hưởng từ audit này.

## Một quyết định ở lần review

Hiện đường dẫn và thao tác được kiểm tra không có lỗi chặn. Giữ offer $29 và hai kênh. Ở kỳ review, nếu có câu hỏi cụ thể thì ưu tiên trả lời bằng ví dụ/docs; nếu dữ liệu vẫn ít, chọn một điều chỉnh nội dung/phân phối nhỏ có lý do, không mở thêm kênh hoặc thêm tính năng theo phỏng đoán. Kịch bản video #4 vẫn chưa dựng/upload; chọn thực hiện khi có ích cho phân phối hoặc được chủ sản phẩm yêu cầu.
