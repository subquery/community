# SubQuery ist mit dem Wörterbuch viel schneller geworden

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

Heute sind wir stolz, Ihnen unsere neue Verbesserung von SubQuery, SubQuerys Wörterbuch-Indexing-Funktion, bekannt zu geben.

Beim SubQuery Dictionary dreht sich alles um die Beschleunigung Ihrer Projekte. Es verbessert die Indizierung der Leistung Ihres SubQuery Projekts, **manchmal bis zu 10x schneller.**

Bei der Indizierung von Kettendaten werden SubQuery Projekte verwendet, um jeden Block zu untersuchen. Die Polkadotskette ist groß, 130 GB unstrukturierter Daten über fast 6 Millionen Blöcke. Die Indexierung dauert viele Stunden, eine Zeit, auf die Sie nicht warten möchten – insbesondere beim Testen.

SubQuery Projekte haben nun die Möglichkeit, all dies zu überspringen, wir indizieren im Wesentlichen die Position aller Ereignisse innerhalb einer Kette.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Die Leistung wird am meisten verbessert, wenn die Daten nicht häufig vorkommen, sondern entlang der Kette verstreut sind, als ob die Daten selten sind, überspringt Dictionary mehr Blöcke, und daher ist der Einfluss auf die Leistung größer.

Der Dictionary Endpunkt kann in [Ihrer ‚project.yaml‘-Datei](https://doc.subquery.network/create/manifest.html) hinzugefügt oder alternativ [zur Laufzeit angegeben werden](https://doc.subquery.network/run/run.html#using-a-dictionary). Darüber hinaus können Sie diesen Endpunkt auch überschreiben, wenn Sie Ihr Projekt in [SubQuery-Projekten](https://project.subquery.network/) ausführen.

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

Lesen Sie mehr über das Wörterbuch in unserer [hilfreichen Dokumentation hier](https://doc.subquery.network/run/run.html#using-a-dictionary).

Wir glauben, dass SubQuery die beste verfügbare Datenindizierungsoption für jede Polkadot/Substrate-dApp ist, und diese neue Implementierung des SubQuery-Wörterbuchs ermöglicht es uns, unseren Service weiter zu verbessern, indem wir den Indexierungsprozess für Ihre SubQuery-Projekte beschleunigen.

Sie können es selbst in [SubQuery-Projekten](https://project.subquery.network/) ausprobieren oder die Wörterbücher selbst in [unserem Explorer](https://explorer.subquery.network/) ansehen. Um ein Wörterbuch in Ihrem existierenden Projekt verwenden zu können, muss Ihre [@subql/cli](https://www.npmjs.com/package/@subql/cli) Version mindestens 0.10.0 sein

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)