# Сеть SubQuery - сводка

> Как работает SubQuery Network? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)

Сегодня мы поговорим о том, как работает SubQuery Network на высоком уровне.

## Участники


![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Участники сети SubQuery

There are three types of participants in the SubQuery Network:

-   **Потребители**: Потребители будут направлять запросы в SubQuery для получения конкретных данных и оплачивать выставляемое количество SQT
-   **Indexers**: Indexers will host SubQuery Projects in their own infrastructure, running both the node and query service to index data and answer GraphQL requests.
-   **Delegators**: Delegators will participate in the network by supporting their favourite Indexers to earn rewards

## Индексаторы, потребители и запросы

Начнем с индексаторов. Индексаторы выполняют большую часть тяжелой работы за кулисами. Управление оборудованием, запуск инфраструктуры, мониторинг ресурсов и выбор правильных проектов SubQuery для индексации

Это требует времени и денег, но как только они у них есть, потребители могут приходить и делать запросы. Потребители будут делать запросы к сети SubQuery для получения определенных данных и платить объявленное количество нашего токена, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Потребители направляют запросы в сеть SubQuery для получения конкретных данных и оплачивают объявленное количество токенов, SQT.

## Производственная функция Cobb-Douglas

Этот платеж поступает в пул доходов проекта, и в конце периода размещения ставок (28 дней) мы берем этот пул доходов проекта и разделяем его. На индексаторов налётывается так называемая производственная функция Cobb-Douglas.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

На индексаторов налётывается так называемая производственная функция Cobb-Douglas.

Проще говоря, этот подход означает, что доход распределяется между конкурирующими индексаторами в виде доли как отвеченных запросов, так и поставленной суммы.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Доход распределяется между конкурирующими индексаторами пропорционально ответам на запросы и поставленной сумме.

На наш взгляд, прелесть этого уравнения заключается в том, что рациональный индексатор должен поддерживать высокий уровень поставленных SQT по сравнению с выполняемой им работой, чтобы получать оптимальный доход. В результате нам не нужно применять произвольные требования к ставкам, потому что индексаторы заинтересованы в самостоятельном управлении и поддержании доли или скина в игре.

## Делегаторы

Таким образом, индексаторы заинтересованы как в том, чтобы делать как можно больше работы, так и в том, чтобы делать ставки как можно больше, чтобы получить максимальное вознаграждение. Вот тут и появляются делегаты.

Делегаты могут делегировать свои резервные SQT индексаторам, каждый индексатор может публиковать _ ставку доли дохода за запрос _, и эти делегаты будут вознаграждены частью дохода от комиссионных за запрос, который получает вознаграждение индексатор.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Делегаты могут делегировать свои резервные SQT индексаторам, и эти делегаты будут вознаграждены частью дохода от сбора за запрос, которым получает вознаграждение индексатор

_ Ставка доли дохода от комиссии за запрос _, которую рекламируют индексаторы, заблокирована для каждой 28-дневной эры ставок, и ее снижение необходимо объявлять в течение всей 28-дневной эпохи, прежде чем она вступит в силу.

Аналогичным образом, делегаты могут снять свою делегацию в любой момент, но получат вознаграждение только тогда, когда они делегируют ее на все этапы.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegators will only receive rewards when they have delegated for the entire staking era

## Purchase Orders

Indexing a project takes time and money, there’s a lot of data on the chain. In order to encourage Indexers to index and support an entirely new SubQuery Project, we plan to implement a market mechanism for Consumers to signal guaranteed revenue to Indexers of new SubQuery Projects.

We’re calling them purchase orders, and Consumers can advertise a contract on chain for a set price and number of requests. Indexers can view this and choose to fill the contracts.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Consumers can advertise a purchase order on chain for a set price and number of requests.

Purchase orders can also be placed on existing SubQuery Projects to attract additional Indexers to improve competition and decrease prices