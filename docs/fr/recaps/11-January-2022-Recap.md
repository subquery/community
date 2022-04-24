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

[SubQuery partnered with Gitcoin in December](../blogs/20211120-gitcoin12-hackathon.md) to sponsor five challenges to a value of USD$37,000 (the largest prize pool in the challenge), inviting developers to build useful tools, dashboards and even extend SubQuery to another Layer-1 blockchain.

![](https://miro.medium.com/max/1400/1*BUq3ah1ULNnvLjqxv_vzlQ.png)

[Sam Zou](https://twitter.com/zoujialiu), PDG et fondateur de SubQuery, a déclaré : "_SubQuery est ravi des résultats du hackathon Gitcoin GR12. Notre mission repose sur l'existence d'un réseau de développeurs habilités à créer et à innover au sein de l'écosystème Substrate/Polkadot. Ce partenariat a permis à des développeurs motivés du monde entier de créer les applications de demain. Nous sommes ravis d'aider les gagnants des défis à développer leurs idées encore plus loin_"

Recently we’ve covered the many winners that participated in this hackathon and the amazing projects that they have built in [this detailed writeup](../blogs/20220120-gr12-winners.md). Nous avons été époustouflés par la qualité et les progrès réalisés par les projets soumis en si peu de temps et nous sommes heureux d'inviter plusieurs d'entre eux à participer à notre programme de subventions.

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

**29 networks are covered by templates**

The `subql init` command is a familiar one for anyone that has built a SubQuery project; it represents a blank canvas — limitless opportunities. We are aware that we can do better to help others get started, rather than a blank canvas developers want a blank scaffold, where all the boiler-plate code is already written.

Today when you write `subql init`, you are presented with a list of 29 networks from which you are provided a pre-created scaffold with all the correct endpoints, dictionary links, and even type definitions. This eliminates one of the most difficult steps when starting a new SubQuery project and makes building your next big dApp that much easier and faster.

### Fonctionnalités d'agrégation de données

SubQuery now supports advanced GraphQL aggregate functions to allow you to perform a calculation on a set of values during your query. These functions provide our customers a richer set of insights and calculations from their existing data set. For example with a single query you can calculate the median contribution amount for each crowdloan broken down by contribution date.

[Read more about how to use these features in our upgraded docs.](https://doc.subquery.network/query/aggregate/)

### SubQuery s'associe à Darwinia Network pour construire l'outil CLI de SubQuery

Darwinia has partnered with SubQuery to build the plethora of applications that will be needed to provide the ultimate user experience for cross chain interactions. This includes a new [Smart App that is a central hub](https://apps.darwinia.network/) to manage all Darwinia network interactions including governance, staking, chain exploration and more. This app uses a considerable amount of [SubQuery data to show historic data and actions](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery will be working closely with the team at Darwinia to make this the best experience in the entire Polkadot ecosystem.

![](https://miro.medium.com/max/1200/1*bL2Csj9qyamD7txAheCTIg.gif)

Darwinia have also been working closely with the SubQuery team to [build a CLI tool](https://github.com/fewensa/subquery-cli) for the SubQuery managed service (https://project.subquery.network). You can use this [CLI](https://github.com/fewensa/subquery-cli) to create a SubQuery project and automatically deploy a new version to either the staging or production slot. Additionally you can retrieve information including the detailed syncing status and logs from your running project that is hosted for free in SubQuery Projects. [Read more here](../customer_announcements/20220125-subquery-partners-with-darwinia-network-to-build-subquerys-cli-tool.md)

## Réseau SubQuery

Last community call we walked through a few important details of the upcoming SubQuery test network. It will be run over at least three seasons, each season will test different aspects of the network:

- Saison 1 : test alpha précoce d'un nombre limité de fonctionnalités avec un nombre restreint de participants.
- Saison 2 : test bêta à grande échelle d'un plus grand nombre de fonctionnalités avec des centaines de participants.
- Saison 3 : Réseau de test public complet pour les tests de charge et d'échelle avec des milliers de participants.

Each season will have multiple challenges that you can complete which may result in real SQT rewards. Expect things to kickoff here in March!

## Mise à jour de la feuille de route

Last October we released out [technical roadmap](https://blog.subquery.network/blogs/20211029-roadmap-october.html) with the next year mapped out for SubQuery, we’re overdue to address exactly how we’re doing here.

![](https://miro.medium.com/max/1400/1*2a3SGrW-OG5pbw67jsavvw.jpeg)

As you can see in the original roadmap above, we’ve completed all of Milestone 0 and 1, and are making good progress on Milestone 2. We’ve even delivered some features relevant to our hosted service much earlier than expected due to the huge scale of requests currently going to [our enterprise customers](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html).

## Autres choses que vous avez pu manquer

- Nous aurons des heures de bureau hebdomadaires sur notre serveur Discord ! Rejoignez les "heures de bureau" de SubQuery sur notre canal Stage, où vous pourrez discuter avec l'équipe dans un environnement décontracté.
- Nous avons organisé un QnA en russe avec James et Dmytro sur Discord où toutes les questions ont été posées et répondues en russe. Faites-nous savoir quelle langue vous aimeriez entendre la prochaine fois.

P.S.

Remember to join our [Discord](https://discord.com/invite/subquery) and our [social channels](https://linktr.ee/subquerynetwork) to stay updated on our latest news and announcements.

The SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Email](hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
