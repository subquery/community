# The SubQuery Terra Onboarding Guide

![](https://miro.medium.com/max/1400/1*DiTE9KuzH0xHLojzGWxOuw.png)

В течение довольно долгого времени мы разрабатывали и совершенствовали поддержку Terra, а также тестировали ее с ключевыми партнерами по запуску разработки (следите за анонсами в ближайшие дни). Этот длительный период позволил нам стать чрезвычайно уверенными в масштабируемости, надежности и функциях, которые SubQuery предоставляет Terra на сегодняшний день. В этой статье мы делимся подробным руководством для разработчиков и дорожной картой, которые все сообщество Terra может использовать для решения своих потребностей в индексации данных.

Subquery - это гибкий и быстрый индексатор открытых данных. Наш открытый инструмент индексирования предназначен для того, чтобы помочь разработчикам создавать свой собственный API за считанные часы. Он предназначен для невероятно быстрого индексирования цепочек с помощью словарей (предварительно вычисленных индексов). Наш опыт работы с клиентами во всех вертикалях Polkadot (кошельки, сети, исследователи, NFT, DeFi, сканеры и т.д.) помог нам создать это.

Это все еще ранние версии, и, хотя мы заглядываем далеко за пределы "бета-версии", будем признательны, если о любых ошибках вы будете сообщать нашей команде для их оперативного устранения.

<iframe width="656" height="369" src="https://www.youtube.com/embed/dS7h3isQCeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Почему стоит использовать SubQuery?

Экосистема приложений преуспела в Terra, несмотря на серьезную нехватку некоторых ключевых инструментов разработчика и инфраструктурных сервисов. Это удивительно видеть, но главное, что это свидетельство упорства и изобретательности Lunatics в Terra. В большинстве случаев, когда мы спрашивали команды, как они решают свои потребности в индексации данных, это было:

- **Создание собственного решения:** Пользовательская реализация, выполняемая самостоятельно, созданная специально для вашего приложения. Но зачем изобретать велосипед заново? SubQuery фокусируется на создании надежного и быстрого открытого индексатора - мы здесь, чтобы сэкономить ваше время
- ** Разработка смарт-контрактов для запросов:** Некоторые команды даже внедряли пользовательские особенности в свои смарт-контракты, специально позволяющие выполнять более сложные запросы, специфичные для их прикладной логики.

В SubQuery есть SDK с открытым исходным кодом, который прост в использовании и работает молниеносно. Он предоставляет вам стандартную конечную точку GraphQL, но вы можете и просто запросить базу данных postgres напрямую. С его помощью вы можете индексировать уникальный набор данных из ваших собственных смарт-контрактов, что позволяет вам создавать превосходный продукт, который выбьет ваших конкурентов из колеи! Мы предоставляем вам гибкость в выборе необходимых вам данных в форме, которая лучше всего подходит для вас.

Надежность это ключевой фактор, поэтому вам нужна надежная и масштабируемая платформа для ее размещения. [Управляемый сервис SubQuery](https://subquery.network/managedservices) - это ведущее в отрасли решение для хостинга всех клиентов, которое обслуживает сотни миллионов ежедневных запросов в крупнейших проектах на Polkadot. Мы предоставляем нашим клиентам [корпоративного уровня](./20211228-enterprise-hosted.md) такие услуги, как выделенные базы данных, резервные кластеры, интеллектуальная многокластерная маршрутизация, а также расширенный мониторинг и аналитика. Все это поддержит ваше приложение, когда вы будете готовы, и будет масштабироваться вместе с вами.

И, наконец, через несколько месяцев вы сможете полностью децентрализовать свою инфраструктуру SubQuery с помощью сети SubQuery — будущего инфраструктуры Web3. Сеть Subquery будет индексировать и предоставлять данные о ваших проектах мировому сообществу стимулируемым и поддающимся проверке способом. Он предназначен для поддержки любого проекта SubQuery из любой сети layer-1, включая Terra, поэтому вы можете воспользоваться преимуществами масштаба объединенной сети SubQuery с момента запуска.

## Инструкции по установке

Сначала вам нужно будет установить последнюю версию @subql/cli через npm i -g @subql/cli@latest

Лучший способ - начать с [нашего начального проекта](https://github.com/subquery/terra-subql-starter), который содержит запущенный проект с примером всех функций сопоставления: Этот проект индексирует следующее:

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

[SubQuery](https://subquery.network/) is a blockchain developer toolkit enabling others to build Web3 applications of the future. A SubQuery project is a complete API to organise and query data from layer-1 chains. Currently servicing Polkadot, Substrate, Avalanche, and now Terra projects, this data-as-a-service allows developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The SubQuery Network proposes to enable this same scalable and reliable solution, but in a completely decentralised way.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
