# Die Ankündigung von SubQuery

## Transformieren und Abfragen der Weltdaten für die Web3.0-Zukunft

![](https://miro.medium.com/max/1400/1*J5u22qNxndcuCrFJ1mfGqg.png)

Die Mission von OnFinality besteht darin, Blockchain-Entwickler durch die Bereitstellung von Infrastrukturdiensten für Kunden aller Formen und Größen zu unterstützen. Wir starten ein neues Projekt, das darauf abzielt, ein Kernproblem zu lösen, um diese Mission voranzutreiben: SubQuery.

Fast jede Blockchain soll Daten verarbeiten und abfragen. Die florierende Polkadot-Community wird einen Dienst benötigen, der es ihnen ermöglicht, Daten zuverlässig schnell zu finden und zu konsumieren. Unser Projekt ist inspiriert von [The Graph](https://thegraph.com/), einem Dienst, der sich derzeit auf Ethereum konzentriert und es Kunden ermöglicht, dies mithilfe von GraphQL zu tun.

Da dezentrale Systemdaten über Netzwerke hinweg speichern, ist die Abfrage langsam und schwierig. Damit der Web 3.0-Traum verwirklicht werden kann, muss er für den Endbenutzer so schnell (wenn nicht schneller) wie zentralisierte Netzwerke sein. Protokoll-Teams bauen derzeit zentralisierte Indizierungsserver für ihre eigenen Projekte, aber dies wirft drei Probleme auf:

- Polkadot/Substrat-Teams sollten sich keine Gedanken machen müssen, dies zu bauen oder zu verwalten, während sie die nächste dApp bauen
- Teams erfinden das Rad ständig neu; Der grundlegende Vorteil der Parachain-Interoperabilität von Polkadot besteht darin, dies zu vermeiden
- Unserer Ansicht nach ist das Ökosystem Substrate/Polkadot auf dem gleichen Wachstumsniveau wie Ethereum angelangt. Wir glauben, dass es dasselbe Niveau an Gemeinschaftsdiensten erbringen muss wie Ethereum bereits hat

![](https://miro.medium.com/max/1400/1*l4b4BXWkczVDaHyv30lLQQ.png)

SubQuery hat folgendes Ziel: Polkadot/Substrat Projekten dabei zu helfen, bessere dApps zu entwickeln, indem es jedem ermöglicht, Daten schneller zu finden und zu konsumieren. Unser Service ermöglicht den Benutzern, anfangs Daten zu extrahieren, zu transformieren, zu verbleiben und Abfragedaten zu erstellen sowie in Zukunft Daten zu verbinden und zu präsentieren. Unser Ziel ist es, dies zu einem Kernstück der Infrastruktur für das Ökosystem Substrate/Polkadot zu machen, so wie es die Grafik für Ethereum geworden ist.

**SubQuery hilft Ihnen dabei, die Daten der Welt für eine web3.0-Zukunft zu transformieren und abzufragen.**

![](https://miro.medium.com/max/1000/1*IHstJG-hBwQzicLdWkGR5w.png)

Damit der Traum vom Web 3.0 verwirklicht werden kann, muss er für den Endbenutzer genauso schnell (wenn nicht sogar schneller) sein wie zentralisierte Netzwerke.

Aus diesem Grund sind wir unglaublich stolz darauf, SubQuery ankündigen zu können, ein Open-Source-Projekt, mit dem Benutzer einen Indexer über ihre Kette hinweg ausführen können, um ein Dataset zu erstellen, das mit GraphQL abgefragt werden kann. Diese Toolsuite enthält eine Befehlszeilenschnittstelle, mit der Projekte ihr eigenes Unterabfrageprojekt generieren und definieren können, wie der Indexer ihr eigenes Netzwerk durchlaufen und aggregieren soll. Es gibt ein Unterabfragenknotenpaket, das das Netzwerk indiziert und GraphQL abfragen unterstützt. Mit hilfe dieser tools kann jeder problemlos abfragen erstellen und ausführen.

**Sie können sofort loslegen, indem Sie unserem Beispiel im Github-Repository für Unterabfragen folgen: [_https://github.com/OnFinality-io/subql_](https://github.com/OnFinality-io/subql)**

Darüber hinaus können Sie mehr erfahren, indem Sie unsere lesen [SubQuery docs](https://doc.subquery.network/) oder besuchen Sie unsere neue Website unter [https://subquery.network/](https://subquery.network/)

![](https://miro.medium.com/max/1000/1*3oA1Hvns1vrImTsmowO_Jw.png)

Wir konzentrieren uns auf den aufbau eines verwalteten gehosteten dienstes, der auf diesem angebot basiert und performanter und skalierbarer ist. Wir werden eine vertrauenswürdige öffentliche Infrastruktur bereitstellen, die aus einem hochgeladenen unterabfrageprojekt einen leistungsstarken, produktiven Unterabfrageknoten erstellt. Der dienst indiziert und speichert dann den kettenstatus und stellt einen produktions-GraphQL endpunkt bereit, der selbst gehostete Implementierungen ersetzen kann. Wir werden uns darauf konzentrieren, damit sich alle anderen auf den Aufbau und das Wachstum ihrer dApp konzentrieren können.

Sobald dies geschehen ist, besteht unsere letzte phase darin, das Unterabfragegeschäft zu tokenisieren, indem wir unsere eigene kette (wahrscheinlich parachain) für Polkadot aufbauen. Obwohl wir ein ähnliches abrechnungsmodell für unternehmen und benutzer mit hohem verbrauch bereitstellen (abonnementplan mit verbrauchsniveaus), speichern wir diese daten in unserer kette, um sie für alle transparent zu machen und die teilnehmenden parteien können als anreize für belohnungen einsetzen. Wir werden ein governance-Token ausgeben, um der kette stabilität zu verleihen und der community die möglichkeit zu geben, unsere richtung und roadmap zu beeinflussen.

Trotz über 10 jahren entwicklung seit dem start von Bitcoin sind zentralisierte netzwerke immer noch der mainstream. Dies liegt hauptsächlich an der geschwindigkeit und den kosten für den zugriff auf und das schreiben in das netzwerk. Ethereum hat mit dezentralen smart contracts einen großen Schritt nach vorne gemacht (und die grafik ist infolgedessen ein unglaublich erfolgreiches stück Infrastruktur), aber das kernnetzwerk kämpft darum, die transaktionskosten zu senken.

Wir haben das potenzial von Polkadot früh erkannt und von anfang an war es naheliegend, unsere bemühungen darauf zu konzentrieren. Es löst ethereums governance-, forking-, Interoperabilitätsprobleme und mehr. Die kernvoraussetzung von Polkadot ist die schaffung einer florierenden community von entwicklern, benutzern und unternehmen, die die multichain—Interoperabilität nutzen - diese community benötigt einen service, der es ihnen ermöglicht, daten zuverlässig und schnell zu finden und zu nutzen.

Die einzigartige architektur von Polkadot bedeutet, dass wir uns auf ein netzwerk konzentrieren und dann problemlos mehrere aktuelle und zukünftige Ketten unterstützen können. Indem wir diese Anstrengungen jetzt unternehmen, auch wenn PolkaDot noch in der entwicklung ist, werden wir bereit sein, der nächsten generation von blockchain-entwicklern bei der erstellung der nächsten großen dApp zu helfen.

SubQuery wird vom team von OnFinality erstellt, einer Infrastruktur-SaaS plattform für blockchain teams und benutzer, mit der knoten gestartet und auf eine vielzahl von blockchain protokollen zugegriffen werden kann. Wir verfügen über eine Reihe von symbiotischen diensten, einschließlich unseres API Shared node dienstes und dedizierter knoten, die im Infrastrukturmanagement oder als teil der CI / CD-Testpipeline eines protokoll teams verwendet werden können. Wir verfügen über beziehungen zu den führenden Polkadot / Substrate teams, fachwissen im bereich verwaltetes Infrastruktur hosting für das Substrate / Polkadot Netzwerk und die Fähigkeit, komplexe Infrastruktur projekte bereitzustellen und für den produktion seinsatz zu hosten.

**Sam Zou —** CEO ([LinkedIn](https://www.linkedin.com/in/sam-zou-5b8169a/))

Entrepreneur, Investors with more than 20 years of IT experience specialising in infrastructure and cloud service design

**Ian He —** Head of Protocol ([LinkedIn](https://www.linkedin.com/in/yin-he-7a266345/))

Blockchain Architect, Contributor to polkadot-js, Early adopter of Substrate technology and won second place in the first Polkadot hackathon.

**James Xu —** Solutions Architect ([LinkedIn](https://www.linkedin.com/in/zhexu/))

Infrastructure & Application Architect, Award-winning software engineer.

**James Bayly** — Head of Business Development ([LinkedIn](https://www.linkedin.com/in/james-bayly/))

Get started on the [SubQuery Github repository.](https://github.com/OnFinality-io/subql)

Read our [SubQuery docs](https://doc.subquery.network/)

[Visit our new website](https://subquery.network/)

Follow us on:

- [Telegramm](https://t.me/subquerynetwork)
- [Twitter](https://twitter.com/subquerynetwork)
- [Matrix](https://matrix.to/#/%23subquery:matrix.org)
- [LinkedIn](https://www.linkedin.com/company/subquery)
