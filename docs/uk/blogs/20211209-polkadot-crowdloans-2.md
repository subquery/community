# Усередині краудіонів Polkadot (Частина 2)

![](https://miro.medium.com/max/1400/0*MqQhXJbmnfMSqf-8)

Polka dot надала своїй спільноті ще одну що захоплює гоніння для свого третього аукціону ігрових автоматів parachain. Нещодавно ми були свідками боротьби Parallel Finance та Astar за третій слот, та в підсумку Astar вдалося вийти переможцем. Сьогодні ми детальніше розглянемо те, що сталося на третьому аукціоні, занурившись у дані кожного окремого внеску.

SubQuery — це провідний сервіс індексації даних Polkadot, і протягом останнього тижня ми надсилали мільйони щоденних запитів до більшості інформаційних панелей краудіон, додатків для внеску та аналітичних вебсайтів. Такі команди, як [SubVis](https://www.subvis.io/), [Parallel Finance](https://parallel.fi/) і [DotMarketCap](https://dotmarketcap.com/), покладаються на SubQuery, щоб надавати дані в реальному часі про краудіони та інші дані в мережі безпосередньо своїм вебсайт та програми.

По-перше, почнім з деяких коротких фактів високого рівня. Як ви можете бачити нижче, в Astar було більше внесків і учасників. Важливо зазначити, що Parallel зібрала значну суму через свій проксі-фонд, тому сума вкладника вводить в оману, оскільки обліковий запис проксі приховує цю інформацію.

Обидва отримали середній внесок у розмірі 10 DOT (367,70 доларів США), але Astar змогла залучити найбільший внесок із 2 005 295 DOT (73,7 мільйона доларів США). Зрештою, під час третього аукціону загалом було внесено майже 20 мільйонів DOT (735,4 мільйона доларів США). Не дивно, що ця цифра була меншою за суму, яку було здійснено на перших аукціонах, однак багатонадійний бачити, що суми аукціону все ще мають значну вартість.

![](https://miro.medium.com/max/1920/1*cHMt10lANsqtkLYHCv6iWg.png) Як ви можете бачити на графіку нижче, кількість внесків була відносно постійною, з одночасними стрибками ставки внесків 17 листопада до понад 2000 внесків за 4-годинний період. Подібно до [битви Moonbeam та Acala](./20211124-polkadot-crowdloans.md), цей аукціон мав значно різні стилі участі, зберігаючи відносно рівну суму внесків. У Parallel Finance було на 20 000 менше внесків до їх загальної позики в порівнянні із зіркою.

![](https://miro.medium.com/max/1920/0*QLdNkyaQBBj3L9Eu)

Але тут важлива не кількість внесків, а вартість цих внесків. Як ви можете бачити на діаграмі нижче, аукціон був неймовірно напруженим, і перевага проходила між командами на аукціоні.

![](https://miro.medium.com/max/1920/0*AGGfB2oBSwoplGhv)

Як ви можете бачити на наступних графіках, слід було подивитися дві події, першою став величезний сплеск внесків у Astar 12 листопада. Це забезпечило їм стабільне лідерство до 24 листопада, коли Parallel Finance набрала майже 2,5 мільйона DOT (91 мільйон доларів США).

![](https://miro.medium.com/max/1920/0*UK4Drn6LXcjebF_V)

Перша подія відбулася 12 листопада о 2:26 ранку UTC, коли обліковий запис, пов’язаний з Binance, швидко депонував, 2 005 295 DOT (73,5 мільйона доларів США) на Astar і 1 026 763 DOT (37,9 мільйона доларів США) на Parallel Finance. Швидше за все, це Binance, що надає внески, які вона збирає від своєї власної спільноти, кожному краудіону.

Другий навіть був трохи дивнішим і мав скоріше 25 окремих подій. За 11 хвилин проксі-сервер компанії Parallel Crowdloan зробив 25 ідентичних внесків по 98 982 DOT (3 639 568,14 долара США) кожен у Parallel на загальну суму 2 474 550 DOT (89 90 долара США). Незрозуміло, чому ці депозити були зроблені через менші суми DOT, потенційно проксі-сервер Parallel Crowdloan був налаштований так, щоб кожен раз вносити максимальну суму цієї вартості.

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
