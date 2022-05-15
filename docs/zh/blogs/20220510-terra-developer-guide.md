# SubQuery 的 Terra 引导指南

![](https://miro.medium.com/max/1400/1*DiTE9KuzH0xHLojzGWxOuw.png
)

在相当长的一段时间里，我们一直在开发和完善对于 Terra 的支持，并与关键的开发者合作伙伴一起进行测试工作（请关注未来几天的公告）。 这段漫长的时间让我们对 SubQuery 为 Terra 带来可伸缩性、可靠性的功能充满信心。 在本文中，我们将分享一份详细的开发人员指南和路线图，为所有 Terra 社区解决其数据索引需求提供参考。

SubQuery 是一款灵活快速的开放式数据索引工具。 我们的开放索引工具旨在帮助开发人员呢能够在数小时内构建自己的 API，并在字典（预先配置的索引）的帮助下，以难以置信的速度为区块链数据建立索引。 我们在 Polkadot 的所有垂直领域（钱包、链网络、explorers、NFT、DeFi、scanners 等）中的经验帮助我们实现了这一目标。

目前仍然是早期的版本，然而我们的目标远远不至于“测试版”，所以如果测试者能够向我们的团队报告任何错误，以便我们能够快速解决，我们将不胜感激。

<iframe width="656" height="369" src="https://www.youtube.com/embed/dS7h3isQCeA
" title="YouTube video player
" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 为什么要使用 SubQuery？

尽管 Terra 生态目前缺乏一些关键的开发工具和基础设施服务，但应用生态系统仍在蓬勃发展。 这是令人惊异的一幕，也证明了 Terra 的干劲和创造力。 在大多数情况下，当我们问团队如何解决他们的数据索引需求时，答案是：

- **构建自己的解决方案：**一个自定义的实现，由项目开发人员运行，专门为自己应用程序构建。 但为什么要重复造轮子呢？ SubQuery 致力于构建一个可靠、快速的开放索引器——我们将在数据索引上为您节省时间
- **为数据查询设计智能合约：**一些团队甚至在智能合约中实现了定制的功能，专门允许针对其应用程序逻辑进行更高级的查询。

而在 SubQuery 中，我们有一个易于使用且快速的开源 SDK。 它提供了一个标准的 GraphQL 端点，或者也可以直接通过 postgres 数据库查询所需数据。 基于此，开发人员可以从智能合约中索引一组独特的数据，从而打造出一款卓越的产品，让竞争对手一败涂地！ 我们为您提供灵活性，让您以最合适的形式获取所需的数据。

