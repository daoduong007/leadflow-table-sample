# Vận hành vòng phản hồi và review đầu tiên — 10/10/2026

Trạng thái: bộ ghi nhận sẵn dùng, chưa có tester độc lập/feedback/sale được xác minh. Lịch ngày trong plan là tham chiếu; bài và video thực tế đã đăng 10/10/2026, nên tính các cửa sổ review từ ngày đăng thật.

## Bước tiếp theo và điều kiện hoàn thành

| Việc | Có thể thực hiện | Bằng chứng hoàn thành |
|---|---|---|
| Thử cài độc lập | Chủ sản phẩm chọn người đã đồng ý, gửi bản thử riêng theo `15-independent-tester.md` | OS/Node/npm, thời gian chạy, bước vướng, expected/actual và kết quả thao tác |
| Sửa vấn đề lớn nhất | Khi có vấn đề tái hiện được | Repro → sửa → phép kiểm tra xác nhận → changelog/FAQ nếu cần |
| Review 48–72 giờ | 12–13/10/2026, cùng múi giờ Asia/Saigon | Snapshot số liệu có kỳ/thời điểm và định nghĩa rõ |
| Review 7 ngày | 17/10/2026 | So sánh cùng chỉ số, chọn một bottleneck và một thay đổi |
| Bài #3 mock → API | Bản viết và ví dụ đã sẵn dùng | Preview editor/code/link/disclosure được kiểm tra trước xuất bản |

