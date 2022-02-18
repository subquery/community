# SubQuery поздравляет победителей хакатона Gitcoin GR 12

![](https://miro.medium.com/max/1400/1*MnMY9j3nasex9_9MNHUPtA.png)

SubQuery, ведущее решение для индексации данных в Polkadot, с радостью объявляет победителей [недавнего хакатона Gitcoin GR 12](https://gitcoin.co/hackathon/gr12?org=subquery). Gitcoin признан одним из выдающихся сообществ блокчейн разработчиков, ориентированных на создание комьюнити и приложений для Web3. [SubQuery заключила партнерское соглашение с Gitcoin в декабре](https://subquery.medium.com/subquery-announces-gitcoin-hackathon-16c9d18753a), чтобы спонсировать пять испытаний на сумму 37000 долларов США (самый большой призовой фонд в соревновании), предлагая разработчикам создавать полезные инструменты, информационные панели и даже расширить исполььзование SubQuery на другой блокчейн первого уровня.

Хакатон проходил с 1 по 16 декабря 2021 года, с участием ведущих блокчейн проектов, таких как Moonbeam, Astar и Acala, которые также внесли свой вклад в различные призовые фонды. Призы присуждались тем, кто успешно завершил проекты в соответствии с заранее установленными стандартами и предложил наиболее креативные идеи или те или иные области для улучшения ядра SubQuery SDK. Ниже приведен краткий обзор по испытаниям:

- [Создать унифицированный обозреватель блоков, объединяющий данные Substrate и EVM от Moonbeam и Astar в одно простое в использовании приложение](https://gitcoin.co/issue/subquery/grants/1) — 12000 долларов США [при поддержке Moonbeam и Astar]
- [Создать панель управления DeFi-хаба, вдохновленную Zapper.fi или defisaver.com](https://gitcoin.co/issue/subquery/grants/2) — 8000 долларов США [при поддержке Acala]
- [Создать панель управления стейкингом, которая показывает лучшие возможности для стейкинга в Polkadot и его различных парачейнах](https://gitcoin.co/issue/subquery/grants/3) — 3000 долларов США
- [Создать обозреватель рынка для всех NFT на основе протокола RMRK](https://gitcoin.co/issue/subquery/grants/4) — 2000 долларов США
- [Расширить службу @subql/node для индексации данных из другого блокчейна первого уровня](https://gitcoin.co/issue/subquery/grants/5) — 12000 долларов США

## Унифицированный обозреватель блоков EVM и Substrate

Экосистема Polkadot/Kusama состоит из блокчейнов (называемых парачейнами), построенных с использованием Substrate, который, в свою очередь, использует API Substrate. Однако некоторые парачейны, такие как Moonbeam и Astar, обеспечивают полную совместимость с Ethereum благодаря наличию полностью совместимого компонента EVM. Одновременная видимость данных Substrate и EVM в настоящее время является сложной задачей, что приводит к двум изолированным ситуациям с Moonbeam и Moonriver. Вы должны выбрать между стороной Substrate (например, Subscan) и стороной EVM (например, Moonscan и Blockscout).

Эта задача была предназначена для реализации огромной возможности создать единое место для понимания всей истории активности в учетной записи. Например, чтобы увидеть действия по стейкингу и участию в управлении протоколом, а также ERC20 переводы в едином пользовательском интерфейсе. Это могло бы стать приложением, ежедневно используемым огромными сообществами в Moonbeam, Astar и многих других парачейнах, совместимых с EVM, которые набирают популярность.

![](https://miro.medium.com/max/1400/0*b_o0NDpJOCv0QvXS)

Победителем [этого конкурса](https://gitcoin.co/issue/subquery/grants/1/10002717200027175) стал @bizzyvinci, который [создал фронтенд обозреватель, работающий на Heroku](https://moonriver-explorer.herokuapp.com/). Учитывая, что реализация этой задачи является довольно сложным испытанием, неудивительно, что она еще не завершена на 100%, но мы рады поддержать прогресс в этой революционной инновации и помочь распространить ее на другие EVM цепочки.

@bizzyvinci сказал следующее: "Я создал [Moonriver Explorer](https://moonriver-explorer.herokuapp.com/), и это был потрясающий опыт. Первым шагом было изучение SubQuery, и, черт возьми, у них есть потрясающая документация, которая сопровождается репозиториями с шаблонами. Документация охватывает все, что нужно для начала работы, и хорошо объясняет каждый аспект, например, файл манифеста, схему graphql и другие."

## Karura/Acala DeFi панель инструментов

Acala и Karura представляют огромное видение будущего DeFi, поэтому здесь есть большие возможности для создания ценных инструментов для экосистемы. Это испытание потребовало от разработчиков создания DeFi инструментов для сообщества Karura/Acala, вдохновленных такими сервисами, как [Zapper.fi](http://zapper.fi/) и [defisaver.com](http://defisaver.com/), с использованием служб индексирования данных SubQuery.

Победителем в [этой задаче](https://gitcoin.co/issue/subquery/grants/2/100027176) стал Web3Go, который составил очень хорошую сводку [позиций залогового долга Acala (CDPs)](https://web3go.xyz/#/CDPDetail). Чтобы пользователи могли минтить стабильные монеты kUSD на Karura, они должны сначала внести токены одного из принятых залоговых активов (например, KSM). Как только пользователь сделает это, параметр минимального коэффициента залога определяет минимальную сумму залога, необходимую пользователю для выпуска kUSD. Если рыночная цена залогового актива CDP падает достаточно низко, CDP можно считать "небезопасным."

![](https://miro.medium.com/max/1400/0*l7GA1axntiHCINRM)

В интерфейсе Web3Go четко представлены все позиции CDP, их соотношение и статус их безопасности. Для каждой позиции он также предоставляет информацию об истории позиции и легко позволяет другим отслеживать этот финансовый инструмент. <iframe width="560" height="315" src="https://www.youtube.com/embed/hc3YDjv6dkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

## Панель управления стэкинга Polkadot

Staking is a key way to put your DOT and KSM tokens to use, but currently the UX for staking is difficult to understand and results in most users making uneducated choices.

This challenge’s objective was to combine on-chain data and an intuitive user experience, to help users understand the best estimated staking yield, compare the historical performance of validators, and show users what their return on investment might be.

Ashik built PolkStakes, a [Polkadot validator ranking website](https://polkstakes.vercel.app/) that fetches all validators and shows a cleanly organised list of validators in Polkadot with PolkStake’s own rating (based on previous era performance, commissions, payout, and staking rewards etc). It’s a clean and simple UI that really impressed us.

![](https://miro.medium.com/max/1400/0*Kaho31-nn-ly8tFS)

“_Subquery reduces the effort in manually indexing on-chain data. Since it offers a graphql endpoint, we can query data easily. It reduces the effort in maintaining a backend and database. Now, data aggregation for calculating Polkstakes ranking is done in UI. This has to be moved to SubQuery. Also, better visualization has to be done for indexed data and more accurate estimated yield prediction has to be added._” — Ashik from Polkdata

The excellent SubVis team also built a [beautiful Polkadot staking dashboard](https://polkadot-staking-dashboard.vercel.app/) that shows total staking statistics over time and the validator performance in one place. The new staking features join the existing auction and crowdloan pages that SubVis are well known for.

![](https://miro.medium.com/max/1400/0*uPDQdMug2JaZwMbA)

Finally, Web3Go put in another excellent entry with detailed staking statistics on Moonriver. They provide information even about the delegators for each collator, the historic rewards provided by each collator, and even the actions that collators take. They provide the additional benefits of being able to show staking history for your own wallet address.

![](https://miro.medium.com/max/1400/0*jQgOnvcaXt6cprJR)

## RMRK NFT Marketplace Explorer

RMRK is an advanced protocol of NFT legos making NFTs that are so much more than just a jpeg. The team at RMRK are bringing new standards of NFTs to the DOT ecosystem, and leading the way in building the next generation.

This challenge called for the creation of a detailed dashboard that tracks the evolution of all RMRKs (potentially focusing on [Kanarias](https://kanaria.rmrk.app/)), including transfers, emote history, and more across RMRK2. This dashboard had to use a RMRK2 focused SubQuery project.

The winner of [this challenge](https://gitcoin.co/issue/subquery/grants/4/100027174) was another excellent dashboard from Web3Go called the [NFT Garden](https://web3go.xyz/#/NFTProfiler). It includes in depth details about each NFT collection, such as average prices, volumes, price ranges, and all transactions for each single item. Additionally, there are some interesting visualisations on all the traits within NFTs.

![](https://miro.medium.com/max/1400/0*1_mUnNIBYI84G_qs)

“_Since the inception of Web3Go, we have been using SubQuery as the underlying architecture for data indexing. The development kit provided by SubQuery has proven to be very suitable for our team to quickly develop, deploy and upgrade projects, which is also the key to our good results on the Gitcoin Hackathon. In the next step, we will use Subquery to develop dashboards for all projects on the Polkadot & Kusama parachains, which will involve Defi, NFT, and Tokens!_” says Hao Ding from Web3Go.

## Extend SubQuery to another Layer-1 Blockchain

SubQuery is native to Polkadot, it’s our home and we’ve worked hard to build relationships in this ecosystem. In spite of this we also believe in a multi chain future, as we know that there are going to be many different blockchains working together to solve different problems. Our long term plan is to take SubQuery and to adapt it to work for other blockchains that don’t have a current indexing solution to help developers build new dApps.

The winner of [this US$12,000 challenge](https://gitcoin.co/issue/subquery/grants/5/100027175) was Naveen who extended SubQuery to index the Terra blockchain. This was implemented by creating a fork that extends the node package of the official subql implementation to index Terra. Naveen is continuing to work on this and you can expect news soon about SubQuery’s plans for support of other layer 1 chains outside of Polkadot. <iframe width="560" height="315" src="https://www.youtube.com/embed/K_pjh5OC95A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

“_I have been studying a bunch of indexers in the past few months and went as far as building an indexer from scratch. That might be the reason why SubQuery caught my attention in the Gitcoin GR12 Hackathon. I took up the task of extending SubQuery to index Terra. I did not believe that I could pull this off in 15 days. But, SubQuery was architected in such a magnificent manner that it allowed me to create a mental picture of what is happening under the hood very quickly. I hacked together a working solution just in time and I am currently working with SubQuery to merge the Terra indexer into the subql package. In the foreseeable future, I will be continuing to work with SubQuery to maintain and scale the project and possibly build indexers for several other layer 1 chains_” said Naveen.

[Sam Zou](https://twitter.com/zoujialiu), the CEO and Founder of SubQuery commented, “_SubQuery is delighted with the results of the Gitcoin GR12 Hackathon. Our mission relies on having a network of developers who are empowered to create and innovate within the Substrate/Polkadot ecosystem. This partnership provided opportunities for motivated developers around the world to build the applications of tomorrow. We are excited to nurture the winners of the challenges to develop their ideas even further_”

Following on from this successful Hackathon, SubQuery would like to encourage developers who would like to learn more about how to build applications with SubQuery to [register for our free online “Hero Course”, or apply for our recently announced Grants Programme](https://subquery.coassemble.com/unlock/dOKZW6O#/).

---

## About SubQuery

[SubQuery](https://subquery.network/) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. This service unlocks blockchain data and transforms it to a queryable state so that it can be used in intuitive applications. It allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The upcoming SubQuery Network will decentralize and tokenize the ecosystem to allow everyone to participate in the web3 data revolution.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
