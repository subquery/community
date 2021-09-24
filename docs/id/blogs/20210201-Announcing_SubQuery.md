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

Setelah ini diterapkan, fase terakhir kami adalah membuat tokenisasi bisnis SubQuery dengan membangun chain kami sendiri (kemungkinan parachain) untuk Polkadot. Although we’ll provide a similar billing model for enterprise and high consumption users (subscription plan with consumption levels), we’ll save this data to our chain to make it transparent to everyone and participating parties can stake for rewards as incentives. We’ll issue a governance token to provide stability to the chain and to allow the community to influence our direction and roadmap.

Despite over 10 years of development since bitcoin first started, centralised networks are still the mainstream. It’s largely due to the speed and cost of accessing and writing to the network. Ethereum made a huge step forward with decentralised smart contracts (and the Graph is an incredibly successful piece of infrastructure as a result), but the core network is struggling to mitigate transaction costs.

We saw Polkadot’s potential early and right from the start it felt natural to focus our efforts there. It solves Ethereum’s governance, forking, interoperability problems, and more. The core premise of Polkadot is to create a thriving community of developers, users, and businesses that will tap into its multichain interoperability — that community is going to need a service that allows them to reliably find and consume data quickly.

Polkadot’s unique architecture means that we can focus on one network and then be able to support multiple current and future chains with ease. By putting in this effort now, even as Polkadot is still under development, we will be there ready to help the next generation of blockchain developers create the next big dApp.

SubQuery will be built by the team at OnFinality, which is an infrastructure SaaS platform for blockchain teams and users to launch nodes and get access to a large range of blockchain protocols. We have a suite of symbiotic services including our API shared node service, and dedicated nodes that can be used in infrastructure management or as part of a protocol team’s CI/CD testing pipeline. We have relationships with the top Polkadot/Substrate teams, expertise in managed infrastructure hosting for the Substrate/Polkadot network, and the ability to deliver complex infrastructure projects and host them for production use.

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