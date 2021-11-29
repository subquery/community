# Dans les coulisses des Crowdloans Polkadot

![](https://miro.medium.com/max/2400/1*JvR4YsstF6OHG3mTr_1Seg.png)

**SubQuery creuse dans les données des enchères de Parachain**

Une étape importante vient d'être franchie pour Polkadot, l'achèvement du premier tour des enchères de parachain. Au cours des dernières semaines, nous avons assisté à une lutte acharnée pour la couronne Polkadot, le premier emplacement parachain, entre Moonbeam et Acala. Après une course serrée, le gagnant de l'enchère s'est révélé être Acala. Si vous voulez en savoir plus sur la façon dont les gagnants sont sélectionnés dans cette enchère moderne au chandelier, jetez un coup d'œil à l'excellent résumé de [Dan Reecer (d'Acala)](https://twitter.com/danreecer_/status/1364646604024786949).

SubQuery est le premier service d'indexation des données de Polkadot, et au cours de la semaine dernière, nous avons alimenté des millions de demandes quotidiennes à la majorité des tableaux de bord du crowdloan, des applications de contribution et des sites Web d'analyse. Des équipes comme  [SubVis](https://www.subvis.io/),  [Parallel Finance](https://parallel.fi/), et  [DotMarketCap](https://dotmarketcap.com/)  comptent sur SubQuery pour fournir des données en temps réel sur les crowdloans et d'autres données sur la chaîne directement sur leurs sites Web et leurs applications.

Aujourd'hui, nous allons explorer un peu plus ce qui s'est passé lors de la première vente aux enchères en plongeant dans les données derrière chaque contribution.

![](https://miro.medium.com/max/2400/0*Pcp3KJvC5eyP2KQ3)

Tout d'abord, entre le lancement du premier crowdloan et la clôture de la première vente aux enchères (un peu plus de 13 jours), plus de 87,5 millions de DOT ont été versés par un peu moins de 68 000 adresses pour l'ensemble des crowdloans. Essentiellement, 68 000 adresses ont réuni plus de 187 000 contributions pour recueillir et engager plus de 3,54 milliards de dollars en 2 semaines. C'est un montant phénoménal par rapport à n'importe quel standard, et une énorme indication de l'engagement des individus (et des entités) à verrouiller leur DOT pendant 2 ans pour soutenir leurs réseaux favoris. Le capital engagé équivaut à près de 10 % de l'ensemble de l'offre en circulation de Polkadot.

![](https://miro.medium.com/max/2400/0*-ovBJnjxAKfeB81Y)

L'intérêt de l'investisseur a vraiment explosé au début des enchères, avec une poussée de contributions (par compte) pour les premières heures et aussi vers la fin avant la fermeture. Le premier jour des crowdloans a vu plus de 34 000 contributions et la ruée de dernière minute est revenue avec 5 618 contributions en l'espace de deux heures.

Comme vous pouvez le voir dans le graphique ci-dessous, Moonbeam a eu de loin le plus grand nombre de contributions au cours des enchères, attirant près de 23 984 contributions provenant de plus de 21 333 adresses uniques de plus qu'Acala.

![](https://miro.medium.com/max/2400/0*MSHfjnu7KmMvDmnY)

Acala est évidemment sorti vainqueur, alors comment cela s'est-il produit ? Le nombre de contributeurs et leurs contributions cachent le fait que les contributeurs d’Acala ont en moyenne contribué bien plus que Moonbeam. En conséquence, les contributions totales en termes de valeur ressemblaient au graphique ci-dessous, où Acala était légèrement en avance sur Moonbeam tout au long de l'enchère.

![](https://miro.medium.com/max/2400/0*YbV-ReqSwfimUsbO)

La majorité des contributions en valeur a eu lieu lors de deux événements individuels, ces deux événements significatifs ont essentiellement changé le résultat de la première enchère.

![](https://miro.medium.com/max/2400/0*jmRsZ7kxEYAWYaUq)

Le premier s'est produit en l'espace de 5 minutes à partir de 13h25 UTC le 11 Novembre. Une seule adresse que nous avons reliée à l'adresse [Binance's Crowdloan](https://www.binance.com/en/dotslot) a effectué une série de 7 transactions d'une valeur totale de plus de 19 millions de DOT (768,9 millions de dollars US). La première a été la plus importante contribution à Moonbeam avec plus de 9 millions de DOT (364 millions de dollars), suivie de 6 autres contributions espacées en moyenne de 34 secondes. Cette adresse a également apporté des contributions significatives à Acala (2,6 millions DOT), Clover (2,1 millions DOT), Astar (2 millions DOT), et Manta (1,7 million DOT).

Le deuxième événement important s'est produit en l'espace de 75 minutes à partir de 10h40 le 13 novembre, lorsqu'un seul compte a effectué plusieurs contributions importantes à Acala. Ce compte représente l'adresse  [LCDOT d'Acala](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)  et représente le déploiement par Acala de tout son DOT liquide staké à son crowdloan. Il y a d'abord eu quelques transactions tests, puis des transactions majeures dont la plus importante de 5,5 millions de DOT (222,5 millions de dollars US). En fin de compte, le fonds LCDOT d’Acala a versé 3 758 contributions sur la vente aux enchères.

![](https://miro.medium.com/max/2400/0*GTJviXqhPmRIIf73)

Cette série de transactions a finalement permis à Acala de dépasser Moonbeam et de remporter 63,11 % des blocs. Lorsque le bloc gagnant aléatoire a été sélectionné ~56 heures plus tard au bloc 7 718 090, Acala devançait Moonbeam de seulement ~38 000 DOT (1,5 million USD).

L'un des aspects étonnants de ces enchères est que, même après avoir collecté plus de 66 millions de DOT (2,67 milliards USD) entre Acala et Moonbeam, la marge gagnante du bloc sélectionné au hasard n'était que de 0,056 % du montant total.

Alors qui a contribué aux crowdloans ? Tout d'abord, le montant médian des contributions de tous n'était que de 12 DOT (485,64 USD), 47% de toutes les contributions étaient inférieures à 10 DOT et 88% étaient inférieures à 100 DOT (4 047,00 USD). Cela démontre clairement l'existence d'une communauté extrêmement forte et robuste de contributeurs individuels, ce qui témoigne de l'intérêt des ventes pour les enchères de parachain.

La grande question que l'on se pose est de savoir qui est le réseau du peuple? Quel réseau a la plus grande proportion de petits contributeurs ? Afin de mieux comprendre la répartition de la taille des contributions, nous avons exclu certains comptes d'exchange ou de crowdloan connus (liste en annexe). Vous pouvez voir que certains réseaux sont presque entièrement financés par des petites capitalisations (SubGame Gamma et Darwinia). D'autre part, les investisseurs à forte capitalisation (>5 000 DOT) représentent 68 % du crowdloan de Moonbeam (en valeur), 62 % de celui de Parallel Finance et 58 % de celui de Clover.

![](https://miro.medium.com/max/2400/0*ztRnFrVfJ2aTlMiU)

De toute évidence, nous sommes ici pour examiner Moonbeam et Acala, et ici nous pouvons voir qu'Acala a plus de financement à petite capitalisation que Moonbeam, avec 33% des contributions d'Acala étant inférieures à 1.000 DOT (40.470 USD$) contre 21% de celles de Moonbeam.

![](https://miro.medium.com/max/2400/0*ge-2XDPgddj-J07V)

_Il convient de noter que les observations précédentes concernant le "réseau du peuple" ont été faites après avoir exclu les contributeurs connus qui regroupent d'autres contributions en une seule. SubQuery n'a identifié qu'un petit nombre, il y aura certainement des agrégateurs que nous avons manqués qui peuvent être importants pour les données partagées ici_

D'où les gens contribuent-ils ? SubQuery a identifié que le LCDOT  [d'Acala](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)  a été un succès fulgurant et a entraîné près de 28 % de toutes les contributions. Avec plus de 24 millions de DOT (971 millions de dollars US) versés directement à Acala, cette vente aux enchères aurait probablement pris une autre direction sans elle.

De plus,  [Binance](https://www.binance.com/en/dotslot)  s'est avéré être une voie de participation populaire avec 27 % des contributions pour la plupart des participants. Nous complétons les méthodes de contribution significatives avec  [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)  à 11% des contributions, et  [Kraken](https://www.kraken.com/learn/parachain-auctions)  à 7%. Les exchanges centralisés restent clairement une méthode de participation privilégiée.

## À propos de SubQuery Network

SubQuery est le principal fournisseur de données de Polkadot, prenant en charge une couche d'indexation & de requête entre les blockchains Layer-1 (Polkadot) et les applications décentralisées. Le service de données de SubQuery est utilisé par la plupart des sites Web de Polkadot et de Kusama en direct aujourd'hui.

Le protocole SubQuery fait abstraction des idiosyncrasies des données de la blockchain grâce au SDK SubQuery, ce qui permet aux développeurs de se concentrer sur le déploiement de leur produit principal sans avoir à gaspiller leurs efforts sur des technologies backend personnalisées.

​​​​[Linktree](https://linktr.ee/subquerynetwork)  |  [Site Web](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)  |  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [Matrix](https://matrix.to/#/#subquery:matrix.org)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Annexe

Tous les prix en USD sont indiqués au prix de clôture de la 1ère vente aux enchères = 40,47 USD$

Toutes les données datent du début de l'opération Polkadot Crowdloans jusqu'à la fin de la première enchère le 18 novembre à 11 h 57 UTC (bloc 7 756 107)

Sites Crowdloan exclus

-   [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
-   [Binance Crowdloan](https://www.binance.com/en/dotslot)
-   [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
-   [Kraken Crowdloan](https://www.kraken.com/learn/parachain-auctions)
-   [https://pos.dog/](https://pos.dog/)
-   [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