可靠性是关键，数据索引业务需要一个可靠且可扩展的平台来承载。 [SubQuery 的托管服务](https://subquery.network/managedservices)是业界领先的托管解决方案，面向所有客户，每天为 Polkadot 最大的项目提供数亿条请求。 我们为[企业级客户](./20211228-enterprise-hosted.md)提供服务，如专用数据库、冗余集群、智能多集群路由以及高级监控和分析。 它将支持您的应用程序，并且可以实现扩展。

几个月后，您将能够通过 SubQuery 网络（Web3基础设施的未来）完全去中心化的 SubQuery 基础设施服务。 SubQuery 网络将以激励和可验证的方式为全球社区索引功能以服务区块链项目的数据需求。 它被设计为支持任何 Layer 1 网络（包括Terra）的任何 SubQuery 项目，因此您可以从我们的正式版本发布起利用统一的 SubQuery 网络。

## 安装说明

首先需要通过 npm i -g @subql/cli@latest 这个命令安装最新版本的 @subql/cli。

最好的方法是从我们的[初学者项目](https://github.com/subquery/terra-subql-starter)开始，其包含了一个正在运行的项目，其中包含所有映射函数的示例：该项目索引的内容如下：

- **BlockHandler**：所有的区块及其它们的哈希与区块高度
- **TransactionHandler**：所有交易转账及其它们哈希、区块高度与时间戳
- **EventHandler**：所有智能合约的事件及其哈希、区块高度、发起方、接受方和已筛选的智能合约地址的金额（bLuna）
- **MessageHandler**：所有智能合约的消息及其哈希、区块高度、合约、发起方和已过滤的智能合约地址的  execute_msg  数据（bLuna）

SubQuery 支持通过交易转账、消息订阅以及处理程序为 Terra 的智能合约编制索引。 您可以在[初学者项目](https://github.com/subquery/terra-subql-starter)中看到智能合约支持的工作样例，并阅读<0> SubQuery 大学</0>上的文档。

SubQuery 在 Terra 链上的实现机制被设计成与 SubQuery 在 Polkadot 上几乎相同的操作方式，并且与 Graph 的方法类似。 另外，我们已经更新了[ SubQuery 大学](https://university.subquery.network/)，并将特定的 Terra 相关信息添加到通用的 SubQuery 文档中。 你可以从下面这份[优秀的入门指南](http://university.subquery.network/quickstart/quickstart-terra.html)。

## 将项目部署到 SubQuery 的托管服务

尽管您始终能够在自己的基础设施中轻松运行项目，但是 SubQuery 的[托管服务](https://subquery.network/managedservices)现在已经支持 Terra 项目。 可以与一些依赖于 SubQuery 的企业级[托管服务](./20211228-enterprise-hosted.md)的最大的项目一样，您也可以将数据索引服务托管在 SubQuery 上。 作为我们上线之后的合作伙伴协议的一部分，我们将为您提供3个月的免费托管服务。

您可以按照此处的[指南](https://university.subquery.network/run_publish/publish.html)将 Terra SubQuery 项目发布到我们的托管服务中。 请注意，您必须使用[ IPFS ](https://university.subquery.network/run_publish/publish.html)而不是 GitHub 来托管 SubQuery 项目。

您可以随时更新托管服务项目。 我们还设有一个[模拟部署槽](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md)，允许您在不停机的情况下进行无缝的蓝绿部署。 这个模拟槽还可以用来运行一个全新的 SubQuery 实例，并使用一个新的数据库来完成项目的后台重新索引。 客户通常会将模拟槽链接到其应用程序的模拟版本或者开发版本。

部署后，您可以使用 SubQuery 资源管理器访问项目，并直接从应用程序向所提供的 GraphQL 端点发出请求。 如果您希望我们启用更高级的功能，如[ GraphQL 订阅](https://university.subquery.network/run_publish/subscription.html)、更复杂的查询和<0>聚合函数</0>等，[请与我们联系](https://university.subquery.network/run_publish/aggregate.html)。

一旦您部署了您的项目，也请通知我们，因为我们可能需要协助微调批处理大小，以确保我们的 Terra archive 节点能够为您的项目正常运行。

## SubQuery对Terra的支持

这篇文章我们分享的主要内容为：

-   区块与事件的高级索引
-   Terra Dictionary：预计算的索引，[大大缩短索引时间](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
-   在我们免费的[企业级管理服务](./20211228-enterprise-hosted.md)中全面支持 Terra 链
-   [SubQuery 大学](https://university.subquery.network/)中的文档

在接下来的几周里，我们将会分享：

-   [SubQuery 学院](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)的学习课程
-   在我们去中心化的 SubQuery 网络中完全支持 Terra（很快就可以在我们当前的前沿测试网中看到）

---

我们对支持 Terra 的 beta 版的发布标志着我们所承诺过的为 Terra 社区提供增强的索引工具的一个重要里程碑，以使 Terra 上的开发人员能够走得更远、更快。 我们渴望从社区获得反馈，以改进我们的产品，并提高我们作为 Web3 中增长最快的开发者社区之一的可信基础设施合作伙伴的知名度。

James Bayly

## 链接

-   [入门指南](https://university.subquery.network/quickstart/quickstart-terra.html)
-   [SubQuery 大学 (文档)](https://university.subquery.network/)
-   [示例项目](https://github.com/subquery/terra-subql-starter)
-   [托管服务](https://explorer.subquery.network/)
-   [将您自己的 Terra 项目发布到托管服务](https://project.subquery.network/)

## 关于SubQuery

[SubQuery](https://subquery.network/) 是一个区块链开发者工具包，帮助用户构建未来的 Web3 应用程序。 SubQuery 项目是一个完整的 API，用于组织和查询来自 Layer 1 的数据。 目前服务于 Polkadot 和 Substrate 项目，这种数据即服务的模式允许开发人员专注于其核心用例和前端，而无需浪费时间构建用于数据处理的定制后端。 SubQuery 网络建议以完全去中心化的方式实现同样的可扩展和可靠的解决方案。

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
