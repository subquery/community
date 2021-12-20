# Solarbeam использует SubQuery для своей новой платформы Eclipse Launchpad

![](https://miro.medium.com/max/1400/1*ZG9NqT9GIXax5SBpNn5ipg.png)

Сегодня мы хотим объявить о нашем партнерстве между Solarbeam и SubQuery Network. Solarbeam - это [крупнейший DEX](https://defillama.com/chain/Moonriver) в Moonriver, парачейне основанном на Kusama, с пиковым значением TVL более 180 миллионов долларов. Для этого требуются надежные и высокоскоростные возможности запроса данных для их пользовательского интерфейса.

Solarbeam недавно запустил [Eclipse](https://app.solarbeam.io/eclipse), лаунчпад, созданный для кросс-чейн токен-пулов и аукционов, позволяющий проектам привлекать капитал в децентрализованной и интероперабельной среде на основе Moonriver.

![](https://miro.medium.com/max/1400/1*IbRN8EnymWvqvh0sx_PNKw.png)

> _«_SubQuery оказался надежным инструментом для запроса событий и транзакций в цепях на основе EVM и Substrate, с минимальной задержкой для синхронизации новых данных и подходящим для больших объемов данных. В результате мы считаем, что SubQuery обеспечит такие же хорошие впечатления на Moonbeam, как и на Moonriver ». _— Основатель, Solarbeam_

Сервис [SubQuery](https://subquery.network/) помогает проводить аналитику для Eclipse IDO лаунчпада от Solarbeam. В преддверии своего запуска на Moonbeam, Solarbeam интегрирует SubQuery в свой инструмент аналитики портфолио пользователей, который позволит пользователям отслеживать свой фарминг и историю прибыли. Это стало возможным благодаря [недавней интеграции Moonbeam и Moonriver EVM с SubQuery](https://subquery.medium.com/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff).

![](https://miro.medium.com/max/1400/1*6_iO6tLt4RxxMvs8u-F_Bg.png)

In the example below, we’re using SubQuery to easily retrieve the top two participations and pools in Solarbeam’s DEX ordered by total amounts. You can see how a simple GraphQL query can quickly get the data that Solarbeam need to build an intuitive user experience.

![](https://miro.medium.com/max/1400/1*5iCwSaU96UtDMFA1MruRlA.png)

Solarbeam is using [SubQuery Projects](https://project.subquery.network/) to manage their own project and make updates as required. The indexing and query services we provide are completely managed by SubQuery and provided to the Polkadot community for free in [SubQuery’s Explorer](https://explorer.subquery.network/).

[You can take a look at Solarbeam’s project in SubQuery’s Explorer here](https://explorer.subquery.network/subquery/csntest/eclipse)

---

## About Solarbeam

[Solarbeam](https://solarbeam.io/) is the leading AMM on Moonriver Network, with a peak TVL of more than $180m. Launched on September 1st 2021, Solarbeam has rapidly established itself as one of the mainstays in the Moonriver ecosystem.

Learn more about Solarbeam by visiting:

[Main website](https://solarbeam.io/exchange/swap) | [Twitter](https://twitter.com/solarbeamio) | [Discord](http://discord.gg/rK4AjZXuwf) | [Telegram](http://t.me/solarbeamio) | [Medium](https://solarbeam.medium.com/)

## About SubQuery

[SubQuery](https://subquery.network/) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications (DApps). Currently focused on Polkadot and Substrate projects, this data-as-a-service allows developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing.

[Website](https://subquery.network/) | [Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [GitHub](https://github.com/subquery)
