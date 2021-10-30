# SubQuery Meluncurkan Roadmap Teknikal

![](https://cdn-images-1.medium.com/max/800/1*Qcu5mFIs8eJhAXaMpWOlMQ.png)

**SubQuery mengumumkan pencapaian utama termasuk timeline TGE**

Hari ini kami dengan senang hati merilis roadmap teknis terperinci kami untuk pertama kalinya. Tujuan SubQuery adalah menjadi penyedia data terkemuka di ekosistem Polkadot dan dukungan yang kami dapatkan dari komunitas dalam membantu kami mewujudkan visi ini luar biasa. Dari pendirian resmi kami pada akhir tahun 2020 melalui [Web3 Grant](https://web3.foundation/), hingga merilis versi open source pertama kami pada Januari 2021, dan [menutup Seri A kami pada bulan September](https://subquery.medium.com/series-a-1abed6c1c2af), kami ingin berterima kasih atas semua dukungan Anda dalam membawa kami ke tahap ini!

Saat kami terus mendapatkan momentum, saatnya telah tiba untuk berbagi lebih banyak tentang rencana kami untuk masa depan termasuk roadmap teknis kami. Kami sangat senang tentang bagaimana evolusi SubQuery berikutnya akan mendorong nilai lebih bagi ekosistem Polkadot dan memberikan lebih banyak peluang bagi komunitas kami untuk berpartisipasi dalam pertumbuhan kami.

## Masa depan kita

Disaat SubQuery sudah melayani jutaan kueri data setiap hari ke [lebih dari 60 proyek di Polkadot & Kusama](https://project.subquery.network/), kami ingin memastikan bahwa fase pertumbuhan kami berikutnya dilakukan secara terorganisir dan terkendali.

Karena alasan ini, kami merasa sangat penting untuk mendemonstrasikan dan menguji skalabilitas Jaringan SubQuery melalui program testnet yang diberi insentif. Proses ini juga akan memungkinkan kami untuk membentuk komunitas pengindeks sebelum diluncurkan secara publik melalui TGE pada Maret 2022 dan mainnet kami pada akhir tahun depan.

![](https://cdn-images-1.medium.com/max/800/1*I6mko5xumHAArzGePvEZiQ.jpeg)

Dengan demikian, hasil utama dalam alur kerja kami dapat dipecah menjadi tonggak utama berikut.

## Di mana kita sekarang — Pertengahan Q4 2021

### Dukungan EVM untuk parachains

Kami akan segera merilis [dukungan beta kami untuk implementasi Polkadot dari Ethereum Virtual Machine (EVM)](https://medium.com/@subquery/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff). Ini memungkinkan pengembang Polkadot dan Ethereum untuk mengintegrasikan data Substrate dan EVM dengan mulus ke dalam satu tempat dan mengkueri sumber data tunggal ini menggunakan GraphQL.

SubQuery akan memperkenalkan filter yang lebih canggih daripada pengindeks lainnya, memungkinkan pemfilteran transaksi non-kontrak, pengirim transaksi, kontrak, dan argumen log yang diindeks, sehingga pengembang dapat membangun berbagai proyek yang memenuhi kebutuhan data spesifik mereka.

### Akademi SubQuery

Akademi dirancang untuk meningkatkan keterampilan dan memberdayakan pengembang di ekosistem SubQuery dengan menyediakan edukasi modular kepada mereka. [Our first course in the Academy is the _Hero Course_](https://doc.subquery.network/academy/herocourse/) and was launched on Friday 22 October 2021.

Within each module of the _Hero Course_, there are several 5 to 10 minute lessons which are delivered by a recorded video. The video content is accompanied by written tutorials, slides, workbooks, and links to the finished GitHub code repository.

The course is designed to get a developer from knowing nothing about SubQuery to becoming an expert in building a SubQuery data source for their new blockchain application.

In the next few months we will be deploying more education for the Community, with weekly releases of new SubQuery _Hero Course_ content, and more courses in the coming weeks.

### Proof of Indexing

Proof of indexing allows us to guarantee that two different indexers working with the same SubQuery project have indexed the exact same data. It’s a critical component required for the development of a decentralized SubQuery network. We’re using a concept called Merkle Mountain ranges to confirm and guarantee this, keep an eye out for a future blog post that explores this deeper.

### Premium Enterprise Service

We have some large customers such as Karura, Kodadot and Fearless Wallet all running production applications in SubQuery. These teams are demanding improved service and higher levels of reliability.

We’re rising to the challenge, with Service Level Agreements, enterprise service tiers, and other tools that our larger customers need to run their own businesses and receive the best possible performance from SubQuery for their applications.

Please get in contact with the team if you want to talk to us about receiving enterprise level services and support from SubQuery.

## Milestone 1 — End of Q4 2021

### SubQuery Builders/Grants Programme

This grants programme is designed to facilitate and catalyse innovation with Polkadot and SubQuery, and to build the next generation of dApps to power the web3 revolution. It will support new projects with grants, technical support, marketing and business development advice from SubQuery and others.

We are excited about the potential of this and will be releasing more information soon.

### Coordinator and client SDK implementations

We will be improving our core SubQuery SDK and adding additional components for a SubQuery coordinator and client.

The indexer coordinator will be deployed by indexers to expose the network to the indexer, and allow the indexer to register itself with the SubQuery network and advertise the data that it is making available

The client SDK will be for the consumer role, and will allow them to find indexers and manage the entire transaction that a consumer will need to retrieve and pay for data.

### SQT Network contract internal MVP

Our first version of the SubQuery network will be within a smart contract, deployed on a leading Polkadot parachain. The internal MVP will allow us to internally start testing out everything here, and is a huge milestone for us to complete.

### EU Cluster

Our customers are requesting support for more clusters for SubQuery data around the world. More clusters mean more resiliency, and hosted SubQuery data closer to where their customers are. A new European cluster means faster requests for consumers, unrivalled performance for dApp developers and more resiliency for the SubQuery network.

### Improvements to subql init

The _subql init_ command is a familiar one for anyone that has built a SubQuery project; it represents a blank canvas — limitless opportunities. We are aware that we can do better to help others get started, rather than a blank canvas developers want a blank scaffold, where all the boiler-plate code is already written.

This roadmap item represents work we want to do to allow developers to start building on any parachain without needing to worry about endpoints, dictionaries, and types — all saving time for developers and helping others get started.

## Milestone 2 — Middle of Q1 2022

### Public testnet launch

Following the SQT Network contract internal MVP, we will invite a small group of participants to onboard and join us as we start testing the SubQuery Network. In order to launch, we need to complete a large number of tasks and an even bigger amount of documentation!

In early 2022, we will share more information about this process and how you can apply to take part.

### Point-in-time indexing

Imagine being able to find out the state of the blockchain at a certain point in time - what exactly did a SubQuery project look like back at the 5 millionth block? This is exactly what this new feature will provide.

### SQT Network contract v1 and external code audit

All important networks require a through code audit by an external partner to ensure that the network’s code is secure and scalable. SubQuery is no different, so we’ll be working with key partners for a full code audit here and also continue to receive code audits for our smart contracts going forward.

### Internal micropayments testing

This is a key feature for us. We are going to be doing a lot of work within the Polkadot ecosystem to manage and handle micropayments within SubQuery. The advantage of Polkadot is tiny transaction fees relative to other networks like Ethereum, meaning micropayments are much more relevant to. This will roll out to our incentivised test network after we carry out thorough internal testing.

### SubQuery Network Explorer and App

We’re building an explorer and other applications to allow participants in the SubQuery Network explore and find data within the SubQuery Network. Consumers will also use this to navigate the library of supported data sources, as well as delegators to analyse how indexers are performing to decide how to delegate their SQT tokens.

### Enterprise health monitoring

Following on from our SubQuery Enterprise service tier, you can also expect a large amount of health monitoring and other performance analytics tools to be made available to customers.

## Milestone 3 — End of Q1 2022

### SQT token generation event

After a successful test network phase we are expecting to launch the SubQuery token on a Polkadot parachain partner. We will be sharing more information on our tokenomics with the community in the coming weeks.

### Public incentivised testnet launch with micropayments

This is the final stage of our test network. We will release everything to our test network and expect participants to push it to its limits. This includes scale and load testing, fine tuning our economic models and coefficients, testing our documentation and onboarding processes, and making sure that you can transact with a precursor to SQT within it.

We expect that we will be rewarding participants of our test network, those that complete certain quests or tasks, and those that act as different members of the test network.

### Data traffic insights and reporting

We are handling millions of data requests to SubQuery projects each day. Most of our customers don’t have analytics in their own dApps for user privacy but they still need to know how their dApps are operating so we will be improving this.

### Scalable intelligent routing

We have a goal of a Billion daily SubQuery requests to our hosted service, that’s why we are going to introduce a globally scalable service with multiple SubQuery hosted services running.

It’s a new and continuously improving feature that automatically routes requests to the closest available node. Additionally, it allows us to redirect all requests immediately to a backup SubQuery zone, providing us with a fault tolerant system in the case of regional outage.

In the future it means that we’ll be creating more and more smaller SubQuery hosted services tactically placed closer to our users.

## Milestone 4 — Middle of Q2 2022

### Launch of the SubQuery Foundation

In our move to create a decentralized SubQuery Network we will establish a SubQuery Foundation to administer the future governance and growth of the ecosystem. The ownership of the SubQuery Network will come under the SubQuery foundation initially.

### Finalise research for other Layer-1 chains

While our home will always be Polkadot we are exploring supporting various other Layer-1 blockchains with our indexing capabilities.

### Liquidity mining program

In order to enhance the liquidity of the SQT token, we will create a liquidity mining program with a decentralized exchange (DEX). This will enable token holders to generate returns on their investment.

## Milestone 5 — End of Q2 2022

### Mainnet launch 🚀

After we complete testing of the SubQuery network will launch the first SubQuery Network mainnet. This is where everything really starts. Initially, we will onboard and reward participants of the test network, and then it will be completely open to everyone in the community.

### Centralised Exchange launch

In order to drive increased adoption of SQT, we anticipate launching the token on one if not multiple leading CEX during this period as well as many other DEXs.

## Milestone 6 — Long term plans

### Launch our own Parachain

Although we initially plan to partner with a top Polkadot parachain to get SubQuery Network released and scaled quicker, in the long-term SubQuery also intends to launch on it’s own parachain and integrate itself even more in the ecosystem.

This self owned parachain will allow us to further innovate in tools that can help developers build the web3 future faster. We want to aim for a parachain slot once we have a proven track record behind us and the data, community, and token to support it.

### SubQuery Foundation moves to a DAO

This one is a long way off, but it’s always our dream the SubQuery eventually becomes a community owned DAO. We’ve said many times that the community plays a huge part in SubQuery, everything that we do is for our customers — becoming a DAO is the embodiment of that focus.

That being said, this is a long long way off, and will only be done once we are absolutely confident of SubQuery's success and future with the community.

## About SubQuery

[SubQuery](https://subquery.network) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. The protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
