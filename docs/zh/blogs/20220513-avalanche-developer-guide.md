# SubQuery为Avalanche提供索引支持测试版

![](https://miro.medium.com/max/1400/1*BiJaESR69-vDimBJmXhQvw.png)

今天，经过几个月的改进，重构和测试，我们很高兴与Avalanche社区分享我们开放式索引解决方案的测试版。 SubQuery已经在Polkadots建立领先数据索引工具，[最近在Avalanche峰会上宣布](./20220321-avalache.md)，我们将扩展到[Avalanche生态系统](https://www.avalanchesummit.com/agenda)，这让渴望获得灵活和可扩展索引工具的开发者感到兴奋。

点击链接查看测试指南: https://university.subquery.network/quickstart/quickstart-avalanche.html

SubQuery是一个开放的数据索引工具，具有灵活性和快速性。 我们的开放式索引工具旨在帮助开发人员在数小时内建立自己的API，它的设计是在字典（预先索引）的协助下，快速索引区链。 我们在Polkadot所有垂直领域的客户（钱包，网络，浏览器，NFT，DeFi，扫描仪等）的成功经验为我们支持Avalanche索引提供了最大的帮助。

从今天起，Avalanche开发人员将能够访问整个Polkadot广泛使用的同样快速，灵活和开放的索引解决方案的测试版。 由于这是一个测试版，它可能会有一些问题。 因此，如果能向我们的团队报告任何错误，以便我们能迅速解决这些问题，我们将非常感激。

## 为什么使用SubQuery？

_在Avalanche中已经有一些其他的选择，那么为什么你要使用SubQuery？_

我有幸在Avalanche峰会上遇到的许多人都问了这个问题。 在我们这里，通常有三个解决方案。

- 构建自己的解决方案：为什么要做重复的事情呢？ SubQuery致力于构建一个可靠快速的开放索引器——我们将在数据索引上为你节省时间。
- 标准化的数据服务或"统一的API": 如果你和所有的人一样在相同的智能合约上构建相同的应用程序，这些服务供应商就已经够了，但实际并不是。 你需要一套独特的数据，使你能够建立一个卓越的产品，使你的竞争对手一败涂地! 你需要灵活性，以最适合你的形式获得你需要的数据。
- 其他开放的GraphQL数据服务: 每个在使用它们的人都有同样的问题，这些开放的数据服务严重缺乏开发人员的支持，存在一些重大的性能问题。 此外，这些服务只覆盖在合同链上，没有计划扩展到你的子网。

在SubQuery，我们有一个开源的SDK，易于使用，速度快。 它为你提供了一个标准的GraphQL终端，或者你可以直接查询postgres数据库。

访问数据的可靠性是绝大多数应用程序成功的关键，你需要一个可靠和可扩展的平台来托管它。 [SubQuery的管理服务](https://subquery.network/managedservices)是为所有客户提供的行业领先的托管解决方案，它每天为Polkadot最大的项目提供数以亿计的请求。 我们为[企业级客户提供服务](./20211228-enterprise-hosted.md)，如专用数据库，冗余集群，智能多集群路由，以及先进的监控和分析。 它将在你准备好的时候支持你的应用，并与你一起扩展。

最后，在几个月内，你将能够通过SubQuery网络完全分散你的SubQuery基础设施，这是Web3基础设施的未来。 SubQuery网络将以激励和可验证的方式为全球社区提供项目数据的索引和服务。 它旨在支持来自任何layer-1网络的任何SubQuery项目，包括Avalanche，所以你可以一开始就受益于统一的SubQuery网络的规模。

## 安装说明

点击链接查看测试指南: https://university.subquery.network/quickstart/quickstart-avalanche.html

首先要通过*npm i -g @subql/cli *这个命令安装最新版本的@subql/cli@0.30.0

最好的方法是从我们的初学者项目开始，其包含了一个正在运行的项目，其中包含所有映射函数的示例： https://github.com/subquery/avalanche-subql-starter。 这个项目从[Pangolin智能合约](https://snowtrace.io/token/0x60781c2586d68229fde47564546784ab3faca982)中索引了以下内容：

- BlockHandler：所有区块和它们的核心信息
- TransactionHandler：在Pangolin智能合约内所有交易批准功能
- EventHandler：在Pangolin智能合约中的所有传输事件

SubQuery的Avalanche工程被设计为与Polkadot的支持几乎相同的操作，并且与Graph的方法相似。 我们已经更新了[SubQuery大学](https://university.subquery.network/build/introduction.html)，将Avalanche的具体信息添加到一般SubQuery文档中： 你可以从这里开始，遵循这个优秀的入门指南： https://university. subquery. network/quickstart/quickstart-avalanche. html

## SubQuery对Terra的支持

我们正在完成第一阶段，对Avalanche生态系统的全面支持。

![](https://miro.medium.com/max/1400/0*GUKZJfJCz1nB_3zc)

今天，我们分享以下内容:

- 高级合同链索引
- Avalanche 字典：预先索引，极大减少索引时间
- 在免费的企业级管理服务中对Avalanche提供全面支持
- [SubQuery大学](https://university.subquery.network/)简单易懂的文献

在未来几周，请期待:

- [SubQuery 学院](./20211018-subquery-launches-the-subquery-academy.md)的学习课程
- 在我们去中心化的 SubQuery 网络中完全支持 Terra（很快就可以在我们当前的前沿测试网中看到）

With the number of Subnets planned over the coming months, there will be a huge need for fast, open, and flexible indexing support that works across all compatible Subnets. We have experience implementing this level of configurability for Polkadot's parachains, and are investigating how to provide the same outcome for Avalanche (e.g. by importing custom implementations of snowman.Block etc).

The launch of our beta support for Avalanche marks a significant milestone in our commitment to offer enhanced indexing tools for the Avalanche community to enable her developers to go further, faster. We are eager to get feedback from the community in order to improve our offering and increase our visibility as a trusted infrastructure partner for one of the fastest growing developer communities in Web3

We are now looking for launch partners that we can closely support as they develop their first SubQuery projects in this ecosystem. Reach out to me at james.bayly@subquery.network if you want to be first on the journey with us.

_James Bayly_

Follow the beta guide here: https://university.subquery.network/quickstart/quickstart-avalanche.html

## About SubQuery

[SubQuery](https://subquery.network/) is a blockchain developer toolkit enabling others to build Web3 applications of the future. A SubQuery project is a complete API to organise and query data from layer-1 chains. Currently servicing Polkadot, Substrate, Avalanche and Terra projects, this data-as-a-service allows developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The SubQuery Network proposes to enable this same scalable and reliable solution, but in a completely decentralised way.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
