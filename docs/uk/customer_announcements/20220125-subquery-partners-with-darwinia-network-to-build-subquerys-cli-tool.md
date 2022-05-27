# SubQuery співпрацює з Darwinia Network для створення інструменту CLI SubQuery

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

Сьогодні ми хочемо оголосити про наше партнерство між Darwinia Network та SubQuery Network. Darwinia нещодавно виграла свій слот на ауктоні на парачейні Kusama і готується отримати свій слот Polkadot. У рамках дорожньої карти Darwinia зі створення вузла перехресного ланцюга для Polkadot, Darwinia співпрацює з SubQuery для створення безлічі додатків, які знадобляться для забезпечення максимального користувацького досвіду для міжланцюгових взаємодій.

Наше партнерство глибше, ніж просто використання SubQuery для живлення екосистеми додатків Darwinia. Darwinia тісно співпрацює з командою SubQuery для [розробки інструмента CLI](https://github.com/fewensa/subquery-cli) для керованої служби SubQuery ([https://project. subquery.network](https://project.subquery.network)). Ви можете використовувати цей [CLI](https://github.com/fewensa/subquery-cli) для створення проекту SubQuery та автоматичного розгортання нової версії в проміжному або робочому слоті. Крім того, ви можете отримати інформацію, включаючи детальний статус синхронізації та журнали з вашого запущеного проекту, який безкоштовно розміщено в SubQuery Projects. Darwinia пішла ще далі й побудувала приклад [робочого процесу GitHub Action](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml), який використовує інструмент CLI, щоб зробити це під час будь-якого натискання до основної гілки їхнього [ repository ](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml). Ця нова автоматизація є чудовим прикладом тісного зв’язку між Darwinia та SubQuery, а інструмент CLI вже використовується багатьма іншими проектами у великій екосистемі SubQuery.
> «Інструмент SubQuery CLI, який ми створили, дійсно спростив наш конвеєр розробки, тепер ми можемо повністю керувати випусками у гілках і бути впевненими, що наші зміни будуть автоматично розгорнуті в розміщеній службі SubQuery. Ми особливо пишаємося нашим автоматизованим процесом перевірки, чи змінився файл schema.graphql, і якщо так, ми повторно розгорнемо нову чисту базу даних», — Ялін, основний розробник — Darwinia Network


Перегляньте [новий інструмент CLI тут](https://github.com/fewensa/subquery-cli) і подивіться [живий приклад його тут](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml).

Першим із багатьох додатків у зростаючій екосистемі додатків Darwinia є [додаток Wormhole](https://wormhole.darwinia.network/). Wormhole — це проста у використанні програма, яка полегшує передачу активів між мережами і є ключовою частиною стратегії крос-ланцюга Darwinia. На даний момент працює міст між Дарвінією та Ethereum. [ SubQuery використовується, щоб показати історичні передачі та події](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia), які відбулися на вашій адресі Darwinia/Crab/Pangolin, пов’язаних із червоточиною (наприклад, надходження активів з іншої мережі).

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

Команда Darwinia працює над створенням нового [розумного додатка, який є центральним центром](https://apps.darwinia.network/) для керування всіма мережевими взаємодіями Darwinia, включаючи керування, стейкинг, дослідження ланцюга тощо. Ця програма використовує значну кількість [даних SubQuery для відображення історичних даних і дій](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery буде тісно співпрацювати з командою Darwinia, щоб зробити це найшвидшим і простим користувачем у всій екосистемі Polkadot.
> «Ми раді використати SubQuery, щоб замінити наші існуючі серверні сервіси для Wormhole, у довгостроковій перспективі завдяки мережі SubQuery це зробить наші послуги повністю децентралізованими та відкритим вихідним кодом — це те, чим ми пишаємося!» — Ялін, основний розробник — Darwinia Network


Крім того, Darwinia використовує SubQuery, щоб [надати дані](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot) для свого [веб-сайту пропозицій позик Parachain](https://darwinia.network/plo_contribute). Хоча Crab вже виграв свій слот на Kusama, ще не пізно зробити внесок у кампанію Darwinia за слот Polkadot. Вони також використовують переваги SubQuery для індексації [Merkle Mountain ranges](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr) для всіх блоків, створених у їхній мережі.

Darwinia Network використовує [SubQuery Projects](https://project.subquery.network/) для керування власним проектом та внесення оновлень за потреби. Служби індексації та запитів, які ми надаємо, повністю керуються SubQuery і надаються спільноті Polkadot безкоштовно в [SubQuery’s Explorer](https://explorer.subquery.network/).

## Про мережу Дарвінії

Darwinia Network — це децентралізована мережа крос-ланцюгової мережі на Substrate, яка є «Golden Gate Bridge» міжланцюгової екології. Він забезпечує найбезпечніший загальний бридж-рішення, з’єднуючи Polkadot, Ethereum, BSC та інші гетерогенні ланцюги за допомогою перехресної передачі активів і загального віддаленого ланцюгового виклику. Крім того, основні сфери його застосування включають Defi, міжланцюговий торговий ринок NFT, ігри тощо.

[Website](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## Про мережу SubQuery

[SubQuery](https://subquery.network/) – це децентралізована агрегація даних, індексування & рівень запитів між блокчейнами рівня 1 і децентралізованими додатками (DApps). Наразі зосереджені на проектах Polkadot і Substrate, ці дані як послуга дають змогу розробникам зосередитися на своєму основному варіанті використання та передній

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
