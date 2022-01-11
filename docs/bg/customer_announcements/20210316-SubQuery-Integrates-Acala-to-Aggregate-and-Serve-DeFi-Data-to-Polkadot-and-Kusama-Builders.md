# SubQuery интегрира Acala за агрегиране и предоставяне на DeFi данни на Polkadot и Kusama Builders

![](https://miro.medium.com/max/1400/1*cg4kJs0WEcyPP73EAtHomA.png)

Миналата седмица [SubQuery](https://www.subquery.network/) пусна следващия етап от своя проект - [SubQuery Explorer](https://explorer.subquery.network/). Тази седмица Acala и SubQuery финализираха интеграцията, за да позволят на потребителите и разработчиците да правят заявки и да извличат данни от DeFi хъба на Acala за Polkadot само за няколко минути и безплатно.

SubQuery е слой за агрегиране на данни, който ще работи между блокчейна на слой 1 (Acala) и слоя DApp. Решението обединява и организира данни от Acala и други блокчейн, като предоставя добре структурирани данни, които разработчиците могат да използват за широк спектър от проекти. Тази услуга позволява на разработчиците на DApp да се съсредоточат върху основния си случай на използване и фронт енд, без да е необходимо да губят време за изграждане на персонализиран бекенд за обработка на данни.

Acala е твърд привърженик и дългосрочен строител на бъдещето на multi-chain - намаляване на фрагментацията на ликвидността, увеличаване на съвместимостта и осигуряване на достъп до DeFi за всички. Acala е специализиран блокчейн с фокус върху децентрализираните финанси (DeFi) и създаде множество DeFi примитиви, които се превърнаха в DeFi хъб и инфраструктура, обслужваща екосистемите Polkadot и Kusama. Екипът е създал продукти, сред които многостранна стабилна монета (aUSD - Acala Dollar), автоматичен маркет мейкър (AMM) DEX, токенизиран актив със залог, наречен Liquid DOT (LDOT), и е внедрил функцията "bring-your-own-gas", която позволява таксите за газ да се плащат във всякакви поддържани активи, като например стейблкойни. Парачинът на Acala планира да играе ролята на DeFi хъб за Polkadot и на площадка за кацане, която обединява активи и ликвидност от различни блокчейн.

Днес, когато влезете в [SubQuery Explorer](https://explorer.subquery.network/), ще ви посрещне нов проект на Acala SubQuery. Тази SubQuery динамично проследява всички външни данни, създадени в Acala, и може бързо да покаже производни обобщени статистики за следното:

-   Исторически данни за промените в ликвидността (с разбивка по доставчици)
-   Исторически данни за всички суапове на активи по cross chain
-   История на трансфера

![](https://miro.medium.com/max/1400/0*sXPljA1RE754fuDQ)

Можете да си играете на Acala SubQuery Graph, като използвате [Explorer](https://explorer.subquery.network/), без да въвеждате нищо в кода. Additionally, we’ve documented the types that you can specify in each GraphQL request when analysing Acala’s data.

Below is a simple example of how a user can quickly and easily see the previous 5 transfer events using the ACA token over the Acala Mandala network. You can see here that we use simple GraphQL language to sort and retrieve this data to any client. DApps can use this to monitor loan positions, and jump on auctions etc to help liquidate collaterals.

![](https://miro.medium.com/max/1400/0*zlxPf2tz8DVX95kY)

A slightly more complex example follows, where we inspect a single account and retrieve all token swap events made by it. A portfolio DApp might use this data to create an overview of the holder’s account and token performance, revenue from staking, liquidity provisioning, and expenses on borrowing.

![](https://miro.medium.com/max/1400/0*hdTbn41vDvIYuv3_)

[SubQuery Explorer](https://explorer.subquery.network/) is an online hosted service that provides access to published SubQuery projects made by contributors around the world and managed by the SubQuery team. Its mission is to ease access to Polkadot network data by providing infrastructure services to help developers achieve more.

[SubQuery](https://www.subquery.network/) allows every Substrate/Polkadot team to process and query their data. The project is inspired by the growth of data protocols serving the application layer and its aim is to help Polkadot/Substrate projects build better dApps by allowing anyone to reliably find and consume data faster. Today, anyone can query and extract Polkadot network data in only minutes and at no cost.

[Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

[Acala](http://acala.network/) is the decentralized financial hub and stablecoin of Polkadot that makes it fast and easy to use or build financial applications, improving trading efficiency and saving time. The platform offers a suite of financial primitives: a multi-collateralized stablecoin backed by cross-chain assets like Bitcoin, a trustless staking derivative, and a decentralized exchange to unleash liquidity and power financial innovations. Acala is the de facto open platform for finance applications to use smart contracts or built-in protocols with out-of-the-box cross-chain capabilities and robust security.

[Discord](https://discord.gg/vdbFVCH) | [Website](https://acala.network/) | [Twitter](https://twitter.com/AcalaNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [Acala Wiki](https://github.com/AcalaNetwork/Acala/wiki) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc)