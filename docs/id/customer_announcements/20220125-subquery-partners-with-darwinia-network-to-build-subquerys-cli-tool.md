# SubQuery bermitra dengan Darwinia Network untuk membangun Alat CLI SubQuery

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

Hari ini kami ingin mengumumkan kemitraan kami antara Jaringan Darwinia dan Jaringan SubQuery. Darwinia baru-baru ini memenangkan slot lelang parachain Kusama mereka, dan sedang bersiap untuk mengamankan slot Polkadot mereka. Sebagai bagian dari peta jalan Darwinia untuk membangun hub jembatan lintas chain untuk Polkadot, Darwinia telah bermitra dengan SubQuery untuk membangun sejumlah besar aplikasi yang akan diperlukan untuk memberikan pengalaman pengguna terbaik untuk interaksi lintas chain

Kemitraan kami lebih dari sekadar menggunakan SubQuery untuk mendukung ekosistem aplikasi Darwinia, Darwinia telah bekerja sama dengan tim SubQuery untuk [membangun alat CLI](https://github.com/fewensa/subquery-cli) untuk layanan terkelola SubQuery ([https://project. subquery.network](https://project.subquery.network)). Anda dapat menggunakan [CLI](https://github.com/fewensa/subquery-cli) ini untuk membuat proyek SubQuery dan secara otomatis menerapkan versi baru ke staging atau slot produksi. Selain itu, Anda dapat mengambil informasi termasuk status sinkronisasi terperinci dan log dari proyek Anda yang sedang berjalan yang dihosting secara gratis di Proyek SubQuery. Darwinia telah mengambil ini lebih jauh dan membuat contoh [alur kerja Tindakan GitHub](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) yang menggunakan alat CLI untuk melakukan ini pada setiap push ke cabang utama [repositori](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) mereka. Otomatisasi baru ini adalah contoh yang sangat baik dari hubungan erat antara Darwinia dan SubQuery, dan alat CLI sudah digunakan oleh banyak proyek lain dalam ekosistem besar SubQuery.
> “Alat SubQuery CLI yang kami buat benar-benar membuat jalur pengembangan kami menjadi mudah, sekarang kami dapat sepenuhnya mengelola rilis di cabang dan merasa yakin bahwa perubahan kami akan diterapkan secara otomatis ke layanan yang dihosting SubQuery. Kami sangat bangga dengan proses otomatis kami untuk memeriksa apakah file schema.graphql telah berubah, dan jika demikian, kami akan menerapkan kembali database baru yang bersih” — Yalin, Pengembang Inti — Jaringan Darwinia


Lihat [alat CLI baru di sini](https://github.com/fewensa/subquery-cli) dan lihat [contoh langsungnya di sini](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml).

Aplikasi pertama dari banyak aplikasi di ekosistem aplikasi Darwinia yang sedang berkembang adalah [Aplikasi Wormhole](https://wormhole.darwinia.network/). Wormhole adalah aplikasi yang mudah digunakan yang memudahkan pemindahan aset antar jaringan dan merupakan bagian penting dari strategi chain silang Darwinia. Saat ini jembatan antara Darwinia dan Ethereum sedang beroperasi. [SubQuery digunakan untuk menampilkan transfer dan peristiwa bersejarah](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia) yang telah terjadi di alamat Darwinia/Crab/Trenggiling Anda terkait dengan lubang cacing (mis. kedatangan aset dari jaringan lain).

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

Tim di Darwinia sedang dalam proses membangun [Aplikasi Cerdas baru yang merupakan hub pusat](https://apps.darwinia.network/) untuk mengelola semua interaksi jaringan Darwinia termasuk tata kelola, pertaruhan, eksplorasi chain, dan banyak lagi. Aplikasi ini menggunakan cukup banyak [data SubQuery untuk menampilkan data dan tindakan historis](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery akan bekerja sama dengan tim di Darwinia untuk menjadikan ini sebagai pengalaman pengguna tercepat dan termudah di seluruh ekosistem Polkadot.
> “Kami senang menggunakan SubQuery untuk menggantikan layanan backend kami yang ada untuk Wormhole, dalam jangka panjang dengan Jaringan SubQuery ini akan membuat layanan kami total terdesentralisasi dan open source — ini adalah sesuatu yang kami banggakan!”” — Yalin, Pengembang Inti — Jaringan Darwinia


Selain itu, Darwinia menggunakan SubQuery untuk [menyediakan data di balik](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot) [website Penawaran Pinjaman Parachain](https://darwinia.network/plo_contribute) mereka. Meskipun Kepiting telah memenangkan slot mereka di Kusama, belum terlambat untuk berkontribusi pada kampanye Darwinia untuk slot Polkadot. Mereka juga memanfaatkan SubQuery untuk mengindeks [Rentang Merkle Mountain](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr) untuk semua blok yang dibuat di jaringan mereka.

Darwinia Network menggunakan [Proyek SubQuery](https://project.subquery.network/) untuk mengelola proyek mereka sendiri dan membuat pembaruan sesuai kebutuhan. Layanan pengindeksan dan kueri yang kami sediakan sepenuhnya dikelola oleh SubQuery dan diberikan kepada komunitas Polkadot secara gratis di [Penjelajah SubQuery](https://explorer.subquery.network/).

## Tentang Darwinia Network

Darwinia Network adalah bangunan jaringan jembatan lintas chain terdesentralisasi di Substrat, yang merupakan “Jembatan Gerbang Emas” ekologi lintas chain. Ini memberikan solusi jembatan umum teraman, menghubungkan Polkadot, Ethereum, BSC dan chain heterogen lainnya dengan transfer aset lintas-rantai dan panggilan chain jarak jauh umum. Juga, area aplikasi utamanya termasuk Defi, pasar perdagangan NFT lintas chain, game, dll.

[Website](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## Tentang SubQuery Network

[SubQuery](https://subquery.network/) adalah agregasi data terdesentralisasi, pengindeksan & lapisan kueri antara blockchain Layer-1 dan aplikasi terdesentralisasi (DApps). Saat ini berfokus pada proyek Polkadot dan Substrat, data sebagai layanan ini memungkinkan pengembang untuk fokus pada kasus penggunaan inti dan front

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
