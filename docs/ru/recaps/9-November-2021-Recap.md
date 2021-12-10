# Итоги Ноября 2021

![](https://miro.medium.com/max/1400/1*qzKzZnWY2ao3tiffwwugXQ.png) **_ Этот месяц полон новостей _**

Добро пожаловать в последнее ежемесячное обновление от SubQuery, которое состоит из всего самого интересного, что происходит в нашем сообществе.

# Сеть Subquery

## Subquery для запуска Acala

![](https://miro.medium.com/max/600/0*SJ1TWt1sGwUWqvuI.gif) На нашей телеконференции мы наконец объявили, что SubQuery и токен SQT будут стремиться стать первым внешним приложением и токеном, запускаемым с Acala.

Мы рассмотрели множество вариантов, прежде чем принять решение об углублении существующего партнерства с Acala, запустив его ведущий протокол DeFi, основанный на Polkadot. Три основные причины, по которым было принято решение о запуске вместе с Acala, - это доступ к сообществу, высокое качество домена/техническое совершенство и наши прочные отношения.

Джеймс встретился с Бетт Чен из Acala, чтобы дать обширное интервью об этом решении и партнерстве, включая подробности того, почему Acala и SubQuery - это союз, заключенный на небесах.

[Подробнее об этом читайте здесь](https://blog.subquery.network/blogs/20211125-subquery-network-acala.html)

## Значимое развитие сети Subquery

Несмотря на то, что мы напряженно работаем над сетью SubQuery и все еще стремимся к запуску нашей тестовой сети в первом квартале 2022 года. Мы добились больших успехов в разработке смарт-контрактов и усовершенствовании экономической модели токенов. Следите за новостями, скоро мы расскажем об этом гораздо больше.

# Разработка основного продукта

## Масштабирование Хостинга

Количество проектов Subquery за последний месяц резко выросло, поскольку [ тысячи участников академии ](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html) создали еще больше проектов в нашем хостинговом сервисе ([ project.subquery.network ](https://project.subquery.network/)) в течение нескольких недель.

Мы преодолели рубеж в более чем 2000 проектов, развернутых на нашем хостинге, и в результате его масштабирование стало приоритетной задачей. Теперь мы предлагаем нашим корпоративным клиентам специальные ресурсы для повышения производительности и надежности.

Если вы хотите обновить свой проект SubQuery, чтобы получить выделенные ресурсы, свяжитесь с нами по адресу [ sales@subquery.network ](mailto:sales@subquery.network).

## Поддержка файлов типа внешней цепочки в нашем манифесте проекта

В ноябре мы запустили [** версию 0.2.0 **](https://doc.subquery.network/create/manifest/) файла манифеста нашего проекта (` project.yaml `). Эта новая версия предоставляет разработчикам различные улучшения, запрошенные клиентами.

Что наиболее важно, теперь вы можете ссылаться на файл определения типа цепочки, в который включены все пользовательские типы, когда вы индексируете цепочку пользовательских подложек. Это позволяет быстро подключить новый проект SubQuery к любой цепочке на основе субстрата, включая все парачейны Кусамы.

[ Подробнее об этой новой функции можно прочитать здесь ](https://blog.subquery.network/blogs/20211105-november-technical-update.html#support-for-external-chain-type-files-in-project-manifest).

## Поддержка Moonriver EVM

![](https://miro.medium.com/max/600/0*B27QVtvcR6nXA9ff.gif)

Как было объявлено ранее, мы реализовали поддержку сетей Moonbeam и Moonriver в SubQuery. В ноябре мы предоставили все ресурсы для разработчиков, необходимые для начала работы.  [ Вы можете прочитать инструкции здесь ](https://blog.subquery.network/blogs/20211105-november-technical-update.html#moonbeam-evm-support).

Вдобавок Скотт смог представить весь этот рабочий процесс на [ семинаре Moonbuilders ](https://www.crowdcast.io/e/moonbuilders-ws/10), чтобы все могли посмотреть. Идеальное время для подготовки к спонсируемым нами грантам Gitcoin (подробнее об этом ниже).

# Сообщество

## Gitcoin Hackathon

Hot on the heels of the overwhelming success of the SubQuery Academy’s  _Hero Course_, we were proud to announce that we would be providing our first hackathon opportunity for all developers via  [Gitcoin Grants Round 12](https://gitcoin.co/hackathon/gr12/?org=subquery)  starting on December 1st.

SubQuery has proposed 5 bounties with a total prize pool of up to $34,000:

-   [Create a unified block explorer that combines Substrate and EVM insights from Moonbeam and Astar into one easy to use application](https://gitcoin.co/issue/subquery/grants/1)  — US$12,000 [Sponsored by Moonbeam and Astar]
-   [Work with SubQuery and the DeFi hub at Karura/Acala to build a dashboard that’s inspired by Zapper.fi or defisaver.com](https://gitcoin.co/issue/subquery/grants/2)  — US$8,000 [Sponsored by Acala]
-   [Create a staking dashboard that shows the best staking opportunities across Polkadot and its various parachains](https://gitcoin.co/issue/subquery/grants/3)  — US$3,000
-   [Build a marketplace explorer for all RMRK protocol based NFTs](https://gitcoin.co/issue/subquery/grants/4)  — US$2,000
-   [Extend the @subql/node service to index data from another layer 1 chain](https://gitcoin.co/issue/subquery/grants/5)  — US$12,000

[You can read more about these bounties here.](https://blog.subquery.network/blogs/20211120-gitcoin12-hackathon.html)

## Analysis into the Polkadot Crowdloans

SubQuery is Polkadot’s leading data indexing service, and over the past week, we’ve been powering millions of daily requests to the majority of the crowdloan dashboards, contribution apps, and analytics websites. Teams like  [**SubVis**](https://www.subvis.io/),  [**Parallel Finance**](https://parallel.fi/), and  [**DotMarketCap**](https://dotmarketcap.com/)  rely on SubQuery to provide real-time data on the crowdloans and other on-chain data directly to their websites and apps.

![](https://miro.medium.com/max/60/0*HfsoOwpat76ip6Jg?q=20)

![](https://miro.medium.com/max/700/0*HfsoOwpat76ip6Jg)

We recently took a deep dive into the Polkadot crowdloans (specifically the title fight between Acala and Moonbeam).  [You should read it here if you haven’t already](https://blog.subquery.network/blogs/20211124-polkadot-crowdloans.html).

# Other things you might have missed

-   We’re working closely with the new team at  [Web3Go](https://www.web3go.xyz/)  to  [provide data anaysis tools to the SubQuery ecosystem.](https://blog.subquery.network/customer_announcements/20211110-web3go.html)
-   [Listen to Sam and James on Brave New Coin’s podcast](https://bravenewcoin.com/insights/podcasts/subquery-connecting-the-dots-on-polkadot).
-   James talked to Acala’s Brett Kolodny to talk about how  [Acala use SubQuery in their stack](https://www.youtube.com/watch?v=Wbxwj8K67Lw).
-   Siqi, our China representative,  [talked to Acala Network and Polkaworld about the latest in web3](https://www.huoxing24.com/live/24313016).
-   We released modules  [1](https://doc.subquery.network/academy/herocourse/module1/)  to  [4](https://doc.subquery.network/academy/herocourse/module4/)  of our  [SubQuery Hero Course](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   James also talked to Jacky to explore Litentry’s plans  [for a future DID protocol](https://www.youtube.com/watch?v=Rqlpo9QIVyk).

As always, please  [join our social channels](https://linktr.ee/subquerynetwork)  (especially our  [Discord](https://discord.com/invite/subquery)) to stay updated on our latest news and announcements.

James, Sam, and the SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)  |  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
