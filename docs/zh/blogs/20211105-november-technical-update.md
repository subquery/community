# SubQuery11月技术的更新：EVM和清单更新

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**请阅读更多关于技术的内容以此深入了解最新版本的 SubQuery**

# 项目清单中的外部链式文件支持

今天是我们项目清单文件的[0.2.0版本](https://doc.subquery.network/create/manifest/)的启动之日(`project.yaml`)。 这个新版本为开发者提供了客户要求的各种改进。

最重要的是，您现在可以引用一个链式定义文件，当您索引自定义的底层链时其中将包含所有自定义类型。 更快的速度意味着您可以将一个新的 SubQuery 项目连接到任何基于Substrate的链，包括所有的Kusama的平行链。 这是一个标准的链类型文件它需要声明这个区块链支持的特定类型比如`son`或`.yaml`格式。

这个解决方案允许您避免复制和管理清单中的链式定义。[并允许您只复制在PolkadotJS](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec)等仓库中列出的<0>已发布的链路类型文件。

[您可以阅读新的清单文件，包括如何将您的项目迁移到它，详细内容将更新在我们的文档中。](https://doc.subquery.network/create/manifest/)

# Moonbeam的EVM支持

上周，我们高兴地宣布 [我们正在与Moonbeam合作，将完整的EVM和Substrate索引支持带到Moonrier](https://subquery.medium.com/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff)。

今天，我们将为您提供启动所需的所有开发人员资源。

目前，还没有开源工具可以让开发者灵活地跨以太坊和Polkadot/Kusama收集和查询数据。 这种限制可能导致Moonriver中的dApps解决方案被孤立到智能合约层中，从而限制了它们在两个蓬勃发展的网络中对消费者的吸引力。 此次与Moonbeam的合作为Moonriver内的所有区块链数据带来了完整统一的数据索引解决方案，并将极大地有益于Moonriver不断发展的应用生态系统。

**SubQuery 将成为下一个月moonbeam生态建设者车间的来宾**[**这里可完成注册**](https://www.crowdcast.io/e/moonbuilders-ws/10)**.**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[首先，熟悉关于如何连接和索引来自Moonbeam，Moonbase Alpha和Moonriver的数据的最新文档。](https://doc.subquery.network/create/moonbeam/)索引moonbeam数据的过程只是两个步骤：

## 第 1 步：添加moonbeam自定义数据源

我们已经创建了一个数据处理器，专门用于使用Moonbeam实现 [Frontier](https://github.com/paritytech/frontier)。 它允许您引用处理器用于解析参数的特定ABI资源以及事件来源或调用的智能合约地址。 [您可以在这里阅读更多](https://doc.subquery.network/create/moonbeam/#data-source-spec)

SubQuery采用了比其他索引器更先进的过滤器，允许过滤非合同交易、交易发送人、合同和索引日志参数。 这使得开发人员能够根据他们的具体数据需要建立各种各样的项目。

## 第 2 步：索引moonbeam数据

就像一个普通的 SubQuery 项目一样，您使用映射函数将数据转换成您定义的 GraphQL 实体，不同的是，并不是`SubstrateEvent`或`SubstrateExtrinsic`, 您的映射函数将收到一个`MoonbeamCall`或`MoonbeamEvent`基于以往的[交易响应](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse)或[日志](https://docs.ethers.io/v5/api/providers/types/#providers-Log)类型。 [您可以在这里阅读更多关于这些内容的信息](https://doc.subquery.network/create/moonbeam/#moonbeamcall)。

[在此阅读此进程的完整文档](https://doc.subquery.network/create/moonbeam/#moonbeamcall)

## 示例项目

有一个完整的示例项目用于索引ES`传输`事件和`批准`智能合同调用。 此示例项目的代码是[在 GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)上，或通过[live SubQuery 项目在这里的 SubQuery Explorer 访问](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project)。

大部分更改发生在清单文件中(`project.yaml`)。 您可以在下面看到我们有 [扩展通话筛选器](https://doc.subquery.network/create/moonbeam/#call-filters) 来支持 [函数签名字符串](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) 或通过函数视野来过滤被调用的函数。 对于 [事件筛选器](https://doc.subquery.network/create/moonbeam/#event-filters), 您可以使用按照[Ethereum JSON-PRC 日志过滤标准进行的主题筛。](https://docs.ethers.io/v5/concepts/events/). 请注意，SubQuery为Moonbeam EVM引入了比其他索引器更高级的过滤器，这些改进将大大有利于开发人员。

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

如果您熟悉基于Substrate的SubQuery项目，您将注意到映射功能对于新的Moonrier支持是多么相似的。 每个映射函数都会收到一个`MoonbeamCall`或`MoonbeamEvent`并处理它们，就像任何其他SubQuery项目一样。

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

如果您对此有任何疑问，请确保您 [查看我们的文档](https://doc.subquery.network/create/moonbeam) 或在我们 [Discord社区中的我们的 #技术支持频道上与我们联系](https://discord.com/invite/subquery)

[在 GitHub 上复制示例项目](https://github.com/subquery/tutorials-moonriver-evm-starter)

你们可以看到的。创建一个 Moonrier 或 Moonbase Alpha项目，将Substrate和EVM数据都索引在一个单一的项目中是极其简单和大体相似的。 您可以使用SubQuery的高级手写脚本工具来加速您的dApp开发，并利用或丰富你的数据索引来构建更直观的dApp。 我们已迫不及待想看看你接下来构建的项目！

## 关于 SubQuery

SubQuery是一个数据聚合层，在第一层区块链（Moonriver 和 Polkadot）和DApp之间运行。 提供解锁区块链数据并将其转换为可查询状态的服务，以便使用者能够用直观地使用。 它允许 DApp 开发者专注于核心应用案例和前端，在建立数据处理的自定义后端上为他们节省时间。

​​[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)  |  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [Matrix](https://matrix.to/#/#subquery:matrix.org)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [Github](https://github.com/subquery/subql)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## 关于Moonbeam

Moonbeam是Polkadot 网络上与以太坊兼容的智能合约平台，可以轻松构建本地可互操作的应用程序。 这种以太坊兼容性允许开发人员以最少的更改将现有的 Solidity 智能合约和 DApp 前端部署到 Moonbeam。 作为 Polkadot 网络上的平行链，Moonbeam将受益于Polkadot中继链的共享安全性以及与连接到Polkadot的其他链的集成。 目前，PureStake正在积极开发中，Moonbeam预计将在2021年第四季度到达主网。 了解更多: [https://moonbeam.network/](https://moonbeam.network/)。
