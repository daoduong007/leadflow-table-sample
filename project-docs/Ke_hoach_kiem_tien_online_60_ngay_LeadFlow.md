---
title: "KẾ HOẠCH 60 NGÀY XÂY DÒNG THU NHẬP TỪ SẢN PHẨM SỐ"
subtitle: "Lead Dashboard UI Kit: Nội dung → Bản mẫu miễn phí → Sản phẩm trả phí → Giao tự động"
lang: vi
updated: "2026-10-10"
---

# KẾ HOẠCH 60 NGÀY XÂY DÒNG THU NHẬP TỪ SẢN PHẨM SỐ

**Giai đoạn:** 10/10/2026 – 08/12/2026.  
**Điểm xuất phát:** Full-stack developer tại Việt Nam; chưa bắt đầu tìm khách, chưa có network, review hoặc tệp người mua.  
**Ưu tiên:** Xây tài sản bán nhiều lần, giảm công việc riêng cho từng khách và tự động hóa thanh toán/giao sản phẩm.  
**Thời gian:** 170 giờ = 8 tuần × 20 giờ + 4 ngày cuối × 2,5 giờ trung bình. Lịch chi tiết dùng 3 giờ × 6 ngày + 2 giờ × 1 ngày mỗi tuần; 4 ngày cuối là 3 + 3 + 2 + 2 giờ.  
**Ngân sách tiền mặt:** Tối đa 100 USD trong 60 ngày, chưa gồm phí giao dịch và thuế; không bắt buộc tiêu hết.  
**Trạng thái:** Kế hoạch thử nghiệm. Sản phẩm, giá, lượng truy cập và số lượt mua đều là giả thuyết hoặc mục tiêu, không phải dự báo chắc chắn.

> **Quyết định chiến lược:** Kiểm chứng một nhu cầu nhỏ → làm một UI Kit → đưa người mua đến qua nội dung và bản mẫu miễn phí → tự động giao file → cải thiện dựa trên giao dịch và phản hồi. Không đặt dịch vụ triển khai theo khách hoặc SaaS vào lộ trình 60 ngày này.

## TÓM TẮT ĐIỀU HÀNH

| Hạng mục | Quyết định ban đầu |
|---|---|
| Người mua thử nghiệm | Freelance developer và agency web nhỏ đang xây giao diện CRM/lead management bằng Next.js/React |
| Công việc cần giải quyết | Dựng nhanh bảng lead, trang chi tiết và pipeline có tương tác, dễ tùy biến |
| Sản phẩm giả thuyết | Lead Dashboard UI Kit: mã nguồn giao diện + dữ liệu giả + tài liệu + video |
| Thông điệp | “Giao diện lead dashboard có sẵn bảng, bộ lọc, trang chi tiết và Kanban để bạn tùy biến.” |
| Giá thử nghiệm | Một sản phẩm, một mức giá 29 USD; chỉ đổi khi có lý do được ghi nhận |
| Bản miễn phí | Một lead table có dữ liệu giả và ví dụ tùy biến |
| Phân phối | GitHub sample, bài kỹ thuật theo vấn đề cụ thể, video demo và cộng đồng cho phép chia sẻ |
| Thanh toán/giao hàng | Gumroad nếu tài khoản đủ điều kiện; dùng chức năng có sẵn |
| Mục tiêu ngày 60 | Có sản phẩm tự phục vụ, dữ liệu về người mua và tín hiệu bán thực; hiểu điểm nghẽn nếu chưa bán được |
| Mở rộng | Cải thiện cùng sản phẩm; chưa làm sản phẩm thứ hai hoặc SaaS |

**Mức độ thụ động mong muốn:** Khách có thể xem demo, mua, tải và cài theo tài liệu mà không cần một cuộc gọi hoặc một dự án triển khai riêng. Công việc tạo traffic, cập nhật dependency, sửa lỗi và xử lý hoàn tiền vẫn cần người làm. 60 ngày đầu là giai đoạn xây và kiểm chứng hệ thống này.

# 1. NGUYÊN TẮC VÀ CÁC GIẢ THUYẾT

## 1.1. Những điều phải kiểm chứng

- Developer thực sự cần các màn hình này cho công việc hiện tại, không chỉ thấy demo đẹp.
- Bản trả phí có giá trị rõ hơn việc tự ghép các component miễn phí.
- Người dùng cài được sản phẩm và hiểu cách nối dữ liệu của họ vào UI.
- Có thể tiếp cận đúng người mua bằng nội dung, bản mẫu và cộng đồng.
- Giá 29 USD phù hợp với giá trị và phạm vi; chưa được xem là giá thị trường đã xác nhận.
- Lượng hỗ trợ đủ thấp để việc bán thêm một bản không tạo thêm một dự án.

**“Tệp khách hàng” cần xây:** Những người đang có nhu cầu làm dashboard bằng stack phù hợp. Lượt tải miễn phí và lượt xem chỉ là bước đầu; giao dịch và hành vi sử dụng mới giúp xác nhận nhu cầu.

## 1.2. Quy tắc ưu tiên

1. Kiểm chứng công việc người mua đang cần làm.
2. Làm demo/bản mẫu đủ để nhận phản hồi thực.
3. Hoàn thiện một sản phẩm nhỏ, dễ tự sử dụng.
4. Tạo đường đi từ nội dung đến trang bán.
5. Đo giao dịch, lỗi và công sức hỗ trợ trước khi mở rộng.

Không dành tuần đầu cho logo, nhiều gói giá, hệ thống email riêng hoặc dashboard analytics tự xây. Khi thiếu thời gian, cắt tính năng và số kênh; giữ việc kiểm chứng và phân phối.

## 1.3. Giới hạn phạm vi

