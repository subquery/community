# SubQuery 向客户提供企业支持

![](https://miro.medium.com/max/1400/1*z_StqAT5KeaxQLBCm-xpRQ.jpeg)

随着社区规模的扩大，我们每天都会看到数百次部署，托管服务的流量呈指数级增长。 The team at SubQuery are rising to this challenge however and are scaling our services to meet the unprecedented demand for our tools by our customers, while keeping our [hosted service](https://projects.subquery.network/) free.

Many customers now rely on SubQuery to provide mission critical data to their production apps. These customers represent some of the largest wallets ([Nova](https://novawallet.io/) and [Fearless](https://fearlesswallet.io/)), scanners ([Subscan](https://www.subscan.io/), [SubVis](https://www.subvis.io/), and [DotMarketCap](https://dotmarketcap.com/)), NFT platforms ([Kodadot](https://kodadot.xyz/) and [Yuser](https://yuser.co/)), and more. 这些是Polkadot社区每天使用的大型应用程序，必须随时在线。

一段时间以来，托管服务的性能和可靠性一直是SubQuery的首要任务。 我们的姐妹团队是OnFinity，Polkadot最大的基础设施提供商，所以我们在这方面有丰富的经验。 因此，我们最近进行了三项改进，使SubQuery成为Polkadot中最可靠、可扩展和性能最好的数据平台。

![](https://miro.medium.com/max/1200/1*QckhJzjQqw9czpBMRhXgXQ.gif)

## Dedicated Databases

最初，所有SubQuery项目都被部署到我们基础设施中的共享数据库，以节省资金并使我们的服务保持免费。 然而，这将导致拥有大量数据集的高流量项目挤压同一数据库中的其他项目。

如果您正在建造一个用于生产的项目， 我们提供一个专用数据库，托管在我们的 SubQuery 集群中，它能够为您的项目提供处理成千上万复杂查询所需的所有资源，同时不必担心他人的性能影响。

如果你想要升级到这个位置，你应该在sales@subquery.network上与我们联系。 我们从您现有的表格中复制您的数据，所以您不需要花时间重新计算您已经有的数据导致了零时间的迁移。

## Multiple Cluster Support

在SubQuery中，弹性和可靠性对我们来说意味着一切。 在世界上一个单独的地区拥有一个冗余集群意味着我们可以从偶尔会导致区域离线的云提供商中断中快速恢复。

此外，当您在我们的托管服务中向SubQuery项目提出请求时，大多数等待时间都是由于延迟。 延迟是指点时间的点，它需要您的请求将世界圈到最近的 SubQuery 集群，并且可以从某些偏远区域占用第二或两个。 在世界各地拥有多个集群使我们能够减少最重要的请求时间（延迟）。

我们在不同的地区实现了多个集群，它们提供相同的服务 This work also includes a tool in [SubQuery Projects](https://project.subquery.network/) that allows you to deploy and manage your project across these clusters. 我们还实施了确保不同区域的数据库保持一致性的流程， 这样无论您的请求到哪个集群，您收到的数据都是一致的。

## Intelligent Routing

一旦SubQuery集群在不同的区域运行，下一个逻辑步骤就是让这个功能对用户不可见。 您的用户永远不必决定他们的请求到什么集群。SubQuery应该自动将他们的请求导入最健康的集群。 这是SubQuery 智能路由提供的信息。

我们为每个高级客户提供一个单一的全局端点，这些客户有智能路由自动应用于每个请求。 这项服务包括进行大量监测，不断地将每个群组进行健康检查，并确保用户不会被转送到过于不堪重负或脱机的群组。 全局端点优化每个请求的路由到最近的集群，以确保用户从集群获得最佳性能。

![](https://miro.medium.com/max/1000/0*DNXDiABzli0et1MU)

这些服务使我们能够满怀信心地为更多客户提供优质服务。 我们与每位客户合作，了解他们的业务和目标，然后建立服务以满足他们的需求。 SubQuery是Polkadt中最大的数据服务提供商，这些功能显示了我们如何在支持Polkadt中最大项目的同时支持数千个社区项目。

## About SubQuery Network

SubQuery是Polkadot领先的数据提供商，支持在Layer_1区块链(Polkadot) 和去中心化应用程序之间的索引和查询。 SubQuery的数据服务目前被大多数Polkadot和Kusama众贷和平行链链拍卖网站所使用。

SubQuery 的协议通过 SubQuery SDK 抽象出区块链数据特性，使开发人员能够专注于部署他们的核心产品，而无需在自定义后端技术上浪费精力。

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG)| [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
