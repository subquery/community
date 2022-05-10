# Інструкції по адаптації SubQuery Terra

![](https://miro.medium.com/max/1400/1*DiTE9KuzH0xHLojzGWxOuw.png)

Протягом досить тривалого часу ми розробляли та вдосконалювали підтримку Terra за лаштунками та тестували її з ключовими партнерами з розробки (слідкуйте за оголошеннями найближчими днями). Цей тривалий період дозволив нам бути надзвичайно впевненими в масштабованості, надійності та можливостях, які SubQuery сьогодні пропонує Terra. В цій статті ми ділимося докладними інструкціями для розробників і планами для всієї спільноти Terra для вирішення своїх потреб в індексації даних.

SubQuery — це відкритий індексатор даних, який є гнучким і швидким. Наш відкритий інструмент індексування призначений для того, щоб допомогти розробникам створити власний API за кілька годин, і він призначений для неймовірно швидкої індексації чейнів за допомогою словників (попередньо обчислених індексів). Наш досвід роботи з клієнтами в усіх галузях Polkadot (гаманці, мережі, провідники, NFT, DeFi, сканери тощо) допоміг нам створити це.

Це все ще в ранніх версіях, і, хоча ми далеко за межами «бета-версії», ми будемо вдячні, якщо ви дасте нам знати будь-які помилки, щоб команда могла швидко їх усунути.

<iframe width="656" height="369" src="https://www.youtube.com/embed/dS7h3isQCeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Чому варто використовувати саме SubQuery?

Екосистема додатків процвітала в Terra, всупереч тому, що існує серйозна нестача деяких ключових інструментів для розробників та інфраструктурних послуг. Це дивовижно побачити, і це свідчить про драйв і винахідливість божевільних у Terra. У більшості випадків, коли ми запитували команди, як вони вирішують свої потреби в індексації даних, це було приблизно ось так:

- Створення власного рішення: індивідуальна реалізація, яка виконується самостійно, створена спеціально для вашої програми. Але навіщо винаходити велосипед? SubQuery зосереджується на створенні надійного та швидкого відкритого індексатора — ми тут, щоб заощадити ваш час
- **Designing smart contracts for queries:** Some teams were even implementing custom quirks in their smart contracts to specifically allow for more advanced queries specific to their application logic.

At SubQuery we have an open-source SDK that is easy to use and lightning quick. It provides you with a standard GraphQL endpoint, or you can just query the postgres database directly. With it you can index a unique set of data from your own smart contracts that allows you to build a superior product that blows your competition out of the water! We give you flexibility to get the data that you need in the shape that works best for you.

Reliability is key, and you need a reliable and scalable platform to host it. [SubQuery's managed service](https://subquery.network/managedservices) is an industry leading hosting solution for all customers that is serving hundreds of millions of daily requests to the biggest projects in Polkadot. We provide our [enterprise level customers](./20211228-enterprise-hosted.md) with services such as dedicated databases, redundant clusters, intelligent multi-cluster routing, and advanced monitoring and analytics. It will support your application when you are ready and will scale with you.

And finally, in a few months you'll be able to completely decentralise your SubQuery infrastructure with the SubQuery Network, the future of Web3 infrastructure. The SubQuery Network will index and service your projects data to the global community in an incentivised and verifiable way. It is designed to support any SubQuery project from any layer-1 network including Terra, so you can take advantage of the scale of the unified SubQuery Network from launch.

## Installation Instructions

You'll first need to install a recent version of @subql/cli via npm i -g @subql/cli@latest

The best way is to start with [our starter project](https://github.com/subquery/terra-subql-starter), it contains a running project with an example of all mapping functions: This project indexes the following:

- **BlockHandler:** Усі блоки та їх хеш і висота
- **TransactionHandler:** всі транзакції та їх хеш, висота та мітка часу
- **EventHandler:** Усі події передачі смартконтракту та їх хеш, висота, відправник, одержувач і сума з відфільтрованої адреси смартконтракту (bLuna)
- **MessageHandler:** Усі повідомлення смарт-контракту та їх хеш, висота, дані контракту, відправника та execute_msg з відфільтрованої адреси смарт-контракту (bLuna)

SubQuery підтримує індексацію смарт-контрактів Terra за допомогою підписок і обробників транзакцій і повідомлень. Ви можете побачити робочий приклад підтримки Smart Contract у [початковому проекті](https://github.com/subquery/terra-subql-starter) і прочитати документацію в [Університеті підзапитів](http://localhost:8080/build/manifest.html#mapping-handlers-and-filters).

Реалізація Terra в SubQuery була розроблена так, щоб працювати майже так само, як і підтримка Polkadot в SubQuery, і подібно до підходу Graph. Ми оновили [Університет SubQuery](https://university.subquery.network/), щоб додати конкретну інформацію про Terra до загальної документації SubQuery. Ви можете почати, дотримуючись цього [чудового посібника з початку роботи тут](http://university.subquery.network/quickstart/quickstart-terra.html).

## Розгортання вашого проекту в керованій службі SubQuery

Хоча ви завжди зможете легко запускати свій проект у власній інфраструктурі, [керована служба SubQuery](https://subquery.network/managedservices) тепер підтримує проект Terra Деякі з найбільших проектів залежать від керованої служби SubQuery [підприємства](./20211228-enterprise-hosted.md), і тепер ви також можете. У рамках нашої партнерської угоди про запуск ми надаємо вам 3 місяці безкоштовного хостингу.

Ви можете [слідувати посібнику тут](https://university.subquery.network/run_publish/publish.html), щоб опублікувати свій проект Terra SubQuery в нашій керованій службі Зауважте, що ви повинні розміщувати свій [проект SubQuery за допомогою IPFS](https://university.subquery.network/run_publish/publish.html), а не GitHub.

Ви можете оновлювати свій керований сервісний проект скільки завгодно. У нас навіть є [слот поетапного розгортання](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md), щоб ви могли безперебійно оновлювати синій/зелений колір без простоїв. This staging slot can also be used to run a clean instance of SubQuery with a fresh database for complete background reindexing of your project. Customers usually link the staging slot to the staging/development versions of their applications.

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
