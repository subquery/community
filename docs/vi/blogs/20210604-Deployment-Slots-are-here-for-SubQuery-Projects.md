# Các vị trí triển khai ở đây dành cho các Dự án SubQuery

> Hôm nay, chúng tôi sẽ giới thiệu các vị trí triển khai, một tính năng hoàn toàn mới giúp cải thiện trải nghiệm của nhà phát triển trong dịch vụ được lưu trữ của SubQuery.

[Dự án SubQuery](https://project.subquery.network/) đã được sử dụng như một dịch vụ được quản lý và lưu trữ cho nhiều Dự án, cho dù chúng là trình khám phá chuỗi, ví, trình khám phá NFT hay những người khác. Đó là một dịch vụ mà khách hàng của chúng tôi tin cậy.

![](https://miro.medium.com/max/1400/0*PugDgh6weZspRIO2)

Bây giờ bạn có thể triển khai đến một vị trí dàn dựng riêng biệt

Mặc dù bạn luôn có thể tự mình chạy cơ sở hạ tầng của SubQuery (với nút và dịch vụ truy vấn của riêng bạn), chúng tôi mong muốn làm cho dịch vụ được lưu trữ của chúng tôi trở thành nhà cung cấp dữ liệu đáng tin cậy, linh hoạt và hiệu quả nhất trong hệ sinh thái Polkadot/Substrate.

Người tạo ra [Dự án SubQuery](https://project.subquery.network/) liên tục cải tiến và cập nhật Dự án của họ cũng như dữ liệu trong các dự án đó. Thật không may, phải mất hàng giờ nếu không phải vài ngày để lập chỉ mục lại dữ liệu chuỗi trong trường hợp có thay đổi lớn - mục tiêu cuối cùng của chúng tôi là cho phép bạn cập nhật Dự án, lập chỉ mục lại dữ liệu và nâng cấp các Dự án SubQuery được lưu trữ của bạn với **thời gian chết bằng không**

**Do đó chúng ta có các vị trí triển khai, để giải quyết vấn đề này**

![](https://miro.medium.com/max/1400/0*vQ33aqhn1eVllo5t)

Staging của bạn sẽ chạy độc lập với production

Khi tạo một triển khai mới cho [Dự án SubQuery của bạn trong dịch vụ được lưu trữ của chúng tôi](https://project.subquery.network/), bạn có thể chọn triển khai cho production hoặc staging. Hai vị trí này là môi trường biệt lập, mỗi vị trí có cơ sở dữ liệu riêng và đồng bộ độc lập. Sau khi vị trí staging của bạn đã bắt đầu và hoàn tất việc lập chỉ mục, sau đó bạn có thể triển khai nó lên phiên bản production mà không mất thời gian chết.

Staging là hoàn hảo cho:

-   Xác thực các thay đổi đối với Dự án SubQuery của bạn trong một môi trường riêng biệt. Staging có một URL khác để sản xuất mà bạn có thể sử dụng trong dApps của mình.
-   Khởi động và lập chỉ mục dữ liệu cho một dự án SubQuery được cập nhật để loại bỏ thời gian chết trong dApp của bạn
-   Chuẩn bị một bản phát hành mới cho Dự án SubQuery của bạn mà không công khai. Staging không được hiển thị công khai trong Explorer và có một URL duy nhất chỉ hiển thị cho bạn.

Bạn có thể tự mình thử ngay bây giờ trong [Dự án SubQuery](https://project.subquery.network/).