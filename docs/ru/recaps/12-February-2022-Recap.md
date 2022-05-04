# Итоги января

![](https://miro.medium.com/max/1400/1*T3DLiAKSIy-AjRia_JJjow.png)

Для команды SubQuery февраль пролетел незаметно, поскольку мы были заняты на всех фронтах подготовкой к нашему TGE и обслуживанием всех наших существующих клиентов, включая ведущие команды в Polkadot.

Впереди много увлекательной работы и мы не можем дождаться, чтобы поделиться ею в ближайшие недели и месяцы!

## Сообщество

В этом месяце мы, наконец, набрали 30 000 органических подписчиков в Твиттере, и наш Discord вырос более чем на 15 000 активных участников сообщества, работающих, чтобы помогать друг другу. Недостаточно просто создать инструмент или приложение в web3, главное - это создание самодостаточного сообщества, и мы усердно работаем над этим в SubQuery!

### Объявление первой группы получателей грантов Subquery

Были отобраны четыре команды в качестве первой в истории группы получателей грантов Subquery. Этими командами стали [Alphabit](https://www.polkadata.xyz/), [Zoombies](https://zoombies.world/), [Dapplooker](https://dapplooker.com/) и [Dotsama](http://dotsama.ai/). Программа [Грантов Subquery на сумму $500,000](https://subquery.network/grants) стартовала в декабре 2021 года с целью предоставления возможности разработчикам блокчейна, членам сообщества и более широкому кругу участников экосистемы, создания инновационных или высокопотенциальных web3 приложений.

![](https://miro.medium.com/max/1400/1*tBnWK4svpGbGuP3mCXyGDg.png)

Alphabit стремится расширить возможности независимого инвестора, предоставляя возможность отслеживать и анализировать портфели и инвестиции фондов, а также крупных трейдеров или "китов". _"Бизнес-консультации и техническая поддержка от SubQuery полностью превзошли наши ожидания относительно поддержки, которую мы могли бы получить как небольшой аналитический стартап" --- Майкл Андерсон, Отдел развития бизнеса и стратегического партнерства (Alphabit)_

![](https://miro.medium.com/max/1400/1*TpHBDhA7WqNGTOxz9LpifQ.png)

Zoombies внесли предложение в ожидании использовать Subquery для ускорения достижения своей цели по повышению ценности растущего мира коллекционных токенов play-to-earn (P2E). Их проект получит доступ к полной истории данных о прошлых событиях в игре, чтобы на основе этого создать осмысленное мнение об игре и обогатить игровой опыт. _"Программа грантов SubQuery представляет собой очень четкий пошаговый процесс, основанный на вознаграждении" --- Райан Прайс, генеральный директор (Zoombies)_

![](https://miro.medium.com/max/1400/1*4rPD0g-pC3MOU5M5vAtS4w.png)

Dapplooker стремится расширить возможности проектов Polkadot с помощью красивых и простых в создании аналитических инструментов, таких как поискове системы, диаграммы и информационные панели. Эти ценные показатели будут построены поверх проектов SubQuery, чтобы извлекать необходимые данные и предоставлять их своей аудитории в интуитивном и экстетичном формате.

![](https://miro.medium.com/max/1400/1*kC8QYVvlUZwUfgXTBFQbgg.png)

Команда Dotsama также полна решимости предоставить рядовому инвестору богатую информацию об экосистеме Polkadot / Kusama, стремясь стать универсальным аналитическим центром с инструментами для выявления ранних инвестиционных тенденций и возможностей. "_ Участвуя в программе грантов SubQuery мы не просто хотим получить техническое и стратегическое руководство, а также стремимся стать частью этого сообщества и помочь ускорить общий прогресс" --- Сударшан Ачарья, Основатель (Dotsama)_

В дополнение к общим грантам, подобным тем, которые были присуждены нашей первой группе, на [веб-сайте SubQuery](https://subquery.network/grants) также актуальны [технические награды в партнерстве с ведущими командами parachain в Polkadot](../blogs/20220127-grants-bounties.md), такими как Moonbeam, Acala, Astar и Bifrost

## SubQuery Network

### SubQuery Released our Updated Whitepaper

[The SubQuery whitepaper](https://static.subquery.network/whitepaper.pdf) is a document that outlines our strategic framework for the decentralised SubQuery Network and her SQT token. Since the original publication in June 2021, we have experienced significant growth in our customer base and community and made huge progress on building the SubQuery Network. From these sources, we have been inspired to improve and innovate, and that culminates in the latest version of our [whitepaper](https://static.subquery.network/whitepaper.pdf).

The [updated whitepaper](https://static.subquery.network/whitepaper.pdf) maintains SubQuery's conviction that the data services of tomorrow must be multi-chain, simple, and flexible. The new version goes into detail on how the SubQuery Network factors these considerations into the token economic design while also enabling power users to run enterprise-level services.

There is significant new information in the whitepaper relating to SubQuery's innovation in payment models, providing all participants with various flexible ways to transact with the SubQuery Token (SQT).

![](https://miro.medium.com/max/1400/1*EhLefs3-lb47y2LC4Z6jWA.png)

[Подробнее здесь](../blogs/20220216-whitepaper-update.md)

## Разработка основного продукта

### Динамические источники данных

Это значительное улучшение для быстро растущего числа клиентов SubQuery EVM. SubQuery — это единственный инструмент индексации данных, который позволяет индексировать данные Substrate и EVM из парачейнов Polkadot в одном месте.

В некоторых ситуациях вы не знаете параметры источника данных при запуске проекта SubQuery, например, в DEX вы не знаете, какие новые торговые пары будут включены, когда вы пишете свой проект SubQuery. Поддержка [динамических источников данных в SubQuery](https://university.subquery.network/build/dynamicdatasources.html) позволяет разработчикам динамически создавать новые источники данных из новых смарт контрактов, используя шаблоны для автоматизации индексации новых контрактов.

[Подробнее здесь](https://university.subquery.network/build/dynamicdatasources.html)

## Общие сообщения для клиентов

### SubQuery Data Powers Nova Wallet — мобильный кошелек нового поколения для экосистемы Polkadot& и Kusama

![](https://miro.medium.com/max/1400/1*NkYmEpYLpZYFRkANrvpwPw.png)

Многие клиенты, в том числе Nova, полагаются на SubQuery для предоставления критически важных данных своим рабочим приложениям. Это огромные приложения, которые сообщество Polkadot использует ежедневно, и они должны быть постоянно подключены к сети. Nova know that they can trust SubQuery to provide reliable and scalable services to their applications though our [enterprise level features](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html) in our [managed service](https://project.subquery.network/). Nova are a key user of SubQuery's intelligent routing which dynamically routes a user's request to the nearest SubQuery cluster resulting in higher reliability and superior performance than any other option on the market.

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
