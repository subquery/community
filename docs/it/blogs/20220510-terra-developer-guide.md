# La guida all'avvio di SubQuery Terra

![](https://miro.medium.com/max/1400/1*DiTE9KuzH0xHLojzGWxOuw.png)

Per diverso tempo abbiamo sviluppato e perfezionato il supporto di Terra dietro le quinte e lo abbiamo testato con i principali partner per il lancio dello sviluppo (tenete d'occhio gli annunci nei prossimi giorni). Questo periodo prolungato ci ha permesso di essere estremamente fiduciosi nella scalabilità, nell'affidabilità e nelle funzionalità che SubQuery oggi apporta a Terra. In questo articolo condividiamo una guida dettagliata per gli sviluppatori e una roadmap che tutta la comunità di Terra potrà utilizzare per risolvere le proprie esigenze di indicizzazione dei dati.

SubQuery è un indicizzatore di dati aperto, flessibile e veloce. Il nostro strumento di indicizzazione aperto è stato progettato per aiutare gli sviluppatori a creare le proprie API in poche ore ed è stato progettato per indicizzare le catene in modo incredibilmente rapido con l'aiuto di dizionari (indici precalcolati). La nostra esperienza con i clienti di tutti i settori verticali di Polkadot (portafogli, reti, esploratori, NFT, DeFi, scanner, ecc.) ci ha aiutato a costruire questo strumento.

Si tratta ancora di una versione iniziale e, anche se la consideriamo ben al di là di una "beta", apprezzeremmo molto se eventuali bug venissero segnalati al nostro team in modo da poterli risolvere rapidamente.

<iframe width="656" height="369" src="https://www.youtube.com/embed/dS7h3isQCeA" title="Riproduzione video su YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Perché usare SubQuery?

L'ecosistema applicativo di Terra ha prosperato nonostante la grave mancanza di alcuni strumenti chiave per gli sviluppatori e di servizi infrastrutturali. È incredibile da vedere e testimonia l'impegno e l'ingegnosità dei Lunatics di Terra. Nella maggior parte dei casi, quando abbiamo chiesto ai team come avessero risolto le loro esigenze di indicizzazione dei dati, la risposta è stata:

- **Costruisci la tua soluzione:** Un'implementazione personalizzata che esegui da solo e che costruisci specificamente per la tua applicazione. Ma perché reinventare la ruota? SubQuery si sta concentrando sulla costruzione di un indicizzatore aperto affidabile e veloce: siamo qui per farvi risparmiare tempo
- **Progettare contratti intelligenti per le query:** Alcuni team hanno persino implementato stranezze personalizzate nei loro contratti intelligenti per consentire query più avanzate specifiche per la loro logica applicativa.

Noi di SubQuery abbiamo un SDK open-source facile da usare e veloce come un fulmine. Fornisce un endpoint GraphQL standard o può essere interrogato direttamente il database Postgres. Grazie ad esso è possibile indicizzare un insieme unico di dati provenienti dai propri smart contract che consentono di costruire un prodotto superiore che sbaraglia la concorrenza! Vi diamo la flessibilità di ottenere i dati di cui avete bisogno nella forma più adatta a voi.

L'affidabilità è fondamentale e per ospitarla occorre una piattaforma affidabile e scalabile. [Il servizio gestito di SubQuery](https://subquery.network/managedservices) è una soluzione di hosting leader del settore per tutti i clienti che serve centinaia di milioni di richieste giornaliere ai più grandi progetti in Polkadot. Forniamo ai nostri [clienti di livello aziendale](./20211228-enterprise-hosted.md) servizi quali database dedicati, cluster ridondanti, routing intelligente multi-cluster, monitoraggio avanzato e analisi. Supporterà la vostra applicazione quando sarete pronti e scalerà con voi.

Infine, tra qualche mese sarete in grado di decentralizzare completamente la vostra infrastruttura SubQuery con la SubQuery Network, il futuro dell'infrastruttura Web3. La Rete SubQuery indicizzerà e fornirà i dati dei vostri progetti alla comunità globale in modo incentivato e verificabile. È stata progettata per supportare qualsiasi progetto SubQuery da qualsiasi rete di livello 1, compresa Terra, in modo da poter sfruttare la scala della rete SubQuery unificata fin dal lancio.

## Istruzioni per l'installazione

È necessario installare una versione recente di @subql/cli tramite npm i -g @subql/cli@latest

Il modo migliore è iniziare con [il nostro progetto di partenza](https://github.com/subquery/terra-subql-starter), che contiene un progetto in esecuzione con un esempio di tutte le funzioni di mappatura: Questo progetto indicizza quanto segue:

- **BlockHandler:** tutti i blocchi e i loro hash e altezza
- **TransactionHandler:** Tutte le transazioni e i loro hash, altezza e timestamp
- **EventHandler:** Tutti gli eventi di trasferimento di smart contract e i relativi hash, altezza, mittente, destinatario e importo da un indirizzo di smart contract filtrato (bLuna)
- **MessageHandler:** Tutti i messaggi di smart contract e i relativi dati hash, altezza, contratto, mittente ed execute_msg da un indirizzo di smart contract filtrato (bLuna)

SubQuery supporta l'indicizzazione degli smart contract di Terra con sottoscrizioni e gestori di transazioni e messaggi. È possibile vedere un esempio funzionante di supporto agli smart contract nel progetto [starter](https://github.com/subquery/terra-subql-starter) e leggere la documentazione nella [SubQuery University](http://localhost:8080/build/manifest.html#mapping-handlers-and-filters).

L'implementazione di Terra di SubQuery è stata progettata per funzionare in modo quasi identico al supporto Polkadot di SubQuery e in modo simile all'approccio di Graph. Abbiamo aggiornato la [SubQuery University](https://university.subquery.network/) per aggiungere informazioni specifiche su Terra alla documentazione generale di SubQuery. Potete iniziare seguendo questa [ottima guida introduttiva](http://university.subquery.network/quickstart/quickstart-terra.html).

## Distribuzione del progetto al servizio gestito di SubQuery

Anche se sarete sempre in grado di eseguire facilmente il vostro progetto nella vostra infrastruttura, il [servizio gestito di SubQuery](https://subquery.network/managedservices) ora supporta il progetto Terra. Alcuni dei più grandi progetti dipendono dal servizio gestito [di livello enterprise](./20211228-enterprise-hosted.md) di SubQuery e ora potete farlo anche voi. Come parte del nostro accordo di lancio, vi forniamo 3 mesi di hosting gratuito.

Potete [seguire la guida qui](https://university.subquery.network/run_publish/publish.html) per pubblicare il vostro progetto Terra SubQuery sul nostro servizio gestito. Si prega di notare che è necessario ospitare il progetto [SubQuery utilizzando IPFS](https://university.subquery.network/run_publish/publish.html) piuttosto che GitHub.

Potete aggiornare il progetto del servizio gestito quanto volete. Abbiamo anche uno slot di distribuzione [staging](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md) per consentirvi di eseguire aggiornamenti blu/verdi senza interruzioni. Questo slot di staging può anche essere utilizzato per eseguire un'istanza pulita di SubQuery con un database nuovo per una reindicizzazione completa in background del progetto. I clienti di solito collegano lo slot di staging alle versioni di staging/sviluppo delle loro applicazioni.

Una volta distribuito, è possibile accedere al progetto utilizzando SubQuery Explorer ed effettuare richieste direttamente dalla propria applicazione all'endpoint GraphQL fornito. Fateci sapere se volete che abilitiamo funzioni più avanzate come [sottoscrizioni GraphQL](https://university.subquery.network/run_publish/subscription.html), query più complesse e [funzioni di aggregazione](https://university.subquery.network/run_publish/aggregate.html).

Vi preghiamo di informarci una volta che avete distribuito il vostro progetto, in quanto potremmo aver bisogno di assistenza per la regolazione fine delle dimensioni del batch per garantire che il nostro nodo di archivio Terra funzioni bene per il vostro progetto.

## Supporto di SubQuery per Terra

Oggi condividiamo quanto segue:

-   Indicizzazione avanzata di blocchi, eventi
-   Dizionario Terra: Indici precalcolati per [ridurre drasticamente il tempo di indicizzazione](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
-   Supporto completo per Terra nel nostro servizio gestito gratuito di [livello enterprise](./20211228-enterprise-hosted.md)
-   Documentazione intuitiva nella [SubQuery University](https://university.subquery.network/)

Nelle prossime settimane potrete aspettarvi:

-   Un corso di apprendimento passo dopo passo nella [SubQuery Academy](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   Pieno supporto per Terra nella nostra rete decentralizzata SubQuery (presto vedrete un progetto nella nostra attuale rete di test Frontier)

---

Il lancio del nostro supporto beta per Terra segna una pietra miliare significativa nel nostro impegno a offrire strumenti di indicizzazione migliorati alla comunità di Terra, per consentire ai suoi sviluppatori di andare oltre, più velocemente. Siamo ansiosi di ricevere feedback dalla comunità per migliorare la nostra offerta e aumentare la nostra visibilità come partner infrastrutturale affidabile per una delle comunità di sviluppatori in più rapida crescita nel Web3

James Bayly

## Collegamenti

-   [Guida introduttiva](https://university.subquery.network/quickstart/quickstart-terra.html)
-   [Università delle sottoquery (documentazione)](https://university.subquery.network/)
-   [Esempio di progetto Terra](https://github.com/subquery/terra-subql-starter)
-   [Servizio gestito](https://explorer.subquery.network/)
-   [Pubblicare il proprio progetto Terra sul servizio gestito](https://project.subquery.network/)

## Informazioni su SubQuery

[SubQuery](https://subquery.network/) è un toolkit per sviluppatori di blockchain che consente di costruire applicazioni Web3 del futuro. Un progetto SubQuery è un'API completa per organizzare e interrogare i dati dalle catene di livello 1. Attualmente al servizio dei progetti Polkadot, Substrate, Avalanche e ora Terra, questo data-as-a-service consente agli sviluppatori di concentrarsi sul loro caso d'uso principale e sul front-end, senza dover perdere tempo a costruire un backend personalizzato per l'elaborazione dei dati. La rete SubQuery si propone di abilitare questa stessa soluzione scalabile e affidabile, ma in modo completamente decentralizzato.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
