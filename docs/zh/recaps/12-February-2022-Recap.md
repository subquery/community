# 2022年2月回顾

![](https://miro.medium.com/max/1400/1*T3DLiAKSIy-AjRia_JJjow.png
)

2月份已经过去，SubQuery团队一直在为TGE做各方面的准备，同时也在为包括Polkadot领先团队在内的所有现有客户提供服务。

我们有很多激动人心的工作正在进行，迫不及待地想在未来几周和几个月与大家分享！

## 社区

本月，我们的Twitter关注者突破了30000人，我们的Discord 已经扩大到超过15000位活跃的社区成员，成员们联系紧密，互相帮助。 仅仅在web3中构建一个工具或应用程序是不够的，更是需要构建一个自我维持的社区，在SubQuery上我们正在为此做出努力！

### SubQuery宣布第一批SubQuery资助计划获得者

四个团队被选为有史以来第一批获得SubQuery资助计划的团队。 这些团队是 [Alphabit](https://www.polkadata.xyz/), [Zoombies](https://zoombies.world/), [Dapplooker](https://dapplooker.com/) 和 [Dotsama](http://dotsama.ai/)。 SubQuery资助计划的愿景是为区块链开发者、社区成员和更广泛的生态系统参与者提供关键机会，以便他们能够创建下一代去中心化的应用程序。

![](https://miro.medi.com/max/1400/1*tBnWK4svpGbGuP3mCXyGDG.png)

Alphabit致力于通过提供跟踪和分析基金公司，大型交易商或“whales”巨型交易商的投资组合情况和收益可预见性，努力赋予独立投资者权力。 _"SubQuery提供的业务建议和技术支持完全超出了我们对作为一家小型分析初创公司可能获得的支持的预期。" --- Michael Anderson，Alphabit商业发展与战略合作_

![](https://miro.medium.com/max/1400/1*TpHBDhA7WqNGTOxz9LpifQ.png
)

Zoombies提交了一份提案，希望利用SubQuery加快实现他们的目标，即深入增加正在增长的，可收集play-to-earn通证的价值。 他们的项目可以访问游戏中对于已经过去的事件的完整历史记录，用于创造有意义的视图，丰富玩家体验。 _"SubQuery Grants计划是一个非常明确的逐步奖励驱动的过程。" --- Ryan Price，Zoombies首席执行官_

![](https://miro.medi.com/max/1400/1*4rPD0g-pC3MOU5vAtS4w.png)

Dapplooker旨在为Polkadot项目提供漂亮且易于构建的分析工具，如探索者、图表和仪表板。 这些有价值的指标将建立在SubQuery项目之上，以获取所需的数据，并以直观和美观的格式呈现给受众。

![](https://miro.medi.com/max/1400/1*kC8QYVvlUZwUfgXTBFQbg.gg.png)

Dotsama团队还决心为Polkadot/Kusama生态系统中的普通投资者带来丰富的见解，目标是成为一家一站式分析商店，提供工具，识别早期投资趋势和机会。 _作为SubQuery资助计划的一部分，我们不仅希望获得技术和战略指导，我们还希望成为这个社区的一部分，帮助加速这一运动。” --- Sudarshan Acharya, 创始人 (Dotsama)_

除了授予我们第一批团队的资助外，SubQuery网站上还提供了与Polkadot领先的平行链团队合作的持续技术资助，如Moonbeam、Acala、Astar和Bifrost。

## SubQuery网络

### SubQuery发布了最新的白皮书

SubQuery白皮书是一份概述了我们的去中心化的SubQuery网络及SQT通证的战略框架。 自2021年6月发布以来，我们经历了客户基础和社区的显著增长，并在建立SubQuery网络方面取得了巨大进展。 从中我们受到了启发去改进和创新，并在我们最新版本的白皮书中展现出来。

更新后的白皮书保持了SubQuery的理念，即未来的数据服务必须是多链，简单和灵活的。 新版本详细介绍了SubQuery网络如何将这些考虑因素考虑到通证经济性设计中，同时也让超级用户能够运行企业级服务。

白皮书中有大量与SubQuery支付模式创新相关的新信息，为所有参与者提供了使用SQT通证进行交易的各种灵活方式。

![](https://miro.medium.com/max/1400/1*EhLefs3-lb47y2LC4Z6jWA.png)

[阅读更多](../blogs/20220216-白纸更新.md)

## 核心产品开发

### 动态数据源

SubQuery的EVM客户数量的快速增长有一个显著的改进。 SubQuery是唯一一个允许在单个位置对Polkadot平行链中的Substrate和EVM数据进行索引的数据索引工具。

在某些情况下，当SubQuery项目启动时，你不知道数据源的参数，例如在DEX中，你不知道在编写SubQuery项目时将启用哪些新的交易。 SubQuery对动态数据源的支持允许开发人员使用模板从新的智能合约中动态创建新的数据源，从而使新合约的索引自动化。

[阅读更多](https://university.subquery.network/build/dynamicdatasources.html)

## 客户公告

### SubQuery数据为Nova Wallet提供动力--支持Polkadot&Kusama生态系统的下一代移动钱包

![](https://miro.medium.com/max/1400/1*NkYmEpYLpZYFRkANrvpwPw.png)

包括Nova在内的许多客户都依赖SubQuery为其生产应用程序提供关键任务数据。 这些是Polkadot社区每天使用的巨大应用程序，必须随时在线。 Nova知道通过托管服务中的企业级功能，他们可以信任SubQuery为他们的应用程序提供可靠且可扩展的服务。 Nova是SubQuery智能路由的关键用户，它可以动态地将用户的请求路由到最近的SubQuery集群，从而比市场上的任何其他选项都具有更高的可靠性和优异的性能。

[阅读更多](../customer_announcements/2022010-nova-wallet.md)

### SubQuery帮助增强Parami协议的Web 3广告技术

Parami Protocol正在为以用户为中心的标记化广告经济开发一种创新的新技术：Ad 3.0.

> _“Parami的愿景是为Web3建立一个以用户为中心的广告经济，为了实现这一目标，我们将SubQuery作为我们值得信赖的数据合作伙伴。 SubQuery通过提供一部分设定好的命令和查询责任分离（CQRS）模式来更新核心数据库，从而为我们的服务提供主干。 Parami利用SubQuery卓越的索引速度跟踪NFT fragments的价格，并在很短的时间建立链上数据的二级索引。 我们期待着利用SubQuery的创新技术，为Web 3.0建立AD 3.0。”_

Dorian,Parami Protocol联合创始人

[阅读更多](../customer_announcements/20220222-parami.md)

## 其他你可能错误的事情：

- 我们在我们的 [Discord 服务器上有 [Talisman](https://talisman.xyz/) 和波兰Q&A 的 AMA](https://discord.com/channels/796198414798028831/796198414798028834)
- 观看我们2月份在Crowdcast上的community call录音
- 在我们的SubQuery资助计划中，Phala获得了新的资助

提醒

加入我们的Discord和我们的社交渠道，随时了解我们的最新新闻和公告。

SubQuery 团队

[Linktree](https://linktr.ee/subquerynetwork) | [网站](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
