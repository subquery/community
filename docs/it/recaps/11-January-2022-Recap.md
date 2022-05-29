# Ricapitolo Di Gennaio

![](https://miro.medium.com/max/1400/1*2IMAaY-YYyAdl7YfZqHTAg.png)

Ciao a tutti e benvenuti nel 2022! L'anno scorso è stato grandioso per noi di SubQuery, ma dopo le tanto necessarie vacanze estive qui in Nuova Zelanda, il team è ben riposato ed energizzato dal potenziale che ci attende. Quest'anno sarà l'anno della rivoluzione dei dati decentralizzati!

Come sempre, suddividiamo il nostro aggiornamento mensile in tre sezioni; community, sviluppo del prodotto principale e SubQuery Network.

## Comunità

La community di SubQuery si sta espandendo rapidamente in termini di numero e regioni che copriamo! Di conseguenza, abbiamo molto di cui parlare in questo settore.

### SubQuery collabora con i principali team Polkadot su ricompense tecniche tramite il programma di sovvenzioni SubQuery

Il mese scorso abbiamo lanciato il SubQuery Grants Program, un acceleratore non diluitivo per aiutare gli sviluppatori della nostra community a costruire la prossima generazione di dApp. Questo mese abbiamo parlato con i nostri partner per rilasciare un primo round di taglie in collaborazione con Moonbeam, Acala, Astar e Bifrost come progetti di ispirazione. Tutti possono candidarsi ora e, come bonus, se la tua domanda ha esito positivo, lavorerai a stretto contatto con il team di paracatena che ha suggerito la sfida!

I candidati interessati a uno di questi premi sono incoraggiati a presentare la loro proposta con il budget necessario per completare l'attività e altri requisiti [qui](https://docs.google.com/forms/d/e/1FAIpQLSfmMazkebKwNTWThBkVGaxf2Bg8s4aWZ0ZhwiMCtc9kv4sJHQ/viewform). Inoltre, non vediamo l'ora di annunciare il primo round di beneficiari di SubQuery a febbraio.

[Leggi di più qui](../blogs/20220127-grants-bounties.md)

### SubQuery celebra i vincitori di Gitcoin GR 12 Hackathon

[SubQuery ha collaborato con Gitcoin a dicembre](../blogs/20211120-gitcoin12-hackathon.md) per sponsorizzare cinque sfide per un valore di $ 37.000 USD (il montepremi più grande della sfida), invitando gli sviluppatori a creare strumenti utili, dashboard e persino estendere SubQuery a un altro Layer-1.

![](https://miro.medium.com/max/1400/1*BUq3ah1ULNnvLjqxv_vzlQ.png)

[Sam Zou](https://twitter.com/zoujialiu), CEO e fondatore di SubQuery ha commentato: '_SubQuery è lieto dei risultati del Gitcoin GR12 Hackathon. La nostra missione si basa sull'avere una rete di sviluppatori che hanno il potere di creare e innovare all'interno dell'ecosistema Substrate/Polkadot. Questa partnership ha offerto agli sviluppatori motivati ​​di tutto il mondo l'opportunità di creare le applicazioni di domani. Siamo entusiasti di coltivare i vincitori delle sfide per sviluppare ulteriormente le loro idee_”

Di recente abbiamo parlato dei numerosi vincitori che hanno partecipato a questo hackathon e degli incredibili progetti che hanno costruito in [questo articolo dettagliato](../blogs/20220120-gr12-winners.md). Siamo rimasti sbalorditi dalla qualità e dai progressi compiuti dalle candidature in così poco tempo e siamo lieti di invitare molte delle candidature a partecipare al nostro programma di sovvenzioni.

[Leggi di più qui](../blogs/20220120-gr12-winners.md)

### Corso Eroe Cina

Il nostro corso Hero realizzato in collaborazione con OneBlock+ è iniziato all'inizio di gennaio e ora abbiamo già rilasciato tre lezioni a oltre 200 studenti! Unisciti alla community di OneBlock+ per partecipare a questo corso o all'orario di ufficio. La Cina è una regione strategicamente importante per SubQuery, ma prevediamo di lanciare presto molti altri corsi regionali per sviluppatori: contattaci se puoi aiutarci in questo!

![](https://miro.medium.com/max/1400/1*_8N000hX1WBM79ZbFyhvYQ.png)

## Sviluppo del prodotto principale

### Supporto multicatena

SubQuery è nativo di Polkadot, è la nostra casa e abbiamo lavorato duramente per costruire relazioni in questo ecosistema. La premessa principale di Polkadot è creare una fiorente comunità di sviluppatori, utenti e aziende che attingerà alla sua interoperabilità multichain. Sosteniamo questa visione e crediamo anche che Polkadot sarà un attore di primo piano in tale iniziativa.

Ma crediamo in un futuro multi-catena, sappiamo che ci saranno molte blockchain interoperabili diverse che lavoreranno insieme per risolvere problemi diversi. Il nostro piano a lungo termine è sempre stato quello di prendere SubQuery e di adattarlo per funzionare per altre blockchain che non hanno una soluzione di indicizzazione attuale. Il nostro approccio multi-catena che abbiamo dovuto realizzare per Polkadot significa che siamo particolarmente adatti per questa sfida.

Stiamo finalizzando il lavoro sulla prima delle 5 nuove catene di livello 1 che SubQuery indicizzerà, non vediamo l'ora di annunciarlo presto!

![](https://miro.medium.com/max/1400/1*jD1n5MSjeatjiaF5hY-Wjg.png)

### Miglioramenti delle prestazioni delle sottoquery

La velocità di indicizzazione di SubQuery viene sempre migliorata, è un focus costante sul nostro team di sviluppo. Il nostro supporto avanzato del dizionario significa che consente questo, i dizionari velocizzano il tuo progetto di molti multipli e ti consentono di indicizzare l'intera catena di Polkadot in pochi minuti, non in ore (a seconda della complessità del tuo progetto).

Come indicatore dell'ampiezza del supporto che SubQuery offre all'ecosistema Polkadot, ora ospitiamo e gestiamo dizionari su 31 diverse reti, che rappresentano la maggior parte di tutte le principali parachain Polkadot/Kusama.

![](https://miro.medium.com/max/1400/1*WeMY5WnWZ_jvllxidhycUA.png)

### Registro dei modelli di sottointerrogazione

**29 reti sono coperte da modelli**

Il comando `subql init` è familiare a chiunque abbia creato un progetto SubQuery; rappresenta una tela bianca: opportunità illimitate. Siamo consapevoli che possiamo fare di meglio per aiutare gli altri a iniziare, piuttosto che una tela bianca gli sviluppatori vogliono uno scaffold vuoto, dove tutto il codice della caldaia è già scritto.

Oggi, quando scrivi `subql init`, ti viene presentato un elenco di 29 reti da cui ti viene fornito uno scaffold pre-creato con tutti gli endpoint corretti, i collegamenti ai dizionari e persino le definizioni dei tipi. Ciò elimina uno dei passaggi più difficili quando si avvia un nuovo progetto SubQuery e rende la creazione della tua prossima grande dApp molto più semplice e veloce.

### Funzionalità di aggregazione dei dati

SubQuery ora supporta le funzioni aggregate GraphQL avanzate per consentire di eseguire un calcolo su un insieme di valori durante la query. Queste funzioni forniscono ai nostri clienti un insieme più ricco di informazioni e calcoli dal loro set di dati esistente. Ad esempio con un'unica query è possibile calcolare l'importo del contributo mediano per ogni crowdloan suddiviso per data di contributo.

[Leggi di più su come utilizzare queste funzionalità nei nostri documenti aggiornati.](https://doc.subquery.network/query/aggregate/)

### SubQuery collabora con Darwinia Network per creare lo strumento CLI di SubQuery

Darwinia ha collaborato con SubQuery per creare la pletora di applicazioni necessarie per fornire la migliore esperienza utente per le interazioni a catena incrociata. Ciò include una nuova [App intelligente che è un hub centrale](https://apps.darwinia.network/) per gestire tutte le interazioni della rete Darwinia, inclusi governance, staking, esplorazione della catena e altro ancora. Questa app utilizza una notevole quantità di [dati di sottoquery per mostrare dati storici e azioni](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery lavorerà a stretto contatto con il team di Darwinia per rendere questa la migliore esperienza nell'intero ecosistema Polkadot.

![](https://miro.medium.com/max/1200/1*bL2Csj9qyamD7txAheCTIg.gif)

Darwinia ha anche lavorato a stretto contatto con il team di SubQuery per [creare uno strumento CLI](https://github.com/fewensa/subquery-cli) per il servizio gestito da SubQuery (https://project.subquery.network). Puoi utilizzare questa [CLI](https://github.com/fewensa/subquery-cli) per creare un progetto SubQuery e distribuire automaticamente una nuova versione nello slot di staging o di produzione. Inoltre, puoi recuperare informazioni tra cui lo stato di sincronizzazione dettagliato e i registri dal tuo progetto in esecuzione che è ospitato gratuitamente in SubQuery Projects. [Leggi di più qui](../customer_announcements/20220125-subquery-partners-with-darwinia-network-to-build-subquerys-cli-tool.md)

## SubQuery Network

Nell'ultima chiamata della comunità abbiamo esaminato alcuni dettagli importanti della prossima rete di test di SubQuery. Si svolgerà in almeno tre stagioni, ogni stagione metterà alla prova diversi aspetti della rete:

- Stagione 1: test alfa in fase iniziale di un numero limitato di funzionalità con pochi partecipanti selezionati
- Stagione 2: ampio beta test di più funzionalità con centinaia di partecipanti
- Stagione 3: rete di test pubblica completa per test di carico e scala con migliaia di partecipanti

Ogni stagione avrà più sfide che puoi completare che potrebbero comportare reali ricompense SQT. Aspettati che le cose inizino qui a marzo!

## Aggiornamento Roadmap

Lo scorso ottobre abbiamo pubblicato la [roadmap tecnica](https://blog.subquery.network/blogs/20211029-roadmap-october.html) con il prossimo anno mappato per SubQuery, siamo in ritardo per affrontare esattamente come stiamo facendo qui.

![](https://miro.medium.com/max/1400/1*2a3SGrW-OG5pbw67jsavvw.jpeg)

Come puoi vedere nella tabella di marcia originale sopra, abbiamo completato tutti i traguardi 0 e 1 e stiamo facendo buoni progressi su traguardi 2. Abbiamo persino fornito alcune funzionalità rilevanti per il nostro servizio in hosting molto prima del previsto, a causa dell'enorme portata di richieste attualmente inviate ai [nostri clienti aziendali](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html).

## Altre cose che potresti esserti perso

- Avremo orari d'ufficio settimanali sul nostro server Discord! Unisciti a 'Office Hours' di SubQuery sul nostro canale stage dove puoi metterti al passo con il team in un ambiente informale.
- Abbiamo avuto un QnA russo con James & Dmytro a Discord dove tutte le domande sono state poste e risposte in russo. Facci sapere quale lingua vorresti ascoltare dopo

P.S.

Ricordati di unirti ai nostri [Discord](https://discord.com/invite/subquery) e ai nostri [canali social](https://linktr.ee/subquerynetwork) per rimanere aggiornato sulle nostre ultime notizie e annunci.

La rete SubQuery

[Albero dei collegamenti](https://linktr.ee/subquerynetwork) | [Sito web](https://subquery.network/) | [E-mail](hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegramma](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrice](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
