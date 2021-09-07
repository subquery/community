# SubQuery Mengintegrasikan Acala untuk Mengagregasi dan Melayani Data DeFi kepada Para Builder Polkadot dan Kusama

![](https://miro.medium.com/max/1400/1*cg4kJs0WEcyPP73EAtHomA.png)

Minggu lalu [SubQuery](https://www.subquery.network/) merilis tahap berikutnya dari proyek mereka, [SubQuery Explorer](https://explorer.subquery.network/). Minggu ini, Acala dan SubQuery telah menyelesaikan integrasi untuk memungkinkan pengguna dan pengembang melakukan kueri dan mengekstrak data dari hub DeFi Acala untuk Polkadot hanya dalam hitungan menit dan tanpa biaya.

SubQuery adalah layer agregasi data yang akan beroperasi antara layer-1 blockchain (Acala) dan DApp layer. Solusi ini mengumpulkan dan mengatur data dari Acala dan blockchain lain, menyajikan data yang terstruktur dengan baik bagi pengembang untuk digunakan dalam berbagai proyek. Layanan ini memungkinkan pengembang DApp untuk fokus pada use case inti dan front-end mereka, tanpa perlu membuang waktu untuk membangun backend khusus untuk pemrosesan data.

Acala sangat percaya dan merupakan builder jangka panjang untuk masa depan multi-chain — mengurangi fragmentasi likuiditas, meningkatkan komposisi, dan memungkinkan aksesibilitas DeFi ke semua orang. Acala adalah blockchain khusus yang berfokus pada keuangan terdesentralisasi (DeFi), dan menciptakan beberapa primitif DeFi yang menjadi hub dan infrastruktur DeFi yang melayani ekosistem Polkadot dan Kusama. The team has built products including a multi-collateralized stablecoin (aUSD — The Acala Dollar), an automated market maker (AMM) DEX, a tokenized staked asset called Liquid DOT (LDOT), and implemented a bring-your-own-gas feature allowing gas fees to be payable in any supported assets such as stablecoins. Acala’s parachain plans to play the role of DeFi hub for Polkadot and a landing pad that aggregates assets and liquidity from a variety of blockchains.

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

[SubQuery Explorer](https://explorer.subquery.network/) adalah layanan host online yang menyediakan akses ke proyek SubQuery yang diterbitkan yang dibuat oleh kontributor di seluruh dunia dan dikelola oleh tim SubQuery. Its mission is to ease access to Polkadot network data by providing infrastructure services to help developers achieve more.

[SubQuery](https://www.subquery.network/) memungkinkan setiap tim Substrate/Polkadot untuk memproses dan mengkueri data mereka. Proyek ini terinspirasi oleh pertumbuhan protokol data yang melayani lapisan aplikasi dan tujuannya adalah untuk membantu proyek Polkadot/Substrate membangun dApp yang lebih baik dengan memungkinkan siapa pun untuk secara andal menemukan dan mengkonsumsi data lebih cepat. Hari ini, siapa pun dapat mengkueri dan mengekstrak data jaringan Polkadot hanya dalam hitungan menit dan tanpa biaya.

[Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

[Acala](http://acala.network/) is the decentralized financial hub and stablecoin of Polkadot that makes it fast and easy to use or build financial applications, improving trading efficiency and saving time. The platform offers a suite of financial primitives: a multi-collateralized stablecoin backed by cross-chain assets like Bitcoin, a trustless staking derivative, and a decentralized exchange to unleash liquidity and power financial innovations. Acala is the de facto open platform for finance applications to use smart contracts or built-in protocols with out-of-the-box cross-chain capabilities and robust security.

[Discord](https://discord.gg/vdbFVCH) | [Website](https://acala.network/) | [Twitter](https://twitter.com/AcalaNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [Acala Wiki](https://github.com/AcalaNetwork/Acala/wiki) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc)