# 一窥波卡众贷

![](https://miro.medium.com/max/2400/1*JvR4YsstF6OHG3mTr_1Seg.png)

**用SubQuery分析平行链拍卖数据**

Polkadot 刚刚成功实现了一个巨大的里程碑，完成了第一轮平行链拍卖。 在过去的几周里，我们目睹了 Moonbeam 和 Acala 对第一个平行链插槽的进行了焦灼的竞拍。 在一场激烈的竞争后，第一个插槽最终花落Acala，如果你想获得更多关于获胜者究竟如何赢得竞拍的信息，请查看Dan Reecer的(来自Acala项目) 优秀的总结。

SubQuery是Polkadot上提供数据索引服务的领导者，在过去的一周中，我们每天都为大多数众贷仪表板、贡献应用和分析网站的成功处理了数百万个请求。 SubVis、Parallel Finance和DotMarketCap等团队依靠SubQuery向他们的网站和应用程序提供关于众贷和其他链上数据的实时数据。

今天，我们将通过深入分析每一笔捐款背后的数据，进一步了解在第一次拍卖中发生了什么。

![](https://miro.medium.com/max/2400/0*Pcp3KJvC5eyP2KQ3)

首先，从第一个众贷启动到第一次拍卖结束(时间跨度为13天多一点)，在整个众贷过程中，不到68,000个地址贡献了超过8750万的DOT。 在两周内, 这68,000个地址共发起超过187,000笔交易，筹集和提供了超过35.4亿美元。 无论以什么标准来衡量，这都是一个非常惊人的数字，表明了个人(和实体) 对自己喜爱的网络展现出了坚定的信念，愿意将自己的DOT锁仓长达2年的时间。 筹集的数量几乎相当于波卡整个流通供应的10%。

![](https://miro.medium.com/max/2400/0*-ovBJnjxAKfeB81Y)

在拍卖开始的时候，投资者的兴趣爆炸式增涨，在最初的几个小时里，抵押数量激增(按数量计算，直到结束前也是如此。 众贷第一天就有超过34,000份捐款，如果以2个小时为尺度，最后一次就有5618笔贡献涌入。

如下图所示, Moonbeam在整个拍卖中收到的捐款数量最多，比 Acala 多吸引了 23,984 个贡献，这些贡献来自于超过 21,333 个的独立地址。

![](https://miro.medium.com/max/2400/0*MSHfjnu7KmMvDmnY)

但最终赢家显然是Acala，这是如何发生的呢? 从出资人的数量和出资人的贡献来看，Acala的平均贡献远远超过了Moonbeam 因此，如下图所示, 按价值的总贡献来说，在整个拍卖过程中，Acala略微领先于Moonbeam。

![](https://miro.medium.com/max/2400/0*YbV-ReqSwfimUsbO)

大部分以价值评估的贡献发生在两个单独的事件中，这两个重要的事件从根本上改变了第一次拍卖的结果。

![](https://miro.medium.com/max/2400/0*jmRsZ7kxEYAWYaUq)

第一个时间发生在UTC时间11月11日下午1点25分开始的5分钟内。 一个币安众贷的关联地址共进行了7次交易，这些交易的总价值超过1900万DOT(约合7.689亿美元)。 第一笔是对Moonbeam的最大单笔交易，贡献了超过900万DOT(约合3.64亿美元)，其次是其他6笔捐款，平均间隔34秒。 这个地址也为Acala(260万DOT)、Clover(210万DOT) Astar(200万DOT) 和Manta(170万DOT) 做出了重大贡献。

第二个重要事件发生在11月13日上午10点40分的75分钟内，当时一个账户对Acala提供了多笔重大贡献。 这个账户是Acala的LCDOT地址，是Acala把其部署的所有流动质押的DOT的全部用于参与众贷。 刚开始是几笔测试交易，然后是进行了主要交易，其中包括了550万个DOT(2.225亿美元) 的最大交易。 Acala的LCDOT基金在此次拍卖中贡了3758笔。

![](https://miro.medium.com/max/2400/0*GTJviXqhPmRIIf73)

这一系列的交易最终使得Acala名列Moonbeam之前，并为Acala提供了63.11%的区块胜率。 56个小时后，在7,718,090区块随机选出了获胜区块，Acala以38,000 DOT(150万美元) 的优势领先Moonbeam。

令人惊讶的是，Acala和Moonbeam共筹集了超过6600万DOT(26.7亿美元) 的资金，随机选择的区块的获胜差额仅为总金额的0.056%。

那么谁为众贷做出了贡献？ 首先，所有人贡献的金额中位数仅为 12 DOT（485.64 美元），47%的贡献低于 10 DOT，88%的低于 100 DOT（4,047.00 美元）。 这清楚地表明了波卡拥有一个极其强大和健壮的个人贡献者社区，展示了大众对平行链拍卖的兴趣。

每个人心目中的大问题是究竟谁是人民群众的网络？ 哪个网络的小贡献者比例最大？ 对于以下对贡献规模的深入分析，我们排除了一些已知的交易所或众贷账户（在附录中列出）。 您可以看到一些网络几乎完全由小规模资金支持（SubGame Gamma 和 Darwinia）。 另一方面，大资金投资者（> 5,000 DOT）占 Moonbeam 众筹（按价值计算）的 68%、Parallel Finance 的 62% 和 Clover 的 58%。

![](https://miro.medium.com/max/2400/0*ztRnFrVfJ2aTlMiU)

言归正传，我们来到这里是为了分析Moonbeam和Acala，在这里我们可以看到，Acala比Moonbeam拥有更多的小资金支持者，其中33%的Acala的支持者提供了不足1,000 DOT(40,470美元) 的贡献，而Moonbeam只有21%。

![](https://miro.medium.com/max/2400/0*ge-2XDPgddj-J07V)

_请注意，之前关于“人民大众的网络”的分析前提是排除已知的贡献者，然后将其他贡献者总体考虑后得出的。 SubQuery只识别了一小部分，肯定会有一些我们错过的聚合器，这些聚合器可能对我们在这里共享的数据来说很重要。_

那么人们是从哪里贡献的呢? SubQuery已经确定Acala的LCDOT是一个巨大的成功，并且产生了几乎28%的贡献。 由于有超过2400万DOT(9.71亿美元) 直接捐赠给了Acala，如果没有它的支持，拍卖可能是另一个结果。

此外，数据证明了通过币安参与众贷是很受欢迎，在所有大多数参与者中有27%的贡献。 接下来我们完善关于重要贡献的数据分析， Parallel Finance占11%，Kraken占7%。 中心化交易所显然仍是首选的参与方式。

## 关于SubQuery网络

SubQuery是Polkadot领先的数据提供商，支持在第一层区块链(Polkadot) 和去中心化应用程序之间的索引和查询。 SubQuery的数据服务目前被大多数Polkadot和Kusama众贷和平行链链拍卖网站所使用。

SubQuery 的协议通过 SubQuery SDK 抽象出区块链数据特性，使开发人员能够专注于部署他们的核心产品，而无需在自定义后端技术上浪费精力。

[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)  |  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [Matrix](https://matrix.to/#/#subquery:matrix.org)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## 附录

所有美元价格均以第一次拍卖收盘价计算 = 40.47 美元

所有数据都是从波卡众筹开始采集到UTC时间11月18日上午11点57分（区块 7,756,107）完成第一次拍卖。

排除的众筹网站

-   [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
-   [Binance Crowdlife](https://www.binance.com/en/dotslot)
-   [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
-   [Kraken Crowdlow](https://www.kraken.com/learn/parachain-auctions)
-   [https://pos.dog/](https://pos.dog/)
-   [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
