# Представляем SubQuery

## Преобразовать и запрашивать данные мира для Web 3.0 будущего

![](https://miro.medium.com/max/1400/1*J5u22qNxndcuCrFJ1mfGqg.png)

OnFinality призван поддерживать разработчиков блокчейна путем предоставления услуг по инфраструктуре клиентам всех форм и размеров. Мы запускаем новое предприятие, направленное на решение основной проблемы для продвижения этой миссии: SubQuery.

Почти каждый блокчейн должен обрабатывать и запрашивать данные. процветающее сообщество Polkadot нуждается в сервисе, который позволяет им быстро находить и потреблять данные. Наш проект вдохновлен [The Graph](https://thegraph.com/), службой, которая в настоящее время фокусируется на Ethereum, что позволяет клиентам делать это с помощью GraphQL.

Поскольку децентрализованные системы сохраняют данные по запросам сетей, они являются медленными и тяжелыми. Для реализации мечты о Web 3.0 нужно быть быстрее (насколько это возможно) чем централизованные сети для конечного пользователя. В настоящее время группы протокола создают централизованные сервера индексации для своих собственных проектов, однако это вызывает три проблемы:

- Командам Polkadot/Substrate не нужно беспокоиться о построении или управлении этим, пока они создадут следующий dApp
- Команды постоянно изобретают велосипед. Основное преимущество парачейн совместимости Polkadot заключается в том, чтобы избежать этого
- На наш взгляд, экосистема Substrate/Polkadot готовится к достижению того же уровня роста, что и Ethereum. Мы считаем, что она должна обеспечить такой же уровень сервиса, что и в Ethereum.

![](https://miro.medium.com/max/1400/1*l4b4BXWkczVDaHyv30lLQQ.png)

Цель SubQuery’s заключается в том, чтобы помочь Polkadot/Substrate проектам создавать лучшие dApp, позволяя всем находить и использовать данные быстрее и надежнее. Наш сервис позволит пользователям изначально извлекать, преобразовать, сохранять и запрашивать данные, а также подключать и представлять данные в будущем. Наша цель состоит в том, чтобы сделать этот элемент инфраструктуры для экосистемы Substrate/Polkadot, таким же, как Graph для Ethereum.

**SubQuery поможет вам преобразовать и запросить мировые данные для будущего web3.0.**

![](https://miro.medium.com/max/1000/1*IHstJG-hBwQzicLdWkGR5w.png)

Чтобы мечта о Web 3.0 была реализована, она должна быть такой же быстрой (если не быстрее), чем централизованные сети для конечного пользователя. Именно поэтому мы с огромной гордостью объявляем о SubQuery, проекте с открытым исходным кодом, который позволяет пользователям запускать индексатор по всей своей сети для создания набора данных, к которым можно обращаться с помощью GraphQL. Этот набор инструментов включает в себя интерфейс командной строки, позволяющий проектам создавать свой собственный проект SubQuery, определяя, как индексатор должен обходить и агрегировать их собственную сеть. Существует пакет узлов SubQuery, который индексирует сеть и поддерживает запросы GraphQL. С помощью этих инструментов каждый может легко создавать и выполнять запросы.

Именно поэтому мы с огромной гордостью объявляем о SubQuery, проекте с открытым исходным кодом, который позволяет пользователям запускать индексатор по своей цепочке для создания набора данных, к которым можно обращаться с помощью GraphQL. Этот набор инструментов включает интерфейс командной строки, позволяющий проектам создавать свой собственный проект SubQuery, определяя, как индексатор должен обходить и агрегировать их собственную сеть. Существует пакет узлов SubQuery, который индексирует сеть и поддерживает запросы GraphQL-запросы. С помощью этих инструментов любой человек может легко создавать и выполнять запросы.

**Вы можете начать работу прямо сейчас, следуя нашему примеру на Github-репозитории SubQuery: [_https://github.com/OnFinality-io/subql_](https://github.com/OnFinality-io/subql)**

Кроме того, вы можете узнать больше, прочитав наши [SubQuery документы](https://doc.subquery.network/) или посетив наш новый сайт на [https://subquery.network/](https://subquery.network/)

![](https://miro.medium.com/max/1000/1*3oA1Hvns1vrImTsmowO_Jw.png)

Мы сосредоточимся на создании управляемой службы размещения, на основе этого предложения, которая будет более производительной и масштабируемой. Мы собираемся предоставить надежную публичную инфраструктуру, которая создаст мощный производственный узел SubQuery из загруженного проекта SubQuery. The service will then index and persist the chain state, and provide a production GraphQL endpoint that can replace self-hosted implementations. We’re going to focus on this so that everyone else can focus on building and growing their dApp.

Once this is in place, our final phase is to tokenize the SubQuery business by building our own chain (likely parachain) for Polkadot. Although we’ll provide a similar billing model for enterprise and high consumption users (subscription plan with consumption levels), we’ll save this data to our chain to make it transparent to everyone and participating parties can stake for rewards as incentives. We’ll issue a governance token to provide stability to the chain and to allow the community to influence our direction and roadmap.

Despite over 10 years of development since bitcoin first started, centralised networks are still the mainstream. It’s largely due to the speed and cost of accessing and writing to the network. Ethereum made a huge step forward with decentralised smart contracts (and the Graph is an incredibly successful piece of infrastructure as a result), but the core network is struggling to mitigate transaction costs.

We saw Polkadot’s potential early and right from the start it felt natural to focus our efforts there. It solves Ethereum’s governance, forking, interoperability problems, and more. The core premise of Polkadot is to create a thriving community of developers, users, and businesses that will tap into its multichain interoperability — that community is going to need a service that allows them to reliably find and consume data quickly.

Polkadot’s unique architecture means that we can focus on one network and then be able to support multiple current and future chains with ease. By putting in this effort now, even as Polkadot is still under development, we will be there ready to help the next generation of blockchain developers create the next big dApp.

SubQuery будет создан командой OnFinality, которая представляет собой инфраструктурную SaaS-платформу, позволяющую командам и пользователям блокчейна запускать узлы и получать доступ к большому количеству протоколов блокчейна. У нас есть набор симбиотических сервисов, в том числе наш сервис общих узлов API и выделенные узлы, которые можно использовать для управления инфраструктурой или как часть конвейера тестирования CI/CD команды протокола. У нас есть отношения с ведущими командами Polkadot/Substrate, опыт в размещении управляемой инфраструктуры для сети Substrate/Polkadot и возможность реализовывать сложные инфраструктурные проекты и размещать их для производственного использования.

**Sam Zou —** CEO ([LinkedIn](https://www.linkedin.com/in/sam-zou-5b8169a/))

Предприниматель, инвестор с более чем 20-летним опытом работы в сфере IT, специализирующийся на разработке инфраструктуры и облачных сервисов

**Ian He —** Head of Protocol ([LinkedIn](https://www.linkedin.com/in/yin-he-7a266345/))

Blockchain Architect, Contributor to polkadot-js, Early adopter of Substrate technology and won second place in the first Polkadot hackathon.

**James Xu —** Solutions Architect ([LinkedIn](https://www.linkedin.com/in/zhexu/))

Infrastructure & Application Architect, Award-winning software engineer.

**James Bayly** — Head of Business Development ([LinkedIn](https://www.linkedin.com/in/james-bayly/))

Get started on the [SubQuery Github repository.](https://github.com/OnFinality-io/subql)

Read our [SubQuery docs](https://doc.subquery.network/)

[Visit our new website](https://subquery.network/)

Follow us on:

- [Telegram](https://t.me/subquerynetwork)
- [Твиттер](https://twitter.com/subquerynetwork)
- [Матрица](https://matrix.to/#/%23subquery:matrix.org)
- [LinkedIn](https://www.linkedin.com/company/subquery)
