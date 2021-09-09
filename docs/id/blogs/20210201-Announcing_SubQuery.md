# Mengumumkan SubQuery

## Mentransformasi dan mengkueri data dunia untuk masa depan web3.0

![](https://miro.medium.com/max/1400/1*J5u22qNxndcuCrFJ1mfGqg.png)

Misi OnFinality adalah untuk mendukung pengembang blockchain dengan menyediakan layanan infrastruktur kepada pelanggan dari segala bentuk dan ukuran. Kami meluncurkan usaha baru yang bertujuan untuk memecahkan masalah utama untuk memajukan misi ini: SubQuery.

Hampir setiap blockchain memiliki kebutuhan untuk memproses dan mengkueri data. Komunitas Polkadot yang berkembang pesat akan membutuhkan layanan yang memungkinkan mereka untuk menemukan dan mengkonsumsi data dengan mudah. Proyek kami terinspirasi oleh [The Graph](https://thegraph.com/), layanan yang saat ini berfokus pada Ethereum yang memungkinkan pelanggan untuk melakukan ini menggunakan GraphQL.

Karena sistem terdesentralisasi menyimpan data di seluruh jaringan, kueri menjadi lambat dan sulit. Untuk mewujudkan impian Web 3.0, itu harus secepat (jika tidak lebih cepat) daripada jaringan terpusat untuk pengguna akhir. Tim protokol saat ini sedang membangun server pengindeksan terpusat untuk proyek mereka sendiri, akan tetapi ini menimbulkan tiga masalah:

-   Tim Polkadot/Substrate seharusnya tidak perlu khawatir dalam membangun atau mengelola ini saat mereka membangun dApp berikutnya
-   Tim terus-menerus menciptakan kembali roda; kelebihan mendasar dari interoperabilitas parachain Polkadot adalah untuk menghindari hal ini
-   Dalam pandangan kami, ekosistem Substrate/Polkadot siap untuk mencapai tingkat pertumbuhan yang sama dengan Ethereum. Kami percaya bahwa itu perlu menyediakan tingkat layanan komunitas yang setara dengan yang telah dimiliki Ethereum

![](https://miro.medium.com/max/1400/1*l4b4BXWkczVDaHyv30lLQQ.png)

Tujuan SubQuery adalah untuk membantu proyek Polkadot/Substrate membangun dApps yang lebih baik dengan memungkinkan siapa pun untuk menemukan dan mengkonsumsi data dengan andal lebih cepat. Layanan kami akan memungkinkan pengguna untuk mengekstrak, mengubah, mempertahankan, dan mengkueri data pada awalnya, serta menghubungkan dan menyajikan data di masa mendatang. Tujuan kami adalah menjadikan ini bagian inti dari infrastruktur untuk ekosistem Substrate/Polkadot, seperti halnya The Graph untuk Ethereum.

> SubQuery hadir untuk membantu Anda mengubah dan mengkueri data dunia untuk masa depan web3.0.

![](https://miro.medium.com/max/1000/1*IHstJG-hBwQzicLdWkGR5w.png)

Untuk mewujudkan impian Web 3.0, itu harus secepat (jika tidak lebih cepat) daripada jaringan terpusat untuk pengguna akhir.

Itulah sebabnya kami sangat bangga mengumumkan SubQuery, sebuah proyek open source yang memungkinkan pengguna untuk menjalankan pengindeks di seluruh chain mereka untuk membangun dataset yang dapat dikueri dengan GraphQL. Rangkaian alat ini mencakup antarmuka command line untuk memungkinkan proyek menghasilkan proyek SubQuery mereka sendiri, menentukan bagaimana pengindeks harus melintasi dan menggabungkan jaringan mereka sendiri. Ada paket node SubQuery yang mengindeks jaringan dan mendukung kueri GraphQL. Dengan bantuan alat-alat ini, siapa pun dapat membuat dan menjalankan kueri dengan mudah.

> _Anda bisa segera memulai dengan mengikuti contoh kami di repository Github SubQuery:_[_https://github.com/OnFinality-io/subql_](https://github.com/OnFinality-io/subql)

Selain itu, Anda dapat mengetahui lebih lanjut dengan membaca [dokumen SubQuery](https://doc.subquery.network/) kami atau mengunjungi situs web baru kami di [https://subquery.network/](https://subquery.network/)

![](https://miro.medium.com/max/1000/1*3oA1Hvns1vrImTsmowO_Jw.png)

Kami akan fokus membangun layanan yang dihosting terkelola berdasarkan penawaran ini yang akan lebih berkinerja dan dapat diskalakan. Kami akan menyediakan infrastruktur publik tepercaya yang akan membangun node SubQuery produksi yang kuat dari proyek SubQuery yang diunggah. Layanan kemudian akan mengindeks dan bertahan dalam chain state, dan menyediakan endpoint GraphQL produksi yang dapat menggantikan implementasi yang dihosting sendiri. Kami akan fokus pada hal ini sehingga semua orang dapat fokus membangun dan mengembangkan dApp mereka.

Setelah ini diterapkan, fase terakhir kami adalah membuat tokenisasi bisnis SubQuery dengan membangun chain kami sendiri (kemungkinan parachain) untuk Polkadot. Meskipun kami akan menyediakan model penagihan serupa untuk pengguna perusahaan dan pengguna konsumsi tinggi (paket berlangganan dengan tingkat konsumsi), kami akan menyimpan data ini ke chain kami untuk membuatnya transparan kepada semua orang dan pihak yang berpartisipasi dapat melakukan staking untuk mendapatkan reward sebagai insentif. Kami akan mengeluarkan token governance untuk memberikan stabilitas pada chain dan memungkinkan komunitas untuk ikut menentukan arah dan roadmap kami.

Meskipun lebih dari 10 tahun pengembangan sejak bitcoin pertama kali dimulai, jaringan terpusat masih tetap mainstream. Ini sebagian besar karena kecepatan dan biaya akses dan penulisan ke jaringan. Ethereum membuat langkah maju yang besar dengan smart contracts terdesentralisasi (dan the Graph adalah infrastruktur yang sangat sukses sebagai hasilnya), tetapi jaringan inti masih kesulitan untuk mengurangi biaya transaksi.

Kami melihat potensi Polkadot sejak dini dan tepat sejak awal terasa wajar untuk memfokuskan upaya kami di sana. Ini memecahkan governance pada Ethereum, forking, masalah interoperabilitas, dan banyak lagi. Premis inti dari Polkadot adalah untuk menciptakan komunitas developer, pengguna, dan bisnis yang berkembang yang akan memanfaatkan interoperabilitas multichain - bahwa komunitas akan membutuhkan layanan yang memungkinkan mereka untuk menemukan dan mengkonsumsi data dengan andal dengan cepat.

Arsitektur Polkadot yang unik berarti bahwa kita dapat fokus pada satu jaringan dan kemudian dapat mendukung beberapa chain saat ini dan masa depan dengan mudah. Dengan melakukan upaya ini sekarang, meskipun saat ini Polkadot masih dalam pengembangan, kami akan berada di sana siap untuk membantu generasi developer blockchain berikutnya menciptakan dApp besar selanjutnya.

SubQuery akan dibangun oleh tim di OnFinality, yang merupakan platform SaaS infrastruktur untuk tim blockchain dan pengguna untuk meluncurkan node dan mendapatkan akses ke berbagai protokol blockchain. Kami memiliki serangkaian layanan simbiosis termasuk layanan shared node API kami, dan dedicated node yang dapat digunakan dalam manajemen infrastruktur atau sebagai bagian dari pipeline pengujian CI/CD tim protokol. Kami memiliki hubungan dengan tim Polkadot/Substrate teratas, keahlian dalam hosting infrastruktur terkelola untuk jaringan Substrate/Polkadot, dan kemampuan untuk memberikan proyek infrastruktur yang kompleks dan menghosting mereka untuk penggunaan produksi.

**Sam Zou —** CEO ([LinkedIn](https://www.linkedin.com/in/sam-zou-5b8169a/))

Entrepreneur, Investor dengan pengalaman IT lebih dari 20 tahun yang berspesialisasi dalam infrastruktur dan desain layanan cloud

**Ian He —** Head of Protocol ([LinkedIn](https://www.linkedin.com/in/yin-he-7a266345/))

Blockchain Architect, Kontributor polkadot-js, Pengadopsi awal teknologi Substrate dan memenangkan tempat kedua dalam hackathon Polkadot pertama.

**James Xu —** Solutions Architect ([LinkedIn](https://www.linkedin.com/in/zhexu/))

Infrastructure & Application Architect, Software Engineer pemenang penghargaan.

**James Bayly** — Head of Business Development ([LinkedIn](https://www.linkedin.com/in/james-bayly/))

Mulailah di [repository Github SubQuery.](https://github.com/OnFinality-io/subql)

Baca [dokumen SubQuery](https://doc.subquery.network/) kami

[Kunjungi situs web baru kami](https://subquery.network/)

Ikuti kami di:

-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/%23subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)