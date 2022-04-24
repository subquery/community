# SubQuery ноември техническа актуализация: EVM и обновяване на манифеста

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**Прочетете повече в нашия задълбочен преглед на най-новата версия на SubQuery**

## Support for External Chain Type Files in Project Manifest

Днес стартира [версия 0.2.0](https://doc.subquery.network/create/manifest/) на манифестния файл на нашия проект (`project.yaml`). Тази нова версия предоставя на разработчиците различни подобрения, поискани от клиентите.

Най-важното е, че вече можете да препращате към файл с дефиниране на типа верига, който включва всички персонализирани видове, включени когато индексирате персонализирана субстрат верига. Това бързо ви позволява да свържете нов проект SubQuery към всяка верига, базирана на субстрат, включително всички парачейни на Kusama. Това трябва да е стандартен блокчейн вид файл, който декларира специфичните видове, поддържани от този блокчейн във формат `.json` или `.yaml`.

Това решение ви позволява да избягвате копирането и управлението на дефинициите в самия манифест и ви позволява просто да клонирате [публикуваните файлове, изброени в хранилища като PolkadotJS](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec).

[Можете да прочетете за новия файл на манифеста, включително как можете да мигрирате проектите си към него, тук в нашите актуализирани документи.](https://doc.subquery.network/create/manifest/)

## Moonbeam EVM Support

Last week we were pleased to [announce that we were working with Moonbeam to bring complete EVM and Substrate indexing support to Moonriver](../customer_announcements/20211028-moonbeam-evm.md).

Днес допълваме това съобщение с информация за всички ресурси за разработчици, от които се нуждаете, за да започнете.

Понастоящем няма инструмент с отворен код, който позволява на разработчиците гъвкаво да събират и заявяват данни както в Ethereum, така и в Polkadot/Kusama. Това ограничение може да накара dApps решенията в рамките на Moonriver да бъдат изолирани в смарт контракт леъра и по този начин да се ограничи потенциала им за потребителите на двете развиващи се мрежи. Това партньорство с Moonbeam носи цялостно и унифицирано решение за индексиране на данни за всички блокчейн данни в Moonriver и ще бъде от голяма полза за нарастващата екосистема на приложенията на Moonriver.

**SubQuery ще бъде гост на следващия семинар на Moonbuilders в сряда, 1 декември,** [**Регистрирайте се за него тук**](https://www.crowdcast.io/e/moonbuilders-ws/10)**.**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[Firstly, familiarize yourself with the updated documentation on how to connect to and index data from Moonbeam, Moonbase Alpha, and Moonriver.](https://doc.subquery.network/create/substrate-evm/) The process to index Moonbeam data is only two steps:

### Step 1: Add the Moonbeam Custom Data Source

Създадохме процесор на данни, специално създаден да работи с внедряването на Moonbeam на [Frontier](https://github.com/paritytech/frontier). Позволява ви да препращате към специфични ABI ресурси, използвани от процесора, за да анализирате аргументите и адреса на смарт контракта, от който идват събитията или до който е направено повикването. [You can read more here](https://doc.subquery.network/create/substrate-evm/#data-source-spec).

SubQuery въвежда по-усъвършенствани филтри от другите индексатори, позволявайки филтриране на транзакции извън контракта, податели на транзакции, контракти и индексирани аргументи от лога. Това позволява на разработчиците да създават голямо разнообразие от проекти, които отговарят на техните специфични нужди от данни.

### Step 2: Index Moonbeam Data

Точно като нормален проект на SubQuery, вие използвате мапинг функция за трансформиране на данни извън веригата към обектите на GraphQL, които дефинирате, разликата е, че вместо `SubstrateEvent` или `SubstrateExtrinsic`, вашата мапинг функция ще получи `MoonbeamCall` или `MoonbeamEvent`, които са базирани на типа [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) или [Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log) на Ether. [You can read more about these here](https://doc.subquery.network/create/substrate-evm/#frontierevmcall).

[Прочетете пълната документация за този процес тук](https://doc.subquery.network/create/substrate-evm/#frontierevmcall)

### Example Project

There is a complete example project that indexes eth `трансферни` събития и `одобрява` повиквания на смарт контракти. Кодът за този примерен проект е [тук в GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter) или е достъпен чрез [работещия проект SubQuery в SubQuery Explorer тук](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project).

По-голямата част от промените се извършват във файла на манифеста (`project.yaml`). You can see below that we have [extended call filters](https://doc.subquery.network/create/substrate-evm/#call-filters) to support either [function signature strings](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) or the function sighash to filter the function called on the contract. For [event filters](https://doc.subquery.network/create/substrate-evm/#event-filters), you can use topics filtering that follows the [Ethereum JSON-PRC log filters standard found here](https://docs.ethers.io/v5/concepts/events/). Имайте предвид, че SubQuery въвежда по-усъвършенствани филтри от други индексатори за Moonbeam EVM и тези подобрения би трябвало значително да са от полза за разработчиците.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

Ако сте запознати с начина, по който се създава SubQuery проект, базиран на Substrate, ще забележите колко сходни са мапинг функциите за новия съпорт на Moonriver. Всяка мапинг функция получава `MoonbeamCall` или `MoonbeamEvent` и ги обработва точно както всеки друг проект на SubQuery.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

If you have any questions about this make sure you [check our docs](https://doc.subquery.network/create/substrate-evm) or reach out to us on our #technical-support channel in our [Discord community](https://discord.com/invite/subquery).

[Клонирайте примерния проект в GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

Както можете да видите, създаването на проект Moonriver или Moonbase Alpha, който индексира както Substrate, така и EVM данни в един проект, е изключително просто и до голяма степен сходно. Можете да използвате усъвършенстваните инструменти за скеле на SubQuery, за да ускорите развитието на вашите dApp и да се възползвате от предимствата на по-богато индексиране на вашите данни, за да създадете по-интуитивни dApps. Нямаме търпение да видим какво създавате!

## About SubQuery

SubQuery е слой за агрегиране на данни, който работи между блокчейните от слой 1 (като Moonriver и Polkadot) и DApps. Тази услуга отключва блокчейн данни и ги трансформира в състояние за запитване, така че да може да се използва в интуитивни приложения. Той позволява на разработчиците на DApp да се съсредоточат върху основното си приложение и фронт енда, без да е необходимо да губят време за изграждане на персонализиран бекенд за обработка на данни.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## About Moonbeam

Moonbeam е съвместима с Ethereum платформа за смарт контракти (интелигентни договори), в мрежата Polkadot, която улеснява изграждането на вътрешно съвместими приложения. Тази съвместимост с Ethereum позволява на разработчиците да внедряват съществуващи смарт контракти на Solidity и DApp интерфейси към Moonbeam с минимални промени. Като парачейн в мрежата на Polkadot, Moonbeam ще се възползва от споделената сигурност на Polkadot и интеграциите с други вериги, които са свързани с Polkadot. В момента в активна разработка от PureStake, Moonbeam се очаква да достигне до MainNet до четвъртото тримесечие на 2021 г. Научете повече: [https://moonbeam.network/](https://moonbeam.network/).
