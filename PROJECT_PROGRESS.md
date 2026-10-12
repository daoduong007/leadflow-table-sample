# LeadFlow — ghi chú tiến độ

Cập nhật: **11/10/2026**. Ngày trong plan 60 ngày là mốc tham chiếu; nhiều bước đã được làm trước lịch. Tài liệu này ghi trạng thái thực tế, không quy đổi giờ dự kiến thành giờ đã làm.

## Hướng đi đã chốt

Xây sản phẩm số cho developer làm lead dashboard: nội dung hữu ích → free sample → UI Kit trả phí → checkout và giao ZIP tự động. Giá mở bán đề xuất là **29 USD, thanh toán một lần**; chưa được kiểm chứng bằng giao dịch.

Người dùng đã chọn bỏ qua bước lấy feedback trước khi build kit. Đây là quyết định tiếp tục khi chưa có bằng chứng nhu cầu, không phải gate validation đã đạt.

## Trạng thái hiện tại

### Video #3 và đồng bộ kênh — 11/10/2026

Đã dựng và đăng video 45 giây về loading/error/empty/no-match states: https://youtu.be/H-nSNjv-F1g (Studio xác nhận đã đăng, checks không phát hiện vấn đề, playlist Frontend Builds). Handle kênh đổi từ `@tram2105-podcast` sang `@daoduong007` (đã xuất bản; handle cũ được YouTube giữ 14 ngày). Phụ đề EN đã tải nhưng chưa xác minh hiển thị. Đã ẩn (chuyển Riêng tư, không xóa, hoàn tác được) theo yêu cầu chủ sản phẩm: playlist “Podcast Chữa Lành | Trạm 21:05”, playlist “nhạc việt” và video podcast “Sự bình yên đến từ việc âm thầm nỗ lực.”; Studio xác nhận trạng thái Riêng tư lúc 11/10/2026. Chưa có số liệu video mới. Chi tiết `project-docs/marketing/10-table-states-video.md`.

### Audit đường đi — 11/10/2026

Đã kiểm tra mobile 390×844: tìm/lọc/xóa lọc đúng, trang sample/listing không tràn ngang, ZIP miễn phí tải được và integrity đạt (16 entries), CTA tới đúng listing và checkout US$29. QA creator, không thanh toán hoặc thử cài mới. Đã chuẩn bị bảng review riêng đợt A (12–13/10, 17/10) và B (13–14/10, 18/10 sau khoảng 19:25); lịch thủ công. Xem `project-docs/execution/19-funnel-audit-and-review.md`.

### Đợt phân phối tiếp theo — 11/10/2026

