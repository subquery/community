![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)


Oggi siamo orgogliosi di annunciare il nostro nuovo miglioramento per SubQuery, la funzione di indicizzazione del dizionario di SubQuery.

Il Dizionario di SubQuery riguarda l'accelerazione dei tuoi progetti. Migliora drasticamente l'indicizzazione delle prestazioni del tuo Progetto SubQuery **a volte fino a 10x più velocemente.**

Quando si indicizzano i dati della catena, i Progetti di SubQuery utilizzati per ispezionare ogni blocco. La catena di Polkadot è grande, 130GB di dati non strutturati su quasi 6 milioni di blocchi. Questo richiede molte ore per indicizzare, il tempo che non si desidera aspettare — soprattutto durante il test.

I progetti di SubQuery ora hanno la possibilità di saltare tutto questo, essenzialmente pre-indicizzare la posizione di tutti gli eventi all'interno di una catena.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Le prestazioni sono migliorate il più quando i dati non sono un evento comune, ma invece si intersecano lungo la catena, come se i dati sono rari, il Dizionario salta più blocchi, e quindi l'impatto sulle prestazioni è maggiore.

Il Dictionary endpoint può essere aggiunto in [il tuo file 'project.yaml'](https://doc.subquery.network/create/manifest.html), o in alternativa [specificato al tempo di esecuzione](https://doc.subquery.network/run/run.html#using-a-dictionary). Inoltre, puoi anche sovrascrivere questo endpoint quando esegui il tuo progetto in [Progetti di SubQuery](https://project.subquery.network/).

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

Puoi leggere di più sul dizionario nella nostra [documentazione utile qui](https://doc.subquery.network/run/run.html#using-a-dictionary).

Crediamo che SubQuery sia la migliore opzione di indicizzazione dei dati disponibile per qualsiasi Polkadot/Substrate dApp, e questa nuova implementazione del Dizionario di SubQuery ci permette di migliorare ulteriormente il nostro servizio accelerando il processo di indicizzazione per i tuoi Progetti di SubQuery .

Puoi provare tu stesso in [Progetti di SubQuery](https://project.subquery.network/) o vedere i dizionari stessi in [il nostro esploratore](https://explorer.subquery.network/). Per poter utilizzare un Dizionario nel tuo progetto esistente, la versione [@subql/cli](https://www.npmjs.com/package/@subql/cli) deve essere almeno 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)