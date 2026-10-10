# Sample v0.1.0 — QA và bàn giao

Ngày thực hiện: 10/10/2026. Người dùng đã chấp thuận làm sample. Nguồn: `sample/`; chưa repo public, chưa demo online, chưa có tester độc lập.

## Phạm vi thực tế

- 12 contacts giả, địa chỉ email thuộc example.com; IDs ổn định.
- Tìm tên/công ty không phân biệt hoa thường, bỏ khoảng trắng đầu/cuối.
- Lọc New/Qualified/Proposal/Won/Lost, kết hợp với tìm kiếm; Clear filters.
- Đếm kết quả, empty state, nhãn dữ liệu giả, hướng dẫn giới hạn.
- Table semantic, controls có label, result count live, scroll region có keyboard focus.
- Mobile: trang không tràn ngang; bảng cuộn ngang giữ đủ cột.
- Không có detail/Kanban, pagination, selection, API, lưu trạng thái hoặc thanh toán.

## Kiểm tra

Môi trường: Linux; Node 20.20.2, Next.js 16.4.0, React 19.3.0; dependency chính được khóa và lockfile đi kèm.

| Kiểm tra | Kết quả |
|---|---|
| npm ci | Thành công; npm audit lúc cài báo 0 vulnerabilities |
| npm test | 5/5 pass: case/trim, company, combined filter, unchanged input, no matches |
| npm run test:e2e | 4/4 pass trên Chromium desktop/mobile emulation |
| npm run typecheck | Thành công |
| npm run build | Thành công; trang / render static |
| Xem ảnh desktop/mobile | Đã kiểm tra bố cục, controls, bảng, ghi chú scope |

Tests dữ liệu đã quan sát thất bại khi hàm trả [] trước khi có implementation. Browser tests ban đầu bị trỏ nhầm app ở cổng 3000; đã đổi sang cổng 4317 riêng và tắt reuseExistingServer. Đã xác nhận tests thất bại với blank page trên đúng app rồi pass khi bật UI.

Một lần cài lại dependency chạy trùng với dev test gây lỗi module tạm thời; đã dừng test, hoàn tất npm ci và chạy lại thành công. Không có lỗi app/runtime trong luồng test đã pass.

## Giới hạn và bước tiếp

Mobile là Chromium emulation, chưa thử Safari thật. Chưa audit accessibility đầy đủ; có label/focus/table semantics nhưng cần phản hồi người dùng. Chưa thử API, môi trường khách hàng hoặc tải dữ liệu lớn vì ngoài phạm vi.

Preview local: http://127.0.0.1:4318. Đây không phải URL chia sẻ cho khách. Bước tiếp theo theo plan là repo public/demo và lấy feedback; chưa được xem là đã có phân phối hoặc xác nhận giá 29 USD.