- Không hứa “thu nhập thụ động hoàn toàn” hoặc số doanh thu chắc chắn.
- Không dùng dữ liệu khách thật; demo dùng dữ liệu giả.
- Không chạy quảng cáo trả tiền trong thử nghiệm này.
- Không hứa tùy biến, cài đặt hộ hoặc hỗ trợ không giới hạn trong giá Kit.
- Không thêm backend CRM, tích hợp API, AI hoặc subscription vào bản đầu.
- Không lấy số lượng download làm bằng chứng có người sẵn sàng mua.
- Kiểm tra quyền phân phối của dependency, font, icon và ảnh trước khi phát hành.
- Chưa xây sản phẩm thứ hai khi chưa hiểu sản phẩm đầu bán hoặc không bán được vì sao.

# 2. SẢN PHẨM VÀ NGƯỜI MUA

## 2.1. ICP thử nghiệm

**Ưu tiên:** Freelance developer hoặc agency web đang xây một CRM nội bộ/lead dashboard, dùng React hoặc Next.js và có khả năng tự nối API.

**Dấu hiệu phù hợp:**

- Đang có dự án thật cần bảng dữ liệu, lead detail hoặc pipeline.
- Dùng stack tương thích, muốn kiểm soát mã nguồn.
- Hỏi về component, data model, bộ lọc hoặc tùy biến dashboard.
- Có quyền quyết định mua một asset nhỏ cho dự án.
- Sẵn sàng tự cài theo tài liệu và tự phát triển phần backend.

**Chưa phù hợp:** Chủ doanh nghiệp muốn một CRM dùng ngay; người cần bạn tích hợp HubSpot/Slack; người dùng stack khác; người chỉ muốn tải miễn phí; người yêu cầu làm riêng toàn bộ sản phẩm.

Đây là cách sàng lọc cho thử nghiệm, không phải kết luận rằng nhóm này chắc chắn sẽ mua.

## 2.2. Giá trị cần chứng minh

Bản trả phí phải giúp người mua có một bộ màn hình thống nhất, tương tác được và hiểu cách tùy biến. Không chỉ là screenshot hoặc một bộ component chung.

**Khác biệt đề xuất:** Data model lead nhất quán giữa các màn hình; trạng thái empty/loading/error có ví dụ; cấu trúc code dễ đọc; hướng dẫn thay mock data bằng API của người mua.

Trong tuần đầu, so sánh ít nhất 5 lựa chọn miễn phí/trả phí. Nếu không giải thích được vì sao người mua chọn Kit này, thu nhỏ hoặc đổi giả thuyết trước khi xây tiếp.

## 2.3. Bản miễn phí và bản trả phí

| Thành phần | Miễn phí | Trả phí 29 USD |
|---|---|---|
| Lead table | Một ví dụ dùng được, dữ liệu giả | Bảng đầy đủ với tìm kiếm, lọc, phân trang |
| Chi tiết lead | Không có | Trang chi tiết và chỉnh trạng thái trong demo |
| Pipeline | Không có | Kanban với thao tác chuyển trạng thái |
| Data model | Sample tối thiểu | Types và mock data dùng chung giữa màn hình |
| Tài liệu | Cách chạy sample | Setup, cấu trúc, tùy biến và nối API |
| Video | Demo ngắn | Walkthrough cài đặt/tùy biến |
| Hỗ trợ | README và issue cho sample | Hỗ trợ lỗi có thể tái hiện theo policy |

Bản miễn phí phải hữu ích độc lập. Đường dẫn tới bản trả phí giải thích giá trị bổ sung, không khóa một ví dụ bị hỏng hoặc cố tình thiếu bước cài đặt.

## 2.4. P0, P1 và ngoài phạm vi

**P0 — bản đầu phải có:**

- Next.js + TypeScript; một hệ thống styling duy nhất.
- Lead table: tìm kiếm, lọc trạng thái, phân trang và chọn lead.
- Lead detail: thông tin, người phụ trách, trạng thái, activity giả.
- Kanban: chuyển trạng thái và cập nhật nhất quán với table/detail.
- Mock data; trạng thái empty/loading/error; layout dùng được trên mobile.
- README, video, license, policy hỗ trợ, changelog.

**P1 — chỉ thêm khi có phản hồi đủ cụ thể:** Dark mode, export CSV, filter nâng cao, ví dụ data adapter bổ sung. Mỗi lần chỉ chọn một cải tiến.

**Ngoài phạm vi:** Auth production, database server, billing, AI, gửi email/Slack, CRM sync, nhận lead thật, mobile app, nhiều framework hoặc quản trị tenant.

Demo chạy bằng dữ liệu giả phía client. Nêu rõ việc refresh sẽ reset dữ liệu nếu chưa có persistence; không gây hiểu nhầm rằng đây là CRM hoàn chỉnh.

# 3. FLOW PHÂN PHỐI VÀ BÁN TỰ PHỤC VỤ

```text
Bài hướng dẫn / video / chia sẻ cộng đồng phù hợp
                        |
                GitHub sample + demo
                        |
          Trang giới thiệu bản đầy đủ + FAQ
                        |
               Checkout của nền tảng
                        |
          Receipt + link tải file tự động
                        |
          README + video + troubleshooting
                        |
       Feedback / sửa lỗi / cập nhật có phạm vi
```

## 3.1. Người mua tìm thấy bạn ở đâu?

**Kênh chính:** GitHub sample và bài kỹ thuật giải quyết đúng công việc mà Kit hỗ trợ.  
**Kênh phụ:** Video walkthrough ngắn và chia sẻ tại cộng đồng cho phép giới thiệu sản phẩm.

Chọn một nơi xuất bản bài và một nơi đăng video; không mở nhiều kênh cùng lúc. Nội dung có thể tiếp tục mang lượt xem về sau, nhưng SEO chưa được giả định tạo traffic hoặc doanh thu trong 60 ngày.

**Chủ đề thử nghiệm:**

- “Build a lead table with filters in Next.js.”
- “Keep table and Kanban lead status in sync.”
- “Replace mock dashboard data with your API.”
- “Handle empty and error states in a lead dashboard.”

Trước khi viết, tìm câu hỏi hoặc yêu cầu thực liên quan. Không khẳng định có search volume chỉ vì một keyword nghe hợp lý.

