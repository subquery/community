# SubQuery祝贺Gitcoin GR 12 Hackathon的获胜者们

![](https://miro.medium.com/max/1400/1*MnMY9j3nasex9_9MNHUPtA.png)

SubQuery是Polkadot生态中领先的数据索引解决方案的提供商，热烈祝贺Polkadot生态中由[Encode Club](https://gitcoin.co/hackathon/gr12?org=subquery)组织的黑客马拉松的获胜者们。 Gitcoin被公认为是专注于为Web3创建社区和应用程序的杰出区块链开发者社区之一。 [SubQuery于12月与Gitcoin合作。](https://subquery.medium.com/subquery-announces-gitcoin-hackathon-16c9d18753a) 为五项挑战赞助价值37000美元（挑战中最大的奖金池），邀请开发者构建有用的工具和仪表盘，甚至将SubQuery扩展到Layer-1区块链。

黑客马拉松从2021年12月1日-2021年12月16日，参与的顶级区块链项目包括Moonbeam, Astar和Acala ，为这些项目提供奖金池。 奖项将被授予那些按照预设标准成功完成项目、提供最具创创意性想法的人，或者那些能够改进SubQuery核心SDK的人或解决问题的人。 以下是对这些挑战的简短总结：

- 创建一个统一的区块资源管理器，将Moonbeam和Astar的链和EVM链结合到一个易于使用的应用程序中——12000美元[由Moonbeam和Astar赞助]
- 创建以Zapper.fi或defisaver.com为灵感的DeFi hub仪表盘——8000美元[由Acala赞助]
- 创建一个仪表板，显示Polkadot及其各种parachains的最佳投资机会-3000美元
- 构建基于RMRK协议的NFTs市场浏览器-2000美元
- 扩展@subql/node服务，用来索引来自Layer-1链的数据-12000美元

## 统一EVM和Substrate区块浏览器

Polkadot/Kusama生态系统由使用Substrate构建的区块链（称为平行链）组成，使用Substrate API。 当然，某些平行链（如Moonbeam和Astar）通过完全兼容的EVM组件无缝兼容以太坊。 目前，对Substrate 和EVM数据的同步可见是一项挑战，这导致了必须分开获取Moonbeam和Moonriver中的数据。 您必须在Substrate （如Subscan）和EVM（如MoonScan和Blockscout）之间进行选择。

这一挑战是为了建立一个单一场所以了解账户活动的完整历史的巨大机会。 例如，在单个用户界面中查看账户操作以及ERC20传输。 这将成为Moonbeam、Astar和许多其他正在飞速发展的EVM平行链中的大规模社区每天使用的应用程序。

![](https://miro.medium.com/max/1400/0*b_o0NDpJOCv0QvXS)

[这个挑战](https://gitcoin.co/issue/subquery/grants/1/10002717200027175) 的获胜者是 @bizzyvinci 。 [他建立了一个在Heroku上直播的前端浏览器](https://moonriver-explorer.herokuapp.com/) 鉴于这一挑战是一项艰巨的任务，它还没有100%完成，对此我们并不令人惊讶，但我们很高兴支持这一改变游戏规则的创新的项目，并帮助将其扩展到其他EVM链。

@bizzyvinci 说：“我构建了Moonriver浏览器，这是一次非常棒的体验。第一步是学习SubQuery和damn，他们有一个非常棒的文档，附带模板存储库。 文档涵盖了入门所需的一切，并很好地解释了各个方面，例如清单文件、graphql等等。”

## Karura/Acala DeFi 仪表板

Acala和Karura代表了DeFi未来的巨大愿景，因此这是一个为生态系统构建有价值工具的大好机会。 这一挑战要求开发人员利用Subquery的数据索引服务,为Karura/Acala社区创建DeFi工具，这些工具的灵感来自Zapper.fi和defisaver.com。

[此挑战](https://gitcoin.co/issue/subquery/grants/2/100027176) 的获胜者是 Web3Go，他编写了一份关于“ [Collateral Debt Positions（CDP）”的非常好的摘要](https://web3go.xyz/#/CDPDetail) 对于在Karura上铸造kUSD StableCoin的用户，他们必须首先存入其中一种可接受抵押资产（如KSM）的代币。 一旦用户这样做了，最小抵押品比率参数将确定用户创建kUSD所需的抵押品的最小金额。 如果CDP抵押资产的市场价格降得足够低，CDP可能被视为“不安全”。

![](https://miro.medium.com/max/1400/0*l7GA1axntiHCINRM)

Web3Go的界面清晰地列出了所有CDP地址、比例和安全状态。 对于每个地址，它还提供有关地址历史的信息，并方便其他人监控金融工具。 <iframe width="560" height="315" src="https://www.youtube.com/embed/hc3YDjv6dkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

## Polkadot Staking 仪表盘

Staking是使用DOT和KSM通证的关键方式，但目前Staking的UX很难理解，导致大多数用户做出不合适的选择。

这项挑战的目标是将链上数据直观展现给用户，帮助用户了解最佳投资收益率，通过比较validators的表现，向用户展示投资回报率。

Ashik创建了PolkStakes，这是一个Polkadot validators排名网站，它获取所有validators，并在Polkadot中以PolkStake自己的评级（基于前一个时代的业绩、佣金、支出和赌注奖励等）显示一个组织清晰的validators列表。 这是一个干净简单的用户界面，给我们留下了深刻的印象。

![](https://miro.medium.com/max/1400/0*Kaho31-nn-ly8tFS)

“_SubQuery减少了对链数据进行手动索引的工作量。 由于它提供了graphql端点，我们可以轻松查询数据。 它减少了维护后端和数据库的工作量。 现在，用于计算Polkstakes排名的数据聚合在UI中完成。 这必须移动到SubQuery中。 此外，必须对索引进行更好的可视化，必须添加数据和更准确的收益预测。”</p>

优秀的SubVis团队还构建了一个漂亮的Polkadot Staking仪表盘，它显示了一段时间内的全部Staking统计数据以及一个地方的validator表现。 新的Staking功能加入了SubVis有名的拍卖和众贷页面。

![](https://miro.medium.com/max/1400/0*uPDQdMug2JaZwMbA)

最后，Web3Go在Moonriver上加入了另一个优秀的条目，其中包含详细的Staking统计数据。 他们甚至提供了关于每个委托人的信息，每个委托人提供的历史奖励，甚至是委托人采取的行动。 他们提供了额外的优势，能够显示您自己的钱包地址的Staking历史。

![](https://miro.medium.com/max/1400/0*jQgOnvcaXt6cprJR)

## RMRK NFT 市场浏览器

RMRK是NFT legos 制作NFT的高级协议，NFT不仅仅是jpeg。 RMRK的团队正在为DOT生态系统带来新的NFT标准，并在建设下一代方面处于领先地位。

这一挑战要求创建一个详细的仪表盘，跟踪所有RMRK（可能关注Kanarias（https://kanaria. rmrk. app/））的演变，包括RMRK2中的传输、历史等。 此仪表盘必须使用以RMRK2为中心的SubQuery项目。

[这个挑战](https://gitcoin.co/issue/subquery/grants/4/100027174) 的获胜者是来自Web3Go的另一个优秀的仪表板，叫做 [NFT 花园](https://web3go.xyz/#/NFTProfiler)。 它深入详细介绍了每个国家联络点的收集情况，如平均价格、数量、价格幅度和每个单项的所有交易。 此外，NFT中的所有特征都有一些有趣的可视化。

![](https://miro.medi.com/max/1400/0*1_mUnNIBYI84G_qs)

“_自Web3Go成立以来，我们一直使用SubQuery作为数据索引的基础架构。 SubQuery提供的开发工具包已证明非常适合我们的团队快速开发、部署和升级项目，这也是我们在Gitcoin Hackathon上取得良好成绩的关键。 下一步，我们将使用SubQuery为Polkadot&Kusama 平行链上的所有项目开发仪表盘，这将涉及Defi、NFT和tokens！_”说Web3Go的Hao Ding。

## 将SubQuery扩展到Layer-1区块链

SubQuery源于Polkadot，它是我们的家，我们一直努力在这个生态系统中建立关系。 尽管如此，我们也相信多链的未来，因为我们知道将有许多不同的区块链协同工作以解决不同的问题。 我们的长期计划是采用SubQuery并使其适用于其他区块链，这些区块链目前还没有能够帮助开发人员构建新DAPP的索引解决方案。

这项价值12000美元的挑战的获胜者是Naveen，他扩展了SubQuery以索引Terra链。 这是通过创建一个支流来实现的，该支流将官方subql实现的节点包扩展到索引Terra。 Naveen正在继续这方面的工作，您可以期待SubQuery计划支持Polkadot之外的layer-1链的消息。 <iframe width="560" height="315" src="https://www.youtube.com/embed/K_pjh5OC95A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

“_在过去的几个月里，我一直在研究一系列的索引器，甚至从零开始构建索引器。 这可能就是为什么SubQuery在Gitcoin GR12 Hackathon中引起我注意的原因。 我承担了将SubQuery扩展到索引Terra的任务。 我不相信我能在15天内完成这项工作。 但是SubQuery的构架是如此出色，它让我能够在脑海中迅速描绘出引擎盖下正在发生的事情。 我及时拼凑了一个可行的解决方案，目前正在使用SubQuery将Terra索引器合并到subql包中。 在可预见的未来，我将继续使用SubQuery来维护和扩展项目，并可能为其他layer-1链构建索引器。”</p>

[Sam Zou](https://twitter.com/zoujialiu), SubQuery的首席执行官和创始人评论过，“_SubQuery对Gitcoin GR12Hackathon的结果感到高兴。 我们的使命依赖于拥有一个能够在 Substrate/Polkadot 生态系统内创建和创新的开发者网络。 这种合作关系为全世界有志于开发未来应用程序的开发者提供了机会。 我们很高兴能够为参与挑战的赢家，进一步发展他们的想法。</p>

继这场成功的Hackathon大赛之后，SubQuery希望鼓励更多的人员了解如何使用SubQuery构建应用程序，鼓励他们学习我们的免费在线课程--“英雄课程”，或申请我们最近宣布的资助计划。

---

## 关于 SubQuery

[SubQuery](https://subquery.network/) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. This service unlocks blockchain data and transforms it to a queryable state so that it can be used in intuitive applications. It allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The upcoming SubQuery Network will decentralize and tokenize the ecosystem to allow everyone to participate in the web3 data revolution.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
