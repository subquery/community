# Februar-Rückblick

![](https://miro.medium.com/max/1400/1*T3DLiAKSIy-AjRia_JJjow.png)

Der Februar verging für das Team von SubQuery wie im Flug, da wir an allen Fronten damit beschäftigt waren, unseren TGE vorzubereiten und alle unsere bestehenden Kunden zu bedienen, einschließlich der führenden Teams in Polkadot.

Wir haben eine Menge aufregender Arbeit am Laufen, die wir kaum erwarten können, in den kommenden Wochen und Monaten zu teilen!

## Gemeinde

Diesen Monat haben wir endlich 30.000 organische Twitter-Follower überschritten und unser Discord ist auf über 15.000 aktive Community-Mitglieder angewachsen, die sich gegenseitig helfen. Es reicht nicht aus, ein Tool oder eine Anwendung in web3 zu entwickeln, man muss auch eine sich selbst erhaltende Community aufbauen und daran arbeiten wir bei SubQuery hart!

### SubQuery gibt die erste Kohorte von SubQuery-Fördermittelempfängern bekannt

Vier Teams wurden für die erste Kohorte von SubQuery-Zuschussempfängern überhaupt ausgewählt. Diese Teams sind [Alphabit](https://www.polkadata.xyz/), [Zoombies](https://zoombies.world/), [Dapplooker](https://dapplooker.com/) und [Dotsama](http://dotsama.ai/). Das [USD 500.000 SubQuery Grants](https://subquery.network/grants) Programm startete im Dezember 2021 mit der Vision, Blockchain-Entwicklern, Community-Mitgliedern und weiteren Teilnehmern des Ökosystems Möglichkeiten zu bieten, innovative oder vielversprechende Web3-Anwendungen zu entwickeln.

![](https://miro.medium.com/max/1400/1*tBnWK4svpGbGuP3mCXyGDg.png)

Alphabit bemüht sich, den unabhängigen Anleger zu unterstützen, indem es ihm die Möglichkeit bietet, die Portfolios und Investitionen von Fonds und großen Händlern oder "Walen" zu verfolgen und zu analysieren. _"Die geschäftliche Beratung und technische Unterstützung von SubQuery hat unsere Erwartungen an die Unterstützung, die wir als kleines Analyse-Startup erhalten konnten, völlig übertroffen" --- Michael Anderson, Business Development & Strategic Partnerships (Alphabit)_

![](https://miro.medium.com/max/1400/1*TpHBDhA7WqNGTOxz9LpifQ.png)

Zoombies unterbreitete einen Vorschlag in der Hoffnung, mit SubQuery ihr Ziel zu beschleunigen, den Wert der wachsenden Welt der Sammelspiel-Token (P2E) zu vertiefen. Ihr Projekt greift auf die komplette Historie vergangener Ereignisdaten innerhalb eines Spiels zu, um aussagekräftige Ansichten zu erstellen und das Spielerlebnis zu bereichern. _"Sub-Query Grants Programm wurde ein sehr klarer schrittweiser Belohnungsprozess" --- Ryan Preis, CEO (Zoombies)_

![](https://miro.medium.com/max/1400/1*4rPD0g-pC3MOU5M5vAtS4w.png)

Dapplooker zielt darauf ab, Polkadot Projekte mit schönen und einfach zu erstellenden Analysewerkzeugen wie Explorern, Diagrammen und Dashboards auszustatten. Diese wertvollen Metriken werden auf der Grundlage von SubQuery Projekten erstellt, um die erforderlichen Daten abzurufen und sie dem Publikum in einem intuitiven und ästhetischen Format zu präsentieren.

![](https://miro.medium.com/max/1400/1*kC8QYVvlUZwUfgXTBFQbgg.png)

Das Dotsama-Team ist auch entschlossen, dem durchschnittlichen Investor im Ökosystem Polkadot / Kuala reiche Einblicke zu geben. mit dem Ziel, ein One-Stop-Analyse-Shop mit Werkzeugen zur Identifizierung früherer Anlagetrends und -chancen zu sein. "_Durch die Teilnahme am SubQuery Grants Programm wollen wir nicht nur technische und strategische Beratung erhalten, sondern auch Teil dieser Gemeinschaft werden und helfen, die Bewegung zu beschleunigen." --- Sudarshan Acharya, Gründer (Dotsama)_

Zusätzlich zu allgemeinen Zuschüssen wie denen, die unserer ersten Kohorte verliehen wurden, gibt es auch laufende [technische Bounties in Partnerschaft mit führenden Fallschirmteams in Polkadot](../blogs/20220127-grants-bounties.md) wie Moonbeam, Acala, Astar und Bifrost auf [Unterabfrageseite](https://subquery.network/grants)

## SubQuery-Netzwerk

### SubQuery hat unser aktualisiertes Whitepaper veröffentlicht

[Das SubQuery-Whitepaper](https://static.subquery.network/whitepaper.pdf) ist ein Dokument, das unseren strategischen Rahmen für das dezentralisierte SubQuery-Netzwerk und ihren SQT-Token umreißt. Seit der ursprünglichen Veröffentlichung im Juni 2021 haben wir ein erhebliches Wachstum unseres Kundenstamms und unserer Community erlebt und große Fortschritte beim Aufbau des SubQuery Network gemacht. Diese Quellen haben uns zu Verbesserungen und Innovationen inspiriert, und das gipfelt in der neuesten Version unseres [Whitepapers](https://static.subquery.network/whitepaper.pdf).

Das [aktualisierte Whitepaper](https://static.subquery.network/whitepaper.pdf) hält an der Überzeugung von SubQuery fest, dass die Datendienste von morgen mehrstufig, einfach und flexibel sein müssen. Die neue Version geht detailliert darauf ein, wie das SubQuery-Netzwerk diese Überlegungen in das Token-Wirtschaftsdesign einbezieht und gleichzeitig Power-Usern die Ausführung von Diensten auf Unternehmensebene ermöglicht.

Das Whitepaper enthält wichtige neue Informationen zu den innovativen Zahlungsmodellen von SubQuery, die allen Teilnehmern verschiedene flexible Möglichkeiten bieten, mit dem SubQuery Token (SQT) Transaktionen durchzuführen.

![](https://miro.medium.com/max/1400/1*EhLefs3-lb47y2LC4Z6jWA.png)

[Lesen Sie hier mehr](../blogs/20220216-whitepaper-update.md)

## Kernproduktentwicklung

### Dynamische Datenquellen

Dies ist eine deutliche Verbesserung für die schnell wachsende Zahl von SubQueries EVM-Kunden. SubQuery ist das einzige Datenindizierungstool, das die Indizierung von sowohl Substrat- als auch EVM-Daten von Polkadot-Parachains an einem einzigen Ort ermöglicht.

In bestimmten Situationen kennen Sie die Parameter für eine Datenquelle nicht, wenn das SubQuery-Projekt startet, zum Beispiel wissen Sie in einem DEX nicht, welche neuen Handelspaare aktiviert werden, wenn Sie Ihr SubQuery-Projekt schreiben. Die [Unterstützung von SubQuery für dynamische Datenquellen](https://university.subquery.network/build/dynamicdatasources.html) ermöglicht es Entwicklern, neue Datenquellen aus neuen intelligenten Verträgen dynamisch zu erstellen, indem Vorlagen verwendet werden, um die Indizierung neuer Verträge zu automatisieren.

[Lesen Sie hier mehr](https://university.subquery.network/build/dynamicdatasources.html)

## Allgemeine Kundenmitteilungen

### SubQuery Data Powers Nova Wallet – eine mobile Geldbörse der nächsten Generation für Polkadot & Kusama-Ökosystem

![](https://miro.medium.com/max/1400/1*NkYmEpYLpZYFRkANrvpwPw.png)

Viele Kunden, einschließlich Nova, verlassen sich auf SubQuery, um geschäftskritische Daten für ihre Produktionsanwendungen bereitzustellen. Dies sind riesige Anwendungen, die die Polkadot-Community täglich nutzt und die jederzeit online sein müssen. Nova weiß, dass sie darauf vertrauen können, dass SubQuery zuverlässige und skalierbare Dienste für ihre Anwendungen durch unsere [Funktionen auf Unternehmensebene](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html) in unserem [verwalteten Dienst](https://project.subquery.network/) bereitstellt. Nova ist ein Schlüsselnutzer des intelligenten Routings von SubQuery, das die Anfrage eines Benutzers dynamisch an das nächste SubQuery-Cluster weiterleitet, was zu einer höheren Zuverlässigkeit und überlegenen Leistung als jede andere Option auf dem Markt führt.

[Lesen Sie hier mehr](../customer_announcements/20220210-nova-wallet.md)

### SubQuery zur Unterstützung der Parami Protocol Web3-Werbetechnologie

[Parami Protocol](https://parami.io/) entwickelt eine innovative neue Technologie für eine nutzerzentrierte, tokenisierte Werbewirtschaft: Ad 3.0.

> _„Paramis Vision ist es, eine benutzerzentrierte Werbewirtschaft für Web3 aufzubauen, und um dies Wirklichkeit werden zu lassen, haben wir uns an SubQuery als unseren vertrauenswürdigen Datenpartner gewandt. SubQuery stellt das Rückgrat unseres Dienstes dar, indem es den Abfrageteil unseres CQRS-Musters (Command and Query Responsibility Segregation) bereitstellt, um unsere Kerndatenbank zu aktualisieren. Parami nutzt die überlegene Indizierungsgeschwindigkeit von SubQuery, um den Preis von NFT-Fragmenten zu verfolgen und einen sekundären Index von On-Chain-Daten in einem Satz zu erstellen. Wir freuen uns darauf, AD 3.0 für Web 3.0 zu entwickeln und dabei die innovative Technologie von SubQuery zu nutzen."_

~ Dorian, der Mitbegründer des Parami-Protokolls

[Lesen Sie hier mehr](../customer_announcements/20220222-parami.md)

## Andere Dinge, die Sie vielleicht übersehen haben

- Wir hatten eine AMA mit [Talisman](https://talisman.xyz/) und ein polnisches Q&A auf unserem [Discord-Server](https://discord.com/channels/796198414798028831/796198414798028834)
- Sehen Sie sich die Aufzeichnung unseres [Community-Calls vom Februar](https://www.crowdcast.io/e/subquery-sessions-february) auf Crowdcast an
- Neue Stipendien mit Phala in unserem [SubQuery-Stipendienprogramm](https://subquery.network/grants)

P.S.

Denken Sie daran, unserem [Discord](https://discord.com/invite/subquery) und [unseren sozialen Kanälen](https://linktr.ee/subquerynetwork) beizutreten, um über unsere neuesten Nachrichten und Ankündigungen auf dem Laufenden zu bleiben.

SubQuery-Team

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
