# SubQuery Листопад Технічне оновлення: оновлення EVM та маніфесту

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**Детальніше про наше технічне глибоке занурення в останній випуск SubQuery**

## Support for External Chain Type Files in Project Manifest

Сьогодні запуск [ версії 0.2.0 ](https://doc.subquery.network/create/manifest/) нашого файлу маніфесту проекту (` project.yaml `). Ця нова версія надає розробникам різні вдосконалення, які вимагали клієнти.

Найголовніше, що тепер ви можете посилатися на файл визначення типу ланцюга, який включає всі користувацькі типи, коли ви індексуєте власну ланцюжок підкладки. Це швидко дозволяє підключити новий проект SubQuery до будь-якої ланцюга на основі субстрату, включаючи всі парашаї Kusama. Це повинен бути стандартний файл типу ланцюга, який оголошує конкретні типи, підтримувані цим блокчейном, у форматі ` .json ` або ` .yaml `.

Це рішення дозволяє уникнути копіювання та управління визначеннями типів ланцюга в самому маніфесті та дозволяє просто клонувати файли типу [, опубліковані у сховищах, таких як PolkadotJS ](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec).

[Ви можете прочитати про новий файл маніфесту, включаючи те, як ви можете перенести свої проекти до нього, тут, у наших оновлених документах.](https://doc.subquery.network/create/manifest/)

## Moonbeam EVM Support

Last week we were pleased to [announce that we were working with Moonbeam to bring complete EVM and Substrate indexing support to Moonriver](../customer_announcements/20211028-moonbeam-evm.md).

Сьогодні ми слідкуємо за цим оголошенням з усіма ресурсами розробника, які вам потрібно розпочати

Наразі не існує інструменту з відкритим кодом, який дозволяє розробникам гнучко збирати та запитувати дані як в Ethereum, так і в Polkadot / Kusama. Це обмеження може призвести до того, що рішення dApps в Moonriver будуть заглушені в розумний контрактний рівень і тим самим обмежувати їх потенціал для споживачів в обох процвітаючих мережах. Це партнерство з Moonbeam пропонує повне і уніфіковане рішення для індексації даних для всіх даних blockchain в Moonriver і значною мірою принесе користь зростаючій екосистемі додатків Moonriver.

** SubQuery буде гостем на наступній майстерні Moonbuilders у середу, 1 грудня, ** [** зареєструйтесь тут **](https://www.crowdcast.io/e/moonbuilders-ws/10) **.**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[Firstly, familiarize yourself with the updated documentation on how to connect to and index data from Moonbeam, Moonbase Alpha, and Moonriver.](https://doc.subquery.network/create/substrate-evm/) The process to index Moonbeam data is only two steps:

### Step 1: Add the Moonbeam Custom Data Source

Ми створили процесор даних, спеціально створений для роботи з реалізацією Moonbeam [ Frontier ](https://github.com/paritytech/frontier). Це дозволяє посилатися на конкретні ресурси ABI, які використовуються процесором для розбору аргументів, та розумну адресу контракту, з якої відбуваються події або здійснюється дзвінок. [You can read more here](https://doc.subquery.network/create/substrate-evm/#data-source-spec).

SubQuery представляє більш досконалі фільтри, ніж інші індексатори, що дозволяє фільтрувати позадоговірні транзакції, відправників транзакцій, контрактів та індексованих аргументів журналу. Це дозволяє розробникам створювати широкий спектр проектів, що задовольняють їх конкретні потреби в даних.

### Step 2: Index Moonbeam Data

Так само, як і звичайний проект SubQuery, ви використовуєте функцію картографування для перетворення даних ланцюга в об'єкти GraphQL, які ви визначаєте, різниця полягає в тому, що замість ` SubstrateEvent ` або ` SubstrateExtrinsic `, Ваша функція відображення отримає ` MoonbeamCall ` або ` MoonbeamEvent `, які базуються на типі Ether [ TransactionResponse ](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) або [ Log ](https://docs.ethers.io/v5/api/providers/types/#providers-Log). [You can read more about these here](https://doc.subquery.network/create/substrate-evm/#frontierevmcall).

[Прочитати всю документацію по цьому процесу тут](https://doc.subquery.network/create/substrate-evm/#frontierevmcall)

### Example Project

Існує повний приклад проекту, який індексує ет ` передачі ` подій та ` схвалення ` розумних контрактних дзвінків. Код для цього прикладу проекту [ тут на GitHub ](https://github.com/subquery/tutorials-moonriver-evm-starter) або доступний через проект [ Live SubQuery на SubQuery Explorer тут ](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project).

Основна частина змін відбувається у файлі Manifest (` project.yaml `). You can see below that we have [extended call filters](https://doc.subquery.network/create/substrate-evm/#call-filters) to support either [function signature strings](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) or the function sighash to filter the function called on the contract. For [event filters](https://doc.subquery.network/create/substrate-evm/#event-filters), you can use topics filtering that follows the [Ethereum JSON-PRC log filters standard found here](https://docs.ethers.io/v5/concepts/events/). Зауважте, що SubQuery представляє більш досконалі фільтри, ніж інші індексатори для Moonbeam EVM, і ці вдосконалення повинні значно принести користь розробникам.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

Якщо ви знайомі з тим, як складається проект SubQuery на основі Substrate, ви помітите, наскільки схожі функції картографування для нової підтримки Moonriver. Кожна функція відображення отримує ` MoonbeamCall ` або ` MoonbeamEvent ` і обробляє їх так само, як і будь-який інший проект SubQuery.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

If you have any questions about this make sure you [check our docs](https://doc.subquery.network/create/substrate-evm) or reach out to us on our #technical-support channel in our [Discord community](https://discord.com/invite/subquery).

[Склонуйте приклад проекту на GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

Як бачите, створення проекту Moonriver або Moonbase Alpha, який індексує як Substrate, так і EVM дані в одному проекті, надзвичайно простий і багато в чому схожий. Ви можете використовувати вдосконалені інструменти будівельних лісів SubQuery, щоб прискорити розробку dApp та скористатися або багатшою індексацією для ваших даних для створення більш інтуїтивних dApps. Ми не можемо дочекатися, щоб побачити те, що ви створюєте!

## About SubQuery

SubQuery - це шар агрегації даних, який працює між блокчейнами шару-1 (такими як Moonriver та Polkadot) та DApps. Ця послуга розблокує блокчейн-дані та перетворює їх у запитуваний стан, щоб їх можна було використовувати в інтуїтивно зрозумілих додатках. Це дозволяє розробникам DApp зосередитись на своєму основному корпусі використання та передній частині, не витрачаючи часу на створення спеціального бекенда для обробки даних.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## About Moonbeam

Moonbeam - це сумісна з Ethereum платформа розумних контрактів у мережі Polkadot, яка дозволяє легко створювати взаємодіючі програми. Ця сумісність Ethereum дозволяє розробникам розгортати існуючі розумні контракти Solidity, а DApp переходить до Moonbeam з мінімальними змінами. Як парашайн у мережі Polkadot, Moonbeam отримає користь від спільної безпеки релейного ланцюга Polkadot та інтеграції з іншими ланцюгами, підключеними до Polkadot. В даний час в активній розробці PureStake очікується, що Moonbeam досягне MainNet до четвертого кварталу 2021 року. Дізнайтеся більше: [ https://moonbeam.network/](https://moonbeam.network/).
