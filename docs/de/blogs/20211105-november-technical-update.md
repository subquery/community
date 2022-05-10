# SubQuery Technisches Update vom November: EVM- und Manifest-Updates

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**Lesen Sie mehr über unseren technischen Einblick in die neueste Version von SubQuery**

## Support for External Chain Type Files in Project Manifest

Heute ist der Start von [Version 0.2.0](https://doc.subquery.network/create/manifest/) unserer Projektmanifestdatei (`project.yaml`). Diese neue Version bietet Entwicklern verschiedene Verbesserungen, die von Kunden gewünscht wurden.

Am wichtigsten ist, dass Sie jetzt auf eine Kettentyp-Definitionsdatei verweisen können, die alle benutzerdefinierten Typen enthält, wenn Sie eine benutzerdefinierte Druckmaterialkette indizieren. Auf diese Weise können Sie schnell ein neues SubQuery-Projekt mit einer beliebigen substratbasierten Kette verbinden, einschließlich aller Parachains von Kusama. Dies sollte eine Standardkettentypdatei sein, die die von dieser Blockchain unterstützten spezifischen Typen entweder im Format `.json` oder `.yaml` deklariert.

Mit dieser Lösung können Sie das Kopieren und Verwalten von Kettentypdefinitionen im Manifest selbst vermeiden und einfach die [veröffentlichten Kettentypdateien klonen, die in Repositorys wie PolkadotJS aufgelistet sind](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec).

[Informationen zur neuen Manifestdatei, einschließlich der Migration Ihrer Projekte in diese, finden Sie hier in unseren aktualisierten Dokumenten.](https://doc.subquery.network/create/manifest/)

## Moonbeam EVM Support

Last week we were pleased to [announce that we were working with Moonbeam to bring complete EVM and Substrate indexing support to Moonriver](../customer_announcements/20211028-moonbeam-evm.md).

Heute folgen wir dieser Ankündigung mit allen Entwicklerressourcen, die Sie für den Einstieg benötigen.

Derzeit gibt es kein Open-Source-Tool, mit dem Entwickler flexibel Daten sowohl über Ethereum als auch Polkadot/Kusama sammeln und abfragen können. Diese Einschränkung kann dazu führen, dass dApps-Lösungen in Moonriver in die Smart-Contract-Schicht integriert werden und dadurch ihr Potenzial für Verbraucher in beiden florierenden Netzwerken einschränken. Diese Partnerschaft mit Moonbeam bietet eine vollständige und einheitliche Datenindexierungslösung für alle Blockchain-Daten innerhalb von Moonriver und wird dem wachsenden Anwendungs-Ökosystem von Moonriver stark zugute kommen.

**SubQuery ist Gast beim nächsten Moonbuilders Workshop am Mittwoch, den 1. Dezember,** [**melden Sie sich hier an**](https://www.crowdcast.io/e/moonbuilders-ws/10)**.**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[Firstly, familiarize yourself with the updated documentation on how to connect to and index data from Moonbeam, Moonbase Alpha, and Moonriver.](https://doc.subquery.network/create/substrate-evm/) The process to index Moonbeam data is only two steps:

### Step 1: Add the Moonbeam Custom Data Source

Wir haben einen Datenprozessor entwickelt, der speziell für die Arbeit mit der Moonbeam-Implementierung von [Frontier](https://github.com/paritytech/frontier) entwickelt wurde. Es ermöglicht Ihnen, auf bestimmte ABI-Ressourcen zu verweisen, die vom Prozessor verwendet werden, um Argumente und die Smart-Contract-Adresse zu analysieren, von der die Ereignisse stammen oder an die der Aufruf erfolgt. [You can read more here](https://doc.subquery.network/create/substrate-evm/#data-source-spec).

SubQuery führt erweiterte Filter als andere Indexer ein und ermöglicht das Filtern von Nichtvertragstransaktionen, Transaktionssendern, Verträgen und indizierten Protokollargumenten. Auf diese Weise können Entwickler eine Vielzahl von Projekten erstellen, die ihren spezifischen Datenanforderungen gerecht werden.

### Step 2: Index Moonbeam Data

Wie bei einem normalen SubQuery-Projekt verwenden Sie eine Zuordnungsfunktion, um Off-Chain-Daten in die von Ihnen definierten GraphQL-Entitäten umzuwandeln. Der Unterschied besteht darin, dass anstelle eines `SubstrateEvent` oder `SubstrateExtrinsic`, Ihre Mapping-Funktion erhält einen `MoonbeamCall` oder `MoonbeamEvent`, die auf Ethers [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse)- oder [Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log)-Typ basieren. [You can read more about these here](https://doc.subquery.network/create/substrate-evm/#frontierevmcall).

[Lesen Sie hier die vollständige Dokumentation zu diesem Prozess](https://doc.subquery.network/create/substrate-evm/#frontierevmcall)

### Example Project

Es gibt ein vollständiges Beispielprojekt, das eth `transfer`-Ereignisse indiziert und Smart-Contract-Aufrufe `genehmigt`. Der Code für dieses Beispielprojekt ist [hier auf GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter) oder über das [Live-SubQuery-Projekt im SubQuery-Explorer hier](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project) zugänglich.

Der Großteil der Änderungen erfolgt in der Manifest-Datei (`project.yaml`). You can see below that we have [extended call filters](https://doc.subquery.network/create/substrate-evm/#call-filters) to support either [function signature strings](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) or the function sighash to filter the function called on the contract. For [event filters](https://doc.subquery.network/create/substrate-evm/#event-filters), you can use topics filtering that follows the [Ethereum JSON-PRC log filters standard found here](https://docs.ethers.io/v5/concepts/events/). Beachten Sie, dass SubQuery erweiterte Filter einführt als andere Indexer für Moonbeam EVM und diese Verbesserungen Entwicklern erheblich zugute kommen sollten.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

Wenn Sie mit der Erstellung von Substrate-basierten SubQuery-Projekten vertraut sind, werden Sie feststellen, wie ähnlich die Mapping-Funktionen für die neue Moonriver-Unterstützung sind. Jede Mapping-Funktion empfängt einen `MoonbeamCall` oder `MoonbeamEvent` und verarbeitet diese wie jedes andere SubQuery-Projekt.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

If you have any questions about this make sure you [check our docs](https://doc.subquery.network/create/substrate-evm) or reach out to us on our #technical-support channel in our [Discord community](https://discord.com/invite/subquery).

[Klonen Sie das Beispielprojekt auf GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

Wie Sie sehen, ist das Erstellen eines Moonriver- oder Moonbase Alpha-Projekts, das sowohl Substrat- als auch EVM-Daten in einem einzigen Projekt indiziert, extrem einfach und weitgehend ähnlich. Sie können die fortschrittlichen Scaffolding-Tools von SubQuery verwenden, um Ihre dApp-Entwicklung zu beschleunigen und eine umfassendere Indizierung für Ihre Daten zu nutzen, um intuitivere dApps zu erstellen. Wir können es kaum erwarten zu sehen, was Sie bauen!

## About SubQuery

SubQuery ist eine Datenaggregationsschicht, die zwischen den Schicht-1-Blockchains (wie Moonriver und Polkadot) und DApps arbeitet. Dieser Dienst entsperrt Blockchain-Daten und wandelt sie in einen abfragbaren Zustand um, damit sie in intuitiven Anwendungen verwendet werden können. Es ermöglicht DApp-Entwicklern, sich auf ihren Kernanwendungsfall und ihr Front-End zu konzentrieren, ohne Zeit damit verschwenden zu müssen, ein benutzerdefiniertes Back-End für die Datenverarbeitung zu erstellen.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Webseite](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## About Moonbeam

Moonbeam ist eine Ethereum-kompatible Smart-Contract-Plattform im Polkadot-Netzwerk, die es einfach macht, nativ interoperable Anwendungen zu erstellen. Diese Ethereum-Kompatibilität ermöglicht es Entwicklern, bestehende Solidity Smart Contracts und DApp-Frontends mit minimalen Änderungen auf Moonbeam bereitzustellen. Als Parachain im Polkadot-Netzwerk profitiert Moonbeam von der gemeinsamen Sicherheit der Polkadot-Relaiskette und der Integration mit anderen Ketten, die mit Polkadot verbunden sind. Moonbeam befindet sich derzeit in der aktiven Entwicklung von PureStake und wird voraussichtlich im vierten Quartal 2021 MainNet erreichen. Erfahren Sie mehr: [https://moonbeam.network/](https://moonbeam.network/).
