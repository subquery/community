# SubQuery intègre Acala pour agréger et servir des données DeFi à Polkadot et Kusama Builders

![](https://miro.medium.com/max/1400/1*cg4kJs0WEcyPP73EAtHomA.png)

La semaine dernière, [SubQuery](https://www.subquery.network/) a publié la prochaine étape de son projet, le [SubQuery Explorer](https://explorer.subquery.network/). Cette semaine, Acala et SubQuery ont finalisé une intégration permettant aux utilisateurs et aux développeurs d'interroger et d'extraire des données du hub DeFi d'Acala pour Polkadot en quelques minutes seulement et sans frais.

SubQuery est une couche d'agrégation de données qui fonctionnera entre la blockchain de niveau 1 (Acala) et la couche DApp. La solution agrège et organise les données d'Acala et d'autres blockchains, en fournissant des données bien structurées que les développeurs peuvent utiliser pour un large éventail de projets. Ce service permet aux développeurs de DApp de se concentrer sur leur cas d'utilisation principal et leur front-end, sans avoir à perdre de temps à construire un back-end personnalisé pour le traitement des données.

Acala croit fermement à un avenir multi-chaînes et le construit à long terme - en réduisant la fragmentation des liquidités, en augmentant la composabilité et en permettant l'accessibilité de DeFi à tous. Acala est une blockchain spécialisée dans la finance décentralisée (DeFi), et a créé plusieurs primitives DeFi qui sont devenues un hub et une infrastructure DeFi au service des écosystèmes Polkadot et Kusama. L'équipe a construit des produits tels qu'un stablecoin multi-collatéralisé (aUSD - The Acala Dollar), un DEX de teneur de marché automatisé (AMM), un actif de jeton appelé Liquid DOT (LDOT), et a mis en œuvre une fonction "bring-your-own-gas" permettant aux frais de gaz d'être payables dans n'importe quel actif pris en charge tel que les stablecoins. Le parachain d'Acala prévoit de jouer le rôle de hub DeFi pour Polkadot et de plate-forme d'atterrissage qui regroupe les actifs et les liquidités de diverses blockchains.

Aujourd'hui, lorsque vous accédez à l'[explorateur de SubQuery](https://explorer.subquery.network/), vous serez accueilli par un nouveau projet de SubQuery Acala. Ce SubQuery suit dynamiquement toutes les données extrinsèques créées sur Acala et peut rapidement afficher des statistiques agrégées dérivées pour les éléments suivants :

-   Données historiques sur les changements de liquidité (ventilées par fournisseurs)
-   Données historiques sur tous les échanges d'actifs entre chaînes
-   Historique des transferts

![](https://miro.medium.com/max/1400/0*sXPljA1RE754fuDQ)

Vous pouvez jouer avec le SubQuery Graph d'Acala en utilisant l'[explorateur](https://explorer.subquery.network/) sans avoir à implémenter quoi que ce soit dans le code. De plus, nous avons documenté les types que vous pouvez spécifier dans chaque requête GraphQL lors de l'analyse des données d'Acala.

Vous trouverez ci-dessous un exemple simple de la façon dont un utilisateur peut rapidement et facilement voir les 5 événements de transfert précédents en utilisant le jeton ACA sur le réseau Mandala d'Acala. Vous pouvez voir ici que nous utilisons un langage GraphQL simple pour trier et récupérer ces données pour n'importe quel client. Les DApps peuvent utiliser ces données pour surveiller les positions de prêt et participer à des enchères, pour aider à liquider les collatéraux.

![](https://miro.medium.com/max/1400/0*zlxPf2tz8DVX95kY)

Un exemple légèrement plus complexe suit, dans lequel nous inspectons un seul compte et récupérons tous les événements d'échange de jetons effectués par celui-ci. Une DApp de portefeuille pourrait utiliser ces données pour créer une vue d'ensemble des performances du compte et des jetons du détenteur, des revenus provenant du jalonnement, de l'approvisionnement en liquidités et des dépenses liées aux emprunts.

![](https://miro.medium.com/max/1400/0*hdTbn41vDvIYuv3_)

[SubQuery Explorer](https://explorer.subquery.network/) est un service hébergé en ligne qui donne accès aux projets publiés de SubQuery réalisés par des contributeurs du monde entier et gérés par l'équipe SubQuery. Sa mission est de faciliter l'accès aux données du réseau Polkadot en fournissant des services d'infrastructure pour aider les développeurs à en faire plus.

[SubQuery](https://www.subquery.network/) permet à chaque équipe Substrate/Polkadot de traiter et d'interroger ses données. Le projet s'inspire de la croissance des protocoles de données servant la couche applicative et son objectif est d'aider les projets Polkadot/Substrate à construire de meilleures dApps en permettant à quiconque de trouver et de consommer des données de manière fiable et plus rapidement. Aujourd'hui, tout le monde peut interroger et extraire les données du réseau Polkadot en quelques minutes seulement et sans frais.

[Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

[Acala](http://acala.network/) est le hub financier décentralisé et le stablecoin de Polkadot qui permet d'utiliser ou de construire rapidement et facilement des applications financières, en améliorant l'efficacité du trading et en gagnant du temps. La plateforme offre une suite de primitives financières : un stablecoin multi-collatéralisé adossé à des actifs cross-chain comme le Bitcoin, un dérivé de jalonnement sans confiance et un échange décentralisé pour libérer la liquidité et alimenter les innovations financières. Acala est la plateforme ouverte de facto pour les applications financières qui utilisent des contrats intelligents ou des protocoles intégrés avec des capacités cross-chain prêtes à l'emploi et une sécurité robuste.

[Discord](https://discord.gg/vdbFVCH) | [Site Web](https://acala.network/) | [Twitter](https://twitter.com/AcalaNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [Acala Wiki](https://github.com/AcalaNetwork/Acala/wiki) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc)