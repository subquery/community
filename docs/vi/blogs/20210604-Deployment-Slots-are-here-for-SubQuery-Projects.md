# Các vị trí triển khai ở đây dành cho các Dự án SubQuery

> Hôm nay, chúng tôi sẽ giới thiệu các vị trí triển khai, một tính năng hoàn toàn mới giúp cải thiện trải nghiệm của nhà phát triển trong dịch vụ được lưu trữ của SubQuery.

[SubQuery Projects](https://project.subquery.network/) is already being used as a managed and hosted service for many Projects, whether they’re chain explorers, wallets, NFT explorers, or others. It’s a service that our customers rely on.

![](https://miro.medium.com/max/1400/0*PugDgh6weZspRIO2)

Bây giờ bạn có thể triển khai đến một vị trí dàn dựng riêng biệt

Mặc dù bạn luôn có thể tự mình chạy cơ sở hạ tầng của SubQuery (với nút và dịch vụ truy vấn của riêng bạn), chúng tôi mong muốn làm cho dịch vụ được lưu trữ của chúng tôi trở thành nhà cung cấp dữ liệu đáng tin cậy, linh hoạt và hiệu quả nhất trong hệ sinh thái Polkadot/Substrate.

Creators of [SubQuery Projects](https://project.subquery.network/) are constantly improving and updating their Projects and the data within those projects. Unfortunately it takes hours if not days to reindex chain data in the event of a major change — ultimately our goal to to allow you to update your Project, reindex your data, and upgrade your hosted SubQuery Projects with **zero downtime**

**Do đó chúng ta có các vị trí triển khai, để giải quyết vấn đề này**

![](https://miro.medium.com/max/1400/0*vQ33aqhn1eVllo5t)

Staging của bạn sẽ chạy độc lập với production

When creating a new deployment to your [SubQuery Project in our hosted service](https://project.subquery.network/), you can choose to either deploy to the production or staging slot. These two slots are isolated environments, each has its own database and sync independently. Once your staging slot has started and completed indexing, you can then promote it to production with zero downtime.

Staging là hoàn hảo cho:

-   Validating changes to your SubQuery Project in a separate environment. The staging slot has a different URL to production that you can use in your dApps.
-   Khởi động và lập chỉ mục dữ liệu cho một dự án SubQuery được cập nhật để loại bỏ thời gian chết trong dApp của bạn
-   Preparing a new release for your SubQuery Project without exposing it publicly. The staging slot is not shown to the public in the Explorer and has a unique URL that is visible only to you.

Bạn có thể tự mình thử ngay bây giờ trong [Dự án SubQuery](https://project.subquery.network/).