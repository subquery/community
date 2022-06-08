# Bản Beta của SubQuery được phát hành cho Avalanche

![](https://miro.medium.com/max/1400/1*BiJaESR69-vDimBJmXhQvw.png)

Hôm nay, sau nhiều tháng cải tiến, tái cấu trúc và thử nghiệm, chúng tôi rất vui khi chia sẻ sự bản hỗ trợ beta của giải pháp lập chỉ mục mở với cộng đồng Avalanche. Sau khi thành lập SubQuery là công cụ lập chỉ mục dữ liệu hàng đầu trong Polkadot, [thông báo gần đây của chúng tôi về việc mở rộng sang Avalanche](./20220321-avalache.md) trong [Avalanche Summit](https://www.avalanchesummit.com/agenda) gần đây đã nhận được sự hào hứng của các nhà phát triển mong muốn một sản phẩm linh hoạt và có thể mở rộng công cụ lập chỉ mục.

Follow the beta guide here: https://university.subquery.network/quickstart/quickstart-avalanche.html

SubQuery là một công cụ lập chỉ mục dữ liệu mở, linh hoạt và nhanh chóng. Công cụ lập chỉ mục mở của chúng tôi được thiết kế để giúp các nhà phát triển xây dựng API của riêng họ trong vài giờ và nó được thiết kế để lập chỉ mục các chuỗi cực kỳ nhanh chóng với sự hỗ trợ của từ điển (các chỉ mục được tính toán trước). Kinh nghiệm của chúng tôi với khách hàng trên tất cả các lĩnh vực trên Polkadot (ví, mạng, trình khám phá, NFT, DeFi, quét chuỗi, v. v.) đã giúp chúng tôi xây dựng điều này.

From today, Avalanche developers will be able to access the beta of the same fast, flexible, and open indexing solution widely used across Polkadot. As this is a beta version, it is likely to have some issues. As such, we would appreciate it if any bugs can be reported to our team so we can address them quickly.

## Tại sao lại chọn SubQuery?

_There are already a few other options here in Avalanche, so why would you build with SubQuery?_

I was asked this very question by many of you that I was lucky enough to meet at the Avalanche Summit. In our space there are generally three other solutions:

- Build your own solution: Why reinvent the wheel? SubQuery đang tập trung vào việc xây dựng một trình lập chỉ mục mở, nhanh và đáng tin cậy --- chúng tôi ở đây để giúp bạn tiết kiệm thời gian
- Standardised data services or "unified APIs": These providers are excellent if you're building the same app on the same basic smart contract as everyone else, but you're not. You need a unique set of data that allows you to build a superior product that blows your competition out of the water! You need flexibility to get the data that you need in the shape that works best for you
- Other open GraphQL data services: Everyone that was already using them expressed the same problems, there was a serious lack of developer support and some significant performance issues. Additionally there was only coverage on the contract chain with no plans to extend to your next subnet

Tại SubQuery, chúng tôi có một SDK mã nguồn mở dễ sử dụng và nhanh chóng. Nó cung cấp cho bạn một điểm cuối GraphQL tiêu chuẩn hoặc bạn chỉ có thể truy vấn trực tiếp cơ sở dữ liệu.

Độ tin cậy là điểm chính yếu và bạn cần một nền tảng đáng tin cậy và có thể mở rộng để lưu trữ nó. [Dịch vụ được quản lý bởi SubQuery](https://subquery.network/managedservices) là giải pháp lưu trữ hàng đầu trong ngành dành cho tất cả khách hàng mà đang phục vụ hàng trăm triệu yêu cầu hàng ngày cho các dự án lớn nhất trên Polkadot. Chúng tôi cung cấp cho [khách hàng cấp doanh nghiệp](./20211228-enterprise-hosted.md) các dịch vụ như cơ sở dữ liệu chuyên dụng, cụm dự phòng, định tuyến đa cụm thông minh cũng như giám sát và phân tích nâng cao. Chúng sẽ hỗ trợ ứng dụng của bạn khi bạn đã sẵn sàng và sẽ mở rộng quy mô cùng với bạn.

Và cuối cùng, trong vài tháng nữa, bạn sẽ có thể hoàn toàn phi tập trung hóa cơ sở hạ tầng SubQuery của mình với Mạng SubQuery, tương lai của cơ sở hạ tầng Web3. Mạng SubQuery sẽ lập chỉ mục và cung cấp dữ liệu dự án của bạn cho cộng đồng toàn cầu theo cách được khuyến khích và có thể xác minh. Nó được thiết kế để hỗ trợ bất kỳ dự án SubQuery nào từ bất kỳ mạng Layer 1 nào bao gồm cả Avalanche, vì vậy bạn có thể tận dụng quy mô thống nhất của Mạng SubQuery từ khi khởi chạy.

## Hướng dẫn cài đặt

Follow the beta guide here: https://university.subquery.network/quickstart/quickstart-avalanche.html

You'll first need to install @subql/cli via *npm i -g @subql/cli*

Cách tốt nhất là bắt đầu với dự án khởi đầu của chúng tôi, dự án này chứa một dự án đang chạy với ví dụ về tất cả các chức năng ánh xạ: https://github.com/subquery/avalanche-subql-starter. This project indexes the following from the [Pangolin Smart Contract](https://snowtrace.io/token/0x60781c2586d68229fde47564546784ab3faca982):

- BlockHandler: Tất cả các khối và thông tin cốt lõi của chúng
- TransactionHandler: All transactions from the approve function within the Pangolin smart contract
- EventHandler: All transfer events from the Pangolin smart contract

Việc triển khai trên Avalanche của SubQuery đã được thiết kế để hoạt động gần như giống hệt với việc hỗ trợ Polkadot của SubQuery và theo cách tương tự như cách tiếp cận của Graph. Chúng tôi đã cập nhật [SubQuery University](https://university.subquery.network/build/introduction.html) để thêm thông tin cụ thể về Avalanche vào tài liệu tổng hợp của SubQuery. Bạn có thể bắt đầu bằng cách làm theo [hướng dẫn bắt đầu tuyệt vời này tại đây](https://university.subquery.network/quickstart/quickstart-avalanche.html).

## Hỗ trợ của SubQuery cho Avalanche

We are completing the first phase of our full support for the Avalanche ecosystem.

![](https://miro.medium.com/max/1400/0*GUKZJfJCz1nB_3zc)

Hôm nay chúng tôi chia sẻ những điều sau:

- Advanced Contract Chain Indexing
- Avalanche Dictionary: Các chỉ mục được tính toán trước để [giảm đáng kể thời gian lập chỉ mục](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
- Full support for Avalanche in our free [enterprise level](./20211228-enterprise-hosted.md) managed service
- Tài liệu trực quan của [SubQuery University](https://university.subquery.network/)

In the coming weeks you can expect:

- A step by step learning course in the [SubQuery Academy](./20211018-subquery-launches-the-subquery-academy.md)
- Full support for Avalanche in our decentralised SubQuery Network (you'll see a project in our current Frontier test network)

With the number of Subnets planned over the coming months, there will be a huge need for fast, open, and flexible indexing support that works across all compatible Subnets. We have experience implementing this level of configurability for Polkadot's parachains, and are investigating how to provide the same outcome for Avalanche (e.g. by importing custom implementations of snowman.Block etc).

The launch of our beta support for Avalanche marks a significant milestone in our commitment to offer enhanced indexing tools for the Avalanche community to enable her developers to go further, faster. We are eager to get feedback from the community in order to improve our offering and increase our visibility as a trusted infrastructure partner for one of the fastest growing developer communities in Web3

We are now looking for launch partners that we can closely support as they develop their first SubQuery projects in this ecosystem. Reach out to me at james.bayly@subquery.network if you want to be first on the journey with us.

_James Bayly_

Follow the beta guide here: https://university.subquery.network/quickstart/quickstart-avalanche.html

## About SubQuery

[SubQuery](https://subquery.network/) is a blockchain developer toolkit enabling others to build Web3 applications of the future. A SubQuery project is a complete API to organise and query data from layer-1 chains. Currently servicing Polkadot, Substrate, Avalanche and Terra projects, this data-as-a-service allows developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The SubQuery Network proposes to enable this same scalable and reliable solution, but in a completely decentralised way.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
