# February Recap

![](https://miro.medium.com/max/1400/1*T3DLiAKSIy-AjRia_JJjow.png)

February flew by for the team at SubQuery as we have been busy on all fronts preparing for our TGE and servicing all of our existing customers including the leading teams in Polkadot.

We have a lot of exciting work going on that we can't wait to share in the weeks and months ahead!

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

## General Customer Announcements

### SubQuery Data Powers Nova Wallet --- a next-gen mobile wallet for the Polkadot & Kusama ecosystem

![](https://miro.medium.com/max/1400/1*NkYmEpYLpZYFRkANrvpwPw.png)

Many customers, including Nova, rely on SubQuery to provide mission critical data to their production apps. These are huge applications that the Polkadot community use on a daily basis and must be online at all times. Nova know that they can trust SubQuery to provide reliable and scalable services to their applications though our [enterprise level features](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html) in our [managed service](https://project.subquery.network/). Nova are a key user of SubQuery's intelligent routing which dynamically routes a user's request to the nearest SubQuery cluster resulting in higher reliability and superior performance than any other option on the market.

[Read more here](../customer_announcements/20220210-nova-wallet.md)

### SubQuery to help power Parami Protocol's Web 3 advertising technology

[Parami Protocol](https://parami.io/) is developing an innovative new technology for a user-centric, tokenised advertising economy: Ad 3.0.

> _"Parami's vision is to build a user-centric advertising economy for web3 and in order to make this a reality, we turned to SubQuery as our trusted data partner. SubQuery provides the backbone of our service by delivering the query part of our Command and Query Responsibility Segregation (CQRS) pattern to update our core database. Parami takes advantage of SubQuery's superior indexing speed to track the price of NFT fragments and to build a secondary index of on-chain data all in one sentence. We are looking forward to building AD 3.0 for Web 3.0 leveraging SubQuery's innovative technology."_

~ Dorian the Co-Founder of Parami Protocol

[Read more here](../customer_announcements/20220222-parami.md)

## Other things you might have missed

- We had an AMA with [Talisman](https://talisman.xyz/) and a Polish Q&A on our [Discord server](https://discord.com/channels/796198414798028831/796198414798028834)
- Watch the recording of our [February community call](https://www.crowdcast.io/e/subquery-sessions-february) on Crowdcast
- New grants with Phala in our [SubQuery Grants Programme](https://subquery.network/grants)

P.S.

Remember to join our [Discord](https://discord.com/invite/subquery) and [our social channels](https://linktr.ee/subquerynetwork) to stay updated on our latest news and announcements.

The SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
