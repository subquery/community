# Бета-версия поддержки SubQuery выпущена для Avalanche

![](https://miro.medium.com/max/1400/1*BiJaESR69-vDimBJmXhQvw.png)

Сегодня, после нескольких месяцев улучшений, реорганизации и тестирования, мы рады поделиться с сообществом Avalanche бета-версией нашего решения для открытого индексирования. После утверждения SubQuery в качестве ведущего индексатора данных в сети Polkadot, недавнее [объявление о нашем расширении в сети Avalanche](./20220321-avalache.md) во время недавнего [Avalanche Summit](https://www.avalanchesummit.com/agenda) было встречено с волнением разработчиками, с нетерпением ждущими гибкого и масштабируемого инструмента индексирования.

Следуйте руководству по бета-версии здесь: https://university.subquery.network/quickstart/quickstart-avalanche.html

SubQuery — это гибкий и быстрый индексатор открытых данных. Наш открытый инструмент индексирования призван помочь разработчикам создать свой собственный API за считанные часы, и он предназначен для невероятно быстрого индексирования цепочек с помощью словарей (предварительно вычисленных индексов). Наш опыт работы с клиентами по всем направлениям в сети Polkadot (кошельки, сети, проводники, NFT, DeFi, сканеры и т. д.) помог нам создать это.

С сегодняшнего дня, разработчики сети Avalanche смогут получить доступ к бета-версии того же быстрого, гибкого и открытого решения для индексирования, которое широко используется в сети Polkadot. Поскольку это бета-версия, в ней могут быть некоторые проблемы. Поэтому мы будем признательны, если о любых ошибках вы сообщите нашей команде, чтобы мы могли быстро их устранить.

## Зачем Использовать SubQuery?

_В Avalanche уже есть несколько других вариантов, так зачем вам создавать с помощью SubQuery?_

Мне задавали этот вопрос многие из вас, с кем мне посчастливилось встретиться на Avalanche Summit. In our space there are generally three other solutions:

- Build your own solution: Why reinvent the wheel? SubQuery is focusing on building a reliable and fast open indexer --- we're here to save you time
- Standardised data services or "unified APIs": These providers are excellent if you're building the same app on the same basic smart contract as everyone else, but you're not. You need a unique set of data that allows you to build a superior product that blows your competition out of the water! You need flexibility to get the data that you need in the shape that works best for you
- Other open GraphQL data services: Everyone that was already using them expressed the same problems, there was a serious lack of developer support and some significant performance issues. Additionally there was only coverage on the contract chain with no plans to extend to your next subnet

At SubQuery we have an open-source SDK that is easy to use and lightning quick. It provides you with a standard GraphQL endpoint, or you can just query the postgres database directly.

Reliability is key, and you need a reliable and scalable platform to host it. [SubQuery's managed service](https://subquery.network/managedservices) is an industry leading hosting solution for all customers that is serving hundreds of millions of daily requests to the biggest projects in Polkadot. We provide our [enterprise level customers](./20211228-enterprise-hosted.md) with services such as dedicated databases, redundant clusters, intelligent multi-cluster routing, and advanced monitoring and analytics. It will support your application when you are ready and will scale with you.

And finally, in a few months you'll be able to completely decentralise your SubQuery infrastructure with the SubQuery Network, the future of Web3 infrastructure. The SubQuery Network will index and service your projects data to the global community in an incentivised and verifiable way. It is designed to support any SubQuery project from any layer-1 network including Avalanche, so you can take advantage of the scale of the unified SubQuery Network from launch.

## Installation Instructions

Follow the beta guide here: https://university.subquery.network/quickstart/quickstart-avalanche.html

You'll first need to install @subql/cli via *npm i -g @subql/cli*

The best way is to start with our starter project, it contains a running project with an example of all mapping functions: https://github.com/subquery/avalanche-subql-starter. This project indexes the following from the [Pangolin Smart Contract](https://snowtrace.io/token/0x60781c2586d68229fde47564546784ab3faca982):

- BlockHandler: All blocks and their core information
- TransactionHandler: All transactions from the approve function within the Pangolin smart contract
- EventHandler: All transfer events from the Pangolin smart contract

SubQuery's Avalanche implementation has been designed to operate almost identically to SubQuery's Polkadot support, and in a similar way to the Graph's approach. We've updated the [SubQuery University](https://university.subquery.network/build/introduction.html) to add Avalanche specific information to the general SubQuery documentation. You can start by following this [excellent getting started guide here](https://university.subquery.network/quickstart/quickstart-avalanche.html).

## SubQuery's Support for Avalanche

We are completing the first phase of our full support for the Avalanche ecosystem.

![](https://miro.medium.com/max/1400/0*GUKZJfJCz1nB_3zc)

Today we are sharing the following:

- Advanced Contract Chain Indexing
- Avalanche Dictionary: Pre-computed indices to [dramatically reduce indexing time](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
- Full support for Avalanche in our free [enterprise level](./20211228-enterprise-hosted.md) managed service
- Intuitive documentation in the [SubQuery University](https://university.subquery.network/)

In the coming weeks you can expect:

- A step by step learning course in the [SubQuery Academy](./20211018-subquery-launches-the-subquery-academy.md)
- Full support for Avalanche in our decentralised SubQuery Network (you'll see a project in our current Frontier test network)

Учитывая количество подсетей, запланированных на ближайшие месяцы, возникнет огромная потребность в быстрой, открытой и гибкой поддержке индексации, которая работает во всех совместимых подсетях. We have experience implementing this level of configurability for Polkadot's parachains, and are investigating how to provide the same outcome for Avalanche (e.g. by importing custom implementations of snowman.Block etc).

Запуск нашей бета-версии для поддержки Avalanche знаменует собой важную веху в нашем стремлении предложить сообществу Avalanche улучшенные инструменты индексации, позволяющие ее разработчикам продвигаться дальше и быстрее. Мы стремимся получить обратную связь от сообщества, чтобы улучшить наше предложение и повысить нашу узнаваемость как надежного партнера по инфраструктуре для одного из самых быстрорастущих сообществ разработчиков в Web3

Сейчас мы ищем партнеров по запуску, которых мы могли бы тесно поддерживать, поскольку они разрабатывают свои первые проекты подзапросов в этой экосистеме. Свяжись со мной в james.bayly@subquery.network, если вы хотите первыми начать путешествие вместе с нами.

_Джеймс Бэйли _

Следуйте руководству по бета-тестированию здесь:https://university.subquery.network/quickstart/quickstart-avalanche.html

## About SubQuery

[SubQuery](https://subquery.network/) is a blockchain developer toolkit enabling others to build Web3 applications of the future. A SubQuery project is a complete API to organise and query data from layer-1 chains. Currently servicing Polkadot, Substrate, Avalanche and Terra projects, this data-as-a-service allows developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The SubQuery Network proposes to enable this same scalable and reliable solution, but in a completely decentralised way.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
