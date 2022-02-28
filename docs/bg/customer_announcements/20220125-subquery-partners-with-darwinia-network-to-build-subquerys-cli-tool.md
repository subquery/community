# SubQuery си партнира с Darwinia Network, за да изгради CLI инструмента на SubQuery

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

Днес искаме да обявим партньорството между Darwinia Network и SubQuery Network. Darwinia наскоро спечели своя слот в Kusama parachain aucton и се готви да осигури своя Polkadot слот. Като част от плановете на Darwinia за изграждане на кросчейн хъб за Polkadot, Darwinia си партнира със SubQuery за изграждане на множество приложения, които ще са необходими за предоставяне на най-доброто потребителско изживяване при взаимодействията между веригите

OНашето партньорство е по-сериозно от просто използването на SubQuery за захранване на екосистемата от приложения на Darwinia, Darwinia работи в тясно сътрудничество с екипа на SubQuery за [изграждането на CLI инструмент](https://github.com/fewensa/subquery-cli) за управляваната SubQuery услуга ([https://project.subquery.network](https://project.subquery.network)). Можете да използвате този [CLI](https://github.com/fewensa/subquery-cli), за да създадете SubQuery проект и автоматично да пуснете нова версия или в етапния слот, или в производствен слот. Освен това, можете да извлечете информация, включително подробното състояние на синхронизиране и детайли за влизане от вашия работещ проект, който се хоства безплатно в SubQuery Projects. Darwinia надгради това и представи примерен [работен поток на GitHub Action](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml), който използва CLI инструмента, за да направи това при всяко натискане към основния клон на тяхното [хранилище](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml). Тази нова автоматизация е отличен пример за тясната връзка между Darwinia и SubQuery, а инструментът CLI вече се използва от много други проекти в рамките на голямата екосистема на SubQuery.
> “SubQuery CLI инструмента, който създадохме, наистина направи нашата поточна линия за разработка лесна, сега можем изцяло да управляваме версиите в клоновете и да се чувстваме уверени, че промените ни ще бъдат качени автоматично в хостваната услуга на SubQuery. Ние сме горди с нашия автоматизиран процес, за проверка, дали файлът schema.graphql се е променил и ако е така, ще качим, отново нова чиста база данни” — Ялин, основен разработчик – Darwinia Network


Вижте [новият CLI инструмент тук](https://github.com/fewensa/subquery-cli) и вижте [жив пример за него тук](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml).

Първото от многото приложения в нарастващата екосистема от приложения на Darwinia е приложението [Wormhole](https://wormhole.darwinia.network/). Wormhole е лесно за използване приложение, което прави прехвърлянето на активи между мрежите лесно и е ключова част от кросчейн стратегията на Darwinia. В момента мостът между Darwinia и Ethereum работи. [SubQuery се използва за показване на исторически трансфери и събития](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia), записани на вашия адрес в Darwinia/Crab/Pangolin, свързани с wormhole (например пристигане на активи от друга мрежа).

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

Екипът на Darwinia е в процес на изграждане на ново [смарт приложение, което да бъде център](https://apps.darwinia.network/) за управление на всички мрежови взаимодействия на Darwinia, включително управление, стейкинг, проучване на данни от веригата и други. Това приложение използва значително количество [SubQuery данни, за да покаже исторически данни и действия](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery ще работи в тясно сътрудничество с екипа на Darwinia, за да направи това най-бързото и лесно потребителско изживяване в цялата екосистема на Polkadot.
> “Развълнувани сме да използваме SubQuery, за да заменим съществуващите ни бекенд услуги за Wormhole, в дългосрочен план с мрежата SubQuery ще направим нашите услуги напълно децентрализирани и с отворен код – това е нещо, с което се гордеем!”” — Ялин, основен Разработчик — Darwinia Network


Освен това, Darwinia използва SubQuery, [за да предостави данните зад ](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot) техния [уеб сайт за Парачейн заеми](https://darwinia.network/plo_contribute). Въпреки, че Crab вече спечели своя слот на Kusama, не е твърде късно да допринесете за кампанията на Darwinia за слот върху Polkadot. Те се възползват от SubQuery за индексиране на [Merkle Mountain ranges](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr) за всички блокове, създадени в тяхната мрежа.

Darwinia Network използва [SubQuery Projects](https://project.subquery.network/), за да управлява собствени проекти и да прави актуализации според нуждите. Услугите за индексиране и заявки, които предоставяме, се управляват изцяло от SubQuery и се предоставят на Polkadot общността безплатно в [SubQuery’s Explorer](https://explorer.subquery.network/).

## Относно Darwinia Network

Darwinia Network е децентрализиран кросчейн бридж изграден върху Substrate, който е „Голдън Гейт мостът“ за кросчейн екосистемата. Той осигурява най-безопасното общо бридж решение, свързващо Polkadot, Ethereum, BSC и други хетерогенни вериги чрез прехвърляне на активи кросчейн и позволявайки дистанционни верижни заявки. Основните му области на приложение включват Defi, кросчейн пазар за търговия на NFT, игри и др.

[Website](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## За SubQuery Network

[SubQuery](https://subquery.network/) е децентрализиран агрегатор на данни, изндексиращ и обработващ заявки слой между блокчейн от слой 1 и децентрализирани приложения (DApps). Понастоящем фокусирани върху проекти Polkadot и Substrate, тези данни като услуга позволяват на разработчиците да се съсредоточат върху основните си функции на продукта и фронт-енда

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
