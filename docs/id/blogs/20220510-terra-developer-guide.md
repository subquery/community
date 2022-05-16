# Panduan Orientasi SubQuery Terra

![](https://miro.medium.com/max/1400/1*DiTE9KuzH0xHLojzGWxOuw.png)

Selama beberapa waktu kami telah mengembangkan dan menyempurnakan dukungan Terra di belakang layar dan mengujinya dengan mitra peluncuran pengembangan utama (perhatikan pengumuman dalam beberapa hari mendatang). Periode yang berkepanjangan ini memungkinkan kami untuk menjadi sangat percaya diri dalam skalabilitas, keandalan, dan fitur yang dibawa SubQuery hari ini ke Terra. Dalam artikel ini kami membagikan panduan pengembang dan peta jalan terperinci untuk semua komunitas Terra yang digunakan untuk menyelesaikan kebutuhan pengindeksan data mereka.

SubQuery adalah pengindeks data terbuka yang fleksibel dan cepat. Alat pengindeksan terbuka kami dirancang untuk membantu pengembang membangun API mereka sendiri dalam hitungan jam, dan dirancang untuk mengindeks rantai dengan sangat cepat dengan bantuan kamus (indeks yang telah dihitung sebelumnya). Pengalaman kami dengan pelanggan di semua vertikal di Polkadot (wallet, jaringan, penjelajah, NFT, DeFi, pemindai, dll) telah membantu kami membangun ini.

Ini masih dalam versi awal, dan sementara kami menganggap jauh melampaui "beta", kami akan sangat menghargai jika ada bug yang dapat dilaporkan ke tim kami sehingga kami dapat mengatasinya dengan cepat.

<iframe width="656" height="369" src="https://www.youtube.com/embed/dS7h3isQCeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Mengapa Menggunakan SubQuery?

Ekosistem aplikasi telah berkembang pesat di Terra meskipun ada kekurangan yang serius dari beberapa alat pengembang utama dan layanan infrastruktur. Sungguh menakjubkan untuk dilihat, dan merupakan bukti dorongan dan kecerdikan orang-orang di Terra. Saya kebanyakan kasus ketika kami bertanya kepada tim bagaimana mereka memecahkan kebutuhan pengindeksan data mereka, itu adalah:

- **Buat solusi Anda sendiri:** Penerapan kustom yang berjalan sendiri yang dibuat khusus untuk aplikasi Anda. Tapi mengapa menemukan kembali roda? SubQuery berfokus pada pembuatan pengindeks terbuka yang andal dan cepat - kami di sini untuk menghemat waktu Anda
- **Merancang smart contract untuk kueri:** Beberapa tim bahkan menerapkan kebiasaan khusus dalam kontrak cerdas mereka untuk secara khusus memungkinkan kueri lanjutan khusus untuk logika aplikasi mereka.

Di SubQuery, kami memiliki SDK sumber terbuka yang mudah digunakan dan secepat kilat. Ini memberi Anda titik akhir GraphQL standar, atau Anda bisa langsung menanyakan database postgres. Dengannya, Anda dapat mengindeks kumpulan data unik dari smart contract Anda sendiri yang memungkinkan Anda membangun produk unggulan yang mengalahkan pesaing Anda! Kami memberi Anda fleksibilitas untuk mendapatkan data yang Anda butuhkan dalam bentuk yang paling sesuai untuk Anda.

Keandalan adalah kuncinya, dan Anda memerlukan platform yang andal dan skalabel untuk menampungnya. [Layanan terkelola SubQuery](https://subquery.network/managedservices) adalah solusi hosting terdepan di industri untuk semua pelanggan yang melayani ratusan juta permintaan harian ke proyek terbesar di Polkadot. Kami menyediakan [pelanggan tingkat perusahaan](./20211228-enterprise-hosted.md) layanan seperti database khusus, cluster redundan, perutean multi-cluster yang cerdas, serta pemantauan dan analitik lanjutan. Ini akan mendukung aplikasi Anda saat Anda siap dan akan menskalakan bersama Anda.

Dan terakhir, dalam beberapa bulan Anda akan dapat mendesentralisasikan infrastruktur SubQuery Anda sepenuhnya dengan Jaringan SubQuery, infrastruktur Web3 masa depan. Jaringan SubQuery akan mengindeks dan melayani data proyek Anda ke komunitas global dengan cara yang berinsentif dan dapat diverifikasi. Ini dirancang untuk mendukung proyek SubQuery apa pun dari jaringan layer-1 mana pun termasuk Terra, sehingga Anda dapat memanfaatkan skala Jaringan SubQuery terpadu sejak peluncuran.

## Instruksi instalasi

Pertama-tama Anda harus menginstal @subql/cli versi terbaru melalui npm i -g @subql/cli@latest

Cara terbaik adalah memulai dengan [proyek awal kami](https://github.com/subquery/terra-subql-starter), yang berisi proyek yang sedang berjalan dengan contoh semua fungsi pemetaan: Proyek ini mengindeks yang berikut:

- **BlockHandler:** Semua blok beserta hash dan tingginya
- **TransactionHandler:** Semua transaksi dan hash, tinggi, dan stempel waktunya
- **EventHandler:** Semua peristiwa transfer kontrak pintar dan hash, tinggi, pengirim, penerima, dan jumlahnya dari alamat kontrak pintar yang difilter (bLuna)
- **MessageHandler:** Semua pesan kontrak cerdas dan hash, tinggi, kontrak, pengirim, dan data execution_msg dari alamat kontrak cerdas yang difilter (bLuna)

SubQuery mendukung pengindeksan smart contract Terra dengan langganan dan penangan transaksi dan pesan. Anda dapat melihat contoh kerja dukungan smart contract di [proyek pemula](https://github.com/subquery/terra-subql-starter) dan membaca dokumentasi di [Universitas SubQuery](http://localhost:8080/build/manifest.html#mapping-handlers-and-filters).

Implementasi Terra SubQuery telah dirancang untuk beroperasi hampir identik dengan dukungan Polkadot SubQuery, dan dengan cara yang mirip dengan pendekatan Graph. Kami telah memperbarui [Universitas SubQuery](https://university.subquery.network/) untuk menambahkan informasi khusus Terra ke dokumentasi SubQuery umum. Anda dapat memulai dengan mengikuti [panduan memulai yang sangat baik di sini](http://university.subquery.network/quickstart/quickstart-terra.html).

## Menerapkan Proyek Anda ke Layanan Terkelola SubQuery

Meskipun Anda selalu dapat menjalankan project di infrastruktur Anda sendiri dengan mudah, [layanan terkelola SubQuery](https://subquery.network/managedservices) kini mendukung project Terra. Beberapa proyek terbesar bergantung pada layanan terkelola [tingkat perusahaan](./20211228-enterprise-hosted.md) SubQuery dan sekarang Anda juga bisa melakukannya. Sebagai bagian dari perjanjian mitra peluncuran kami, kami memberi Anda hosting gratis selama 3 bulan.

Anda dapat [mengikuti panduan di sini](https://university.subquery.network/run_publish/publish.html) untuk memublikasikan proyek Terra SubQuery Anda ke layanan terkelola kami. Perhatikan bahwa Anda harus menghosting [proyek SubQuery menggunakan IPFS](https://university.subquery.network/run_publish/publish.html) bukan GitHub.

Anda dapat memperbarui proyek layanan terkelola sebanyak yang Anda inginkan. Kami bahkan memiliki [slot penerapan staging](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md) untuk memungkinkan Anda melakukan upgrade biru/hijau tanpa hambatan tanpa waktu henti. Slot pementasan ini juga dapat digunakan untuk menjalankan instance SubQuery yang bersih dengan database baru untuk pengindeksan ulang latar belakang lengkap proyek Anda. Pelanggan biasanya menautkan slot staging ke versi staging/pengembangan aplikasi mereka.

Setelah diterapkan, Anda dapat mengakses proyek Anda menggunakan SubQuery Explorer, dan membuat permintaan langsung dari aplikasi Anda ke titik akhir GraphQL yang disediakan. Beri tahu kami jika Anda ingin kami mengaktifkan fitur yang lebih canggih seperti [langganan GraphQL](https://university.subquery.network/run_publish/subscription.html), kueri yang lebih kompleks, dan [fungsi agregasi](https://university.subquery.network/run_publish/aggregate.html).

Harap beri tahu kami setelah Anda menerapkan proyek Anda karena kami mungkin perlu membantu menyesuaikan ukuran batch untuk memastikan node arsip Terra kami berjalan dengan baik untuk proyek Anda.

## Dukungan SubQuery untuk Terra

Hari ini kami membagikan yang berikut:

-   Pengindeksan lanjutan dari blok, acara
-   Terra Dictionary: Indeks yang telah dihitung sebelumnya untuk [mengurangi waktu pengindeksan secara drastis](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
-   Dukungan penuh untuk Terra di [tingkat perusahaan](./20211228-enterprise-hosted.md) layanan terkelola gratis kami
-   Dokumentasi intuitif di [Universitas SubQuery](https://university.subquery.network/)

Dalam beberapa minggu mendatang Anda dapat mengharapkan:

-   Kursus pembelajaran langkah demi langkah di [Akademi SubQuery](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   Dukungan penuh untuk Terra di Jaringan SubQuery terdesentralisasi kami (Anda akan segera melihat proyek di jaringan uji Frontier kami saat ini)

---

Peluncuran dukungan beta kami untuk Terra menandai tonggak penting dalam komitmen kami untuk menawarkan alat pengindeksan yang disempurnakan bagi komunitas Terra untuk memungkinkan pengembangnya melangkah lebih jauh, lebih cepat. Kami sangat ingin mendapatkan umpan balik dari komunitas untuk meningkatkan penawaran kami dan meningkatkan visibilitas kami sebagai mitra infrastruktur tepercaya untuk salah satu komunitas pengembang dengan pertumbuhan tercepat di Web3

James Bayly

## Link

-   [Panduan Memulai](https://university.subquery.network/quickstart/quickstart-terra.html)
-   [SubQuery University (Documentasi)](https://university.subquery.network/)
-   [Contoh Proyek Terra](https://github.com/subquery/terra-subql-starter)
-   [Layanan Terkelola](https://explorer.subquery.network/)
-   [Publikasikan Proyek Terra Anda sendiri ke Layanan Terkelola](https://project.subquery.network/)

## Tentang SubQuery

[SubQuery](https://subquery.network/) adalah toolkit pengembang blockchain yang memungkinkan orang lain membangun aplikasi Web3 di masa depan. Proyek SubQuery adalah API lengkap untuk mengatur dan mengkueri data dari chain layer-1. Saat ini melayani proyek Polkadot, Substrat, Longsor, dan sekarang Terra, data sebagai layanan ini memungkinkan pengembang untuk fokus pada kasus penggunaan inti dan front-end mereka, tanpa perlu membuang waktu untuk membangun backend khusus untuk pemrosesan data. Jaringan SubQuery mengusulkan untuk mengaktifkan solusi skalabel dan andal yang sama ini, tetapi dengan cara yang sepenuhnya terdesentralisasi.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
