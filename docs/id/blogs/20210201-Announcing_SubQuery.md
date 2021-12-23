# Mengumumkan SubQuery

## Mentransformasi dan mengkueri data dunia untuk masa depan web3.0

![](https://miro.medium.com/max/1400/1*J5u22qNxndcuCrFJ1mfGqg.png)

Misi OnFinality adalah untuk mendukung pengembang blockchain dengan menyediakan layanan infrastruktur kepada pelanggan dari segala bentuk dan ukuran. Kami meluncurkan usaha baru yang bertujuan untuk memecahkan masalah inti untuk memajukan misi ini: SubQuery.

Hampir setiap blockchain memiliki kebutuhan untuk memproses dan meminta data. Komunitas Polkadot yang berkembang akan membutuhkan layanan yang memungkinkan mereka menemukan dan menggunakan data secara andal dengan cepat. Proyek kami terinspirasi oleh [The Graph](https://thegraph.com/), layanan yang saat ini berfokus pada Ethereum yang memungkinkan pelanggan melakukan ini menggunakan GraphQL.

Karena sistem terdesentralisasi menyimpan data di seluruh jaringan, kueri menjadi lambat dan sulit. Untuk mewujudkan impian Web 3.0, itu harus secepat (jika tidak lebih cepat) daripada jaringan terpusat untuk pengguna akhir. Tim protokol saat ini sedang membangun server pengindeksan terpusat untuk proyek mereka sendiri, tetapi ini menimbulkan tiga masalah:

-   Tim Polkadot/Substrate seharusnya tidak perlu khawatir dalam membangun atau mengelola ini saat mereka membangun dApp berikutnya
-   Tim terus-menerus menciptakan kembali roda; kelebihan mendasar dari interoperabilitas parachain Polkadot adalah untuk menghindari hal ini
-   Dalam pandangan kami, ekosistem Substrate/Polkadot siap untuk mencapai tingkat pertumbuhan yang sama dengan Ethereum. Kami percaya bahwa itu perlu memberikan tingkat layanan komunitas yang sama dengan yang sudah dimiliki Ethereum

![](https://miro.medium.com/max/1400/1*l4b4BXWkczVDaHyv30lLQQ.png)

Tujuan SubQuery adalah untuk membantu proyek Polkadot/Substrate membangun dApps yang lebih baik dengan memungkinkan siapa saja menemukan dan menggunakan data lebih cepat dengan andal. Layanan kami akan memungkinkan pengguna untuk mengekstrak, mengubah, mempertahankan, dan meminta data pada awalnya, serta menghubungkan dan menyajikan data di masa mendatang. Tujuan kami adalah menjadikan ini sebagai bagian inti dari infrastruktur untuk ekosistem Substrate/Polkadot, seperti halnya The Graph untuk Ethereum.

> SubQuery hadir untuk membantu Anda mengubah dan mengkueri data dunia untuk masa depan web3.0.

![](https://miro.medium.com/max/1000/1*IHstJG-hBwQzicLdWkGR5w.png)

Untuk mewujudkan impian Web 3.0, itu harus secepat (jika tidak lebih cepat) daripada jaringan terpusat untuk pengguna akhir.

Itu sebabnya kami sangat bangga mengumumkan SubQuery, sebuah proyek open source yang memungkinkan pengguna menjalankan pengindeks di seluruh chain mereka untuk membangun kumpulan data yang dapat dikueri dengan GraphQL. Rangkaian alat ini mencakup antarmuka command line untuk memungkinkan proyek menghasilkan proyek SubQuery mereka sendiri, mendefinisikan bagaimana pengindeks harus melintasi dan menggabungkan jaringan mereka sendiri. Ada paket node SubQuery yang mengindeks jaringan dan mendukung kueri GraphQL. Dengan bantuan alat ini, siapa pun dapat membuat dan menjalankan kueri dengan mudah.

> _Anda bisa segera memulai dengan mengikuti contoh kami di repository Github SubQuery:_[_https://github.com/OnFinality-io/subql_](https://github.com/OnFinality-io/subql)

Selain itu, Anda dapat mengetahui lebih lanjut dengan membaca [dokumen SubQuery](https://doc.subquery.network/) kami atau mengunjungi situs web baru kami di [https://subquery.network/](https://subquery.network/)

![](https://miro.medium.com/max/1000/1*3oA1Hvns1vrImTsmowO_Jw.png)

Kami akan fokus membangun layanan hosted terkelola berdasarkan penawaran ini yang akan lebih berperforma dan skalabel. Kami akan menyediakan infrastruktur publik tepercaya yang akan membangun node SubQuery produksi yang kuat dari proyek SubQuery yang diunggah. Layanan kemudian akan mengindeks dan mempertahankan chain state, dan menyediakan endpoint GraphQL produksi yang dapat menggantikan implementasi yang self-hosted. Kami akan fokus pada hal ini sehingga semua orang dapat fokus membangun dan mengembangkan dApp mereka.

Setelah ini diterapkan, fase terakhir kami adalah membuat tokenisasi bisnis SubQuery dengan membangun chain kami sendiri (kemungkinan parachain) untuk Polkadot. Meskipun kami akan menyediakan model penagihan yang serupa untuk perusahaan dan pengguna dengan konsumsi tinggi (paket berlangganan dengan tingkat konsumsi), kami akan menyimpan data ini ke jaringan kami untuk membuatnya transparan bagi semua orang dan pihak yang berpartisipasi dapat melakukan staking untuk mendapatkan hadiah sebagai insentif. Kami akan mengeluarkan token governance untuk memberikan stabilitas pada chain dan memungkinkan komunitas memengaruhi arah dan roadmap kami.

Meskipun lebih dari 10 tahun pengembangan sejak bitcoin pertama kali dimulai, jaringan terpusat masih saja mainstream. Ini sebagian besar disebabkan oleh kecepatan serta biaya mengakses dan menulis ke jaringan. Ethereum membuat langkah maju yang besar dengan smart contract terdesentralisasi (dan the Graph adalah bagian dari infrastruktur yang sangat sukses sebagai hasilnya), tetapi jaringan inti masih kesulitan untuk mengurangi biaya transaksi.

Kami melihat potensi Polkadot sejak awal dan rasanya wajar untuk memfokuskan upaya kami di sana. Ini memecahkan masalah governance Ethereum, forking, interoperabilitas, dan banyak lagi. Premis inti Polkadot adalah untuk menciptakan komunitas pengembang, pengguna, dan bisnis yang berkembang pesat yang akan memanfaatkan interoperabilitas multichain — komunitas akan membutuhkan layanan yang memungkinkan mereka menemukan dan menggunakan data dengan andal dengan cepat.

Arsitektur unik Polkadot berarti bahwa kita dapat fokus pada satu jaringan dan kemudian dapat mendukung beberapa chain saat ini dan masa depan dengan mudah. Dengan melakukan upaya ini sekarang, bahkan saat Polkadot masih dalam pengembangan, kami akan siap membantu generasi berikutnya dari pengembang blockchain membuat dApp besar berikutnya.

SubQuery akan dibangun oleh tim di OnFinality, yang merupakan platform SaaS infrastruktur untuk tim dan pengguna blockchain untuk meluncurkan node dan mendapatkan akses ke berbagai protokol blockchain. Kami memiliki rangkaian layanan simbiosis termasuk layanan API shared node kami, dan node khusus yang dapat digunakan dalam manajemen infrastruktur atau sebagai bagian dari jalur pengujian CI/CD tim protokol. Kami memiliki hubungan dengan tim Polkadot/Substrate teratas, keahlian dalam hosting infrastruktur terkelola untuk jaringan Substrate/Polkadot, dan kemampuan untuk mengirimkan proyek infrastruktur yang kompleks dan menampungnya untuk penggunaan produksi.

**Sam Zou —** CEO ([LinkedIn](https://www.linkedin.com/in/sam-zou-5b8169a/))

Entrepreneur, Investor dengan pengalaman IT lebih dari 20 tahun yang berspesialisasi dalam infrastruktur dan desain layanan cloud

**Ian He —** Kepala Protokol ([LinkedIn](https://www.linkedin.com/in/yin-he-7a266345/))

Blockchain Architect, Kontributor polkadot-js, Pengadopsi awal teknologi Substrate dan memenangkan tempat kedua dalam hackathon Polkadot pertama.

**James Xu —** Solutions Architect ([LinkedIn](https://www.linkedin.com/in/zhexu/))

Infrastructure & Application Architect, Software Engineer pemenang penghargaan.

**James Bayly** — Kepala Pengembangan Bisnis ([LinkedIn](https://www.linkedin.com/in/james-bayly/))

Mulailah di [repository Github SubQuery.](https://github.com/OnFinality-io/subql)

Baca [dokumen SubQuery](https://doc.subquery.network/) kami

[Kunjungi situs web baru kami](https://subquery.network/)

Ikuti kami di:

-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/%23subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)