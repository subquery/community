# Слоты развертывания здесь для проектов SubQuery

> Сегодня мы представляем совершенно новую функцию, улучшающую опыт разработчиков в хостинге SubQuery.

[SubQuery Projects](https://project.subquery.network/) уже используется в качестве управляемой и размещенной службы для многих проектов, таких как chain explorer'ы, кошельки, NFT explorer'ы или другие. Это сервис, на который рассчитывают наши клиенты.

![](https://miro.medium.com/max/1400/0*PugDgh6weZspRIO2)

Теперь вы можете развернуться в изолированный слот

Хотя вы всегда можете запустить инфраструктуру SubQuery самостоятельно (с вашим собственным узлом и службой запросов), мы стремимся сделать наш хостинг-сервис наиболее надежным, устойчивым и эффективным поставщиком данных в экосистеме Polkadot/Substrate.

Создатели [SubQuery Projects](https://project.subquery.network/) постоянно совершенствуют и обновляют свои проекты и данные в рамках этих проектов. К сожалению, для реиндексирования данных по цепочке в случае значительных изменений требуется час, а в конечном счете наша цель - позволить вам обновить ваш проект, реиндексировать ваши данные и обновить ваши проекты SubQuery с **нулевым временем простоя**

**Это то, что слоты развертывания находятся здесь для решения**

![](https://miro.medium.com/max/1400/0*vQ33aqhn1eVllo5t)

Ваш слот будет работать независимо от места первичного производства

When creating a new deployment to your [SubQuery Project in our hosted service](https://project.subquery.network/), you can choose to either deploy to the production or staging slot. Эти два слота являются изолированными окружениями, каждая имеет свою собственную базу данных и синхронизацию независимо. Как только ваш слот начался и завершился индексация, вы можете затем продвигать его на производство с нулевым временем простоя.

The staging slot is perfect for:

-   Validating changes to your SubQuery Project in a separate environment. The staging slot has a different URL to production that you can use in your dApps.
-   Warming up and indexing data for an updated SubQuery project to eliminate downtime in your dApp
-   Preparing a new release for your SubQuery Project without exposing it publicly. The staging slot is not shown to the public in the Explorer and has a unique URL that is visible only to you.

You can try it yourself now in [SubQuery Projects](https://project.subquery.network/).