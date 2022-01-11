# La SubQuery pubblica la roadmap tecnica

![](https://cdn-images-1.medium.com/max/800/1*Qcu5mFIs8eJhAXaMpWOlMQ.png)

**SubQuery annuncia le pietre miliari chiave tra cui la timeline TGE**

Oggi siamo lieti di presentare per la prima volta la nostra roadmap tecnica dettagliata. L'obiettivo di SubQuery è quello di essere il principale fornitore di dati nell'ecosistema Polkadot e il supporto che abbiamo ricevuto dalla community per aiutarci a realizzare questa visione è stato sorprendente. Dalla nostra istituzione formale alla fine del 2020 tramite un [Web3 Grant](https://web3.foundation/), al rilascio della nostra prima versione open source a gennaio 2021 e alla [chiusura della nostra serie A a settembre](https://subquery.medium.com/series-a-1abed6c1c2af), vorremmo grazie per tutto il vostro supporto nel portarci a questa fase!

Mentre continuiamo a guadagnare slancio, è giunto il momento di condividere di più sui nostri piani per il futuro, inclusa la nostra tabella di marcia tecnica. Siamo entusiasti di come la prossima evoluzione di SubQuery porterà ancora più valore all'ecosistema Polkadot e fornirà maggiori opportunità alla nostra comunità di partecipare alla nostra crescita.

## Il nostro futuro

Mentre SubQuery offre già milioni di query di dati ogni giorno a [oltre 60 progetti su Polkadot & Kusama](https://project.subquery.network/), volevamo assicurarci che la nostra prossima fase di crescita fosse condotta in modo organizzato e controllato.

Per questo motivo, riteniamo fondamentale dimostrare e testare completamente la scalabilità della rete SubQuery attraverso un programma di testnet incentivato. Questo processo ci consentirà anche di creare una comunità di indicizzatori prima del lancio pubblico tramite un TGE a marzo 2022 e la nostra eventuale rete principale entro la fine del prossimo anno.

![](https://miro.medium.com/max/2400/1*I6mko5xumHAArzGePvEZiQ.jpeg)

Pertanto, i risultati chiave nel nostro flusso di lavoro possono essere suddivisi nelle seguenti principali pietre miliari.

## Dove siamo ora — Metà del quarto trimestre 2021

### Supporto EVM per parachains

Presto rilasceremo [il nostro supporto beta per le implementazioni Polkadot di Ethereum Virtual Machine (EVM)](https://medium.com/@subquery/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff). Ciò consente agli sviluppatori di Polkadot ed Ethereum di integrare perfettamente i dati di Substrate ed EVM in un unico posto e di interrogare questa singola origine dati utilizzando GraphQL.

SubQuery introdurrà filtri più avanzati rispetto ad altri indicizzatori, consentendo il filtraggio di transazioni non contrattuali, mittenti di transazioni, contratti e argomenti di log indicizzati, in modo che gli sviluppatori possano creare un'ampia varietà di progetti che soddisfano le loro specifiche esigenze di dati.

### SubQuery Academy

L'Academy è progettata per potenziare e potenziare gli sviluppatori nell'ecosistema SubQuery fornendo loro un'istruzione modulare. [Il nostro primo corso all'Accademia è il _Corso Eroe_](https://doc.subquery.network/academy/herocourse/) ed è stato lanciato venerdì 22 ottobre 2021.

All'interno di ogni modulo del _Corso Hero_, ci sono diverse lezioni da 5 a 10 minuti che vengono fornite da un video registrato. Il contenuto video è accompagnato da tutorial scritti, diapositive, cartelle di lavoro e collegamenti al repository di codice GitHub finito.

Il corso è progettato per far sì che uno sviluppatore non sappia nulla di SubQuery a diventare un esperto nella creazione di un'origine dati SubQuery per la sua nuova applicazione blockchain.

Nei prossimi mesi distribuiremo più istruzione per la community, con rilasci settimanali di nuovi contenuti di SubQuery _Corso Hero_ e più corsi nelle prossime settimane.

### Prova di indicizzazione

La prova dell'indicizzazione ci consente di garantire che due diversi indicizzatori che lavorano con lo stesso progetto SubQuery abbiano indicizzato esattamente gli stessi dati. È un componente critico necessario per lo sviluppo di una rete SubQuery decentralizzata. Stiamo usando un concetto chiamato Merkle Mountain Ranges per confermarlo e garantirlo, tieni d'occhio un futuro post sul blog che lo esplorerà più a fondo.

### Premium Enterprise Service

Abbiamo alcuni grandi clienti come Karura, Kodadot e Fearless Wallet che eseguono tutte applicazioni di produzione in SubQuery. Questi team richiedono un servizio migliore e livelli più elevati di affidabilità.

Stiamo raccogliendo la sfida, con Service Level Agreement, livelli di servizio aziendali e altri strumenti di cui i nostri clienti più grandi hanno bisogno per gestire le proprie attività e ricevere le migliori prestazioni possibili da SubQuery per le loro applicazioni.

Si prega di mettersi in contatto con il team se si desidera parlare con noi della ricezione di servizi e supporto a livello aziendale da SubQuery.

## Traguardo 1 — Fine del quarto trimestre 2021

### Programma di creazione/sovvenzioni di sottointerrogazioni

Questo programma di sovvenzioni è progettato per facilitare e catalizzare l'innovazione con Polkadot e SubQuery e per creare la prossima generazione di dApp per alimentare la rivoluzione web3. Sosterrà nuovi progetti con sovvenzioni, supporto tecnico, consulenza di marketing e sviluppo aziendale di SubQuery e altri.

Siamo entusiasti del potenziale di questo e presto pubblicheremo ulteriori informazioni.

### Coordinatore e implementazioni SDK client

Miglioreremo il nostro SubQuery SDK di base e aggiungeremo componenti aggiuntivi per un coordinatore SubQuery e un client.

Il coordinatore dell'indicizzatore verrà distribuito dagli indicizzatori per esporre la rete all'indicizzatore e consentire all'indicizzatore di registrarsi con la rete SubQuery e pubblicizzare i dati che sta rendendo disponibili

L'SDK client sarà per il ruolo di consumatore e consentirà loro di trovare indicizzatori e gestire l'intera transazione di cui un consumatore avrà bisogno per recuperare e pagare i dati.

### MVP interno del contratto di rete SQT

La nostra prima versione della rete SubQuery sarà all'interno di un contratto intelligente, distribuito su una parachain Polkadot leader. L'MVP interno ci consentirà di iniziare a testare tutto internamente qui ed è un'enorme pietra miliare da completare per noi.

### EU Cluster

I nostri clienti richiedono supporto per più cluster per i dati SubQuery in tutto il mondo. Più cluster significano maggiore resilienza e dati di SubQuery ospitati più vicini a dove si trovano i loro clienti. Un nuovo cluster europeo significa richieste più rapide per i consumatori, prestazioni senza rivali per gli sviluppatori di dApp e maggiore resilienza per la rete SubQuery.

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

Tutte le reti importanti richiedono un audit del codice completo da parte di un partner esterno per garantire che il codice della rete sia sicuro e scalabile. SubQuery non è diverso, quindi lavoreremo con i partner chiave per un audit completo del codice qui e continueremo anche a ricevere audit del codice per i nostri contratti intelligenti in futuro.

### Test di micropagamenti interni

Questa è una caratteristica fondamentale per noi. Lavoreremo molto all'interno dell'ecosistema Polkadot per gestire e gestire i micropagamenti all'interno di SubQuery. Il vantaggio di Polkadot sono le minime commissioni di transazione rispetto ad altre reti come Ethereum, il che significa che i micropagamenti sono molto più rilevanti. Questo verrà implementato nella nostra rete di test incentivata dopo aver eseguito test interni approfonditi.

### SubQuery Network Explorer e App

Stiamo costruendo un esploratore e altre applicazioni per consentire ai partecipanti alla rete di sottointerrogazione di esplorare e trovare dati all'interno della rete di sottointerrogazione. I consumatori lo useranno anche per navigare nella libreria delle origini dati supportate, nonché i deleganti per analizzare le prestazioni degli indicizzatori per decidere come delegare i loro token SQT.

### Monitoraggio della salute delle imprese

A seguito del nostro livello di servizio SubQuery Enterprise, puoi anche aspettarti che una grande quantità di monitoraggio dello stato e altri strumenti di analisi delle prestazioni siano messi a disposizione dei clienti.

## Traguardo 3 — Fine del 1° trimestre 2022

### Evento di generazione di token SQT

Dopo una fase di test di rete di successo, ci aspettiamo di lanciare il token SubQuery su un partner di parachain Polkadot. Condivideremo maggiori informazioni sulla nostra tokenomica con la community nelle prossime settimane.

### Lancio di testnet incentivato pubblico con micropagamenti

Questa è la fase finale della nostra rete di test. Rilasceremo tutto alla nostra rete di test e ci aspettiamo che i partecipanti lo spingano al limite. Ciò include test di scala e di carico, messa a punto dei nostri modelli economici e coefficienti, test della nostra documentazione e dei processi di onboarding e assicurarci di poter effettuare transazioni con un precursore di SQT al suo interno.

Ci aspettiamo di premiare i partecipanti della nostra rete di test, quelli che completano determinate missioni o attività e quelli che agiscono come membri diversi della rete di test.

### Informazioni e reportistica sul traffico dati

Gestiamo milioni di richieste di dati ai progetti SubQuery ogni giorno. La maggior parte dei nostri clienti non dispone di analisi nelle proprie dApp per la privacy degli utenti, ma hanno comunque bisogno di sapere come funzionano le loro dApp, quindi lo miglioreremo.

### Routing intelligente scalabile

Abbiamo l'obiettivo di un miliardo di richieste giornaliere di SubQuery al nostro servizio ospitato, ecco perché introdurremo un servizio scalabile a livello globale con più servizi ospitati SubQuery in esecuzione.

È una funzionalità nuova e in continuo miglioramento che instrada automaticamente le richieste al nodo disponibile più vicino. Inoltre, ci consente di reindirizzare immediatamente tutte le richieste a una zona di sottointerrogazione di backup, fornendoci un sistema a tolleranza di errore in caso di interruzione regionale.

In the future it means that we’ll be creating more and more smaller SubQuery hosted services tactically placed closer to our users.

## Milestone 4 — Middle of Q2 2022

### Launch of the SubQuery Foundation

In our move to create a decentralized SubQuery Network we will establish a SubQuery Foundation to administer the future governance and growth of the ecosystem. The ownership of the SubQuery Network will come under the SubQuery foundation initially.

### Finalise research for other Layer-1 chains

While our home will always be Polkadot we are exploring supporting various other Layer-1 blockchains with our indexing capabilities.

### Liquidity mining program

In order to enhance the liquidity of the SQT token, we will create a liquidity mining program with a decentralized exchange (DEX). This will enable token holders to generate returns on their investment.

## Milestone 5 — End of Q2 2022

### Mainnet launch 🚀

After we complete testing of the SubQuery network will launch the first SubQuery Network mainnet. This is where everything really starts. Initially, we will onboard and reward participants of the test network, and then it will be completely open to everyone in the community.

### Centralised Exchange launch

In order to drive increased adoption of SQT, we anticipate launching the token on one if not multiple leading CEX during this period as well as many other DEXs.

## Milestone 6 — Long term plans

### Launch our own Parachain

Although we initially plan to partner with a top Polkadot parachain to get SubQuery Network released and scaled quicker, in the long-term SubQuery also intends to launch on it’s own parachain and integrate itself even more in the ecosystem.

This self owned parachain will allow us to further innovate in tools that can help developers build the web3 future faster. We want to aim for a parachain slot once we have a proven track record behind us and the data, community, and token to support it.

### SubQuery Foundation moves to a DAO

This one is a long way off, but it’s always our dream the SubQuery eventually becomes a community owned DAO. We’ve said many times that the community plays a huge part in SubQuery, everything that we do is for our customers — becoming a DAO is the embodiment of that focus.

That being said, this is a long long way off, and will only be done once we are absolutely confident of SubQuery's success and future with the community.

## About SubQuery

[SubQuery](https://subquery.network) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. The protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
