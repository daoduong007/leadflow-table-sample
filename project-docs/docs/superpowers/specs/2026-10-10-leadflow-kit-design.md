# LeadFlow UI Kit v0.1.0 — scope đã duyệt

Người dùng bỏ qua phản hồi, chấp thuận làm kit sau đề xuất thêm table/detail/Kanban, shared data, loading/error/empty, docs và ZIP. Không diễn giải thành gate nhu cầu đã đạt. Giá 29 USD là giả thuyết.

Bản trả phí nằm trong kit/ riêng, không commit vào repo sample public. Next.js/React/TypeScript và plain CSS kế thừa dependency đã khóa. Một client workspace giữ nguồn dữ liệu chung; table và pipeline là hai view, detail là màn hình có nút quay lại. Lead gồm contact, company, owner, status, value, notes, activity giả. Đổi owner/status thêm activity trong bộ nhớ; table/pipeline/metrics phản ánh ngay.

Table tìm tên/company, lọc status, 6 lead mỗi trang, filter reset trang đầu. Selection giữ ID giữa trang và filter; số chọn nêu rõ có thể gồm lead ẩn; thao tác status áp dụng các ID đã chọn. Kanban dùng select để chuyển bất kỳ trạng thái, có cột rỗng, hoạt động bằng bàn phím/mobile. Không kéo thả trong bản đầu.

Control demo trạng thái Ready/Loading/Error/Empty mô phỏng trạng thái giao diện, không API. Retry đưa về ready; reset demo khôi phục dataset/filters/selection. Refresh reset mọi dữ liệu. Không backend/auth/DB/billing/CRM sync. Preview local, ZIP private; chưa listing/checkout/KYC hoặc bán thực tế.

Bàn giao README, customization/API guide, walkthrough chữ và video screencast không lời, license cho source gốc, support policy, changelog, tests. Video minh họa sample data; không quảng cáo hành vi production.
