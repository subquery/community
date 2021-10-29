# SubQuery 发布技术路线图

![](https://cdn-images-1.medium.com/max/800/1*Qcu5mFIs8eJhAXaMpWOlMQ.png)

**SubQuery 发布了项目的关键里程碑，包括TGE时间表**

今天，我们很高兴首次发布我们详细的技术路线图。 SubQuery的目标是成为Polkadot生态系统中的主要数据提供者，来自社区的支持帮助我们实现了这个非常棒的愿景。 我们从2020年年底 在[Web3 Grant](https://web3.foundation/)的支持下正式成立， 到2021年1月发布了第一个开源版本， 再到 [9月份结束了我们的Series A](https://subquery.medium.com/series-a-1abed6c1c2af) 我们要感谢您给予我们的一切支持，使我们能够进入这个阶段！

随着我们的持续成长，现在是时候来分享我们未来的计划，包括我们的技术路线图。 我们对SubQuery的下一个版本将如何为Polkadot生态系统带来更大的价值和为我们的社区提供更多的机会来参与我们的成长而感到兴奋。

## 我们的未来

SubQuery 已经为 [超过60个 Polkadot & Kusama上的项目](https://project.subquery.network/)提供每天数以百万计的数据查询服务， 我们希望确保下一阶段可以有组织和有控制的成长。

为此，我们认为通过奖励性测试网方案来展示和充分测试SubQuery网络的可扩展性至关重要。 在这个过程中, 我们可以在2022年3月的TGE公开发行和明年稍晚的主网上线之前建立一个indexer社区。

![](https://cdn-images-1.medium.com/max/800/1*I6mko5xumHAArzGePvEZiQ.jpeg)

因此，我们将通过以下几个主要里程碑来展示我们的项目进展。

## 我们现在的节点——2021年Q4中期

### EVM对平行链的支持

我们将很快发布对[Polkadot 版本的 Ethereum 虚拟机 (EVM)](https://medium.com/@subquery/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff) 的beta 支持。 这将允许Polkadot和Etherum开发者可以无缝地将 Substrate 和 EVM 的数据整合归一，并使用 GraphQL 查询这个单一的数据源。

SubQuery 引入了比其他indexer更高级的过滤器，允许过滤非合约交易、交易发送者、合约和索引日志参数，因此开发人员可以构建各种满足其特定数据需求的项目。

### SubQuery 学院

建立SubQuery学院的目的是为了通过模块化的教学来为SubQuery 生态中的开发者提升和赋能。 [我们学院的第一期课程是 _Hero Course_](https://doc.subquery.network/academy/herocourse/), 已经在2021年10月22日星期五上线。

_Hero Course_的每个模块中包含几个录制好的5-10分钟的课程。 视频内容还附有书面教程、幻灯片、练习簿, 同时我们提供了已完成的 GitHub 代码库来提供参考。

本课程旨在让开发者从 SubQuery 小白变成为可以为他们新的区块链应用构建 SubQuery 数据源的专家。

在今后几个月中，我们将为社区提供更多课程。 每周发布新的 SubQuery _Hero Course_ 课程内容，以及今后几周内的更多课程。

### Indexing证明

Indexing证明使我们能够保证使用同一个SubQuery项目的两个不同的indexer索引了完全相同的数据， 这对于开发去中心化SubQuery 网络非常关键。 我们用Merkle Mountain ranges算法来确认和保证这一点， 如果需要更深入的了解，请保持对我们博客的关注。

### 高级企业服务

我们的大客户，如Karura，Kodadot和Fearless钱包，都在运行依托SubQuery的产品应用 。 这些团队对改进服务和提高可靠性有巨大的需求。

面对服务级协议的实施，特别是企业级别的服务， 以及为了满足我们大客户为了经营业务和从SubQuery获得最佳性能而所需工具的需求，我们迎来了巨大的挑战。

如果您需要 SubQuery 的企业服务和支持，请与我们的团队联系。

## 里程碑1——2021 Q4结束

### SubQuery Builders/Grants 计划

这项基金方案旨在方便和促进Polkadot和SubQuery应用的创新， 并建造新一代的 dApps 来为web3 带来革新。 该基金计划旨在让SubQuery和其他机构为新项目提供技术支持、营销和商业发展咨询。

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
