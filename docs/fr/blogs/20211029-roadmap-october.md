# SubQuery publie sa feuille de route technique

![](https://cdn-images-1.medium.com/max/800/1*Qcu5mFIs8eJhAXaMpWOlMQ.png)

**SubQuery annonce des étapes clés, y compris le calendrier du TGE**

Aujourd'hui, nous avons le plaisir de publier pour la première fois notre feuille de route technique détaillée. L'objectif de SubQuery est d'être le principal fournisseur de données dans l'écosystème Polkadot et le soutien que nous avons reçu de la communauté pour nous aider à réaliser cette vision a été incroyable. De notre établissement formel à la fin de 2020 via une [subvention Web3](https://web3.foundation/), à la publication de notre première version open source en janvier 2021, et à la [clôture de notre série A en septembre](https://subquery.medium.com/series-a-1abed6c1c2af), nous tenons à vous remercier pour tout votre soutien qui nous a permis d'atteindre ce stade !

Alors que nous continuons à prendre de l'élan, le temps est venu de partager davantage sur nos plans pour l'avenir, y compris notre feuille de route technique. Nous sommes enthousiastes à l'idée que la prochaine évolution de SubQuery apportera encore plus de valeur à l'écosystème Polkadot et offrira à notre communauté plus d'opportunités de participer à notre croissance.

## Notre avenir

Alors que SubQuery sert déjà des millions de requêtes de données chaque jour à [plus de 60 projets sur Polkadot & Kusama](https://project.subquery.network/), nous voulions nous assurer que notre prochaine phase de croissance soit menée de manière organisée et contrôlée.

Pour cette raison, nous pensons qu'il est essentiel de démontrer et de tester pleinement l'évolutivité du réseau SubQuery par le biais d'un programme de testnet incitatif. Ce processus nous permettra également d'établir une communauté d'indexeurs avant le lancement public via un TGE en mars 2022 et notre éventuel mainnet plus tard l'année prochaine.

![](https://cdn-images-1.medium.com/max/800/1*I6mko5xumHAArzGePvEZiQ.jpeg)

En tant que tel, les principaux résultats attendus de notre flux de travail peuvent être répartis entre les étapes majeures suivantes.

## Où nous en sommes - Milieu du quatrième trimestre 2021

### Support EVM pour les parachains

Nous publierons bientôt [notre support bêta pour les implémentations Polkadot de la machine virtuelle Ethereum (EVM)](https://medium.com/@subquery/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff). Cela permet aux développeurs Polkadot et Ethereum d'intégrer de manière transparente les données Substrate et EVM en un seul endroit et d'interroger cette source de données unique à l'aide de GraphQL.

SubQuery introduira des filtres plus avancés que les autres indexeurs, permettant le filtrage des transactions sans contrat, des expéditeurs de transactions, des contrats et des arguments de journal indexés, afin que les développeurs puissent construire une grande variété de projets qui répondent à leurs besoins spécifiques en matière de données.

### Académie SubQuery

L'Académie est conçue pour permettre aux développeurs de se perfectionner et de s'autonomiser dans l'écosystème SubQuery en leur offrant une formation modulaire. Le [premier cours de l'académie le _Hero Course_](https://doc.subquery.network/academy/herocourse/), a été lancé le vendredi 22 octobre 2021.

Dans chaque module du _cours Hero_, il y a plusieurs leçons de 5 à 10 minutes qui sont délivrées par une vidéo enregistrée. Le contenu vidéo est accompagné de tutoriels écrits, de diapositives, de cahiers d'exercices et de liens vers le dépôt de code GitHub terminé.

Le cours est conçu pour permettre à un développeur de ne rien connaître de SubQuery et de devenir un expert dans la construction d'une source de données SubQuery pour sa nouvelle application blockchain.

Au cours des prochains mois, nous allons déployer davantage de formations pour la communauté, avec des publications hebdomadaires du nouveau contenu du _cours Hero_ SubQuery , et d'autres cours dans les semaines à venir.

### Preuve d'indexation

La preuve d'indexation nous permet de garantir que deux indexeurs différents travaillant sur le même projet SubQuery ont indexé exactement les mêmes données. Il s'agit d'un élément essentiel pour le développement d'un réseau SubQuery décentralisé. Nous utilisons un concept appelé "Merkle Mountain ranges" pour confirmer et garantir cela. Gardez un œil sur un futur article de blog qui explorera ce sujet plus en profondeur.

### Service d'entreprise premium

Nous avons quelques gros clients tels que Karura, Kodadot et Fearless Wallet qui utilisent tous des applications de production dans SubQuery. Ces équipes exigent un service amélioré et des niveaux de fiabilité plus élevés.

Nous relevons le défi, avec des accords de niveau de service, des niveaux de service d'entreprise et d'autres outils dont nos grands clients ont besoin pour gérer leurs propres affaires et recevoir les meilleures performances possibles de SubQuery pour leurs applications.

N'hésitez pas à contacter l'équipe si vous souhaitez nous parler de la possibilité de recevoir des services et un support de niveau entreprise de la part de SubQuery.

## Etape 1 - Fin du 4ème trimestre 2021

### Programme de subventions pour les constructeurs de SubQuery

Ce programme de subventions est conçu pour faciliter et catalyser l'innovation avec Polkadot et SubQuery, et pour construire la prochaine génération de dApps pour alimenter la révolution web3. Il soutiendra les nouveaux projets grâce à des subventions, un soutien technique, des conseils en marketing et en développement commercial fournis par SubQuery et d'autres organismes.

Nous sommes enthousiasmés par le potentiel de cette initiative et nous publierons bientôt de plus amples informations.

### Mise en œuvre du SDK du coordinateur et du client

Nous allons améliorer notre SDK SubQuery de base et ajouter des composants supplémentaires pour un coordinateur et un client SubQuery.

Le coordinateur d'indexation sera déployé par les indexeurs pour exposer le réseau à l'indexeur, et permettre à l'indexeur de s'enregistrer dans le réseau SubQuery et de faire la publicité des données qu'il met à disposition

Le client SDK sera destiné aux consommateurs et leur permettra de trouver des indexeurs et de gérer l'ensemble de la transaction dont un consommateur aura besoin pour récupérer et payer les données.

### MVP interne du contrat SQT Network

Notre première version du réseau SubQuery sera intégrée à un contrat intelligent, déployé sur une parachain Polkadot de premier plan. Le MVP interne nous permettra de commencer à tout tester en interne, et c'est une étape importante à franchir pour nous.

### Cluster européen

Nos clients demandent le support de plus de clusters pour les données SubQuery à travers le monde. Plus de clusters signifie plus de résilience, et des données SubQuery hébergées plus près de l'endroit où se trouvent leurs clients. Un nouveau cluster européen signifie des requêtes plus rapides pour les consommateurs, des performances inégalées pour les développeurs de dApps et plus de résilience pour le réseau SubQuery.

### Améliorations apportées à subql init

La commande _subql init_ est familière à tous ceux qui ont construit un projet SubQuery ; elle représente une toile blanche - des possibilités illimitées. Nous sommes conscients que nous pouvons faire mieux pour aider les autres à démarrer, plutôt qu'une toile vierge, les développeurs veulent un échafaudage vierge, où tout le code passe-partout est déjà écrit.

Cet élément de la feuille de route représente le travail que nous voulons faire pour permettre aux développeurs de commencer à construire sur n'importe quel parachain sans avoir à se soucier des points de terminaison, des dictionnaires et des types - tout cela pour faire gagner du temps aux développeurs et aider les autres à démarrer.

## Etape 2 - Milieu du premier trimestre 2022

### Lancement du réseau public de test

Après le MVP interne du contrat SQT Network, nous inviterons un petit groupe de participants à nous rejoindre pour commencer à tester le SubQuery Network. Afin de procéder au lancement, nous devons accomplir un grand nombre de tâches et une quantité encore plus grande de documentation !

Début 2022, nous partagerons plus d'informations sur ce processus et sur la façon dont vous pouvez demander à y participer.

### Indexation ponctuelle

Imaginez que vous puissiez connaître l'état de la blockchain à un moment donné - à quoi ressemblait exactement un projet SubQuery au 5 millionième bloc ? C'est exactement ce que cette nouvelle fonctionnalité nous permettra de faire.

### Contrat de réseau SQT v1 et audit de code externe

Tous les réseaux importants nécessitent un audit de code par un partenaire externe pour s'assurer que le code du réseau est sécurisé et évolutif. SubQuery n'est pas différent, donc nous allons travailler avec des partenaires clés pour un audit complet du code ici et aussi continuer à recevoir des audits de code pour nos contrats intelligents à l'avenir.

### Test des micropaiements internes

Il s'agit d'une fonctionnalité clé pour nous. Nous allons faire beaucoup de travail au sein de l'écosystème Polkadot pour gérer et traiter les micropaiements dans SubQuery. L'avantage de Polkadot est que les frais de transaction sont minuscules par rapport à d'autres réseaux comme Ethereum, ce qui signifie que les micropaiements sont beaucoup plus pertinents. Ce système sera déployé sur notre réseau de test incitatif après que nous ayons effectué des tests internes approfondis.

### Explorateur et application du réseau SubQuery

Nous construisons un explorateur et d'autres applications pour permettre aux participants du réseau SubQuery d'explorer et de trouver des données dans le réseau SubQuery. Les consommateurs s'en serviront également pour naviguer dans la bibliothèque des sources de données prises en charge, ainsi que les délégateurs pour analyser les performances des indexeurs et décider comment déléguer leurs jetons SQT.

### Surveillance de la santé de l'entreprise

Dans le prolongement de notre niveau de service SubQuery Enterprise, vous pouvez également vous attendre à ce qu'un grand nombre d'outils de surveillance de la santé et d'autres outils d'analyse des performances soient mis à la disposition des clients.

## Étape 3 - Fin du premier trimestre 2022

### Événement de génération de jetons SQT

Après une phase de réseau de test réussie, nous prévoyons de lancer le jeton SubQuery sur un partenaire parachain de Polkadot. Nous partagerons plus d'informations sur notre tokenomics avec la communauté dans les semaines à venir.

### Lancement d'un testnet public incitatif avec micropaiements

Il s'agit de l'étape finale de notre réseau de test. Nous allons tout libérer sur notre réseau de test et nous attendons des participants qu'ils le poussent à ses limites. Il s'agit notamment de tester l'échelle et la charge, d'affiner nos modèles économiques et nos coefficients, de tester notre documentation et nos processus d'embarquement, et de s'assurer que vous pouvez effectuer des transactions avec un précurseur de SQT en son sein.

Nous prévoyons de récompenser les participants de notre réseau de test, ceux qui accomplissent certaines quêtes ou tâches, et ceux qui agissent comme différents membres du réseau de test.

### Aperçu du trafic de données et rapports

Nous traitons chaque jour des millions de demandes de données pour les projets SubQuery. La plupart de nos clients n'ont pas d'analyses dans leurs propres dApps pour des raisons de confidentialité, mais ils ont quand même besoin de savoir comment leurs dApps fonctionnent, donc nous allons améliorer cela.

### Routage intelligent évolutif

Nous avons un objectif d'un milliard de requêtes SubQuery par jour sur notre service hébergé, c'est pourquoi nous allons introduire un service globalement évolutif avec plusieurs services hébergés SubQuery en fonctionnement.

Il s'agit d'une nouvelle fonctionnalité, en constante amélioration, qui achemine automatiquement les demandes vers le nœud disponible le plus proche. De plus, elle nous permet de rediriger immédiatement toutes les demandes vers une zone SubQuery de secours, nous fournissant ainsi un système à tolérance de panne en cas de panne régionale.

À l'avenir, cela signifie que nous allons créer de plus en plus de petits services hébergés SubQuery, placés tactiquement plus près de nos utilisateurs.

## Étape 4 - Milieu du deuxième trimestre 2022

### Lancement de la Fondation SubQuery

Dans le cadre de la création d'un réseau SubQuery décentralisé, nous allons établir une Fondation SubQuery pour gérer la gouvernance et la croissance futures de l'écosystème. La propriété du réseau SubQuery relèvera initialement de la fondation SubQuery.

### Finaliser la recherche d'autres chaînes de niveau 1

Bien que notre maison sera toujours Polkadot, nous explorons le soutien de diverses autres blockchains de couche 1 avec nos capacités d'indexation.

### Programme de minage de la liquidité

Afin d'améliorer la liquidité du jeton SQT, nous allons créer un programme d'extraction de liquidité avec un échange décentralisé (DEX). Cela permettra aux détenteurs de jetons de générer des retours sur leur investissement.

## Étape 5 - Fin du deuxième trimestre 2022

### Lancement du Mainnet 🚀

Après avoir terminé les tests du réseau SubQuery lancera le premier réseau principal SubQuery Network. C'est là que tout commence vraiment. Dans un premier temps, nous embarquerons et récompenserons les participants du réseau de test, puis il sera complètement ouvert à tous les membres de la communauté.

### Lancement de l'échange centralisé

Afin d'accroître l'adoption de SQT, nous prévoyons de lancer le jeton sur un, voire plusieurs grands CEX au cours de cette période, ainsi que sur de nombreux autres DEX.

## Etape 6 - Plans à long terme

### Lancement de notre propre Parachain

Bien que nous prévoyions initialement de nous associer à une parachain de premier plan de Polkadot afin d'accélérer le lancement et la mise à l'échelle de SubQuery Network, SubQuery a également l'intention, à long terme, de se lancer sur sa propre parachain et de s'intégrer encore davantage dans l'écosystème.

Cette parachain autonome nous permettra d'innover davantage dans les outils qui peuvent aider les développeurs à construire le futur du web3 plus rapidement. Nous voulons viser un emplacement parachain une fois que nous aurons fait nos preuves et que nous aurons les données, la communauté et les jetons pour le soutenir.

### La Fondation SubQuery passe à une DAO

Nous sommes encore loin du compte, mais nous avons toujours rêvé que SubQuery devienne un jour une DAO détenue par la communauté. Nous avons dit à plusieurs reprises que la communauté joue un rôle important dans SubQuery, tout ce que nous faisons est pour nos clients - devenir une DAO est l'incarnation de cet objectif.

Ceci étant dit, nous sommes encore loin du compte, et nous ne le ferons que lorsque nous serons absolument sûrs du succès et de l'avenir de SubQuery au sein de la communauté.

## À propos de SubQuery

[SubQuery](https://subquery.network) est une couche décentralisée d'agrégation, d'indexation & d'interrogation de données entre les blockchains de niveau 1 et les applications décentralisées. Le protocole fait abstraction des idiosyncrasies des données de la blockchain grâce au SDK SubQuery, ce qui permet aux développeurs de se concentrer sur le déploiement de leur produit principal sans avoir à gaspiller leurs efforts sur des technologies dorsales personnalisées.

[Linktree](https://linktr.ee/subquerynetwork) | [Site Web](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
