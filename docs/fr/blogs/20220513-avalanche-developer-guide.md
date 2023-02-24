# Publication d'une version bêta du support SubQuery pour Avalanche

![](https://miro.medium.com/max/1400/1*BiJaESR69-vDimBJmXhQvw.png)

Aujourd'hui, après des mois d'améliorations, de refactoring et de tests, nous sommes heureux de partager le support bêta de notre solution d'indexation ouverte avec la communauté Avalanche. Après avoir établi SubQuery comme le principal indexeur de données de Polkadot, la récente [annonce de notre expansion dans Avalanche](./20220321-avalache.md) lors du récent [Avalanche Summit](https://www.avalanchesummit.com/agenda) a été accueillie avec enthousiasme par les développeurs avides d'un outil d'indexation flexible et évolutif.

Suivez le guide de la bêta ici : https://university.subquery.network/quickstart/quickstart-avalanche.html

SubQuery est un indexeur de données ouvert, flexible et rapide. Notre outil d'indexation ouvert est conçu pour aider les développeurs à construire leur propre API en quelques heures, et il est conçu pour indexer les chaînes incroyablement rapidement avec l'aide de dictionnaires (index pré-calculés). Notre expérience avec les clients de toutes les verticales de Polkadot (portefeuilles, réseaux, explorateurs, NFT, DeFi, scanners, etc.) nous a aidés à construire cela.

À partir d'aujourd'hui, les développeurs d'Avalanche pourront accéder à la version bêta de la même solution d'indexation rapide, flexible et ouverte, largement utilisée par Polkadot. Comme il s'agit d'une version bêta, il est probable qu'il y ait quelques problèmes. En tant que tel, nous apprécierions que tout bogue soit signalé à notre équipe afin que nous puissions le résoudre rapidement.

## Pourquoi utiliser SubQuery ?

_Il existe déjà quelques autres options dans Avalanche, alors pourquoi construire avec SubQuery ?_

Cette question m'a été posée par nombre d'entre vous que j'ai eu la chance de rencontrer au sommet sur les avalanches. Dans notre espace, il existe généralement trois autres solutions :

- Créez votre propre solution : Pourquoi réinventer la roue ? SubQuery se concentre sur la construction d'un indexeur ouvert fiable et rapide --- nous sommes là pour vous faire gagner du temps
- Services de données standardisés ou "API unifiées" : Ces fournisseurs sont excellents si vous construisez la même application sur le même contrat intelligent de base que tout le monde, mais ce n'est pas le cas. Vous avez besoin d'un ensemble de données unique qui vous permette de créer un produit supérieur, capable d'écraser vos concurrents ! Vous avez besoin de flexibilité pour obtenir les données dont vous avez besoin sous la forme qui vous convient le mieux
- Autres services de données GraphQL ouverts : Tous ceux qui les utilisaient déjà ont exprimé les mêmes problèmes, il y avait un sérieux manque de support de la part des développeurs et quelques problèmes de performance significatifs. De plus, il n'y avait qu'une couverture sur la chaîne de contrat sans plan pour l'étendre à votre prochain sous-réseau

Chez SubQuery, nous disposons d'un SDK open-source, facile à utiliser et rapide comme l'éclair. Il vous fournit un point de terminaison GraphQL standard, ou vous pouvez simplement interroger la base de données postgres directement.

La fiabilité est essentielle, et vous avez besoin d'une plateforme fiable et évolutive pour l'héberger. [Le service géré de SubQuery](https://managedservice.subquery.networks) est une solution d'hébergement leader du secteur pour tous les clients qui sert des centaines de millions de requêtes quotidiennes aux plus grands projets de Polkadot. Nous fournissons à nos [clients de niveau entreprise](./20211228-enterprise-hosted.md) des services tels que des bases de données dédiées, des clusters redondants, un routage intelligent multi-clusters, ainsi qu'une surveillance et une analyse avancées. Il soutiendra votre demande lorsque vous serez prêt et évoluera avec vous.

Enfin, dans quelques mois, vous pourrez décentraliser complètement votre infrastructure SubQuery grâce au réseau SubQuery, l'avenir de l'infrastructure Web3. Le réseau SubQuery indexera les données de vos projets et les mettra à la disposition de la communauté mondiale d'une manière incitative et vérifiable. Il est conçu pour prendre en charge n'importe quel projet SubQuery à partir de n'importe quel réseau de couche 1, y compris Avalanche, afin que vous puissiez profiter de l'échelle du réseau SubQuery unifié dès le lancement.

## Instructions d'installation

Suivez le guide de la bêta ici : https://university.subquery.network/quickstart/quickstart-avalanche.html

Vous devrez d'abord installer @subql/cli via _npm i -g @subql/cli_

La meilleure façon est de commencer avec notre projet de démarrage, il contient un projet en cours avec un exemple de toutes les fonctions de cartographie : https://github.com/subquery/avalanche-subql-starter. Ce projet indexe les éléments suivants du [Pangolin Smart Contract](https://snowtrace.io/token/0x60781c2586d68229fde47564546784ab3faca982) :

- BlockHandler : Tous les blocs et leurs informations de base
- TransactionHandler : Toutes les transactions de la fonction d'approbation dans le contrat intelligent Pangolin
- EventHandler : Tous les événements de transfert du contrat intelligent Pangolin

L'implémentation d'Avalanche de SubQuery a été conçue pour fonctionner de manière presque identique au support Polkadot de SubQuery, et de manière similaire à l'approche de Graph. Nous avons mis à jour la [SubQuery University](https://university.subquery.network/build/introduction.html) pour ajouter des informations spécifiques à Avalanche à la documentation générale sur les SubQuery. Vous pouvez commencer en suivant ce [excellent guide de démarrage ici](https://university.subquery.network/quickstart/quickstart-avalanche.html).

## Le support d'Avalanche par SubQuery

Nous achevons la première phase de notre soutien total à l'écosystème d'Avalanche.

![](https://miro.medium.com/max/1400/0*GUKZJfJCz1nB_3zc)

Aujourd'hui, nous partageons ce qui suit :

- Indexation avancée des chaînes de contrats
- Dictionnaire Avalanche : Des indices pré-calculés pour [réduire considérablement le temps d'indexation](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
- Support complet pour Avalanche dans notre [service géré gratuit de niveau entreprise](./20211228-enterprise-hosted.md)
- Une documentation intuitive dans la [SubQuery University](https://university.subquery.network/)

Dans les semaines à venir, vous pouvez vous attendre à :

- Un cours d'apprentissage pas à pas dans la [SubQuery Academy](./20211018-subquery-launches-the-subquery-academy.md)
- Support complet d'Avalanche dans notre réseau décentralisé SubQuery (vous verrez un projet dans notre réseau de test Frontier actuel)

Avec le nombre de sous-réseaux prévus dans les mois à venir, il y aura un besoin énorme de support d'indexation rapide, ouvert et flexible qui fonctionne sur tous les sous-réseaux compatibles. Nous avons l'expérience de la mise en œuvre de ce niveau de configurabilité pour les parachains de Polkadot, et nous étudions la manière de fournir le même résultat pour Avalanche (par exemple en important des implémentations personnalisées de snowman.Block, etc.).

Le lancement de notre support bêta pour Avalanche marque une étape importante dans notre engagement à offrir des outils d'indexation améliorés à la communauté Avalanche pour permettre à ses développeurs d'aller plus loin, plus vite. Nous sommes impatients de recueillir les commentaires de la communauté afin d'améliorer notre offre et d'accroître notre visibilité en tant que partenaire d'infrastructure de confiance pour l'une des communautés de développeurs du Web3 qui connaît la croissance la plus rapide

Nous sommes maintenant à la recherche de partenaires de lancement que nous pourrons accompagner étroitement dans le développement de leurs premiers projets SubQuery dans cet écosystème. Contactez-moi à l'adresse james.bayly@subquery.network si vous voulez être le premier à faire le voyage avec nous.

_James Bayly_

Suivez le guide de la bêta ici : https://university.subquery.network/quickstart/quickstart-avalanche.html

## À propos de SubQuery

[SubQuery](https://subquery.network/) est une boîte à outils pour développeurs de blockchain permettant à d'autres de construire les applications Web3 du futur. Un projet SubQuery est une API complète permettant d'organiser et d'interroger les données des chaînes de la couche 1. Actuellement au service des projets Polkadot, Substrate, Avalanche et Terra, ce service de données à la demande permet aux développeurs de se concentrer sur leur cas d'utilisation principal et sur le front-end, sans avoir à perdre de temps à construire un back-end personnalisé pour le traitement des données. Le réseau SubQuery propose de mettre en place cette même solution évolutive et fiable, mais de manière totalement décentralisée.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
