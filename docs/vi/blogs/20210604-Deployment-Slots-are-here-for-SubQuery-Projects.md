# Môi trường triển khai dành cho các Dự án SubQuery

> Hôm nay, chúng tôi sẽ giới thiệu môi trường triển khai, một tính năng hoàn toàn mới giúp cải thiện trải nghiệm của nhà phát triển trong dịch vụ được lưu trữ của SubQuery.

[Dự án SubQuery](https://project.subquery.network/) đã được sử dụng như một dịch vụ được quản lý và lưu trữ cho nhiều dự án, cho dù chúng là trình khám phá chuỗi, các ví, trình khám phá NFT hay bất kỳ cái gì khác. Đó là một dịch vụ mà khách hàng của chúng tôi tin cậy.

![](https://miro.medium.com/max/1400/0*PugDgh6weZspRIO2)

Bây giờ bạn có thể triển khai đến một môi trường chạy thử riêng biệt

Mặc dù bạn luôn có thể tự mình chạy cơ sở hạ tầng của SubQuery (với nút và dịch vụ truy vấn riêng), chúng tôi luôn hướng đến việc làm cho dịch vụ của mình trở thành nguồn cung cấp dữ liệu đáng tin cậy, linh hoạt và hiệu quả nhất trong hệ sinh thái Polkadot/Substrate.

Những nhà tạo lập trong [Dự án SubQuery](https://project.subquery.network/) luôn không ngừng cải tiến và cập nhật dự án của họ cũng như dữ liệu trong các dự án đó. Thật không may, phải mất hàng giờ hoặc là vài ngày để lập chỉ mục lại dữ liệu chuỗi trong trường hợp có thay đổi lớn - mục tiêu cuối cùng của chúng tôi là cho phép bạn cập nhật dự án của mình, lập chỉ mục lại dữ liệu và nâng cấp các Dự án SubQuery của bạn với **thời gian chết bằng không**

**Do đó chúng ta có các môi trường triển khai để giải quyết vấn đề này**

![](https://miro.medium.com/max/1400/0*vQ33aqhn1eVllo5t)

Môi trường chạy thử của bạn sẽ chạy độc lập với môi trường chạy chính

Khi tạo một triển khai mới cho [Dự án SubQuery của bạn trong dịch vụ của chúng tôi](https://project.subquery.network/), bạn có thể chọn triển khai tới môi trường chạy chính hoặc môi trường chạy thử. Đây là những môi trường biệt lập, mỗi môi trường có cơ sở dữ liệu riêng và được đồng bộ độc lập. Sau khi môi trường chạy thử của bạn đã bắt đầu và hoàn tất việc lập chỉ mục, bạn có triển khai nó lên môi trường chạy chính mà không có thời gian chết.

Môi trường chạy thử sẽ hoàn hảo cho việc:

-   Xác thực các thay đổi đối với Dự án SubQuery của bạn trong một môi trường riêng biệt. Môi trường chạy thử có một URL riêng mà bạn có thể sử dụng trong dApps của mình.
-   Khởi động và lập chỉ mục dữ liệu cho một dự án SubQuery đã được cập nhật để loại bỏ thời gian chết trong dApp của bạn
-   Chuẩn bị một bản phát hành mới cho Dự án SubQuery của bạn mà không cần phải công khai nó. Môi trường chạy thử này không được hiển thị công khai trong Explorer và có một URL duy nhất mà chỉ bạn mới có thể thấy.

Bạn có thể tự mình trải nghiệm ngay trong [Dự án SubQuery](https://project.subquery.network/).