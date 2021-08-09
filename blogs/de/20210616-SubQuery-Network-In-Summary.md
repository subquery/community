
> Wie funktioniert das SubQuery Netzwerk? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)

Heute sprechen wir darüber, wie das SubQuery Network auf einem hohen Niveau funktioniert.

## Teilnehmer


![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Teilnehmer im Unterabfrage-Netzwerk

Es gibt drei Arten von Teilnehmern im Unterabfragenetzwerk:

-   **Verbraucher**: Verbraucher werden Anfragen an das SubQuery Network für bestimmte Daten stellen und eine angezeigte Menge an SQT bezahlen
-   **Indexer**: Indexer werden Unterabfrageprojekte in ihrer eigenen Infrastruktur beherbergen wird sowohl der Knoten- als auch der Abfragedienst ausgeführt, um die Daten zu indizieren und GraphQL-Anfragen zu beantworten.
-   **Delegierende**: Die Delegierten werden am Netzwerk teilnehmen, indem sie ihre Lieblingsindexer unterstützen, um Belohnungen zu verdienen

## Indexer, Verbraucher und Abfragen

Beginnen wir mit Indexern, Indexer machen viel von der harten Arbeit hinter den Kulissen. Die Verwaltung der Hardware, die Ausführen der Infrastruktur, die Überwachung der Ressourcen und die Auswahl der richtigen Unterabfrageprojekte zur Indexierung

Das braucht Zeit und Geld, aber sobald sie das haben, können die Verbraucher kommen und Anfragen stellen. Die Verbraucher werden Anfragen an das SubQuery Netzwerk nach bestimmten Daten stellen und eine angezeigte Menge unseres Tokens zahlen, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Die Verbraucher werden Anfragen an das SubQuery Netzwerk nach bestimmten Daten stellen und eine angezeigte Menge unseres Tokens zahlen, SQT.

## Cobb-Douglas Produktionsfunktion

Diese Zahlung geht in einen Einnahmenpool für Projekteinnahmen und am Ende einer Ablaufzeit (28 Tage) nehmen wir diesen Einnahmenpool und teilen ihn. Es spuckt sich über Indexer durch die so genannte Cobb-Douglas-Produktionsfunktion.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

Es spuckt sich über Indexer durch die so genannte Cobb-Douglas-Produktionsfunktion.

Dieser Ansatz bedeutet schlicht und einfach, dass die Einnahmen den konkurrierenden Indexern als Anteil sowohl der befragten als auch des befragten Betrags zugewiesen werden.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Die Einnahmen werden an konkurrierende Indexer als Anteil sowohl der Anfragen beantwortet als auch des befragten Betrags zugewiesen.

Unserer Ansicht nach die Schönheit dieser Gleichung ist, dass ein rationaler Indexer ein hohes Maß an gesteckten SQT im Verhältnis zu ihrer Arbeit aufrechterhalten muss, um optimale Einnahmen zu erzielen. Infolgedessen wir brauchen keine willkürlichen Forderungen durchzusetzen, weil Indexer Anreize haben, sich selbst zu verwalten und einen Anteil oder eine Haut am Spiel zu halten.

## Delegierte

Indexer sind also Anreize, beide so viel Arbeit wie möglich zu leisten und so viel wie möglich zu investieren, um ihre Gewinne zu maximieren. Hier kommen die Delegierten hinein.

Delegierten können ihre ReserveSQT an Indexer delegieren, jeder Indexer kann eine _Abfragegebühr Umsatzbeteiligung veröffentlichen_, und diese Delegierten werden durch einen Teil der Abfragegebühren belohnt, in denen der Indexer belohnt wird.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Delegierten können ihre ReserveSQT an Indexer delegieren und diese Delegierten werden durch einen Teil der Abfragegebührenerlöse belohnt, in denen der Indexer belohnt wird

Die _Abfragegebühr Umsatzbeteiligungsrate_ die Indexer Werbung für jede 28 Tage absteckende Ära gesperrt ist und ein Rückgang auf sie muss für eine ganze 28-tägige Absteckzeit beworben werden, bevor sie in Kraft tritt.

In ähnlicher Weise können Delegierte ihre Delegationsbeträge jederzeit abziehen, aber sie erhalten nur dann Belohnungen, wenn sie für die gesamte Pfostenzeit delegiert haben.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegierte erhalten nur dann Belohnungen, wenn sie für die gesamte Absteckzeit delegiert haben

## Bestellungen

Die Indizierung eines Projekts braucht Zeit und Geld, es gibt viele Daten über die Kette. Um Indexer dazu zu ermutigen, ein völlig neues Unterabfrageprojekt zu indizieren und zu unterstützen, Wir planen, einen Marktmechanismus für Verbraucher zu implementieren, um garantierte Einnahmen an Indexer neuer SubQuery Projekte zu signalisieren.

Wir nennen ihnen den Kauf von Aufträgen, und die Verbraucher können einen Kettenvertrag für einen festgelegten Preis und eine Anzahl von Anfragen werben. Indexer können dies sehen und entscheiden, die Verträge auszufüllen.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Die Verbraucher können eine Bestellung auf der Kette für einen festgelegten Preis und die Anzahl der Anfragen bewerben.

Einkaufsaufträge können auch in bestehenden Unterabfrageprojekten platziert werden, um zusätzliche Indexer anzuziehen, um den Wettbewerb zu verbessern und die Preise zu senken