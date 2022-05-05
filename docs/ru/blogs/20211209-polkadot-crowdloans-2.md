# Внутри Polkadot Crowdloans (Часть 2)

![](https://miro.medium.com/max/1400/0*MqQhXJbmnfMSqf-8)

Polkadot предоставил своему сообществу еще одну захватывающую гонку на своем третьем аукционе слотов для парачейнов. Недавно мы были свидетелями того, как Parallel Finance и Astar боролись за третий слот, и в конце концов Astar удалось выйти победителем. Сегодня мы собираемся немного подробнее узнать о том, что произошло на третьем аукционе, углубившись в данные, лежащие в основе каждого взноса.

SubQuery — это ведущая служба индексирования данных Polkadot, и за последнюю неделю мы обрабатывали миллионы ежедневных запросов к большинству панелей управления краудзаймами, приложений для взносов и аналитических веб-сайтов. Такие команды, как [SubVis](https://www.subvis.io/), [Parallel Finance](https://parallel.fi/) и [DotMarketCap](https://dotmarketcap.com/), полагаются на SubQuery для предоставления данных о краудзаймах и других сетевых данных в режиме реального времени непосредственно своим веб-сайтам и приложениям.

Во-первых, давайте начнем с некоторых общих фактов. Как вы можете видеть ниже, у Astar было больше взносов и участников. Важно отметить, что Parallel привлекла значительную сумму через свой прокси-фонд, поэтому сумма взноса вводит в заблуждение, поскольку прокси-аккаунт скрывает эту информацию.

Оба получили средний взнос в размере 10 DOT (367,70 долларов США), но Astar смогла привлечь самый крупный разовый взнос в размере 2 005 295 DOT (73,7 миллиона долларов США). В конце концов, на третьем аукционе в общей сложности было внесено почти 20 миллионов DOT (735,4 миллиона долларов США). Неудивительно, что это число было меньше суммы, заявленной на первых аукционах, однако ожидается, что объемы аукционов по-прежнему будут значительными.

![](https://miro.medium.com/max/1920/1*cHMt10lANsqtkLYHCv6iWg.png) Как вы можете видеть на графике ниже, количество взносов было относительно постоянным, с одновременным скачком ставки взноса 17 ноября до более чем 2000 взносов за 4-часовой период. Подобно [Moonbeam и Acala ](./20211124-polkadot-crowdloans.md), на этом аукционе были существенно разные стили участия при относительно одинаковом размере взносов. У Parallel Finance было на 20 000 меньше вкладов в свой краудлоан по сравнению с Astar.

![](https://miro.medium.com/max/1920/0*QLdNkyaQBBj3L9Eu)

But it’s not the number of contributions that matters here, rather the value of those contributions. Как вы можете видеть на графике ниже, аукцион был невероятно напряженным, и лидерство переходило между командами через аукцион.

![](https://miro.medium.com/max/1920/0*AGGfB2oBSwoplGhv)

Как вы можете видеть на следующих графиках, было два события, за которыми нужно было наблюдать. Первым был огромный всплеск взносов в Astar 12 ноября. Это дало им устойчивое лидерство до 24 ноября, когда Parallel Finance получила почти 2,5 миллиона DOT (91 миллион долларов США).

![](https://miro.medium.com/max/1920/0*UK4Drn6LXcjebF_V)

For the first event occurred on the 12th of November at 2:26am UTC when an account linked to Binance deposited in quick succession, 2,005,295 DOT (US$73.5 million) to Astar and 1,026,763 DOT (US$37.9 million) to Parallel Finance. This is likely Binance providing the contributions that it collects from it’s own community to each crowdloan.

The second even was a bit weirder, and was rather 25 separate events.In a 11 minutes, Parallel’s Crowdloan proxy vehicle made 25 identical contributions of 98,982 DOT (US$3,639,568.14) each to Parallel totalling 2,474,550 DOT (US$90,989,203.50). It’s not clear why these deposits were made via smaller DOT amounts, potentially Parallel’s Crowdloan proxy vehicle was set up to contribute a maximum amount of this value each time.

![](https://miro.medium.com/max/1920/0*ZErTVoVAvSJvaIsL)

Astar and Parallel Finance led a very competitive auction, where Astar was selected as the winner at block [7927110](https://polkadot.subscan.io/block/7927110), with a lead of only 120,000 DOT. If there was another random block selected any earlier or later, the result may have been quite different.

So who is contributing? Firstly there are two massive whales that are responsible for a combined 41% of all contributions and 69.34% of all value (13,756,262 DOT). These two accounts represent Parallel Finance’s Crowdloan proxy vehicle and Binance. Kraken and Bifrost’s SALP program were also represented in the top 6 contributors. Parallel’s Crowdloan proxy vehicle was particularly prevalent in our results with over 9.3 million DOT contributed (US$344.6 million) representing over 47% of all contributions.

Unfortunately this high percentage means that comparing the average contribution size is difficult, since this proxy obscures the contribution data way too much. In the future, we might even dive deep into Parallel’s data and use this to determine exactly how many of these contributions come from whales versus individual small cap investors.

Having two auctions that have been extremely competitive suggests a healthy ecosystem, and it is encouraging to see the amount of commitment that the community has shown. Here at SubQuery we are very excited to continue working alongside the best Polkadot projects, and can’t wait to see what the future has in store for us.

---

## About SubQuery Network

SubQuery is Polkadot’s leading data provider, supporting an indexing & querying layer between Layer-1 blockchains (Polkadot) and decentralized applications. SubQuery’s data service is being used by most of the Polkadot and Kusama crowdloan and parachain auction websites live today.

SubQuery’s protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

​​​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Appendix

All USD prices are quoted at the price at the 3rd Auctions’s close = USD$36.77

All data is from the start of the Polkadot Crowdloans to the completion of the third auction on 3rd December 1.43AM UTC (block 7,957,704).

Excluded Crowdloan Sites

- [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
- [Binance Crowdloan](https://www.binance.com/en/dotslot)
- [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
- [Kraken Crowdloan](https://www.kraken.com/learn/parachain-auctions)
- [https://pos.dog/](https://pos.dog/)
- [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
