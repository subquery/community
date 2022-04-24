# SubQuery offre à ses clients un support d'entreprise

![](https://miro.medium.com/max/1400/1*z_StqAT5KeaxQLBCm-xpRQ.jpeg)

Au fur et à mesure que notre communauté s'agrandit, nous voyons des centaines de déploiements et une augmentation exponentielle du trafic sur notre service hébergé chaque jour. The team at SubQuery are rising to this challenge however and are scaling our services to meet the unprecedented demand for our tools by our customers, while keeping our [hosted service](https://projects.subquery.network/) free.

Many customers now rely on SubQuery to provide mission critical data to their production apps. These customers represent some of the largest wallets ([Nova](https://novawallet.io/) and [Fearless](https://fearlesswallet.io/)), scanners ([Subscan](https://www.subscan.io/), [SubVis](https://www.subvis.io/), and [DotMarketCap](https://dotmarketcap.com/)), NFT platforms ([Kodadot](https://kodadot.xyz/) and [Yuser](https://yuser.co/)), and more. Ce sont d'énormes applications que la communauté Polkadot utilise quotidiennement et qui doivent être en ligne à tout moment.

Les performances et la fiabilité de notre service hébergé figurent en tête de notre liste de priorités depuis un certain temps déjà, ici à SubQuery. Notre équipe sœur est OnFinality, le plus grand fournisseur d'infrastructure de Polkadot, et nous avons donc une grande expérience dans ce domaine. Par conséquent, nous allons aujourd'hui vous présenter trois améliorations récentes qui feront de SubQuery la plateforme de données la plus fiable, la plus évolutive et la plus performante de Polkadot.

![](https://miro.medium.com/max/1200/1*QckhJzjQqw9czpBMRhXgXQ.gif)

## Dedicated Databases

Initialement, tous les projets SubQuery étaient déployés sur des bases de données partagées dans notre infrastructure afin d'économiser de l'argent et de permettre à notre service de rester gratuit. Cependant, les projets à fort trafic avec de grands ensembles de données risquaient d'étrangler les autres projets hébergés dans la même base de données.

Si vous élaborez un projet destiné à être utilisé en production, nous proposons une base de données dédiée hébergée dans nos clusters SubQuery qui peut donner à votre projet toutes les ressources dont il a besoin pour traiter des milliers de requêtes compliquées sans se soucier de l'impact des autres sur les performances.

Vous devez nous contacter à l'adresse <sales@subquery.network> si vous souhaitez passer à ce niveau. Nous répliquons vos données à partir de vos tables existantes afin que vous n'ayez pas à passer du temps à réindexer les données dont vous disposez déjà, ce qui permet une migration sans temps d'arrêt.

## Multiple Cluster Support

La résilience et la fiabilité sont primordiales pour SubQuery. Le fait de disposer d'un cluster redondant dans une autre partie du monde signifie que nous pouvons nous remettre rapidement des pannes du fournisseur de cloud computing qui mettent parfois des régions hors ligne.

De plus, lorsque vous faites une demande à un projet SubQuery dans notre service hébergé, la majorité du temps d'attente provient de la latence. La latence est le temps que met votre requête pour faire le tour du monde jusqu'au cluster SubQuery le plus proche, ce qui peut prendre jusqu'à une seconde ou deux pour certaines régions éloignées. Le fait d'avoir plusieurs clusters dans le monde nous permet de réduire la partie la plus importante du temps de la requête (la latence).

Nous avons mis en place plusieurs clusters dans différentes régions qui fournissent le même service. This work also includes a tool in [SubQuery Projects](https://project.subquery.network/) that allows you to deploy and manage your project across these clusters. Nous avons également mis en œuvre des processus qui garantissent la cohérence des bases de données dans les différentes régions, de sorte que, quel que soit le cluster auquel votre demande est adressée, les données que vous recevez sont cohérentes.

## Intelligent Routing

Une fois les clusters SubQuery exécutés dans différentes régions, la prochaine étape logique consiste à rendre cette fonctionnalité invisible pour vos utilisateurs. Vos utilisateurs ne devraient jamais avoir à décider vers quel cluster leurs demandes sont dirigées, SubQuery devrait automatiquement acheminer leurs demandes vers le cluster sain le plus proche. C'est ce que permet le routage intelligent de SubQuery.

Nous offrons à chaque client premium un point d'accès global unique auquel le routage intelligent est automatiquement appliqué à chaque demande. Ce service comprend une surveillance considérable qui envoie constamment des ping à chaque cluster pour vérifier sa santé et s'assurer qu'un utilisateur n'est jamais dirigé vers un cluster surchargé ou hors ligne. Le point de terminaison global optimise le routage de chaque demande vers le cluster le plus proche afin de garantir que vos utilisateurs bénéficient des meilleures performances de vos clusters.

![](https://miro.medium.com/max/1000/0*DNXDiABzli0et1MU)

En résumé, ces services nous permettent d'offrir notre service premium à davantage de clients en toute confiance. Nous travaillons avec chaque client pour comprendre son activité et ses objectifs, puis pour mettre en place un service répondant à ses besoins. SubQuery est le plus grand fournisseur de services de données de Polkadot, et ces caractéristiques montrent comment nous soutenons des milliers de projets communautaires en même temps que les plus grands projets de Polkadot.

## About SubQuery Network

SubQuery est le principal fournisseur de données de Polkadot, prenant en charge une couche d'indexation et d'interrogation entre les blockchains de couche 1 (Polkadot) et les applications décentralisées. Le service de données de SubQuery est utilisé par la plupart des sites Web de crowdloan et de vente aux enchères parachain de Polkadot et de Kusama.

Le protocole de SubQuery fait abstraction des idiosyncrasies des données de la blockchain grâce au SDK de SubQuery, ce qui permet aux développeurs de se concentrer sur le déploiement de leur produit principal sans gaspiller inutilement leurs efforts sur des technologies dorsales personnalisées.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG)| [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
