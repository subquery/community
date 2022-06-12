# Dans les Crowdloans de Polkadot (Partie 2)

![](https://miro.medium.com/max/1400/0*MqQhXJbmnfMSqf-8)

Polkadot a offert à sa communauté une autre course passionnante pour sa troisième vente aux enchères de machines à sous parachain. Nous avons récemment vu Parallel Finance et Astar s'affronter pour la troisième place, et c'est finalement Astar qui est sorti vainqueur. Aujourd'hui, nous allons explorer un peu plus ce qui s'est passé lors de la troisième enchère en nous plongeant dans les données qui se cachent derrière chaque contribution.

SubQuery est le principal service d'indexation des données de Polkadot. La semaine dernière, nous avons alimenté des millions de requêtes quotidiennes vers la majorité des tableaux de bord de crowdlending, des applications de contribution et des sites Web d'analyse. Des équipes comme [SubVis](https://www.subvis.io/), [Parallel Finance](https://parallel.fi/), et [DotMarketCap](https://dotmarketcap.com/) s'appuient sur SubQuery pour fournir des données en temps réel sur les crowdloans et d'autres données on-chain directement sur leurs sites web et applications.

Tout d'abord, commençons par quelques faits rapides de haut niveau. Comme vous pouvez le voir ci-dessous, Astar a eu à la fois plus de contributions et de contributeurs. Il est important de noter que Parallel a collecté une somme importante par le biais de son fonds de procuration. Le montant des contributions est donc trompeur car le compte de procuration cache cette information.

Tous deux ont reçu une contribution médiane de 10 DOT (367,70 USD), mais Astar a pu attirer la plus grande contribution unique avec 2 005 295 DOT (73,7 millions USD). In the end a total of almost 20 million DOT (US$735.4 million) was contributed across both two during the third auction. Sans surprise, ce nombre est inférieur au montant engagé lors des premières enchères, mais il est prometteur de voir que les montants des enchères ont toujours une valeur significative.

![](https://miro.medium.com/max/1920/1*cHMt10lANsqtkLYHCv6iWg.png) Comme vous pouvez le voir dans le graphique ci-dessous, le nombre de contributions a été relativement constant, avec des sauts simultanés dans le taux de contribution le 17 novembre à plus de 2.000 contributions dans une période de 4 heures. De même que la [Bataille deoonbeam et Acala](./20211124-polkadot-crowdloans.md), cette vente aux enchères a connu des styles de participation sensiblement différents tout en maintenant un montant de contributions relativement égal. Parallel Finance a eu 20 000 contributions de moins à son crowdloan par rapport à Astar.

![](https://miro.medium.com/max/1920/0*QLdNkyaQBBj3L9Eu)

Mais ce n'est pas le nombre de contributions qui importe ici, mais plutôt la valeur de ces contributions. Comme vous pouvez le voir dans le graphique ci-dessous, les enchères ont été incroyablement serrées, l'avance passant d'une équipe à l'autre tout au long des enchères.

![](https://miro.medium.com/max/1920/0*AGGfB2oBSwoplGhv)

Comme vous pouvez le voir dans les graphiques suivants, deux événements sont à surveiller, le premier étant un énorme pic de contributions à Astar le 12 novembre. Ils ont ainsi conservé une avance constante jusqu'au 24 novembre, date à laquelle Parallel Finance a gagné près de 2,5 millions de DOT (91 millions de dollars).

![](https://miro.medium.com/max/1920/0*UK4Drn6LXcjebF_V)

Le premier événement s'est produit le 12 novembre à 2 h 26 UTC lorsqu'un compte lié à Binance a déposé successivement 2 005 295 DOT (73,5 millions de dollars) à Astar et 1 026 763 DOT (37,9 millions de dollars) à Parallel Finance. Il est probable que Binance fournisse les contributions qu'elle collecte auprès de sa propre communauté à chaque crowdloan.

En l'espace de 11 minutes, le véhicule proxy Crowdloan de Parallel a effectué 25 contributions identiques de 98 982 DOT (3 639 568,14 USD) chacune, pour un total de 2 474 550 DOT (90 989 203,50 USD). La raison pour laquelle ces dépôts ont été effectués via des montants DOT plus petits n'est pas claire. Il est possible que le véhicule proxy Crowdloan de Parallel ait été configuré pour contribuer à chaque fois à un montant maximum de cette valeur.

![](https://miro.medium.com/max/1920/0*ZErTVoVAvSJvaIsL)

Astar et Parallel Finance ont mené une enchère très compétitive, où Astar a été choisi comme gagnant au bloc [7927110](https://polkadot.subscan.io/block/7927110), avec une avance de seulement 120 000 DOT. Si un autre bloc aléatoire avait été sélectionné plus tôt ou plus tard, le résultat aurait pu être très différent.

Alors, qui contribue ? Tout d'abord, il y a deux baleines massives qui sont responsables d'un total de 41% de toutes les contributions et de 69,34% de toute la valeur (13 756 262 DOT). Ces deux comptes représentent le véhicule proxy Crowdloan de Parallel Finance et Binance. Kraken et le programme SALP de Bifrost étaient également représentés dans le top 6 des contributeurs. Le véhicule de procuration Crowdloan de Parallel a été particulièrement prépondérant dans nos résultats avec plus de 9,3 millions de DOT contribués (344,6 millions de dollars US), soit plus de 47% de toutes les contributions.

Malheureusement, ce pourcentage élevé signifie qu'il est difficile de comparer la taille moyenne des contributions, car cette approximation masque beaucoup trop les données relatives aux contributions. À l'avenir, nous pourrions même plonger dans les données de Parallel et les utiliser pour déterminer exactement combien de ces contributions proviennent de baleines par rapport aux investisseurs individuels de petite capitalisation.

Le fait que deux ventes aux enchères aient été extrêmement compétitives est le signe d'un écosystème sain, et il est encourageant de voir le degré d'engagement dont la communauté a fait preuve. Chez SubQuery, nous sommes très enthousiastes à l'idée de continuer à travailler aux côtés des meilleurs projets de Polkadot, et nous sommes impatients de voir ce que l'avenir nous réserve.

---

## À propos du réseau SubQuery

SubQuery est le principal fournisseur de données de Polkadot, qui prend en charge une couche d'indexation & et d'interrogation entre les blockchains de la couche 1 (Polkadot) et les applications décentralisées. Le service de données de SubQuery est utilisé par la plupart des sites Web de crowdloan et de vente aux enchères parachain de Polkadot et Kusama qui sont en activité aujourd'hui.

Le protocole de SubQuery fait abstraction des particularités des données de la blockchain grâce au SDK de SubQuery, ce qui permet aux développeurs de se concentrer sur le déploiement de leur produit principal sans gaspiller inutilement leurs efforts sur des technologies dorsales personnalisées.

​​​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Annexe

Tous les prix en USD sont indiqués au prix de clôture de la 3e vente aux enchères = 36,77 USD$

Toutes les données datent du début de l'opération Polkadot Crowdloans jusqu'à la fin de la troisième enchère le 3 décembre à 1h43 UTC (bloc 7,957,704).

Sites de Crowdloan exclus

- [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
- [Binance Crowdloan](https://www.binance.com/en/dotslot)
- [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
- [Kraken Crowdloan](https://www.kraken.com/learn/parachain-auctions)
- [https://pos.dog/](https://pos.dog/)
- [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