## 3.2. Một nội dung cần dẫn đến đâu?

1. Giải quyết một vấn đề có thể làm theo.
2. Đưa sample hoặc demo liên quan.
3. Nêu rõ bản đầy đủ bổ sung màn hình/tài liệu nào.
4. Dẫn tới một trang bán duy nhất.

Không yêu cầu email chỉ để xem demo. Nếu thu email cho thông báo sản phẩm, cần sự đồng ý rõ ràng; không thêm người vào danh sách marketing chỉ vì họ từng tải sample.

## 3.3. Trang bán tối thiểu

- Một câu mô tả đối tượng và việc sản phẩm giúp thực hiện.
- Demo trực tiếp, screenshots thật và video.
- Danh sách file, màn hình và tương tác được giao.
- Stack, phiên bản đã kiểm thử, yêu cầu môi trường.
- Phần miễn phí/trả phí và phạm vi ngoài sản phẩm.
- Giá, license, chính sách hỗ trợ/hoàn tiền.
- FAQ: backend có sẵn không, có nối CRM không, có cài hộ không?
- Nút mua và đường dẫn thử sample.

Không dùng testimonial giả hoặc tuyên bố tiết kiệm số giờ chưa được đo.

## 3.4. Vận hành tự động ở mức vừa đủ

Dùng nền tảng cho checkout, receipt và giao file. Không tự xây billing hoặc hệ thống license server cho bản đầu. Gumroad gửi receipt kèm đường dẫn tải sau khi khách mua; có thể dùng email workflow có sẵn nếu thực sự cần. Xem nguồn ở phần 12.

Mục tiêu: Khách có thể hoàn tất mua và lấy sản phẩm khi bạn không online. Việc duyệt tài khoản, payout, refund và hỗ trợ vẫn cần theo dõi.

# 4. KIỂM CHỨNG TRƯỚC KHI XÂY ĐẦY ĐỦ

## 4.1. Tuần đầu: bằng chứng cần thu

- Ít nhất 5 sản phẩm/sample tương tự: giá trị, phạm vi, tài liệu và điểm khác biệt.
- Khoảng 10 câu hỏi/yêu cầu công khai liên quan dashboard, có ghi nguồn và ngày.
- Cố gắng có 3 phản hồi từ người đúng ICP về mockup/sample; đây là mục tiêu, không phải điều kiện có thể bảo đảm.
- Một bản ghi giải thích người mua đang làm việc gì và lý do Kit đáng mua.

Không cần nhận dự án dịch vụ để kiểm chứng. Có thể chia sẻ sample, nhờ thử cài đặt hoặc hỏi về công việc thực tế ở cộng đồng phù hợp.

## 4.2. Câu hỏi phản hồi

1. Lần gần nhất bạn làm dashboard tương tự là khi nào?
2. Phần nào bạn phải tự dựng hoặc sửa nhiều nhất?
3. Bạn đang dùng template/component nào? Vì sao chọn nó?
4. Trong demo này, phần nào hữu ích cho dự án hiện tại? Phần nào thiếu?
5. Nếu tự cài, bước nào khó hiểu hoặc bị lỗi?

Không dùng “Bạn có thấy hay không?” làm câu hỏi chính. Ghi nhận lời nói và hành vi riêng; lời khen không tương đương với quyết định mua.

## 4.3. Cổng ngày 7

**Tiếp tục làm bản nhỏ** khi có một nhu cầu cụ thể xuất hiện từ nhiều bằng chứng độc lập và có lý do phân biệt bản trả phí với lựa chọn miễn phí.

**Nếu bằng chứng yếu:** Chỉ làm một sample với giới hạn 4–6 giờ ở tuần 2 để kiểm chứng tiếp; phần thời gian còn lại dành cho phân phối và nhận phản hồi. Chưa mở rộng thành bộ màn hình đầy đủ.

# 5. ĐÓNG GÓI ĐỂ GIẢM HỖ TRỢ

## 5.1. Definition of Done trước khi bán

- [ ] Table, detail và Kanban hoạt động với cùng data model.
- [ ] Demo nêu rõ dùng mock data, trạng thái lưu tạm và giới hạn sản phẩm.
- [ ] Layout mobile, navigation, empty/loading/error states đã kiểm tra.
- [ ] Có kiểm tra tương tác quan trọng: tìm/lọc, phân trang, chuyển trạng thái và tính nhất quán giữa màn hình.
- [ ] Cài trên môi trường sạch theo README; build/typecheck và các kiểm tra cần thiết thành công.
- [ ] Ít nhất một người thử làm theo tài liệu nếu tìm được; nếu chưa, ghi rõ chỉ mới tự kiểm tra.
- [ ] Không có secret, dữ liệu thật hoặc asset không đủ quyền phân phối.
- [ ] LICENSE, support policy, refund policy và changelog có nội dung rõ.
- [ ] ZIP có phiên bản; link tải/demo hoạt động; checkout/giao file được thử bằng cách nền tảng cho phép.

## 5.2. Deliverables

```text
lead-dashboard-ui-kit-v1.0.0.zip
  source/                 # app, components, types, mock data
  README.md               # setup, cấu trúc, tùy biến
  LICENSE.txt             # điều kiện sử dụng
  SUPPORT.md              # cách báo lỗi và giới hạn hỗ trợ
  CHANGELOG.md
  docs/                   # nối API, FAQ, troubleshooting
```

Video có thể giao dưới dạng file hoặc link được kiểm tra quyền truy cập. Phân biệt asset miễn phí với bản trả phí trong quy trình release để tránh đăng nhầm mã nguồn.

## 5.3. Chính sách đề xuất cần hoàn thiện trước khi bán

**License:** Cho phép người mua sử dụng/tùy biến trong ứng dụng thương mại của họ hoặc dự án khách hàng; không cho phép bán lại/phân phối Kit dưới dạng template hay source bundle. Làm rõ trường hợp chuyển source cho khách dự án và quyền của bên nhận. Kiểm tra license dependency; không mặc nhiên sở hữu mọi asset đã dùng.

