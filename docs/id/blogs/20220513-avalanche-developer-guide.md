# Beta Dukungan SubQuery Dirilis Untuk Avalanche

![](https://miro.medium.com/max/1400/1*BiJaESR69-vDimBJmXhQvw.png)

Hari ini, setelah berbulan-bulan peningkatan, pemfaktoran ulang, dan pengujian, kami dengan senang hati membagikan dukungan beta dari solusi pengindeksan terbuka kami dengan komunitas Avalanche. Setelah menetapkan SubQuery sebagai pengindeks data terkemuka di Polkadot, [pengumuman baru-baru ini tentang ekspansi kami ke Avalanche](./20220321-avalache.md) selama [Avalanche Summit](https://www.avalanchesummit.com/agenda) baru-baru ini disambut dengan antusias oleh para developer yang menginginkan sistem yang fleksibel dan skalabel alat pengindeksan.

Ikuti panduan beta di sini: https://university.subquery.network/quickstart/quickstart-avalanche.html

SubQuery adalah pengindeks data terbuka yang fleksibel dan cepat. Alat pengindeksan terbuka kami dirancang untuk membantu pengembang membangun API mereka sendiri dalam hitungan jam, dan dirancang untuk mengindeks rantai dengan sangat cepat dengan bantuan kamus (indeks yang telah dihitung sebelumnya). Pengalaman kami dengan pelanggan di semua vertikal di Polkadot (wallet, jaringan, penjelajah, NFT, DeFi, pemindai, dll) telah membantu kami membangun ini.

Mulai hari ini, pengembang Avalanche akan dapat mengakses versi beta dari solusi pengindeksan cepat, fleksibel, dan terbuka yang sama yang banyak digunakan di seluruh Polkadot. Karena ini adalah versi beta, kemungkinan ada beberapa masalah. Karena itu, kami akan sangat menghargai jika ada bug yang dapat dilaporkan ke tim kami sehingga kami dapat mengatasinya dengan cepat.

## Mengapa Menggunakan SubQuery?

_Sudah ada beberapa opsi lain di sini di Avalanche, jadi mengapa Anda membangun dengan SubQuery?_

Saya ditanya pertanyaan ini oleh banyak dari Anda bahwa saya cukup beruntung untuk bertemu di Avalanche Summit. Di ruang kami umumnya ada tiga solusi lain:

- Buat solusi Anda sendiri: Mengapa menemukan kembali putaran? SubQuery berfokus pada membangun pengindeks terbuka yang andal dan cepat --- kami di sini untuk menghemat waktu Anda
- Layanan data standar atau "API terpadu": Penyedia ini sangat baik jika Anda membuat aplikasi yang sama pada smart contract dasar yang sama seperti orang lain, tetapi tidak. Anda memerlukan kumpulan data unik yang memungkinkan Anda membangun produk unggulan yang membuat pesaing Anda keluar dari air! Anda memerlukan fleksibilitas untuk mendapatkan data yang Anda butuhkan dalam bentuk yang paling sesuai untuk Anda
- Layanan data GraphQL terbuka lainnya: Setiap orang yang sudah menggunakannya mengungkapkan masalah yang sama, ada kekurangan dukungan pengembang yang serius dan beberapa masalah kinerja yang signifikan. Selain itu, hanya ada cakupan pada kontrak chain tanpa rencana untuk memperluas ke subnet Anda berikutnya

Di SubQuery, kami memiliki SDK sumber terbuka yang mudah digunakan dan secepat kilat. Ini memberi Anda titik akhir GraphQL standar, atau Anda bisa langsung menanyakan database postgres.

Keandalan adalah kuncinya, dan Anda memerlukan platform yang andal dan skalabel untuk menampungnya. [Layanan terkelola SubQuery](https://subquery.network/managedservices) adalah solusi hosting terdepan di industri untuk semua pelanggan yang melayani ratusan juta permintaan harian ke proyek terbesar di Polkadot. Kami menyediakan [pelanggan tingkat perusahaan](./20211228-enterprise-hosted.md) layanan seperti database khusus, cluster redundan, perutean multi-cluster yang cerdas, serta pemantauan dan analitik lanjutan. Ini akan mendukung aplikasi Anda saat Anda siap dan akan menskalakan bersama Anda.

Dan terakhir, dalam beberapa bulan Anda akan dapat mendesentralisasikan infrastruktur SubQuery Anda sepenuhnya dengan Jaringan SubQuery, infrastruktur Web3 masa depan. Jaringan SubQuery akan mengindeks dan melayani data proyek Anda ke komunitas global dengan cara yang berinsentif dan dapat diverifikasi. Ini dirancang untuk mendukung proyek SubQuery apa pun dari jaringan layer-1 mana pun termasuk Avalanche, sehingga Anda dapat memanfaatkan skala Jaringan SubQuery terpadu sejak peluncuran.

## Instruksi instalasi

Ikuti panduan beta di sini: https://university.subquery.network/quickstart/quickstart-avalanche.html

Anda harus menginstal @subql/cli terlebih dahulu melalui *npm i -g @subql/cli*

Cara terbaik adalah memulai dengan proyek awal kami, yang berisi proyek yang sedang berjalan dengan contoh semua fungsi pemetaan: https://github.com/subquery/avalanche-subql-starter. Project ini mengindeks hal berikut dari [Smart Contract Trenggiling](https://snowtrace.io/token/0x60781c2586d68229fde47564546784ab3faca982):

- BlockHandler: Semua blok dan informasi intinya
- TransactionHandler: Semua transaksi dari fungsi persetujuan dalam smart contract Pangolin
- EventHandler: Semua acara transfer dari smart contract Pangolin

Implementasi Avalanche SubQuery telah dirancang untuk beroperasi hampir identik dengan dukungan Polkadot SubQuery, dan dengan cara yang mirip dengan pendekatan Graph. Kami telah memperbarui [Universitas SubQuery](https://university.subquery.network/build/introduction.html) untuk menambahkan informasi khusus Avalanche ke dokumentasi SubQuery umum. Anda dapat memulai dengan mengikuti [panduan memulai yang sangat baik di sini](https://university.subquery.network/quickstart/quickstart-avalanche.html).

## Dukungan SubQuery untuk Avalanche

Kami sedang menyelesaikan fase pertama dari dukungan penuh kami untuk ekosistem Avalanche.

![](https://miro.medium.com/max/1400/0*GUKZJfJCz1nB_3zc)

Hari ini kami membagikan yang berikut:

- Pengindeksan chain Kontrak Tingkat Lanjut
- Avalanche Dictionary: Indeks yang telah dihitung sebelumnya untuk [mengurangi waktu pengindeksan secara drastis](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
- Dukungan penuh untuk Avalanche di layanan terkelola [tingkat perusahaan](./20211228-enterprise-hosted.md) gratis kami
- Dokumentasi intuitif di [Universitas SubQuery](https://university.subquery.network/)

Dalam beberapa minggu mendatang Anda dapat mengharapkan:

- Kursus pembelajaran langkah demi langkah di [Akademi SubQuery](./20211018-subquery-launches-the-subquery-academy.md)
- Dukungan penuh untuk Avalanche di Jaringan SubQuery terdesentralisasi kami (Anda akan melihat proyek di jaringan uji Frontier kami saat ini)

Dengan jumlah Subnet yang direncanakan selama beberapa bulan mendatang, akan ada kebutuhan besar akan dukungan pengindeksan yang cepat, terbuka, dan fleksibel yang berfungsi di semua Subnet yang kompatibel. Kami memiliki pengalaman menerapkan tingkat konfigurabilitas ini untuk parachain Polkadot, dan sedang menyelidiki bagaimana memberikan hasil yang sama untuk Avalanche (mis. dengan mengimpor implementasi kustom dari snowman.Block, dll.).

Peluncuran dukungan beta kami untuk Avalanche menandai tonggak penting dalam komitmen kami untuk menawarkan alat pengindeksan yang ditingkatkan untuk komunitas Avalanche untuk memungkinkan pengembangnya melangkah lebih jauh, lebih cepat. Kami sangat ingin mendapatkan umpan balik dari komunitas untuk meningkatkan penawaran kami dan meningkatkan visibilitas kami sebagai mitra infrastruktur tepercaya untuk salah satu komunitas pengembang dengan pertumbuhan tercepat di Web3

Kami sekarang mencari mitra peluncuran yang dapat kami dukung erat saat mereka mengembangkan proyek SubQuery pertama mereka di ekosistem ini. Hubungi saya di james.bayly@subquery.network jika Anda ingin menjadi yang pertama dalam perjalanan bersama kami.

_James Bayly_

Ikuti panduan beta di sini: https://university.subquery.network/quickstart/quickstart-avalanche.html

## Tentang SubQuery

[SubQuery](https://subquery.network/) adalah toolkit pengembang blockchain yang memungkinkan orang lain membangun aplikasi Web3 di masa depan. Proyek SubQuery adalah API lengkap untuk mengatur dan mengkueri data dari layer -1 rantai. Saat ini melayani proyek Polkadot, Substrate, Avalanche, dan Terra, data sebagai layanan ini memungkinkan pengembang untuk fokus pada kasus penggunaan inti dan front-end mereka, tanpa perlu membuang waktu untuk membangun backend khusus untuk pemrosesan data. Jaringan SubQuery mengusulkan untuk mengaktifkan solusi skalabel dan andal yang sama ini, tetapi dengan cara yang sepenuhnya terdesentralisasi.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
