
> Come funziona la SubQuery Network? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)

Oggi parleremo di come funziona la rete di SubQuery ad alto livello.

## Partecipanti


![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Partecipanti alla rete di Subquery

Ci sono tre tipi di partecipanti alla rete di SubQuery :

-   **Consumatori**: I consumatori faranno richieste alla rete di SubQuery per dati specifici e pagheranno una quantità pubblicizzata di SQT
-   **Indicizzatori**: Gli indicizzatori ospiteranno i Progetti di SubQuery nella propria infrastruttura, eseguire sia il servizio di nodi e query per indicizzare i dati e rispondere alle richieste di GraphQL.
-   **Delegatori**: I delegati parteciperanno alla rete supportando gli indicizzatori preferiti per guadagnare premi

## Indicizzatori, consumatori e query

Cominciamo con gli indicatori, gli indicizzatori fanno un sacco di duro lavoro dietro le quinte. La gestione dell'hardware, eseguire l'infrastruttura, monitorare le risorse e scegliere i progetti SubQuery giusti per indicizzare

Questo richiede tempo e denaro, ma una volta che hanno questo, i consumatori possono venire a fare richieste. I consumatori faranno richieste alla rete di SubQuery per dati specifici e pagheranno un importo pubblicizzato del nostro token, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

I consumatori faranno richieste alla rete di SubQuery per dati specifici e pagheranno un importo pubblicizzato del nostro token, SQT.

## Funzione Di Produzione Cobb-Douglas

Questo pagamento va in un pool di entrate del progetto e alla fine di un'era di staking (28 giorni) prendiamo questo pool di entrate del progetto e lo dividiamo. E 'sputato attraverso gli indicizzatori da qualcosa chiamato la funzione di produzione Cobb-Douglas.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

E 'sputato attraverso gli indicizzatori da qualcosa chiamato la funzione di produzione Cobb-Douglas.

Questo approccio, in termini semplici, significa che le entrate sono assegnate agli indicizzatori concorrenti in proporzione sia alle domande risposte che all'importo in questione.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Le entrate sono assegnate agli indicizzatori concorrenti in proporzione sia alle richieste che all’importo in questione.

A nostro avviso, la bellezza di questa equazione è che un Indicizzatore razionale deve mantenere un alto livello di SQT in gioco rispetto al lavoro che fanno per ricevere un reddito ottimale. Di conseguenza, non abbiamo bisogno di imporre requisiti arbitrari di staking perché gli indicizzatori sono incentivati a auto-gestire e mantenere una puntata o una pelle nel gioco.

## Delegatori

Quindi gli indicizzatori sono incentivati a fare il più possibile il lavoro possibile, e a puntare il più possibile per massimizzare i loro premi. È qui che entrano in gioco i delegati.

I delegati possono delegare il proprio SQT di riserva agli indicatori, ogni indicizzatore può pubblicare un _Query fee revenue rate_, e quei delegati saranno ricompensati da una parte del fatturato della tassa di query in cui l'indicizzatore è ricompensato.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

I delegati possono delegare il loro SQT di riserva agli indicizzatori e tali delegati saranno ricompensati da una parte dei ricavi della commissione di query in cui l'indicizzatore è ricompensato

Il _Query fee revenue rate_ che gli indicizzatori pubblicizzano è bloccato per ogni 28 giorni di staking era, e una diminuzione ad esso deve essere pubblicizzato per un intero periodo di 28 giorni di staking prima di entrare in vigore.

Allo stesso modo, i delegati possono rimuovere i loro importi di delega in qualsiasi momento, ma riceveranno premi solo quando avranno delegato per l'intera era di staking.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

I delegati riceveranno ricompense solo quando avranno delegato per l'intera era dello staking

## Ordini Di Acquisto

Indicizzare un progetto richiede tempo e denaro, ci sono molti dati sulla catena. Al fine di incoraggiare gli indicizzatori a indicizzare e supportare un progetto SubQuery completamente nuovo, abbiamo in programma di implementare un meccanismo di mercato per i Consumatori per segnalare entrate garantite agli indicizzatori di nuovi progetti di SubQuery .

Stiamo chiamando loro ordini di acquisto, e i consumatori possono pubblicizzare un contratto sulla catena per un determinato prezzo e numero di richieste. Gli indicizzatori possono visualizzare questo e scegliere di riempire i contratti.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

I consumatori possono pubblicizzare un ordine di acquisto sulla catena per un determinato prezzo e numero di richieste.

Gli ordini di acquisto possono anche essere immessi su progetti di SubQuery esistenti per attrarre ulteriori indicizzatori per migliorare la concorrenza e diminuire i prezzi