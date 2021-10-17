# SubQuery è appena diventato molto più veloce con il Dizionario

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

Oggi siamo orgogliosi di annunciare il nostro nuovo miglioramento a SubQuery, la funzione di indicizzazione del Dizionario di SubQuery.

Il Dizionario di SubQuery è tutto quello che vi serve per velocizzare i vostri progetti. Migliora drasticamente le prestazioni di indicizzazione del vostro progetto SubQuery, **sometimes up to 10x faster.**

Quando si indicizzano i dati della catena, i progetti SubQuery sono soliti ispezionare ogni blocco. La catena di Polkadot è grande, 130GB di dati non strutturati su quasi 6 milioni di blocchi. Questo richiede molte ore per l'indicizzazione, tempo che non si vuole aspettare - specialmente durante i test.

I progetti SubQuery ora hanno la possibilità di saltare tutto questo, essenzialmente pre-indicizziamo la posizione di tutti gli eventi all'interno di una catena.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Le prestazioni vengono migliorate al massimo quando i dati non sono un evento comune, ma sono invece intervallati lungo la catena, poiché se i dati sono rari, il Dizionario salta più blocchi, e quindi l'impatto sulle prestazioni è maggiore.

Il dizionario degli endpoint può essere aggiunto nel [your ‘project.yaml’ file](https://doc.subquery.network/create/manifest.html), o in alternativa [specified at run time](https://doc.subquery.network/run/run.html#using-a-dictionary). Inoltre, puoi anche sovrascrivere questo endpoint quando esegui il tuo progetto in [SubQuery Projects](https://project.subquery.network/).

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

Puoi leggere di più sul dizionario nella nostra [helpful documentation here](https://doc.subquery.network/run/run.html#using-a-dictionary).

Crediamo che SubQuery sia la migliore opzione di indicizzazione dei dati disponibile per qualsiasi dApp Polkadot/Substrate, e questa nuova implementazione del dizionario di SubQuery ci permette di migliorare ulteriormente il nostro servizio accelerando il processo di indicizzazione per i tuoi progetti SubQuery.

Puoi provarlo tu stesso in [SubQuery Projects](https://project.subquery.network/) o vedere i dizionari stessi in [our explorer](https://explorer.subquery.network/). Per usare un dizionario nel tuo progetto esistente, la tua versione [@subql/cli](https://www.npmjs.com/package/@subql/cli) deve essere almeno 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)