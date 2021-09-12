# SubQuery-Netzwerk - Zusammenfassung

> Wie funktioniert das SubQuery Netzwerk? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)

Heute werden wir darüber sprechen, wie das SubQuery-Netzwerk auf hoher Ebene funktioniert.

## Teilnehmer


![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Teilnehmer am SubQuery-Netzwerk

Es gibt drei Arten von Teilnehmern im SubQuery-Netzwerk:

-   **Verbraucher**: Verbraucher stellen Anfragen an das SubQuery-Netzwerk nach bestimmten Daten und zahlen einen beworbenen Betrag von SQT
-   **Indexer**: Indexer hosten SubQuery-Projekte in ihrer eigenen Infrastruktur und führen sowohl den Knoten als auch den Abfragedienst aus, um Daten zu indizieren und GraphQL-Anfragen zu beantworten.
-   **Delegatoren**: Delegatoren nehmen am Netzwerk teil, indem sie ihre bevorzugten Indexer unterstützen, um Belohnungen zu verdienen

## Indexer, Verbraucher und Abfragen

Beginnen wir mit Indexern, Indexer machen viel von der harten Arbeit hinter den Kulissen. Sie verwalten Hardware, führen die Infrastruktur aus, überwachen Ressourcen und wählen die richtigen SubQuery-Projekte für die Indizierung

Das braucht Zeit und Geld, aber sobald sie das haben, können die Verbraucher kommen und Anfragen stellen. Die Verbraucher werden Anfragen an das SubQuery Netzwerk nach bestimmten Daten stellen und eine angezeigte Menge unseres Tokens zahlen, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Die Verbraucher werden Anfragen an das SubQuery Netzwerk nach bestimmten Daten stellen und eine angezeigte Menge unseres Tokens zahlen, SQT.

## Cobb-Douglas Produktionsfunktion

Diese Zahlung geht in einen Einnahmenpool für Projekteinnahmen und am Ende einer Ablaufzeit (28 Tage) nehmen wir diesen Einnahmenpool und teilen ihn. Es wird von einer sogenannten Cobb-Douglas-Produktionsfunktion über Indexer gespuckt.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

Es spuckt sich über Indexer durch die so genannte Cobb-Douglas-Produktionsfunktion.

Dieser Ansatz bedeutet vereinfacht gesagt, dass die Einnahmen den konkurrierenden Indexern im Verhältnis zu den beantworteten Anfragen und dem eingesetzten Betrag zugeteilt werden.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Die Einnahmen werden an konkurrierende Indexer als Anteil sowohl der Anfragen beantwortet als auch des befragten Betrags zugewiesen.

Unserer Ansicht nach die Schönheit dieser Gleichung ist, dass ein rationaler Indexer ein hohes Maß an gesteckten SQT im Verhältnis zu ihrer Arbeit aufrechterhalten muss, um optimale Einnahmen zu erzielen. Infolgedessen müssen wir keine willkürlichen Staking-Anforderungen durchsetzen, da Indexer einen Anreiz haben, sich selbst zu verwalten und einen Stake oder Skin im Spiel zu halten.

## Delegierten

Indexer sind also Anreize, beide so viel Arbeit wie möglich zu leisten und so viel wie möglich zu investieren, um ihre Gewinne zu maximieren. Hier kommen die Delegierten hinein.

Delegierende können ihre Ersatz-SQT an Indexer delegieren, jeder Indexer kann einen _Abfragegebühren-Umsatzanteil_ veröffentlichen, und diese Delegatoren werden mit einem Teil der Abfragegebühren-Einnahmen belohnt, mit denen der Indexer belohnt wird.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Delegierende können ihre Ersatz-SQT an Indexer delegieren und diese Delegatoren werden mit einem Teil der Abfragegebühreneinnahmen belohnt, die der Indexer erhält

Die _Abfragegebühr-Umsatzbeteiligungsrate_, die Indexer bewerben, ist für jede 28-tägige Staking-Ära gesperrt, und eine Senkung muss für eine gesamte 28-tägige Staking-Ära angekündigt werden, bevor sie in Kraft tritt.

Ebenso können Delegatoren ihre Delegierungsbeträge jederzeit entfernen, erhalten jedoch nur dann Belohnungen, wenn sie für die gesamte Staking-Ära delegiert haben.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegierte erhalten nur dann Belohnungen, wenn sie für die gesamte Absteckzeit delegiert haben

## Kauforder

Die Indizierung eines Projekts braucht Zeit und Geld, es gibt viele Daten über die Kette. Um Indexer zu ermutigen, ein völlig neues SubQuery-Projekt zu indizieren und zu unterstützen, planen wir, einen Marktmechanismus für Verbraucher zu implementieren, um Indexern von neuen SubQuery-Projekten garantierte Einnahmen zu signalisieren.

Wir nennen sie Bestellungen, und Verbraucher können einen Kettenvertrag zu einem festgelegten Preis und einer bestimmten Anzahl von Anfragen bewerben. Indexer können dies anzeigen und die Verträge ausfüllen.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Verbraucher können eine Bestellung in der Kette zu einem festgelegten Preis und einer Anzahl von Anfragen anbieten.

Bestellungen können auch für bestehende SubQuery-Projekte platziert werden, um zusätzliche Indexer zu gewinnen, um den Wettbewerb zu verbessern und die Preise zu senken