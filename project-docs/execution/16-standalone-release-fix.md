# Kit v0.1.2 — sửa dependency local và hướng dẫn setup

Ngày: 10/10/2026. Phát hiện qua tự kiểm tra của người tạo, chưa có phản hồi từ người thử độc lập.

## Vấn đề và giới hạn kết luận

package.json và lockfile của ZIP v0.1.1 còn khai báo `lead-table-sample: file:../leadflow-table-sample`. Code trong src không import package này. Khai báo trỏ ra ngoài ZIP, tạo dependency vào cấu trúc thư mục của người tạo và không cần cho sản phẩm standalone.

Đã giải nén ZIP v0.1.1 vào một thư mục tạm không có sample bên cạnh: npm ci và production build vẫn đạt. Vì vậy chưa ghi nhận đây là lỗi chặn cài đặt trong môi trường này; sửa để loại dependency local dư thừa và tránh giao gói có link ra ngoài. Kết quả clean check trước đây chỉ cho thấy cài/build đạt, chưa kiểm tra tính độc lập của dependency graph.

## Bản sửa

- Gỡ dependency local khỏi package.json, packages gốc và hai entry link trong lockfile; giữ phiên bản/integrity của các dependency khác.
- Nâng bản giao lên v0.1.2; không thay đổi source UI.
- README/walkthrough giải thích thư mục chứa package.json, không cần clone sample, PowerShell dùng npm.cmd và cách tải bản sửa từ giao dịch cũ.
- SUPPORT phản ánh thời hạn hỗ trợ/refund 14 ngày đã được chủ sản phẩm chốt và listing đã mở bán.
- FAQ bổ sung cài độc lập, PowerShell và nâng từ v0.1.1. Các câu hỏi này do audit nội bộ đề xuất; chưa được coi là câu hỏi thật của khách.

## Artifact và kiểm tra

- ZIP private: `D:/leadflow-releases/leadflow-ui-kit-v0.1.2.zip`, 28 files, 2,172,482 bytes.
- SHA256: `e109699299b26457ede069ec5dd0dd6221e8da86c822b7dd85963e6718cefdc3`.
- ZIP integrity và SHA từng file trong FILE_SHA256.json đạt.
- Giải nén vào thư mục tạm độc lập; npm ci đạt (35 packages); không có sibling sample.
- Unit 7/7, browser Chromium desktop/mobile 8/8, typecheck và production build đạt từ bản giải nén đó.
- Chưa xác minh macOS/Linux hoặc một developer khác tự cài.

## Phân phối và phản hồi

Đã upload và lưu v0.1.2 trên Gumroad, reload xác nhận file còn tồn tại. Đặt bản mới ở đầu, bản cũ mang nhãn Previous release. Tải lại qua link Download và đối chiếu SHA256 khớp artifact local; manifest tải lại không còn dependency local. Buyer instructions đã cập nhật và lưu. Không gửi email marketing hoặc lời mời cho người khác trong bước này.

Bộ thử độc lập và mẫu phản hồi: `15-independent-tester.md`. Khi nhận phản hồi, tái hiện lỗi rồi cập nhật changelog/FAQ theo kết quả thực tế.

FAQ công khai đã lưu và xác minh trên listing: cài độc lập, PowerShell, nâng bản và phạm vi filter/bulk selection. Bằng chứng: `../sales/assets/v0.1.2/gumroad-faq.png` và `gumroad-content.png`. Không chạy test purchase mới; download đối chiếu ở bước này là từ seller editor.
