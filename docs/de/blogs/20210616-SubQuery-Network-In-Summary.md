# SubQuery-Netzwerk - Zusammenfassung

**Wie funktioniert das SubQuery-Netzwerk? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)**

Heute werden wir darüber sprechen, wie das SubQuery-Netzwerk auf hoher Ebene funktioniert.

## Teilnehmer

![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Teilnehmer im SubQuery-Netzwerk

Es gibt drei Arten von Teilnehmern im SubQuery-Netzwerk:

- **Verbraucher**: Verbraucher stellen Anfragen an das SubQuery-Netzwerk nach bestimmten Daten und zahlen einen beworbenen Betrag von SQT
- **Indexer**: Indexer hosten SubQuery-Projekte in ihrer eigenen Infrastruktur und führen sowohl den Knoten als auch den Abfragedienst aus, um Daten zu indizieren und GraphQL-Anfragen zu beantworten.
- **Delegatoren**: Delegatoren nehmen am Netzwerk teil, indem sie ihre bevorzugten Indexer unterstützen, um Belohnungen zu verdienen

## Indexer, Verbraucher und Abfragen

Beginnen wir mit Indexern, Indexer erledigen einen großteil der harten arbeit hinter den kulissen. Sie verwalten Hardware, führen die Infrastruktur aus, überwachen Ressourcen und wählen die richtigen SubQuery-Projekte zum Indizieren aus

Dies kostet Zeit und Geld, aber sobald sie dies haben, können die Verbraucher kommen und Anfragen stellen. Die Verbraucher stellen Anfragen an das SubQuery-Netzwerk für bestimmte Daten und zahlen einen angekündigten Betrag unseres Tokens, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Die Verbraucher stellen Anfragen an das SubQuery-Netzwerk für bestimmte Daten und zahlen einen angekündigten Betrag unseres Tokens, SQT.

## Cobb-Douglas Produktionsfunktion

Diese Zahlung fließt in einen Projekteinnahmenpool und am Ende einer Staking-Periode (28 Tage) nehmen wir diesen Projekteinnahmenpool und teilen ihn auf. Es wird von der sogenannten Cobb-Douglas-Produktionsfunktion über Indexer verteilt.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

Es wird von der sogenannten Cobb-Douglas-Produktionsfunktion über Indexer verteilt.

Dieser Ansatz bedeutet einfach ausgedrückt, dass die Einnahmen den konkurrierenden Indexern als Anteil sowohl der beantworteten Anfragen als auch des eingesetzten Betrags zugeteilt werden.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Die Einnahmen werden den konkurrierenden Indexern als Anteil sowohl der beantworteten Anfragen als auch des eingesetzten Betrags zugeteilt.

Unserer Ansicht nach besteht das Schöne an dieser Gleichung darin, dass ein rationaler Indexer im Verhältnis zu seiner Arbeit ein hohes SQT-Niveau aufrechterhalten muss, um optimale Einnahmen zu erzielen. Infolgedessen müssen wir keine willkürlichen Staking-Anforderungen durchsetzen, da Indexer einen Anreiz haben, sich selbst zu verwalten und einen Stake oder Skin im Spiel zu behalten.

## Delegierten

Indexer haben also einen Anreiz, sowohl so viel Arbeit wie möglich zu leisten als auch so viel wie möglich zu setzen, um ihre Belohnungen zu maximieren. Hier kommen die Delegierten ins Spiel.

Delegatoren können ihre überschüssige SQT an Indexer delegieren, jeder Indexer kann einen _Anfragegebühren-Ertragsanteil_ veröffentlichen, und diese Delegatoren werden durch einen Teil des Anfragegebühren-Ertrags, den der Indexer erhält, belohnt.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Delegierende können ihre freie SQT an Indexer delegieren, und diese Delegierenden werden mit einem Teil der Einnahmen aus der Abfragegebühr belohnt, mit denen der Indexer belohnt wird

Die von Indexierern beworbene _Umsatzbeteiligungsrate für Abfragegebühren_ ist für jede 28-tägige Staking-Ära gesperrt, und eine Senkung muss für eine ganze 28-tägige Staking-Ära beworben werden, bevor sie in Kraft tritt.

Ebenso können Delegierende ihre Delegationsbeträge jederzeit entfernen, erhalten jedoch nur dann Belohnungen, wenn sie für die gesamte Staking-Ära delegiert haben.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegierende erhalten nur Belohnungen, wenn sie für die gesamte Staking-Ära delegiert haben

## Kauforder

Die Indexierung eines Projekts kostet Zeit und Geld, es gibt viele Daten in der Chain. Um Indexierer zu ermutigen, ein völlig neues SubQuery-Projekt zu indizieren und zu unterstützen, planen wir die Implementierung eines Marktmechanismus für Verbraucher, um Indexierern von neuen SubQuery-Projekten garantierte Einnahmen zu signalisieren.

Wir nennen sie Bestellungen, und Verbraucher können für einen Vertrag in der Chain für einen festgelegten Preis und eine festgelegte Anzahl von Anfragen werben. Indexierer können dies einsehen und die Verträge ausfüllen.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Verbraucher können eine Bestellung in der Chain für einen festgelegten Preis und eine festgelegte Anzahl von Anfragen bewerben.

Bestellungen können auch für bestehende SubQuery-Projekte aufgegeben werden, um zusätzliche Indexer anzuziehen, um den Wettbewerb zu verbessern und die Preise zu senken
