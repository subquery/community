# SubQuery інтегрує Acala для агрегації та обслуговування даних DeFi для конструкторів Polkadot та Kusama

![](https://miro.medium.com/max/1400/1*cg4kJs0WEcyPP73EAtHomA.png)

Last week [SubQuery](https://www.subquery.network/) released the next stage of their project, the [SubQuery Explorer](https://explorer.subquery.network/). This week, Acala and SubQuery have finalized an integration to allow users and developers to query and extract data from Acala’s DeFi hub for Polkadot in only minutes and at no cost.

SubQuery is a data aggregation layer that will operate between the layer-1 blockchain (Acala) and DApp layer. The solution aggregates and organizes data from Acala and other blockchains, serving up well-structured data for developers to use for a wide array of projects. This service allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing.

Acala is a firm believer and a long-term builder for the multi-chain future — reducing liquidity fragmentation, increasing composability, and enabling DeFi accessibility to everyone. Acala is a specialized blockchain focusing on decentralized finance (DeFi), and created multiple DeFi primitives that became a DeFi hub and infrastructure serving the Polkadot and Kusama ecosystems. The team has built products including a multi-collateralized stablecoin (aUSD — The Acala Dollar), an automated market maker (AMM) DEX, a tokenized staked asset called Liquid DOT (LDOT), and implemented a bring-your-own-gas feature allowing gas fees to be payable in any supported assets such as stablecoins. Acala’s parachain plans to play the role of DeFi hub for Polkadot and a landing pad that aggregates assets and liquidity from a variety of blockchains.

Today when you access the [SubQuery Explorer](https://explorer.subquery.network/) you’ll be welcomed with a new Acala SubQuery Project. This SubQuery dynamically tracks all the extrinsic data created on Acala and can quickly show derived aggregated stats for the following:

-   Історичні дані про зміни ліквідності (за даними провайдерів)
-   Історичні дані про всі перехресні обміни активами
-   Історія трансферу

![](https://miro.medium.com/max/1400/0*sXPljA1RE754fuDQ)

You can play around with the Acala SubQuery Graph using the [Explorer](https://explorer.subquery.network/) without implementing anything in code. Additionally, we’ve documented the types that you can specify in each GraphQL request when analysing Acala’s data.

Below is a simple example of how a user can quickly and easily see the previous 5 transfer events using the ACA token over the Acala Mandala network. You can see here that we use simple GraphQL language to sort and retrieve this data to any client. DApps can use this to monitor loan positions, and jump on auctions etc to help liquidate collaterals.

![](https://miro.medium.com/max/1400/0*zlxPf2tz8DVX95kY)

A slightly more complex example follows, where we inspect a single account and retrieve all token swap events made by it. A portfolio DApp might use this data to create an overview of the holder’s account and token performance, revenue from staking, liquidity provisioning, and expenses on borrowing.

![](https://miro.medium.com/max/1400/0*hdTbn41vDvIYuv3_)

[SubQuery Explorer](https://explorer.subquery.network/) is an online hosted service that provides access to published SubQuery projects made by contributors around the world and managed by the SubQuery team. Its mission is to ease access to Polkadot network data by providing infrastructure services to help developers achieve more.

[SubQuery](https://www.subquery.network/) allows every Substrate/Polkadot team to process and query their data. The project is inspired by the growth of data protocols serving the application layer and its aim is to help Polkadot/Substrate projects build better dApps by allowing anyone to reliably find and consume data faster. Today, anyone can query and extract Polkadot network data in only minutes and at no cost.

[ Електронна пошта ](mailto:hello@subquery.network) | [ Діскорд ](https://discord.com/invite/78zg8aBSMG) | [ Telegram ](https://t.me/subquerynetwork) | [ Twitter ](https://twitter.com/subquerynetwork) | [ Matrix ](https://matrix.to/#/#subquery:matrix.org) | [ LinkedIn ](https://www.linkedin.com/company/subquery)

[Acala](http://acala.network/) is the decentralized financial hub and stablecoin of Polkadot that makes it fast and easy to use or build financial applications, improving trading efficiency and saving time. The platform offers a suite of financial primitives: a multi-collateralized stablecoin backed by cross-chain assets like Bitcoin, a trustless staking derivative, and a decentralized exchange to unleash liquidity and power financial innovations. Acala is the de facto open platform for finance applications to use smart contracts or built-in protocols with out-of-the-box cross-chain capabilities and robust security.

[Діскорд](https://discord.gg/vdbFVCH) | [Веб -сайт](https://acala.network/) | [Twitter](https://twitter.com/AcalaNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [Acala Wiki](https://github.com/AcalaNetwork/Acala/wiki) | [Інформаційний бюлетень](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc)