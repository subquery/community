# Deployment Slot ada di sini untuk Proyek SubQuery

> Hari ini kami memperkenalkan deployment slots, fitur baru yang meningkatkan pengalaman developer dalam layanan yang dihosting SubQuery.

[Proyek SubQuery](https://project.subquery.network/) sudah digunakan sebagai layanan hosted dan terkelola untuk banyak Proyek, baik itu chain explorer, wallet, NFT explorer, atau lainnya. Ini adalah layanan yang diandalkan oleh pelanggan kami.

![](https://miro.medium.com/max/1400/0*PugDgh6weZspRIO2)

Anda sekarang dapat mendeploy ke isolated staging slot

Meskipun Anda selalu dapat menjalankan infrastruktur SubQuery sendiri (dengan node dan layanan kueri Anda sendiri), kami bertujuan untuk menjadikan layanan hosted sebagai penyedia data yang paling andal, tangguh, dan berkinerja terbaik di ekosistem Polkadot/Substrate.

Pembuat [Proyek SubQuery](https://project.subquery.network/) terus meningkatkan dan memperbarui Proyek mereka dan data dalam proyek tersebut. Sayangnya, perlu waktu berjam-jam bahkan berhari-hari untuk mengindeks ulang data chain jika terjadi perubahan besar — pada akhirnya tujuan kami adalah memungkinkan Anda memperbarui Proyek, mengindeks ulang data, dan meningkatkan Proyek SubQuery yang dihosting dengan **zero downtime**

**Itulah mengapa deployment slots hadir untuk memecahkan masalah ini**

![](https://miro.medium.com/max/1400/0*vQ33aqhn1eVllo5t)

Staging slot anda akan berjalan secara independen dari production slot utama

Saat membuat deployment baru ke [Proyek SubQuery di layanan hosted kami](https://project.subquery.network/), Anda dapat memilih untuk menerapkan ke slot produksi atau staging. Kedua slot ini adalah environment yang terisolasi, masing-masing memiliki database sendiri dan disinkronkan secara independen. Setelah slot staging Anda telah berjalan dan menyelesaikan pengindeksan, Anda kemudian dapat mempromosikannya ke produksi tanpa downtime.

Slot staging sangat cocok untuk:

-   Memvalidasi perubahan pada Proyek SubQuery Anda di environment yang terpisah. Slot staging memiliki URL berbeda untuk produksi yang dapat Anda gunakan di dApps Anda.
-   Pemanasan dan pengindeksan data untuk proyek SubQuery yang diperbarui untuk mengeliminasi downtime di dApp Anda
-   Mempersiapkan rilis baru untuk Proyek SubQuery Anda tanpa mengeksposnya secara publik. Slot pementasan tidak ditampilkan kepada publik di Explorer dan memiliki URL unik yang hanya dapat dilihat oleh Anda.

Anda dapat mencobanya sendiri sekarang di [Proyek SubQuery](https://project.subquery.network/).