# SubQuery tích hợp Acala để tổng hợp và cung cấp dữ liệu DeFi cho Polkadot và các nhà xây dựng Kusama

![](https://miro.medium.com/max/1400/1*cg4kJs0WEcyPP73EAtHomA.png)

Tuần trước [SubQuery](https://www.subquery.network/) đã phát hành giai đoạn tiếp theo của dự án, [SubQuery Explorer](https://explorer.subquery.network/). Tuần này, Acala và SubQuery đã hoàn tất quá trình tích hợp để cho phép người dùng và nhà phát triển truy vấn, trích xuất dữ liệu từ trung tâm Acala DeFi cho Polkadot chỉ trong vài phút và miễn phí.

SubQuery là một lớp tổng hợp dữ liệu sẽ hoạt động giữa blockchain layer-1 (Acala) và lớp DApp. Giải pháp tổng hợp và sắp xếp dữ liệu từ Acala và các blockchain khác, cung cấp dữ liệu có cấu trúc tốt cho các nhà phát triển để sử dụng cho nhiều loại dự án. Dịch vụ này cho phép các nhà phát triển DApp tập trung vào cốt lõi và giao diện người dùng của họ mà không cần lãng phí thời gian vào việc xây dựng chương trình phụ trợ tùy chỉnh để xử lý dữ liệu.

Acala is a firm believer and a long-term builder for the multi-chain future — reducing liquidity fragmentation, increasing composability, and enabling DeFi accessibility to everyone. Acala is a specialized blockchain focusing on decentralized finance (DeFi), and created multiple DeFi primitives that became a DeFi hub and infrastructure serving the Polkadot and Kusama ecosystems. The team has built products including a multi-collateralized stablecoin (aUSD — The Acala Dollar), an automated market maker (AMM) DEX, a tokenized staked asset called Liquid DOT (LDOT), and implemented a bring-your-own-gas feature allowing gas fees to be payable in any supported assets such as stablecoins. Acala’s parachain plans to play the role of DeFi hub for Polkadot and a landing pad that aggregates assets and liquidity from a variety of blockchains.

Today when you access the [SubQuery Explorer](https://explorer.subquery.network/) you’ll be welcomed with a new Acala SubQuery Project. This SubQuery dynamically tracks all the extrinsic data created on Acala and can quickly show derived aggregated stats for the following:

-   Historical Data on liquidity changes (broken down by providers)
-   Historical Data on all cross chain asset swaps
-   Transfer history

![](https://miro.medium.com/max/1400/0*sXPljA1RE754fuDQ)

You can play around with the Acala SubQuery Graph using the [Explorer](https://explorer.subquery.network/) without implementing anything in code. Additionally, we’ve documented the types that you can specify in each GraphQL request when analysing Acala’s data.

Below is a simple example of how a user can quickly and easily see the previous 5 transfer events using the ACA token over the Acala Mandala network. You can see here that we use simple GraphQL language to sort and retrieve this data to any client. DApps can use this to monitor loan positions, and jump on auctions etc to help liquidate collaterals.

![](https://miro.medium.com/max/1400/0*zlxPf2tz8DVX95kY)

A slightly more complex example follows, where we inspect a single account and retrieve all token swap events made by it. A portfolio DApp might use this data to create an overview of the holder’s account and token performance, revenue from staking, liquidity provisioning, and expenses on borrowing.

![](https://miro.medium.com/max/1400/0*hdTbn41vDvIYuv3_)

[SubQuery Explorer](https://explorer.subquery.network/) is an online hosted service that provides access to published SubQuery projects made by contributors around the world and managed by the SubQuery team. Nhiệm vụ của nó là dễ dàng truy cập vào dữ liệu mạng Polkadot bằng cách cung cấp các dịch vụ cơ sở hạ tầng để giúp các nhà phát triển đạt được nhiều điều hơn.

[SubQuery](https://www.subquery.network/) cho phép mọi nhóm Substrate/Polkadot xử lý và truy vấn dữ liệu của họ. Dự án được lấy cảm hứng từ sự phát triển của các giao thức dữ liệu phục vụ lớp ứng dụng và mục đích của nó là giúp các dự án Polkadot/Substrate xây dựng các dApp tốt hơn bằng cách cho phép bất kỳ ai cũng có thể tìm và sử dụng dữ liệu nhanh hơn một cách đáng tin cậy. Ngày nay, bất kỳ ai cũng có thể truy vấn và trích xuất dữ liệu mạng Polkadot chỉ trong vài phút và miễn phí.

[Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

[Acala](http://acala.network/) is the decentralized financial hub and stablecoin of Polkadot that makes it fast and easy to use or build financial applications, improving trading efficiency and saving time. The platform offers a suite of financial primitives: a multi-collateralized stablecoin backed by cross-chain assets like Bitcoin, a trustless staking derivative, and a decentralized exchange to unleash liquidity and power financial innovations. Acala is the de facto open platform for finance applications to use smart contracts or built-in protocols with out-of-the-box cross-chain capabilities and robust security.

[Discord](https://discord.gg/vdbFVCH) | [Website](https://acala.network/) | [Twitter](https://twitter.com/AcalaNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [Acala Wiki](https://github.com/AcalaNetwork/Acala/wiki) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc)