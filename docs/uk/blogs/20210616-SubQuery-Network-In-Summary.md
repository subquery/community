# SubQuery Network - Підсумок

> Як працює мережа SubQuery? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)

Сьогодні ми поговоримо про те, як саме працює мережа SubQuery на високому рівні.

## Користувачі


![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Користувачі в мережі SubQuery

В мережі SubQuery є три типи користувачів:

-   **Споживачі**: споживачі надсилатимуть запити до мережі SubQuery на конкретні дані та сплачуватимуть оголошену суму в розмірі SQT
-   **Індексатори**: Індексатори будуть розміщувати проекти SubQuery у своїй власній інфраструктурі, керуючи як вузлом, так і службою запитів для індексування даних і для відповідей на запити GraphQL.
-   **Делегатори**: Делегатори візьмуть участь у мережі, підтримуючи своїх улюблених Індексаторів, щоб отримати винагороди

## Індексатори, Споживачі та Запити

Почнемо з Індексаторів, які виконують більшу частину важкої роботи за лаштунками. Управління обладнанням, запуск інфраструктури, моніторинг ресурсів і вибір правильних проектів SubQuery для індексування

Ці дії вимагають часу і грошей, але як тільки Індексатори отримають дані, Споживачі можуть прийти і зробити запит. Споживачі надсилатимуть запити до мережі SubQuery на конкретні дані та сплачуватимуть оголошену суму в розмірі SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Споживачі надсилатимуть запити до мережі SubQuery на конкретні дані та сплачуватимуть оголошену суму в розмірі SQT.

## Виробнича функція Кобба-Дугласа

Цей платіж входить в пул доходів для проекту, і в кінці вказаного періоду (28 днів) ми беремо цей пул доходів від проекту і розподіляємо його. Він проходить крізь індексатори за допомогою так званої функції Коба-Дугласа.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

Він проходить крізь індексатори за допомогою так званої функції Коба-Дугласа.

Простіше кажучи, цей підхід означає, що дохід розподіляється за конкуруючими індексами в пропорції як до відповідей на запити, так і до суми ставок.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Дохід розподіляється між конкуруючими індексами в пропорції як до відповідей на запити, так і до суми ставок.

In our view, the beauty of this equation is that a rational Indexer must maintain a high level of staked SQT relative to the work they do in order to receive optimal revenue. As a result, we do not need to enforce arbitrary staking requirements because Indexers are incentivised to self-manage and maintain a stake or skin in the game.

## Delegators

So Indexers are incentivised to both do as much work as possible, and to stake as much as possible to maximise their rewards. This is where delegators come in.

Delegators can delegate their spare SQT to Indexers, each Indexer can publish a _query fee revenue share rate_, and those delegators will be rewarded by a portion of the query fee revenue that the indexer is rewarded in.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Delegators can delegate their spare SQT to Indexers and those delegators will be rewarded by a portion of the query fee revenue that the indexer is rewarded in

The _query fee revenue share rate_ that indexers advertise is locked for each 28 day staking era, and a decrease to it must be advertised for an entire 28 day staking era before coming into force.

Similarly, delegators can remove their delegation amounts at any point, but they will only receive rewards when they have delegated for the entire staking era.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegators will only receive rewards when they have delegated for the entire staking era

## Purchase Orders

Indexing a project takes time and money, there’s a lot of data on the chain. In order to encourage Indexers to index and support an entirely new SubQuery Project, we plan to implement a market mechanism for Consumers to signal guaranteed revenue to Indexers of new SubQuery Projects.

We’re calling them purchase orders, and Consumers can advertise a contract on chain for a set price and number of requests. Indexers can view this and choose to fill the contracts.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Consumers can advertise a purchase order on chain for a set price and number of requests.

Purchase orders can also be placed on existing SubQuery Projects to attract additional Indexers to improve competition and decrease prices