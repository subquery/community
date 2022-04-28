# SubQuery Aggiornamento tecnico di novembre: aggiornamenti EVM e Manifest

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**Leggi di più per il nostro deep dive su l'ultima versione di SubQuery**

## Supporto per i file di tipo External Chain nel Manifest del progetto

Oggi è il lancio della [versione 0.2.0](https://doc.subquery.network/create/manifest/) del nostro file manifest di progetto (`project.yaml`). Questa nuova versione fornisce agli sviluppatori vari miglioramenti che sono stati richiesti dai clienti.

La cosa più importante è che ora è possibile fare riferimento a un file chain type di definizione che ha tutti i tipi personalizzati inclusi quando si indicizza una custom substrate chain personalizzata. Questo permette rapidamente di collegare un nuovo progetto SubQuery a qualsiasi chain basata su substrato, compresi tutti i parachains di Kusama. Questo dovrebbe essere un file di tipo di chain standard che dichiara i tipi specifici supportati da questa blockchain in formato `.json` o `.yaml`.

Questa soluzione permette di evitare di copiare e gestire le definizioni dei tipi di catena nel manifest stesso, e permette di clonare semplicemente i file [published chain type elencati nei repository come PolkadotJS](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec).

[Puoi leggere del nuovo file manifest, incluso come puoi migrare i tuoi progetti ad esso, qui nella nostra documentazione aggiornata.](https://doc.subquery.network/create/manifest/)

## Supporto Moonbeam EVM

La settimana scorsa abbiamo avuto il piacere di [annunciare che stavamo lavorando con Moonbeam per portare il supporto completo all'EVM e all'indicizzazione del Substrate su Moonriver](../customer_announcements/20211028-moonbeam-evm.md).

Oggi diamo seguito a quell'annuncio con tutte le risorse per sviluppatori di cui hai bisogno per iniziare.

Attualmente, non esiste uno strumento open-source che permetta agli sviluppatori di raccogliere e interrogare in modo flessibile i dati sia su Ethereum che su Polkadot/Kusama. Questa limitazione può portare al fatto che soluzioni dApps all'interno di Moonriver vengano "siloed" nel layer dello smart contract e quindi limitare il loro potenziale ai consumatori attraverso entrambi i network di successo. Questa partnership con Moonbeam porta una soluzione di indicizzazione dei dati completa e unificata per tutti i dati blockchain all'interno di Moonriver e beneficerà notevolmente il crescente ecosistema di applicazioni di Moonriver.

**SubQuery sarà ospite al prossimo Moonbuilders Workshop mercoledì 1 dicembre,** [**registrati qui**](https://www.crowdcast.io/e/moonbuilders-ws/10)**.**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[Prima di tutto, familiarizza con la documentazione aggiornata su come connettersi e indicizzare i dati da Moonbeam, Moonbase Alpha, e Moonriver.](https://doc.subquery.network/create/substrate-evm/) Il processo per indicizzare i dati Moonbeam è di soli due passi:

### Passo 1: Aggiungere l'origine dati personalizzata Moonbeam

Abbiamo creato un processore di dati fatto appositamente per lavorare con l'implementazione di Moonbeam di [Frontier](https://github.com/paritytech/frontier). Ti permette di fare riferimento a specifiche risorse ABI utilizzate dal processore per analizzare gli argomenti e l'indirizzo dello smart contract da cui provengono gli eventi o a cui viene fatta la chiamata. [Puoi leggere di più qui](https://doc.subquery.network/create/substrate-evm/#data-source-spec).

SubQuery introduce filtri più avanzati rispetto agli altri indicizzatori, permettendo di filtrare le transazioni non contrattuali, i mittenti delle transazioni, i contratti e gli argomenti del registro indicizzati. Questo permette agli sviluppatori di costruire un'ampia varietà di progetti che soddisfano le loro specifiche esigenze di dati.

### Passo 2: Indicizzare i dati Moonbeam

Proprio come un normale progetto SubQuery, si usa una funzione di mappatura per trasformare i dati off chain nelle entità GraphQL che si definiscono. La differenza è che invece di un `SubstrateEvent` o `SubstrateExtrinsic`, la funzione di mappatura riceverà un `MoonbeamCall` o `MoonbeamEvent` che sono basati sul tipo [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) o [Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log) di Ether. [Puoi leggere di più a riguardo qui](https://doc.subquery.network/create/substrate-evm/#frontierevmcall).

[Leggi la documentazione completa su questo processo qui](https://doc.subquery.network/create/substrate-evm/#frontierevmcall)

### Progetto di esempio

C'è un progetto di esempio completo che indicizza gli eventi `transfer` dell'etica e le chiamate `approve` del contratto intelligente. Il codice di questo progetto di esempio è [qui su GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter) o accessibile tramite il [progetto SubQuery live su SubQuery Explorer qui](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project).

Il grosso delle modifiche avviene nel file Manifest (`project.yaml`). Puoi vedere qui sotto che abbiamo [esteso i filtri di chiamata](https://doc.subquery.network/create/substrate-evm/#call-filters) per supportare sia [stringhe di firma della funzione](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) che il sighash della funzione per filtrare la funzione chiamata sul contratto. Per [filtri di eventi](https://doc.subquery.network/create/substrate-evm/#event-filters), è possibile utilizzare il filtraggio degli argomenti che segue lo standard [Filtri di log JSON-PRC di Ethereum che si trova qui](https://docs.ethers.io/v5/concepts/events/). Si noti che SubQuery introduce filtri più avanzati rispetto ad altri indicizzatori per Moonbeam EVM e questi miglioramenti dovrebbero beneficiare significativamente gli sviluppatori.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

Se hai familiarità con il modo in cui il progetto SubQuery basato su Substrate è fatto, noterai quanto siano simili le funzioni di mappatura per il nuovo supporto Moonriver. Ogni funzione di mappatura riceve una `MoonbeamCall` o `MoonbeamEvent` e li processa proprio come qualsiasi altro progetto SubQuery.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

Se hai delle domande su questo, assicurati di [controllare i nostri documenti](https://doc.subquery.network/create/substrate-evm) o contattaci sul nostro canale #technical-support nella nostra [community Discord](https://discord.com/invite/subquery).

[Clona il progetto di esempio su GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

Come puoi vedere, creare un progetto Moonriver o Moonbase Alpha che indicizza sia i dati Substrate che EVM in un unico progetto è estremamente semplice e in gran parte simile. È possibile utilizzare gli strumenti di scaffolding avanzati di SubQuery per accelerare lo sviluppo della tua dApp e trarre vantaggio o un'indicizzazione più ricca per i tuoi dati per costruire dApps più intuitive. Non vediamo l'ora di vedere cosa costruisci!

## Informazioni su SubQuery

SubQuery è un livello di aggregazione dei dati che opera tra le blockchain layer-1 (come Moonriver e Polkadot) e le DApps. Questo servizio sblocca i dati della blockchain e li trasforma in uno stato interrogabile in modo che possano essere utilizzati in applicazioni intuitive. Permette agli sviluppatori di DApp di concentrarsi sul loro caso d'uso principale e sul front-end, senza bisogno di perdere tempo a costruire un backend personalizzato per l'elaborazione dei dati.

[Linktree](https://linktr.ee/subquerynetwork) | [Sito web](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegramma](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Informazioni su Moonbeam

Moonbeam è una piattaforma di smart contract compatibile con Ethereum sulla rete Polkadot che rende facile costruire applicazioni nativamente interoperabili. Questa compatibilità con Ethereum permette agli sviluppatori di implementare contratti intelligenti Solidity esistenti e frontend DApp su Moonbeam con modifiche minime. Come parachain sulla rete Polkadot, Moonbeam beneficerà della sicurezza condivisa della catena di relay Polkadot e delle integrazioni con altre catene che sono collegate a Polkadot. Attualmente in fase di sviluppo attivo da parte di PureStake, Moonbeam dovrebbe raggiungere MainNet entro il 4° trimestre 2021. Per saperne di più: [https://moonbeam.network/](https://moonbeam.network/).
