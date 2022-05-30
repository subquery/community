# Бета-версія підтримки запитів випущена для Avalanche

![](https://miro.medium.com/max/1400/1*BiJaESR69-vDimBJmXhQvw.png)

Сьогодні, після багатьох місяців покращень, рефакторингу та тестування, ми раді поділитися бета-підтримкою нашого відкритого рішення для індексування зі спільнотою Avalanche. Після встановлення SubQuery як провідного індексатора даних у Polkadot, нещодавнє [оголошення про розширення в Avalanche](./20220321-avalache.md) під час нещодавнього [Avalanche Summit](https://www.avalanchesummit.com/agenda) було схвильовано розробниками, які прагнуть гнучкого та масштабованого інструмент індексування.

Дотримуйтесь посібника з бета-версії тут: https://university.subquery.network/quickstart/quickstart-avalanche.html

SubQuery — це індексатор відкритих даних, який є гнучким і швидким. Наш відкритий інструмент індексування розроблений, щоб допомогти розробникам створити власний API за кілька годин, і він розроблений для неймовірно швидкої індексації ланцюжків за допомогою словників (попередньо обчислених індексів). Наш досвід роботи з клієнтами в усіх галузях Polkadot (гаманці, мережі, провідники, NFT, DeFi, сканери тощо) допоміг нам створити це.

Від сьогодні розробники Avalanche отримають доступ до бета-версії того самого швидкого, гнучкого та відкритого рішення для індексування, яке широко використовується в Polkadot. Оскільки це бета-версія, імовірно, виникнуть деякі проблеми. Тому ми будемо вдячні, якщо нашій команді повідомимо про якісь помилки, щоб ми могли швидко їх усунути.

## Навіщо використовувати SubQuery?

_У Avalanche вже є кілька інших варіантів, тож навіщо вам будувати за допомогою SubQuery?_

Багато хто з вас задавали мені це питання, з яким мені пощастило зустрітися на Avalanche Summit. У нашому просторі зазвичай є три інші рішення:

- Створіть власне рішення: навіщо винаходити велосипед? SubQuery зосереджується на створенні надійного та швидкого відкритого індексатора --- ми тут, щоб заощадити ваш час
- Стандартизовані послуги даних або «уніфіковані API»: ці постачальники чудові, якщо ви створюєте той самий додаток на тому ж базовому розумному контракті, що й усі інші, але це не так. Вам потрібен унікальний набір даних, який дозволить створити чудовий продукт, який здуває конкурентів з води! Вам потрібна гнучкість, щоб отримати потрібні дані у формі, яка найкраще підходить для вас
- Інші відкриті сервіси даних GraphQL: усі, хто вже користувався ними, виявляли ті ж проблеми, була серйозна відсутність підтримки розробників і деякі значні проблеми з продуктивністю. Крім того, було охоплено лише ланцюжок контрактів, але не планувалося поширюватися на вашу наступну підмережу

У SubQuery ми маємо пакет SDK з відкритим кодом, який простий у використанні та блискавичний. Він надає вам стандартну кінцеву точку GraphQL, або ви можете просто запросити базу даних postgres безпосередньо.

Надійність є ключовою, і для її розміщення потрібна надійна та масштабована платформа. [Керована служба SubQuery](https://subquery.network/managedservices) – це провідне рішення для хостингу для всіх клієнтів, яке обслуговує сотні мільйонів щоденних запитів до найбільших проектів у Polkadot. [Керована служба SubQuery](./20211228-enterprise-hosted.md) – це провідне рішення для хостингу для всіх клієнтів, яке обслуговує мільйонів щоденних запитів до найбільших проектів у Polkadot. Він підтримуватиме вашу програму, коли ви будете готові, і буде масштабуватися разом із вами.

І, нарешті, за кілька місяців ви зможете повністю децентралізувати свою інфраструктуру SubQuery за допомогою SubQuery Network, майбутнього інфраструктури Web3. Мережа SubQuery буде індексувати та обслуговувати дані ваших проектів для світової спільноти заохочуваним і підданим перевірці способом. Він розроблений для підтримки будь-якого проекту SubQuery з будь-якої мережі рівня 1, включаючи Avalanche, тому ви можете скористатися перевагами уніфікованої мережі SubQuery з моменту запуску.

## Інструкції з Інсталяції

Дотримуйтесь посібника з бета-версії тут: https://university.subquery.network/quickstart/quickstart-avalanche.html

Спочатку вам потрібно буде встановити @subql/cli через *npm i -g @subql/cli*

Найкраще почати з нашого стартового проекту, він містить запущений проект із прикладом усіх функцій відображення: https://github.com/subquery/avalanche-subql-starter. Цей проект індексує наступне з [Pangolin Smart Contract](https://snowtrace.io/token/0x60781c2586d68229fde47564546784ab3faca982):

- BlockHandler: усі блоки та їх основна інформація
- TransactionHandler: усі транзакції з функції схвалення в рамках смарт-контракту Pangolin
- EventHandler: усі події передачі зі смарт-контракту Pangolin

Реалізація Avalanche в SubQuery була розроблена так, щоб працювати майже так само, як і підтримка Polkadot в SubQuery, і подібно до підходу Graph. Ми оновили [Університет SubQuery](https://university.subquery.network/build/introduction.html), щоб додати специфічну інформацію про Avalanche до загальної документації SubQuery. Ви можете почати, дотримуючись цього [чудового посібника з початку роботи тут](https://university.subquery.network/quickstart/quickstart-avalanche.html).

## Підтримка SubQuery для Avalanche

Ми завершуємо перший етап нашої повної підтримки екосистеми Avalanche.

![](https://miro.medium.com/max/1400/0*GUKZJfJCz1nB_3zc)

Сьогодні ми ділимося наступним:

- Розширена індексація ланцюга контрактів
- Avalanche Dictionary: попередньо обчислені індекси для [значного скорочення часу індексування](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
- Full support for Avalanche in our free [enterprise level](./20211228-enterprise-hosted.md) managed service
- Intuitive documentation in the [SubQuery University](https://university.subquery.network/)

In the coming weeks you can expect:

- A step by step learning course in the [SubQuery Academy](./20211018-subquery-launches-the-subquery-academy.md)
- Full support for Avalanche in our decentralised SubQuery Network (you'll see a project in our current Frontier test network)

With the number of Subnets planned over the coming months, there will be a huge need for fast, open, and flexible indexing support that works across all compatible Subnets. We have experience implementing this level of configurability for Polkadot's parachains, and are investigating how to provide the same outcome for Avalanche (e.g. by importing custom implementations of snowman.Block etc).

The launch of our beta support for Avalanche marks a significant milestone in our commitment to offer enhanced indexing tools for the Avalanche community to enable her developers to go further, faster. We are eager to get feedback from the community in order to improve our offering and increase our visibility as a trusted infrastructure partner for one of the fastest growing developer communities in Web3

We are now looking for launch partners that we can closely support as they develop their first SubQuery projects in this ecosystem. Reach out to me at james.bayly@subquery.network if you want to be first on the journey with us.

_James Bayly_

Follow the beta guide here: https://university.subquery.network/quickstart/quickstart-avalanche.html

## About SubQuery

[SubQuery](https://subquery.network/) is a blockchain developer toolkit enabling others to build Web3 applications of the future. A SubQuery project is a complete API to organise and query data from layer-1 chains. Currently servicing Polkadot, Substrate, Avalanche and Terra projects, this data-as-a-service allows developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The SubQuery Network proposes to enable this same scalable and reliable solution, but in a completely decentralised way.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
