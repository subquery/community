# La SubQuery pubblica roadmap tecnica

![](https://cdn-images-1.medium.com/max/800/1*Qcu5mFIs8eJhAXaMpWOlMQ.png)

**SubQuery annuncia le pietre miliari chiave tra cui la timeline TGE**

Oggi siamo lieti di presentare per la prima volta la nostra roadmap tecnica dettagliata. L'obiettivo di SubQuery è quello di essere il principale fornitore di dati nell'ecosistema Polkadot e il supporto che abbiamo ricevuto dalla community per aiutarci a realizzare questa visione è stato sorprendente. Dalla nostra istituzione formale alla fine del 2020 tramite un [Grant Web3](https://web3.foundation/), al rilascio della nostra prima versione open source a gennaio 2021 e alla [chiusura della nostra serie A a settembre](https://subquery.medium.com/series-a-1abed6c1c2af), vorremmo grazie per tutto il vostro supporto nel portarci a questa fase!

Mentre continuiamo a guadagnare slancio, è giunto il momento di condividere di più sui nostri piani per il futuro, inclusa la nostra tabella di marcia tecnica. Siamo entusiasti di come la prossima evoluzione di SubQuery porterà ancora più valore all'ecosistema Polkadot e fornirà maggiori opportunità alla nostra comunità di partecipare alla nostra crescita.

## Il nostro futuro

Mentre SubQuery offre già milioni di query di dati ogni giorno a [oltre 60 progetti su Polkadot & Kusama](https://project.subquery.network/), volevamo assicurarci che la nostra prossima fase di crescita fosse condotta in modo organizzato e controllato.

Per questo motivo, riteniamo fondamentale dimostrare e testare completamente la scalabilità della rete SubQuery attraverso un programma di testnet incentivato. Questo processo ci consentirà anche di creare una comunità di indicizzatori prima del lancio pubblico tramite un TGE a marzo 2022 e la nostra eventuale rete principale entro la fine del prossimo anno.

![](https://miro.medium.com/max/2400/1*I6mko5xumHAArzGePvEZiQ.jpeg)

Pertanto, i risultati chiave nel nostro flusso di lavoro possono essere suddivisi nelle seguenti principali pietre miliari.

## Dove siamo ora — Metà del quarto trimestre 2021

### Supporto EVM per parachain

Presto rilasceremo [il nostro supporto beta per le implementazioni Polkadot della Ethereum Virtual Machine (EVM)](https://medium.com/@subquery/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff). Ciò consente agli sviluppatori di Polkadot ed Ethereum di integrare perfettamente i dati di Substrate ed EVM in un unico posto e di interrogare questa singola origine dati utilizzando GraphQL.

SubQuery introdurrà filtri più avanzati rispetto ad altri indicizzatori, consentendo il filtraggio di transazioni non contrattuali, mittenti di transazioni, contratti e argomenti di log indicizzati, in modo che gli sviluppatori possano creare un'ampia varietà di progetti che soddisfano le loro specifiche esigenze di dati.

### SubQuery Academy

L'Academy è progettata per potenziare e potenziare gli sviluppatori nell'ecosistema SubQuery fornendo loro un'istruzione modulare. [Il nostro primo corso all'Accademia è il _Corso Hero_](https://doc.subquery.network/academy/herocourse/) ed è stato lanciato venerdì 22 ottobre 2021.

All'interno di ogni modulo del _Corso Hero_, ci sono diverse lezioni da 5 a 10 minuti che vengono fornite da un video registrato. Il contenuto video è accompagnato da tutorial scritti, diapositive, cartelle di lavoro e collegamenti al repository di codice GitHub finito.

Il corso è progettato per far sì che uno sviluppatore non sappia nulla di SubQuery a diventare un esperto nella creazione di un'origine dati SubQuery per la sua nuova applicazione blockchain.

Nei prossimi mesi distribuiremo più istruzione per la community, con rilasci settimanali di nuovi contenuti di SubQuery _Corso Hero_ e più corsi nelle prossime settimane.

### Prova di indicizzazione

La prova dell'indicizzazione ci consente di garantire che due diversi indicizzatori che lavorano con lo stesso progetto SubQuery abbiano indicizzato esattamente gli stessi dati. È un componente critico necessario per lo sviluppo di una rete SubQuery decentralizzata. Stiamo usando un concetto chiamato Merkle Mountain Ranges per confermarlo e garantirlo, tieni d'occhio un futuro post sul blog che lo esplorerà più a fondo.

### Premium Enterprise Service

Abbiamo alcuni grandi clienti come Karura, Kodadot e Fearless Wallet che eseguono tutte applicazioni di produzione in SubQuery. Questi team richiedono un servizio migliore e livelli più elevati di affidabilità.

Stiamo raccogliendo la sfida, con Service Level Agreement, livelli di servizio aziendali e altri strumenti di cui i nostri clienti più grandi hanno bisogno per gestire le proprie attività e ricevere le migliori prestazioni possibili da SubQuery per le loro applicazioni.

Si prega di mettersi in contatto con il team se si desidera discutere della ricezione di servizi e supporto a livello aziendale da SubQuery.

## Traguardo 1 — Fine del quarto trimestre 2021

### Programma di creazione/sovvenzioni di sottointerrogazioni

Questo programma di sovvenzioni è progettato per facilitare e catalizzare l'innovazione con Polkadot e SubQuery e per creare la prossima generazione di dApp per alimentare la rivoluzione web3. Sosterrà nuovi progetti con sovvenzioni, supporto tecnico, consulenza di marketing e sviluppo aziendale di SubQuery e altri.

Siamo entusiasti del potenziale di tutto questo e presto pubblicheremo ulteriori informazioni.

### Coordinatore e implementazioni SDK client

Miglioreremo il nostro SubQuery SDK di base e aggiungeremo componenti aggiuntivi per un coordinatore SubQuery e un client.

Il coordinatore dell'indicizzatore verrà distribuito dagli indicizzatori per esporre la rete all'indicizzatore e consentire all'indicizzatore di registrarsi con la rete SubQuery e pubblicizzare i dati che sta rendendo disponibili

L'SDK client sarà per il ruolo di consumatore e consentirà loro di trovare indicizzatori e gestire l'intera transazione di cui un consumatore avrà bisogno per recuperare e pagare i dati.

### MVP interno del contratto di rete SQT

La nostra prima versione della rete SubQuery sarà all'interno di un contratto intelligente, distribuito su una parachain Polkadot leader. L'MVP interno ci consentirà di iniziare a testare tutto internamente qui ed è un'enorme pietra miliare da completare per noi.

### EU Cluster

I nostri clienti richiedono supporto per più cluster per i dati SubQuery in tutto il mondo. Più cluster significano maggiore resilienza e dati di SubQuery ospitati più vicini a dove si trovano i clienti. Un nuovo cluster europeo significa richieste più rapide per i consumatori, prestazioni senza rivali per gli sviluppatori di dApp e maggiore resilienza per la rete SubQuery.

### Miglioramenti a subql init

Il comando _subql init_ è familiare a chiunque abbia creato un progetto SubQuery; rappresenta una tela bianca — opportunità illimitate. Siamo consapevoli che possiamo fare di meglio per aiutare gli altri a iniziare, piuttosto che una tela bianca gli sviluppatori vogliono un'impalcatura vuota, dove tutto il codice della caldaia è già scritto.

Questo elemento della roadmap rappresenta il lavoro che vogliamo fare per consentire agli sviluppatori di iniziare a costruire su qualsiasi parachain senza doversi preoccupare di endpoint, dizionari e tipi — tutto risparmiando tempo per gli sviluppatori e aiutando gli altri a iniziare.

## Traguardo 2 — Metà del primo trimestre 2022

### Lancio pubblico testnet

A seguito dell'MVP interno del contratto SQT Network, inviteremo un piccolo gruppo di partecipanti a unirsi a noi mentre iniziamo a testare la rete SubQuery. Per avviare, abbiamo bisogno di completare un gran numero di attività e una quantità ancora maggiore di documentazione!

All'inizio del 2022 condivideremo maggiori informazioni su questo processo e su come candidarti per partecipare.

### Indicizzazione puntuale

Immagina di essere in grado di scoprire lo stato della blockchain in un determinato momento: che aspetto aveva esattamente un progetto SubQuery al 5 milionesimo blocco? Questo è esattamente ciò che fornirà questa nuova funzionalità.

### Contratto di rete SQT v1 e audit del codice esterno

Tutte le reti importanti richiedono un audit del codice completo da parte di un partner esterno per garantire che il codice della rete sia sicuro e scalabile. SubQuery non è diverso, quindi lavoreremo con partner chiave per un audit completo del codice qui e continueremo anche a ricevere audit del codice per i nostri contratti intelligenti in futuro.

### Test di micropagamenti interni

Questa è una caratteristica fondamentale per noi. Lavoreremo molto all'interno dell'ecosistema Polkadot per gestire i micropagamenti all'interno di SubQuery. Il vantaggio di Polkadot sono le minime commissioni di transazione rispetto ad altre reti come Ethereum, il che significa che i micropagamenti sono molto più rilevanti. Questo verrà implementato nella nostra rete di test incentivata dopo aver eseguito test interni approfonditi.

### SubQuery Network Explorer e App

Stiamo costruendo un esploratore e altre applicazioni per consentire ai partecipanti alla rete di sottointerrogazione di esplorare e trovare dati all'interno della rete di sottointerrogazione. I consumatori lo useranno anche per navigare nella libreria delle origini dati supportate, nonché i deleganti per analizzare le prestazioni degli indicizzatori per decidere come delegare i loro token SQT.

### Monitoraggio della salute delle imprese

A seguito del nostro livello di servizio SubQuery Enterprise, puoi anche aspettarti che una grande quantità di monitoraggio dello stato e altri strumenti di analisi delle prestazioni siano messi a disposizione dei clienti.

## Traguardo 3 — Fine del 1° trimestre 2022

### Evento di generazione di token SQT

Dopo una fase di test di rete di successo, ci aspettiamo di lanciare il token SubQuery con un partner di parachain Polkadot. Condivideremo maggiori informazioni sulla nostra tokenomica con la community nelle prossime settimane.

### Lancio di testnet incentivato pubblico con micropagamenti

Questa è la fase finale della nostra rete di test. Rilasceremo tutto alla nostra rete di test e ci aspettiamo che i partecipanti lo spingano al limite. Ciò include test di scala e di carico, messa a punto dei nostri modelli economici e coefficienti, test della nostra documentazione e dei processi di onboarding e assicurarci di poter effettuare transazioni con un precursore di SQT al suo interno.

Ci aspettiamo di premiare i partecipanti della nostra rete di test, quelli che completano determinate missioni o attività e quelli che agiscono come membri diversi della rete di test.

### Informazioni e reportistica sul traffico dati

Gestiamo milioni di richieste di dati ai progetti SubQuery ogni giorno. La maggior parte dei nostri clienti non dispone di analisi nelle proprie dApp per la privacy degli utenti, ma hanno comunque bisogno di sapere come funzionano le loro dApp, quindi lo miglioreremo.

### Routing intelligente scalabile

Abbiamo l'obiettivo di un miliardo di richieste giornaliere di SubQuery al nostro servizio ospitato, ecco perché introdurremo un servizio scalabile a livello globale con più servizi ospitati SubQuery in esecuzione.

È una funzionalità nuova e in continuo miglioramento che instrada automaticamente le richieste al nodo disponibile più vicino. Inoltre, ci consente di reindirizzare immediatamente tutte le richieste a una zona di sottointerrogazione di backup, fornendoci un sistema a tolleranza di errore in caso di interruzione regionale.

In futuro significa che creeremo servizi ospitati da SubQuery sempre più piccoli posizionati tatticamente più vicino ai nostri utenti.

## Traguardo 4 — metà del secondo trimestre 2022

### Lancio della SubQuery Foundation

Nella nostra mossa per creare una rete di subquery decentralizzata, stabiliremo una Fondazione SubQuery per amministrare la futura governance e crescita dell'ecosistema. La proprietà della rete SubQuery rientrerà inizialmente nella fondazione SubQuery.

### Finalizza la ricerca per altre chains Layer-1

Anche se la nostra casa sarà sempre Polkadot, stiamo esplorando il supporto di vari altri blockchain Layer-1 con le nostre capacità di indicizzazione.

### Programma di estrazione di liquidità

Al fine di aumentare la liquidità del token SQT, creeremo un programma di mining di liquidità con uno scambio decentralizzato (DEX). Ciò consentirà ai possessori di token di generare ritorni sul proprio investimento.

## Traguardo 5 — Fine del secondo trimestre 2022

### Lancio Mainnet 🚀

Dopo aver completato il test della rete SubQuery, verrà avviata la prima mainnet della rete SubQuery. È qui che tutto inizia davvero. Inizialmente, analizzeremo e ricompenseremo i partecipanti alla rete di test, quindi sarà completamente aperta a tutti nella comunità.

### Lancio di un exchange centralizzato

Al fine di promuovere una maggiore adozione di SQT, prevediamo di lanciare il token su uno, se non più, CEX leader durante questo periodo, nonché su molti altri DEX.

## Traguardo 6 — Piani a lungo termine

### Lancia della nostra Parachain

Sebbene inizialmente prevediamo di collaborare con una delle migliori parachain Polkadot per ottenere il rilascio e la scalabilità di SubQuery Network più rapidamente, a lungo termine SubQuery intende anche lanciarsi sulla propria parachain e integrarsi ancora di più nell'ecosistema.

Questa paracatena di proprietà ci consentirà di innovare ulteriormente in strumenti che possono aiutare gli sviluppatori a costruire più velocemente il futuro del web3. Vogliamo puntare a uno slot parachain una volta che avremo una comprovata esperienza alle spalle e i dati, la community e il token per supportarlo.

### SubQuery Foundation si sposta in un DAO

Questo è molto lontano, ma è sempre il nostro sogno che SubQuery alla fine diventi un DAO di proprietà della comunità. Abbiamo detto molte volte che la community gioca un ruolo enorme in SubQuery, tutto ciò che facciamo è per i nostri clienti — diventare un DAO è l'incarnazione di tale obiettivo.

Detto questo, questo è molto lontano e sarà fatto solo quando saremo assolutamente sicuri del successo e del futuro di SubQuery con la comunità.

## Informazioni su SubQuery

[SubQuery](https://subquery.network) è un'aggregazione di dati decentralizzata, indicizzazione e & livello di query tra blockchain di livello 1 e applicazioni decentralizzate. Il protocollo astrae le idiosincrasie dei dati blockchain con l'SDK SubQuery, consentendo agli sviluppatori di concentrarsi sull'implementazione del loro prodotto principale senza sprecare inutilmente sforzi in tecnologie di back-end personalizzate.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
