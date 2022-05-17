# SubQuery Network - Обобщение

**Как работи мрежата SubQuery Network? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)**

Днес ще поговорим за това как работи SubQuery Network на високо ниво.

## Участници

![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Участници в мрежата SubQuery

В мрежата SubQuery Network има три вида участници:

- **Потребители**: Потребителите ще отправят заявки към мрежата на SubQuery за конкретни данни и ще плащат рекламираната сума в SQT
- **Индексатори**: Индексаторите ще хостват SubQuery проекти в собствена инфраструктура, поддържайки, както нода, така и услугата за заявки, за да могат да индексират данни и да отговарят на GraphQL заявки.
- **Делегатори**: Делегаторите ще участват в мрежата, като подкрепят любимите си индексатори, за да печелят награди

## Индексатори, Потребители и Заявки

Нека започнем с индексиращите, които вършат много от тежката работа зад кулисите. Управлението на хардуера, стартирането на инфраструктурата, наблюдението на ресурсите и изборът на правилните проекти за индексиране на SubQuery

Това отнема време и пари, но след като ги получат, потребителите могат да идват и да отправят искания. Потребителите правят заявки към мрежата SubQuery за конкретни данни и заплащат обявена сума от нашия токен, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Потребителите правят заявки към мрежата SubQuery за конкретни данни и заплащат обявена сума от нашия токен, SQT.

## Производствената Функция на Коб-Дъглас

Това плащане отива в пул за приходи от проекта и в края на периода на залагане (28 дни) вземаме този пул за приходи от проекта и го разделяме. Тя се разпределя между индексите чрез нещо, наречено производствена функция на Коб-Дъглас.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

Тя се разпределя между индексите чрез нещо, наречено производствена функция на Коб-Дъглас.

Най-просто казано, този подход означава, че приходите се разпределят между конкуриращите се индексатори като част от отговорите на заявките и размера на залозите.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Приходите се разпределят между конкуриращите се индексиращи оператори като част от отговорите на заявките и размера на залозите.

Според нас красотата на това уравнение се състои в това, че рационалният индексиращ трябва да поддържа високо ниво на заложените SQT спрямо работата, която върши, за да получи оптимален приход. В резултат на това не е необходимо да налагаме произволни изисквания за залог, тъй като индексиращите са стимулирани да се самоуправляват и да поддържат залог или участие в играта.

## Делегатори

Така че индексиращите са стимулирани да вършат колкото се може повече работа и да залагат колкото се може повече, за да получат максимални възнаграждения. Тук се намесват делегатите.

Делегатите могат да делегират своите свободни SQT на индексиращите устройства, като всяко индексиращо устройство може да публикува _стойност на споделяне на приходите от таксите за заявки_ и тези делегати ще бъдат възнаградени с част от приходите от таксите за заявки, които индексиращото устройство получава.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Delegators can delegate their spare SQT to Indexers and those delegators will be rewarded by a portion of the query fee revenue that the indexer is rewarded in

The _query fee revenue share rate_ that indexers advertise is locked for each 28 day staking era, and a decrease to it must be advertised for an entire 28 day staking era before coming into force.

Similarly, delegators can remove their delegation amounts at any point, but they will only receive rewards when they have delegated for the entire staking era.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegators will only receive rewards when they have delegated for the entire staking era

## Поръчки за покупка

Indexing a project takes time and money, there’s a lot of data on the chain. In order to encourage Indexers to index and support an entirely new SubQuery Project, we plan to implement a market mechanism for Consumers to signal guaranteed revenue to Indexers of new SubQuery Projects.

We’re calling them purchase orders, and Consumers can advertise a contract on chain for a set price and number of requests. Indexers can view this and choose to fill the contracts.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Consumers can advertise a purchase order on chain for a set price and number of requests.

Purchase orders can also be placed on existing SubQuery Projects to attract additional Indexers to improve competition and decrease prices
