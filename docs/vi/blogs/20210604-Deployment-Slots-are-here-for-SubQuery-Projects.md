# Deployment Slots are here for SubQuery Projects

> Today we’re introducing deployment slots, a whole new feature that improves the developer experience in SubQuery’s hosted service.

[Dự án SubQuery](https://project.subquery.network/) đã được sử dụng như một dịch vụ được quản lý và lưu trữ cho nhiều Dự án, cho dù chúng là trình khám phá chuỗi, ví, trình khám phá NFT hay những người khác. Đó là một dịch vụ mà khách hàng của chúng tôi tin cậy.

![](https://miro.medium.com/max/1400/0*PugDgh6weZspRIO2)

You can now deploy to a isolated staging slot

Mặc dù bạn luôn có thể tự mình chạy cơ sở hạ tầng của SubQuery (với nút và dịch vụ truy vấn của riêng bạn), chúng tôi mong muốn làm cho dịch vụ được lưu trữ của chúng tôi trở thành nhà cung cấp dữ liệu đáng tin cậy, linh hoạt và hiệu quả nhất trong hệ sinh thái Polkadot/Substrate.

Creators of [SubQuery Projects](https://project.subquery.network/) are constantly improving and updating their Projects and the data within those projects. Unfortunately it takes hours if not days to reindex chain data in the event of a major change — ultimately our goal to to allow you to update your Project, reindex your data, and upgrade your hosted SubQuery Projects with **zero downtime**

**That’s what deployment slots are here to solve**

![](https://miro.medium.com/max/1400/0*vQ33aqhn1eVllo5t)

Staging của bạn sẽ chạy độc lập với production

Khi tạo một triển khai mới cho [Dự án SubQuery của bạn trong dịch vụ được lưu trữ của chúng tôi](https://project.subquery.network/), bạn có thể chọn triển khai cho production hoặc staging. Hai vị trí này là môi trường biệt lập, mỗi vị trí có cơ sở dữ liệu riêng và đồng bộ độc lập. Sau khi vị trí staging của bạn đã bắt đầu và hoàn tất việc lập chỉ mục, sau đó bạn có thể triển khai nó lên phiên bản production mà không mất thời gian chết.

Staging là hoàn hảo cho:

-   Validating changes to your SubQuery Project in a separate environment. The staging slot has a different URL to production that you can use in your dApps.
-   Warming up and indexing data for an updated SubQuery project to eliminate downtime in your dApp
-   Preparing a new release for your SubQuery Project without exposing it publicly. Staging không được hiển thị công khai trong Explorer và có một URL duy nhất chỉ hiển thị cho bạn.

Bạn có thể tự mình thử ngay bây giờ trong [Dự án SubQuery](https://project.subquery.network/).