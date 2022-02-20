# SubQuery Merayakan Pemenang Gitcoin GR 12 Hackathon

![](https://miro.medium.com/max/1400/1*MnMY9j3nasex9_9MNHUPtA.png)

SubQuery, solusi pengindeksan data terkemuka di Polkadot, dengan senang hati mengumumkan pemenang [Gitcoin GR 12 Hackathon](https://gitcoin.co/hackathon/gr12?org=subquery) baru-baru ini. Gitcoin diakui sebagai salah satu komunitas pengembang blockchain terkemuka yang berfokus pada pembuatan komunitas dan aplikasi untuk Web3. [SubQuery bermitra dengan Gitcoin pada bulan Desember](https://subquery.medium.com/subquery-announces-gitcoin-hackathon-16c9d18753a) untuk mensponsori lima tantangan dengan nilai USD$37.000 (kumpulan hadiah terbesar dalam tantangan tersebut), mengundang pengembang untuk membangun alat yang berguna, dasbor, dan bahkan memperluas SubQuery ke Layer-1 lainnya rantai blok.

Hackathon berlangsung dari 1 - 16 Desember 2021 dengan proyek-proyek blockchain terkemuka seperti Moonbeam, Astar dan Acala berkontribusi pada berbagai kumpulan hadiah. Hadiah diberikan kepada mereka yang telah berhasil menyelesaikan proyek dengan standar yang telah ditentukan sebelumnya, dan yang menyampaikan ide-ide paling kreatif, atau mereka yang atau memecahkan area untuk meningkatkan SDK SubQuery inti. Rangkuman singkat dari tantangan-tantangan tersebut di bawah ini:

- [Buat penjelajah blok terpadu yang menggabungkan wawasan Substrat dan EVM dari Moonbeam dan Astar menjadi satu aplikasi yang mudah digunakan](https://gitcoin.co/issue/subquery/grants/1) — US$12.000 [Disponsori oleh Moonbeam dan Astar]
- [Buat dasbor hub DeFi yang terinspirasi oleh Zapper.fi atau defisaver.com](https://gitcoin.co/issue/subquery/grants/2) — US$8,000 [Disponsori oleh Acala]
- [Buat dasbor staking yang menunjukkan peluang staking terbaik di Polkadot dan berbagai parachainnya](https://gitcoin.co/issue/subquery/grants/3) — US$3,000
- [Buat penjelajah pasar untuk semua NFT berbasis protokol RMRK](https://gitcoin.co/issue/subquery/grants/4) — US$2.000
- [Perluas layanan @subql/node untuk mengindeks data dari chain layer 1 lainnya](https://gitcoin.co/issue/subquery/grants/5) — US$12.000

## EVM Terpadu dan Penjelajah Blok Substrat

Ekosistem Polkadot/Kusama terdiri dari blockchain (disebut Parachains) yang dibangun menggunakan Substrat, yang menggunakan API Substrat. Namun, Parachains tertentu, seperti Moonbeam dan Astar, menawarkan kompatibilitas Ethereum yang mulus dengan memiliki komponen EVM yang sepenuhnya kompatibel. Memiliki visibilitas simultan ke data Substrat dan EVM saat ini menantang, menghasilkan dua pengalaman terisolasi dalam Moonbeam dan Moonriver. Anda harus memilih antara sisi Substrat (mis., Subscan) dan sisi EVM (mis., Moonscan & Blockscout).

Tantangan ini dimaksudkan untuk mengatasi peluang besar untuk membangun satu tempat untuk memahami riwayat lengkap aktivitas dalam sebuah akun. Misalnya, untuk melihat tindakan staking dan governance serta transfer ERC20 dalam satu antarmuka pengguna. Ini akan menjadi aplikasi yang digunakan setiap hari oleh komunitas besar di dalam Moonbeam, Astar, dan banyak parachains kompatibel EVM lainnya yang lepas landas.

![](https://miro.medium.com/max/1400/0*b_o0NDpJOCv0QvXS)

Pemenang [tantangan ini](https://gitcoin.co/issue/subquery/grants/1/10002717200027175) adalah @bizzyvinci yang [telah membangun penjelajah frontend yang aktif di Heroku](https://moonriver-explorer.herokuapp.com/). Mengingat bahwa tantangan ini adalah tugas besar, tidak mengherankan bahwa ini belum 100% selesai, tetapi kami sangat senang untuk mendukung kemajuan inovasi yang mengubah permainan ini dan membantu memperluasnya ke chain EVM lainnya.

@bizzyvinci mengatakan sebagai berikut: “Saya membangun [Moonriver Explorer](https://moonriver-explorer.herokuapp.com/) dan itu adalah pengalaman yang luar biasa., Langkah pertama adalah belajar tentang SubQuery dan sialnya, mereka memiliki dokumentasi yang luar biasa yang disertai dengan repositori template. Dokumentasi mencakup semua yang diperlukan untuk memulai dan menjelaskan setiap aspek dengan baik seperti file manifes, skema graphql, dan lainnya.”

## Dasbor DeFi Karura/Acala

Acala dan Karura mewakili visi besar untuk masa depan DeFi, jadi ada peluang besar untuk membangun alat yang berharga bagi ekosistem. Tantangan ini mengharuskan pengembang untuk membuat alat DeFi untuk komunitas Karura/Acala yang terinspirasi oleh [Zapper.fi](http://zapper.fi/) dan [defisaver.com](http://defisaver.com/) yang memanfaatkan layanan pengindeksan data SubQuery.

Pemenang [tantangan ini](https://gitcoin.co/issue/subquery/grants/2/100027176) adalah Web3Go yang membuat ringkasan yang sangat bagus tentang [Posisi Utang Agunan (CDP) Acala](https://web3go.xyz/#/CDPDetail). Agar pengguna dapat mencetak stablecoin kUSD di Karura, mereka harus terlebih dahulu menyetor token dari salah satu aset agunan yang diterima (mis. KSM). Setelah pengguna melakukannya, parameter rasio jaminan minimum menentukan jumlah minimum jaminan yang diperlukan pengguna untuk mencetak kUSD. Jika harga pasar aset agunan CDP turun cukup rendah, CDP dapat dianggap “tidak aman”

![](https://miro.medium.com/max/1400/0*l7GA1axntiHCINRM)

Antarmuka Web3Go dengan bersih mencantumkan semua posisi CDP, rasionya, dan status amannya. Untuk setiap posisi juga memberikan informasi tentang sejarah posisi dan dengan mudah memungkinkan orang lain untuk memantau instrumen keuangan. <iframe width="560" height="315" src="https://www.youtube.com/embed/hc3YDjv6dkk" title="Pemutar video youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

## Dasbor Staking Polkadot

Staking adalah cara utama untuk menggunakan token DOT dan KSM Anda, tetapi saat ini UX untuk staking sulit dipahami dan mengakibatkan sebagian besar pengguna membuat pilihan yang tidak berpendidikan.

Tujuan tantangan ini adalah untuk menggabungkan data on-chain dan pengalaman pengguna yang intuitif, untuk membantu pengguna memahami perkiraan hasil taruhan terbaik, membandingkan kinerja historis validator, dan menunjukkan kepada pengguna kemungkinan laba atas investasi mereka.

Ashik membangun PolkStakes, [situs web peringkat validator Polkadot](https://polkstakes.vercel.app/) yang mengambil semua validator dan menampilkan daftar validator yang tertata rapi di Polkadot dengan peringkat PolkStake sendiri (berdasarkan kinerja era sebelumnya, komisi, pembayaran, dan hadiah taruhan, dll.). Ini adalah UI yang bersih dan sederhana yang benar-benar membuat kami terkesan.

![](https://miro.medium.com/max/1400/0*Kaho31-nn-ly8tFS)

“_Subquery mengurangi upaya dalam mengindeks data on-chain secara manual. Karena ia menawarkan titik akhir graphql, kita dapat melakukan kueri data dengan mudah. Ini mengurangi upaya dalam memelihara backend dan database. Sekarang, agregasi data untuk menghitung peringkat Polkstakes dilakukan di UI. Ini harus dipindahkan ke SubQuery. Selain itu, visualisasi yang lebih baik harus dilakukan untuk data yang diindeks dan perkiraan prediksi hasil yang lebih akurat harus ditambahkan._” — Ashik dari Polkdata

Tim SubVis yang luar biasa juga membuat [dasbor staking Polkadot yang cantik](https://polkadot-staking-dashboard.vercel.app/) yang menunjukkan statistik staking total dari waktu ke waktu dan kinerja validator di satu tempat. Fitur staking baru bergabung dengan halaman lelang dan crowdloan yang sudah ada yang terkenal dengan SubVis.

![](https://miro.medium.com/max/1400/0*uPDQdMug2JaZwMbA)

Terakhir, Web3Go memasukkan entri luar biasa lainnya dengan statistik staking terperinci di Moonriver. Mereka memberikan informasi bahkan tentang delegator untuk setiap collator, hadiah bersejarah yang diberikan oleh setiap collator, dan bahkan tindakan yang diambil collator. Mereka memberikan manfaat tambahan karena dapat menunjukkan riwayat taruhan untuk alamat dompet Anda sendiri.

![](https://miro.medium.com/max/1400/0*jQgOnvcaXt6cprJR)

## Penjelajah Pasar RMRK NFT

RMRK adalah protokol lanjutan dari lego NFT yang membuat NFT lebih dari sekadar jpeg. Tim di RMRK membawa standar baru NFT ke ekosistem DOT, dan memimpin dalam membangun generasi berikutnya.

Tantangan ini menuntut pembuatan dasbor mendetail yang melacak evolusi semua RMRK (berpotensi berfokus pada [Kanaria](https://kanaria.rmrk.app/)), termasuk transfer, riwayat emote, dan lainnya di seluruh RMRK2. Dasbor ini harus menggunakan proyek SubQuery yang berfokus pada RMRK2.

Pemenang [tantangan ini](https://gitcoin.co/issue/subquery/grants/4/100027174) adalah dasbor luar biasa lainnya dari Web3Go yang disebut [NFT Garden](https://web3go.xyz/#/NFTProfiler). Ini mencakup detail mendalam tentang setiap koleksi NFT, seperti harga rata-rata, volume, kisaran harga, dan semua transaksi untuk setiap item. Selain itu, ada beberapa visualisasi menarik pada semua sifat dalam NFT.

![](https://miro.medium.com/max/1400/0*1_mUnNIBYI84G_qs)

“_Sejak awal Web3Go, kami telah menggunakan SubQuery sebagai arsitektur dasar untuk pengindeksan data. Kit pengembangan yang disediakan oleh SubQuery telah terbukti sangat cocok bagi tim kami untuk mengembangkan, menyebarkan, dan meningkatkan proyek dengan cepat, yang juga merupakan kunci untuk hasil bagus kami di Gitcoin Hackathon. Pada langkah selanjutnya, kami akan menggunakan Subquery untuk mengembangkan dasbor untuk semua proyek di Polkadot & Parachains Kusama, yang akan melibatkan Defi, NFT, dan Token!_” kata Hao Ding dari Web3Go.

## Perluas SubQuery ke Blockchain Layer-1 lainnya

SubQuery berasal dari Polkadot, ini adalah rumah kami dan kami telah bekerja keras untuk membangun hubungan di ekosistem ini. Terlepas dari ini, kami juga percaya pada masa depan multi-rantai, seperti yang kami tahu bahwa akan ada banyak blockchain berbeda yang bekerja bersama untuk memecahkan masalah yang berbeda. Rencana jangka panjang kami adalah menggunakan SubQuery dan mengadaptasinya agar berfungsi untuk blockchain lain yang tidak memiliki solusi pengindeksan saat ini untuk membantu pengembang membangun dApps baru.

Pemenang [tantangan US$12.000 ini](https://gitcoin.co/issue/subquery/grants/5/100027175) adalah Naveen yang memperluas SubQuery untuk mengindeks blockchain Terra. Ini diimplementasikan dengan membuat fork yang memperluas paket node dari implementasi subql resmi ke indeks Terra. Naveen terus mengerjakan ini dan Anda dapat mengharapkan berita segera tentang rencana SubQuery untuk mendukung rantai lapisan 1 lainnya di luar Polkadot. <iframe width="560" height="315" src="https://www.youtube.com/embed/K_pjh5OC95A" title="Pemutar video youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

“_Saya telah mempelajari banyak pengindeks dalam beberapa bulan terakhir dan melangkah sejauh membangun pengindeks dari awal. Mungkin itulah alasan mengapa SubQuery menarik perhatian saya di Gitcoin GR12 Hackathon. Saya mengambil tugas memperluas SubQuery untuk mengindeks Terra. Saya tidak percaya bahwa saya bisa melakukan ini dalam 15 hari. Namun, SubQuery dirancang sedemikian rupa sehingga memungkinkan saya untuk membuat gambaran mental tentang apa yang terjadi di balik layar dengan sangat cepat. Saya meretas solusi yang berfungsi tepat pada waktunya dan saat ini saya bekerja dengan SubQuery untuk menggabungkan pengindeks Terra ke dalam paket subql. Di masa mendatang, saya akan terus bekerja dengan SubQuery untuk memelihara dan menskalakan proyek dan mungkin membangun pengindeks untuk beberapa rantai lapisan 1 lainnya_” kata Naveen.

[Sam Zou](https://twitter.com/zoujialiu), CEO dan Pendiri SubQuery berkomentar, “_SubQuery senang dengan hasil Hackathon Gitcoin GR12. Misi kami bergantung pada memiliki jaringan pengembang yang diberdayakan untuk membuat dan berinovasi dalam ekosistem Substrat/Polkadot. Kemitraan ini memberikan peluang bagi pengembang yang termotivasi di seluruh dunia untuk membangun aplikasi masa depan. Kami sangat antusias untuk membina para pemenang tantangan untuk mengembangkan ide mereka lebih jauh_”

Sebagai tindak lanjut dari Hackathon yang sukses ini, SubQuery ingin mendorong pengembang yang ingin mempelajari lebih lanjut tentang cara membuat aplikasi dengan SubQuery untuk

mendaftar ke “Kursus Pahlawan” online gratis kami, atau mendaftar untuk Program Hibah yang baru diumumkan</ 0>.</p> 



---



## Tentang SubQuery

[SubQuery](https://subquery.network/) adalah agregasi data terdesentralisasi, pengindeksan & lapisan kueri antara blockchain Layer-1 dan aplikasi terdesentralisasi. Layanan ini membuka kunci data blockchain dan mengubahnya menjadi status yang dapat ditanyakan sehingga dapat digunakan dalam aplikasi intuitif. Ini memungkinkan pengembang DApp untuk fokus pada kasus penggunaan inti dan front-end mereka, tanpa perlu membuang waktu untuk membangun backend khusus untuk pemrosesan data. Jaringan SubQuery yang akan datang akan mendesentralisasikan dan memberi token pada ekosistem untuk memungkinkan semua orang berpartisipasi dalam revolusi data web3.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
