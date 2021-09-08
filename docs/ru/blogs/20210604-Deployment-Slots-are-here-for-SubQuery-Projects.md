# Слоты развертывания здесь для проектов SubQuery

> Сегодня мы представляем совершенно новую функцию, улучшающую опыт разработчиков в хостинге SubQuery.

[SubQuery Projects](https://project.subquery.network/) is already being used as a managed and hosted service for many Projects, whether they’re chain explorers, wallets, NFT explorers, or others. Это сервис, на который рассчитывают наши клиенты.

![](https://miro.medium.com/max/1400/0*PugDgh6weZspRIO2)

Теперь вы можете развернуться в изолированный слот

Although you can always run SubQuery’s infrastructure yourself (with your own node and query service), we aim to make our hosted service the most reliable, resilient, and performant data provider in the Polkadot/Substrate ecosystem.

Creators of [SubQuery Projects](https://project.subquery.network/) are constantly improving and updating their Projects and the data within those projects. Unfortunately it takes hours if not days to reindex chain data in the event of a major change — ultimately our goal to to allow you to update your Project, reindex your data, and upgrade your hosted SubQuery Projects with **zero downtime**

**Это то, что слоты развертывания находятся здесь для решения**

![](https://miro.medium.com/max/1400/0*vQ33aqhn1eVllo5t)

Ваш слот будет работать независимо от места первичного производства

When creating a new deployment to your [SubQuery Project in our hosted service](https://project.subquery.network/), you can choose to either deploy to the production or staging slot. Эти два слота являются изолированными окружениями, каждая имеет свою собственную базу данных и синхронизацию независимо. Как только ваш слот начался и завершился индексация, вы можете затем продвигать его на производство с нулевым временем простоя.

The staging slot is perfect for:

-   Validating changes to your SubQuery Project in a separate environment. The staging slot has a different URL to production that you can use in your dApps.
-   Warming up and indexing data for an updated SubQuery project to eliminate downtime in your dApp
-   Preparing a new release for your SubQuery Project without exposing it publicly. The staging slot is not shown to the public in the Explorer and has a unique URL that is visible only to you.

You can try it yourself now in [SubQuery Projects](https://project.subquery.network/).