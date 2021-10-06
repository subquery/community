# SubQuery Menjadi Lebih Cepat dengan Dictionary

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

Hari ini kami dengan bangga mengumumkan peningkatan baru kami pada SubQuery, fitur pengindeksan Dictionary SubQuery.

Dictionary SubQuery adalah tentang mempercepat Proyek Anda. Ini secara dramatis meningkatkan pengindeksan kinerja Proyek SubQuery Anda, **terkadang hingga 10x lebih cepat.**

Saat mengindeks data chain, Proyek SubQuery digunakan untuk memeriksa setiap blok. Chain Polkadot itu besar, 130GB data tidak terstruktur di hampir 6 juta blok. Ini membutuhkan waktu berjam-jam untuk diindeks, waktu yang tidak ingin Anda tunggu — terutama saat pengujian.

Proyek SubQuery sekarang memiliki opsi untuk melewati semua ini, kami pada dasarnya melakukan pra-indeks lokasi semua event dalam sebuah chain.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Kinerja paling meningkat adalah ketika datanya merupakan data yang cukup jarang terjadi, melainkan diselingi sepanjang chain, seolah-olah data itu langka, Dictionary melompati lebih banyak blok, oleh karena itu dampak pada kinerja lebih besar.

Endpoint Dictionary dapat ditambahkan di [file 'project.yaml' Anda](https://doc.subquery.network/create/manifest.html), atau sebagai alternatif [ditentukan pada waktu proses](https://doc.subquery.network/run/run.html#using-a-dictionary). Selain itu, Anda juga dapat mengganti endpoint ini saat menjalankan Proyek Anda di [SubQuery Projects](https://project.subquery.network/).

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

Anda dapat membaca lebih lanjut tentang dictionary di [dokumentasi kami di sini](https://doc.subquery.network/run/run.html#using-a-dictionary).

Kami percaya SubQuery adalah opsi pengindeksan data terbaik yang tersedia untuk setiap Polkadot/Substrate dApp, dan implementasi baru dari Dictionary SubQuery ini memungkinkan kami untuk lebih meningkatkan layanan kami dengan mempercepat proses pengindeksan untuk Proyek SubQuery Anda.

Anda dapat mencobanya sendiri di [Proyek SubQuery](https://project.subquery.network/) atau melihat dictionary sendiri di [explorer kami](https://explorer.subquery.network/). Untuk menggunakan Dictionary di proyek Anda yang sudah ada, [@subql/cli](https://www.npmjs.com/package/@subql/cli) Anda setidaknya harus versi 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)