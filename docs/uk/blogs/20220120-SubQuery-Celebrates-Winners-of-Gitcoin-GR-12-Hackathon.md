# SubQuery відзначає переможців хакатону Gitcoin GR 12

![](https://miro.medium.com/max/1400/1*MnMY9j3nasex9_9MNHUPtA.png)

SubQuery, провідне рішення для індексації даних у Polkadot, з радістю оголошує переможців [недавнього хакатону Gitcoin GR 12](https://gitcoin.co/hackathon/gr12?org=subquery). Gitcoin визнано однією з провідних спільнот розробників блокчейну, зосереджених на створенні спільноти та додатків для Web3. [SubQuery співпрацює з Gitcoin у грудні](https://subquery.medium.com/subquery-announces-gitcoin-hackathon-16c9d18753a), щоб спонсорувати п’ять завдань на суму 37 000 доларів США (найбільший призовий фонд у конкурсі), запрошуючи розробників створювати корисні інструменти, інформаційні панелі та навіть розширювати SubQuery на інший рівень 1 блокчейн.

Хакатон проходив з 1 по 16 грудня 2021 року, а провідні блокчейн-проекти, такі як Moonbeam, Astar і Acala, взяли участь у різноманітних призових фондах. Призи присуджуються тим, хто успішно завершив проекти відповідно до попередньо встановлених стандартів, і хто додає найбільш креативні ідеї, або ті чи вирішує області для покращення основного SubQuery SDK. Нижче наведено короткий підсумок проблем:

- [Створіть уніфікований провідник блоків, який поєднує дані про Substrate та EVM від Moonbeam і Astar в одну просту у використанні програму](https://gitcoin.co/issue/subquery/grants/1) — 12 000 доларів США [Спонсорами Moonbeam та Astar]
- [Створіть інформаційну панель DeFi hub, натхненну Zapper.fi або defisaver.com](https://gitcoin.co/issue/subquery/grants/2) — 8 000 доларів США [Спонсор Acala]
- [Створіть інформаційну панель стейкингу, яка показує найкращі можливості стейкингу в Polkadot та його різних парачейнах](https://gitcoin.co/issue/subquery/grants/3) — 3000 доларів США
- [Створіть дослідник ринку для всіх NFT на основі протоколу RMRK](https://gitcoin.co/issue/subquery/grants/4) — 2000 доларів США
- [Розширити службу @subql/node для індексації даних з іншого ланцюга рівня 1](https://gitcoin.co/issue/subquery/grants/5) — 12 000 доларів США

## Уніфікований EVM та Substrate Block Explorer

Екосистема Polkadot/Kusama складається з блокчейнів (так звані Parachains), створених за допомогою Substrate, який використовує API Substrate. Однак деякі Parachains, такі як Moonbeam і Astar, пропонують безперебійну сумісність з Ethereum, маючи повністю сумісний компонент EVM. Одночасний доступ до даних Substrate та EVM наразі є складним завданням, що призводить до двох ізольованих досвідів у Moonbeam та Moonriver. Ви повинні вибрати між стороною Substrate (наприклад, Subscan) і стороною EVM (наприклад, Moonscan & Blockscout).

Цей виклик був розроблений для вирішення величезної можливості створити єдине місце для розуміння повної історії діяльності облікового запису. Наприклад, щоб побачити дії стейкингу та керування та передачі ERC20 в єдиному інтерфейсі користувача. Це буде програма, яку щодня використовують величезні спільноти в Moonbeam, Astar та багатьох інших парачейнах, сумісних з EVM.

![](https://miro.medium.com/max/1400/0*b_o0NDpJOCv0QvXS)

Переможцем [цього виклику](https://gitcoin.co/issue/subquery/grants/1/10002717200027175) став @bizzyvinci, який [розробив інтерфейс-дослідник, який доступний на Heroku](https://moonriver-explorer.herokuapp.com/). Враховуючи, що це завдання є величезним завданням, не дивно, що воно ще не завершено на 100%, але ми раді підтримати прогрес цієї інновації, яка змінює гру, і допомогти поширити її на інші мережі EVM.

@bizzyvinci сказав наступне: «Я створив [Moonriver Explorer](https://moonriver-explorer.herokuapp.com/), і це був приголомшливий досвід. Першим кроком було дізнатися про SubQuery, і, до біса, у них є чудова документація, яка супроводжується сховищами шаблонів . Документація охоплює все, що потрібно для початку роботи, і добре пояснює кожен аспект, наприклад, файл маніфесту, схему graphql та інше».

## Приладова панель Karura/Acala DeFi

Acala і Karura представляють величезне бачення майбутнього DeFi, тому є велика можливість створити цінні інструменти для екосистеми. Ця проблема вимагала від розробників створити інструменти DeFi для спільноти Karura/Acala, натхненні подібними [Zapper.fi](http://zapper.fi/) і [defisaver.com](http://defisaver.com/), які використовують послуги індексування даних SubQuery.

Переможцем [цього виклику](https://gitcoin.co/issue/subquery/grants/2/100027176) став Web3Go, який створив справді гарний підсумок [Заставних боргових позицій (CDP) Acala](https://web3go.xyz/#/CDPDetail). Щоб користувачі карбували стейблкоіни kUSD на Karura, вони повинні спочатку внести токени одного з прийнятих заставних активів (наприклад, KSM). Після того, як користувач це зробить, параметр мінімального коефіцієнта застави визначає мінімальну суму застави, необхідну для того, щоб користувач карбував kUSD. Якщо ринкова ціна заставного активу CDP впаде досить низько, CDP може вважатися «небезпечним».

![](https://miro.medium.com/max/1400/0*l7GA1axntiHCINRM)

Інтерфейс Web3Go чітко перераховує всі позиції CDP, їх співвідношення та їх безпечний статус. Для кожної позиції він також надає інформацію про історію позиції та дозволяє іншим легко контролювати фінансовий інструмент. <iframe width="560" height="315" src="https://www.youtube.com/embed/hc3YDjv6dkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

## Панель інструментів стейкингу Polkadot

Стейкинг є ключовим способом використання ваших токенів DOT і KSM, але наразі UX для стейкингу важко зрозуміти, і більшість користувачів роблять неосвічений вибір.

Метою цього завдання було поєднати дані в ланцюжку та інтуїтивно зрозумілий досвід користувача, щоб допомогти користувачам зрозуміти найкращий приблизний прибуток від стейкингу, порівняти історичну продуктивність валідаторів і показати користувачам, якою може бути їх рентабельність інвестицій.

Ashik створив PolkStakes, [веб-сайт рейтингу валідаторів Polkadot](https://polkstakes.vercel.app/), який отримує всі валідатори та показує чітко організований список валідаторів у Polkadot з власним рейтингом PolkStake (на основі ефективності попередньої ери, комісій, виплат та винагород за ставку тощо) . Це чистий і простий інтерфейс користувача, який нас справді вразив.

![](https://miro.medium.com/max/1400/0*Kaho31-nn-ly8tFS)

“_ Subquery зменшує зусилля при ручній індексації даних у ланцюжку. Оскільки він пропонує кінцеву точку graphql, ми можемо легко запитувати дані. Це зменшує витрати на підтримку серверної частини та бази даних. Тепер агрегування даних для розрахунку рейтингу Polkstakes здійснюється в інтерфейсі користувача. Це потрібно перемістити в SubQuery. Крім того, потрібно зробити кращу візуалізацію для індексованих даних і додати точніший прогноз приблизної врожайності._” — Ашик з Polkdata.

Відмінна команда SubVis також створила [красиву панель керування стейкингом Polkadot](https://polkadot-staking-dashboard.vercel.app/), яка відображає загальну статистику стейкингу за певний час і продуктивність валідатора в одному місці. Нові функції ставок приєднуються до існуючих сторінок аукціону та краудпози, якими добре відомі SubVis.

![](https://miro.medium.com/max/1400/0*uPDQdMug2JaZwMbA)

Нарешті, Web3Go представив ще один чудовий запис із детальною статистикою стейкингу на Moonriver. Вони надають інформацію навіть про делегаторів для кожного збирача, історичні винагороди, надані кожним збирачем, і навіть про дії, які здійснюють збирачі. Вони забезпечують додаткові переваги можливості показати історію стекінгу для власної адреси гаманця.

![](https://miro.medium.com/max/1400/0*jQgOnvcaXt6cprJR)

## RMRK NFT Marketplace Explorer

RMRK — це вдосконалений протокол лего NFT, що створює NFT, що набагато більше, ніж просто jpeg. Команда RMRK впроваджує нові стандарти NFT в екосистему DOT і є лідером у створенні наступного покоління.

Ця проблема вимагала створення детальної інформаційної панелі, яка відстежує еволюцію всіх RMRK (потенційно зосереджена на [Kanarias](https://kanaria.rmrk.app/)), включаючи передачі, історію емоцій та багато іншого в RMRK2. Ця панель інструментів мала використовувати проект SubQuery, орієнтований на RMRK2.

Переможцем [цього виклику](https://gitcoin.co/issue/subquery/grants/4/100027174) стала інша чудова інформаційна панель від Web3Go під назвою [NFT Garden](https://web3go.xyz/#/NFTProfiler). Містить детальну інформацію про колекцію NFT, наприклад середні ціни, об'єми, ціни на діапазони та всі транзакції для кожного окремого елемента. Крім того, є кілька цікавих візуалізацій щодо всіх ознак у NFT.

![](https://miro.medium.com/max/1400/0*1_mUnNIBYI84G_qs)

«_З моменту створення Web3Go ми використовували SubQuery як базову архітектуру для індексування даних. Набір для розробки, наданий SubQuery, виявився дуже придатним для нашої команди для швидкої розробки, розгортання та оновлення проектів, що також є ключем до наших хороших результатів на Gitcoin Hackathon. На наступному кроці ми будемо використовувати Subquery для розробки інформаційних панелей для всіх проектів на Polkadot & Парачейни Kusama, які залучатимуть Defi, NFT та токени!_», – говорить Хао Дін з Web3Go.

## Розширте SubQuery на інший Blockchain рівня 1

SubQuery є рідною для Polkadot, це наш дім, і ми наполегливо працювали, щоб побудувати відносини в цій екосистемі. Незважаючи на це, ми також віримо в багатоланцюгове майбутнє, оскільки знаємо, що багато різних блокчейнів працюватимуть разом для вирішення різних проблем. Наш довгостроковий план полягає в тому, щоб використовувати SubQuery і адаптувати його для роботи з іншими блокчейнами, які не мають поточного рішення для індексації, щоб допомогти розробникам створювати нові dApps.

The winner of [this US$12,000 challenge](https://gitcoin.co/issue/subquery/grants/5/100027175) was Naveen who extended SubQuery to index the Terra blockchain. This was implemented by creating a fork that extends the node package of the official subql implementation to index Terra. Naveen is continuing to work on this and you can expect news soon about SubQuery’s plans for support of other layer 1 chains outside of Polkadot. <iframe width="560" height="315" src="https://www.youtube.com/embed/K_pjh5OC95A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

“_I have been studying a bunch of indexers in the past few months and went as far as building an indexer from scratch. That might be the reason why SubQuery caught my attention in the Gitcoin GR12 Hackathon. I took up the task of extending SubQuery to index Terra. I did not believe that I could pull this off in 15 days. But, SubQuery was architected in such a magnificent manner that it allowed me to create a mental picture of what is happening under the hood very quickly. I hacked together a working solution just in time and I am currently working with SubQuery to merge the Terra indexer into the subql package. In the foreseeable future, I will be continuing to work with SubQuery to maintain and scale the project and possibly build indexers for several other layer 1 chains_” said Naveen.

[Sam Zou](https://twitter.com/zoujialiu), the CEO and Founder of SubQuery commented, “_SubQuery is delighted with the results of the Gitcoin GR12 Hackathon. Our mission relies on having a network of developers who are empowered to create and innovate within the Substrate/Polkadot ecosystem. This partnership provided opportunities for motivated developers around the world to build the applications of tomorrow. We are excited to nurture the winners of the challenges to develop their ideas even further_”

Following on from this successful Hackathon, SubQuery would like to encourage developers who would like to learn more about how to build applications with SubQuery to [register for our free online “Hero Course”, or apply for our recently announced Grants Programme](https://subquery.coassemble.com/unlock/dOKZW6O#/).

---

## About SubQuery

[SubQuery](https://subquery.network/) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. This service unlocks blockchain data and transforms it to a queryable state so that it can be used in intuitive applications. It allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The upcoming SubQuery Network will decentralize and tokenize the ecosystem to allow everyone to participate in the web3 data revolution.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
