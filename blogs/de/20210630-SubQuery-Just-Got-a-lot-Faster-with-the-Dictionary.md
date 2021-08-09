![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)


Heute sind wir stolz, Ihnen unsere neue Verbesserung von SubQuery, SubQuerys Wörterbuch-Indexing-Funktion, bekannt zu geben.

Im SubQuery Dictionary geht es um die Beschleunigung Ihrer Projekte. Es verbessert die Indizierung der Leistung Ihres Unterabfrageprojekts, **manchmal bis zu 10x schneller.**

Bei der Indizierung von Kettendaten werden Unterabfrageprojekte verwendet, um jeden Block zu untersuchen. Die Kette von Polkadot ist groß, 130 GB unstrukturierte Daten über fast 6 Millionen Blöcke. Dies dauert viele Stunden, um zu indizieren, Zeit, auf die Sie nicht warten wollen – vor allem wenn Sie testen.

Unterabfrage-Projekte haben nun die Möglichkeit, all dies zu überspringen, wir indizieren im Wesentlichen die Position aller Ereignisse innerhalb einer Kette.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Die Leistung wird am meisten verbessert, wenn die Daten nicht häufig vorkommen, sondern entlang der Kette verstreut sind, als ob die Daten selten sind, überspringt das Wörterbuch mehr Blöcke, und daher ist der Einfluss auf die Leistung größer.

Der Endpunkt des Wörterbuchs kann in [der Datei „project.yaml“ hinzugefügt werden](https://doc.subquery.network/create/manifest.html)oder alternativ [angegeben zur Laufzeit](https://doc.subquery.network/run/run.html#using-a-dictionary). Zusätzlich können Sie diesen Endpunkt auch bei der Ausführung Ihres Projekts in [Unterabfrageprojekten](https://project.subquery.network/) überschreiben.

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

Lesen Sie mehr über das Wörterbuch in unserer [hilfreichen Dokumentation hier](https://doc.subquery.network/run/run.html#using-a-dictionary).

Wir glauben, dass SubQuery die beste Option zur Datenindizierung für jede Polkadot/Substrate dApp ist, und diese neue Implementierung von SubQuery’s Dictionary ermöglicht es uns, unseren Service weiter zu verbessern, indem wir den Indizierungsprozess für Ihre SubQuery Projekte beschleunigen.

Sie können es selbst in [Unterabfrageprojekten](https://project.subquery.network/) ausprobieren oder die Wörterbücher selbst unter [unserem Explorer](https://explorer.subquery.network/) ansehen. Um ein Wörterbuch in Ihrem existierenden Projekt verwenden zu können, muss Ihre [@subql/cli](https://www.npmjs.com/package/@subql/cli) Version mindestens 0.10.0 sein

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)