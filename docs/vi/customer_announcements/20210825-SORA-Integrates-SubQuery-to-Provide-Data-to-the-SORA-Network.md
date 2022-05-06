# SORA tích hợp SubQuery để cung cấp dữ liệu cho mạng SORA

![sora-header.jpg](https://miro.medium.com/max/1400/1*fPPW0DsynIt9QpvK4ZrsUA.jpeg)

Hôm nay, chúng tôi vui mừng thông báo về một dự án mới thú vị trên SubQuery - SORA và Polkaswap. [SORA](https://sora.org/) đã xây dựng Dự án SubQuery lấy dữ liệu từ mạng SORA để cung cấp cho các ứng dụng di động được xây dựng trên SORA và [Polkaswap.io](http://polkaswap.io/). Bạn có thể dùng thử [tại đây](https://explorer.subquery.network/subquery/sora-xor/sora).

![sora-frontend.jpg](https://miro.medium.com/max/1400/1*pq0U6wsutlf8rjXqq7i2BQ.jpeg)

> _"SubQuery đã được chọn để cải thiện trải nghiệm người dùng khi sử dụng mạng SORA. We used SubQuery to get and list extrinsic details, calculate fiat prices and liquidity pool APY. Our goal was to get transaction history and aggregated data for applications that work with the SORA network._
> 
> _SubQuery has been the ideal solution for our needs because the application is easy to deploy and manage, it is easy to learn and develop as well as being well documented, and it also has its own infrastructure with Github integration. Cấu trúc dữ liệu thuần túy của SubQuery cung cấp khả năng truy cập nhanh, nó hỗ trợ API GraphQL cho các ứng dụng khách, nó có cấu hình linh hoạt để phân tích cú pháp các sự kiện, ngoại vi và các khối với bộ lọc bổ sung. Finally, the application is completely transparent for users, so they won't notice if the application was updated or stopped."_ —SORA Development Team

Polkaswap là một DEX hàng đầu trong hệ sinh thái Polkadot đang phát triển mạnh và sử dụng SubQuery để truy xuất chuyển khoản, hoán đổi xảy ra trong Polkaswap, bổ sung hoặc loại bỏ tính thanh khoản, giá cố định của token và APY cho các nhóm thanh khoản.

SubQuery đã giúp việc phát triển ứng dụng di động SORA và Polkaswap dễ dàng hơn bằng cách giảm thời gian dành cho việc xây dựng các giải pháp phụ trợ tùy chỉnh và đội ngũ tại SORA có kế hoạch mở rộng Dự án Polkaswap SubQuery của họ để hỗ trợ Polkaswap tốt hơn trong tương lai.

![sora-explorer.jpg](https://miro.medium.com/max/1400/1*vjdjmmffvJ7zfOQyxo0ZAA.jpeg)

Trong ví dụ này, chúng tôi đang sử dụng SubQuery để lấy tổng số XOR được giữ trong mỗi nhóm thanh khoản (được lọc để chỉ hiển thị 2 nhóm đầu tiên). Ví dụ này cũng cho thấy APY hiện tại được liên kết với từng nhóm thanh khoản (được lọc để chỉ hiển thị 2 nhóm đầu tiên).

![sora-playground.jpg](https://miro.medium.com/max/1400/1*oTh-ajGfG1oEhYdvqo12tQ.jpeg)

SORA đang sử dụng [Dự án SubQuery](https://project.subquery.network/) để quản lý dự án của họ và cập nhật theo yêu cầu. Dịch vụ lập chỉ mục và truy vấn chúng tôi cung cấp hoàn toàn do SubQuery quản lý và được cung cấp miễn phí cho cộng đồng Polkadot trong [SubQuery’s Explorer](https://explorer.subquery.network/).

Khám phá dự án của SORA trong trình khám phá SubQuery [tại đây](https://explorer.subquery.network/subquery/sora-xor/sora).

## Giới thiệu về SORA

SORA đang tạo ra một hệ thống kinh tế thế giới siêu quốc gia với các công cụ tích hợp cho tài chính phi tập trung (DeFi) dưới sự giám sát dân chủ dựa trên phân vùng mật mã của Nghị viện SORA.

Mạng SORA vượt trội trong việc cung cấp các công cụ cho các ứng dụng phi tập trung sử dụng tài sản kỹ thuật số, chẳng hạn như hoán đổi token nguyên tử, token bắc cầu với các blockchain khác và tạo các quy tắc có lập trình liên quan đến tài sản kỹ thuật số.

[Website](https://sora.org/) | [Reddit](https://www.reddit.com/r/SORA/) | [Blog](https://sora.org/blog) | [Telegram](https://t.me/sora_xor) | [Twitter](https://twitter.com/sora_xor) | [YouTube](https://youtube.com/sora_xor) | [Instagram](https://instagram.com/sora_xor)

## Giới thiệu về SubQuery

[SubQuery](https://subquery.network/) là một tập hợp dữ liệu phi tập trung, lập chỉ mục & lớp truy vấn giữa các blockchains Layer-1 và các ứng dụng phi tập trung (DApps). Hiện đang tập trung vào các dự án Polkadot và Substrate, dữ liệu dưới dạng dịch vụ này cho phép các nhà phát triển tập trung vào tính năng cốt lõi và giao diện người dùng của họ mà không cần lãng phí thời gian xây dựng chương trình phụ trợ tùy chỉnh để xử lý dữ liệu.

[Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Email](mailto:hello@subquery.network)
