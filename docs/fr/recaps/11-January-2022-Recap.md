# Récapitulation de janvier

![](https://miro.medium.com/max/1400/1*2IMAaY-YYyAdl7YfZqHTAg.png)

Bonjour à tous, et bienvenue en 2022 ! L'année dernière a été énorme pour nous à SubQuery, mais après des vacances d'été bien nécessaires ici en Nouvelle-Zélande, l'équipe est bien reposée et énergisée par le potentiel qui nous attend. Cette année sera l'année de la révolution des données décentralisées !

Comme toujours, nous divisons notre mise à jour mensuelle en trois sections : la communauté, le développement du produit principal et le réseau SubQuery.

## Communauté

La communauté SubQuery est en pleine expansion en termes de nombre de membres et de régions couvertes ! Par conséquent, nous avons beaucoup de choses à dire dans ce domaine.

### SubQuery s'associe aux meilleures équipes de Polkadot pour des primes techniques via le programme SubQuery Grants

Le mois dernier, nous avons lancé le programme SubQuery Grants, un accélérateur non dilutif destiné à aider les développeurs de notre communauté à créer la prochaine génération de dApps. Ce mois-ci, nous avons discuté avec nos partenaires pour publier une première série de primes en partenariat avec Moonbeam, Acala, Astar et Bifrost comme projets d'inspiration. Toutes les candidatures sont ouvertes dès maintenant et, en prime, si votre candidature est retenue, vous aurez l'occasion de travailler en étroite collaboration avec l'équipe de parachain qui a proposé le défi !

Les candidats intéressés par l'une de ces primes sont encouragés à soumettre leur proposition avec le budget nécessaire pour accomplir la tâche et les autres exigences [ici](https://docs.google.com/forms/d/e/1FAIpQLSfmMazkebKwNTWThBkVGaxf2Bg8s4aWZ0ZhwiMCtc9kv4sJHQ/viewform). En outre, nous avons hâte d'annoncer la première série de bénéficiaires de SubQuery en février.

[Plus d'informations ici](../blogs/20220127-grants-bounties.md)

### SubQuery célèbre les gagnants du hackathon Gitcoin GR 12

[SubQuery s'est associé à Gitcoin en décembre](../blogs/20211120-gitcoin12-hackathon.md) pour parrainer cinq défis d'une valeur de 37 000 dollars américains (la plus grande cagnotte du défi), invitant les développeurs à construire des outils utiles, des tableaux de bord et même à étendre SubQuery à une autre blockchain de couche 1.

![](https://miro.medium.com/max/1400/1*BUq3ah1ULNnvLjqxv_vzlQ.png)

[Sam Zou](https://twitter.com/zoujialiu), PDG et fondateur de SubQuery, a déclaré : "_SubQuery est ravi des résultats du hackathon Gitcoin GR12. Notre mission repose sur l'existence d'un réseau de développeurs habilités à créer et à innover au sein de l'écosystème Substrate/Polkadot. Ce partenariat a permis à des développeurs motivés du monde entier de créer les applications de demain. Nous sommes ravis d'aider les gagnants des défis à développer leurs idées encore plus loin_"

Récemment, nous avons couvert les nombreux gagnants qui ont participé à ce hackathon et les projets étonnants qu'ils ont construits dans [cette writeup détaillée](../blogs/20220120-gr12-winners.md). Nous avons été époustouflés par la qualité et les progrès réalisés par les projets soumis en si peu de temps et nous sommes heureux d'inviter plusieurs d'entre eux à participer à notre programme de subventions.

[Plus d'informations ici](../blogs/20220120-gr12-winners.md)

### Hero Course Chine

Notre Hero Course réalisé en partenariat avec OneBlock+ a commencé début janvier et nous avons déjà diffusé trois leçons à plus de 200 étudiants ! Rejoignez la Communauté OneBlock+ pour rejoindre ce cours ou les heures de bureau. La Chine est une région stratégiquement importante pour SubQuery, mais nous prévoyons de lancer de nombreux autres cours régionaux pour développeurs bientôt - contactez-nous si vous pouvez nous aider à le faire !

![](https://miro.medium.com/max/1400/1*_8N000hX1WBM79ZbFyhvYQ.png)

## Développement du produit de base

### Support multi-chaîne

SubQuery est originaire de Polkadot, c'est notre maison et nous avons travaillé dur pour établir des relations dans cet écosystème. Le principe de base de Polkadot est de créer une communauté florissante de développeurs, d'utilisateurs et d'entreprises qui exploiteront son interopérabilité multi-chaîne. Nous sommes fidèles à cette vision et nous croyons également que Polkadot sera un acteur de premier plan dans cette initiative.

Mais nous croyons en un avenir multichaîne, nous savons qu'il y aura de nombreuses blockchains interopérables différentes travaillant ensemble pour résoudre différents problèmes. Notre plan à long terme a toujours été de prendre SubQuery et de l'adapter pour qu'il fonctionne pour d'autres blockchains qui n'ont pas de solution d'indexation actuelle. L'approche multi-chaînes que nous avons dû adopter pour Polkadot signifie que nous sommes particulièrement bien placés pour relever ce défi.

Nous sommes en train de finaliser le travail sur la première des 5 nouvelles chaînes de niveau 1 que SubQuery indexera, nous sommes impatients de l'annoncer bientôt !

![](https://miro.medium.com/max/1400/1*jD1n5MSjeatjiaF5hY-Wjg.png)

### Amélioration des performances de SubQuery

La vitesse d'indexation de SubQuery est en constante amélioration, c'est une préoccupation constante de notre équipe de développement. Notre support avancé des dictionnaires le permet. Les dictionnaires accélèrent votre projet de plusieurs fois et vous permettent d'indexer toute la chaîne Polkadot en quelques minutes, et non en quelques heures (selon la complexité de votre projet).

Pour illustrer l'étendue du support que SubQuery offre à l'écosystème Polkadot, nous hébergeons et gérons actuellement des dictionnaires sur 31 réseaux différents, représentant la majorité des principaux parachaînes Polkadot/Kusama.

![](https://miro.medium.com/max/1400/1*WeMY5WnWZ_jvllxidhycUA.png)

### Registre de modèles SubQuery

**29 réseaux sont couverts par des modèles**

La commande `subql init` est familière à tous ceux qui ont construit un projet SubQuery ; elle représente une toile blanche - des possibilités illimitées. Nous sommes conscients que nous pouvons faire mieux pour aider les autres à démarrer, plutôt qu'une toile vierge, les développeurs veulent un échafaudage vierge, où tout le code passe-partout est déjà écrit.

Aujourd'hui, lorsque vous écrivez `subql init`, on vous présente une liste de 29 réseaux à partir desquels on vous fournit un échafaudage précréé avec tous les points d'extrémité corrects, les liens du dictionnaire et même les définitions des types. Cela élimine l'une des étapes les plus difficiles lors du lancement d'un nouveau projet SubQuery et facilite et accélère la création de votre prochain grand dApp.

### Fonctionnalités d'agrégation de données

SubQuery prend désormais en charge les fonctions d'agrégation GraphQL avancées pour vous permettre d'effectuer un calcul sur un ensemble de valeurs pendant votre requête. Ces fonctions offrent à nos clients un ensemble plus riche d'informations et de calculs à partir de leur ensemble de données existant. Par exemple, avec une seule requête, vous pouvez calculer le montant médian de la contribution pour chaque crowdloan, réparti par date de contribution.

[Pour en savoir plus sur l'utilisation de ces fonctionnalités, consultez notre documentation mise à jour.](https://doc.subquery.network/query/aggregate/)

### SubQuery s'associe à Darwinia Network pour construire l'outil CLI de SubQuery

Darwinia s'est associé à SubQuery pour créer la pléthore d'applications qui seront nécessaires pour offrir une expérience utilisateur optimale pour les interactions inter-chaînes. Cela inclut une nouvelle [Smart App qui est un hub central](https://apps.darwinia.network/) pour gérer toutes les interactions du réseau Darwinia, y compris la gouvernance, le staking, l'exploration des chaînes et plus encore. Cette application utilise une quantité considérable de [données SubQuery pour montrer les données historiques et les actions](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery travaillera en étroite collaboration avec l'équipe de Darwinia pour faire de cette application la meilleure expérience de tout l'écosystème Polkadot.

![](https://miro.medium.com/max/1200/1*bL2Csj9qyamD7txAheCTIg.gif)

Darwinia a également travaillé en étroite collaboration avec l'équipe SubQuery pour [créer un outil CLI](https://github.com/fewensa/subquery-cli) pour le service géré SubQuery[(https://project.subquery.network)](https://project.subquery.network). Vous pouvez utiliser ce [CLI](https://github.com/fewensa/subquery-cli) pour créer un projet SubQuery et déployer automatiquement une nouvelle version sur le slot de staging ou de production. En outre, vous pouvez récupérer des informations, y compris l'état détaillé de la synchronisation et les journaux de votre projet en cours, qui est hébergé gratuitement dans SubQuery Projects. [Plus d'informations ici](../customer_announcements/20220125-subquery-partners-with-darwinia-network-to-build-subquerys-cli-tool.md)

## Réseau SubQuery

Lors du dernier appel à la communauté, nous avons abordé quelques détails importants concernant le prochain réseau de test SubQuery. Il s'étalera sur au moins trois saisons, chaque saison testant différents aspects du réseau :

- Saison 1 : test alpha précoce d'un nombre limité de fonctionnalités avec un nombre restreint de participants.
- Saison 2 : test bêta à grande échelle d'un plus grand nombre de fonctionnalités avec des centaines de participants.
- Saison 3 : Réseau de test public complet pour les tests de charge et d'échelle avec des milliers de participants.

Chaque saison comportera plusieurs défis que vous pourrez relever et qui pourront donner lieu à de véritables récompenses SQT. Attendez-vous à ce que le coup d'envoi soit donné ici en mars !

## Mise à jour de la feuille de route

En octobre dernier, nous avons publié notre [feuille de route technique](https://blog.subquery.network/blogs/20211029-roadmap-october.html) pour l'année à venir pour SubQuery, et il est grand temps de faire le point sur ce que nous faisons ici.

![](https://miro.medium.com/max/1400/1*2a3SGrW-OG5pbw67jsavvw.jpeg)

Comme vous pouvez le voir dans la feuille de route originale ci-dessus, nous avons réalisé l'ensemble des étapes 0 et 1, et nous progressons bien sur l'étape 2. Nous avons même livré certaines fonctionnalités relatives à notre service hébergé beaucoup plus tôt que prévu en raison de l'ampleur des demandes adressées actuellement à [nos entreprises clientes](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html).

## Autres choses que vous avez pu manquer

- Nous aurons des heures de bureau hebdomadaires sur notre serveur Discord ! Rejoignez les "heures de bureau" de SubQuery sur notre canal Stage, où vous pourrez discuter avec l'équipe dans un environnement décontracté.
- Nous avons organisé un QnA en russe avec James et Dmytro sur Discord où toutes les questions ont été posées et répondues en russe. Faites-nous savoir quelle langue vous aimeriez entendre la prochaine fois.

P.S.

N'oubliez pas de rejoindre notre [Discord](https://discord.com/invite/subquery) et nos [canaux sociaux](https://linktr.ee/subquerynetwork) pour rester au courant de nos dernières nouvelles et annonces.

L'équipe SubQuery

[Linktree](https://linktr.ee/subquerynetwork) | [Site Web](https://subquery.network/) | [Discord](hello@subquery.network) | [Telegram](https://discord.com/invite/78zg8aBSMG) | [Twitter](https://t.me/subquerynetwork) | [LinkedIn](https://twitter.com/subquerynetwork) | [YouTube](https://matrix.to/#/#subquery:matrix.org)
