# Beta der SubQuery-Unterstützung für Avalanche veröffentlicht

![](https://miro.medium.com/max/1400/1*BiJaESR69-vDimBJmXhQvw.png)

Nach monatelangen Verbesserungen, Refactoring und Tests freuen wir uns heute, die Beta-Unterstützung unserer offenen Indexnäherungslösung mit der Avalanche-Community zu teilen. Nach der Etablierung von SubQuery als führendem Datenindizierer in Polkadot hat die jüngste [Ankündigung unserer Expansion nach Avalanche](./20220321-avalache.md) während der jüngsten [Avalanche Summit](https://www.avalanchesummit.com/agenda) wurde von Entwicklern, die ein flexibles und skalierbares Indizierungstool suchten, mit Begeisterung aufgenommen.

Folgen Sie dem Beta-Leitfaden hier: https://university.subquery.network/quickstart/quickstart-avalanche.html

SubQuery ist ein offener Datenindexierer, der flexibel und schnell ist. Unser offenes Indizierungstool soll Entwicklern helfen, ihre eigene API in wenigen Stunden zu erstellen, und es ist darauf ausgelegt, Ketten mit Hilfe von Wörterbüchern (vorberechneten Indizes) unglaublich schnell zu indizieren. Unsere Erfahrung mit Kunden aus allen Bereichen von Polkadot (Wallets, Netzwerke, Explorer, NFT, DeFi, Scanner usw.) hat uns bei der Entwicklung dieser Lösung geholfen.

Ab heute können Avalanche-Entwickler auf die Beta-Version der gleichen schnellen, flexiblen und offenen Indexierungslösung zugreifen, die auch bei Polkadot zum Einsatz kommt. Da es sich um eine Betaversion handelt, ist es wahrscheinlich, dass sie einige Probleme aufweist. Wir würden es daher begrüßen, wenn Sie unserem Team etwaige Fehler melden könnten, damit wir sie schnell beheben können.

## Warum SubQuery verwenden?

_Es gibt bereits einige andere Optionen hier in Avalanche, warum also sollten Sie mit SubQuery bauen?_

Genau diese Frage wurde mir von vielen von Ihnen gestellt, die ich auf dem Avalanche Summit kennenlernen durfte. In unserem Raum gibt es im Allgemeinen drei andere Lösungen:

- Bauen Sie Ihre eigene Lösung: Warum das Rad neu erfinden? SubQuery konzentriert sich auf den Aufbau eines zuverlässigen und schnellen offenen Indexers --- wir sind hier, um Ihnen Zeit zu sparen
- Standardisierte Datendienste oder "vereinheitlichte APIs": Diese Anbieter sind hervorragend, wenn Sie die gleiche App auf dem gleichen Basis-Smart-Contract aufbauen wie alle anderen, aber das tun Sie nicht. Sie brauchen einen einzigartigen Datensatz, der es Ihnen ermöglicht, ein überlegenes Produkt zu entwickeln, das Ihre Konkurrenz in den Schatten stellt! Sie brauchen Flexibilität, um die benötigten Daten in der für Sie am besten geeigneten Form zu erhalten
- Andere offene GraphQL-Datendienste: Alle, die sie bereits nutzen, äußerten die gleichen Probleme, es gab einen gravierenden Mangel an Entwicklerunterstützung und einige erhebliche Leistungsprobleme. Außerdem wurde nur die Vertragskette abgedeckt, eine Ausweitung auf das nächste Teilnetz war nicht vorgesehen

Bei SubQuery haben wir ein Open-Source-SDK, das einfach zu bedienen und blitzschnell ist. Es stellt Ihnen einen Standard-GraphQL-Endpunkt zur Verfügung, oder Sie können einfach die Postgres-Datenbank direkt abfragen.

Zuverlässigkeit ist der Schlüssel, und Sie brauchen eine zuverlässige und skalierbare Plattform, um sie zu hosten. [Der verwaltete Dienst von SubQuery](https://subquery.network/managedservices) ist eine branchenführende Hosting-Lösung für alle Kunden, die täglich Hunderte von Millionen von Anfragen zu den größten Projekten in Polkadot bedient. Wir bieten unsere [Kunden auf Unternehmensebene](./20211228-enterprise-hosted.md) mit Diensten wie dedizierten Datenbanken, redundanten Clustern, intelligentem Multi-Cluster-Routing sowie fortschrittlicher Überwachung und Analyse. Es wird Ihre Bewerbung unterstützen, wenn Sie bereit sind, und wird mit Ihnen skalieren.

Und schließlich werden Sie in ein paar Monaten in der Lage sein, Ihre SubQuery-Infrastruktur mit dem SubQuery Network, der Zukunft der Web3-Infrastruktur, vollständig zu dezentralisieren. Das SubQuery Network wird die Daten Ihrer Projekte indizieren und der globalen Gemeinschaft auf eine anregende und überprüfbare Weise zur Verfügung stellen. Es ist so konzipiert, dass es jedes SubQuery-Projekt aus jedem Layer-1-Netzwerk einschließlich Avalanche unterstützt, so dass Sie von Anfang an die Vorteile des einheitlichen SubQuery-Netzwerks nutzen können.

## Installation Instructions

Follow the beta guide here: https://university.subquery.network/quickstart/quickstart-avalanche.html

You'll first need to install @subql/cli via *npm i -g @subql/cli*

The best way is to start with our starter project, it contains a running project with an example of all mapping functions: https://github.com/subquery/avalanche-subql-starter. This project indexes the following from the [Pangolin Smart Contract](https://snowtrace.io/token/0x60781c2586d68229fde47564546784ab3faca982):

- BlockHandler: All blocks and their core information
- TransactionHandler: All transactions from the approve function within the Pangolin smart contract
- EventHandler: All transfer events from the Pangolin smart contract

SubQuery's Avalanche implementation has been designed to operate almost identically to SubQuery's Polkadot support, and in a similar way to the Graph's approach. We've updated the [SubQuery University](https://university.subquery.network/build/introduction.html) to add Avalanche specific information to the general SubQuery documentation. You can start by following this [excellent getting started guide here](https://university.subquery.network/quickstart/quickstart-avalanche.html).

## SubQuery's Support for Avalanche

We are completing the first phase of our full support for the Avalanche ecosystem.

![](https://miro.medium.com/max/1400/0*GUKZJfJCz1nB_3zc)

Today we are sharing the following:

- Advanced Contract Chain Indexing
- Avalanche Dictionary: Pre-computed indices to [dramatically reduce indexing time](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
- Full support for Avalanche in our free [enterprise level](./20211228-enterprise-hosted.md) managed service
- Intuitive documentation in the [SubQuery University](https://university.subquery.network/)

In the coming weeks you can expect:

- A step by step learning course in the [SubQuery Academy](./20211018-subquery-launches-the-subquery-academy.md)
- Full support for Avalanche in our decentralised SubQuery Network (you'll see a project in our current Frontier test network)

With the number of Subnets planned over the coming months, there will be a huge need for fast, open, and flexible indexing support that works across all compatible Subnets. We have experience implementing this level of configurability for Polkadot's parachains, and are investigating how to provide the same outcome for Avalanche (e.g. by importing custom implementations of snowman.Block etc).

The launch of our beta support for Avalanche marks a significant milestone in our commitment to offer enhanced indexing tools for the Avalanche community to enable her developers to go further, faster. We are eager to get feedback from the community in order to improve our offering and increase our visibility as a trusted infrastructure partner for one of the fastest growing developer communities in Web3

We are now looking for launch partners that we can closely support as they develop their first SubQuery projects in this ecosystem. Reach out to me at james.bayly@subquery.network if you want to be first on the journey with us.

_James Bayly_

Follow the beta guide here: https://university.subquery.network/quickstart/quickstart-avalanche.html

## About SubQuery

[SubQuery](https://subquery.network/) is a blockchain developer toolkit enabling others to build Web3 applications of the future. A SubQuery project is a complete API to organise and query data from layer-1 chains. Currently servicing Polkadot, Substrate, Avalanche and Terra projects, this data-as-a-service allows developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The SubQuery Network proposes to enable this same scalable and reliable solution, but in a completely decentralised way.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
