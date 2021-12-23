# Ноябрьское техническое обновление SubQuery: обновления EVM и манифеста

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**Узнайте больше о нашем глубоком техническом погружении в последнюю версию SubQuery**

# Поддержка файлов типа внешней цепочки в манифесте проекта

Сегодня запускается [ версия 0.2.0 ](https://doc.subquery.network/create/manifest/) файла манифеста нашего проекта (` project.yaml `). Эта новая версия предоставляет разработчикам различные улучшения, запрошенные клиентами.

Что наиболее важно, теперь вы можете ссылаться на файл определения типа цепочки, в который включены все пользовательские типы, когда вы индексируете цепочку пользовательских подложек. Это позволяет быстро подключить новый проект SubQuery к любой цепочке на основе субстрата, включая все парачейны Кусамы. Это должен быть файл стандартного типа цепочки, который объявляет определенные типы, поддерживаемые этой цепочкой блоков, в формате `.json ` или `.yaml `.

Это решение позволяет избежать копирования и управления определениями типов цепочек в самом манифесте и позволяет просто клонировать [ опубликованные файлы типов цепочек, перечисленные в репозиториях, таких как PolkadotJS ](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec).

[Вы можете прочитать о новом файле манифеста, в том числе о том, как перенести в него свои проекты, здесь, в наших обновленных документах.](https://doc.subquery.network/create/manifest/)

# Поддержка Moonbeam EVM

На прошлой неделе мы были рады [ объявить, что работаем с Moonbeam, чтобы обеспечить полную поддержку индексации EVM и субстратов для Moonriver ](https://subquery.medium.com/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff).

Сегодня мы дополняем это объявление всеми ресурсами для разработчиков, которые вам понадобятся для начала работы.

В настоящее время не существует инструмента с открытым исходным кодом, который позволяет разработчикам гибко собирать и запрашивать данные как в Ethereum, так и в Polkadot / Kusama. Это ограничение может привести к тому, что решения dApps в Moonriver будут изолированы на уровне смарт-контрактов и тем самым ограничить их потенциал для потребителей в обеих процветающих сетях. Это партнерство с Moonbeam предоставляет полное и унифицированное решение для индексации всех данных блокчейна в Moonriver.

** SubQuery будет гостем на следующем семинаре Moonbuilders Workshop в среду, 1 декабря, ** [** зарегистрируйтесь здесь **](https://www.crowdcast.io/e/moonbuilders-ws/10) **. **

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[ Во-первых, ознакомьтесь с обновленной документацией о том, как подключиться и индексировать данные из Moonbeam, Moonbase Alpha и Moonriver. ](https://doc.subquery.network/create/moonbeam/) Процесс индексирования данных Moonbeam состоит всего из двух этапов:

## Шаг 1. Добавьте пользовательский источник данных Moonbeam

Мы создали процессор данных, специально предназначенный для работы с реализацией [ Frontier ](https://github.com/paritytech/frontier) в Moonbeam. Это позволяет вам ссылаться на определенные ресурсы ABI, используемые процессором для анализа аргументов и адреса смарт-контракта, из которого происходят события или на который выполняется вызов. [ Подробнее читайте здесь ](https://doc.subquery.network/create/moonbeam/#data-source-spec).

SubQuery предоставляет более продвинутые фильтры, чем другие индексаторы, позволяя фильтровать неконтрактные транзакции, отправителей транзакций, контракты и аргументы индексированных журналов. Это позволяет разработчикам создавать самые разные проекты, удовлетворяющие их конкретные потребности в данных.

## Шаг 2: Индексируйте данные Moonbeam

Как и в обычном проекте SubQuery, вы используете функцию сопоставления для преобразования данных вне цепочки в объекты GraphQL, которые вы определяете, разница в том, что вместо ` SubstrateEvent ` или ` SubstrateExtrinsic `, ваша функция сопоставления получит ` MoonbeamCall ` или ` MoonbeamEvent `, которые основаны на типе Ether [ TransactionResponse ](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) или [ Log ](https://docs.ethers.io/v5/api/providers/types/#providers-Log). [ Подробнее об этом можно прочитать здесь ](https://doc.subquery.network/create/moonbeam/#moonbeamcall).

[Прочтите полную документацию по этому процессу здесь](https://doc.subquery.network/create/moonbeam/#moonbeamcall)

## Пример проекта

Существует полный пример проекта, который индексирует события eth ` transfer ` и ` утверждает ` вызовы смарт-контрактов. Код этого примера проекта находится [ здесь, на GitHub ](https://github.com/subquery/tutorials-moonriver-evm-starter), или доступен через [ live-проект SubQuery в SubQuery Explorer здесь ](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project).

Основная часть изменений происходит в файле манифеста (` project.yaml `). Вы можете видеть ниже, что у нас есть [ расширенные фильтры вызовов ](https://doc.subquery.network/create/moonbeam/#call-filters) для поддержки либо [ строк сигнатуры функции ](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment), либо функции sighash для фильтрации функции, вызываемой в контракте. Для [ фильтров событий ](https://doc.subquery.network/create/moonbeam/#event-filters) вы можете использовать фильтрацию тем, которая соответствует [ стандарту фильтров журналов Ethereum JSON-PRC, найденному здесь ](https://docs.ethers.io/v5/concepts/events/). Обратите внимание, что SubQuery представляет более продвинутые фильтры, чем другие индексаторы для Moonbeam EVM, и эти улучшения должны принести значительную пользу разработчикам.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

Если вы знакомы с тем, как создается проект SubQuery на основе субстрата, вы заметите, насколько похожи функции сопоставления для новой поддержки Moonriver. Каждая функция сопоставления получает ` MoonbeamCall ` или ` MoonbeamEvent ` и обрабатывает их так же, как любой другой проект SubQuery.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

Если у вас есть какие-либо вопросы по этому поводу, обязательно [ ознакомьтесь с нашей документацией ](https://doc.subquery.network/create/moonbeam) или свяжитесь с нами по нашему # каналу технической поддержки в нашем [ сообществе Discord ](https://discord.com/invite/subquery).

[Клонировать пример проекта на GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

As you can see, creating a Moonriver or Moonbase Alpha project that indexes both Substrate and EVM data in a single project is extremely simple and largely similar. Вы можете использовать расширенные инструменты SubQuery для создания шаблонов, чтобы ускорить разработку dApp и воспользоваться преимуществами или более богатой индексацией ваших данных для создания более интуитивно понятных dApps. Нам не терпится увидеть, что вы создадите!

## О SubQuery

SubQuery - это уровень агрегации данных, который работает между блокчейнами уровня 1 (такими как Moonriver и Polkadot) и DApps. Эта служба разблокирует данные блокчейна и преобразует их в запрашиваемое состояние, чтобы их можно было использовать в интуитивно понятных приложениях. Это позволяет разработчикам DApp сосредоточиться на основном сценарии использования и интерфейсе, не тратя время на создание настраиваемого внутреннего интерфейса для обработки данных.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## О Moonbeam

Moonbeam - это платформа смарт-контрактов, совместимая с Ethereum, в сети Polkadot, которая упрощает создание совместимых приложений. Эта совместимость с Ethereum позволяет разработчикам развертывать существующие смарт-контракты Solidity и DApp-интерфейсы для Moonbeam с минимальными изменениями. Будучи парачейном в сети Polkadot, Moonbeam получит выгоду от общей безопасности релейной цепи Polkadot и интеграции с другими цепями, подключенными к Polkadot. Ожидается, что Moonbeam, в настоящее время активно разрабатываемый PureStake, выйдет в MainNet к 4 кварталу 2021 года. Узнайте больше: [ https://moonbeam.network/ ](https://moonbeam.network/).
