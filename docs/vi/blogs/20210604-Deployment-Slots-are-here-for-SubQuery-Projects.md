# Môi trường triển khai dành cho các Dự án SubQuery

> Hôm nay, chúng tôi sẽ giới thiệu môi trường triển khai, một tính năng hoàn toàn mới giúp cải thiện trải nghiệm của nhà phát triển trong dịch vụ được lưu trữ của SubQuery.

[Dự án SubQuery](https://project.subquery.network/) đã được sử dụng như một dịch vụ được quản lý và lưu trữ cho nhiều dự án, cho dù chúng là trình khám phá chuỗi, các ví, trình khám phá NFT hay bất kỳ cái gì khác. Đó là một dịch vụ mà khách hàng của chúng tôi tin cậy.

![](https://miro.medium.com/max/1400/0*PugDgh6weZspRIO2)

Bây giờ bạn có thể triển khai đến một môi trường chạy thử riêng biệt

Mặc dù bạn luôn có thể tự mình chạy cơ sở hạ tầng của SubQuery (với nút và dịch vụ truy vấn riêng), chúng tôi luôn hướng đến việc làm cho dịch vụ của mình trở thành nguồn cung cấp dữ liệu đáng tin cậy, linh hoạt và hiệu quả nhất trong hệ sinh thái Polkadot/Substrate.

Những nhà tạo lập trong [Dự án SubQuery](https://project.subquery.network/) luôn không ngừng cải tiến và cập nhật dự án của họ cũng như dữ liệu trong các dự án đó. Thật không may, phải mất hàng giờ hoặc là vài ngày để lập chỉ mục lại dữ liệu chuỗi trong trường hợp có thay đổi lớn - mục tiêu cuối cùng của chúng tôi là cho phép bạn cập nhật dự án của mình, lập chỉ mục lại dữ liệu và nâng cấp các Dự án SubQuery của bạn với **thời gian chết bằng không**

**Do đó chúng ta có các vị trí triển khai để giải quyết vấn đề này**

![](https://miro.medium.com/max/1400/0*vQ33aqhn1eVllo5t)

Vị trí tổ chức của bạn sẽ chạy độc lập với vị trí sản xuất

Khi tạo một triển khai mới cho [Dự án SubQuery của bạn trong dịch vụ của chúng tôi](https://project.subquery.network/), bạn có thể chọn triển khai tới vị trí sản xuất hoặc vị trí tổ chức. Hai vị trí này là những môi trường biệt lập, mỗi vị trí có cơ sở dữ liệu riêng và đồng bộ độc lập. Sau khi vị trí tổ chức của bạn đã bắt đầu và hoàn tất việc lập chỉ mục, bạn có triển khai nó lên vị trí sản xuất mà không có thời gian chết.

Staging là hoàn hảo cho:

-   Xác thực các thay đổi đối với Dự án SubQuery của bạn trong một môi trường riêng biệt. The staging slot has a different URL to production that you can use in your dApps.
-   Khởi động và lập chỉ mục dữ liệu cho một dự án SubQuery được cập nhật để loại bỏ thời gian chết trong dApp của bạn
-   Preparing a new release for your SubQuery Project without exposing it publicly. The staging slot is not shown to the public in the Explorer and has a unique URL that is visible only to you.

Bạn có thể tự mình thử ngay bây giờ trong [Dự án SubQuery](https://project.subquery.network/).