Đợt B (bài #4 + YouTube Community đăng 11/10 khoảng 19:25) có review riêng 13–14/10 và 18/10 sau khoảng 19:25 Asia/Saigon. Xem `19-funnel-audit-and-review.md` cho bảng đo và audit mobile.

Chưa tạo automation. Không gán ngày hoàn thành cho công việc còn phụ thuộc người khác.

Cập nhật 11/10: chủ sản phẩm yêu cầu tạm gác thử cài và làm các bước sau. Baseline ba nền tảng đã ghi tại `18-first-baseline.md`; bài #4/component/gói phân phối đã hoàn thiện; bài đã đăng Hashnode và chia sẻ YouTube Community ngày 11/10 tại `../marketing/08-empty-error-states.md` và `09-empty-error-publication.md` (4 static-render tests + typecheck đạt). Chưa có phản hồi thật để chọn patch hoặc FAQ theo feedback; không dùng thiếu tester để chặn bước nội dung. Các mốc review còn giữ lịch thủ công.

## Ghi phản hồi mà không lưu thông tin người mua

Nhận qua email hỗ trợ đã công khai. Dùng mã T001/T002 thay tên/email; lưu receipt, thư hoặc dữ liệu tài khoản trong nơi riêng của chủ sản phẩm. Không commit chúng vào repo public.

Copy block này cho mỗi vấn đề thật vào một bản ghi riêng đã làm sạch dữ liệu:

```text
ID / ngày nhận / phiên bản:
Nguồn: tester / free sample / người mua (không ghi danh tính)
Phạm vi: setup / sync / docs / usability / feature request
Môi trường: OS, Node, npm, browser
Các bước tái hiện:
Kỳ vọng / thực tế:
Thông báo lỗi đã loại secret:
Tái hiện nội bộ: chưa thử / có / không
Ảnh hưởng: không cài được / sai dữ liệu / khó hiểu / đề xuất
Tần suất: số lần / số lần thử (chưa biết nếu thiếu)
Workaround hiện có:
Quyết định: sửa / làm rõ docs / cần thông tin / ngoài scope
Phiên bản sửa và phép kiểm tra:
FAQ/changelog cần cập nhật:
Phút hỗ trợ thực tế:
Trạng thái: mới / đang tái hiện / đã sửa nội bộ / chờ người báo xác nhận / đóng
```

Không tạo ticket giả để làm đầy bảng. Patch v0.1.2 về dependency local là audit nội bộ, không tính là feedback tester. Hiện có **0 phản hồi độc lập được ghi nhận**, không khẳng định không ai đã gửi email.

## Thứ tự xử lý

1. Không cài/chạy được theo README và lockfile.
2. Thao tác advertised cho kết quả sai, nhất là đồng bộ table/detail/pipeline.
3. Hướng dẫn/phạm vi gây hiểu nhầm.
4. Đề xuất tính năng: ghi công việc người dùng đang cần giải quyết; chưa thêm P1 chỉ vì có ý tưởng.

Chỉ sửa sau khi có repro hoặc bằng chứng đủ rõ. Sau sửa, xác minh đúng ca lỗi và các flow có liên quan; release patch khi cần, không phát hành chỉ để tăng version. Mẫu trả lời không phải cam kết thời gian phản hồi:

> Cảm ơn bạn đã gửi thông tin. Mình cần phiên bản kit, Node/npm, hệ điều hành và các bước dẫn tới lỗi để tái hiện. Bạn bỏ secret và dữ liệu khách thật khỏi log/ảnh giúp mình. Mình sẽ đối chiếu với phạm vi setup/tính năng của bản đã bán.

## Ghi số liệu theo cùng kỳ

Lấy từ dashboard có sẵn; không tự xây analytics. Có thể ghi số liệu tổng hợp trong repo, không đưa order ID/email/chi tiết thanh toán lên đây.

| Chỉ số | Nguồn | Cách ghi và giới hạn |
|---|---|---|
| Bài Hashnode | Analytics của blog/bài nếu có | Tên chỉ số đúng UI, kỳ đo, tổng/unique nếu được phân biệt |
| Video YouTube | Studio → Analytics video | Views, impressions, CTR, thời lượng xem khi đủ dữ liệu; không coi view là click |
| Trang bán | Gumroad analytics nếu có | Visits, nguồn/referrer, kỳ đo; không suy ra khách duy nhất nếu UI không có |
| Activation sample/kit | Người thử xác nhận chạy/thao tác | Tách khỏi download hoặc lời khen |
| Đơn thật/refund | Gumroad sales tổng hợp | Loại test purchase; ghi refund riêng, không xem payout là gross sales |
| Hỗ trợ | Log công việc thực tế | Số ticket, tổng phút, chủ đề lặp; support/đơn = chưa áp dụng nếu chưa có đơn |

```text
Review: baseline / 48–72h / 7 ngày
Thời điểm (Asia/Saigon):
Kỳ đo (start/end, timezone của dashboard):
Hashnode (metric name/value):
YouTube (metric name/value):
Gumroad visits/referrers (nếu có):
Activation được xác nhận:
Đơn thật / refund / test bị loại:
Ticket / phút hỗ trợ:
Giới hạn đo (lượt QA, delay, thiếu tracking):
Bottleneck và bằng chứng:
Một thay đổi tiếp theo / cách đánh giá:
```

Ô chưa đọc ghi **chưa đo**, không thay bằng 0. Sample chưa cài analytics; UTM trên URL tự nó không đếm click. Chưa đủ dữ liệu để nối một view YouTube với một visit Gumroad hoặc một đơn. Nếu dashboard không lọc được lượt QA của người tạo, ghi đó là giới hạn.

## Quyết định khi review

- Ít traffic: cải thiện cách đưa tài nguyên tới đúng developer; giữ hai kênh đã chọn.
- Có view nhưng thiếu activation: kiểm tra đường dẫn, quickstart và thông điệp; chưa kết luận về giá.
- Có người chạy được nhưng không mua: hỏi phần hữu ích/thiếu và trở ngại cụ thể.
- Có lỗi lặp lại: ưu tiên cùng lỗi đó trong docs hoặc patch.
- Thiếu số liệu: ghi thiếu, tiếp tục một thử nghiệm phân phối nhỏ; chưa đổi giá hoặc xây sản phẩm thứ hai.

## Gói xuất bản bài #3

- Body: `../marketing/03-mock-to-api.md`, bỏ H1 nếu editor có title riêng và bỏ toàn bộ Owner note cuối bài.
- Title: **Replace mock dashboard data with an API: validation, request states and retry**.
- Subtitle/SEO: **Validate API records, distinguish empty results from failed requests, and add retry with cleanup in a small React dashboard example.**
- Slug đề xuất: `replace-mock-dashboard-data-with-api`.
- Tags: React, TypeScript, Web Development; dùng tag thực tế của editor.
- Ảnh tùy chọn: `../sales/assets/v0.1.1/desktop-table.png`; caption phải nói đây là UI mock của paid kit, không phải API backend đang hoạt động.
- Giữ disclosure AI và phân biệt tutorial adapter với kit; dùng CTA ngắn cuối bài.
- Bài #3 đã xuất bản 10/10/2026 theo yêu cầu người dùng: https://daoduong007.hashnode.dev/replace-mock-dashboard-data-with-api. Nhịp 3–7 ngày là đề xuất trước đó; hai bài hiện được đăng cùng ngày, chưa có dữ liệu để đánh giá nhịp này.

## QA nội dung — 10/10/2026

- `node --import tsx --test project-docs/marketing/examples/lead-api.test.ts`: 7/7 đạt.
- `npm run typecheck`: đạt, gồm adapter và hook độc lập.
- Ca kiểm tra: payload hợp lệ/rỗng; shape/ID; status/amount; HTTP; JSON; mạng/hủy; signal được truyền cho fetch.
- Hook chỉ được typecheck; chưa có browser test, live backend, auth hoặc mutation integration. Ví dụ không thay đổi app sample hoặc release v0.1.2.

Nguồn kỹ thuật: [React Effect cleanup](https://react.dev/reference/react/useEffect), [MDN Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), cùng docs Next.js được đóng gói với phiên bản 16.4.0 hiện tại. Bài là giả thuyết nội dung trong plan, chưa có bằng chứng search volume hoặc câu hỏi của tester thật.
