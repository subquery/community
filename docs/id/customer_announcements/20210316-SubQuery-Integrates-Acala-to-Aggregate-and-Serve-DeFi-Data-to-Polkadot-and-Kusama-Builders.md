# SubQuery Mengintegrasikan Acala untuk Mengagregasi dan Melayani Data DeFi kepada Para Builder Polkadot dan Kusama

![](https://miro.medium.com/max/1400/1*cg4kJs0WEcyPP73EAtHomA.png)

Minggu lalu [SubQuery](https://www.subquery.network/) merilis tahap berikutnya dari proyek mereka, [SubQuery Explorer](https://explorer.subquery.network/). Minggu ini, Acala dan SubQuery telah menyelesaikan integrasi untuk memungkinkan pengguna dan pengembang melakukan kueri dan mengekstrak data dari hub DeFi Acala untuk Polkadot hanya dalam hitungan menit dan tanpa biaya.

SubQuery adalah layer agregasi data yang akan beroperasi antara layer-1 blockchain (Acala) dan DApp layer. Solusi ini mengumpulkan dan mengatur data dari Acala dan blockchain lain, menyajikan data yang terstruktur dengan baik bagi pengembang untuk digunakan dalam berbagai proyek. Layanan ini memungkinkan pengembang DApp untuk fokus pada use case inti dan front-end mereka, tanpa perlu membuang waktu untuk membangun backend khusus untuk pemrosesan data.

Acala sangat percaya dan merupakan builder jangka panjang untuk masa depan multi-chain — mengurangi fragmentasi likuiditas, meningkatkan komposisi, dan memungkinkan aksesibilitas DeFi ke semua orang. Acala adalah blockchain khusus yang berfokus pada keuangan terdesentralisasi (DeFi), dan menciptakan beberapa primitif DeFi yang menjadi hub dan infrastruktur DeFi yang melayani ekosistem Polkadot dan Kusama. Tim telah membangun produk termasuk stablecoin multi-jaminan (aUSD — The Acala Dollar), automated market maker (AMM) DEX, aset tokenized yang distake yang disebut Liquid DOT (LDOT), dan menerapkan fitur bring-your-own-gas yang memungkinkan biaya gas dibayarkan dalam aset apa pun yang didukung seperti stablecoin. Parachain Acala berencana untuk memainkan peran sebagai DeFi hub untuk Polkadot dan landasan yang menggabungkan aset dan likuiditas dari berbagai blockchain.

Hari ini ketika Anda mengakses [SubQuery Explorer](https://explorer.subquery.network/) Anda akan disambut dengan Proyek SubQuery Acala baru. SubQuery ini secara dinamis melacak semua data ekstrinsik yang dibuat di Acala dan dapat dengan cepat menampilkan statistik gabungan yang diturunkan untuk hal-hal berikut:

-   Data Historis tentang perubahan likuiditas (dipecah berdasarkan provider)
-   Data Historis pada semua aset swap cross chain
-   Riwayat transfer

![](https://miro.medium.com/max/1400/0*sXPljA1RE754fuDQ)

Anda dapat bermain-main dengan Grafik SubQuery Acala menggunakan [Explorer](https://explorer.subquery.network/) tanpa mengimplementasikan apa pun dalam kode. Selain itu, kami telah mendokumentasikan jenis yang dapat Anda tentukan di setiap permintaan GraphQL saat menganalisis data Acala.

Di bawah ini adalah contoh sederhana bagaimana pengguna dapat dengan cepat dan mudah melihat 5 transfer event sebelumnya menggunakan token ACA melalui jaringan Acala Mandala. Anda dapat melihat di sini bahwa kami menggunakan bahasa GraphQL sederhana untuk mengurutkan dan mengambil data ini ke klien mana pun. DApps dapat menggunakan ini untuk memantau posisi pinjaman, dan beralih pada lelang dll untuk membantu melikuidasi jaminan.

![](https://miro.medium.com/max/1400/0*zlxPf2tz8DVX95kY)

Dilanjutkan dengan contoh yang sedikit lebih kompleks, di mana kami memeriksa satu akun dan mengambil semua event pertukaran token yang dilakukan oleh akun ini. Portofolio DApp mungkin menggunakan data ini untuk membuat ikhtisar tentang akun pemegang dan kinerja token, pendapatan dari staking, penyediaan likuiditas, dan biaya pinjaman.

![](https://miro.medium.com/max/1400/0*hdTbn41vDvIYuv3_)

[SubQuery Explorer](https://explorer.subquery.network/) adalah layanan host online yang menyediakan akses ke proyek SubQuery yang diterbitkan yang dibuat oleh kontributor di seluruh dunia dan dikelola oleh tim SubQuery. Misinya adalah untuk memudahkan akses ke data jaringan Polkadot dengan menyediakan layanan infrastruktur untuk membantu pengembang mencapai lebih banyak.

[SubQuery](https://www.subquery.network/) memungkinkan setiap tim Substrate/Polkadot untuk memproses dan mengkueri data mereka. Proyek ini terinspirasi oleh pertumbuhan protokol data yang melayani lapisan aplikasi dan tujuannya adalah untuk membantu proyek Polkadot/Substrate membangun dApp yang lebih baik dengan memungkinkan siapa pun untuk secara andal menemukan dan mengkonsumsi data lebih cepat. Hari ini, siapa pun dapat mengkueri dan mengekstrak data jaringan Polkadot hanya dalam hitungan menit dan tanpa biaya.

[Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

[Acala](http://acala.network/) adalah pusat keuangan terdesentralisasi dan stablecoin Polkadot yang membuatnya cepat dan mudah digunakan atau membangun aplikasi keuangan, meningkatkan efisiensi perdagangan dan menghemat waktu. Platform ini menawarkan serangkaian keuangan primitif: stablecoin multi-jaminan yang didukung oleh aset cross-chain seperti Bitcoin, sebuah derivatif staking trustless, dan pertukaran terdesentralisasi untuk melepaskan likuiditas dan mendorong inovasi keuangan. Acala adalah platform terbuka de facto untuk aplikasi keuangan untuk menggunakan smart contract atau protokol bawaan dengan kemampuan cross chain yang siap pakai dan keamanan yang kuat.

[Discord](https://discord.gg/vdbFVCH) | [Website](https://acala.network/) | [Twitter](https://twitter.com/AcalaNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [Acala Wiki](https://github.com/AcalaNetwork/Acala/wiki) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc)