# January Recap

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

### SubQuery Templates Registry

**29 networks are covered by templates**

The `subql init` command is a familiar one for anyone that has built a SubQuery project; it represents a blank canvas — limitless opportunities. We are aware that we can do better to help others get started, rather than a blank canvas developers want a blank scaffold, where all the boiler-plate code is already written.

Today when you write `subql init`, you are presented with a list of 29 networks from which you are provided a pre-created scaffold with all the correct endpoints, dictionary links, and even type definitions. This eliminates one of the most difficult steps when starting a new SubQuery project and makes building your next big dApp that much easier and faster.

### Data Aggregation Features

SubQuery now supports advanced GraphQL aggregate functions to allow you to perform a calculation on a set of values during your query. These functions provide our customers a richer set of insights and calculations from their existing data set. For example with a single query you can calculate the median contribution amount for each crowdloan broken down by contribution date.

[Read more about how to use these features in our upgraded docs.](https://doc.subquery.network/query/aggregate/)

### SubQuery partners with Darwinia Network to build SubQuery’s CLI Tool

Darwinia has partnered with SubQuery to build the plethora of applications that will be needed to provide the ultimate user experience for cross chain interactions. This includes a new [Smart App that is a central hub](https://apps.darwinia.network/) to manage all Darwinia network interactions including governance, staking, chain exploration and more. This app uses a considerable amount of [SubQuery data to show historic data and actions](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery will be working closely with the team at Darwinia to make this the best experience in the entire Polkadot ecosystem.

![](https://miro.medium.com/max/1200/1*bL2Csj9qyamD7txAheCTIg.gif)

Darwinia have also been working closely with the SubQuery team to [build a CLI tool](https://github.com/fewensa/subquery-cli) for the SubQuery managed service (https://project.subquery.network). You can use this [CLI](https://github.com/fewensa/subquery-cli) to create a SubQuery project and automatically deploy a new version to either the staging or production slot. Additionally you can retrieve information including the detailed syncing status and logs from your running project that is hosted for free in SubQuery Projects. [Read more here](../customer_announcements/20220125-subquery-partners-with-darwinia-network-to-build-subquerys-cli-tool.md)

## SubQuery Network

Last community call we walked through a few important details of the upcoming SubQuery test network. It will be run over at least three seasons, each season will test different aspects of the network:

- Season 1: Early stage alpha testing of a limited number of features with a select few participants
- Season 2: Large beta testing of more features with hundreds of participants
- Season 3: Full public test network for load and scale testing with thousands of participants

Each season will have multiple challenges that you can complete which may result in real SQT rewards. Expect things to kickoff here in March!

## Roadmap Update

Last October we released out [technical roadmap](https://blog.subquery.network/blogs/20211029-roadmap-october.html) with the next year mapped out for SubQuery, we’re overdue to address exactly how we’re doing here.

![](https://miro.medium.com/max/1400/1*2a3SGrW-OG5pbw67jsavvw.jpeg)

As you can see in the original roadmap above, we’ve completed all of Milestone 0 and 1, and are making good progress on Milestone 2. We’ve even delivered some features relevant to our hosted service much earlier than expected due to the huge scale of requests currently going to [our enterprise customers](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html).

## Other things you might have missed

- We will be having weekly office hours on our Discord Server! Join SubQuery’s ‘Office Hours’ on our stages channel where you can catch-up with the team in a casual environment.
- We had a Russian QnA with James & Dmytro in Discord where all questions were asked and answered in Russian. Let us know which language you would like to hear next

P.S.

Remember to join our [Discord](https://discord.com/invite/subquery) and our [social channels](https://linktr.ee/subquerynetwork) to stay updated on our latest news and announcements.

The SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Email](hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
