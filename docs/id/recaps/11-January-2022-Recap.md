# Rekap Januari

![](https://miro.medium.com/max/1400/1*2IMAaY-YYyAdl7YfZqHTAg.png)

Halo semuanya, dan selamat datang di 2022! Tahun lalu sangat besar bagi kami di SubQuery, tetapi setelah liburan musim panas yang sangat dibutuhkan di sini, di Selandia Baru, tim telah beristirahat dengan baik dan diberi energi oleh potensi yang ada di depan kami. Tahun ini akan menjadi tahun revolusi data terdesentralisasi!

Seperti biasa, kami membagi pembaruan bulanan kami menjadi tiga bagian; komunitas, pengembangan produk inti, dan Jaringan SubQuery.

## Komunitas

Komunitas SubQuery berkembang pesat dalam hal jumlah dan wilayah yang kami cakup! Akibatnya, kami memiliki banyak hal untuk dibicarakan di bidang ini.

### SubQuery Bermitra Dengan Tim Polkadot Terkemuka Tentang Bounty Teknis melalui Program Grants SubQuery

Bulan lalu kami meluncurkan SubQuery Grants Programme, akselerator non-dilutif untuk membantu developer di komunitas kami membangun dApps generasi berikutnya. Bulan ini kami telah berbicara dengan mitra kami untuk merilis putaran pertama hadiah dalam kemitraan dengan Moonbeam, Acala, Astar dan Bifrost sebagai proyek untuk inspirasi. Semua terbuka untuk melamar sekarang, dan sebagai bonus, jika aplikasi Anda berhasil, Anda akan bekerja sama dengan tim parachain yang menyarankan tantangan!

Pelamar yang tertarik dengan salah satu Bounty ini didorong untuk mengirimkan proposal mereka dengan anggaran yang dibutuhkan untuk menyelesaikan tugas dan persyaratan lainnya [di sini](https://docs.google.com/forms/d/e/1FAIpQLSfmMazkebKwNTWThBkVGaxf2Bg8s4aWZ0ZhwiMCtc9kv4sJHQ/viewform). Selain itu, kami berharap dapat mengumumkan putaran pertama penerima SubQuery di bulan Februari.

[Baca selengkapnya disini](../blogs/20220127-grants-bounties.md)

### SubQuery Merayakan Pemenang Gitcoin GR 12 Hackathon

[SubQuery partnered with Gitcoin in December](../blogs/20211120-gitcoin12-hackathon.md) to sponsor five challenges to a value of USD$37,000 (the largest prize pool in the challenge), inviting developers to build useful tools, dashboards and even extend SubQuery to another Layer-1 blockchain.

![](https://miro.medium.com/max/1400/1*BUq3ah1ULNnvLjqxv_vzlQ.png)

[Sam Zou](https://twitter.com/zoujialiu), CEO dan Pendiri SubQuery berkomentar, “_SubQuery senang dengan hasil Hackathon Gitcoin GR12. Misi kami bergantung pada memiliki jaringan pengembang yang diberdayakan untuk membuat dan berinovasi dalam ekosistem Substrat/Polkadot. Kemitraan ini memberikan peluang bagi pengembang yang termotivasi di seluruh dunia untuk membangun aplikasi masa depan. Kami sangat antusias untuk membina para pemenang tantangan untuk mengembangkan ide mereka lebih jauh_”

Recently we’ve covered the many winners that participated in this hackathon and the amazing projects that they have built in [this detailed writeup](../blogs/20220120-gr12-winners.md). Kami terpesona oleh kualitas dan kemajuan yang dibuat oleh kiriman dalam waktu yang begitu singkat dan kami senang mengundang banyak kiriman untuk berpartisipasi dalam program grants kami.

[Baca selengkapnya disini](../blogs/20220120-gr12-winners.md)

### Hero Course China

Hero course kami yang dibuat dalam kemitraan dengan OneBlock+ dimulai pada awal Januari dan sekarang kami telah merilis tiga pelajaran untuk lebih dari 200 siswa! Bergabunglah dengan Komunitas OneBlock+ untuk bergabung dengan kursus atau jam kerja ini. China adalah wilayah yang penting secara strategis untuk SubQuery, tetapi kami berharap untuk segera meluncurkan banyak kursus pengembang regional lainnya — hubungi kami jika Anda dapat membantu kami dalam hal ini!

![](https://miro.medium.com/max/1400/1*_8N000hX1WBM79ZbFyhvYQ.png)

## Pengembangan Produk Inti

### Dukungan Multi Chain

SubQuery berasal dari Polkadot, ini adalah rumah kami dan kami telah bekerja keras untuk membangun hubungan di ekosistem ini. Premis inti Polkadot adalah untuk menciptakan komunitas pengembang, pengguna, dan bisnis yang berkembang yang akan memanfaatkan interoperabilitas multichain. Kami mendukung visi itu dan kami juga percaya Polkadot akan menjadi pemain terkemuka dalam inisiatif itu.

Tapi kami percaya pada masa depan multi-chain, kami tahu bahwa akan ada banyak blockchain yang saling bekerja sama untuk memecahkan masalah yang berbeda. Rencana jangka panjang kami selalu menggunakan SubQuery dan mengadaptasinya agar berfungsi untuk blockchain lain yang tidak memiliki solusi pengindeksan saat ini. Pendekatan multi-chain kami yang kami perlukan untuk Polkadot berarti kami secara unik cocok untuk tantangan ini.

Kami sedang menyelesaikan pekerjaan pertama dari 5 chain layer 1 baru yang akan diindeks oleh SubQuery, kami tidak sabar untuk segera mengumumkannya!

![](https://miro.medium.com/max/1400/1*jD1n5MSjeatjiaF5hY-Wjg.png)

### Peningkatan Kinerja SubQuery

Kecepatan pengindeksan SubQuery selalu ditingkatkan, ini merupakan fokus konstan pada tim pengembangan kami. Dukungan Kamus canggih kami memungkinkan ini, Kamus mempercepat proyek Anda dengan banyak kelipatan dan memungkinkan Anda untuk mengindeks seluruh chain Polkadot dalam hitungan menit, bukan jam (tergantung pada kompleksitas proyek Anda).

Sebagai indikator luasnya dukungan yang ditawarkan SubQuery ke ekosistem Polkadot, kami sekarang menghosting dan mengelola kamus di 31 jaringan yang berbeda, yang mewakili sebagian besar dari semua parachain Polkadot/Kusama utama.

![](https://miro.medium.com/max/1400/1*WeMY5WnWZ_jvllxidhycUA.png)

### Registri Template SubQuery

**29 networks are covered by templates**

The `subql init` command is a familiar one for anyone that has built a SubQuery project; it represents a blank canvas — limitless opportunities. We are aware that we can do better to help others get started, rather than a blank canvas developers want a blank scaffold, where all the boiler-plate code is already written.

Today when you write `subql init`, you are presented with a list of 29 networks from which you are provided a pre-created scaffold with all the correct endpoints, dictionary links, and even type definitions. This eliminates one of the most difficult steps when starting a new SubQuery project and makes building your next big dApp that much easier and faster.

### Fitur Agregasi Data

SubQuery now supports advanced GraphQL aggregate functions to allow you to perform a calculation on a set of values during your query. These functions provide our customers a richer set of insights and calculations from their existing data set. For example with a single query you can calculate the median contribution amount for each crowdloan broken down by contribution date.

[Read more about how to use these features in our upgraded docs.](https://doc.subquery.network/query/aggregate/)

### SubQuery bermitra dengan Darwinia Network untuk membangun Alat CLI SubQuery

Darwinia has partnered with SubQuery to build the plethora of applications that will be needed to provide the ultimate user experience for cross chain interactions. This includes a new [Smart App that is a central hub](https://apps.darwinia.network/) to manage all Darwinia network interactions including governance, staking, chain exploration and more. This app uses a considerable amount of [SubQuery data to show historic data and actions](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery will be working closely with the team at Darwinia to make this the best experience in the entire Polkadot ecosystem.

![](https://miro.medium.com/max/1200/1*bL2Csj9qyamD7txAheCTIg.gif)

Darwinia have also been working closely with the SubQuery team to [build a CLI tool](https://github.com/fewensa/subquery-cli) for the SubQuery managed service (https://project.subquery.network). You can use this [CLI](https://github.com/fewensa/subquery-cli) to create a SubQuery project and automatically deploy a new version to either the staging or production slot. Additionally you can retrieve information including the detailed syncing status and logs from your running project that is hosted for free in SubQuery Projects. [Read more here](../customer_announcements/20220125-subquery-partners-with-darwinia-network-to-build-subquerys-cli-tool.md)

## SubQuery Network

Last community call we walked through a few important details of the upcoming SubQuery test network. It will be run over at least three seasons, each season will test different aspects of the network:

- Musim 1: Pengujian alfa tahap awal dari sejumlah fitur terbatas dengan beberapa peserta terpilih
- Musim 2: Pengujian beta besar untuk lebih banyak fitur dengan ratusan peserta
- Musim 3: Jaringan uji publik penuh untuk pengujian beban dan skala dengan ribuan peserta

Each season will have multiple challenges that you can complete which may result in real SQT rewards. Expect things to kickoff here in March!

## Roadmap Terbaru

Last October we released out [technical roadmap](https://blog.subquery.network/blogs/20211029-roadmap-october.html) with the next year mapped out for SubQuery, we’re overdue to address exactly how we’re doing here.

![](https://miro.medium.com/max/1400/1*2a3SGrW-OG5pbw67jsavvw.jpeg)

As you can see in the original roadmap above, we’ve completed all of Milestone 0 and 1, and are making good progress on Milestone 2. We’ve even delivered some features relevant to our hosted service much earlier than expected due to the huge scale of requests currently going to [our enterprise customers](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html).

## Hal-hal lain yang mungkin Anda lewatkan

- Kami akan memiliki jam kantor mingguan di Server Discord kami! Bergabunglah dengan 'Jam Kerja' SubQuery di saluran panggung kami di mana Anda dapat mengejar ketinggalan dengan tim dalam lingkungan yang santai.
- Kami mengadakan QnA Rusia dengan James & Dmytro in Discord di mana semua pertanyaan diajukan dan dijawab dalam bahasa Rusia. Beri tahu kami bahasa apa yang ingin Anda dengar selanjutnya

P.S.

Remember to join our [Discord](https://discord.com/invite/subquery) and our [social channels](https://linktr.ee/subquerynetwork) to stay updated on our latest news and announcements.

The SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Email](hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
