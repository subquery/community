# Le guide d'embarquement de SubQuery Terra

![](https://miro.medium.com/max/1400/1*DiTE9KuzH0xHLojzGWxOuw.png)

Depuis un certain temps, nous développons et affinons le support se Terra en coulisses et le testons avec les principaux partenaires de lancement du développement (surveillez les annonces dans les prochains jours). Cette période prolongée nous a permis d'être extrêmement confiants dans l'évolutivité, la fiabilité et les fonctionnalités que SubQuery apporte aujourd'hui à Terra. Dans cet article, nous partageons un guide de développement détaillé et une feuille de route que toute la communauté Terra peut utiliser pour répondre à ses besoins en matière d'indexation de données.

SubQuery est un indexeur de données ouvert, flexible et rapide. Notre outil d'indexation ouvert est conçu pour aider les développeurs à construire leur propre API en quelques heures, et il est conçu pour indexer les chaînes incroyablement rapidement avec l'aide de dictionnaires (index pré-calculés). Notre expérience avec les clients de toutes les verticales de Polkadot (portefeuilles, réseaux, explorateurs, NFT, DeFi, scanners, etc.) nous a aidés à construire cela.

Ce système en est encore à ses premières versions, et bien que nous considérions que nous sommes bien au-delà d'une "bêta", nous apprécierions que les éventuels bogues soient signalés à notre équipe afin que nous puissions les résoudre rapidement.

<iframe width="656" height="369" src="https://www.youtube.com/embed/dS7h3isQCeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pourquoi utiliser une SubQuery?

L'écosystème des applications a prospéré à Terra, même si certains outils de développement et services d'infrastructure essentiels font cruellement défaut. C'est incroyable à voir, et cela témoigne de la volonté et de l'ingéniosité des lunatiques se Terra. Dans la plupart des cas, lorsque nous avons demandé aux équipes comment elles avaient résolu leurs besoins d'indexation des données, c'était :

- **Construisez votre propre solution :** Une implémentation personnalisée exécutée par vous-même construite spécifiquement pour votre application. Mais pourquoi réinventer la roue ? SubQuery se concentre sur la construction d'un indexeur ouvert fiable et rapide - nous sommes là pour vous faire gagner du temps
- **Conception de contrats intelligents pour les requêtes :** Certaines équipes mettaient même en place des bizarreries personnalisées dans leurs contrats intelligents pour permettre spécifiquement des requêtes plus avancées propres à leur logique applicative.

Chez SubQuery, nous disposons d'un SDK open-source facile à utiliser et rapide comme l'éclair. Il vous fournit un point de terminaison GraphQL standard, ou vous pouvez simplement interroger la base de données postgres directement. Grâce à lui, vous pouvez indexer un ensemble unique de données provenant de vos propres contrats intelligents, ce qui vous permet de créer un produit supérieur qui surpasse celui de vos concurrents ! Nous vous donnons la possibilité d'obtenir les données dont vous avez besoin sous la forme qui vous convient le mieux.

La fiabilité est essentielle, et vous avez besoin d'une plateforme fiable et évolutive pour l'héberger. [Le service géré de SubQuery](https://subquery.network/managedservices) est une solution d'hébergement leader du secteur pour tous les clients qui sert des centaines de millions de requêtes quotidiennes aux plus grands projets de Polkadot. Nous fournissons à nos [clients de niveau entreprise](./20211228-enterprise-hosted.md) des services tels que des bases de données dédiées, des clusters redondants, un routage intelligent multi-clusters, ainsi qu'une surveillance et une analyse avancées. Il soutiendra votre demande lorsque vous serez prêt et évoluera avec vous.

And finally, in a few months you'll be able to completely decentralise your SubQuery infrastructure with the SubQuery Network, the future of Web3 infrastructure. The SubQuery Network will index and service your projects data to the global community in an incentivised and verifiable way. It is designed to support any SubQuery project from any layer-1 network including Terra, so you can take advantage of the scale of the unified SubQuery Network from launch.

## Installation Instructions

You'll first need to install a recent version of @subql/cli via npm i -g @subql/cli@latest

The best way is to start with [our starter project](https://github.com/subquery/terra-subql-starter), it contains a running project with an example of all mapping functions: This project indexes the following:

- **BlockHandler:** All blocks and their hash and height
- **TransactionHandler:** All transactions and their hash, height, and timestamp
- **EventHandler:** All smart contract transfer events and their hash, height, sender, recipient, and amount from a filtered smart contract address (bLuna)
- **MessageHandler:** All smart contract messages and their hash, height, contract, sender, and execute_msg data from a filtered smart contract address (bLuna)

SubQuery supports indexing Terra's smart contracts with both transaction and message subscriptions and handlers. You can see a working example of Smart Contract support in the [starter project](https://github.com/subquery/terra-subql-starter) and read the documentation on the [SubQuery University](http://localhost:8080/build/manifest.html#mapping-handlers-and-filters).

SubQuery's Terra implementation has been designed to operate almost identically to SubQuery's Polkadot support, and in a similar way to the Graph's approach. We've updated the [SubQuery University](https://university.subquery.network/) to add Terra specific information to the general SubQuery documentation. You can start by following this [excellent getting started guide here](http://university.subquery.network/quickstart/quickstart-terra.html).

## Deploying your Project to SubQuery's Managed Service

Although you will always be able to run your project in your own infrastructure easily, [SubQuery's managed service](https://subquery.network/managedservices) now supports Terra project. Some of the biggest projects depend on SubQuery's [enterprise level](./20211228-enterprise-hosted.md) managed service and now you can too. As part of our launch partner agreement, we are providing you with 3 months free hosting.

You can [follow the guide here](https://university.subquery.network/run_publish/publish.html) to publish your Terra SubQuery project to our managed service. Please note that you must host your [SubQuery project using IPFS](https://university.subquery.network/run_publish/publish.html) rather than GitHub.

You can update your managed service project as much as you want. We even have a [staging deployment slot](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md) to allow you to do seamless blue/green upgrades without any downtime. This staging slot can also be used to run a clean instance of SubQuery with a fresh database for complete background reindexing of your project. Customers usually link the staging slot to the staging/development versions of their applications.

Once deployed, you can access your project using the SubQuery Explorer, and make requests directly from your app to the provided GraphQL endpoint. Let us know if you would like us to enable more advanced features like [GraphQL subscriptions](https://university.subquery.network/run_publish/subscription.html), more complex queries, and [aggregation functions](https://university.subquery.network/run_publish/aggregate.html).

Please notify us once you have deployed your project as we may need to assist with fine tuning the batch size to ensure that our Terra archive node runs well for your project.

## SubQuery's Support for Terra

Today we are sharing the following:

-   Advanced indexing of blocks, event
-   Terra Dictionary: Pre-computed indices to [dramatically reduce indexing time](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
-   Full support for Terra in our free [enterprise level](./20211228-enterprise-hosted.md) managed service
-   Intuitive documentation in the [SubQuery University](https://university.subquery.network/)

In the coming weeks you can expect:

-   A step by step learning course in the [SubQuery Academy](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   Full support for Terra in our decentralised SubQuery Network (you'll soon see a project in our current Frontier test network)

---

The launch of our beta support for Terra marks a significant milestone in our commitment to offer enhanced indexing tools for the Terra community to enable her developers to go further, faster. We are eager to get feedback from the community in order to improve our offering and increase our visibility as a trusted infrastructure partner for one of the fastest growing developer communities in Web3

James Bayly

## Links

-   [Getting Started Guide](https://university.subquery.network/quickstart/quickstart-terra.html)
-   [SubQuery University (Documentation)](https://university.subquery.network/)
-   [Example Terra Project](https://github.com/subquery/terra-subql-starter)
-   [Managed Service](https://explorer.subquery.network/)
-   [Publish your own Terra Project to the Managed Service](https://project.subquery.network/)

## About SubQuery

[SubQuery](https://subquery.network/) est une boîte à outils pour développeurs de blockchain permettant à d'autres de construire les applications Web3 du futur. Un projet SubQuery est une API complète permettant d'organiser et d'interroger les données des chaînes de la couche 1. Actuellement au service des projets Polkadot, Substrate, Avalanche et maintenant Terra, ce service de données permet aux développeurs de se concentrer sur leur cas d'utilisation principal et sur le front-end, sans avoir à perdre de temps à construire un back-end personnalisé pour le traitement des données. Le réseau SubQuery propose de mettre en place cette même solution évolutive et fiable, mais de manière totalement décentralisée.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
