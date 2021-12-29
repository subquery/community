# SubQuery випускає технічну дорожню карту

![](https://cdn-images-1.medium.com/max/800/1*Qcu5mFIs8eJhAXaMpWOlMQ.png)

**SubQuery оголошує ключові основні етапи, включаючи часову шкалу TGE**

Сьогодні ми раді вперше випустити нашу детальну технічну дорожню карту. Мета SubQuery - бути провідним постачальником даних в екосистемі Polkadot, і підтримка, яку ми мали від громади, щоб допомогти нам усвідомити це бачення, була дивовижною. Від нашого офіційного закладу наприкінці 2020 року через [ Web3 Grant ](https://web3.foundation/), до випуску нашої першої версії з відкритим кодом у січні 2021 року та [ закриття нашої серії A у вересні ](https://subquery.medium.com/series-a-1abed6c1c2af), ми хотіли б подякувати вам за всю вашу підтримку в тому, щоб перейти до нас на цьому етапі!.

Поки ми продовжуємо набирати обертів, настав час поділитися більше про наші плани на майбутнє, включаючи нашу технічну дорожню карту. Ми раді, як наступна еволюція SubQuery принесе ще більшу цінність екосистемі Polkadot та надасть більше можливостей для нашої громади брати участь у нашому зростанні.

## Наше майбутнє

Хоча SubQuery вже щодня обслуговує мільйони запитів даних до [ понад 60 проектів на Polkadot & amp; Kusama ](https://project.subquery.network/), ми хотіли забезпечити, щоб наша наступна фаза зростання була проведена організовано та контрольовано.

З цієї причини ми вважаємо, що важливо продемонструвати та повністю перевірити масштабованість мережі SubQuery за допомогою стимульованої програми testnet. Цей процес також дозволить нам створити спільноту індексаторів перед тим, як публічно запустити через TGE у березні 2022 року та наш можливий основний мережу пізніше наступного року.

![](https://miro.medium.com/max/2400/1*I6mko5xumHAArzGePvEZiQ.jpeg)

Таким чином, ключові результати нашого робочого процесу можуть бути розбиті на наступні основні віхи.

## Де ми зараз - середина четвертого кварталу 2021 року

### Підтримка EVM для парашаїв

Незабаром ми випустимо [ нашу бета-підтримку для реалізації Polkadot віртуальної машини Ethereum (EVM) ](https://medium.com/@subquery/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff). Це дозволяє розробникам Polkadot та Ethereum безперешкодно інтегрувати дані Substrate та EVM в одне місце та запитувати цей єдиний ресурс даних за допомогою GraphQL .

SubQuery представить більш досконалі фільтри, ніж інші індексатори, що дозволить фільтрувати позадоговірні транзакції, відправників транзакцій, контрактів та індексованих аргументів журналу, щоб розробники могли створювати широкий спектр проектів, що задовольняють їх конкретні потреби в даних.

### Академія SubQuery

Академія розроблена для підвищення кваліфікації та розширення можливостей розробників в екосистемі SubQuery, надаючи їм модульну освіту. [ Наш перший курс в Академії - це _ Hero Course _ ](https://doc.subquery.network/academy/herocourse/) і був запущений у п'ятницю 22 жовтня 2021 року.

У межах кожного модуля _ Hero Course_ є кілька уроків від 5 до 10 хвилин, які доставляються записаним відео. Вміст відео супроводжується письмовими підручниками, слайдами, робочими книгами та посиланнями на готове сховище коду GitHub.

Курс призначений для того, щоб розробник нічого не знав про SubQuery, щоб стати експертом у створенні джерела даних SubQuery для їх нового додатка блокчейн.

У наступні кілька місяців ми будемо впроваджувати більше освіти для Співтовариства, щотижневі випуски нового вмісту SubQuery _ Hero Course _ та більше курсів у найближчі тижні.

### Доказ індексації

Доказ індексації дозволяє нам гарантувати, що два різних індексатори, що працюють з одним і тим же проектом SubQuery, індексували точно такі ж дані. Це важливий компонент, необхідний для розвитку децентралізованої мережі SubQuery. Ми використовуємо концепцію під назвою Merkle Mountain, щоб підтвердити та гарантувати це, слідкуйте за майбутнім дописом у блозі, який досліджує це глибше.

### Преміум-сервіс підприємства

У нас є кілька великих клієнтів, таких як Karura, Kodadot та Fearless Wallet, які працюють у виробництві в SubQuery. Ці команди вимагають покращеного обслуговування та підвищення рівня надійності.

Ми вирішуємо проблему: Угоди про рівень обслуговування, рівні обслуговування підприємств та інші інструменти, необхідні нашим більшим клієнтам для ведення власного бізнесу та отримання найкращих можливих результатів від SubQuery для їх заявок.

Будь ласка, зв'яжіться з командою, якщо ви хочете поговорити з нами про отримання послуг на рівні підприємства та підтримку від SubQuery

## Веха 1 - Конец четвертого квартала 2021 года

### Программа SubQuery Builders / Grants

This grants programme is designed to facilitate and catalyse innovation with Polkadot and SubQuery, and to build the next generation of dApps to power the web3 revolution. It will support new projects with grants, technical support, marketing and business development advice from SubQuery and others.

We are excited about the potential of this and will be releasing more information soon.

### Coordinator and client SDK implementations

We will be improving our core SubQuery SDK and adding additional components for a SubQuery coordinator and client.

The indexer coordinator will be deployed by indexers to expose the network to the indexer, and allow the indexer to register itself with the SubQuery network and advertise the data that it is making available

The client SDK will be for the consumer role, and will allow them to find indexers and manage the entire transaction that a consumer will need to retrieve and pay for data.

### SQT Network contract internal MVP

Our first version of the SubQuery network will be within a smart contract, deployed on a leading Polkadot parachain. The internal MVP will allow us to internally start testing out everything here, and is a huge milestone for us to complete.

### EU Cluster

Our customers are requesting support for more clusters for SubQuery data around the world. More clusters mean more resiliency, and hosted SubQuery data closer to where their customers are. A new European cluster means faster requests for consumers, unrivalled performance for dApp developers and more resiliency for the SubQuery network.

### Improvements to subql init

The _subql init_ command is a familiar one for anyone that has built a SubQuery project; it represents a blank canvas — limitless opportunities. We are aware that we can do better to help others get started, rather than a blank canvas developers want a blank scaffold, where all the boiler-plate code is already written.

This roadmap item represents work we want to do to allow developers to start building on any parachain without needing to worry about endpoints, dictionaries, and types — all saving time for developers and helping others get started.

## Milestone 2 — Middle of Q1 2022

### Public testnet launch

Following the SQT Network contract internal MVP, we will invite a small group of participants to onboard and join us as we start testing the SubQuery Network. In order to launch, we need to complete a large number of tasks and an even bigger amount of documentation!

In early 2022, we will share more information about this process and how you can apply to take part.

### Point-in-time indexing

Imagine being able to find out the state of the blockchain at a certain point in time - what exactly did a SubQuery project look like back at the 5 millionth block? This is exactly what this new feature will provide.

### SQT Network contract v1 and external code audit

All important networks require a through code audit by an external partner to ensure that the network’s code is secure and scalable. SubQuery is no different, so we’ll be working with key partners for a full code audit here and also continue to receive code audits for our smart contracts going forward.

### Internal micropayments testing

This is a key feature for us. We are going to be doing a lot of work within the Polkadot ecosystem to manage and handle micropayments within SubQuery. The advantage of Polkadot is tiny transaction fees relative to other networks like Ethereum, meaning micropayments are much more relevant to. This will roll out to our incentivised test network after we carry out thorough internal testing.

### SubQuery Network Explorer and App

We’re building an explorer and other applications to allow participants in the SubQuery Network explore and find data within the SubQuery Network. Consumers will also use this to navigate the library of supported data sources, as well as delegators to analyse how indexers are performing to decide how to delegate their SQT tokens.

### Enterprise health monitoring

Following on from our SubQuery Enterprise service tier, you can also expect a large amount of health monitoring and other performance analytics tools to be made available to customers.

## Milestone 3 — End of Q1 2022

### SQT token generation event

After a successful test network phase we are expecting to launch the SubQuery token on a Polkadot parachain partner. We will be sharing more information on our tokenomics with the community in the coming weeks.

### Public incentivised testnet launch with micropayments

This is the final stage of our test network. We will release everything to our test network and expect participants to push it to its limits. This includes scale and load testing, fine tuning our economic models and coefficients, testing our documentation and onboarding processes, and making sure that you can transact with a precursor to SQT within it.

We expect that we will be rewarding participants of our test network, those that complete certain quests or tasks, and those that act as different members of the test network.

### Data traffic insights and reporting

We are handling millions of data requests to SubQuery projects each day. Most of our customers don’t have analytics in their own dApps for user privacy but they still need to know how their dApps are operating so we will be improving this.

### Scalable intelligent routing

We have a goal of a Billion daily SubQuery requests to our hosted service, that’s why we are going to introduce a globally scalable service with multiple SubQuery hosted services running.

It’s a new and continuously improving feature that automatically routes requests to the closest available node. Additionally, it allows us to redirect all requests immediately to a backup SubQuery zone, providing us with a fault tolerant system in the case of regional outage.

In the future it means that we’ll be creating more and more smaller SubQuery hosted services tactically placed closer to our users.

## Milestone 4 — Middle of Q2 2022

### Launch of the SubQuery Foundation

In our move to create a decentralized SubQuery Network we will establish a SubQuery Foundation to administer the future governance and growth of the ecosystem. The ownership of the SubQuery Network will come under the SubQuery foundation initially.

### Finalise research for other Layer-1 chains

While our home will always be Polkadot we are exploring supporting various other Layer-1 blockchains with our indexing capabilities.

### Liquidity mining program

In order to enhance the liquidity of the SQT token, we will create a liquidity mining program with a decentralized exchange (DEX). This will enable token holders to generate returns on their investment.

## Milestone 5 — End of Q2 2022

### Mainnet launch 🚀

After we complete testing of the SubQuery network will launch the first SubQuery Network mainnet. This is where everything really starts. Initially, we will onboard and reward participants of the test network, and then it will be completely open to everyone in the community.

### Centralised Exchange launch

In order to drive increased adoption of SQT, we anticipate launching the token on one if not multiple leading CEX during this period as well as many other DEXs.

## Milestone 6 — Long term plans

### Launch our own Parachain

Although we initially plan to partner with a top Polkadot parachain to get SubQuery Network released and scaled quicker, in the long-term SubQuery also intends to launch on it’s own parachain and integrate itself even more in the ecosystem.

This self owned parachain will allow us to further innovate in tools that can help developers build the web3 future faster. We want to aim for a parachain slot once we have a proven track record behind us and the data, community, and token to support it.

### SubQuery Foundation moves to a DAO

This one is a long way off, but it’s always our dream the SubQuery eventually becomes a community owned DAO. We’ve said many times that the community plays a huge part in SubQuery, everything that we do is for our customers — becoming a DAO is the embodiment of that focus.

That being said, this is a long long way off, and will only be done once we are absolutely confident of SubQuery's success and future with the community.

## About SubQuery

[SubQuery](https://subquery.network) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. The protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
