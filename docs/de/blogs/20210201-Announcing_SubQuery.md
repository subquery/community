# Die Ankündigung von SubQuery

## Transformieren und Abfragen der Weltdaten für die Web3.0-Zukunft

![](https://miro.medium.com/max/1400/1*J5u22qNxndcuCrFJ1mfGqg.png)

Die Mission von OnFinality besteht darin, Blockchain-Entwickler durch die Bereitstellung von Infrastrukturdiensten für Kunden aller Formen und Größen zu unterstützen. Wir starten ein neues Projekt, das darauf abzielt, ein Kernproblem zu lösen, um diese Mission voranzutreiben: SubQuery.

Fast jede Blockchain soll Daten verarbeiten und abfragen. Die florierende Polkadot-Community wird einen Dienst benötigen, der es ihnen ermöglicht, Daten zuverlässig schnell zu finden und zu konsumieren. Unser Projekt ist inspiriert von [The Graph](https://thegraph.com/), einem Dienst, der sich derzeit auf Ethereum konzentriert und es Kunden ermöglicht, dies mithilfe von GraphQL zu tun.

Da dezentrale Systemdaten über Netzwerke hinweg speichern, ist die Abfrage langsam und schwierig. Damit der Web 3.0-Traum verwirklicht werden kann, muss er für den Endbenutzer so schnell (wenn nicht schneller) wie zentralisierte Netzwerke sein. Protokoll-Teams bauen derzeit zentralisierte Indizierungsserver für ihre eigenen Projekte, aber dies wirft drei Probleme auf:

-   Polkadot/Substrat-Teams sollten sich keine Gedanken machen müssen, dies zu bauen oder zu verwalten, während sie die nächste dApp bauen
-   Teams erfinden das Rad ständig neu; Der grundlegende Vorteil der Parachain-Interoperabilität von Polkadot besteht darin, dies zu vermeiden
-   Unserer Ansicht nach ist das Ökosystem Substrate/Polkadot auf dem gleichen Wachstumsniveau wie Ethereum angelangt. Wir glauben, dass es dasselbe Niveau an Gemeinschaftsdiensten erbringen muss wie Ethereum bereits hat

![](https://miro.medium.com/max/1400/1*l4b4BXWkczVDaHyv30lLQQ.png)

SubQuery hat folgendes Ziel: Polkadot/Substrat Projekten dabei zu helfen, bessere dApps zu entwickeln, indem es jedem ermöglicht, Daten schneller zu finden und zu konsumieren. Unser Service ermöglicht den Benutzern, anfangs Daten zu extrahieren, zu transformieren, zu verbleiben und Abfragedaten zu erstellen sowie in Zukunft Daten zu verbinden und zu präsentieren. Unser Ziel ist es, dies zu einem Kernstück der Infrastruktur für das Ökosystem Substrate/Polkadot zu machen, so wie es die Grafik für Ethereum geworden ist.

> SubQuery ist hier, um Ihnen zu helfen, die weltweiten Daten für eine Zukunft web3.0 zu transformieren und abzufragen.

![](https://miro.medium.com/max/1000/1*IHstJG-hBwQzicLdWkGR5w.png)

Damit der Web 3.0-Traum verwirklicht werden kann, muss er für den Endbenutzer so schnell (wenn nicht schneller) sein wie zentralisierte Netzwerke.

Deshalb sind wir unglaublich stolz, SubQuery anzukündigen, ein Open-Source-Projekt, das es Benutzern erlaubt, einen Indexer über ihre Kette zu führen, um einen Datensatz zu erstellen, der mit GraphQL abgefragt werden kann. Diese Sammlung von Werkzeugen enthält eine Kommandozeilenschnittstelle, die es Projekten erlaubt, ihr eigenes SubQuery Projekt zu erstellen definieren, wie der Indexer sein eigenes Netzwerk durchlaufen und aggregieren soll. Es gibt ein SubQuery Node Paket, das das Netzwerk indiziert und GraphQL Anfragen unterstützt. Mit Hilfe dieser Tools kann jeder Abfragen einfach erstellen und ausführen.

> _Du kannst sofort loslegen, indem du unserem Beispiel auf dem SubQuery Github Repository folgst:_ [_https://github.com/OnFinality-io/subql_](https://github.com/OnFinality-io/subql)

Weitere Informationen findest du in unseren [Unterabfrage-Dokumenten](https://doc.subquery.network/) oder auf unserer neuen Website unter [https://subquery.network/](https://subquery.network/)

![](https://miro.medium.com/max/1000/1*3oA1Hvns1vrImTsmowO_Jw.png)

Wir werden uns auf den Aufbau eines verwalteten Hosting-Services konzentrieren, der auf diesem Angebot basiert, der leistungsfähiger und skalierbarer sein wird. Wir werden eine vertrauensvolle öffentliche Infrastruktur bereitstellen, die einen leistungsstarken Produktionsknoten aus einem hochgeladenen SubQuery Projekt aufbauen wird. Der Dienst wird dann den Kettenstatus indizieren und fortsetzen und eine Produktion GraphQL Endpunkt bereitstellen, die selbst gehostete Implementierungen ersetzen kann. Wir werden uns darauf konzentrieren, damit sich alle anderen auf den Aufbau und den Ausbau ihrer dApp konzentrieren können.

Sobald dies eingerichtet ist, besteht unsere letzte Phase darin, das SubQuery-Geschäft zu tokenisieren, indem wir unsere eigene Kette (wahrscheinlich Parachain) für Polkadot aufbauen. Obwohl wir ein ähnliches Abrechnungsmodell für Unternehmen und Benutzer mit hohem Verbrauch anbieten (Abonnementplan mit Verbrauchsstufen), speichern wir diese Daten in unserer Kette, um sie für alle transparent zu machen, und die teilnehmenden Parteien können sich als Anreiz für Prämien einsetzen. Wir geben ein Governance-Token aus, um der Kette Stabilität zu verleihen und der Gemeinschaft zu ermöglichen, unsere Richtung und Roadmap zu beeinflussen.

Trotz über 10 Jahren Entwicklung seit dem Start von Bitcoin sind zentralisierte Netzwerke immer noch der Mainstream. Dies liegt vor allem an der Geschwindigkeit und den Kosten des Zugriffs und Schreibens auf das Netzwerk. Ethereum machte mit dezentralisierten intelligenten Verträgen einen großen Schritt nach vorn (und das Diagramm ist als Ergebnis ein unglaublich erfolgreiches Stück Infrastruktur) aber das Kernnetz hat Schwierigkeiten, die Transaktionskosten zu senken.

Wir sahen das Potenzial von Polkadot von Anfang an als selbstverständlich, unsere Bemühungen dort zu konzentrieren. Es löst die Governance-, Forking-, Interoperabilitätsprobleme von Ethereum und mehr. Die Kernprämisse von Polkadot ist es, eine blühende Gemeinschaft von Entwicklern, Benutzern, zu schaffen und Unternehmen, die ihre Multichain-Interoperabilität nutzen werden — diese Gemeinschaft braucht einen Dienst, der es ihnen ermöglicht, schnell Daten zu finden und zu konsumieren.

Mit der einzigartigen Architektur von Polkadot können wir uns auf ein Netzwerk konzentrieren und dann mehrere aktuelle und zukünftige Ketten problemlos unterstützen. Indem wir diese Anstrengungen jetzt unternehmen, obwohl Polkadot noch in der Entwicklung ist, werden wir bereit sein, der nächsten Generation von Blockchain-Entwicklern bei der Entwicklung der nächsten großen dApp zu helfen.

SubQuery wird vom Team von OnFinality entwickelt, einer Infrastruktur-SaaS-Plattform für Blockchain-Teams und -Benutzer, um Knoten zu starten und Zugriff auf eine Vielzahl von Blockchain-Protokollen zu erhalten. Wir haben eine Reihe symbiotischer Dienste einschließlich unseres API Shared Node Service und dedizierte Knoten, die im Infrastruktur-Management oder als Teil der CI/CD-Pipeline eines Protokoll-Teams verwendet werden können. Wir haben Beziehungen zu den besten Polkadot/Substrat Teams, Expertise im Bereich verwalteter Infrastruktur für das Substrate/Polkadot Netzwerk, und die Fähigkeit, komplexe Infrastrukturprojekte zu realisieren und für die Produktion zu organisieren.

**Sam Zou —** CEO ([LinkedIn](https://www.linkedin.com/in/sam-zou-5b8169a/))

Unternehmer, Investoren, die mehr als 20 Jahren IT-Erfahrung haben, spezialisieren auf Infrastruktur- und Cloud-Service-Design

**Ian He –** Protokollleiter ([LinkedIn](https://www.linkedin.com/in/yin-he-7a266345/))

Blockchain Architect, Mitwirkender bei polkadot-js, Early Adopter der Substrate-Technologie und erwarb den zweiten Platz beim ersten Polkadot-Hackathon.

**James Xu —** Lösungsarchitekt ([LinkedIn](https://www.linkedin.com/in/zhexu/))

Infrastruktur & Application Architect, preisgekrönter Software-Engineer.

**James Bayly** – Leiter der Geschäftsentwicklung ([LinkedIn](https://www.linkedin.com/in/james-bayly/))

Beginnen Sie mit dem [SubQuery Github-Repository.](https://github.com/OnFinality-io/subql)

Lesen Sie unsere [SubQuery-Dokumente](https://doc.subquery.network/)

[Besuchen Sie unsere neue Website](https://subquery.network/)

Folgen Sie uns auf:

-   [Telegramm](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/%23subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)