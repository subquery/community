# SubQuery bietet den Kunden Enterprise-Support

![](https://miro.medium.com/max/1400/1*z_StqAT5KeaxQLBCm-xpRQ.jpeg)

Da unsere Community größer wird, sehen wir jeden Tag Hunderte von Bereitstellungen und exponentiell mehr Datenverkehr zu unserem gehosteten Service. Das Team von SubQuery stellt sich jedoch dieser Herausforderung und skaliert unsere Dienste, um der beispiellosen Nachfrage unserer Kunden nach unseren Tools gerecht zu werden, während unser [gehosteter Dienst](https://projects.subquery.network/) kostenlos bleibt.

Viele Kunden verlassen sich jetzt auf SubQuery, um geschäftskritische Daten für ihre Produktionsanwendungen bereitzustellen. These customers represent some of the largest wallets ([Nova](https://novawallet.io/) and  [Fearless](https://fearlesswallet.io/)), scanners ([Subscan](https://www.subscan.io/), [SubVis](https://www.subvis.io/), and [DotMarketCap](https://dotmarketcap.com/)), NFT platforms ([Kodadot](https://kodadot.xyz/) and [Yuser](https://yuser.co/)), and more. Dies sind riesige Anwendungen, die die Polkadot-Community täglich nutzt und die jederzeit online sein müssen.

Die Leistung und Zuverlässigkeit unseres gehosteten Dienstes steht hier bei SubQuery seit einiger Zeit ganz oben auf unserer Prioritätenliste.  Unser Schwesterteam ist OnFinality, Polkadots größter Infrastrukturanbieter, daher haben wir viel Erfahrung in diesem Bereich. Aus diesem Grund werden wir heute drei aktuelle Verbesserungen durchgehen, die SubQuery zur zuverlässigsten, skalierbarsten und leistungsfähigsten Datenplattform in Polkadot machen werden.

![](https://miro.medium.com/max/1200/1*QckhJzjQqw9czpBMRhXgXQ.gif)

# Dedizierte Datenbanken

Anfänglich wurden alle SubQuery-Projekte in gemeinsam genutzten Datenbanken in unserer Infrastruktur bereitgestellt, um Geld zu sparen und unseren Service kostenlos zu halten. Dies würde jedoch dazu führen, dass Projekte mit hohem Datenverkehr und großen Datensätzen andere Projekte, die in derselben Datenbank gehostet werden, ersticken.

Wenn Sie ein Projekt erstellen, das für den Produktionseinsatz konzipiert ist, bieten wir eine dedizierte Datenbank an, die in unseren SubQuery-Clustern gehostet wird und Ihrem Projekt alle Ressourcen zur Verfügung stellt, die es benötigt, um Tausende komplizierter Abfragen zu verarbeiten, ohne sich Gedanken über die Leistungsbeeinträchtigung durch andere machen zu müssen.

Sie sollten sich unter sales@subquery.network mit uns in Verbindung setzen, wenn Sie darauf upgraden möchten. Wir replizieren Ihre Daten aus Ihren vorhandenen Tabellen, sodass Sie keine Zeit für die Neuindizierung bereits vorhandener Daten aufwenden müssen, was zu einer Migration ohne Ausfallzeiten führt.

# Unterstützung mehrerer Cluster

Belastbarkeit und Zuverlässigkeit bedeuten uns bei SubQuery alles. Ein redundanter Cluster in einem separaten Teil der Welt bedeutet, dass wir uns schnell von Cloud-Provider-Ausfällen erholen können, die gelegentlich Regionen offline nehmen.

Wenn Sie außerdem eine Anfrage an ein SubQuery-Projekt in unserem gehosteten Service stellen, entsteht der Großteil der Wartezeit durch Latenz. Die Latenz ist die Punkt-zu-Punkt-Zeit, die Ihre Anfrage benötigt, um die Welt bis zum nächsten SubQuery-Cluster zu umrunden, und kann aus einigen entfernten Regionen bis zu ein oder zwei Sekunden dauern. Durch mehrere Cluster auf der ganzen Welt können wir den wichtigsten Teil der Anfragezeit (die Latenz) reduzieren.

Wir haben mehrere Cluster in verschiedenen Regionen implementiert, die denselben Service anbieten. Diese Arbeit umfasst auch ein Tool in [SubQuery Projects](https://project.subquery.network/), mit dem Sie Ihr Projekt über diese Cluster hinweg bereitstellen und verwalten können. Wir haben auch Prozesse implementiert, die sicherstellen, dass Datenbanken in verschiedenen Regionen konsistent bleiben, sodass die Daten, die Sie erhalten, unabhängig davon, an welches Cluster Ihre Anfrage geht, konsistent sind.

# Intelligentes Routing

Sobald SubQuery-Cluster in verschiedenen Regionen ausgeführt werden, besteht der nächste logische Schritt darin, diese Funktion für Ihre Benutzer unsichtbar zu machen. Ihre Benutzer sollten nie entscheiden müssen, an welchen Cluster ihre Anfragen gehen, SubQuery sollte ihre Anfragen automatisch an den nächsten fehlerfreien Cluster weiterleiten. Das bietet das intelligente Routing von SubQuery.

Wir bieten jedem Premium-Kunden einen einzigen globalen Endpunkt, der über intelligentes Routing verfügt, das automatisch auf jede einzelne Anfrage angewendet wird. Dieser Service umfasst eine umfassende Überwachung, die jeden Cluster ständig für Zustandsprüfungen anpingt und sicherstellt, dass ein Benutzer niemals an einen Cluster weitergeleitet wird, der überlastet oder offline ist. Der globale Endpunkt optimiert das Routing für jede Anfrage zum nächstgelegenen Cluster, um sicherzustellen, dass Ihre Benutzer die beste Leistung von Ihren Clustern erhalten.

![](https://miro.medium.com/max/1000/0*DNXDiABzli0et1MU)

Zusammenfassend ermöglichen uns diese Dienstleistungen, unseren Premium-Service vertrauensvoll mehr Kunden anzubieten. Wir arbeiten mit jedem Kunden zusammen, um sein Geschäft und seine Ziele zu verstehen und dann einen Service einzurichten, der seinen Bedürfnissen entspricht. SubQuery ist der größte Datendienstanbieter in Polkadot, und diese Funktionen zeigen, wie wir Tausende von Community-Projekten gleichzeitig mit den größten Projekten in Polkadot unterstützen.

# Über SubQuery-Netzwerk

SubQuery ist der führende Datenanbieter von Polkadot,der eine Indexierungs- & Abfrageebene zwischen Layer-1-Blockchains (Polkadot) und dezentralen Anwendungen unterstützt. Der Datendienst von SubQuery wird heute von den meisten Crowdloan- und Parachain-Auktions-Websites von Polkadot und Kusama live genutzt.

Das Protokoll von SubQuery abstrahiert mit dem SubQuery SDK Blockchain-Daten-Eigenheiten, sodass sich Entwickler auf die Bereitstellung ihres Kernprodukts konzentrieren können, ohne unnötige Anstrengungen für benutzerdefinierte Backend-Technologien zu verschwenden.

[Linktree](https://linktr.ee/subquerynetwork)  |  [Webseite](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)|  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [Matrix](https://matrix.to/#/#subquery:matrix.org)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
