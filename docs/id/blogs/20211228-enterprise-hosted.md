# SubQuery Memberi Pelanggan Dukungan Perusahaan

![](https://miro.medium.com/max/1400/1*z_StqAT5KeaxQLBCm-xpRQ.jpeg)

Saat komunitas kami tumbuh lebih besar, kami melihat ratusan penerapan dan secara eksponensial lebih banyak lalu lintas ke layanan kami yang dihosting setiap hari. Namun, tim di SubQuery menghadapi tantangan ini dan meningkatkan skala layanan kami untuk memenuhi permintaan alat kami yang belum pernah terjadi sebelumnya oleh pelanggan kami, sambil menjaga [layanan yang dihosting](https://projects.subquery.network/) kami tetap gratis.

Banyak pelanggan kini mengandalkan SubQuery untuk menyediakan data penting misi ke aplikasi produksi mereka. Pelanggan ini mewakili beberapa dompet terbesar ([Nova](https://novawallet.io/) dan [Fearless](https://fearlesswallet.io/)), pemindai ([Subscan](https://www.subscan.io/), [SubVis](https://www.subvis.io/), dan < 4>DotMarketCap</a>), platform NFT ([Kodadot](https://kodadot.xyz/) dan [Yuser](https://yuser.co/)), dan banyak lagi. Ini adalah aplikasi besar yang digunakan komunitas Polkadot setiap hari dan harus online setiap saat.

Performa dan keandalan layanan yang dihosting kami telah berada di urutan teratas daftar prioritas kami selama beberapa waktu di sini di SubQuery. Tim saudara kami adalah OnFinality, penyedia infrastruktur terbesar di Polkadot, jadi kami memiliki banyak pengalaman di bidang ini. Akibatnya, hari ini kita akan membahas tiga peningkatan terbaru yang akan menjadikan SubQuery sebagai platform data yang paling andal, skalabel, dan berkinerja terbaik di Polkadot.

![](https://miro.medium.com/max/1200/1*QckhJzjQqw9czpBMRhXgXQ.gif)

# Basis Data Khusus

Awalnya, semua proyek SubQuery disebarkan ke database bersama di infrastruktur kami untuk menghemat uang dan memungkinkan layanan kami tetap gratis. Namun, ini akan menyebabkan proyek lalu lintas tinggi dengan kumpulan data besar mencekik proyek lain yang dihosting di database yang sama.

Jika Anda sedang membangun proyek yang dirancang untuk penggunaan produksi, kami menawarkan database khusus yang dihosting di kluster SubQuery kami yang dapat memberi proyek Anda semua sumber daya yang dibutuhkan untuk menangani ribuan kueri rumit tanpa mengkhawatirkan dampak kinerja dari pihak lain.

Anda harus menghubungi kami di sales@subquery.network jika Anda ingin meningkatkan ke ini. Kami mereplikasi data Anda dari tabel yang ada sehingga Anda tidak perlu menghabiskan waktu untuk mengindeks ulang data yang sudah Anda miliki sehingga menghasilkan migrasi tanpa waktu henti.

# Dukungan Beberapa Cluster

Ketahanan dan keandalan berarti segalanya bagi kami di SubQuery. Memiliki kluster redundan di bagian dunia yang terpisah berarti kami dapat dengan cepat pulih dari gangguan penyedia cloud yang terkadang membuat wilayah offline.

Selain itu, saat Anda mengajukan permintaan ke proyek SubQuery di layanan yang dihosting kami, sebagian besar waktu tunggu berasal dari latensi. Latensi adalah waktu titik ke titik yang diperlukan permintaan Anda untuk mengelilingi dunia ke kluster SubQuery terdekat dan dapat memakan waktu hingga satu atau dua detik dari beberapa wilayah terpencil. Memiliki banyak kluster di seluruh dunia memungkinkan kami mengurangi bagian paling signifikan dari waktu permintaan (latensi).

Kami telah menerapkan beberapa cluster di berbagai wilayah yang menyediakan layanan yang sama. Pekerjaan ini juga menyertakan alat di [Proyek SubQuery](https://project.subquery.network/) yang memungkinkan Anda menerapkan dan mengelola proyek di seluruh kluster ini. Kami juga telah menerapkan proses yang memastikan bahwa database di region yang berbeda tetap konsisten, sehingga terlepas dari cluster mana yang menjadi tujuan permintaan Anda, data yang Anda terima tetap konsisten.

# Perutean Cerdas

Setelah kluster SubQuery kami berjalan di wilayah yang berbeda, langkah logis berikutnya adalah membuat fitur ini tidak terlihat oleh pengguna Anda. Pengguna Anda tidak perlu memutuskan kluster mana yang menjadi tujuan permintaan mereka, SubQuery harus secara otomatis mengarahkan permintaan mereka ke kluster sehat terdekat. Inilah yang disediakan perutean cerdas SubQuery.

Kami menawarkan satu titik akhir global untuk setiap pelanggan premium yang memiliki perutean cerdas yang diterapkan secara otomatis ke setiap permintaan. Layanan ini mencakup pemantauan yang cukup besar yang terus-menerus melakukan ping ke setiap cluster untuk pemeriksaan kesehatan dan memastikan bahwa pengguna tidak pernah dialihkan ke cluster yang kewalahan atau offline. Titik akhir global mengoptimalkan perutean untuk setiap permintaan ke kluster terdekat guna memastikan pengguna Anda menerima kinerja terbaik dari kluster Anda.

![](https://miro.medium.com/max/1000/0*DNXDiABzli0et1MU)

Singkatnya, layanan ini memungkinkan kami untuk menawarkan layanan premium kami kepada lebih banyak pelanggan dengan percaya diri. Kami bekerja dengan setiap pelanggan untuk memahami bisnis dan tujuan mereka, dan kemudian menyiapkan layanan untuk memenuhi kebutuhan mereka. SubQuery adalah penyedia layanan data terbesar di Polkadot, dan fitur ini menunjukkan bagaimana kami mendukung ribuan proyek komunitas sekaligus sebagai proyek terbesar di Polkadot.

# Tentang Jaringan SubQuery

SubQuery adalah penyedia data terkemuka Polkadot, yang mendukung pengindeksan & lapisan kueri antara blockchain Layer-1 (Polkadot) dan aplikasi terdesentralisasi. Layanan data SubQuery sedang digunakan oleh sebagian besar situs web lelang crowdloan dan parachain Polkadot dan Kusama saat ini.

Protokol SubQuery mengabstraksi keanehan data blockchain dengan SubQuery SDK, memungkinkan pengembang untuk fokus pada penerapan produk inti mereka tanpa membuang-buang upaya pada teknologi backend khusus.

[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)|  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [Matrix](https://matrix.to/#/#subquery:matrix.org)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
