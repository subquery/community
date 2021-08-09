
> Oggi stiamo introducendo slot di distribuzione, una funzionalità completamente nuova che migliora l'esperienza di sviluppo nel servizio ospitato di SubQuery.

[SubQuery Projects](https://project.subquery.network/) è già utilizzato come servizio gestito e ospitato per molti progetti, se sono esploratori di catene, portafogli, esploratori NFT, o altri. È un servizio su cui si basano i nostri clienti.

![](https://miro.medium.com/max/1400/0*PugDgh6weZspRIO2)

Ora puoi distribuire in uno slot di staging isolato

Anche se è sempre possibile eseguire da soli l'infrastruttura di SubQuery (con il proprio servizio di node e query personale), miriamo a rendere il nostro servizio ospitato il fornitore di dati più affidabile, resiliente e performante nell'ecosistema Polkadot/Substrate.

I creatori di [Progetti di SubQuery](https://project.subquery.network/) stanno costantemente migliorando e aggiornando i loro Progetti e i dati all'interno di questi progetti. Purtroppo ci vogliono ore se non giorni per reindicizzare i dati della catena in caso di un cambiamento importante, in ultima analisi il nostro obiettivo di consentire di aggiornare il tuo progetto, reindicizza i tuoi dati e aggiorna i tuoi progetti di SubQuery ospitati con **zero tempi di inattività**

**Questo è ciò che gli slot di distribuzione sono qui per risolvere**

![](https://miro.medium.com/max/1400/0*vQ33aqhn1eVllo5t)

Il tuo slot di staging verrà eseguito indipendentemente dallo slot di produzione primario

Quando si crea una nuova distribuzione per il tuo [Progetto SubQuery nel nostro servizio ospitato](https://project.subquery.network/), è possibile scegliere di distribuire per la produzione o staging slot. Questi due slot sono ambienti isolati, ognuno ha il proprio database e la sincronizzazione indipendente. Una volta che lo slot di staging è iniziato e completato l'indicizzazione, è possibile quindi promuoverlo alla produzione con zero tempi di inattività.

Lo slot di staging è perfetto per:

-   Convalida le modifiche al tuo Progetto SottoQuery in un ambiente separato. Lo slot di staging ha un URL diverso da quello di produzione che puoi usare nelle tue dApps.
-   Risvegliare e indicizzare i dati per un progetto di SubQuery aggiornato per eliminare i tempi di inattività nel tuo dApp
-   Preparare una nuova release per il tuo Progetto SubQuery senza esporla pubblicamente. Lo slot di staging non viene mostrato al pubblico nell'esploratore e ha un URL unico che è visibile solo a voi.

Puoi provare tu stesso ora in [Progetti di SubQuery](https://project.subquery.network/).