**Support:** Trong 14 ngày đầu sau mua, hỗ trợ lỗi cài đặt/tính năng được quảng cáo nếu có thể tái hiện trên phiên bản được công bố. Không bao gồm custom feature, nối API riêng, deploy hộ hoặc hỗ trợ môi trường chưa được liệt kê. Chỉ cam kết thời gian phản hồi mà bạn có thể đáp ứng.

**Update:** Nêu rõ phạm vi cập nhật được bao gồm; không hứa cập nhật mọi framework hoặc lifetime updates vô hạn. Ghi phiên bản được hỗ trợ trên trang bán.

**Refund:** Viết policy phù hợp nền tảng và nghĩa vụ áp dụng; có cách xử lý khi file lỗi hoặc sản phẩm không đúng mô tả. Không dùng policy để thay thế việc giao sản phẩm chạy được.

## 5.4. Giảm câu hỏi lặp lại

Mỗi lỗi lặp lại trở thành một mục FAQ, một bước kiểm tra hoặc một sửa đổi sản phẩm. Dùng mẫu báo lỗi: phiên bản Kit, môi trường, bước tái hiện, expected/actual, log đã loại thông tin nhạy cảm.

Sau phát hành, gom việc review support vào các khung giờ phù hợp với thời gian phản hồi đã công bố. Đo giờ hỗ trợ/đơn và tổng giờ; không đặt mục tiêu “thụ động” bằng cách bỏ qua lỗi của khách.

# 6. GIÁ, NGÂN SÁCH VÀ DOANH THU

## 6.1. Một mức giá thử nghiệm

Bắt đầu với **29 USD**, một bản trả phí. Ghi ngày và lý do nếu đổi giá. Chưa làm agency tier, membership, affiliate hoặc bundle trong bản đầu.

Nếu khách không mua, xem lại đối tượng, giá trị và bằng chứng trước khi giảm giá. Không kết luận giá cao khi chưa có đủ lượt xem đúng người mua.

## 6.2. Ngân sách 60 ngày

| Khoản | Trần | Khi nào chi |
|---|---:|---|
| Domain | 20 USD | Khi cần địa chỉ riêng; có thể dùng trang nền tảng trước |
| Demo hosting | 20 USD | Chỉ khi tier miễn phí không phù hợp hoặc không đủ |
| Lưu trữ/video | 10 USD | Khi công cụ miễn phí không đáp ứng |
| Tool thiết kế | 0 USD | Dùng công cụ hiện có |
| Tool hỗ trợ khác | 20 USD | Có tác dụng rõ, tránh thuê nhiều dịch vụ |
| Dự phòng | 30 USD | Chỉ dùng cho nhu cầu phát sinh cần thiết |
| **Tổng trần** | **100 USD** | Chưa gồm phí giao dịch/thuế và công lao động |

Không cần LLM, database production hoặc email API cho UI Kit. Kiểm tra điều kiện sử dụng thương mại của hosting/tool trước khi dùng. Nếu chưa có tín hiệu mua, không tăng chi để “trông chuyên nghiệp hơn”.

## 6.3. Minh họa doanh thu, không phải dự báo

| Số bản đã thanh toán, không hoàn tiền | Giá 29 USD | Doanh thu gộp |
|---|---:|---:|
| 0 | 29 USD | 0 USD |
| 3 | 29 USD | 87 USD |
| 10 | 29 USD | 290 USD |
| 30 | 29 USD | 870 USD |

Không suy ra số đơn từ lượt xem bằng tỷ lệ chuyển đổi chưa đo. Doanh thu gộp không phải tiền rút được hoặc lợi nhuận.

```text
Net contribution ≈ tiền bán thực thu - refund - phí nền tảng/thanh toán
                   - chi phí trực tiếp
Thu nhập theo giờ ≈ net contribution / tổng giờ thực tế
Support hours per order = giờ support / số đơn trong kỳ
```

Công thức contribution chưa trừ thuế và giá trị công lao động. Theo dõi tổng giờ để đánh giá mô hình có hợp ưu tiên của bạn không.

Gumroad hiện có phí bán trực tiếp và phí xử lý riêng; Discover có mức phí khác. Lấy số thực tế từ dashboard/CSV, không dùng 29 USD làm tiền ròng mỗi đơn. Xem nguồn chính thức ở phần 12.

# 7. KPI VÀ CỔNG QUYẾT ĐỊNH

## 7.1. Mốc thử nghiệm ngày 60

| Chỉ số | Mốc định hướng | Ý nghĩa |
|---|---:|---|
| Sản phẩm/sample cạnh tranh được xem | ≥5 | Biết lựa chọn thay thế và giá trị cần phân biệt |
| Bài kỹ thuật hữu ích | 4 | Gắn với tính năng và nhu cầu cụ thể |
| Video demo/hướng dẫn | 2 | Có đường dẫn từ nội dung đến sample/trang bán |
| Sample miễn phí | 1 | Chạy được, có docs và CTA |
| Bản trả phí | 1 nếu qua cổng nhu cầu | Có file, license, docs và giao tự động |
| Lượt xem trang bán từ nguồn phù hợp | Khoảng 100 | Mốc thu thập dữ liệu; không đủ để khẳng định conversion ổn định |
| Người ngoài thử sample/Kit | 3–5 | Có ghi nhận setup và phản hồi, không chỉ download |
| Giao dịch trả phí | Mục tiêu 1–3 | Tín hiệu đầu tiên; không phải dự báo hoặc bằng chứng mô hình đã bền vững |
| Giờ hỗ trợ | Đo thực tế | Phát hiện sản phẩm đang biến thành dịch vụ |

Bài, video và sample là đầu vào chủ động được. Traffic, tester và sale phụ thuộc người khác. Không tạo giao dịch giả để đạt KPI.

## 7.2. Định nghĩa đo lường

