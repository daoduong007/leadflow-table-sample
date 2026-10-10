# Listing → checkout → ZIP: checklist thực thi

Ngày: 10/10/2026. Các ô chưa đánh dấu chưa được thực hiện.

## Đã chuẩn bị local

- [x] ZIP v0.1.0 đã có; kiểm tra cài/build trước đó ghi tại `execution/11-kit-qa.md`.
- [x] Nội dung listing, FAQ và buyer content đã soạn theo tính năng thật.
- [x] Giá đề xuất 29 USD, thanh toán một lần; chưa gọi là giá đã kiểm chứng.
- [x] Tách free sample public và paid ZIP.
- [x] Tra hướng dẫn Gumroad chính thức về receipt/download, test purchase và refund.
- [x] Chụp 6 ảnh production tại localhost:4322 (desktop 1440px, mobile 390px); xem ảnh table/pipeline desktop và detail mobile để kiểm tra nội dung/bố cục. Không có dev indicator trong ảnh production.
- [x] SHA256 ZIP kiểm tra lại: `1548ad7d544c426d4ce6322a3c6f359a84bae3d13db6344f09f5911a8981e4e0`; không sửa nội dung kit trong bước chuẩn bị listing.

## Cần tài khoản người dùng

- [ ] Đăng nhập Gumroad trong browser. Trang `/products` hiện chuyển về login.
- [ ] Kiểm tra seller/KYC/payout status thực tế; chỉ ghi trạng thái, không ghi giấy tờ hoặc bank details.
- [ ] Người dùng cung cấp email hỗ trợ công khai.
- [ ] Xác nhận giá 29 USD và policy hoàn tiền 14 ngày đề xuất trước khi publish.
- [ ] Hoàn thành yêu cầu tài khoản còn thiếu bằng thông tin thật. Người dùng tự nhập dữ liệu định danh/ngân hàng khi cần.

## Tạo listing nháp khi đã truy cập tài khoản

- [ ] Chọn sản phẩm digital download, thanh toán một lần; nhập tên/giá/mô tả trong `gumroad-listing.md`.
- [ ] Thêm ảnh production trong `assets/`; không mô tả free demo là bản paid đầy đủ.
- [ ] Upload `releases/leadflow-ui-kit-v0.1.0.zip` vào **buyer content**, kèm `buyer-delivery.md`.
- [ ] Thêm support contact và refund policy đã chốt; kiểm tra contact trên receipt.
- [ ] Không bật subscription, installment, upsell, license server hay marketing workflow cho v0.1.0.
- [ ] Giữ draft khi seller hoặc điều kiện release chưa đạt.

## Kiểm tra end-to-end

- [ ] Preview listing desktop/mobile: tính năng, giá, license, refund/contact và link sample rõ ràng.
- [ ] Dùng test purchase theo hướng dẫn Gumroad. Chỉ tiếp tục khi UI cho thấy **Test card**; không dùng thẻ thật để tự mua sản phẩm.
- [ ] Kiểm tra receipt/content page thực tế, tên/version ZIP và link tải.
- [ ] Download file bằng luồng test; so SHA256 với local và giải nén kiểm tra nội dung.
- [ ] Xác minh người mua không phải nhắn riêng để nhận file. Support/refund vẫn cần người bán xử lý.
- [ ] Ghi test là test, không cộng vào doanh thu/khách mua/KPI.
- [ ] Chỉ publish khi artifact, seller, contact/policy và test delivery đều đạt.
- [ ] Sau khi có URL listing thực, thêm CTA vào sample; không thêm nút mua giả hoặc URL dự đoán.

## Nguồn chính thức kiểm tra 10/10/2026

- [Test purchase](https://gumroad.com/help/article/62-testing-a-purchase): test khi đăng nhập seller, xác nhận Test card.
- [Customer checkout/receipt](https://gumroad.com/help/article/282-how-do-purchases-work-for-my-customers.html): receipt có content/download link, account mua không bắt buộc.
- [Access purchased content](https://gumroad.com/help/article/199-how-do-i-access-my-purchase): View content từ receipt, có thể yêu cầu email checkout.
- [Gumroad refund policy](https://gumroad.com/help/article/51-what-is-gumroads-refund-policy): seller đặt policy; nền tảng vẫn có quyền xử lý theo điều kiện của họ.

Không dùng checklist này để kết luận seller đã được duyệt hoặc payout đã sẵn sàng.
