# SubQuery integriert Acala zum Aggregieren und Bereitstellen von DeFi-Daten für Polkadot- und Kusama-Builder

![](https://miro.medium.com/max/1400/1*cg4kJs0WEcyPP73EAtHomA.png)

Letzte Woche hat [SubQuery](https://www.subquery.network/) die nächste Phase ihres Projekts veröffentlicht, den [SubQuery Explorer](https://explorer.subquery.network/). Diese Woche haben Acala und SubQuery eine Integration abgeschlossen, die den Benutzern und Entwicklern ermöglicht, Daten aus dem DeFi-Hub von Acala für Polkadot in nur wenigen Minuten und kostenlos abzufragen und zu extrahieren.

SubQuery ist eine Datenaggregationsschicht, die zwischen der Schicht-1-Blockchain (Acala) und der DApp-Schicht operiert. Die Lösung aggregiert und organisiert Daten aus Acala und anderen Blockchains und stellt gut strukturierte Daten für Entwickler bereit, die man für eine Vielzahl von Projekten verwenden kann. Dieser Service ermöglicht es DApp-Entwicklern, sich auf ihren Kernanwendungsfall und das Front-End zu konzentrieren, ohne Zeit mit dem Erstellen eines benutzerdefinierten Back-Ends für die Datenverarbeitung zu verschwenden.

Acala ist ein fester Gläubiger und ein langfristiger Baumeister für die Multi-Chain-Zukunft – Verringerung der Liquiditätsfragmentierung, Erhöhung der Zusammensetzbarkeit und Ermöglichung des DeFi-Zugangs für alle. Acala ist eine spezialisierte Blockchain, die sich auf dezentralisierte Finanzen (DeFi) konzentriert und mehrere DeFi-Primitive erstellt hat, die zu einem DeFi-Hub und einer Infrastruktur für die Ökosysteme Polkadot und Kusama wurden. Das Team hat Produkte entwickelt, darunter einen mehrfach besicherten Stablecoin (aUSD – The Acala Dollar), einen automatisierten Market Maker (AMM) DEX, einen tokenisierten Vermögenswert namens Liquid DOT (LDOT) und eine Bring-your-own-Gas-Funktion implementiert ermöglicht die Zahlung von Gasgebühren in allen unterstützten Vermögenswerten wie Stablecoins. Acala parachain plant, die Rolle des DeFi-Hubs für Polkadot und eines Landeplatzes zu spielen, der Vermögenswerte und Liquidität aus einer Vielzahl von Blockchains aggregiert.

Wenn Sie heute auf den [SubQuery Explorer](https://explorer.subquery.network/) zugreifen, werden Sie mit einem neuen Acala SubQuery-Projekt begrüßt. Diese SubQuery verfolgt dynamisch alle extrinsischen Daten, die auf Acala erstellt wurden, und kann schnell abgeleitete aggregierte Statistiken für Folgendes anzeigen:

-   Historische Daten zu Liquiditätsveränderungen (aufgeschlüsselt nach Anbietern)
-   Historische Daten zu allen Cross-Chain-Asset-Swaps
-   Transferhistorie

![](https://miro.medium.com/max/1400/0*sXPljA1RE754fuDQ)

Sie können mit dem Acala SubQuery Graph mit dem [Explorer](https://explorer.subquery.network/) herumspielen, ohne etwas in Code zu implementieren. Darüber hinaus haben wir die Typen dokumentiert, die Sie in jeder GraphQL-Anfrage angeben können, wenn Sie die Daten von Acala analysieren.

Nachfolgend finden Sie ein einfaches Beispiel dafür, wie ein Benutzer die vorherigen 5 Transferereignisse mithilfe des ACA-Tokens über das Acala Mandala-Netzwerk schnell und einfach anzeigen kann. Sie können hier sehen, dass wir die einfache GraphQL-Sprache verwenden, um diese Daten zu sortieren und an jeden Client abzurufen. DApps können dies verwenden, um Kreditpositionen zu überwachen und an Auktionen usw. zu springen, um Sicherheiten zu liquidieren.

![](https://miro.medium.com/max/1400/0*zlxPf2tz8DVX95kY)

Es folgt ein etwas komplexeres Beispiel, bei dem wir ein einzelnes Konto untersuchen und alle von ihm durchgeführten Token-Swap-Ereignisse abrufen. Eine Portfolio-DApp könnte diese Daten verwenden, um einen Überblick über die Konto- und Token-Performance des Inhabers, die Einnahmen aus dem Abstecken, die Liquiditätsbereitstellung und die Ausgaben für die Kreditaufnahme zu erstellen.

![](https://miro.medium.com/max/1400/0*hdTbn41vDvIYuv3_)

[SubQuery Explorer](https://explorer.subquery.network/) ist ein gehosteter Online-Dienst, der Zugriff auf veröffentlichte SubQuery-Projekte bietet, die von Mitwirkenden auf der ganzen Welt erstellt und vom SubQuery-Team verwaltet werden. Seine Mission ist folgendes: den Zugriff auf Polkadot-Netzwerkdaten durch Bereitstellung von Infrastrukturdiensten zu erleichtern, um Entwicklern zu helfen, mehr zu erreichen.

[SubQuery](https://www.subquery.network/) ermöglicht es jedem Substrate/Polkadot-Team, seine Daten zu verarbeiten und abzufragen. Das Projekt ist inspiriert von der Zunahme von Datenprotokollen, die der Anwendungsschicht dienen, und hat zum Ziel, Polkadot/Substrate-Projekten dabei zu helfen, bessere dApps zu erstellen, indem es jedem ermöglicht wird, Daten zuverlässig schneller zu finden und zu konsumieren. Heute kann jeder Polkadot-Netzwerkdaten in wenigen Minuten und kostenlos abfragen und extrahieren.

[E-Mail](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

[Acala](http://acala.network/) ist das dezentrale Finanzzentrum und Stablecoin von Polkadot, das die schnelle und einfache Verwendung oder Erstellung von Finanzanwendungen ermöglicht, die Handelseffizienz verbessert und Zeit spart. Die Plattform bietet eine Reihe von finanziellen Primitiven: eine mehrfach besicherte Stablecoin, die durch kettenübergreifende Vermögenswerte wie Bitcoin gestützt wird, ein vertrauenswürdiges Staking-Derivat und eine dezentrale Börse, um Liquidität freizusetzen und Finanzinnovationen voranzutreiben. Acala ist "de facto" offene Plattform für Finanzanwendungen, um intelligente Verträge oder integrierte Protokolle mit sofort einsatzbereiten Cross-Chain-Funktionen und robuster Sicherheit zu verwenden.

[Discord](https://discord.gg/vdbFVCH) | [Webseite](https://acala.network/) | [Twitter](https://twitter.com/AcalaNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [Acala Wiki](https://github.com/AcalaNetwork/Acala/wiki) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc)