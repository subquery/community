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

## Installationsanweisungen

Folgen Sie dem Beta-Leitfaden hier: https://university.subquery.network/quickstart/quickstart-avalanche.html

Sie müssen zuerst @subql/cli über *npm i -g @subql/cli* installieren

Beginnen Sie am besten mit unserem Starter-Projekt, es enthält ein laufendes Projekt mit einem Beispiel aller Mapping-Funktionen: https://github.com/subquery/avalanche-subql-starter. Dieses Projekt indiziert Folgendes aus dem [Pangolin Smart Contract](https://snowtrace.io/token/0x60781c2586d68229fde47564546784ab3faca982):

- BlockHandler: Alle Blöcke und ihre Kerninformationen
- TransactionHandler: Alle Transaktionen aus der Genehmigungsfunktion innerhalb des Pangolin Smart Contract
- EventHandler: Alle Übertragungsereignisse aus dem Smart Contract von Pangolin

Die Avalanche-Implementierung von SubQuery wurde so konzipiert, dass sie fast identisch mit der Polkadot-Unterstützung von SubQuery und auf ähnliche Weise wie der Ansatz von Graph funktioniert. Wir haben die [SubQuery University](https://university.subquery.network/build/introduction.html) aktualisiert, um Avalanche-spezifische Informationen zur allgemeinen SubQuery-Dokumentation hinzuzufügen. Sie können beginnen, indem Sie dieser [hervorragenden Anleitung für die ersten Schritte hier](https://university.subquery.network/quickstart/quickstart-avalanche.html) folgen.

## SubQuery-Unterstützung für Avalanche

Wir schließen die erste Phase unserer umfassenden Unterstützung für das Avalanche-Ökosystem ab.

![](https://miro.medium.com/max/1400/0*GUKZJfJCz1nB_3zc)

Heute teilen wir Folgendes:

- Erweiterte Vertragschainindizierung
- Avalanche Dictionary: Vorberechnete Indizes zur [dramatischen Verkürzung der Indizierungszeit](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
- Vollständige Unterstützung für Avalanche in unserem kostenlosen verwalteten Service [Unternehmensebene](./20211228-enterprise-hosted.md)
- Intuitive Dokumentation in der [SubQuery University](https://university.subquery.network/)

In den kommenden Wochen erwartet Sie:

- Ein Schritt-für-Schritt-Lernkurs in der [SubQuery Academy](./20211018-subquery-launches-the-subquery-academy.md)
- Volle Unterstützung für Avalanche in unserem dezentralisierten SubQuery-Netzwerk (Sie sehen ein Projekt in unserem aktuellen Frontier-Testnetzwerk)

Angesichts der für die kommenden Monate geplanten Anzahl von Subnetzen wird es einen enormen Bedarf an schneller, offener und flexibler Indizierungsunterstützung geben, die über alle kompatiblen Subnetze hinweg funktioniert. Wir haben Erfahrung mit der Implementierung dieses Konfigurierbarkeitsgrads für Polkadots Parachains und untersuchen, wie wir das gleiche Ergebnis für Avalanche erzielen können (z. B. durch Importieren benutzerdefinierter Implementierungen von snowman.Block usw.).

Der Start unseres Beta-Supports für Avalanche markiert einen bedeutenden Meilenstein in unserem Engagement, der Avalanche-Community verbesserte Indizierungstools anzubieten, damit ihre Entwickler schneller weiterkommen können. Wir sind gespannt auf Feedback von der Community, um unser Angebot zu verbessern und unsere Sichtbarkeit als vertrauenswürdiger Infrastrukturpartner für eine der am schnellsten wachsenden Entwicklercommunitys in Web3 zu erhöhen

Wir suchen jetzt nach Startpartnern, die wir bei der Entwicklung ihrer ersten SubQuery-Projekte in diesem Ökosystem eng unterstützen können. Kontaktieren Sie mich unter james.bayly@subquery.network, wenn Sie der Erste auf unserer Reise sein möchten.

_James May,_

Folgen Sie dem Beta-Leitfaden hier: https://university.subquery.network/quickstart/quickstart-avalanche.html

## Über SubQuery

[SubQuery](https://subquery.network/) ist ein Blockchain-Entwickler-Toolkit, mit dem andere Web3-Anwendungen der Zukunft erstellen können. Ein SubQuery-Projekt ist eine vollständige API zum Organisieren und Abfragen von Daten aus Layer-1-Chains. Dieser Data-as-a-Service, der derzeit Polkadot-, Substrate-, Avalanche- und Terra-Projekte bedient, ermöglicht es Entwicklern, sich auf ihren Kernanwendungsfall und ihr Frontend zu konzentrieren, ohne Zeit mit dem Aufbau eines benutzerdefinierten Backends für die Datenverarbeitung verschwenden zu müssen. Das SubQuery Network schlägt vor, dieselbe skalierbare und zuverlässige Lösung zu ermöglichen, jedoch auf vollständig dezentralisierte Weise.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Webseite](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
