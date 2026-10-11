# Kênh phân phối đã chọn — 10/10/2026

Trạng thái cập nhật 10/10/2026: đã đăng video công khai theo yêu cầu người dùng lên [Trạm 21:05](https://www.youtube.com/@tram2105-podcast): https://youtu.be/ZPnR-D8Gg-0. YouTube xác nhận đã đăng và hoàn tất checks không phát hiện vấn đề. Bài Hashnode đã đăng tại https://daoduong007.hashnode.dev/keep-a-lead-table-detail-view-and-kanban-board-in-sync-with-react; blog daoduong007.hashnode.dev đã tạo, chưa lên lịch bài khác. Chưa có số liệu traffic/đơn thật.

## Quyết định

| Vai trò | Kênh | Nội dung đầu tiên | Lý do chọn |
|---|---|---|---|
| Bài kỹ thuật chính | Hashnode, blog của chủ sản phẩm | `02-connected-views.md` | Phù hợp bài developer có Markdown/code; có thể dùng subdomain của nền tảng, chưa cần mua domain |
| Video bổ trợ | YouTube, kênh của chủ sản phẩm | Walkthrough kit hiện có, video ngang thông thường | Tái sử dụng screencast thực tế, giữ chữ/UI đọc được; mô tả dẫn về free sample và kit |

Đây là lựa chọn cho thử nghiệm đầu tiên, chưa phải bằng chứng chuyển đổi. Đã xác minh quyền quản lý kênh YouTube người dùng chỉ định qua Studio và xuất bản video. Đã tạo và xác minh bài trên blog daoduong007.hashnode.dev.

Đã đọc nguồn chính thức ngày 10/10/2026:

- [Hashnode Code of Conduct](https://hashnode.com/code-of-conduct): nội dung kỹ thuật và link tài liệu liên quan được khuyến khích; tác giả chịu trách nhiệm nội dung có AI hỗ trợ; không dùng nền tảng chủ yếu để tự quảng bá mà không đóng góp. Bài giải thích cách làm, ví dụ và giới hạn; CTA ngắn ở cuối, disclosure ở đầu.
- [Hashnode Terms](https://hashnode.com/terms): có blog với subdomain miễn phí. Không cần thêm chi phí domain cho lần thử này.
- [DEV AI guidelines](https://dev.to/guidelines-for-ai-assisted-articles-on-dev): bài có AI hỗ trợ không được quảng bá business/program/course. Vì bài này có CTA sản phẩm và được AI hỗ trợ, không chọn DEV cho bản này.
- [YouTube Shorts format](https://support.google.com/youtube/answer/15424877): video vuông/dọc tối đa 3 phút đủ định dạng Shorts. File hiện tại là ngang 1280×900 nên dùng video thông thường; chưa tạo bản Shorts.

## Gói đăng bài Hashnode

- Title: **Keep a lead table, detail view and Kanban board in sync with React**
- Slug đề xuất: `keep-lead-table-detail-kanban-in-sync-react` (nền tảng có thể điều chỉnh).
- Subtitle/SEO description: **Use one owner for lead records, derive each view, and make filters and bulk selection explicit in a React dashboard.**
- Tags đề xuất: React, TypeScript, Web Development (chọn tag hiện có trong editor).
- Body: toàn bộ `02-connected-views.md`, bỏ dòng H1 khi editor có ô title riêng.
- Ảnh tùy chọn sau phần mở đầu: `project-docs/sales/assets/v0.1.1/desktop-pipeline.png`; upload qua editor, không đưa đường dẫn local vào bài.
- Alt/caption: **LeadFlow paid kit pipeline with five stages and fictional records. The free sample contains the table only.**
- Giữ disclosure AI và product links; không điền URL bài hoặc ngày đăng giả.

## Gói đăng video YouTube

- File thật: `D:/leadflow-ui-kit/docs/leadflow-walkthrough.webm`.
- Title: **One lead edit, three views — React dashboard walkthrough**
- Description/caption: phần caption trong `04-short-video.md`.
- Thumbnail tùy chọn: `project-docs/sales/assets/v0.1.1/thumbnail.png`.
- Đây là screencast im lặng khoảng 18 giây; chưa có voiceover hoặc bản dọc. Xem lại file trước upload để bảo đảm UI vẫn đọc được.
- Khi có URL bài thật, thêm một dòng `Technical walkthrough: <URL thật>` trong description; bỏ placeholder khỏi nội dung đăng.

## Thứ tự thực hiện sau khi được yêu cầu đăng lên kênh

1. Chủ sản phẩm đọc bài và kiểm tra các khái niệm mình sẽ đứng tên. Đăng nhập Hashnode; dùng blog sẵn có nếu có. Không tự tạo tài khoản hay chọn identity thay chủ sản phẩm.
2. Đưa bài vào editor, upload ảnh có caption, kiểm tra code/link/preview rồi đăng theo yêu cầu của người dùng. Ghi URL thật vào nhật ký.
3. Đăng nhập YouTube; chọn kênh chủ sản phẩm. Upload video/caption hiện có theo yêu cầu của người dùng, thêm URL bài sau khi bài tồn tại.
4. Sau khoảng 48–72 giờ, ghi số liệu thật mà từng nền tảng cung cấp; review lại sau 7 ngày. Đây là lịch kiểm tra thủ công đề xuất, chưa tạo automation.
5. Ghi câu hỏi về setup/scope để cải thiện FAQ. Chưa thêm tính năng khi chưa có vấn đề cụ thể từ người dùng.

Không mở thêm kênh trong vòng thử nghiệm đầu. Query UTM chưa được dùng: demo chưa cài analytics, nên query tự nó không đo được click hoặc chuyển đổi. Test purchase của chủ sản phẩm không tính là sale.
