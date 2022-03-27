# SORA интегрира SubQuery за предоставяне на данни до SORA Network

![sora-header.jpg](https://miro.medium.com/max/1400/1*fPPW0DsynIt9QpvK4ZrsUA.jpeg)

Днес имаме удоволствието да обявим нов вълнуващ проект в SubQuery - SORA и Polkaswap. [SORA](https://sora.org/) изгради проект SubQuery, който извлича данни от мрежата SORA, за да захранва мобилни приложения, изградени върху SORA и [Polkaswap.io](http://polkaswap.io/). Можете да го изпробвате [тук](https://explorer.subquery.network/subquery/sora-xor/sora).

![sora-frontend.jpg](https://miro.medium.com/max/1400/1*pq0U6wsutlf8rjXqq7i2BQ.jpeg)

> "SubQuery беше избран, за да подобрим UX-а на мрежата SORA. Използвахме SubQuery, за да получим и изброим външни детайли, да изчислим фиатните цени и APY на ликвидния пул. Целта ни беше да получим история на транзакциите и обобщени данни за приложенията, които работят с мрежата SORA.
> 
> SubQuery беше идеалното решение за нашите нужди, тъй като приложението е лесно за внедряване и управление, лесно е за научаване и разработване, както и за добро документиране, а освен това има собствена инфраструктура с интеграция в Github. Обикновеното структуриране на данните на SubQuery осигурява бърз достъп, поддържа GraphQL API за клиентски приложения, има гъвкава конфигурация за анализиране на събития, екстринси и блокове с допълнително филтриране. И накрая, приложението е напълно прозрачно за потребителите, така че те няма да забележат дали приложението е било актуализирано или спряно."-SORA Development Team

Polkaswap е водещ DEX в процъфтяващата екосистема на Polkadot и използва SubQuery, за да извлича трансфери, суапове, които се случват в Polkaswap, добавянето или премахването на ликвидност, фиксираната цена на токените и APY за пуловете за ликвидност.

SubQuery вече улеснява разработването на мобилното приложение на SORA и Polkaswap, като намалява времето, което екипът отделя за изграждане на персонализирани бекенд решения, а екипът на SORA планира да разшири своя Polkaswap SubQuery проект, за да поддържа още по-добре Polkaswap в бъдеще.

![sora-explorer.jpg](https://miro.medium.com/max/1400/1*vjdjmmffvJ7zfOQyxo0ZAA.jpeg)

В този пример използваме SubQuery, за да извлечем общата сума на XOR, която се съдържа във всеки пул за ликвидност (и филтър, за да се покажат само първите 2 пула). Този пример показва и текущата APY, свързана с всеки пул за ликвидност (и филтър, за да покаже само първите два пула).

![sora-playground.jpg](https://miro.medium.com/max/1400/1*oTh-ajGfG1oEhYdvqo12tQ.jpeg)

SORA използва [SubQuery Projects](https://project.subquery.network/) за да управлява своя проект и да прави актуализации при необходимост. Предоставените от нас услуги за индексиране и заявки се управляват изцяло от SubQuery и се предоставят безплатно на общността на Polkadot в [SubQuery’s Explorer](https://explorer.subquery.network/).

Разгледайте проекта на SORA в SubQuery explorer [тук](https://explorer.subquery.network/subquery/sora-xor/sora).

---

### За SORA

SORA създава наднационална световна икономическа система с вградени инструменти за децентрализирано финансиране (DeFi) под криптографския демократичен надзор на Парламента на SORA.

Мрежата SORA се отличава с това, че предоставя инструменти за децентрализирани приложения, които използват цифрови активи, като например atomic token swaps, bridging tokens с други блокчейн и създаване на програмни правила, включващи цифрови активи.

[Website](https://sora.org/) | [Reddit](https://www.reddit.com/r/SORA/) | [Blog](https://sora.org/blog) | [Telegram](https://t.me/sora_xor) | [Twitter](https://twitter.com/sora_xor) | [YouTube](https://youtube.com/sora_xor) | [Instagram](https://instagram.com/sora_xor)

### За SubQuery

[SubQuery](https://subquery.network/) е децентрализиран слой за агрегиране на данни и индексиране& на заявки между блокови вериги Layer-1 и децентрализирани приложения (DApps). Понастоящем фокусирана върху проектите Polkadot и Substrate, тази услуга за данни като услуга позволява на разработчиците да се съсредоточат върху основния си случай на използване и предния край, без да е необходимо да губят време за изграждане на персонализиран бекенд за обработка на данни.

[Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Email](mailto:hello@subquery.network)