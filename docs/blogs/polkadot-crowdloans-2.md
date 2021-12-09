# Inside The Polkadot Crowdloans (Part 2)

![](https://miro.medium.com/max/1400/0*MqQhXJbmnfMSqf-8)

Polkadot has provided its community with another exciting race for their third parachain slot auction. We have recently witnessed Parallel Finance and Astar battle it out for the third slot, and in the end Astar managed to emerge victorious. Today we are going to explore a little more about what happened within the third auction by diving into the data behind every single contribution.

SubQuery is Polkadot’s leading data  indexing service, and over the past week we’ve been powering millions of daily requests to the majority of the crowdloan dashboards, contribution apps, and analytics websites. Teams like  [SubVis](https://www.subvis.io/),  [Parallel Finance](https://parallel.fi/), and  [DotMarketCap](https://dotmarketcap.com/)  rely on SubQuery to provide real time data on the crowdloans and other on-chain data directly to their websites and apps.

Firstly, let’s start with some high level quick facts. As you can see below Astar had both more contributions and contributors. It’s important to note that Parallel raised a significant amount through its proxy fund, so the contributor amount is misleading because the proxy account hides this information.

Both received a median contribution of 10 DOT (US$367.70) but Astar was able to attract the largest single contribution with 2,005,295 DOT (US$73.7 million). In the end a total of almost 20 million DOT (US$735.4 million) was contributed across both two during the third auction. Unsurprisingly, this number was less than the amount committed in the first auctions, however it is promising to see the auction amounts still being of significant value.

![](https://miro.medium.com/max/1920/1*cHMt10lANsqtkLYHCv6iWg.png)
As you can see in the graph below, the number of contributions were relatively constant, with simultaneous jumps in the contribution rate on the 17th of November to over 2,000 contributions in a 4 hour period. Similarly to the  [Moonbeam and Acala battle](https://subquery.medium.com/inside-the-polkadot-crowdloans-986025f6b93a), this auction had significantly different styles of participation while maintaining a relatively equal amount of contributions. Parallel Finance had 20,000 less contributions to their crowdloan when compared to Astar.

![](https://miro.medium.com/max/1920/0*QLdNkyaQBBj3L9Eu)

But it’s not the number of contributions that matters here, rather the value of those contributions. As you can see in the chart below the auction was incredibly tight, with the lead passing between teams through the auction.

![](https://miro.medium.com/max/1920/0*AGGfB2oBSwoplGhv)

As you can see in the following graphs there were two events to watch, the first was a huge spike in contributions to Astar on the 12th of November. This gave them a steady lead until the 24th of November, where Parallel Finance gained almost 2.5 million DOT (US$91 million).

![](https://miro.medium.com/max/1920/0*UK4Drn6LXcjebF_V)

For the first event occurred on the 12th of November at 2:26am UTC when an account linked to Binance deposited in quick succession, 2,005,295 DOT (US$73.5 million) to Astar and 1,026,763 DOT (US$37.9 million) to Parallel Finance. This is likely Binance providing the contributions that it collects from it’s own community to each crowdloan.

The second even was a bit weirder, and was rather 25 separate events.In a 11 minutes, Parallel’s Crowdloan proxy vehicle made 25 identical contributions of 98,982 DOT (US$3,639,568.14) each to Parallel totalling 2,474,550 DOT (US$90,989,203.50). It’s not clear why these deposits were made via smaller DOT amounts, potentially Parallel’s Crowdloan proxy vehicle was set up to contribute a maximum amount of this value each time.

![](https://miro.medium.com/max/1920/0*ZErTVoVAvSJvaIsL)

Astar and Parallel Finance led a very competitive auction, where Astar was selected as the winner at block  [7927110](https://polkadot.subscan.io/block/7927110), with a lead of only 120,000 DOT. If there was another random block selected any earlier or later, the result may have been quite different.

So who is contributing? Firstly there are two massive whales that are responsible for a combined 41% of all contributions and 69.34% of all value (13,756,262 DOT). These two accounts represent Parallel Finance’s Crowdloan proxy vehicle and Binance. Kraken and Bifrost’s SALP program were also represented in the top 6 contributors. Parallel’s Crowdloan proxy vehicle was particularly prevalent in our results with over 9.3 million DOT contributed (US$344.6 million) representing over 47% of all contributions.

Unfortunately this high percentage means that comparing the average contribution size is difficult, since this proxy obscures the contribution data way too much. In the future, we might even dive deep into Parallel’s data and use this to determine exactly how many of these contributions come from whales versus individual small cap investors.

Having two auctions that have been extremely competitive suggests a healthy ecosystem, and it is encouraging to see the amount of commitment that the community has shown. Here at SubQuery we are very excited to continue working alongside the best Polkadot projects, and can’t wait to see what the future has in store for us.

---

## About SubQuery Network

SubQuery is Polkadot’s leading data provider, supporting an indexing & querying layer between Layer-1 blockchains (Polkadot) and decentralized applications. SubQuery’s data service is being used by most of the Polkadot and Kusama crowdloan and parachain auction websites live today.

SubQuery’s protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

​​​​[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)  |  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Appendix

All USD prices are quoted at the price at the 3rd Auctions’s close = USD$36.77

All data is from the start of the Polkadot Crowdloans to the completion of the third auction on 3rd December 1.43AM UTC (block 7,957,704).

Excluded Crowdloan Sites

-   [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
-   [Binance Crowdloan](https://www.binance.com/en/dotslot)
-   [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
-   [Kraken Crowdloan](https://www.kraken.com/learn/parachain-auctions)
-   [https://pos.dog/](https://pos.dog/)
-   [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
