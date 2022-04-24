# SORA intègre SubQuery pour fournir des données au réseau de SORA

![sora-header.jpg](https://miro.medium.com/max/1400/1*fPPW0DsynIt9QpvK4ZrsUA.jpeg)

Aujourd'hui, nous sommes heureux d'annoncer un nouveau projet passionnant sur SubQuery - SORA et Polkaswap. [SORA](https://sora.org/) a construit un projet SubQuery qui récupère les données du réseau SORA pour alimenter les applications mobiles construites sur SORA et Polkaswap [.io](http://polkaswap.io/). Vous pouvez l'essayer [ici](https://explorer.subquery.network/subquery/sora-xor/sora).

![sora-frontend.jpg](https://miro.medium.com/max/1400/1*pq0U6wsutlf8rjXqq7i2BQ.jpeg)

> _"SubQuery was selected to improve the UX of SORA network usage. We used SubQuery to get and list extrinsic details, calculate fiat prices and liquidity pool APY. Our goal was to get transaction history and aggregated data for applications that work with the SORA network._
> 
> _SubQuery has been the ideal solution for our needs because the application is easy to deploy and manage, it is easy to learn and develop as well as being well documented, and it also has its own infrastructure with Github integration. La structuration simple des données de SubQuery permet un accès rapide, elle prend en charge l'API GraphQL pour les applications clientes, elle dispose d'une configuration flexible pour analyser les événements, les extrinsèques et les blocs avec un filtrage supplémentaire. Finally, the application is completely transparent for users, so they won't notice if the application was updated or stopped."_ —SORA Development Team

Polkaswap est un DEX de premier plan dans l'écosystème florissant de Polkadot et utilise SubQuery pour récupérer les transferts, les échanges qui ont lieu dans Polkaswap, l'ajout ou la suppression de liquidités, le prix fixe des jetons et l'APY pour les pools de liquidités.

SubQuery facilite déjà le développement de l'application mobile de la SORA et de Polkaswap en réduisant le temps que l'équipe passe à construire des solutions backend personnalisées et l'équipe de la SORA prévoit d'étendre son projet SubQuery Polkaswap pour mieux soutenir Polkaswap à l'avenir.

![sora-explorer.jpg](https://miro.medium.com/max/1400/1*vjdjmmffvJ7zfOQyxo0ZAA.jpeg)

Dans cet exemple, nous utilisons SubQuery pour extraire le montant total de XOR qui est détenu dans chaque pool de liquidité (filtré pour ne montrer que les 2 premiers pools). Cet exemple montre également le rendement annuel courant associé à chaque pool de liquidité (filtré pour ne montrer que les 2 premiers pools).

![sora-playground.jpg](https://miro.medium.com/max/1400/1*oTh-ajGfG1oEhYdvqo12tQ.jpeg)

SORA utilise [SubQuery Projects](https://project.subquery.network/) pour gérer son projet et effectuer les mises à jour nécessaires. Les services d'indexation et d'interrogation que nous fournissons sont entièrement gérés par SubQuery et mis à la disposition de la communauté Polkadot gratuitement dans l'[Explorateur de SubQuery](https://explorer.subquery.network/).

Explorez le projet de SORA dans l'explorateur SubQuery [ici](https://explorer.subquery.network/subquery/sora-xor/sora).

## About SORA

SORA est en train de créer un système économique mondial supranational avec des outils intégrés pour la finance décentralisée (DeFi) sous le contrôle démocratique basé sur le tirage au sort cryptographique du Parlement de SORA.

Le réseau SORA excelle dans la fourniture d'outils pour les applications décentralisées qui utilisent des actifs numériques, tels que les échanges de jetons atomiques, le pontage de jetons vers d'autres blockchains, et la création de règles programmatiques impliquant des actifs numériques.

[Site Web](https://sora.org/) | [Reddit](https://www.reddit.com/r/SORA/) | [Blog](https://sora.org/blog) | [Telegram](https://t.me/sora_xor) | [Twitter](https://twitter.com/sora_xor) | [YouTube](https://youtube.com/sora_xor) | [Instagram](https://instagram.com/sora_xor)

## About SubQuery

[SubQuery](https://subquery.network/) est une couche décentralisée d'agrégation, d'indexation et d'interrogation de données entre les blockchains de couche 1 et les applications décentralisées (DApps). Actuellement axé sur les projets Polkadot et Substrate, ce data-as-a-service permet aux développeurs de se concentrer sur leur cas d'utilisation principal et leur front-end, sans avoir besoin de perdre du temps à construire un backend personnalisé pour le traitement des données.

[Site Web](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Email](mailto:hello@subquery.network)