- **Product-page visit:** Lượt xem trang bán; phân biệt visit và unique visitor nếu công cụ cho phép.
- **Nguồn phù hợp:** Nội dung/cộng đồng về stack hoặc công việc dashboard; đây là proxy, không xác minh mọi visitor là người mua.
- **Sample activation:** Người xác nhận chạy được sample hoặc tương tác demo; download đơn thuần không đủ.
- **Sale:** Thanh toán thành công; ghi refund riêng, không cộng test purchase.
- **Purchase rate quan sát:** Số đơn / lượt xem trang bán trong cùng kỳ, nêu rõ mẫu nhỏ và giới hạn tracking.
- **Support load:** Số ticket, tổng giờ và chủ đề lặp lại; ghi cả lỗi trước/sau mua.

Dùng công cụ analytics có sẵn, link có tham số nguồn và bảng ghi thủ công. Tuân thủ yêu cầu consent nếu dùng tracking cần consent. Chưa tự xây analytics.

## 7.3. Các cổng chính

**Ngày 7 — chọn vấn đề:** Có nhu cầu cụ thể và lý do khác biệt? Nếu chưa, giới hạn tuần 2 ở sample nhỏ và nghiên cứu thêm.

**Ngày 14 — có nên làm bản đầy đủ?** Có người đúng ICP dùng/đề nghị tính năng gắn với công việc thực, hoặc bằng chứng nhu cầu đủ cụ thể để thử một bản nhỏ? Nếu chưa, không xây thêm màn hình; tiếp tục sample và phân phối. Khi đổi lịch, chuyển những ngày build sang kiểm chứng, không cố bù scope.

**Ngày 21 — đủ điều kiện bán?** Chỉ mở checkout khi sản phẩm đạt Definition of Done, tài khoản bán được xác minh và giao file thử thành công. Nếu chưa, sửa điều kiện thiếu; lịch phát hành là mục tiêu có điều kiện.

**Ngày 35 — điểm nghẽn ở đâu?** Ít traffic phù hợp: cải thiện phân phối. Có traffic nhưng ít thử demo/sample: cải thiện thông điệp. Có dùng nhưng không mua: hỏi về giá trị bổ sung và lý do chưa mua. Không mặc định thêm tính năng.

**Ngày 49 — có đáng cải thiện tiếp?** Nếu có người mua dùng được và support quản lý được, cải thiện cùng Kit. Nếu có phản hồi cụ thể nhưng chưa mua, thử một thay đổi. Nếu thiếu dữ liệu, ưu tiên phân phối; nếu có bằng chứng rõ sản phẩm không giải quyết nhu cầu, dừng giả thuyết hiện tại.

**Ngày 60 — Keep/Pivot/Kill:** Tiếp tục Kit có tín hiệu; đổi đối tượng/offer có căn cứ; hoặc đóng thử nghiệm. Không tự chuyển sang SaaS vì đã đến ngày 60.

# 8. LỊCH 60 NGÀY THEO NGÀY

**Cách dùng:** Mỗi ngày có một ưu tiên và một bằng chứng. Mốc ngày cố định phục vụ nhịp làm việc; cổng nhu cầu/chất lượng quyết định có làm bước phụ thuộc hay không. Công việc chưa được phép tiến lên sẽ thay bằng kiểm chứng, sửa lỗi hoặc phân phối sample.

## Tuần 1 — Chọn vấn đề và kiểm tra nhu cầu

| Ngày / ngày tháng | Giờ | Công việc ưu tiên | Bằng chứng |
|---|---:|---|---|
| 01 — 10/10/2026 | 3 | Viết ICP và một công việc Kit giúp thực hiện | ICP một trang + 5 dấu hiệu phù hợp |
| 02 — 11/10/2026 | 3 | So sánh 5 sample/template miễn phí và trả phí | Bảng lựa chọn thay thế + nguồn |
| 03 — 12/10/2026 | 3 | Thu thập khoảng 10 câu hỏi/yêu cầu liên quan | Danh sách nhu cầu + nguồn/ngày |
| 04 — 13/10/2026 | 3 | Chọn khác biệt, giới hạn P0 và vẽ mockup | Scope một trang + mockup |
| 05 — 14/10/2026 | 3 | Kiểm tra seller/KYC/payout và phí; chưa mở bán | Checklist tài khoản và điều kiện còn thiếu |
| 06 — 15/10/2026 | 3 | Chia sẻ mockup để tìm phản hồi đúng ICP | Ghi nhận phản hồi hoặc các lần chia sẻ |
| 07 — 16/10/2026 | 2 | Review nhu cầu và quyết định cổng ngày 7 | Memo tiếp tục/thu nhỏ + lý do |

## Tuần 2 — Bản mẫu miễn phí và demo

Nếu chưa qua cổng ngày 7, chỉ dùng 4–6 giờ làm sample; chuyển các buổi build còn lại sang tìm nhu cầu, thử thông điệp và nhận phản hồi.

| Ngày / ngày tháng | Giờ | Công việc ưu tiên | Bằng chứng |
|---|---:|---|---|
| 08 — 17/10/2026 | 3 | Khởi tạo stack tối giản và mock lead types | App chạy local + dữ liệu giả |
| 09 — 18/10/2026 | 3 | Lead table với tìm kiếm/lọc cơ bản | Sample tương tác được |
| 10 — 19/10/2026 | 3 | Hoàn thiện responsive và state cơ bản | Demo + ghi nhận kiểm tra |
| 11 — 20/10/2026 | 3 | README sample, quickstart và giới hạn | Người khác có hướng dẫn để thử |
| 12 — 21/10/2026 | 3 | Đăng sample/demo, kiểm tra license asset | Repo public + link demo |
| 13 — 22/10/2026 | 3 | Bài #1 về lead table; chia sẻ đúng nơi | Bài + link nguồn truy cập |
| 14 — 23/10/2026 | 2 | Review phản hồi và cổng bản đầy đủ | Go/hold memo; scope được chốt |

## Tuần 3 — Bản trả phí nhỏ, có điều kiện

