# SubQuery Meluncurkan Roadmap Teknikal

![](https://cdn-images-1.medium.com/max/800/1*Qcu5mFIs8eJhAXaMpWOlMQ.png)

**SubQuery mengumumkan pencapaian utama termasuk timeline TGE**

Hari ini kami dengan senang hati merilis roadmap teknis terperinci kami untuk pertama kalinya. Tujuan SubQuery adalah menjadi penyedia data terkemuka di ekosistem Polkadot dan dukungan yang kami dapatkan dari komunitas dalam membantu kami mewujudkan visi ini luar biasa. Dari pendirian resmi kami pada akhir tahun 2020 melalui [Web3 Grant](https://web3.foundation/), hingga merilis versi open source pertama kami pada Januari 2021, dan [menutup Seri A kami pada bulan September](https://subquery.medium.com/series-a-1abed6c1c2af), kami ingin berterima kasih atas semua dukungan Anda dalam membawa kami ke tahap ini!

Saat kami terus mendapatkan momentum, saatnya telah tiba untuk berbagi lebih banyak tentang rencana kami untuk masa depan termasuk roadmap teknis kami. Kami sangat senang tentang bagaimana evolusi SubQuery berikutnya akan mendorong nilai lebih bagi ekosistem Polkadot dan memberikan lebih banyak peluang bagi komunitas kami untuk berpartisipasi dalam pertumbuhan kami.

## Masa depan kita

Disaat SubQuery sudah melayani jutaan kueri data setiap hari ke [lebih dari 60 proyek di Polkadot & Kusama](https://project.subquery.network/), kami ingin memastikan bahwa fase pertumbuhan kami berikutnya dilakukan secara terorganisir dan terkendali.

Karena alasan ini, kami merasa sangat penting untuk mendemonstrasikan dan menguji skalabilitas Jaringan SubQuery melalui program testnet yang diberi insentif. Proses ini juga akan memungkinkan kami untuk membentuk komunitas pengindeks sebelum diluncurkan secara publik melalui TGE pada Maret 2022 dan mainnet kami pada akhir tahun depan.

![](https://miro.medium.com/max/2400/1*I6mko5xumHAArzGePvEZiQ.jpeg)

Dengan demikian, hasil utama dalam alur kerja kami dapat dipecah menjadi tonggak utama berikut.

## Di mana kita sekarang — Pertengahan Q4 2021

### Dukungan EVM untuk parachains

Kami akan segera merilis [dukungan beta kami untuk implementasi Polkadot dari Ethereum Virtual Machine (EVM)](https://medium.com/@subquery/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff). Ini memungkinkan pengembang Polkadot dan Ethereum untuk mengintegrasikan data Substrate dan EVM dengan mulus ke dalam satu tempat dan mengkueri sumber data tunggal ini menggunakan GraphQL.

SubQuery akan memperkenalkan filter yang lebih canggih daripada pengindeks lainnya, memungkinkan pemfilteran transaksi non-kontrak, pengirim transaksi, kontrak, dan argumen log yang diindeks, sehingga pengembang dapat membangun berbagai proyek yang memenuhi kebutuhan data spesifik mereka.

### Akademi SubQuery

Akademi dirancang untuk meningkatkan keterampilan dan memberdayakan pengembang di ekosistem SubQuery dengan menyediakan edukasi modular kepada mereka. [Kursus pertama kami di Akademi adalah _Hero Course_](https://doc.subquery.network/academy/herocourse/) dan diluncurkan pada hari Jumat 22 Oktober 2021.

Dalam setiap modul _Hero Course_, ada beberapa pelajaran 5 sampai 10 menit yang disampaikan melalui rekaman video. Konten video disertai dengan tutorial tertulis, slide, buku kerja, dan tautan ke repositori kode GitHub yang telah selesai.

Kursus ini dirancang untuk membuat pengembang dari tidak tahu apa-apa tentang SubQuery menjadi ahli dalam membangun sumber data SubQuery untuk aplikasi blockchain baru mereka.

Dalam beberapa bulan ke depan, kami akan menerapkan lebih banyak edukasi untuk Komunitas, dengan rilis mingguan konten baru SubQuery _Hero Course_, dan lebih banyak kursus dalam beberapa minggu mendatang.

### Bukti Pengindeksan

Bukti pengindeksan memungkinkan kami untuk menjamin bahwa dua pengindeks berbeda yang bekerja dengan proyek SubQuery yang sama telah mengindeks data yang sama persis. Ini adalah komponen penting yang diperlukan untuk pengembangan jaringan SubQuery yang terdesentralisasi. Kami menggunakan konsep yang disebut Pegunungan Merkle untuk mengonfirmasi dan menjamin hal ini, pantau terus postingan blog mendatang yang mengeksplorasi hal ini lebih dalam.

### Layanan Enterprise Premium

Kami memiliki beberapa pelanggan besar seperti Karura, Kodadot dan Fearless Wallet yang semuanya menjalankan aplikasi produksi di SubQuery. Tim-tim ini menuntut peningkatan layanan dan tingkat keandalan yang lebih tinggi.

Kami menghadapi tantangan, dengan Perjanjian Tingkat Layanan, tingkat layanan perusahaan, dan alat lain yang dibutuhkan pelanggan kami yang lebih besar untuk menjalankan bisnis mereka sendiri dan menerima kinerja terbaik dari SubQuery untuk aplikasi mereka.

Silakan hubungi tim jika Anda ingin berbicara dengan kami tentang menerima layanan dan dukungan tingkat perusahaan dari SubQuery.

## Pencapaian 1 — Akhir Q4 2021

### SubQuery Builders/Grants Program

Program grant ini dirancang untuk memfasilitasi dan mendorong inovasi dengan Polkadot dan SubQuery, dan untuk membangun dApps generasi berikutnya untuk mendukung revolusi web3. Ini akan mendukung proyek baru dengan grant, dukungan teknis, pemasaran dan saran pengembangan bisnis dari SubQuery dan lainnya.

Kami sangat senang dengan potensi ini dan akan segera merilis lebih banyak informasi.

### Koordinator dan implementasi SDK klien

Kami akan meningkatkan SDK SubQuery inti kami dan menambahkan komponen tambahan untuk koordinator dan klien SubQuery.

Koordinator pengindeks akan dikerahkan oleh pengindeks untuk mengekspos jaringan ke pengindeks, dan memungkinkan pengindeks untuk mendaftarkan dirinya dengan jaringan SubQuery dan mengiklankan data yang tersedia

SDK klien akan menjadi peran konsumen, dan akan memungkinkan mereka menemukan pengindeks dan mengelola seluruh transaksi yang perlu diambil dan dibayar oleh konsumen untuk data.

### MVP internal kontrak Jaringan SQT

Jaringan SubQuery versi pertama kami akan berada dalam smart contract, yang diterapkan pada parachain Polkadot terkemuka. MVP internal akan memungkinkan kami untuk mulai menguji semuanya secara internal di sini, dan merupakan pencapaian besar yang harus kami selesaikan.

### EU Cluster

Pelanggan kami meminta dukungan untuk lebih banyak cluster untuk data SubQuery di seluruh dunia. Lebih banyak cluster berarti lebih banyak ketahanan, dan menghosting data SubQuery lebih dekat ke tempat pelanggan mereka berada. Cluster Eropa baru berarti permintaan yang lebih cepat untuk konsumen, kinerja tak tertandingi untuk pengembang dApp, dan ketahanan yang lebih besar untuk jaringan SubQuery.

### Peningkatan subql init

Perintah _subql init_ adalah perintah yang familiar bagi siapa saja yang telah membangun proyek SubQuery; itu mewakili kanvas kosong — kesempatan tanpa batas. Kami sadar bahwa kami dapat berbuat lebih baik untuk membantu orang lain memulai, daripada pengembang kanvas kosong menginginkan perancah kosong, di mana semua kode boiler-plate sudah ditulis.

Item roadmap ini mewakili pekerjaan yang ingin kami lakukan untuk memungkinkan pengembang mulai membangun di parachain apa pun tanpa perlu khawatir tentang endpoint, dictionaries, dan types  — semuanya menghemat waktu bagi pengembang dan membantu orang lain memulai.

## Pencapaian 2 — Pertengahan Q1 2022

### Peluncuran testnet publik

Setelah MVP internal kontrak Jaringan SQT, kami akan mengundang sekelompok kecil peserta untuk bergabung dengan kami saat kami mulai menguji Jaringan SubQuery. Untuk memulai, kita perlu menyelesaikan sejumlah besar tugas dan dokumentasi yang lebih banyak lagi!

Pada awal tahun 2022, kami akan membagikan lebih banyak informasi tentang proses ini dan bagaimana Anda dapat mendaftar untuk ikut serta.

### Point-in-time indexing

Bayangkan bisa mengetahui keadaan blockchain pada titik waktu tertentu - seperti apa sebenarnya proyek SubQuery di blok ke-5 juta? Inilah yang akan disediakan oleh fitur baru ini.

### Kontrak Jaringan SQT v1 dan audit kode eksternal

Semua jaringan penting memerlukan audit kode menyeluruh oleh mitra eksternal untuk memastikan bahwa kode jaringan aman dan dapat diskalakan. SubQuery tidak berbeda, jadi kami akan bekerja dengan mitra utama untuk audit kode lengkap di sini dan juga terus menerima audit kode untuk smart contract kami di masa mendatang.

### Pengujian pembayaran mikro internal

Ini adalah fitur utama bagi kami. Kami akan melakukan banyak pekerjaan dalam ekosistem Polkadot untuk mengelola dan menangani pembayaran mikro dalam SubQuery. Keuntungan dari Polkadot adalah biaya transaksi yang kecil dibandingkan dengan jaringan lain seperti Ethereum, yang berarti pembayaran mikro jauh lebih relevan. Ini akan diluncurkan ke jaringan pengujian kami yang diberi insentif setelah kami melakukan pengujian internal yang menyeluruh.

### Explorer dan Aplikasi SubQuery Network

Kami sedang membangun explorer dan aplikasi lain untuk memungkinkan peserta di SubQuery Network menjelajahi dan menemukan data dalam SubQuery Network. Konsumen juga akan menggunakan ini untuk menavigasi perpustakaan sumber data yang didukung, serta delegator untuk menganalisis bagaimana kinerja pengindeks untuk memutuskan bagaimana mendelegasikan token SQT mereka.

### Pemantauan kesehatan Enterprise

Sebagai lanjutan dari tingkat layanan SubQuery Enterprise kami, Anda juga dapat mengharapkan sejumlah besar pemantauan kesehatan dan alat analisis kinerja lainnya yang tersedia untuk pelanggan.

## Pencapaian 3 — Akhir Q1 2022

### SQT token generation event

Setelah fase jaringan uji yang berhasil, kami berharap untuk meluncurkan token SubQuery pada mitra parachain Polkadot. Kami akan membagikan lebih banyak informasi tentang tokennomics kami dengan komunitas dalam beberapa minggu mendatang.

### Peluncuran testnet berinsentif publik dengan pembayaran mikro

Ini adalah tahap akhir dari jaringan pengujian kami. Kami akan merilis semuanya ke jaringan pengujian kami dan mengharapkan peserta untuk mendorongnya hingga batasnya. Ini termasuk pengujian skala dan beban, menyempurnakan model dan koefisien ekonomi kami, menguji dokumentasi dan proses orientasi kami, dan memastikan bahwa Anda dapat bertransaksi dengan pendahulu SQT di dalamnya.

Kami berharap bahwa kami akan memberi reward kepada peserta jaringan pengujian kami, mereka yang menyelesaikan misi atau tugas tertentu, dan mereka yang bertindak sebagai anggota berbeda dari jaringan pengujian.

### Wawasan dan pelaporan lalu lintas data

Kami menangani jutaan permintaan data ke proyek SubQuery setiap hari. Sebagian besar pelanggan kami tidak memiliki analitik di dApps mereka sendiri untuk privasi pengguna, tetapi mereka masih perlu mengetahui bagaimana dApps mereka beroperasi sehingga kami akan meningkatkannya.

### Routing cerdas yang dapat diskalakan

Kami memiliki sasaran satu Miliar permintaan SubQuery harian ke layanan hosted kami, itulah sebabnya kami akan memperkenalkan layanan yang dapat diskalakan secara global dengan beberapa layanan hosted SubQuery yang berjalan.

Ini adalah fitur baru dan terus ditingkatkan yang secara otomatis mengarahkan permintaan ke node terdekat yang tersedia. Selain itu, ini memungkinkan kami untuk mengarahkan semua permintaan segera ke zona SubQuery cadangan, memberi kami sistem yang toleran terhadap kesalahan jika terjadi pemadaman regional.

Di masa mendatang, ini berarti bahwa kami akan membuat semakin banyak layanan hosted SubQuery yang lebih kecil yang secara taktis ditempatkan lebih dekat dengan pengguna kami.

## Pencapaian 4 — Pertengahan Q2 2022

### Peluncuran SubQuery Foundation

Dalam langkah kami untuk membuat Jaringan SubQuery yang terdesentralisasi, kami akan mendirikan SubQuery Foundation untuk mengelola governance dan pertumbuhan ekosistem di masa depan. Kepemilikan SubQuery Network akan berada di bawah SubQuery foundation pada awalnya.

### Menyelesaikan penelitian untuk chain Layer-1 lainnya

Sementara rumah kami akan selalu menjadi Polkadot, kami sedang menjajaki untuk mendukung berbagai blockchain Layer-1 lainnya dengan kemampuan pengindeksan kami.

### Program liquidity mining

Untuk meningkatkan likuiditas token SQT, kami akan membuat program penambangan likuiditas dengan pertukaran terdesentralisasi (DEX). Ini akan memungkinkan pemegang token untuk menghasilkan tambahan atas investasi mereka.

## Pencapaian 5 — Akhir Q2 2022

### Peluncuran mainnet 🚀

Setelah kami menyelesaikan pengujian jaringan SubQuery, kami akan meluncurkan mainnet SubQuery Network pertama. Di sinilah semuanya benar-benar dimulai. Awalnya, kami akan bergabung dan memberi penghargaan kepada peserta jaringan uji, dan kemudian akan sepenuhnya terbuka untuk semua orang di komunitas.

### Peluncuran Exchange Terpusat

Untuk mendorong peningkatan adopsi SQT, kami mengantisipasi peluncuran token pada satu atau beberapa CEX terkemuka selama periode ini serta banyak DEX lainnya.

## Pencapaian 6 — Rencana jangka panjang

### Meluncurkan Parachain kami sendiri

Meskipun pada awalnya kami berencana untuk bermitra dengan parachain Polkadot teratas untuk membuat Jaringan SubQuery dirilis dan diskalakan lebih cepat, dalam jangka panjang SubQuery juga bermaksud untuk meluncurkan parachainnya sendiri dan mengintegrasikan dirinya lebih jauh lagi dalam ekosistem.

Parachain milik sendiri ini akan memungkinkan kami untuk lebih berinovasi dalam alat yang dapat membantu pengembang membangun masa depan web3 lebih cepat. Kami ingin membidik slot parachain setelah kami memiliki rekam jejak yang terbukti di belakang kami dan data, komunitas, serta token untuk mendukungnya.

### SubQuery Foundation pindah ke DAO

Ini masih jauh, tapi selalu menjadi impian kami bahwa SubQuery akhirnya menjadi DAO milik komunitas. Kami telah berulang kali mengatakan bahwa komunitas memainkan peran besar dalam SubQuery, semua yang kami lakukan adalah untuk pelanggan kami — menjadi DAO adalah perwujudan dari fokus itu.

Meskipun demikian, ini masih jauh, dan hanya akan dilakukan setelah kami benar-benar yakin akan kesuksesan dan masa depan SubQuery bersama komunitas.

## Tentang SubQuery

[SubQuery](https://subquery.network) adalah agregasi data terdesentralisasi, pengindeksan & lapisan kueri antara blockchain Layer-1 dan aplikasi terdesentralisasi. Protokol mengabstraksi keanehan data blockchain dengan SubQuery SDK, memungkinkan pengembang untuk fokus pada penerapan produk inti mereka tanpa membuang upaya yang sia-sia pada teknologi backend khusus.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
