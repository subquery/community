# SubQuery arbeitet mit Darwinia Network zusammen, um das CLI-Tool von SubQuery zu entwickeln

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

Heute möchten wir unsere Partnerschaft zwischen Darwinia Network und SubQuery Network bekannt geben. Darwinia hat kürzlich ihren Kusama Parachain Aucton-Slot gewonnen und bereitet sich darauf vor, sich ihren Polkadot-Slot zu sichern. Als Teil der Roadmap von Darwinia zum Aufbau eines Cross-Chain-Bridge-Hubs für Polkadot hat sich Darwinia mit SubQuery zusammengetan, um die Fülle von Anwendungen zu entwickeln, die benötigt werden, um das ultimative Benutzererlebnis für Cross-Chain-Interaktionen zu bieten

Unsere Partnerschaft geht weit über die Nutzung von SubQuery hinaus, um das Anwendungsökosystem von Darwinia zu betreiben. Darwinia hat eng mit dem SubQuery-Team zusammengearbeitet, um [ein CLI-Tool](https://github.com/fewensa/subquery-cli) für den von SubQuery verwalteten Dienst zu erstellen ([https://project.subquery.network](https://project.subquery.network)). Sie können diese [CLI](https://github.com/fewensa/subquery-cli) verwenden, um ein SubQuery-Projekt zu erstellen und automatisch eine neue Version entweder im Staging- oder im Produktionsslot bereitzustellen. Darüber hinaus können Sie Informationen abrufen, einschließlich des detaillierten Synchronisierungsstatus und Protokolle von Ihrem laufenden Projekt, das kostenlos in SubQuery Projects gehostet wird. Darwinia ist sogar noch weiter gegangen und hat einen beispielhaften [GitHub Action-Workflow](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) erstellt, der das CLI-Tool verwendet, um dies bei jedem Push zum Hauptzweig ihres [Repository](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) zu tun. Diese neue Automatisierung ist ein hervorragendes Beispiel für die enge Beziehung zwischen Darwinia und SubQuery, und das CLI-Tool wird bereits von vielen anderen Projekten innerhalb des großen Ökosystems von SubQuery verwendet.
> „Das von uns erstellte SubQuery-CLI-Tool hat unsere Entwicklungspipeline wirklich vereinfacht. Jetzt können wir Releases in Branches vollständig verwalten und uns darauf verlassen, dass unsere Änderungen automatisch für den gehosteten Service von SubQuery bereitgestellt werden. Wir sind besonders stolz auf unseren automatisierten Prozess, um zu überprüfen, ob sich die Datei schema.graphql geändert hat, und wenn ja, werden wir eine neue saubere Datenbank erneut bereitstellen“ – Yalin, Kernentwickler – Darwinia Network


Probieren Sie das [neue CLI-Tool hier](https://github.com/fewensa/subquery-cli) aus und sehen Sie sich [ein lebendiges Beispiel davon hier](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) an.

Die erste von vielen Anwendungen im wachsenden Anwendungsökosystem von Darwinia ist die [Wormhole-App](https://wormhole.darwinia.network/). Wormhole ist eine benutzerfreundliche Anwendung, die die Übertragung von Assets zwischen Netzwerken vereinfacht und ein wichtiger Bestandteil der Cross-Chain-Strategie von Darwinia ist. Derzeit ist die Brücke zwischen Darwinia und Ethereum in Betrieb. [SubQuery wird verwendet, um historische Übertragungen und Ereignisse anzuzeigen](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia), die auf Ihrer Darwinia-/Crab-/Pangolin-Adresse im Zusammenhang mit dem Wormhole stattgefunden haben (z. B. die Ankunft von Assets aus einem anderen Netzwerk).

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

Das Team von Darwinia ist dabei, eine neue [intelligente App zu entwickeln, die ein zentraler Hub](https://apps.darwinia.network/) ist, um alle Interaktionen des Darwinia-Netzwerks zu verwalten, einschließlich Governance, Staking, Chain Exploration und mehr. Diese App verwendet eine beträchtliche Menge an [SubQuery-Daten, um historische Daten und Aktionen anzuzeigen](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery wird eng mit dem Team von Darwinia zusammenarbeiten, um dies zur schnellsten und einfacheren Benutzererfahrung im gesamten Polkadot-Ökosystem zu machen.
> „Wir freuen uns, SubQuery zu verwenden, um unsere bestehenden Backend-Dienste für Wormhole zu ersetzen. Langfristig mit dem SubQuery-Netzwerk wird dies unsere Dienste vollständig dezentralisiert und Open Source machen – darauf sind wir stolz!“ – Yalin, Kernentwickler – Darwinia Network


Darüber hinaus verwendet Darwinia SubQuery, um [die Daten hinter](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot) ihrer [Parachain Loan Offering-Website](https://darwinia.network/plo_contribute) bereitzustellen. Obwohl Crab ihren Slot auf Kusama bereits gewonnen hat, ist es noch nicht zu spät, um zu Darwinias Kampagne für einen Polkadot-Slot beizutragen. Sie nutzen SubQuery auch, um [Merkle Mountain Ranges](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr) für alle in ihrem Netzwerk erstellten Blöcke zu indizieren.

Darwinia Network verwendet [SubQuery Projects](https://project.subquery.network/), um ihr eigenes Projekt zu verwalten und bei Bedarf Aktualisierungen vorzunehmen. Die von uns bereitgestellten Indizierungs- und Abfragedienste werden vollständig von SubQuery verwaltet und der Polkadot-Community kostenlos im [SubQuery’s Explorer](https://explorer.subquery.network/) zur Verfügung gestellt.

## Über Darwinia Network

Darwinia Network ist ein dezentralisiertes Cross-Chain-Brückennetzwerk, das auf Substrate aufbaut, der „Golden Gate Bridge“ der Cross-Chain-Ökologie. Es bietet die sicherste allgemeine Bridge-Lösung, die Polkadot, Ethereum, BSC und andere heterogene Chains durch Chain-übergreifende Vermögensübertragung und allgemeinen Remote-Chain-Call verbindet. Zu den Hauptanwendungsbereichen gehören auch Defi, der Cross-Chain-NFT-Handelsmarkt, Spiele usw.

[Webseite](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## Über SubQuery Network

[SubQuery](https://subquery.network/) ist eine dezentrale Datenaggregation, Indizierung & Abfrageebene zwischen Layer-1-Blockchains und dezentralen Anwendungen (DApps). Dieser Data-as-a-Service konzentriert sich derzeit auf Polkadot- und Substrate-Projekte und ermöglicht es Entwicklern, sich auf ihren Kernanwendungsfall und ihre Front zu konzentrieren

[Linktree](https://linktr.ee/subquerynetwork) | [Webseite](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
