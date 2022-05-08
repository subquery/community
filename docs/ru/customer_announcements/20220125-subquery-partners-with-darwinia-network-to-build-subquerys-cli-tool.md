# SubQuery сотрудничает с Darwinia Network для создания инструмента SubQuery's CLI Tool

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

Сегодня мы хотим объявить о партнерстве между Darwinia Network и SubQuery Network. Darwinia недавно выиграла свой аукцион Kusama parachain aucton и готовится выиграть свой аукцион Polkadot. В рамках дорожной карты Darwinia по созданию межцепочечного моста-хаба для Polkadot, Darwinia сотрудничает с SubQuery для создания множества приложений, которые будут необходимы для обеспечения максимального удобства пользователей для межцепочечного взаимодействия.

Наше сотрудничество не ограничивается использованием SubQuery для питания экосистемы приложений Darwinia. Darwinia тесно сотрудничает с командой SubQuery, чтобы [создать инструмент CLI](https://github.com/fewensa/subquery-cli) для управляемой службы SubQuery ([https://project.subquery.network](https://project.subquery.network)). Вы можете использовать этот [CLI](https://github.com/fewensa/subquery-cli) для создания проекта SubQuery и автоматического развертывания новой версии в слот staging или production. Кроме того, вы можете получить информацию, включая подробный статус синхронизации и журналы из вашего запущенного проекта, который бесплатно размещается в SubQuery Projects. Darwinia пошли еще дальше и создали пример [GitHub Action workflow](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml), который использует инструмент CLI для выполнения этого действия при любом push в главную ветку их [репозитория](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml). Эта новая автоматизация является прекрасным примером тесного сотрудничества между Darwinia и SubQuery, а инструмент CLI уже используется многими другими проектами в рамках большой экосистемы SubQuery.
> "Созданный нами инструмент SubQuery CLI действительно упростил наш конвейер разработки, теперь мы можем полностью управлять релизами в ветках и быть уверенными, что наши изменения будут автоматически развернуты на хостинговом сервисе SubQuery. Мы особенно гордимся нашим автоматизированным процессом проверки, изменился ли файл schema.graphql, и если да, то мы развернем новую чистую базу данных" - Ялин, основной разработчик - Darwinia Network.


Ознакомьтесь с [новым инструментом CLI здесь](https://github.com/fewensa/subquery-cli) и посмотрите [живой пример его использования здесь](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml).

Первым из многих приложений в растущей экосистеме приложений Darwinia является приложение [Wormhole app](https://wormhole.darwinia.network/). Wormhole - это простое в использовании приложение, которое упрощает передачу активов между сетями и является ключевой частью стратегии "Дарвиния" по созданию перекрестных цепочек. В настоящее время мост между Darwinia и Ethereum функционирует. [ SubQuery используется для отображения исторических передач и событий](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia), произошедших на вашем адресе Darwinia/Crab/Pangolin, связанных с червоточиной (например, прибытие активов из другой сети).

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

Команда Darwinia находится в процессе создания нового [Smart App, которое является центральным узлом](https://apps.darwinia.network/) для управления всеми взаимодействиями в сети Darwinia, включая управление, ставки, поиск цепочек и многое другое. Это приложение использует значительное количество данных [SubQuery для отображения исторических данных и действий](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery будет тесно сотрудничать с командой Darwinia, чтобы сделать этот сервис самым быстрым и удобным для пользователей во всей экосистеме Polkadot.
> "Мы рады использовать SubQuery для замены наших существующих бэкэнд-сервисов для Wormhole, в долгосрочной перспективе с помощью сети SubQuery Network это сделает наши сервисы полностью децентрализованными и с открытым исходным кодом - это то, чем мы гордимся!". - Ялин, основной разработчик - Darwinia Network


Кроме того, Darwinia использует SubQuery для [обеспечения данными](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot) своего веб-сайта [Parachain Loan Offering](https://darwinia.network/plo_contribute). Хотя Crab уже выиграл свой слот на Кусаме, еще не поздно внести свой вклад в кампанию Darwinia по созданию слота Polkadot. Они также используют преимущества SubQuery для индексации [ хребтов горы Меркл](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr) для всех блоков, созданных в их сети.

Darwinia Network использует [SubQuery Projects](https://project.subquery.network/) для управления собственным проектом и внесения обновлений по мере необходимости. Услуги индексирования и запросов, которые мы предоставляем, полностью управляются SubQuery и предоставляются сообществу Polkadot бесплатно в [SubQuery's Explorer](https://explorer.subquery.network/).

## О Darwinia Network

Darwinia Network - это децентрализованная межцепочечная мостовая сеть, построенная на Substrate, который является "мостом Золотые Ворота" межцепочечной экологии. Он обеспечивает самое безопасное решение общего моста, соединяющее Polkadot, Ethereum, BSC и другие разнородные цепи посредством межцепочечной передачи активов и общего удаленного вызова цепи. Кроме того, его основные области применения включают Defi, кросс-цепной рынок торговли NFT, игры и т.д.

[Website](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## О SubQuery Network

[SubQuery](https://subquery.network/) - это децентрализованный уровень агрегации данных, индексирования и запросов между блокчейнами первого уровня и децентрализованными приложениями (DApps). В настоящее время эта служба данных как услуга сосредоточена на проектах Polkadot и Substrate, что позволяет разработчикам сконцентрироваться на их основной сфере применения и фронтальном

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
