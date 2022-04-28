# SubQuery fornisce ai clienti un supporto aziendale

![](https://miro.medium.com/max/1400/1*z_StqAT5KeaxQLBCm-xpRQ.jpeg)

Man mano che la nostra comunità si allarga stiamo vedendo centinaia di installazioni e un traffico esponenzialmente maggiore al nostro servizio ogni giorno. Il team di SubQuery sta affrontando questa sfida e sta scalando i nostri servizi per soddisfare la domanda senza precedenti dei nostri strumenti da parte dei nostri clienti, mantenendo il nostro [servizio hosted](https://projects.subquery.network/) gratuito.

Molti clienti ora si affidano a SubQuery per fornire dati mission critical alle loro applicazioni di produzione. Questi clienti rappresentano alcuni dei più grandi wallet ([Nova](https://novawallet.io/) e [Fearless](https://fearlesswallet.io/)), scanner ([Subscan](https://www.subscan.io/), [SubVis](https://www.subvis.io/), e [DotMarketCap](https://dotmarketcap.com/)), piattaforme NFT ([Kodadot](https://kodadot.xyz/) e [Yuser](https://yuser.co/)), e altro. Queste sono applicazioni enormi che la comunità Polkadot usa quotidianamente e devono essere sempre online.

Le prestazioni e l'affidabilità del nostro servizio hosted sono state in cima alla nostra lista di priorità per un po' di tempo qui a SubQuery. Il nostro team gemello è OnFinality, il più grande fornitore di infrastrutture di Polkadot, quindi abbiamo molta esperienza in questo settore. Di conseguenza, oggi andremo attraverso tre recenti miglioramenti che renderanno SubQuery la piattaforma dati più affidabile, scalabile e performante in Polkadot.

![](https://miro.medium.com/max/1200/1*QckhJzjQqw9czpBMRhXgXQ.gif)

## Database dedicati

Inizialmente, tutti i progetti SubQuery erano distribuiti su database condivisi nella nostra infrastruttura per risparmiare denaro e permettere al nostro servizio di rimanere gratuito. Tuttavia, questo farebbe si che progetti ad alto traffico con grandi set di dati finiranno per strangolare altri progetti ospitati nello stesso database.

Se stai costruendo un progetto destinato alla produzione, offriamo un database dedicato ospitato nei nostri cluster SubQuery, nel quale può dare al tuo progetto tutte le risorse di cui ha bisogno per gestire migliaia di query complicate senza preoccuparsi dell'impatto sulle prestazioni degli altri.

Dovresti metterti in contatto con noi all'indirizzo sales@subquery.network se ti interessa. Replichiamo i tuoi dati dalle tue tabelle esistenti in modo che tu non abbia bisogno di spendere tempo per reindicizzare i dati che hai già, il risultato sarà una migrazione con zero downtime.

## Supporto per cluster multipli

Resilienza e affidabilità significano tutto per noi di SubQuery. Avere un cluster ridondante in una parte separata del mondo significa che possiamo recuperare rapidamente dalle interruzioni del cloud provider che occasionalmente portano le regioni offline.

Inoltre, quando si fa una richiesta a un progetto SubQuery nel nostro servizio hosted, la maggior parte del tempo di attesa deriva dalla latenza. La latenza è il tempo da punto a punto che impiega la tua richiesta a fare il giro del mondo fino al cluster SubQuery più vicino e può richiedere fino a un secondo o due da alcune regioni remote. Avere più cluster in tutto il mondo ci permette di ridurre la parte più significativa del tempo di richiesta (la latenza).

Abbiamo implementato più cluster in diverse regioni che forniscono lo stesso servizio. Questo lavoro include anche uno strumento in [Progetti SubQuery](https://project.subquery.network/) che ti permette di distribuire e gestire il tuo progetto attraverso questi cluster. Abbiamo anche implementato processi che assicurano che i database nelle diverse regioni rimangano coerenti, in modo che, indipendentemente dal cluster a cui va la tua richiesta, i dati che ricevi siano coerenti.

## Routing intelligente

Una volta che abbiamo un cluster SubQuery in esecuzione in diverse regioni, il prossimo passo logico è quello di rendere questa funzione invisibile ai tuoi utenti. I tuoi utenti non dovrebbero mai decidere a quale cluster vanno le loro richieste, SubQuery dovrebbe automaticamente indirizzare le loro richieste al cluster sano più vicino. Questo è ciò che il routing intelligente di SubQuery fornisce.

Offriamo un singolo endpoint globale ad ogni cliente premium che ha un routing intelligente applicato automaticamente ad ogni richiesta. Questo servizio include un monitoraggio considerevole che pinga costantemente ogni cluster per verificare lo stato di salute e garantire che un utente non venga mai indirizzato a un cluster che è sovraccarico o offline. L'endpoint globale ottimizza l'instradamento di ogni richiesta al cluster più vicino per garantire che i vostri utenti ricevano le migliori prestazioni dai vostri cluster.

![](https://miro.medium.com/max/1000/0*DNXDiABzli0et1MU)

In sintesi, questi servizi ci permettono di offrire il nostro servizio premium a più clienti con fiducia. Lavoriamo con ogni cliente per capire il loro business e i loro obiettivi, e poi per impostare un servizio che soddisfi le loro esigenze. SubQuery è il più grande fornitore di servizi di dati in Polkadot, e queste caratteristiche mostrano come supportiamo migliaia di progetti comunitari allo stesso tempo dei più grandi progetti in Polkadot.

## Informazioni sulla SubQuery Network

SubQuery è il principale fornitore di dati di Polkadot, che supporta un'indicizzazione & e un livello di interrogazione tra le blockchain Layer-1 (Polkadot) e le applicazioni decentralizzate. Il servizio di dati di SubQuery è utilizzato dalla maggior parte dei siti web di crowdloan e aste parachain di Polkadot e Kusama attualmente in funzione.

Il protocollo di SubQuery astrae le idiosincrasie dei dati blockchain con l'SDK di SubQuery, permettendo agli sviluppatori di concentrarsi sull'implementazione del loro prodotto principale senza sprecare inutilmente gli sforzi sulle tecnologie backend personalizzate.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
