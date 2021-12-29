# Zusammenfassung November 2021

![](https://miro.medium.com/max/1400/1*qzKzZnWY2ao3tiffwwugXQ.png) **_Diesen Monat dreht sich alles um die Hinrichtung_**

Herzlich Willkommen zum neuesten monatlichen Update von SubQuery, das besonders voll von all den aufregenden Dingen ist, die in unserer Community passieren.

# SubQuery-Netzwerk

## SubQuery-Start auf Acala

![](https://miro.medium.com/max/600/0*SJ1TWt1sGwUWqvuI.gif) Bei unserem Community-Call haben wir schließlich angekündigt, dass SubQuery und der SQT-Token die erste externe Anwendung und das erste Token sein werden, die mit Acala gestartet werden.

Wir haben eine Vielzahl von Optionen in Betracht gezogen, bevor wir uns entschieden haben, die bestehende Partnerschaft mit Acala durch die Einführung des führenden DeFi-Protokolls basierend auf Polkadot zu vertiefen. Die drei Hauptgründe für diese Entscheidung, mit Acala auf den Markt zu kommen, waren der Zugang zur Community, die fachliche/technische Exzellenz und unsere bestehende solide Beziehung.

James hat Bette Chen von Acala für ein umfassendes Interview zu dieser Entscheidung und Partnerschaft getroffen, einschließlich der Einzelheiten, warum Acala und SubQuery ein himmlisches Paar sind.

[Lesen Sie hier mehr über diese Ankündigung](https://blog.subquery.network/blogs/20211125-subquery-network-acala.html)

## Bedeutende Entwicklung im SubQuery-Netzwerk

Auch wenn wir fleißig am SubQuery-Netzwerk arbeiten und immer noch auf den Start unseres Testnetzwerks im ersten Quartal 2022 zusteuern. Wir haben große Fortschritte bei unseren Smart Contracts und der Verfeinerung unseres Token-Wirtschaftsmodells gemacht. Erwarten Sie, dass wir bald viel mehr darüber teilen werden.

# Kernproduktentwicklung

## Skalierung unseres Hosted Service

SubQuery Projects has been a recipient of some explosive growth over the past month as  [thousands of academy participants](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)  have created even more projects in our hosted service ([project.subquery.network](https://project.subquery.network/)) in the space of a few weeks.

We’ve crossed a milestone of over 2,000 projects deployed to our hosted service, and as a result, it’s been a priority to scale our hosted service. We now offer our enterprise customers dedicated resources to improve performance and reliability.

If you would like to upgrade your SubQuery project to receive dedicated resourcing, contact us at  [sales@subquery.network](mailto:sales@subquery.network).

## Supporting External Chain Type Files in our Project Manifest

In November we launched  [**version 0.2.0**](https://doc.subquery.network/create/manifest/)  of our project manifest file (`project.yaml`). This new version provides developers with various improvements that have been requested by customers.

Most importantly, you can now reference a chain type definition file that has all the custom types included when you’re indexing a custom substrate chain. This quickly allows you to connect a new SubQuery project to any substrate-based chain, including all of Kusama’s parachains.

[You can read more about this new feature here](https://blog.subquery.network/blogs/20211105-november-technical-update.html#support-for-external-chain-type-files-in-project-manifest).

## Moonriver EVM Support

![](https://miro.medium.com/max/600/0*B27QVtvcR6nXA9ff.gif)

As previously announced we have implemented support for the Moonbeam and Moonriver networks in SubQuery. In November we followed up with all the developer resources that you need to get started.  [You can read the instructions here](https://blog.subquery.network/blogs/20211105-november-technical-update.html#moonbeam-evm-support).

Additionally, Scott was able to present this entire workflow to the  [Moonbuilders workshop](https://www.crowdcast.io/e/moonbuilders-ws/10)  for everyone to watch. Perfect timing for the lead up to the Gitcoin Grants that we are sponsoring (more on that below).

# Community

## Gitcoin Hackathon

Hot on the heels of the overwhelming success of the SubQuery Academy’s  _Hero Course_, we were proud to announce that we would be providing our first hackathon opportunity for all developers via  [Gitcoin Grants Round 12](https://gitcoin.co/hackathon/gr12/?org=subquery)  starting on December 1st.

SubQuery has proposed 5 bounties with a total prize pool of up to $34,000:

-   [Create a unified block explorer that combines Substrate and EVM insights from Moonbeam and Astar into one easy to use application](https://gitcoin.co/issue/subquery/grants/1)  — US$12,000 [Sponsored by Moonbeam and Astar]
-   [Work with SubQuery and the DeFi hub at Karura/Acala to build a dashboard that’s inspired by Zapper.fi or defisaver.com](https://gitcoin.co/issue/subquery/grants/2)  — US$8,000 [Sponsored by Acala]
-   [Create a staking dashboard that shows the best staking opportunities across Polkadot and its various parachains](https://gitcoin.co/issue/subquery/grants/3)  — US$3,000
-   [Build a marketplace explorer for all RMRK protocol based NFTs](https://gitcoin.co/issue/subquery/grants/4)  — US$2,000
-   [Extend the @subql/node service to index data from another layer 1 chain](https://gitcoin.co/issue/subquery/grants/5)  — US$12,000

[You can read more about these bounties here.](https://blog.subquery.network/blogs/20211120-gitcoin12-hackathon.html)

## Analysis into the Polkadot Crowdloans

SubQuery is Polkadot’s leading data indexing service, and over the past week, we’ve been powering millions of daily requests to the majority of the crowdloan dashboards, contribution apps, and analytics websites. Teams like  [**SubVis**](https://www.subvis.io/),  [**Parallel Finance**](https://parallel.fi/), and  [**DotMarketCap**](https://dotmarketcap.com/)  rely on SubQuery to provide real-time data on the crowdloans and other on-chain data directly to their websites and apps.

![](https://miro.medium.com/max/60/0*HfsoOwpat76ip6Jg?q=20)

![](https://miro.medium.com/max/700/0*HfsoOwpat76ip6Jg)

We recently took a deep dive into the Polkadot crowdloans (specifically the title fight between Acala and Moonbeam).  [You should read it here if you haven’t already](https://blog.subquery.network/blogs/20211124-polkadot-crowdloans.html).

# Other things you might have missed

-   We’re working closely with the new team at  [Web3Go](https://www.web3go.xyz/)  to  [provide data anaysis tools to the SubQuery ecosystem.](https://blog.subquery.network/customer_announcements/20211110-web3go.html)
-   [Listen to Sam and James on Brave New Coin’s podcast](https://bravenewcoin.com/insights/podcasts/subquery-connecting-the-dots-on-polkadot).
-   James talked to Acala’s Brett Kolodny to talk about how  [Acala use SubQuery in their stack](https://www.youtube.com/watch?v=Wbxwj8K67Lw).
-   Siqi, our China representative,  [talked to Acala Network and Polkaworld about the latest in web3](https://www.huoxing24.com/live/24313016).
-   We released modules  [1](https://doc.subquery.network/academy/herocourse/module1/)  to  [4](https://doc.subquery.network/academy/herocourse/module4/)  of our  [SubQuery Hero Course](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   James also talked to Jacky to explore Litentry’s plans  [for a future DID protocol](https://www.youtube.com/watch?v=Rqlpo9QIVyk).

As always, please  [join our social channels](https://linktr.ee/subquerynetwork)  (especially our  [Discord](https://discord.com/invite/subquery)) to stay updated on our latest news and announcements.

James, Sam, and the SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)  |  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
