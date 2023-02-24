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

La fiabilité est essentielle, et vous avez besoin d'une plateforme fiable et évolutive pour l'héberger. [Le service géré de SubQuery](https://managedservice.subquery.networks) est une solution d'hébergement leader du secteur pour tous les clients qui sert des centaines de millions de requêtes quotidiennes aux plus grands projets de Polkadot. Nous fournissons à nos [clients de niveau entreprise](./20211228-enterprise-hosted.md) des services tels que des bases de données dédiées, des clusters redondants, un routage intelligent multi-clusters, ainsi qu'une surveillance et une analyse avancées. Il soutiendra votre demande lorsque vous serez prêt et évoluera avec vous.

Enfin, dans quelques mois, vous pourrez décentraliser complètement votre infrastructure SubQuery grâce au réseau SubQuery, l'avenir de l'infrastructure Web3. Le réseau SubQuery indexera les données de vos projets et les mettra à la disposition de la communauté mondiale d'une manière incitative et vérifiable. Il est conçu pour prendre en charge n'importe quel projet SubQuery à partir de n'importe quel réseau de couche 1, y compris Terra, afin que vous puissiez profiter de l'échelle du réseau SubQuery unifié dès le lancement.

## Instructions d'installation

Vous devrez d'abord installer une version récente de @subql/cli via npm i -g @subql/cli@latest

Le mieux est de commencer par [notre projet de démarrage](https://github.com/subquery/terra-subql-starter), il contient un projet en cours avec un exemple de toutes les fonctions de mapping : Ce projet indexe les éléments suivants :

- **BlockHandler:** Tous les blocs ainsi que leur hachage et leur hauteur
- **TransactionHandler:** Toutes les transactions et leur hachage, hauteur et horodatage
- **EventHandler:** Tous les événements de transfert de contrat intelligent et leur hachage, hauteur, expéditeur, destinataire et montant à partir d'une adresse de contrat intelligent filtrée (bLuna)
- **MessageHandler:** Tous les messages de contrat intelligent et leurs données de hachage, de hauteur, de contrat, d'expéditeur et de execute_msg à partir d'une adresse de contrat intelligent filtrée (bLuna)

SubQuery prend en charge l'indexation des contrats intelligents de Terra avec des abonnements et des gestionnaires de transactions et de messages. Vous pouvez voir un exemple fonctionnel de prise en charge des contrats intelligents dans le [projetstarter](https://github.com/subquery/terra-subql-starter) et lire la documentation sur la [SubQuery University](http://localhost:8080/build/manifest.html#mapping-handlers-and-filters).

La mise en œuvre de Terra de SubQuery a été conçue pour fonctionner de manière presque identique au support Polkadot de SubQuery, et de manière similaire à l'approche de Graph. Nous avons mis à jour l'[Université SubQuery](https://university.subquery.network/) pour ajouter des informations spécifiques à Terra à la documentation générale sur les SubQuery. Vous pouvez commencer en suivant ce [excellent guide de démarrage ici](http://university.subquery.network/quickstart/quickstart-terra.html).

## Déploiement de votre projet vers le service géré de SubQuery

Bien que vous puissiez toujours facilement exécuter votre projet dans votre propre infrastructure, [Le service géré de SubQuery](https://managedservice.subquery.networks) prend désormais en charge le projet Terra. Certains des plus grands projets dépendent du service géré de SubQuery [niveau entreprise](./20211228-enterprise-hosted.md) et maintenant vous aussi. Dans le cadre de notre accord de partenariat de lancement, nous vous offrons 3 mois d'hébergement gratuit.

Vous pouvez [suivre le guide ici](https://university.subquery.network/run_publish/publish.html) pour publier votre projet Terra SubQuery sur notre service géré. Veuillez noter que vous devez héberger votre projet [SubQuery en utilisant IPFS](https://university.subquery.network/run_publish/publish.html) plutôt que GitHub.

You can update your managed service project as much as you want. Nous disposons même d'un [emplacement de déploiement](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md) pour vous permettre d'effectuer des mises à niveau bleues/vertes sans interruption de service. Cet emplacement peut également être utilisé pour exécuter une instance propre de SubQuery avec une nouvelle base de données pour une réindexation complète en arrière-plan de votre projet. Les clients associent généralement le créneau de mise à disposition aux versions de mise à disposition/développement de leurs applications.

Une fois déployé, vous pouvez accéder à votre projet à l'aide de l'explorateur de sous-requêtes et effectuer des requêtes directement depuis votre application vers le point de terminaison GraphQL fourni. Faites-nous savoir si vous souhaitez que nous activions des fonctionnalités plus avancées comme [les abonnements GraphQL](https://university.subquery.network/run_publish/subscription.html), des requêtes plus complexes et [des fonctions d'agrégation](https://university.subquery.network/run_publish/aggregate.html).

Veuillez nous informer une fois que vous avez déployé votre projet, car nous pourrions avoir besoin de vous aider à ajuster la taille du lot pour garantir que notre nœud d'archivage Terra fonctionne bien pour votre projet.

## Le support de SubQuery pour Terra

Aujourd'hui, nous partageons ce qui suit :

- Indexation avancée des blocs, des événements
- Dictionnaire Terra : Des indices pré-calculés pour [réduire considérablement le temps d'indexation](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
- Support complet pour Terra dans notre [service géré gratuit de niveau entreprise](./20211228-enterprise-hosted.md)
- Une documentation intuitive dans la [SubQuery University](https://university.subquery.network/)

Dans les semaines à venir, vous pouvez vous attendre à :

- Un cours d'apprentissage pas à pas dans la [SubQuery Academy](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
- Support complet pour Terra dans notre réseau décentralisé SubQuery (vous verrez bientôt un projet dans notre réseau de test Frontier actuel)

---

Le lancement de notre support bêta pour Terra marque une étape importante dans notre engagement à offrir des outils d'indexation améliorés à la communauté Terra pour permettre à ses développeurs d'aller plus loin, plus vite. Nous sommes impatients de recueillir les commentaires de la communauté afin d'améliorer notre offre et d'accroître notre visibilité en tant que partenaire d'infrastructure de confiance pour l'une des communautés de développeurs du Web3 qui connaît la croissance la plus rapide

James Bayly

## Liens

- [Guide de démarrage](https://university.subquery.network/quickstart/quickstart-terra.html)
- [Université SubQuery (Documentation)](https://university.subquery.network/)
- [Exemple de projet Terra](https://github.com/subquery/terra-subql-starter)
- [Service géré](https://explorer.subquery.network/)
- [Publier votre propre projet Terra sur le service géré](https://project.subquery.network/)

## À propos de SubQuery

[SubQuery](https://subquery.network/) est une boîte à outils pour développeurs de blockchain permettant à d'autres de construire les applications Web3 du futur. Un projet SubQuery est une API complète permettant d'organiser et d'interroger les données des chaînes de la couche 1. Actuellement au service des projets Polkadot, Substrate, Avalanche et maintenant Terra, ce service de données permet aux développeurs de se concentrer sur leur cas d'utilisation principal et sur le front-end, sans avoir à perdre de temps à construire un back-end personnalisé pour le traitement des données. Le réseau SubQuery propose de mettre en place cette même solution évolutive et fiable, mais de manière totalement décentralisée.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
