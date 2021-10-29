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

我们非常高兴的看到该计划带来的无限可能，不久将公布更多信息。

### Coordinator and client SDK implementations

我们将改进我们核心的 SubQuery SDK ，并为SubQuery Coordinator 和client添加更多的组件。

Indexer coordinator由indexer来部署，以使网络对indexer开放并允许indexer在SubQuery网络注册并发布可获得的的数据。

Client SDK供消费者使用， 使他们能够找到indexer并会管理消费者获取数据并且支付的整个交易。

### SQT Network contract internal MVP

我们的第一版智能合约SubQuery网络将部署在一个主要的 Polkadot 平行链上。 内部MVP将使我们能够在内部测试任何需求，这将是我们要完成的一个巨大的里程碑。

### EU Cluster

我们的世界各地客户需要更多的集群来满足他们对SubQuery数据的需求。 更多的集群意味着更高的弹性，并且使得托管的SubQuery数据靠近其使用者的所在地。 一个新的欧洲集群意味着使用者可以更快的发送请求，开发者可以获得无与伦比的性能，以及SubQuery网络可以获得更强的弹性。

### Improvements to subql init

相信任何一个已经构建SubQuery 项目的开发者都对_subql init_ 命令非常熟悉，它就像一张空白的画布，意味着无限的机会。 我们意识到，我们可以更好地帮助他人开始一个项目， 相比一张空白的画布，开发者想要一个空白的脚手架，为此我们丰富了这个命令的功能，现在开发者可以通过它生成样板代码。

这个路线图项目代表着我们需要更多的工作，为了方便开发人员能够在任何平行链上进行开发，而不必担心endpoints, dictionaries, and types 。 这一切都是为了帮助开发者节省时间并帮助他人更方便的开始。

## 里程碑2——2022 Q1中期

### 公开测试网络启动

遵循SQT网络合约的内部MVP的要求，我们将邀请一小批参与者同我们一起开始测试SubQuery网络。 为了启动，我们需要完成大量的任务和更多的文档！

2022年初，我们将分享更多关于这个进程以及如何申请参与的信息。

### Point-in-time indexing

想象一下，如果能够找到区块链在某个时间点的状态 — 在第500万个区块上，SubQuery项目到底是什么样子的？ 这正是这一新功能将提供的。

### SQT网络合约 v1 和外部代码审计

所有重要的网络都需要外部合作伙伴通过代码审计来确保网络代码的安全性和可扩展性。 SubQuery也不例外， 因此，我们将与主要伙伴合作来进行一次全面的代码审计，并持续接受对我们的智能合约的代码审计。

### 内部小额支付测试

这是我们的一个重要特点。 我们将在Polkadot生态系统内进行大量工作，通过SubQuery管理和处理小额付款。 Polkadot的优点是，相对于以太坊等其他网络来说，交易费很低，这意味着对小额付款更加适用。 这将在我们进行彻底的内部测试后推出到我们的激励测试网络。

### SubQuery Network Explorer and App

我们正在构建浏览器和其他应用程序，以允许SubQuery网络的参与者在SubQuery网络内探索和查找数据。 消费者还可以使用该功能浏览支持的数据源库。 delegator也可以借此分析indexer如何决定怎样分配他们的 SQT 令牌。

### 企业健康监测

加入我们的 SubQuery 企业服务级， 您还可以获得我们向客户提供的大量健康监测和其他的性能分析工具。

## 里程碑3——2022 Q1结束

### SQT token generation event

在测试网络阶段成功后，我们期待在一个 Polkadot 平行链合作伙伴上发布SubQuery token。 在今后几个星期里，我们将与社区分享更多有关我们的令牌经济的信息。

### 启动公共激励测试网和小额付款

这是我们测试网络的最后一个阶段。 我们将向我们的测试网络释放一切，并期望参与者可以压力测试。 这包括规模和负载测试，微调我们的经济模型和系数，测试我们的文档和管理流程，并确保您可以在其中与SQT的先行者进行交易。

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
