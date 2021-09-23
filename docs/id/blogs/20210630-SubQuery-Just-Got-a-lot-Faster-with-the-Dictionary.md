# SubQuery Menjadi Lebih Cepat dengan Dictionary

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

Hari ini kami dengan bangga mengumumkan peningkatan baru kami pada SubQuery, fitur pengindeksan Dictionary SubQuery.

The SubQuery Dictionary is all about speeding up your Projects. It dramatically improves indexing the performance of your SubQuery Project, **sometimes up to 10x faster.**

When indexing chain data, SubQuery Projects used to inspect each block. Polkadot’s chain is large, 130GB of unstructured data over almost 6 million blocks. This takes many hours to index, time that you don’t want to wait for — especially when testing.

Proyek SubQuery sekarang memiliki opsi untuk melewati semua ini, kami pada dasarnya melakukan pra-indeks lokasi semua event dalam sebuah chain.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Kinerja paling meningkat adalah ketika datanya merupakan data yang cukup jarang terjadi, melainkan diselingi sepanjang chain, seolah-olah data itu langka, Dictionary melompati lebih banyak blok, oleh karena itu dampak pada kinerja lebih besar.

The Dictionary endpoint can be added in [your ‘project.yaml’ file](https://doc.subquery.network/create/manifest.html), or alternatively [specified at run time](https://doc.subquery.network/run/run.html#using-a-dictionary). Additionally, you can also override this endpoint when running your Project in [SubQuery Projects](https://project.subquery.network/).

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

Anda dapat membaca lebih lanjut tentang dictionary di [dokumentasi kami di sini](https://doc.subquery.network/run/run.html#using-a-dictionary).

Kami percaya SubQuery adalah opsi pengindeksan data terbaik yang tersedia untuk setiap Polkadot/Substrate dApp, dan implementasi baru dari Dictionary SubQuery ini memungkinkan kami untuk lebih meningkatkan layanan kami dengan mempercepat proses pengindeksan untuk Proyek SubQuery Anda.

You can try it yourself in [SubQuery Projects](https://project.subquery.network/) or view the dictionaries themselves in [our explorer](https://explorer.subquery.network/). In order to use a Dictionary in your existing project, your [@subql/cli](https://www.npmjs.com/package/@subql/cli) version must be at least 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)