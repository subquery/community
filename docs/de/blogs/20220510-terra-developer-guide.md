# Der SubQuery Terra Onboarding-Leitfaden

![](https://miro.medium.com/max/1400/1*DiTE9KuzH0xHLojzGWxOuw.png)

Seit geraumer Zeit arbeiten wir hinter den Kulissen an der Entwicklung und Verfeinerung der Terra-Unterstützung und testen sie mit wichtigen Entwicklungspartnern (halten Sie in den kommenden Tagen Ausschau nach Ankündigungen). Dieser lange Zeitraum hat es uns ermöglicht, äußerst zuversichtlich in Bezug auf die Skalierbarkeit, Zuverlässigkeit und die Funktionen zu sein, die SubQuery heute für Terra bietet. In diesem Artikel stellen wir einen detaillierten Leitfaden für Entwickler und eine Roadmap für die gesamte Terra-Community zur Verfügung, mit der sie ihre Anforderungen an die Datenindizierung erfüllen können.

SubQuery ist ein offener Datenindexierer, der flexibel und schnell ist. Unser offenes Indizierungstool soll Entwicklern helfen, ihre eigene API in wenigen Stunden zu erstellen, und es ist darauf ausgelegt, Ketten mit Hilfe von Wörterbüchern (vorberechneten Indizes) unglaublich schnell zu indizieren. Unsere Erfahrung mit Kunden aus allen Bereichen von Polkadot (Wallets, Netzwerke, Explorer, NFT, DeFi, Scanner usw.) hat uns bei der Entwicklung dieser Lösung geholfen.

Es handelt sich noch um eine frühe Version, und obwohl wir weit über eine "Beta" hinausgehen, würden wir uns freuen, wenn Sie unserem Team etwaige Fehler melden, damit wir sie schnell beheben können.

<iframe width="656" height="369" src="https://www.youtube.com/embed/dS7h3isQCeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Warum SubQuery verwenden?

Das Anwendungsökosystem hat sich auf Terra gut entwickelt, obwohl es an einigen wichtigen Entwicklerwerkzeugen und Infrastrukturdiensten mangelt. Es ist erstaunlich zu sehen und ein Beweis für die Tatkraft und den Einfallsreichtum der Lunatics in Terra. Als wir die Teams fragten, wie sie ihre Anforderungen an die Datenindizierung gelöst haben, war dies in den meisten Fällen der Fall:

- **Erstellen Sie Ihre eigene Lösung:** Eine benutzerdefinierte Implementierung, die Sie selbst ausführen und speziell für Ihre Anwendung erstellen. Aber warum das Rad neu erfinden? SubQuery konzentriert sich auf den Aufbau eines zuverlässigen und schnellen offenen Indexers - wir sind hier, um Ihnen Zeit zu sparen
- **Entwurf von Smart Contracts für Abfragen:** Einige Teams implementierten sogar benutzerdefinierte Eigenheiten in ihre Smart Contracts, um speziell für ihre Anwendungslogik erweiterte Abfragen zu ermöglichen.

Bei SubQuery haben wir ein Open-Source-SDK, das einfach zu bedienen und blitzschnell ist. Es stellt Ihnen einen Standard-GraphQL-Endpunkt zur Verfügung, oder Sie können einfach die Postgres-Datenbank direkt abfragen. Damit können Sie einen einzigartigen Datensatz aus Ihren eigenen intelligenten Verträgen indexieren, der es Ihnen ermöglicht, ein überlegenes Produkt zu entwickeln, das Ihre Konkurrenz in den Schatten stellt! Wir geben Ihnen die Flexibilität, die Daten, die Sie benötigen, in der Form zu erhalten, die für Sie am besten geeignet ist.

Zuverlässigkeit ist der Schlüssel, und Sie brauchen eine zuverlässige und skalierbare Plattform, um sie zu hosten. [SubQuery's Managed Service](https://subquery.network/managedservices) ist eine branchenführende Hosting-Lösung für alle Kunden, die täglich Hunderte von Millionen von Anfragen an die größten Projekte in Polkadot bedient. Wir bieten unseren [Unternehmenskunden](./20211228-enterprise-hosted.md) Dienste wie dedizierte Datenbanken, redundante Cluster, intelligentes Multi-Cluster-Routing sowie fortschrittliche Überwachungs- und Analysemöglichkeiten. Es wird Ihre Bewerbung unterstützen, wenn Sie bereit sind, und wird mit Ihnen skalieren.

Und schließlich werden Sie in ein paar Monaten in der Lage sein, Ihre SubQuery-Infrastruktur mit dem SubQuery Network, der Zukunft der Web3-Infrastruktur, vollständig zu dezentralisieren. Das SubQuery Network wird die Daten Ihrer Projekte indizieren und der globalen Gemeinschaft auf eine anregende und überprüfbare Weise zur Verfügung stellen. Es ist so konzipiert, dass es jedes SubQuery-Projekt aus jedem Layer-1-Netzwerk einschließlich Terra unterstützt, so dass Sie von Anfang an die Vorteile des einheitlichen SubQuery-Netzwerks nutzen können.

## Installation Instructions

You'll first need to install a recent version of @subql/cli via npm i -g @subql/cli@latest

The best way is to start with [our starter project](https://github.com/subquery/terra-subql-starter), it contains a running project with an example of all mapping functions: This project indexes the following:

- **BlockHandler:** All blocks and their hash and height
- **TransactionHandler:** All transactions and their hash, height, and timestamp
- **EventHandler:** All smart contract transfer events and their hash, height, sender, recipient, and amount from a filtered smart contract address (bLuna)
- **MessageHandler:** All smart contract messages and their hash, height, contract, sender, and execute_msg data from a filtered smart contract address (bLuna)

SubQuery supports indexing Terra's smart contracts with both transaction and message subscriptions and handlers. You can see a working example of Smart Contract support in the [starter project](https://github.com/subquery/terra-subql-starter) and read the documentation on the [SubQuery University](http://localhost:8080/build/manifest.html#mapping-handlers-and-filters).

SubQuery's Terra implementation has been designed to operate almost identically to SubQuery's Polkadot support, and in a similar way to the Graph's approach. We've updated the [SubQuery University](https://university.subquery.network/) to add Terra specific information to the general SubQuery documentation. You can start by following this [excellent getting started guide here](http://university.subquery.network/quickstart/quickstart-terra.html).

## Deploying your Project to SubQuery's Managed Service

Although you will always be able to run your project in your own infrastructure easily, [SubQuery's managed service](https://subquery.network/managedservices) now supports Terra project. Some of the biggest projects depend on SubQuery's [enterprise level](./20211228-enterprise-hosted.md) managed service and now you can too. As part of our launch partner agreement, we are providing you with 3 months free hosting.

You can [follow the guide here](https://university.subquery.network/run_publish/publish.html) to publish your Terra SubQuery project to our managed service. Please note that you must host your [SubQuery project using IPFS](https://university.subquery.network/run_publish/publish.html) rather than GitHub.

You can update your managed service project as much as you want. We even have a [staging deployment slot](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md) to allow you to do seamless blue/green upgrades without any downtime. This staging slot can also be used to run a clean instance of SubQuery with a fresh database for complete background reindexing of your project. Customers usually link the staging slot to the staging/development versions of their applications.

Once deployed, you can access your project using the SubQuery Explorer, and make requests directly from your app to the provided GraphQL endpoint. Let us know if you would like us to enable more advanced features like [GraphQL subscriptions](https://university.subquery.network/run_publish/subscription.html), more complex queries, and [aggregation functions](https://university.subquery.network/run_publish/aggregate.html).

Please notify us once you have deployed your project as we may need to assist with fine tuning the batch size to ensure that our Terra archive node runs well for your project.

## SubQuery's Support for Terra

Today we are sharing the following:

-   Advanced indexing of blocks, event
-   Terra Dictionary: Pre-computed indices to [dramatically reduce indexing time](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
-   Full support for Terra in our free [enterprise level](./20211228-enterprise-hosted.md) managed service
-   Intuitive documentation in the [SubQuery University](https://university.subquery.network/)

In the coming weeks you can expect:

-   A step by step learning course in the [SubQuery Academy](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   Full support for Terra in our decentralised SubQuery Network (you'll soon see a project in our current Frontier test network)

---

The launch of our beta support for Terra marks a significant milestone in our commitment to offer enhanced indexing tools for the Terra community to enable her developers to go further, faster. We are eager to get feedback from the community in order to improve our offering and increase our visibility as a trusted infrastructure partner for one of the fastest growing developer communities in Web3

James Bayly

## Links

-   [Getting Started Guide](https://university.subquery.network/quickstart/quickstart-terra.html)
-   [SubQuery University (Documentation)](https://university.subquery.network/)
-   [Example Terra Project](https://github.com/subquery/terra-subql-starter)
-   [Managed Service](https://explorer.subquery.network/)
-   [Publish your own Terra Project to the Managed Service](https://project.subquery.network/)

## About SubQuery

[SubQuery](https://subquery.network/) is a blockchain developer toolkit enabling others to build Web3 applications of the future. A SubQuery project is a complete API to organise and query data from layer-1 chains. Currently servicing Polkadot, Substrate, Avalanche, and now Terra projects, this data-as-a-service allows developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The SubQuery Network proposes to enable this same scalable and reliable solution, but in a completely decentralised way.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
