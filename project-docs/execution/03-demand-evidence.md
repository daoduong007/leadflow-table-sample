# Ngày 3 — Sổ bằng chứng nhu cầu

Thu thập toàn bộ nguồn: **10/10/2026**. Diễn giải bằng lời của chúng ta, không chép code/lời người dùng. Ngày đăng chỉ ghi khi đọc được chắc chắn; các nguồn cũ là tín hiệu lịch sử, cần xác nhận lại với dự án hiện tại.

| ID | Câu hỏi/khó khăn quan sát | Nguồn gốc | Mức kiểm tra | Hàm ý thử nghiệm |
|---|---|---|---|---|
| E01 | Muốn ví dụ tìm/lọc/phân trang client cho 50–60 records | [tablecn #994](https://github.com/sadmann7/tablecn/issues/994), 15/08/2025 | Đọc trang trực tiếp | Sample nhỏ và giải thích client/server |
| E02 | Pagination controls không đổi tập hàng hiển thị | [shadcn #1523](https://github.com/shadcn-ui/ui/discussions/1523), 14/09/2023 | Đọc trực tiếp | Cần ví dụ và QA hành vi, không chỉ UI |
| E03 | Tìm kiếm mới chưa đưa pagination về trang đầu | [TanStack #2288](https://github.com/TanStack/table/discussions/2288), 08/05/2020 | Đọc trực tiếp | Kiểm tra filter ở trang cuối |
| E04 | Shift-select gặp vấn đề với lọc/phân trang | [TanStack #3068](https://github.com/TanStack/table/discussions/3068) | Đọc trực tiếp; có trao đổi năm 2024–2025 | Không thêm range selection vào P0 |
| E05 | Selection all khác nhau khi server pagination | [TanStack #4781](https://github.com/TanStack/table/issues/4781), 29/03/2023 | Nội dung issue hiển thị trong kết quả tìm kiếm | Mô tả rõ phạm vi chọn hàng; server bulk-action ngoài scope |
| E06 | Không đưa được item vào cột trống | [dnd-kit #828](https://github.com/clauderic/dnd-kit/issues/828), 11/07/2022 | Nội dung issue hiển thị trong kết quả tìm kiếm | QA pipeline với cột trống; chưa khẳng định bug còn tồn tại |
| E07 | Muốn filter bằng trường không hiển thị thành cột | [Bài hỏi shadcn](https://www.reddit.com/r/shadcn/comments/1fjto7h) | Chỉ snippet; mở trực tiếp lỗi | Chưa đủ xác minh; tìm source tương đương hoặc hỏi tester |
| E08 | Khó làm nested sortable containers | [Bài hỏi React](https://www.reddit.com/r/reactjs/comments/16ogvr6) | Chỉ snippet; mở trực tiếp lỗi | Nested containers ngoài phạm vi, không làm thêm |
| E09 | Băn khoăn tải mọi dữ liệu rồi lọc hay query DB | [Bài hỏi Next.js](https://www.reddit.com/r/nextjs/comments/1ess82f) | Chỉ snippet; mở trực tiếp lỗi | Docs cần phân biệt mock/client với API/server |
| E10 | Chọn server components hay client/API cho data table | [Bài hỏi Next.js](https://www.reddit.com/r/nextjs/comments/1umfrv1) | Chỉ snippet; mở trực tiếp lỗi | Cần hướng dẫn ranh giới dữ liệu, chưa xác nhận offer |

## Những gì biết và chưa biết

Biết: Các nguồn độc lập ghi nhận khó khăn trong state, pagination/selection và drag/drop. Phần lớn là câu hỏi kỹ thuật tổng quát; nhiều nguồn đã cũ. Hai issue E05/E06 đọc được nội dung trong search nhưng chưa kiểm tra đầy đủ diễn biến.

Chưa biết: Người hỏi có đúng ICP, đang xây lead dashboard, có budget hoặc muốn mua kit hay không. Chưa có bằng chứng trực tiếp về nhu cầu đồng bộ table/detail/pipeline, chưa có feedback về mockup của chúng ta.

**Quyết định:** Đủ để chọn các tình huống cần demo/QA. Chưa đủ để qua gate bản trả phí. Cần bổ sung nguồn gần đây về lead workflow và phản hồi dự án thực; không biến 10 link thành 10 khách hàng tiềm năng đã xác nhận.
