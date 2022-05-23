# Dentro i Crowdloans di Polkadot (parte 2)

![](https://miro.medium.com/max/1400/0*MqQhXJbmnfMSqf-8)

Polkadot ha offerto alla sua comunità un'altra emozionante gara per l'asta del terzo slot di parachain. Di recente abbiamo assistito alla battaglia tra Parallel Finance e Astar per il terzo slot, e alla fine Astar è riuscita ad emergere vittoriosa. Oggi esploreremo un po' più a fondo quello che è successo nella terza asta, analizzando i dati che stanno dietro a ogni singolo contributo.

SubQuery è il principale servizio di indicizzazione dei dati di Polkadot e nell'ultima settimana ha alimentato milioni di richieste giornaliere alla maggior parte dei cruscotti dei crowdloan, delle app di contribuzione e dei siti web di analisi. Team come [SubVis](https://www.subvis.io/), [Parallel Finance](https://parallel.fi/) e [DotMarketCap](https://dotmarketcap.com/) si affidano a SubQuery per fornire dati in tempo reale sui crowdloan e altri dati sulla catena direttamente ai loro siti web e alle loro app.

Innanzitutto, iniziamo con alcuni dati rapidi di alto livello. Come si può vedere qui sotto, Astar ha avuto sia più contributi che collaboratori. È importante notare che Parallel ha raccolto un importo significativo attraverso il suo fondo proxy, quindi l'importo dei contributori è fuorviante perché il conto proxy nasconde questa informazione.

Entrambi hanno ricevuto un contributo mediano di 10 DOT (367,70 dollari), ma Astar è stata in grado di attirare il contributo singolo più grande con 2.005.295 DOT (73,7 milioni di dollari). Alla fine, durante la terza asta sono stati versati in totale quasi 20 milioni di DOT (735,4 milioni di dollari). Non sorprende che questa cifra sia inferiore a quella impegnata nelle prime aste, ma è promettente vedere che gli importi delle aste hanno ancora un valore significativo.

![](https://miro.medium.com/max/1920/1*cHMt10lANsqtkLYHCv6iWg.png) Come si può vedere nel grafico sottostante, il numero di contributi è stato relativamente costante, con un balzo simultaneo del tasso di contribuzione il 17 novembre fino a oltre 2.000 contributi in un periodo di 4 ore. Analogamente alla battaglia [Moonbeam e Acala](./20211124-polkadot-crowdloans.md), quest'asta ha avuto stili di partecipazione significativamente diversi, pur mantenendo una quantità di contributi relativamente uguale. Parallel Finance ha avuto 20.000 contributi in meno per il suo crowdloan rispetto ad Astar.

![](https://miro.medium.com/max/1920/0*QLdNkyaQBBj3L9Eu)

Ma non è il numero di contributi che conta, bensì il loro valore. Come si può vedere nel grafico sottostante, l'asta è stata incredibilmente combattuta, con un vantaggio che è passato da una squadra all'altra nel corso dell'asta.

![](https://miro.medium.com/max/1920/0*AGGfB2oBSwoplGhv)

Come si può vedere nei grafici seguenti, ci sono stati due eventi da tenere d'occhio: il primo è stato un enorme picco di contributi per Astar il 12 novembre. Questo ha dato loro un vantaggio costante fino al 24 novembre, quando Parallel Finance ha guadagnato quasi 2,5 milioni di DOT (91 milioni di dollari).

![](https://miro.medium.com/max/1920/0*UK4Drn6LXcjebF_V)

Il primo evento si è verificato il 12 novembre alle 2:26 UTC, quando un conto collegato a Binance ha depositato in rapida successione 2.005.295 DOT (73,5 milioni di dollari) ad Astar e 1.026.763 DOT (37,9 milioni di dollari) a Parallel Finance. È probabile che Binance fornisca i contributi che raccoglie dalla propria comunità a ogni crowdloan.

Il secondo evento è stato un po' più strano, e si è trattato piuttosto di 25 eventi separati: in 11 minuti, il veicolo proxy Crowdloan di Parallel ha effettuato 25 contributi identici di 98.982 DOT (3.639.568,14 dollari USA) ciascuno a Parallel per un totale di 2.474.550 DOT (90.989.203,50 dollari USA). Non è chiaro perché questi depositi siano stati effettuati con importi di DOT inferiori, potenzialmente il veicolo proxy Crowdloan di Parallel è stato impostato per contribuire ogni volta con un importo massimo di questo valore.

![](https://miro.medium.com/max/1920/0*ZErTVoVAvSJvaIsL)

Astar e Parallel Finance hanno condotto un'asta molto competitiva, in cui Astar è stata selezionata come vincitrice al blocco [7927110](https://polkadot.subscan.io/block/7927110), con un vantaggio di soli 120.000 DOT. Se fosse stato selezionato un altro blocco casuale prima o dopo, il risultato sarebbe stato molto diverso.

Chi sta contribuendo? Innanzitutto ci sono due enormi balene che sono responsabili del 41% di tutti i contributi e del 69,34% di tutto il valore (13.756.262 DOT). Questi due conti rappresentano il veicolo di delega Crowdloan di Parallel Finance e Binance. Anche Kraken e il programma SALP di Bifrost erano rappresentati tra i primi 6 contributori. Il veicolo proxy Crowdloan di Parallel è stato particolarmente presente nei nostri risultati con oltre 9,3 milioni di DOT conferiti (344,6 milioni di dollari) che rappresentano oltre il 47% di tutti i contributi.

Sfortunatamente, questa percentuale elevata rende difficile il confronto delle dimensioni medie dei contributi, poiché questo proxy oscura eccessivamente i dati sui contributi. In futuro, potremmo anche scavare a fondo nei dati di Parallel e utilizzarli per determinare esattamente quanti di questi contributi provengano dalle balene rispetto ai singoli investitori di piccole capitali.

Avere due aste estremamente competitive suggerisce un ecosistema sano ed è incoraggiante vedere l'impegno che la comunità ha dimostrato. Noi di SubQuery siamo entusiasti di continuare a lavorare al fianco dei migliori progetti Polkadot e non vediamo l'ora di vedere cosa ci riserverà il futuro.

---

## La rete SubQuery

SubQuery è il principale fornitore di dati di Polkadot, che supporta un livello di indicizzazione & interrogazione tra le blockchain Layer-1 (Polkadot) e le applicazioni decentralizzate. Il servizio dati di SubQuery è utilizzato dalla maggior parte dei siti web di crowdloan e aste paracadutali di Polkadot e Kusama.

Il protocollo di SubQuery astrae dalle idiosincrasie dei dati della blockchain con l'SDK di SubQuery, consentendo agli sviluppatori di concentrarsi sull'implementazione del loro prodotto principale senza sprecare inutilmente gli sforzi su tecnologie backend personalizzate.

​​​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Appendice

Tutti i prezzi in USD sono quotati al prezzo di chiusura della terza asta = 36,77 USD

Tutti i dati si riferiscono all'inizio dei Crowdloan di Polkadot fino al completamento della terza asta il 3 dicembre alle 1.43AM UTC (blocco 7.957.704).

Siti Crowdloan esclusi

- [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
- [Binance Crowdloan](https://www.binance.com/en/dotslot)
- [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
- [Kraken Crowdloan](https://www.kraken.com/learn/parachain-auctions)
- [https://pos.dog/](https://pos.dog/)
- [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
