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

第二个重要事件发生在11月13日上午10点40分的75分钟内，当时一个账户对Acala提供了多笔重大贡献。 这个账户是Acala的LCDOT地址，是Acala把其部署的所有流动质押的DOT的全部用于参与众贷。 刚开始是几笔测试交易，然后是进行了主要交易，其中包括了550万个DOT(2.225亿美元) 的最大交易。 In the end Acala’s LCDOT fund made 3758 contributions over the auction.

![](https://miro.medium.com/max/2400/0*GTJviXqhPmRIIf73)

These series of transactions were ultimately able to push Acala above Moonbeam, and provide Acala with a winning percentage of 63.11% of the blocks. When the random winning block was selected ~56 hours later at block 7,718,090, Acala was ahead of Moonbeam by just ~38,000 DOT (USD$1.5 million).

One of the amazing things about these auctions, is that even after raising over 66 million DOT (USD$2.67 billion) between Acala and Moonbeam, the winning margin at the randomly selected block was just 0.056% of the total amount.

So who was contributing to the crowdloans? Firstly, the median amount contributed by all was just 12 DOT (USD$485.64), 47% of all contributions were less than 10 DOT and 88% were less than 100 DOT (US$4,047.00). This clearly demonstrates an extremely strong and robust community of individual contributors, testament to the retail interest in the parachain auctions.

The big question on everyone’s mind is who’s the people’s network? Which network has the largest proportion of small contributors? For the following insights into contribution size breakdown we have excluded some known exchange or crowdloan accounts (list in the appendix). You can see that some networks are almost completely small cap funded (SubGame Gamma and Darwinia). On the other hand, large cap investors (>5,000 DOT) make up 68% of Moonbeam’s crowdloan (by value), 62% of Parallel Finance’s, and 58% of Clover’s.

![](https://miro.medium.com/max/2400/0*ztRnFrVfJ2aTlMiU)

Obviously we are here to look at Moonbeam and Acala, and here we can see that Acala has more small cap funding than Moonbeam, with 33% of Acala’s contributions being less than 1,000 DOT (USD$40,470) compared to 21% of Moonbeam’s.

![](https://miro.medium.com/max/2400/0*ge-2XDPgddj-J07V)

_Note, the previous insights around “the people’s network” have been taken after excluding known contributors that aggregate other contributions into one. SubQuery has only identified a small number, there will certainly be aggregators that we have missed that may be material to the data shared here_

So where are people contributing from? SubQuery has identified that  [Acala’s LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)  was a runaway success, and resulted in almost 28% of all contributions. With over 24 million DOT (US$971 million) contributed directly to Acala, this auction would likely have gone another way without it.

Additionally,  [Binance](https://www.binance.com/en/dotslot)  proved to be a popular participation pathway with 27% of contributions across all most participants. We round out the significance contribution methods with  [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)  at 11% of contributions, and  [Kraken](https://www.kraken.com/learn/parachain-auctions)  at 7%. Centralised exchanges are still clearly a preferred method of participation.

## About SubQuery Network

SubQuery is Polkadot’s leading data provider, supporting an indexing & querying layer between Layer-1 blockchains (Polkadot) and decentralized applications. SubQuery’s data service is being used by most of the Polkadot and Kusama crowdloan and parachain auction websites live today.

SubQuery’s protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

​​​​[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)  |  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [Matrix](https://matrix.to/#/#subquery:matrix.org)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Appendix

All USD prices are quoted at the price at the 1st Auctions’s close = USD$40.47

All data is from the start of the Polkadot Crowdloans to the completion of the first auction on 18th November 11.57AM UTC (block 7,756,107)

Excluded Crowdloan Sites

-   [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
-   [Binance Crowdloan](https://www.binance.com/en/dotslot)
-   [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
-   [Kraken Crowdloan](https://www.kraken.com/learn/parachain-auctions)
-   [https://pos.dog/](https://pos.dog/)
-   [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
