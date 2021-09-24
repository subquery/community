# SubQuery надає свій пакет SDK з відкритим кодом після гранту Web3 Foundation

## Тепер розробники можуть трансформувати та робити запити стосовно світових данних для майбутнього Web3

![](https://miro.medium.com/max/1400/1*f9Jw37LjUGu8P8W39cjDYw.png)

Цього тижня OnFinality (команда, яка стоїть за SubQuery), виступила у рамках гранту Web3 Foundation, щоб надати повний робочий процес для створення проектів SubQuery. Ми раді оголосити про роботу, яку ми провели для завершення цього гранту, і поділитися нею зі світом, щоб вони могли почати використовувати наш проект сьогодні для більш ефективного використання своїх мереж.

SubQuery створюється командою OnFinality, яка є інфраструктурою Iaas & amp; Платформа SaaS для команд і користувачів блокчейн для запуску вузлів і отримання доступу до широкого спектру протоколів блокчейну. Ми маємо набір симбіотичних послуг, включаючи наші служби спільних вузлів API, і співпрацюємо з найкращими командами Polkadot/Substrate.

Майже кожен блокчейн має потребу в обробці та запиту даних. Наш проект враженний зростанням протоколів даних, що обслуговують прикладний рівень, і має за мету, допомогти процвітаючій спільноті Polkadot. Мета SubQuery - допомогти проектам Polkadot/Substrate створити кращі програми для доступу, дозволяючи будь -кому надійніше знаходити та споживати дані швидше. Наш сервіс дозволяє користувачам витягати, перетворювати, зберігати та робити запит на інформацію, а також підключати та представляти дані в майбутньому.

[ Програма відкритих грантів Фонду Web3 Foundation ](https://github.com/w3f/Open-Grants-Program/pull/136) дозволила нам створити SubQuery, проект з відкритим кодом, який дозволяє користувачам запускати індексатор у своєму ланцюжку для створення набору даних, запит якого можна здійснити за допомогою GraphQL.

Цей набір інструментів включає @subql/cli, щоб дозволити проектам генерувати власний проект SubQuery, визначаючи, як індексатор повинен перетинати та агрегувати власну мережу. У рамках нашої пропозиції ми надали базовий підручник, який показує користувачам, як використовувати сli для індексування своєї мережі, [ви можете знайти тут](https://doc.subquery.network/quickstart.html) . Ми надали більш детальну документацію для розробників для більш поглибленного використання.

По -друге, існує пакет вузлів SubQuery, який завантажує визначений проект SubQuery, створений CLI, а потім індексує мережу до бази даних Postgres. За допомогою Hasura можна відразу запускати запити GraphQL над індексованими таблицями. За допомогою цих інструментів та матеріалів підтримки спільноти, які ми постійно вдосконалюємо, будь -хто може легко створювати та запускати запити.

** Ви можете почати одразу, слідуючи нашому прикладу в **[** сховищі SubQuery Github**](https://github.com/OnFinality-io/subql) **. Крім того, ви можете дізнатися більше, прочитавши наші документи [**SubQuery**](https://doc.subquery.network/)** або**[**відвідавши наш новий веб -сайт**](https://subquery.network/)**.**

Ми неймовірно вдячні за підтримку, надану Web3 Foundation, яка допомагає нам реалізувати цей проект для спільноти. Web3 Foundation фінансує групи дослідників та розробників, які створюють технологічний стек децентралізованої мережі. Його заснував у Цугу, Швейцарія, співзасновник Ethereum і колишній головний директор з технологій, доктор Гевін Вуд. Polkadot - це флагманський проект Фонду.

Ми зосередимось на створенні керованої розміщеної послуги на основі цієї пропозиції, яка буде більш ефективною та масштабованою. We are going to provide trusty public infrastructure that will build a powerful productionised SubQuery node from an uploaded SubQuery project. The service will then index and persist the chain state, and provide a production GraphQL endpoint that can replace self-hosted implementations. We’re going to focus on this so that everyone else can focus on building and growing their dApp.

We saw Polkadot’s potential early and right from the start it felt natural to focus our efforts there. The core premise of Polkadot is to create a thriving community of developers, users, and businesses that will tap into its multichain interoperability — that community is going to need a service that allows them to reliably find and consume data quickly.

Polkadot’s unique architecture means that we can focus on one network and then be able to support multiple current and future chains with ease. Even though Polkadot is still under development, we will be there ready to help the next generation of blockchain developers create the next big dApp.

Get started on the [SubQuery Github repository.](https://github.com/OnFinality-io/subql)

Прочитайте наші [ документи SubQuery ](https://doc.subquery.network/)

[Відвідайте нашу нову веб-сторінку](https://subquery.network/)

Learn more about Web3 Foundation by visiting their [website](https://web3.foundation/). To follow the latest developments at Web3 Foundation, join them on [Reddit](https://www.reddit.com/r/dot/) or [Twitter](https://twitter.com/web3foundation).

Слідкуйте за нами в:

-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/%23subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)