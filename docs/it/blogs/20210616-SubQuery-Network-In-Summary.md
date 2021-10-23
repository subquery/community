# Network di SubQuery - Riepilogo

> Come funziona il Network di SubQuery? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)

Oggi parleremo di come funziona il Network di SubQuery ad alto livello.

## Partecipanti


![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Partecipanti al Network di SubQuery

Ci sono tre tipi di partecipanti nel Network di SubQuery:

-   **Consumers**: I consumatori faranno richieste al Network di SubQuery per dati specifici e pagheranno un ammontare pubblicizzato di SQT
-   **Indexers**: Gli indicizzatori ospiteranno i progetti SubQuery nella loro infrastruttura, eseguendo sia il nodo che il servizio di query per indicizzare i dati e rispondere alle richieste di GraphQL.
-   **Delegators**: I delegati parteciperanno alla rete supportando i loro indicizzatori preferiti per guadagnare ricompense

## Indicizzatori, consumatori e query

Iniziamo con gli indicizzatori, gli indicizzatori fanno la maggior parte del duro lavoro dietro le quinte. Gestiscono l'hardware, eseguono l'infrastruttura, monitorano le risorse e scelgono i progetti SubQuery giusti da indicizzare

Questo richiede tempo e denaro, ma una volta fatto questo, i Consumatori possono venire a fare richieste. I consumatori faranno richieste al Network di SubQuery per dati specifici e pagheranno una quantità pubblicizzata del nostro token, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

I consumatori faranno richieste al Network di SubQuery per dati specifici e pagheranno una quantità pubblicizzata del nostro token, SQT.

## Funzione di produzione di Cobb-Douglas

Questo pagamento va in un pool di guadagni del progetto e alla fine di un periodo di staking (28 giorni) prendiamo questo pool di guadagni del progetto e lo dividiamo. Viene suddiviso tra gli indicizzatori da una cosa chiamata funzione di produzione di Cobb-Douglas.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

Viene suddiviso tra gli indicizzatori in base a una funzione di produzione chiamata di Cobb-Douglas.

Questo approccio, in termini semplici, significa che i guadagni sono assegnate agli indicizzatori concorrenti in proporzione sia delle richieste risposte che dell'importo messo in staking.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

I guadagni sono assegnate agli indicizzatori concorrenti in proporzione sia alle richieste di risposta che all'importo messo in staking.

Dal nostro punto di vista, la bellezza di questa equazione è che un indicizzatore razionale deve mantenere un alto livello di SQT rispetto al lavoro che fa per ricevere un reddito ottimale. Di conseguenza, non abbiamo bisogno di imporre requisiti di staking arbitrari perché gli indicizzatori sono incentivati ad autogestirsi e a mantenere una quota/la pelle nel gioco.

## Delegatori

Quindi gli indicizzatori sono incentivati sia a fare più lavoro possibile, sia a mettere in staking il più possibile per massimizzare le loro ricompense. È qui che entrano in gioco i delegatori.

I delegatori possono delegare la loro SQT di riserva agli indicizzatori, ogni indicizzatore può pubblicare una _query fee revenue share rate_, e questi delegatori saranno ricompensati con una parte delle entrate della query fee in cui l'indicizzatore è ricompensato.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

I delegatori possono delegare il loro SQT di riserva agli indicizzatori e questi delegatori saranno ricompensati da una parte del ricavo della tassa di interrogazione in cui l'indicizzatore è ricompensato

La _query fee revenue share rate_ che gli indicizzatori pubblicizzano è bloccata per ogni periodo di stakingdi 28 giorni, e una sua diminuzione deve essere pubblicizzata per un intero periodo di staking di 28 giorni prima di entrare in vigore.

Allo stesso modo, i delegatori possono rimuovere i loro importi di delega in qualsiasi momento, ma riceveranno ricompense solo quando avranno delegato per l'intera era di staking.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

I deleganti riceveranno le ricompense solo quando avranno delegato per l'intera era di staking

## Ordini di acquisto

Indicizzare un progetto richiede tempo e denaro, ci sono molti dati sulla catena. Al fine di incoraggiare gli indicizzatori a indicizzare e sostenere un progetto di SubQuery completamente nuovo, abbiamo intenzione di implementare un meccanismo di mercato per i Consumatori per segnalare entrate garantite agli indicizzatori di nuovi progetti di SubQuery.

Li chiameremo ordini di acquisto, e i Consumatori possono pubblicizzare un contratto in catena per un prezzo e un numero di richieste prefissati. Gli indicizzatori possono vederlo e scegliere di confermare i contratti.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

I consumatori possono pubblicizzare un ordine d'acquisto in catena per un prezzo e un numero di richieste prestabiliti.

Gli ordini di acquisto possono anche essere piazzati su progetti SubQuery esistenti per attirare altri indicizzatori per migliorare la concorrenza e diminuire i prezzi