Nếu chưa qua cổng ngày 14, dùng tuần này để cải thiện sample và tìm người dùng phù hợp; không xây bản đầy đủ chỉ để đúng lịch.

| Ngày / ngày tháng | Giờ | Công việc ưu tiên | Bằng chứng |
|---|---:|---|---|
| 15 — 24/10/2026 | 3 | Hoàn thiện table: phân trang, chọn lead | Tương tác và state được kiểm tra |
| 16 — 25/10/2026 | 3 | Trang chi tiết dùng chung data model | Detail flow hoạt động |
| 17 — 26/10/2026 | 3 | Kanban và cập nhật trạng thái nhất quán | Chuyển trạng thái phản ánh giữa các màn hình |
| 18 — 27/10/2026 | 3 | Docs tùy biến/nối API, license, support/refund | Bộ tài liệu và policy |
| 19 — 28/10/2026 | 3 | Kiểm tra tương tác, mobile, build và install sạch | QA notes + kết quả clean install |
| 20 — 29/10/2026 | 3 | ZIP có phiên bản, video #1, listing nháp | Release candidate + trang bán nháp |
| 21 — 30/10/2026 | 2 | Cổng chất lượng; test checkout/giao file hợp lệ | Checklist đạt hoặc danh sách việc còn thiếu |

## Tuần 4 — Phát hành và phân phối đầu tiên

Nếu chưa qua cổng ngày 21, giữ listing ở trạng thái nháp; ưu tiên sửa chất lượng hoặc xác minh tài khoản. Không nhận tiền cho bộ file chưa đủ mô tả.

| Ngày / ngày tháng | Giờ | Công việc ưu tiên | Bằng chứng |
|---|---:|---|---|
| 22 — 31/10/2026 | 3 | Phát hành nếu đủ điều kiện; CTA trong sample | Trang bán + link tải/demo được kiểm tra |
| 23 — 01/11/2026 | 3 | Bài #2 về đồng bộ table/Kanban | Bài có sample và CTA liên quan |
| 24 — 02/11/2026 | 3 | Chia sẻ bài/demo tại nơi cho phép | Nhật ký nguồn và phản hồi |
| 25 — 03/11/2026 | 3 | Tìm người thử cài theo docs | Notes tester hoặc ghi nhận chưa tìm được |
| 26 — 04/11/2026 | 3 | Sửa một lỗi setup/trải nghiệm lớn nhất | Changelog + tái kiểm tra lỗi |
| 27 — 05/11/2026 | 3 | Cải thiện FAQ và ảnh/video theo câu hỏi | Listing/docs cập nhật |
| 28 — 06/11/2026 | 2 | Review traffic, sử dụng và sale nếu có | Funnel tuần 4 + một thử nghiệm |

## Tuần 5 — Nội dung và điểm nghẽn chuyển đổi

| Ngày / ngày tháng | Giờ | Công việc ưu tiên | Bằng chứng |
|---|---:|---|---|
| 29 — 07/11/2026 | 3 | Phân tích nguồn traffic và đường dẫn hỏng | Bảng nguồn + ghi nhận giới hạn tracking |
| 30 — 08/11/2026 | 3 | Bài #3 về thay mock data bằng API | Bài + ví dụ adapter, không thêm CRM sync |
| 31 — 09/11/2026 | 3 | Video #2 hướng dẫn setup/tùy biến | Walkthrough theo bản đang bán |
| 32 — 10/11/2026 | 3 | Chia sẻ tài nguyên theo câu hỏi thực | Nhật ký phân phối có chọn lọc |
| 33 — 11/11/2026 | 3 | Thu phản hồi từ người đã thử sample | Notes về công việc, giá trị và trở ngại |
| 34 — 12/11/2026 | 3 | Đổi một yếu tố trang bán có căn cứ | Bản trước/sau + giả thuyết, chưa gọi là A/B test |
| 35 — 13/11/2026 | 2 | Cổng phân phối/chuyển đổi | Chọn bottleneck + bước tuần sau |

## Tuần 6 — Giảm hỗ trợ và cải thiện cùng sản phẩm

| Ngày / ngày tháng | Giờ | Công việc ưu tiên | Bằng chứng |
|---|---:|---|---|
| 36 — 14/11/2026 | 3 | Gom lỗi/câu hỏi vào troubleshooting | FAQ có ví dụ tái hiện |
| 37 — 15/11/2026 | 3 | Sửa lỗi lặp lại; kiểm tra cài sạch sau sửa | Patch release nếu cần + QA |
| 38 — 16/11/2026 | 3 | Làm rõ demo, persistence và phạm vi | Demo/listing đúng hành vi thực |
| 39 — 17/11/2026 | 3 | Bài #4 về empty/error states | Bài + component minh họa |
| 40 — 18/11/2026 | 3 | Phân phối nội dung tốt nhất tới nguồn phù hợp | Bảng nguồn và phản hồi |
| 41 — 19/11/2026 | 3 | Đối soát đơn/refund/phí/payout và giờ support | Số thực tế; ô chưa có dữ liệu ghi 0/chưa biết |
| 42 — 20/11/2026 | 2 | Review vận hành tự phục vụ | Một cải tiến giảm thao tác thủ công |

## Tuần 7 — Quyết định tiếp tục hay đổi giả thuyết

| Ngày / ngày tháng | Giờ | Công việc ưu tiên | Bằng chứng |
|---|---:|---|---|
| 43 — 21/11/2026 | 3 | Hỏi người mua/tester về lần dùng thực | Notes; không tự tạo case study |
| 44 — 22/11/2026 | 3 | Tổng hợp lý do chọn/không chọn Kit | Pain/objection map có nguồn |
| 45 — 23/11/2026 | 3 | Chọn một thay đổi: docs/offer/feature nhỏ | Quyết định theo bottleneck |
| 46 — 24/11/2026 | 3 | Thực hiện thay đổi đã chọn | Artifact cập nhật |
| 47 — 25/11/2026 | 3 | QA phần thay đổi và docs/listing liên quan | Kiểm tra phù hợp thay đổi |
| 48 — 26/11/2026 | 3 | Chia sẻ phiên bản cập nhật đúng nơi | Release notes + nguồn truy cập |
| 49 — 27/11/2026 | 2 | Cổng đầu tư tiếp theo | Keep/test one change/stop memo |

## Tuần 8 — Củng cố flow thay vì mở rộng sản phẩm

Nếu đã quyết định dừng, tuần này dành cho tổng hợp bài học và nghiên cứu giả thuyết thay thế, không tiếp tục build Kit theo quán tính.

| Ngày / ngày tháng | Giờ | Công việc ưu tiên | Bằng chứng |
|---|---:|---|---|
| 50 — 28/11/2026 | 3 | Kiểm tra toàn đường đi nội dung → checkout | Link audit + trải nghiệm trên mobile |
| 51 — 29/11/2026 | 3 | Cập nhật bài/sample có phản hồi tốt nhất | Tài nguyên tốt hơn, không mở thêm kênh |
| 52 — 30/11/2026 | 3 | Kiểm tra file release, dependency và license | Release inventory + các việc cần sửa |
| 53 — 01/12/2026 | 3 | Tối ưu docs cho câu hỏi phổ biến nhất | Một bước tự phục vụ tốt hơn |
| 54 — 02/12/2026 | 3 | Review support, bug và update cadence | Runbook vận hành thực tế |
| 55 — 03/12/2026 | 3 | Phân phối tài nguyên hữu ích và thu feedback | Nhật ký nguồn + hành vi sử dụng |
| 56 — 04/12/2026 | 2 | Review kinh tế và giờ làm | Contribution/giờ + quyết định phân bổ |

## Bốn ngày cuối — Tổng kết và hướng 90 ngày tiếp

| Ngày / ngày tháng | Giờ | Công việc ưu tiên | Bằng chứng |
|---|---:|---|---|
| 57 — 05/12/2026 | 3 | Đối soát traffic, đơn, phí, refund, payout, giờ | Scorecard 60 ngày |
| 58 — 06/12/2026 | 3 | Tổng hợp feedback; xin phép trước khi dùng review | Feedback nội bộ hoặc testimonial được phép |
| 59 — 07/12/2026 | 2 | Chọn tối đa 3 việc cho giai đoạn tiếp theo | Backlog gọn với lý do |
| 60 — 08/12/2026 | 2 | Viết quyết định Keep/Pivot/Kill một trang | Retrospective + hướng 90 ngày |

# 9. NHỊP LÀM VIỆC VÀ REVIEW

| Giai đoạn | Nghiên cứu/feedback | Sản phẩm/QA/docs | Nội dung/phân phối | Review/vận hành | Tổng |
|---|---:|---:|---:|---:|---:|
| Tuần 1–2 tham chiếu | 8h | 6h | 4h | 2h | 20h |
| Tuần 3–4 tham chiếu | 2h | 10h | 6h | 2h | 20h |
| Tuần 5–8 tham chiếu | 2h | 4h | 10h | 4h | 20h |

Bảng là cách phân bổ tham chiếu; lịch từng ngày quyết định tổng 170 giờ. Khi chưa qua cổng nhu cầu, chuyển giờ build sang kiểm chứng/phân phối. Khi đã có người mua và bug, ưu tiên sửa lỗi trước nội dung mới.

**Mỗi thứ Sáu:** Review 30 phút trong buổi 2 giờ; dùng phần còn lại để cập nhật số liệu và chọn một thử nghiệm.

| Ô theo dõi | Tuần này |
|---|---|
| Giờ research / build / content / vận hành | ____ / ____ / ____ / ____ |
| Nội dung/sample đã xuất bản | ____ |
| Nguồn traffic phù hợp | ____ |
| Lượt xem trang bán / giới hạn tracking | ____ / ____ |
| Người xác nhận dùng sample/Kit | ____ |
| Đơn thanh toán / refund / test purchase loại trừ | ____ / ____ / ____ |
| Doanh thu thực / phí / chi phí / tiền rút | ____ / ____ / ____ / ____ |
| Ticket / giờ support / lỗi lặp lại | ____ / ____ / ____ |
| Bằng chứng mạnh nhất về nhu cầu | ____ |
| Điểm nghẽn chính / một thay đổi tuần sau | ____ / ____ |

**Câu chốt:** “Tuần sau tôi ưu tiên ______ vì bằng chứng ______.”

# 10. XỬ LÝ KHI CHƯA CÓ GIAO DỊCH

| Tình huống | Kiểm tra | Bước tiếp |
|---|---|---|
| Ít người đúng đối tượng thấy sản phẩm | Nguồn, chủ đề, nơi chia sẻ, link | Tập trung phân phối và nội dung đúng công việc |
| Có traffic nhưng ít dùng sample/demo | Tiêu đề, khả năng thử nhanh, thông điệp | Làm rõ đối tượng/giá trị và giảm bước thử |
| Có dùng sample nhưng chưa mua | Giá trị thêm của bản trả phí, công việc hiện tại | Thu phản hồi cụ thể; thử một thay đổi offer |
| Có mua nhưng setup khó | Docs, môi trường, dependency | Sửa setup và tài liệu trước tính năng |
| Support nhiều theo từng khách | Scope và kỳ vọng, custom request | Làm rõ policy, cải thiện tự phục vụ |
| Có lượt mua nhưng ít contribution | Phí, refund, công cụ, tổng giờ | Review giá/phạm vi/chi phí dựa trên số thực |

Không dùng một ngưỡng traffic nhỏ để khẳng định thị trường không có nhu cầu. Ghi rõ “chưa đủ dữ liệu” khi phù hợp. Không tự động chuyển sang dịch vụ hoặc SaaS khi Kit chưa bán; cần quyết định riêng dựa trên ưu tiên và bằng chứng mới.

# 11. MẪU COPY VÀ CHECKLIST

## 11.1. Mô tả sản phẩm tiếng Anh

