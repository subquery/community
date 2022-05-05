# Оголошення SubQuery

## Перетворюйте та запитуйте світoвi дані  для майбутнього web3.0

![](https://miro.medium.com/max/1400/1*J5u22qNxndcuCrFJ1mfGqg.png)

Місія OnFinality - підтримувати розробників блокчейнів, надаючи інфраструктурні послуги клієнтам будь -яких форм і розмірів. Ми запускаємо нове підприємство, яке має на меті вирішити основну проблему для просування цієї місії: SubQuery.

Майже кожен блокчейн має потребу в обробці та запиті даних. Процвітаючій спільноті Polkadot знадобиться служба, яка дозволяє їм надійно знаходити та швидко споживати дані. Наш проект натхненний сервісом [The Graph](https://thegraph.com/), нині орієнтований на Ethereum, що дозволяє клієнтам робити це за допомогою GraphQL.

Оскільки децентралізовані системи зберігають дані у мережах, запити виконуються повільно та важко. Щоб мрія Web 3.0 втілилася в життя, вона має бути такою ж швидкою (якщо не швидшою), ніж централізовані мережі для кінцевого користувача. Наразі команди протоколу створюють централізовані сервери індексування для своїх власних проектів, але це призводить до трьох проблем:

- Командам Polkadot/Substrate не потрібно турбуватися про створення або управління цим під час створення наступного dApp
- Команди постійно винаходять колесо; фундаментальною перевагою парачейн Polkadot є уникнення цієї проблеми
- На наш погляд, екосистема Polkadot/Substrate готова досягти такого ж рівня зростання, як і Ethereum. Ми вважаємо, що він повинен забезпечити той самий рівень суспільних послуг, який вже існує у Ethereum

![](https://miro.medium.com/max/1400/1*l4b4BXWkczVDaHyv30lLQQ.png)

Мета SubQuery - допомогти проектам Polkadot/Substrate створювати кращі dApps для доступу, дозволяючи будь-кому знаходити та споживати дані швидше. Наш сервіс дозволить користувачам видобувати, трансформувати, зберігати та запитувати дані, а також підключати та представляти дані в майбутньому. Наша мета - перетворити це на основну частину інфраструктури для екосистеми Substrate/Polkadot, такою, якою став The Graph для Ethereum.

**SubQuery тут, щоб допомогти вам трансформувати та запитувати світові дані для майбутнього Web3.0.**

![](https://miro.medium.com/max/1000/1*IHstJG-hBwQzicLdWkGR5w.png)

Щоб мрія про Web 3.0 була реалізована, вона повинна бути такою ж швидкою (якщо не швидше), як централізовані мережі для кінцевого користувача.

Ось чому ми неймовірно пишаємося тим, що представляємо SubQuery, проект із відкритим кодом, який дозволяє користувачам запускати індексатор у своєму ланцюжку для створення набору даних, до якого можна запитувати за допомогою GraphQL. Цей набір інструментів включає інтерфейс командного рядка, що дозволяє проєкт генерувати власний проєкт SubQuery, визначаючи, як індексатор повинен проходити та об’єднувати власну мережу. Існує пакет вузла SubQuery, який індексує мережу та підтримує запити GraphQL. За допомогою цих інструментів кожен може легко створювати та запускати запити.

**You can get started right away by following our example on the SubQuery Github repository: [_https://github.com/OnFinality-io/subql_](https://github.com/OnFinality-io/subql)**

Additionally, you can find out more by reading our [SubQuery docs](https://doc.subquery.network/) or visiting our new website at [https://subquery.network/](https://subquery.network/)

![](https://miro.medium.com/max/1000/1*3oA1Hvns1vrImTsmowO_Jw.png)

We’ll focus on building a managed hosted service based off this offering that will be more performant and scalable. We are going to provide trusty public infrastructure that will build a powerful productionised SubQuery node from an uploaded SubQuery project. The service will then index and persist the chain state, and provide a production GraphQL endpoint that can replace self-hosted implementations. We’re going to focus on this so that everyone else can focus on building and growing their dApp.

Once this is in place, our final phase is to tokenize the SubQuery business by building our own chain (likely parachain) for Polkadot. Although we’ll provide a similar billing model for enterprise and high consumption users (subscription plan with consumption levels), we’ll save this data to our chain to make it transparent to everyone and participating parties can stake for rewards as incentives. We’ll issue a governance token to provide stability to the chain and to allow the community to influence our direction and roadmap.

Despite over 10 years of development since bitcoin first started, centralised networks are still the mainstream. It’s largely due to the speed and cost of accessing and writing to the network. Ethereum made a huge step forward with decentralised smart contracts (and the Graph is an incredibly successful piece of infrastructure as a result), but the core network is struggling to mitigate transaction costs.

We saw Polkadot’s potential early and right from the start it felt natural to focus our efforts there. It solves Ethereum’s governance, forking, interoperability problems, and more. The core premise of Polkadot is to create a thriving community of developers, users, and businesses that will tap into its multichain interoperability — that community is going to need a service that allows them to reliably find and consume data quickly.

Polkadot’s unique architecture means that we can focus on one network and then be able to support multiple current and future chains with ease. By putting in this effort now, even as Polkadot is still under development, we will be there ready to help the next generation of blockchain developers create the next big dApp.

SubQuery will be built by the team at OnFinality, which is an infrastructure SaaS platform for blockchain teams and users to launch nodes and get access to a large range of blockchain protocols. We have a suite of symbiotic services including our API shared node service, and dedicated nodes that can be used in infrastructure management or as part of a protocol team’s CI/CD testing pipeline. We have relationships with the top Polkadot/Substrate teams, expertise in managed infrastructure hosting for the Substrate/Polkadot network, and the ability to deliver complex infrastructure projects and host them for production use.

**Sam Zou —** CEO ([LinkedIn](https://www.linkedin.com/in/sam-zou-5b8169a/))

Entrepreneur, Investors with more than 20 years of IT experience specialising in infrastructure and cloud service design

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
- [Twitter](https://twitter.com/subquerynetwork)
- [Matrix](https://matrix.to/#/%23subquery:matrix.org)
- [LinkedIn](https://www.linkedin.com/company/subquery)