Đã đăng [bài #4 loading/error/empty/filter states](https://daoduong007.hashnode.dev/react-table-loading-error-empty-states) trên Hashnode và [bài chia sẻ YouTube Community](https://www.youtube.com/post/Ugkx4avTRBaTvePCn87xXSkZvWXPTL8usEUz) theo yêu cầu tiếp tục phân phối. Bài có component đầy đủ, 4 code blocks, tags/SEO/disclosure và link sample/kit; trang công khai và permalink đã xác minh. Chưa có số liệu hiệu quả đợt này. Video mới chưa dựng/upload. Thử cài vẫn tạm gác. Chi tiết `project-docs/marketing/09-empty-error-publication.md`.

### Baseline — 11/10/2026

Bổ sung khoảng 19:13: Hashnode Analytics ghi 4 views toàn blog (Last 7 days), hai bài lần lượt 2 và 1 views; tổng blog không bằng tổng hàng bài và cập nhật mỗi 4 giờ. YouTube walkthrough Analytics có 94 impressions, CTR 2,1%, 7 views; chưa loại QA hoặc xác minh audience đúng ICP. Baseline ba nền tảng đã ghi lại; vẫn chờ phản hồi thử cài và cửa sổ review 48–72 giờ.

Đã kiểm tra phản hồi T001 khoảng 19:10 Asia/Saigon: Gmail không có thư khớp người gửi từ 10/10; vẫn chờ đồng ý, chưa gửi ZIP hoặc gửi lại lời mời. Đã đọc Gumroad kỳ 10–11/10: 5 views, 0 sales, $0 (4 direct/email/IM, 1 từ sample); chưa loại được lượt QA. YouTube setup có 90 impressions, chưa có views; walkthrough có 7 views trong danh sách Studio. Chỉ số còn sớm/đang xử lý; Hashnode được bổ sung lúc 19:13 phía trên; chưa kết luận về giá hoặc nhu cầu. Chi tiết và giới hạn ở [baseline](project-docs/execution/18-first-baseline.md). Review 12–13/10 và 17/10 vẫn là lịch thủ công.

### Cập nhật mở bán — 10/10/2026

Đã thực hiện đợt phân phối tiếp theo theo yêu cầu người dùng: bài #3 công khai tại https://daoduong007.hashnode.dev/replace-mock-dashboard-data-with-api và video #2 tại https://youtu.be/NhiFp3-CdOs. Bài có subheading/SEO/tags và 4 code blocks TypeScript, đã kiểm tra trang public. Video setup/customization 90 giây có thumbnail, phụ đề English và playlist Frontend Builds; Studio xác nhận “Đã đăng video”, checks hoàn tất không phát hiện vấn đề, trang watch có caption và link CTA. Đã gửi lời mời thử kit T001 đến địa chỉ chủ sản phẩm chỉ định, xác minh Gmail Sent lúc 23:06 ngày 10/10; chưa gửi ZIP và chưa có phản hồi/activation độc lập. Bằng chứng và địa chỉ người nhận giữ ngoài repo public ở `D:/leadflow-releases/distribution-proof/`.

Bài #3 mock → API có validation/request states/retry, code minh họa độc lập trong `project-docs/marketing/examples/`; 7 adapter tests và typecheck đạt. Ví dụ không thay đổi tính năng sample/kit. Video #2 là visual guide gồm 8 thẻ chữ không âm thanh, không phải quay màn hình cài đặt mới; file gốc và phụ đề ở `D:/leadflow-releases/setup-customization/`, gói đăng và hướng dẫn dựng lại ở `project-docs/marketing/07-setup-customization-video.md`. Runbook `project-docs/execution/17-feedback-and-review.md` có mẫu ticket không chứa dữ liệu người mua, tiêu chí ưu tiên sửa lỗi, mẫu đo funnel và mốc review 12–13/10, 17/10 (lịch thủ công). Chưa có tester độc lập hoặc số liệu sale/traffic có ý nghĩa được xác minh.

Đã hoàn thiện bộ nhận diện YouTube: avatar TD 800×800, banner Frontend Builds 2560×1440 với nội dung trong vùng an toàn mobile và watermark 150×150 ở cuối video; đã upload/xuất bản và kiểm tra public. LeadFlow là trailer và video nổi bật; playlist công khai “Frontend Builds — UI Walkthroughs” có 1 video, đã thêm phần playlist vào Home. Metadata video được gỡ tags podcast, đổi category/ngôn ngữ tiêu đề và thêm link bài Hashnode. Bộ ảnh gốc SVG/PNG và bằng chứng lưu ở `project-docs/sales/assets/youtube-channel/`; chi tiết trong `project-docs/marketing/06-youtube-channel-profile.md`.

Đã chuyển hồ sơ YouTube từ Trạm 21:05 sang “Đào Tùng Dương — Frontend Builds”: mô tả tiếng Anh, 4 link và email liên hệ; public đã xác minh. Keywords và upload defaults đổi sang frontend, category Science & Technology và ngôn ngữ tiêu đề/mô tả English. Quốc gia cư trú Việt Nam giữ nguyên. Xem `marketing/06-youtube-channel-profile.md` cho phạm vi và bằng chứng.


Đã chuẩn bị bộ thử độc lập (`execution/15-independent-tester.md`) và phát hành patch v0.1.2: gỡ dependency local không dùng tới repo sample, bổ sung hướng dẫn setup/PowerShell/nâng bản và support terms. ZIP mới cài độc lập, 7 unit + 8 browser tests, typecheck/build đạt; upload Gumroad và tải lại hash khớp từ seller editor. FAQ public đã cập nhật và xác minh. Đây là audit nội bộ, chưa có phản hồi tester. Chi tiết `execution/16-standalone-release-fix.md`.


Đã hoàn tất hồ sơ Hashnode `@daoduong007`, tạo blog “Đào Tùng Dương — Frontend Notes” và xuất bản bài theo yêu cầu người dùng tại https://daoduong007.hashnode.dev/keep-a-lead-table-detail-view-and-kanban-board-in-sync-with-react. Có ảnh pipeline, subheading, SEO metadata, tags reactjs/typescript/web-development và link video/sample/GitHub/Gumroad. Editor xác nhận Published; đã kiểm tra trang public và định dạng code. Bài và video đều đã phân phối, chưa có số liệu khách/đơn thật. Bước tiếp theo theo plan: tìm người thử cài theo docs; ghi câu hỏi/lỗi thật, review số liệu 48–72 giờ và sau 7 ngày (chưa đặt automation).

Đã thực hiện lần phân phối đầu: người dùng chỉ định kênh YouTube cá nhân (nay là `@daoduong007`, trước đây `@tram2105-podcast`) và xác nhận upload/xuất bản. Video walkthrough công khai tại https://youtu.be/ZPnR-D8Gg-0, có tiêu đề/mô tả/thumbnail và link demo, source sample, kit. Studio xác nhận “Đã đăng video”, checks hoàn tất không phát hiện vấn đề; mở được trang watch. Chưa đo lượt xem khách hoặc đơn từ video. Hashnode đã đăng; URL và trạng thái hiện tại ở cập nhật phía trên.

Đã hoàn thiện bài #2 về đồng bộ table/detail/Kanban: giải thích một nguồn records, selected ID, derived views, edit handler, filter/selection scope và checklist chuyển trạng thái. Ví dụ TypeScript độc lập, không đưa source trả phí vào bài. CTA đã trỏ listing thật. Chọn Hashnode cho bài kỹ thuật, YouTube cho video ngang hiện có; đã chuẩn bị title/tags/ảnh/caption và nhật ký. Bài và video đã đăng trong các cập nhật phía trên; số liệu thật còn chờ thu thập. Xem `project-docs/marketing/05-distribution-plan.md`.

Đã hoàn tất CTA mua trong sample và README: GitHub `main` commit `7ef89df`; demo Sites public version 2 đã deploy thành công ở cùng URL. CTA “View full UI Kit — $29” dẫn tới listing Gumroad. Đã kiểm tra desktop, mobile 390px không tràn trang, typecheck và production build đạt. Source Sites riêng ở `D:/leadflow-site-update`, giữ link tải ZIP miễn phí gốc. Bước tiếp theo: hoàn thiện bài connected views và chọn kênh phân phối.

Người dùng đã xác nhận nhận được email receipt sau test purchase. Luồng checkout → email → buyer content → tải ZIP đã được kiểm tra, với việc email tới inbox do người dùng xác nhận. Việc tiếp theo là CTA mua trong sample và phân phối theo tuần 4 của plan.

Người dùng đã chốt giá **29 USD một lần**, hỗ trợ lỗi/setup **14 ngày** và hoàn tiền **14 ngày**, đồng thời yêu cầu triển khai. Đã lưu điều khoản chính thức, bật refund policy 14 ngày và publish sản phẩm tại https://daoduong007.gumroad.com/l/leadflow-ui-kit. Editor hiển thị Unpublish; trang công khai có Buy this. Cảnh báo thiếu payout không còn hiện; chưa xác minh KYC/risk review hoặc nhận payout thực tế.

Test purchase của chủ sản phẩm thành công; checkout xác nhận không thu tiền. Trang người mua có receipt và một ZIP v0.1.1. Đã tải ZIP qua luồng người mua và đối chiếu SHA256 khớp `b29d24d02db55dba25efaeb48f8330dc5fc2268e00257c5ed68c89d4c56402cc`. Đã gỡ thẻ ZIP cũ trùng lặp. Chưa kiểm tra email trong inbox, chưa có doanh thu thật, chưa phân phối hoặc thêm CTA sample. Bảng dưới và phần việc tiếp theo ghi trạng thái trước cập nhật này.

| Hạng mục | Trạng thái | Ghi chú |
|---|---|---|
| ICP/scope và desk research | Đã ghi nhận giả thuyết | Chưa có khách hàng/review/network được xác minh |
| Free sample | Đã làm và public | Search tên/công ty, status filter, empty state và mobile scroll; 12 lead giả |
| GitHub sample | Đã public | Repo này chứa source sample MIT |
| Demo và ZIP miễn phí | Đã public | [Demo/sample download](https://leadflow-table-sample.daotungduong-photos2.chatgpt.site) |
| UI Kit v0.1.1 | Đã dựng lại và kiểm tra trên máy hiện tại | Kit gốc v0.1.0 không tìm thấy trên máy; source riêng ở `D:/leadflow-ui-kit` |
| Docs/video/license của kit | Đã chuẩn bị local | Setup/customization, walkthrough, license và phạm vi hỗ trợ |
| ZIP trả phí | v0.1.2 đã upload và lưu Gumroad | ZIP/source private, không nằm trong repo public |
| QA kit | Đã kiểm tra lại cho v0.1.1 | 7 unit + 8 browser tests, typecheck/build, clean install; xem `project-docs/execution/12-kit-rebuild-qa.md` |
| Listing/FAQ/buyer content | Đã publish; hướng dẫn v0.1.2 cập nhật | Email hỗ trợ `daoduong.007@gmail.com`, 3 cover desktop, thumbnail, ZIP, buyer content và receipt message |
| Ảnh sản phẩm | Có 6 ảnh production mới và thumbnail v0.1.1 | Desktop/mobile; dữ liệu demo |
| Nội dung thu hút khách | Bài connected views và video đã đăng | Bài sample, connected views, mock-to-API; caption và kịch bản video |
| Đăng bài/phân phối | Hashnode và YouTube đã đăng | URL thật ở phần cập nhật; chưa gửi DM hoặc đặt lịch tự động |
| Gumroad seller/KYC/payout | Người dùng đã thiết lập payout | Publish thành công; chưa xác minh KYC hoặc nhận payout thật |
| Checkout/receipt/giao ZIP | Test purchase v0.1.1 đạt | Người dùng xác nhận email; ZIP v0.1.2 tải lại từ editor hash khớp |
| Mở bán | Đã mở bán | 29 USD một lần; support/refund 14 ngày |
| Traffic/khách mua/doanh thu | Chưa có dữ liệu xác minh | Không tính test hoặc việc chuẩn bị tài liệu là kết quả bán hàng |

QA v0.1.1 là kết quả mới trên máy hiện tại. Không thay đổi tính năng sample public; paid source nằm ngoài repo này.

## Việc tiếp theo

Người dùng yêu cầu **tạm gác thử cài ngày 11/10/2026** để làm các bước sau. Không xem thử cài là hoàn thành hoặc tiếp tục dùng việc chờ T001 để chặn nội dung/vận hành.

1. Đã hoàn thiện bài #4 loading/error/empty states theo ngày 39 của plan, component TypeScript độc lập và gói xuất bản/chia sẻ. 4 static-render tests + typecheck đạt. Bài đã đăng Hashnode và chia sẻ YouTube Community; video bổ trợ đã dựng và đăng ngày 11/10 (https://youtu.be/H-nSNjv-F1g, phụ đề EN xác minh 12/10); xem `project-docs/marketing/08-empty-error-states.md` và `09-empty-error-publication.md`.
2. Review đợt A ngày 12–13/10 và 17/10; đợt B ngày 13–14/10 và 18/10 sau khoảng 19:25 Asia/Saigon. Xem `project-docs/execution/19-funnel-audit-and-review.md` và `project-docs/execution/17-feedback-and-review.md`; baseline ba nền tảng đã ghi. Chọn một bottleneck có bằng chứng; chưa tạo automation hoặc thay giá.
3. Đợt bài #4 đã phân phối ngày 11/10 trên Hashnode và YouTube Community. Thu câu hỏi/đọc số liệu ở lần review rồi chọn nội dung hoặc cải tiến tiếp theo. Chưa mở thêm kênh hoặc gửi lời mời mới.
4. Khi người dùng quay lại bước thử cài, kiểm tra T001/cấp ZIP riêng theo `project-docs/execution/15-independent-tester.md`; thu repro thật rồi sửa/FAQ/changelog. Hiện chưa xác minh tính độc lập hoặc activation tester.

## Bản ghi bàn giao — 11/10/2026

Đã ghi các bước mở bán v0.1.2, hai đợt nội dung, baseline và audit funnel. Snapshot tài liệu lần này gồm ví dụ tutorial độc lập và ảnh sản phẩm dùng dữ liệu giả; không đưa paid source/ZIP hoặc ảnh chụp tài khoản vào Git. Video #4 chưa dựng; thử cài độc lập tạm gác theo yêu cầu. Các lịch review là thủ công; chưa có automation, sale thật hoặc feedback độc lập được xác minh.

## Phạm vi repo public

Repo này chứa free sample và ghi chú tiến độ. Source/ZIP của UI Kit trả phí và bằng chứng tài khoản riêng không được publish trong repo này. Tài liệu tiến độ, vận hành tổng hợp và ví dụ tutorial độc lập được công khai.

Sample và kit hiện đều là frontend với dữ liệu giả; không có backend, authentication, persistence hoặc CRM sync. Kit không bao gồm dịch vụ cài đặt/tùy biến hộ. Không có cam kết doanh thu hoặc mức tiết kiệm thời gian chưa đo.

## Tài liệu dự án được công khai

Theo yêu cầu người dùng, [project-docs](project-docs/README.md) bổ sung plan ban đầu (Markdown/Word/PDF), plan mới và tài liệu nghiên cứu, triển khai, QA, sử dụng kit, sales/marketing. Công khai bản nháp không có nghĩa đã mở bán hoặc đăng bài. Source/ZIP/video giao hàng của kit trả phí vẫn ở local.
