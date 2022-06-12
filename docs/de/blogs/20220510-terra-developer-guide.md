# Der SubQuery Terra Onboarding-Leitfaden

![](https://miro.medium.com/max/1400/1*DiTE9KuzH0xHLojzGWxOuw.png)

Seit geraumer Zeit arbeiten wir hinter den Kulissen an der Entwicklung und Verfeinerung der Terra-Unterstützung und testen sie mit wichtigen Entwicklungspartnern (halten Sie in den kommenden Tagen Ausschau nach Ankündigungen). Dieser lange Zeitraum hat es uns ermöglicht, äußerst zuversichtlich in Bezug auf die Skalierbarkeit, Zuverlässigkeit und die Funktionen zu sein, die SubQuery heute für Terra bietet. In diesem Artikel stellen wir einen detaillierten Leitfaden für Entwickler und eine Roadmap für die gesamte Terra-Community zur Verfügung, mit der sie ihre Anforderungen an die Datenindizierung erfüllen können.

SubQuery ist ein offener Datenindexierer, der flexibel und schnell ist. Unser offenes Indizierungstool soll Entwicklern helfen, ihre eigene API in wenigen Stunden zu erstellen, und es ist darauf ausgelegt, Ketten mit Hilfe von Wörterbüchern (vorberechneten Indizes) unglaublich schnell zu indizieren. Unsere Erfahrung mit Kunden aus allen Bereichen von Polkadot (Wallets, Netzwerke, Explorer, NFT, DeFi, Scanner usw.) hat uns bei der Entwicklung dieser Lösung geholfen.

Es handelt sich noch um eine frühe Version, und obwohl wir weit über eine "Beta" hinausgehen, würden wir uns freuen, wenn Sie unserem Team etwaige Fehler melden, damit wir sie schnell beheben können.

<iframe width="656" height="369" src="https://www.youtube.com/embed/dS7h3isQCeA" title="YouTube-Videoplayer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Warum SubQuery verwenden?

Das Anwendungsökosystem hat sich auf Terra gut entwickelt, obwohl es an einigen wichtigen Entwicklerwerkzeugen und Infrastrukturdiensten mangelt. Es ist erstaunlich zu sehen und ein Beweis für die Tatkraft und den Einfallsreichtum der Lunatics in Terra. Als wir die Teams fragten, wie sie ihre Anforderungen an die Datenindizierung gelöst haben, war dies in den meisten Fällen der Fall:

- **Erstellen Sie Ihre eigene Lösung:** Eine benutzerdefinierte Implementierung, die Sie selbst ausführen und speziell für Ihre Anwendung erstellen. Aber warum das Rad neu erfinden? SubQuery konzentriert sich auf den Aufbau eines zuverlässigen und schnellen offenen Indexers - wir sind hier, um Ihnen Zeit zu sparen
- **Entwurf von Smart Contracts für Abfragen:** Einige Teams implementierten sogar benutzerdefinierte Eigenheiten in ihre Smart Contracts, um speziell für ihre Anwendungslogik erweiterte Abfragen zu ermöglichen.

Bei SubQuery haben wir ein Open-Source-SDK, das einfach zu bedienen und blitzschnell ist. Es stellt Ihnen einen Standard-GraphQL-Endpunkt zur Verfügung, oder Sie können einfach die Postgres-Datenbank direkt abfragen. Damit können Sie einen einzigartigen Datensatz aus Ihren eigenen intelligenten Verträgen indexieren, der es Ihnen ermöglicht, ein überlegenes Produkt zu entwickeln, das Ihre Konkurrenz in den Schatten stellt! Wir geben Ihnen die Flexibilität, die Daten, die Sie benötigen, in der Form zu erhalten, die für Sie am besten geeignet ist.

Zuverlässigkeit ist der Schlüssel, und Sie brauchen eine zuverlässige und skalierbare Plattform, um sie zu hosten. [SubQuery's Managed Service](https://subquery.network/managedservices) ist eine branchenführende Hosting-Lösung für alle Kunden, die täglich Hunderte von Millionen von Anfragen an die größten Projekte in Polkadot bedient. Wir bieten unseren [Unternehmenskunden](./20211228-enterprise-hosted.md) Dienste wie dedizierte Datenbanken, redundante Cluster, intelligentes Multi-Cluster-Routing sowie fortschrittliche Überwachungs- und Analysemöglichkeiten. Es wird Ihre Bewerbung unterstützen, wenn Sie bereit sind, und wird mit Ihnen skalieren.

Und schließlich werden Sie in ein paar Monaten in der Lage sein, Ihre SubQuery-Infrastruktur mit dem SubQuery Network, der Zukunft der Web3-Infrastruktur, vollständig zu dezentralisieren. Das SubQuery Network wird die Daten Ihrer Projekte indizieren und der globalen Gemeinschaft auf eine anregende und überprüfbare Weise zur Verfügung stellen. Es ist so konzipiert, dass es jedes SubQuery-Projekt aus jedem Layer-1-Netzwerk einschließlich Terra unterstützt, so dass Sie von Anfang an die Vorteile des einheitlichen SubQuery-Netzwerks nutzen können.

## Installationsanweisungen

Zuerst musst du eine aktuelle Version von @subql/cli via npm i -g @subql/cli@latest installieren

Der beste Weg ist mit[unseres Startprojektes](https://github.com/subquery/terra-subql-starter) zu starten, es enthält ein laufendes Projekt mit einem Beispiel von allen Mapping-Funktionen: Des Indexes vom Projekt sind:

- **BlockHandler:** Alle Blöcke und ihre Hash und Höhe
- TransactionHandler: Alle Transaktionen und deren Hash, Höhe und Zeitstempel
- EreignisHandler: Alle Smart-Contract-Übertragungsereignisse und deren Hash, Höhe, Absender, Empfänger und Betrag von einer gefilterten Smart-Contract-Adresse (bLuna)
- **MessageHandler:** Alle Smart-Contract-Nachrichten und ihre Hash-, Höhen-, Vertrags-, Absender- und execute_msg-Daten von einer gefilterten Smart-Contract-Adresse (bLuna)

SubQuery unterstützt die Indizierung von Terra's Smart Contracts sowohl mit Transaktions- als auch mit Nachrichten-Abonnements und -Handlern. Sie können ein funktionierendes Beispiel für die Unterstützung von Smart Contracts im Starterprojekt sehen und die Dokumentation der SubQuery University lesen.

Die Terra-Implementierung von SubQuery wurde so konzipiert, dass sie fast identisch mit der Polkadot-Unterstützung von SubQuery und ähnlich wie der Ansatz von Graph funktioniert. Wir haben die SubQuery University aktualisiert, um die allgemeine SubQuery-Dokumentation um Terra-spezifische Informationen zu ergänzen. Beginnen Sie mit dieser ausgezeichneten Anleitung für den Einstieg.

## Bereitstellung Ihres Projekts für den Managed Service von SubQuery

Obwohl Sie immer in der Lage sein werden, Ihr Projekt in Ihrer eigenen Infrastruktur zu betreiben, unterstützt der Managed Service von SubQuery jetzt Terra Project.  Einige der größten Projekte verlassen sich auf SubQuerys Managed Service auf Unternehmensebene, und jetzt können Sie das auch. Im Rahmen unserer Partnervereinbarung zur Markteinführung stellen wir Ihnen 3 Monate kostenloses Hosting zur Verfügung.

Sie können [hier](https://university.subquery.network/run_publish/publish.html) der Anleitung folgen, um Ihr Terra SubQuery Projekt in unserem Managed Service zu veröffentlichen. Bitte beachten Sie, dass Sie Ihr [SubQuery-Projekt über IPFS](https://university.subquery.network/run_publish/publish.html) und nicht über GitHub hosten müssen.

Sie können Ihr verwaltetes Serviceprojekt so oft aktualisieren, wie Sie möchten. Wir verfügen sogar über einen [Staging Deployment Slot](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md), der es Ihnen ermöglicht, nahtlose Blue/Green-Upgrades ohne Ausfallzeiten durchzuführen. Dieser Staging-Slot kann auch verwendet werden, um eine saubere Instanz von SubQuery mit einer frischen Datenbank für eine vollständige Neuindizierung Ihres Projekts im Hintergrund auszuführen. In der Regel verknüpfen Kunden den Staging-Slot mit den Staging-/Entwicklungsversionen ihrer Anwendungen.

Nach der Bereitstellung können Sie über den SubQuery Explorer auf Ihr Projekt zugreifen und Anfragen direkt von Ihrer Anwendung an den bereitgestellten GraphQL-Endpunkt stellen. Lassen Sie uns wissen, wenn Sie erweiterte Funktionen wie [GraphQL-Abonnements](https://university.subquery.network/run_publish/subscription.html), komplexere Abfragen und [Aggregationsfunktionen](https://university.subquery.network/run_publish/aggregate.html) aktivieren möchten.

Bitte benachrichtigen Sie uns, sobald Sie Ihr Projekt bereitgestellt haben, da wir möglicherweise bei der Feinabstimmung der Stapelgröße behilflich sein müssen, um sicherzustellen, dass unser Terra-Archivknoten für Ihr Projekt gut funktioniert.

## SubQuery-Unterstützung für Avalanche

Heute teilen wir Folgendes:

-   Erweiterte Indizierung von Blöcken, Ereignis
-   Terra Dictionary: Vorberechnete Indizes zur [dramatischen Verkürzung der Indexierungszeit](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
-   Volle Unterstützung für Terra in unserem kostenlosen [Enterprise Level](./20211228-enterprise-hosted.md) Managed Service
-   Intuitive Dokumentation in der [SubQuery University](https://university.subquery.network/)

In den kommenden Wochen können Sie erwarten:

-   Ein Schritt-für-Schritt-Lernkurs in der [SubQuery Academy](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   Volle Unterstützung für Terra in unserem dezentralen SubQuery-Netzwerk (in Kürze sehen Sie ein Projekt in unserem aktuellen Frontier-Testnetzwerk)

---

Der Start unseres Beta-Supports für Terra markiert einen bedeutenden Meilenstein in unserem Engagement, der Terra-Community verbesserte Indizierungstools anzubieten, damit ihre Entwickler schneller weiterkommen können. Wir sind gespannt auf Feedback von der Community, um unser Angebot zu verbessern und unsere Sichtbarkeit als vertrauenswürdiger Infrastrukturpartner für eine der am schnellsten wachsenden Entwicklercommunitys in Web3 zu erhöhen

James Bayly

## Links

-   [Handbuch „Erste Schritte“.](https://university.subquery.network/quickstart/quickstart-terra.html)
-   [SubQuery University (Dokumentation)](https://university.subquery.network/)
-   [Beispiel Terra-Projekt](https://github.com/subquery/terra-subql-starter)
-   [Managed Service](https://explorer.subquery.network/)
-   [Veröffentlichen Sie Ihr eigenes Terra-Projekt im Managed Service](https://project.subquery.network/)

## Über SubQuery

[SubQuery](https://subquery.network/) ist ein Blockchain-Entwickler-Toolkit, mit dem andere Web3-Anwendungen der Zukunft erstellen können. Ein SubQuery-Projekt ist eine vollständige API zum Organisieren und Abfragen von Daten aus Layer-1-Chains. Dieser Data-as-a-Service, der derzeit Polkadot-, Substrate-, Avalanche- und jetzt Terra-Projekte bedient, ermöglicht es Entwicklern, sich auf ihren Kernanwendungsfall und ihr Frontend zu konzentrieren, ohne Zeit mit dem Aufbau eines benutzerdefinierten Backends für die Datenverarbeitung verschwenden zu müssen. Das SubQuery Network schlägt vor, dieselbe skalierbare und zuverlässige Lösung zu ermöglichen, jedoch auf vollständig dezentralisierte Weise.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Webseite](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
