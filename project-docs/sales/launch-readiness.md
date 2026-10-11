# Kiểm tra chuẩn bị mở bán — 10/10/2026

Cập nhật 11/10/2026: tài liệu phía dưới là snapshot/checklist lịch sử trước mở bán. Hiện listing đã publish, giá $29/support-refund 14 ngày đã chốt; test purchase v0.1.1 và email xác nhận, ZIP v0.1.2 tải lại từ seller editor khớp hash. Chưa xác minh KYC/payout thật hoặc sale thật. Trạng thái mới nhất ở [tiến độ](../../PROJECT_PROGRESS.md), [mở bán](../execution/13-gumroad-launch.md) và [patch v0.1.2](../execution/16-standalone-release-fix.md).


Kiểm tra trên checkout `main` tại commit `7d8d341`. Đã tiếp tục tạo draft sau khi người dùng đăng nhập; chưa mở bán.

## Đã kiểm tra trong lượt này

- Demo public mở được, hiển thị 12 lead giả.
- Tìm `  MINA  ` trả về 1/12 lead; kết hợp status `Won` hiển thị empty state; Clear filters khôi phục 12/12.
- Link Download free source ZIP tải được file `lead-table-sample-v0.1.0.zip`. Archive mở được và có README/package.json. Chưa chạy cài/build lại từ ZIP trong lượt này.
- Bộ ảnh sản phẩm có đủ 6 PNG: desktop rộng 1440px, mobile rộng 390px. Kiểm tra header/kích thước file, không thay thế visual QA hoặc QA kit trước đó.
- Nội dung listing và buyer delivery mô tả đúng giới hạn đã ghi trong docs kit: dữ liệu giả, edits reset khi refresh, không backend/auth/persistence; pipeline dùng status selector, không drag-and-drop.
- Giá 29 USD đã nhập trong draft; hỗ trợ/hoàn tiền 14 ngày vẫn là đề xuất, chưa bật refund policy hoặc mở bán.

## Điều kiện còn thiếu

| Điều kiện | Quan sát hiện tại | Bước để tiếp tục |
|---|---|---|
| Truy cập Gumroad seller | Đã đăng nhập và tạo draft | Hoàn thiện draft hiện có, không tạo sản phẩm trùng |
| Email hỗ trợ công khai | Đã có `daoduong.007@gmail.com` trong listing/buyer content/receipt | Đã xác minh receipt preview |
| ZIP/source/video kit trả phí | Đã dựng lại v0.1.1 và upload ZIP; source ở `D:/leadflow-ui-kit` | File giao ở `D:/leadflow-releases/leadflow-ui-kit-v0.1.1.zip` |
| Seller/KYC/payout | Editor báo chưa kết nối payout và chưa thể publish; KYC chưa xác minh | Người dùng hoàn thiện thông tin nhận tiền tại Settings/Payments |
| Listing/content/test delivery | Đã lưu draft v0.1.1, 3 cover mới, thumbnail, ZIP và receipt message; chưa test purchase | Test checkout/download sau khi đủ điều kiện tài khoản |

SHA256 v0.1.1 hiện tại: `b29d24d02db55dba25efaeb48f8330dc5fc2268e00257c5ed68c89d4c56402cc`. Ghi nhận v0.1.0 trong `execution/kit-package-check.json` là lịch sử; xem `execution/12-kit-rebuild-qa.md` cho bản mới.

## Thứ tự tiếp tục

1. Người dùng hoàn tất payout/KYC còn thiếu; Gumroad hiện báo chưa có phương thức nhận tiền.
2. Chốt giá/policy trước publish; contact đã có.
4. Thực hiện test purchase theo UI Gumroad, tải ZIP từ luồng test và đối chiếu hash.
5. Publish khi đủ điều kiện; sau đó thêm URL mua thật vào sample và chọn kênh phân phối.

Draft editor: https://gumroad.com/products/rgoywv/edit. Slug đã lưu: `leadflow-ui-kit`. Preview hiển thị “This product is not currently for sale.” Không dùng URL này làm CTA mua cho đến khi publish và test delivery đạt.

Đã bỏ seller draft note khỏi buyer content và thêm email hỗ trợ. Mô tả public draft vẫn ghi support/refund là đề xuất; cần chốt trước publish. Chưa bật refund policy trong editor.

Ảnh xác nhận hiện tại: `assets/v0.1.1/gumroad-content-uploaded.png`. File card và link Download tồn tại sau reload; tải lại từ Gumroad bằng browser tool bị timeout nên chưa xác minh hash file remote hoặc checkout/delivery. Không có giao dịch, bài đăng hoặc lịch tự động được tạo. Paid kit v0.1.1 đã có QA mới; tính năng sample public không đổi.
