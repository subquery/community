# Récapitulatif de février

![](https://miro.medium.com/max/1400/1*T3DLiAKSIy-AjRia_JJjow.png)

Le mois de février a filé à toute allure pour l'équipe de SubQuery. Nous avons été occupés sur tous les fronts à préparer notre TGE et à servir tous nos clients existants, y compris les équipes de pointe de Polkadot.

Nous avons beaucoup de travail passionnant en cours que nous sommes impatients de partager dans les semaines et les mois à venir!

## Communauté

Ce mois-ci, nous avons enfin dépassé les 30 000 followers organiques sur Twitter et notre Discord compte désormais plus de 15 000 membres actifs qui s'entraident. Il ne suffit pas de construire un outil ou une application en web3, il faut aussi créer une communauté autonome et nous y travaillons dur chez SubQuery !

### SubQuery annonce la première promotion de bénéficiaires de subventions SubQuery

Quatre équipes ont été sélectionnées pour former la toute première promotion de bénéficiaires de subventions SubQuery. Ces équipes sont [Alphabit](https://www.polkadata.xyz/), [Zoombies](https://zoombies.world/), [Dapplooker](https://dapplooker.com/) et [Dotsama](http://dotsama.ai/). [Le programme de subventions SubQuery de 500 000 USD a été lancé en décembre 2021](https://subquery.network/grants) avec la vision d'offrir des opportunités aux développeurs de blockchain, aux membres de la communauté et aux participants de l'écosystème plus large pour créer des idées innovantes ou à fort potentiel qui tirent parti des outils d'indexation de données open-source de SubQuery pour soutenir des applications décentralisées de pointe.

![](https://miro.medium.com/max/1400/1*tBnWK4svpGbGuP3mCXyGDg.png)

Alphabit, s'efforce de donner du pouvoir à l'investisseur indépendant en lui offrant la possibilité de suivre et d'analyser les portefeuilles et les investissements des fonds et des grands négociants ou "baleines". _« Les conseils d'affaires et le support technique de SubQuery ont complètement dépassé nos attentes concernant le support que nous pourrions recevoir en tant que petite startup d'analyse » --- Michael Anderson, Développement des affaires & Partenariats Stratégiques (Alphabit)_

![](https://miro.medium.com/max/1400/1*TpHBDhA7WqNGTOxz9LpifQ.png)

Pendant ce temps, Zoombies a soumis une proposition dans l'espoir d'utiliser SubQuery pour accélérer son objectif d'approfondir la valeur du monde croissant des jetons de collection "play-to-earn" (P2E). Leur projet permettra d'accéder à l'historique complet des données relatives aux événements passés dans un jeu pour produire des vues significatives et enrichir l'expérience du joueur. _"Le programme de subventions de sous-requête a été un processus de récompense guidé étape par étape" --- Ryan Price, PDG (Zoombies)_

![](https://miro.medium.com/max/1400/1*4rPD0g-pC3MOU5M5vAtS4w.png)

Dapplooker vise à doter les projets de Polkadot d'outils d'analyse magnifiques et faciles à construire tels que les explorateurs, les graphiques et les tableaux de bord. Ces précieux indicateurs seront construits sur des projets SubQuery pour récupérer les données requises et les présenter au public dans un format intuitif et esthétique.

![](https://miro.medium.com/max/1400/1*kC8QYVvlUZwUfgXTBFQbgg.png)

L'équipe de Dotsama est également déterminée à apporter de riches informations à l'investisseur moyen dans l'écosystème Polkadot / Kusama, en visant à être un guichet unique d'analyse avec des outils permettant d'identifier les tendances et les opportunités d'investissement précoce. "_En participant au programme de subventions SubQuery, nous ne cherchons pas seulement à obtenir des conseils techniques et stratégiques, mais aussi à faire partie de cette communauté et à contribuer à accélérer le mouvement." --- Sudarshan Acharya, Fondateur (Dotsama)_

En plus des subventions générales comme celles accordées à notre première promotion, il existe également des [bourses techniques en cours en partenariat avec les principales équipes parachain de Polkadot](../blogs/20220127-grants-bounties.md) telles que Moonbeam, Acala, Astar et Bifrost sur [le site web de SubQuery](https://subquery.network/grants)

## SubQuery Network

### SubQuery publie une mise à jour de son livre blanc

[Le livre blanc SubQuery](https://static.subquery.network/whitepaper.pdf) est un document qui décrit notre cadre stratégique pour le réseau décentralisé SubQuery et son jeton SQT. Depuis la publication originale en juin 2021, nous avons connu une croissance significative de notre base de clients et de notre communauté et nous avons fait d'énormes progrès dans la construction du réseau SubQuery. À partir de ces sources, nous avons été inspirés pour améliorer et innover, et cela culmine dans la dernière version de notre [livre blanc](https://static.subquery.network/whitepaper.pdf).

Le [livre blanc mis à jour](https://static.subquery.network/whitepaper.pdf) maintient la conviction de SubQuery que les services de données de demain doivent être multi-chaînes, simples et flexibles. La nouvelle version explique en détail comment le réseau SubQuery tient compte de ces considérations dans la conception économique des jetons, tout en permettant aux utilisateurs expérimentés d'exécuter des services de niveau entreprise.

Le livre blanc contient de nouvelles informations importantes sur l'innovation de SubQuery en matière de modèles de paiement, qui offrent à tous les participants divers moyens flexibles d'effectuer des transactions avec le jeton SubQuery (SQT).

![](https://miro.medium.com/max/1400/1*EhLefs3-lb47y2LC4Z6jWA.png)

[Read more here](../blogs/20220216-whitepaper-update.md)

## Core Product Development

### Dynamic Data Sources

This is a signifiant improvement for the rapidly growing number of SubQuery's EVM customers. SubQuery is the only data indexing tool that allows indexing of both Substrate and EVM data from Polkadot parachains in a single location.

In certain situations, you don't know the parameters for a data source when the SubQuery project starts, for example in a DEX you don't know what new trading pairs will be enabled when you write your SubQuery project. SubQuery's [support for dynamic data sources](https://university.subquery.network/build/dynamicdatasources.html) allows developers to create new data sources from new smart contracts dynamically using templates to automate the indexing of new contracts.

[Read more here](https://university.subquery.network/build/dynamicdatasources.html)

## General Customer Announcements

### SubQuery Data Powers Nova Wallet --- a next-gen mobile wallet for the Polkadot & Kusama ecosystem

![](https://miro.medium.com/max/1400/1*NkYmEpYLpZYFRkANrvpwPw.png)

Many customers, including Nova, rely on SubQuery to provide mission critical data to their production apps. These are huge applications that the Polkadot community use on a daily basis and must be online at all times. Nova know that they can trust SubQuery to provide reliable and scalable services to their applications though our [enterprise level features](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html) in our [managed service](https://project.subquery.network/). Nova are a key user of SubQuery's intelligent routing which dynamically routes a user's request to the nearest SubQuery cluster resulting in higher reliability and superior performance than any other option on the market.

[Read more here](../customer_announcements/20220210-nova-wallet.md)

### SubQuery to help power Parami Protocol's Web 3 advertising technology

[Parami Protocol](https://parami.io/) is developing an innovative new technology for a user-centric, tokenised advertising economy: Ad 3.0.

> _"Parami's vision is to build a user-centric advertising economy for web3 and in order to make this a reality, we turned to SubQuery as our trusted data partner. SubQuery provides the backbone of our service by delivering the query part of our Command and Query Responsibility Segregation (CQRS) pattern to update our core database. Parami takes advantage of SubQuery's superior indexing speed to track the price of NFT fragments and to build a secondary index of on-chain data all in one sentence. We are looking forward to building AD 3.0 for Web 3.0 leveraging SubQuery's innovative technology."_

~ Dorian the Co-Founder of Parami Protocol

[Read more here](../customer_announcements/20220222-parami.md)

## Other things you might have missed

- We had an AMA with [Talisman](https://talisman.xyz/) and a Polish Q&A on our [Discord server](https://discord.com/channels/796198414798028831/796198414798028834)
- Watch the recording of our [February community call](https://www.crowdcast.io/e/subquery-sessions-february) on Crowdcast
- New grants with Phala in our [SubQuery Grants Programme](https://subquery.network/grants)

P.S.

Remember to join our [Discord](https://discord.com/invite/subquery) and [our social channels](https://linktr.ee/subquerynetwork) to stay updated on our latest news and announcements.

The SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
