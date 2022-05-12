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

So Indexers are incentivised to both do as much work as possible, and to stake as much as possible to maximise their rewards. This is where delegators come in.

Delegatoren können ihre überschüssige SQT an Indexer delegieren, jeder Indexer kann einen _Anfragegebühren-Ertragsanteil_ veröffentlichen, und diese Delegatoren werden durch einen Teil des Anfragegebühren-Ertrags, den der Indexer erhält, belohnt.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Delegators can delegate their spare SQT to Indexers and those delegators will be rewarded by a portion of the query fee revenue that the indexer is rewarded in

The _query fee revenue share rate_ that indexers advertise is locked for each 28 day staking era, and a decrease to it must be advertised for an entire 28 day staking era before coming into force.

Similarly, delegators can remove their delegation amounts at any point, but they will only receive rewards when they have delegated for the entire staking era.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegators will only receive rewards when they have delegated for the entire staking era

## Kauforder

Indexing a project takes time and money, there’s a lot of data on the chain. In order to encourage Indexers to index and support an entirely new SubQuery Project, we plan to implement a market mechanism for Consumers to signal guaranteed revenue to Indexers of new SubQuery Projects.

We’re calling them purchase orders, and Consumers can advertise a contract on chain for a set price and number of requests. Indexers can view this and choose to fill the contracts.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Consumers can advertise a purchase order on chain for a set price and number of requests.

Purchase orders can also be placed on existing SubQuery Projects to attract additional Indexers to improve competition and decrease prices