> **Lead Dashboard UI Kit — a Next.js interface starter for lead management.**  
> Build on a consistent set of lead table, detail and Kanban screens with shared TypeScript models, sample data and customization notes.  
> Best for developers building their own CRM interfaces or internal tools. Includes source code, setup instructions and a walkthrough.  
> Uses mock data. Backend, authentication, CRM integrations and deployment services are not included.

Chỉ giữ những câu đúng với bản release thực tế.

## 11.2. CTA trong repo miễn phí

> Need the full lead table, detail and Kanban flow? See the demo, included files and customization guide in the paid kit: [product link]. This free sample works independently.

## 11.3. Mẫu nhờ thử sample

> I’m testing a small Next.js lead dashboard sample for developers. If you’re working on a similar interface, I’d like to know whether the setup works and which part fits your current project. Here’s the demo and source: [link]. No purchase needed.

Chỉ dùng nơi cho phép chia sẻ; không gửi hàng loạt. Mẫu copy này không phải ủy quyền để agent tự gửi tin nhắn.

## 11.4. Checklist trước khi mở bán

- [ ] Có bằng chứng nhu cầu và định vị rõ so với lựa chọn thay thế.
- [ ] Sản phẩm đạt Definition of Done, mô tả đúng phạm vi.
- [ ] Seller/KYC/phương thức payout được kiểm tra trong tài khoản thực.
- [ ] License, policy support/refund và dependency được rà soát.
- [ ] Checkout/giao file thử theo hướng dẫn nền tảng; không tự mua để tạo sale.
- [ ] Demo, download, video và README đều truy cập được.
- [ ] Có nơi nhận báo lỗi và thời gian phản hồi thực hiện được.
- [ ] Sample public không vô tình chứa toàn bộ bản trả phí hoặc bí mật.

# 12. NGUỒN VÀ CÁC ĐIỀU CẦN XÁC MINH

Các trang chính thức dưới đây được tham khảo ngày 10/10/2026. Điều kiện có thể thay đổi; dashboard và kết quả xét duyệt tài khoản quyết định khả năng bán/rút tiền thực tế.

1. [Gumroad — phí](https://gumroad.com/help/article/66-gumroads-fees): Bán trực tiếp hiện có phí 10% + 0,50 USD, chưa gồm phí xử lý thẻ 2,9% + 0,30 USD hoặc phí PayPal; Discover niêm yết 30% gồm processing. Không dùng phí này làm net payout cuối cùng.
2. [Gumroad — nhận tiền](https://gumroad.com/help/article/13-getting-paid): Việt Nam nằm trong danh sách bank payout VND; ngưỡng payout thông thường 100 USD, cần xác minh tài khoản và có thời gian giữ/xử lý tiền.
3. [Gumroad — trải nghiệm mua](https://gumroad.com/help/article/282-how-do-purchases-work-for-my-customers): Khách nhận receipt có đường dẫn tải sau khi mua.
4. [Gumroad — test purchase](https://gumroad.com/help/article/62-testing-a-purchase): Dùng cách thử nghiệm nền tảng hướng dẫn; không tạo giao dịch tự mua để đạt KPI hoặc thúc đẩy payout.
5. [Gumroad — automated email workflows](https://gumroad.com/help/article/131-using-workflows-to-send-automated-updates): Chỉ cấu hình khi có nhu cầu; bản đầu không cần tự xây hệ thống email.

Các khoản thuế/nội dung license cần xử lý theo hoàn cảnh thực tế. Nền tảng xử lý checkout không có nghĩa mọi nghĩa vụ của người bán tại Việt Nam đã được giải quyết.

# 13. ĐỊNH NGHĨA THÀNH CÔNG VÀ QUYẾT ĐỊNH NGÀY 60

**Kết quả tối thiểu hữu ích:** Có sample chạy được, bằng chứng về nhu cầu/lựa chọn thay thế, lịch sử phân phối và kết luận có căn cứ về điểm nghẽn. Nếu chưa qua cổng nhu cầu, không cần phát hành bản trả phí chỉ để hoàn thành kế hoạch.

**Mục tiêu thử nghiệm:** Một Kit tự phục vụ được phát hành khi đủ điều kiện; 1–3 giao dịch từ người mua thật; người mua cài được; hỗ trợ và phí được ghi nhận. Mẫu này còn nhỏ, chưa chứng minh nguồn thu ổn định.

**Keep:** Có giao dịch và sử dụng thực, giá trị rõ, support quản lý được. Dành 90 ngày tiếp cải thiện cùng Kit và nội dung hiệu quả.

**Pivot:** Có bằng chứng cụ thể về đối tượng hoặc công việc khác phù hợp hơn. Chỉ đổi một giả thuyết chính và kiểm chứng lại trước khi xây.

**Kill/đóng thử nghiệm:** Bằng chứng cho thấy giá trị thấp so với lựa chọn thay thế hoặc công sức phân phối/support không hợp ưu tiên. Lưu lại tài sản và bài học; không mở rộng theo quán tính.

**Câu hỏi ngày 60:** Ai đã trả tiền, họ dùng phần nào, họ tìm thấy sản phẩm ở đâu, và mỗi lần bán làm phát sinh bao nhiêu công việc?

> Thành công của flow này là xây được một tài sản có thể bán và giao nhiều lần với công sức tăng thêm thấp. Việc tạo ra tài sản và kênh phân phối vẫn cần kiểm chứng bằng hành vi sử dụng và giao dịch thực tế.


## Cập nhật thực thi — 10/10/2026: bỏ qua lấy feedback theo yêu cầu

Người dùng yêu cầu bỏ qua chia sẻ/thu feedback và chấp thuận làm UI Kit tối thiểu sau sample. Tiếp tục build P0 ở thư mục kit riêng. Đây là quyết định tiếp tục khi chưa kiểm chứng, không phải gate nhu cầu đã đạt. Giá 29 USD vẫn là giả thuyết; seller/KYC/checkout/delivery/payout chưa hoàn tất. Không public source trả phí lên repo sample.
