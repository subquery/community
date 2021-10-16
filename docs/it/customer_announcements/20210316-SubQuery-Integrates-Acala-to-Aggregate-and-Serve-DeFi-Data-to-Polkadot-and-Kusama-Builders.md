# SubQuery integra Acala per Aggregare e Servire i dati DeFi a Polkadot e Kusama Builders

![](https://miro.medium.com/max/1400/1*cg4kJs0WEcyPP73EAtHomA.png)

La settimana scorsa [SubQuery](https://www.subquery.network/) ha rilasciato la fase successiva del proprio progetto, [SubQuery Explorer](https://explorer.subquery.network/). Questa settimana, Acala e SubQuery hanno finalizzato un'integrazione per permettere agli utenti e agli sviluppatori di interrogare ed estrarre dei dati dall'hub DeFi di Acala per Polkadot nel giro di una manciata di minuti e senza alcun costo.

SubQuery rappresenta un livello di aggregazione dei dati che opererà tra la blockchain di livello 1 (Acala) e il livello DApp. La soluzione aggrega e organizza i dati di Acala e altre blockchain, fornendo dati ben strutturati che gli sviluppatori potranno utilizzare all'interno di una vasta gamma di progetti. Questo servizio permette agli sviluppatori di DApp di concentrarsi sul proprio caso d'uso principale e sulla componente front-end, senza dover perdere tempo nella creazione di un backend personalizzato per l'elaborazione dei dati.

Acala crede fermamente nel futuro multi-catena ed è intenta nella sua costruzione a lungo termine - riducendo la frammentazione della liquidità, aumentando la componibilità e permettendo a chiunque l'accessibilità DeFi. Acala è una blockchain specializzata e incentrata sulla finanza decentralizzata (DeFi), creando diverse primitive DeFi che sono diventate un hub e un'infrastruttura DeFi al servizio degli ecosistemi Polkadot e Kusama. La squadra ha creato una serie di prodotti tra cui una stablecoin multi-collateralizzata (aUSD — The Acala Dollar), un market maker automatizzato (AMM) DEX, un asset tokenizzato chiamato Liquid DOT (LDOT) e ha anche implementato una funzione di tipo bring-your-own-gas per permettere il pagamento delle commissioni sul gas in ogni tipo di attività supportata da esso come le stablecoin. La parachain di Acala ha in mente di svolgere il ruolo di hub DeFi per Polkadot e di piattaforma di atterraggio per aggregare delle risorse e delle liquidità da una serie di blockchain diverse.

Oggi, una volta che accederete a [SubQuery Explorer](https://explorer.subquery.network/) sarete accolti da un nuovo progetto Acala SubQuery. Questa SubQuery terrà dinamicamente traccia di tutti i dati estrinseci creati su Acala e mostrando rapidamente le statistiche aggregate derivate per quanto segue:

-   Dati storici sulle variazioni di liquidità (suddivisi per provider)
-   Dati storici su tutti gli asset swap a catena incrociata
-   Cronologia dei trasferimenti

![](https://miro.medium.com/max/1400/0*sXPljA1RE754fuDQ)

È possibile testare Acala SubQuery Graph utilizzando [Explorer](https://explorer.subquery.network/) senza implementare nulla nel codice. Inoltre, abbiamo documentato i tipi che è possibile specificare in ogni richiesta GraphQL durante l'analisi dei dati di Acala.

Qui sotto è riportato un semplice esempio di come un utente potrà visualizzare rapidamente e facilmente i precedenti 5 eventi di trasferimento utilizzando il token ACA sulla rete Acala Mandala. È possibile vedere che, per ordinare e recuperare questi dati su qualunque tipo di client, utilizziamo il semplice linguaggio GraphQL. Le DApp possono utilizzarlo per monitorare le posizioni di prestito, saltare alle aste, ecc. in modo da aiutare a liquidare i collaterali.

![](https://miro.medium.com/max/1400/0*zlxPf2tz8DVX95kY)

Ecco un esempio un po' più complesso, nel quale ispezioniamo un singolo account e recuperiamo tutti gli eventi di scambio di token effettuati da esso. Un portafoglio DApp potrebbe utilizzare questi dati per generare la panoramica dell'account del titolare e delle prestazioni del token, delle entrate derivanti dallo staking, dell'approvvigionamento di liquidità e delle spese sui prestiti.

![](https://miro.medium.com/max/1400/0*hdTbn41vDvIYuv3_)

[SubQuery Explorer](https://explorer.subquery.network/) è un servizio ospitato online in grado di fornire l'accesso ai progetti SubQuery pubblicati e realizzati da contributori provenienti da tutto il mondo e gestiti dalla squadra di SubQuery. La sua missione è quella di facilitare l'accesso ai dati della rete Polkadot fornendo servizi di infrastruttura così da aiutare gli sviluppatori a ottenere il meglio.

[SubQuery](https://www.subquery.network/) consente a ogni squadra Substrate/Polkadot di elaborare e interrogare i propri dati. Il progetto è ispirato dalla crescita dei protocolli di dati che servono il livello applicativo e il suo scopo è quello di aiutare i progetti basati su Polkadot/Substrate nella creazione di dApp sempre più efficienti permettendo a chiunque di trovare e consumare i dati in maniera affidabile e veloce. Oggi chiunque può interrogare ed estrarre i dati dalla rete Polkadot in pochi minuti e senza alcun costo.

[Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

[Acala](http://acala.network/) è l'hub finanziario e decentralizzato, nonché la stablecoin di Polkadot, che rende facile e veloce sia il suo utilizzo che la creazione di applicazioni finanziarie, migliorando l'efficienza del trading e facendo risparmiare tempo. La piattaforma offre una suite di primitive finanziarie: una stablecoin multi-collateralizzata supportata da asset cross-chain come Bitcoin, un derivato di staking senza fiducia e uno scambio decentralizzato per liberare liquidità e potenziare le innovazioni finanziarie. Acala è la piattaforma aperta, de facto, per le applicazioni finanziarie tramite l'utilizzo di contratti intelligenti o protocolli integrati con funzionalità cross-chain pronte all'uso e una solida sicurezza.

[Discord](https://discord.gg/vdbFVCH) | [Website](https://acala.network/) | [Twitter](https://twitter.com/AcalaNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [Acala Wiki](https://github.com/AcalaNetwork/Acala/wiki) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc)