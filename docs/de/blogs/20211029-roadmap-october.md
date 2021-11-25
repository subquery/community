# SubQuery veröffentlicht technische Roadmap

![](https://cdn-images-1.medium.com/max/800/1*Qcu5mFIs8eJhAXaMpWOlMQ.png)

**SubQuery kündigt wichtige Meilensteine an, einschließlich der TGE-Zeitleiste**

Heute freuen wir uns, erstmals unsere detaillierte technische Roadmap veröffentlichen zu können. Das Ziel von SubQuery ist es, der führende Datenanbieter im Polkadot-Ökosystem zu sein, und die Unterstützung, die wir von der Community erhalten haben, um uns bei der Verwirklichung dieser Vision zu helfen, war erstaunlich. Von unserer offiziellen Gründung Ende 2020 über einen [Web3 Grant](https://web3.foundation/) über die Veröffentlichung unserer ersten Open-Source-Version im Januar 2021 bis hin zum [Abschluss unserer Serie A im September](https://subquery.medium.com/series-a-1abed6c1c2af) möchten wir vielen Dank für Ihre Unterstützung, um uns auf diese Stufe zu bringen!

Da wir weiter an Dynamik gewinnen, ist es an der Zeit, mehr über unsere Pläne für die Zukunft, einschließlich unserer technischen Roadmap, zu teilen. Wir sind gespannt, wie die nächste Entwicklung von SubQuery dem Polkadot-Ökosystem noch mehr Wert verleihen und unserer Community mehr Möglichkeiten bieten wird, an unserem Wachstum teilzuhaben.

## Unsere Zukunft

Während SubQuery bereits jeden Tag Millionen von Datenabfragen an [über 60 Projekte auf Polkadot & Kusama](https://project.subquery.network/), wollten wir sicherstellen, dass unsere nächste Wachstumsphase organisiert und kontrolliert abläuft.

Aus diesem Grund halten wir es für entscheidend, dass wir die Skalierbarkeit des SubQuery-Netzwerks durch ein Testnet-Programm mit Anreizen demonstrieren und vollständig testen. Dieser Prozess wird es uns auch ermöglichen, eine Gemeinschaft von Indexern aufzubauen, bevor wir im März 2022 über ein TGE und später im nächsten Jahr über unser Mainnet öffentlich starten.

![](https://cdn-images-1.medium.com/max/800/1*I6mko5xumHAArzGePvEZiQ.jpeg)

Daher können die wichtigsten Ergebnisse unseres Workflows in die folgenden wichtigen Meilensteine unterteilt werden.

## Wo wir jetzt sind — Mitte des 4. Quartals 2021

### EVM-Unterstützung für Parachains

Wir werden in Kürze [unseren Beta-Support für Polkadot-Implementierungen der Ethereum Virtual Machine (EVM)](https://medium.com/@subquery/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff) veröffentlichen. Dies ermöglicht es Polkadot- und Ethereum-Entwicklern, sowohl Substrat- als auch EVM-Daten nahtlos an einem Ort zu integrieren und diese einzelne Datenquelle mit GraphQL abzufragen.

SubQuery führt erweiterte Filter als andere Indexer ein, die das Filtern von Nichtvertragstransaktionen, Transaktionssendern, Verträgen und indizierten Protokollargumenten ermöglichen, sodass Entwickler eine Vielzahl von Projekten erstellen können, die ihren spezifischen Datenanforderungen gerecht werden.

### SubQuery Academy

Die Academy wurde entwickelt, um Entwickler im SubQuery-Ökosystem zu qualifizieren und zu befähigen, indem sie ihnen eine modulare Ausbildung bietet. [Unser erster Kurs in der Akademie ist der _Heldenkurs_](https://doc.subquery.network/academy/herocourse/) und wurde am Freitag, 22. Oktober 2021, gestartet.

In jedem Modul des _Heldenkurses_ gibt es mehrere 5- bis 10-minütige Lektionen, die durch ein aufgezeichnetes Video vermittelt werden. Der Videoinhalt wird von schriftlichen Tutorials, Folien, Arbeitsmappen und Links zum fertigen GitHub-Code-Repository begleitet.

Der Kurs soll einen Entwickler von nichts über SubQuery zu einem Experten für den Aufbau einer SubQuery-Datenquelle für seine neue Blockchain-Anwendung machen.

In den nächsten Monaten werden wir weitere Schulungen für die Community bereitstellen, mit wöchentlichen Veröffentlichungen neuer SubQuery _Hero-Kurs_-Inhalte und weiteren Kursen in den kommenden Wochen.

### Indizierungsnachweis a.g Proof of Indexing

Mit dem Indizierungsnachweis können wir garantieren, dass zwei verschiedene Indexer, die mit demselben SubQuery-Projekt arbeiten, genau dieselben Daten indiziert haben. Es ist eine kritische Komponente, die für die Entwicklung eines dezentralisierten SubQuery-Netzwerks erforderlich ist. Wir verwenden ein Konzept namens Merkle Mountain Ranges, um dies zu bestätigen und zu garantieren. Halten Sie Ausschau nach einem zukünftigen Blogbeitrag, der dies genauer untersucht.

### Premium-Unternehmensservice

Wir haben einige große Kunden wie Karura, Kodadot und Fearless Wallet, die alle Produktionsanwendungen in SubQuery ausführen. Diese Teams fordern einen verbesserten Service und ein höheres Maß an Zuverlässigkeit.

Wir stellen uns dieser Herausforderung mit Service Level Agreements, Enterprise Service Tiers und anderen Tools, die unsere größeren Kunden benötigen, um ihr eigenes Geschäft zu führen und die bestmögliche Leistung von SubQuery für ihre Anwendungen zu erhalten.

Bitte kontaktieren Sie das Team, wenn Sie mit uns über den Erhalt von Enterprise-Level-Services und -Support von SubQuery sprechen möchten.

## Meilenstein 1 — Ende des 4. Quartals 2021

### SubQuery Builders/Grants-Programm

Dieses Förderprogramm wurde entwickelt, um Innovationen mit Polkadot und SubQuery zu erleichtern und zu katalysieren und die nächste Generation von dApps zu entwickeln, um die Web3-Revolution voranzutreiben. Es wird neue Projekte mit Zuschüssen, technischem Support, Marketing- und Geschäftsentwicklungsberatung von SubQuery und anderen unterstützen.

Wir sind begeistert von diesem Potenzial und werden in Kürze weitere Informationen veröffentlichen.

### Koordinator- und Client-SDK-Implementierungen

Wir werden unser Kern-SubQuery-SDK verbessern und zusätzliche Komponenten für einen SubQuery-Koordinator und -Client hinzufügen.

Der Indexer-Koordinator wird von den Indexern bereitgestellt, um das Netzwerk für den Indexer verfügbar zu machen und es dem Indexer zu ermöglichen, sich beim SubQuery-Netzwerk zu registrieren und die Daten, die er zur Verfügung stellt, bekannt zu geben

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
