# Hướng dẫn Nhập môn SubQuery trên Terra

![](https://miro.medium.com/max/1400/1*DiTE9KuzH0xHLojzGWxOuw.png)

Trong một thời gian dài, chúng tôi đã phát triển và hỗ trợ tinh chỉnh Terra ở hậu trường và thử nghiệm nó với các đối tác phát triển quan trọng (hãy chú ý đến các thông báo trong những ngày tới). Khoảng thời gian kéo dài này cho phép chúng tôi cực kỳ tin tưởng vào khả năng mở rộng, độ tin cậy và các tính năng mà SubQuery mang lại cho Terra ngày nay. Trong bài viết này, chúng tôi chia sẻ hướng dẫn chi tiết dành cho nhà phát triển và lộ trình cho tất cả cộng đồng Terra sử dụng để giải quyết nhu cầu lập chỉ mục dữ liệu của họ.

SubQuery là một công cụ lập chỉ mục dữ liệu mở, linh hoạt và nhanh chóng. Công cụ lập chỉ mục mở của chúng tôi được thiết kế để giúp các nhà phát triển xây dựng API của riêng họ trong vài giờ và nó được thiết kế để lập chỉ mục các chuỗi cực kỳ nhanh chóng với sự hỗ trợ của từ điển (các chỉ mục được tính toán trước). Kinh nghiệm của chúng tôi với khách hàng trên tất cả các lĩnh vực trên Polkadot (ví, mạng, trình khám phá, NFT, DeFi, quét chuỗi, v. v.) đã giúp chúng tôi xây dựng điều này.

Đây vẫn là phiên bản đầu tiên và mặc dù chúng tôi nghĩ là nó vượt xa "bản beta", chúng tôi sẽ đánh giá cao nếu có bất kỳ lỗi nào có thể được báo cáo cho nhóm của chúng tôi để có thể giải quyết chúng nhanh chóng.

<iframe width="656" height="369" src="https://www.youtube.com/embed/dS7h3isQCeA" title="Trình phát video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Tại sao lại chọn SubQuery?

Các ứng dụng trên hệ sinh thái Terra đã phát triển mạnh mặc dù thiếu nghiêm trọng một số công cụ chính dành cho nhà phát triển và dịch vụ cơ sở hạ tầng. Thật đáng kinh ngạc khi thấy, và được là minh chứng cho động lực và sự khéo léo của các Lunatics ở Terra. Hầu hết các trường hợp khi chúng tôi hỏi các nhóm về cách họ giải quyết nhu cầu lập chỉ mục dữ liệu của họ, đó là:

- ** Xây dựng giải pháp của riêng bạn: ** Một triển khai tùy chỉnh do chính bạn chạy được tạo riêng cho ứng dụng của bạn. Vậy tại sao phải phát minh lại bánh xe? SubQuery đang tập trung vào việc xây dựng một trình lập chỉ mục mở, nhanh và đáng tin cậy - chúng tôi ở đây để giúp bạn tiết kiệm thời gian
- ** Thiết kế hợp đồng thông minh cho các truy vấn: ** Một số nhóm thậm chí còn triển khai các câu hỏi tùy chỉnh trong hợp đồng thông minh của họ để cho phép cụ thể các truy vấn nâng cao hơn cho logic ứng dụng của họ.

Tại SubQuery, chúng tôi có một SDK mã nguồn mở dễ sử dụng và nhanh chóng. Nó cung cấp cho bạn một điểm cuối GraphQL tiêu chuẩn hoặc bạn chỉ có thể truy vấn trực tiếp cơ sở dữ liệu. With it you can index a unique set of data from your own smart contracts that allows you to build a superior product that blows your competition out of the water! We give you flexibility to get the data that you need in the shape that works best for you.

Reliability is key, and you need a reliable and scalable platform to host it. [SubQuery's managed service](https://subquery.network/managedservices) is an industry leading hosting solution for all customers that is serving hundreds of millions of daily requests to the biggest projects in Polkadot. We provide our [enterprise level customers](./20211228-enterprise-hosted.md) with services such as dedicated databases, redundant clusters, intelligent multi-cluster routing, and advanced monitoring and analytics. It will support your application when you are ready and will scale with you.

And finally, in a few months you'll be able to completely decentralise your SubQuery infrastructure with the SubQuery Network, the future of Web3 infrastructure. The SubQuery Network will index and service your projects data to the global community in an incentivised and verifiable way. It is designed to support any SubQuery project from any layer-1 network including Terra, so you can take advantage of the scale of the unified SubQuery Network from launch.

## Installation Instructions

You'll first need to install a recent version of @subql/cli via npm i -g @subql/cli@latest

The best way is to start with [our starter project](https://github.com/subquery/terra-subql-starter), it contains a running project with an example of all mapping functions: This project indexes the following:

- **BlockHandler:** All blocks and their hash and height
- **TransactionHandler:** All transactions and their hash, height, and timestamp
- **EventHandler:** All smart contract transfer events and their hash, height, sender, recipient, and amount from a filtered smart contract address (bLuna)
- **MessageHandler:** All smart contract messages and their hash, height, contract, sender, and execute_msg data from a filtered smart contract address (bLuna)

SubQuery supports indexing Terra's smart contracts with both transaction and message subscriptions and handlers. You can see a working example of Smart Contract support in the [starter project](https://github.com/subquery/terra-subql-starter) and read the documentation on the [SubQuery University](http://localhost:8080/build/manifest.html#mapping-handlers-and-filters).

SubQuery's Terra implementation has been designed to operate almost identically to SubQuery's Polkadot support, and in a similar way to the Graph's approach. We've updated the [SubQuery University](https://university.subquery.network/) to add Terra specific information to the general SubQuery documentation. You can start by following this [excellent getting started guide here](http://university.subquery.network/quickstart/quickstart-terra.html).

## Deploying your Project to SubQuery's Managed Service

Although you will always be able to run your project in your own infrastructure easily, [SubQuery's managed service](https://subquery.network/managedservices) now supports Terra project. Some of the biggest projects depend on SubQuery's [enterprise level](./20211228-enterprise-hosted.md) managed service and now you can too. As part of our launch partner agreement, we are providing you with 3 months free hosting.

You can [follow the guide here](https://university.subquery.network/run_publish/publish.html) to publish your Terra SubQuery project to our managed service. Please note that you must host your [SubQuery project using IPFS](https://university.subquery.network/run_publish/publish.html) rather than GitHub.

You can update your managed service project as much as you want. We even have a [staging deployment slot](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md) to allow you to do seamless blue/green upgrades without any downtime. This staging slot can also be used to run a clean instance of SubQuery with a fresh database for complete background reindexing of your project. Customers usually link the staging slot to the staging/development versions of their applications.

Once deployed, you can access your project using the SubQuery Explorer, and make requests directly from your app to the provided GraphQL endpoint. Let us know if you would like us to enable more advanced features like [GraphQL subscriptions](https://university.subquery.network/run_publish/subscription.html), more complex queries, and [aggregation functions](https://university.subquery.network/run_publish/aggregate.html).

Please notify us once you have deployed your project as we may need to assist with fine tuning the batch size to ensure that our Terra archive node runs well for your project.

## SubQuery's Support for Terra

Today we are sharing the following:

-   Advanced indexing of blocks, event
-   Terra Dictionary: Pre-computed indices to [dramatically reduce indexing time](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
-   Full support for Terra in our free [enterprise level](./20211228-enterprise-hosted.md) managed service
-   Intuitive documentation in the [SubQuery University](https://university.subquery.network/)

In the coming weeks you can expect:

-   A step by step learning course in the [SubQuery Academy](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   Full support for Terra in our decentralised SubQuery Network (you'll soon see a project in our current Frontier test network)

---

The launch of our beta support for Terra marks a significant milestone in our commitment to offer enhanced indexing tools for the Terra community to enable her developers to go further, faster. We are eager to get feedback from the community in order to improve our offering and increase our visibility as a trusted infrastructure partner for one of the fastest growing developer communities in Web3

James Bayly

## Links

-   [Getting Started Guide](https://university.subquery.network/quickstart/quickstart-terra.html)
-   [SubQuery University (Documentation)](https://university.subquery.network/)
-   [Example Terra Project](https://github.com/subquery/terra-subql-starter)
-   [Managed Service](https://explorer.subquery.network/)
-   [Publish your own Terra Project to the Managed Service](https://project.subquery.network/)

## Giới thiệu về SubQuery

[ SubQuery ](https://subquery.network/) là bộ công cụ dành cho nhà phát triển blockchain cho phép những người khác xây dựng các ứng dụng Web3 trong tương lai. Dự án SubQuery là một API hoàn chỉnh để tổ chức và truy vấn dữ liệu từ chuỗi Layer 1. Hiện đang phục vụ các dự án Polkadot, Substrate, Avalanche và bây giờ là Terra, dữ liệu dưới dạng dịch vụ này cho phép các nhà phát triển tập trung vào phát triển cốt lõi sản phẩm và giao diện người dùng của họ mà không cần lãng phí thời gian vào việc xây dựng chương trình phụ trợ để xử lý dữ liệu. Mạng SubQuery đề xuất kích hoạt giải pháp có thể mở rộng và đáng tin cậy tương tự này, nhưng theo cách hoàn toàn phi tập trung.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
