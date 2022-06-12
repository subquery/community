# Karura Terintegrasi dengan SubQuery untuk Mengumpulkan dan Melayani Data DeFi untuk Kusama Builders

![](https://cdn-images-1.medium.com/max/1600/0*EBj5be1webNUchfi)

Dalam beberapa minggu terakhir, tim Karura dan Acala merayakan peluncuran [Karura Swap](https://apps.karura.network/), exchange terdesentralisasi pertama di ekosistem Polkadot/Kusama.

Hari ini, kami mengeksplorasi bagaimana SubQuery membantu membuat peluncuran ini dapat terlaksana. Karura menggunakan SubQuery untuk mengekstrak dan mengkueri data dari chain Karura, membuat kueri menjadi cepat dan efisien untuk [aplikasi Karura](https://apps.karura.network/).

> *"Using SubQuery makes building dapps easy, no more making a complicated series of calls to get the data I need."* - Brett (Developer at Acala)

Mengembangkan dApps di Karura sekarang jauh lebih cepat dengan proyek SubQuery publik baru yang diterbitkan oleh Karura. Ada [proyek SubQuery](https://explorer.subquery.network/subquery/AcalaNetwork/karura) yang tersedia untuk umum yang mana komunitas Karura dapat melakukan fork dan membangun dApp apa pun yang mereka inginkan. Additionally, a [Karura Dictionary](https://explorer.subquery.network/subquery/AcalaNetwork/karura-dictionary) makes [indexing much faster](../blogs/20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md).

![](https://cdn-images-1.medium.com/max/1600/1*vvI_pI93mhe4kzSNQ2yMoQ.png)

## Apa itu Karura?

Didirikan oleh Acala Foundation, Karura adalah jaringan yang dapat diskalakan dan kompatibel dengan EVM yang dioptimalkan untuk DeFi, dan dibangun di atas Kusama. Karura adalah platform DeFi all-in-one yang menawarkan serangkaian aplikasi keuangan termasuk: trustless staking derivative (liquid KSM), stablecoin multi-jaminan yang didukung oleh aset lintas chain (kUSD), dan AMM DEX (Karura Swap) --- semua dengan biaya gas mikro yang dapat dibayarkan dalam token apa pun. Buka [di sini](http://apps.karura.network) untuk mencoba aplikasi live yang menggunakan SubQuery.

![](https://cdn-images-1.medium.com/max/1600/0*g174RcFJwJcw2ITS)

Karura juga menyediakan model distribusi token yang etis dan berkelanjutan serta Karura Treasury on-chain, yang keduanya mendukung komunitas dan juga untuk jangka panjang. Karura adalah parachain pertama yang memenangkan lelang slot parachain di Kusama, mengumpulkan crowdloan lebih dari 500.000 KSM ($100 juta USD) dari komunitasnya. Because Karura leverages the novel Acala EVM, which enables Ethereum compatibility with unlimited Substrate\* functionality, the network is primed to support the deployment of leading DeFi projects who aim to expand their services beyond Ethereum.

*[Substrate](http://substrate.dev/) *is the blockchain-building framework for building on Polkadot and Kusama\*

[Baca lebih mendalam tentang Karura di sini](https://medium.com/acalanetwork/countdown-to-karura-a-deep-dive-on-the-defi-hub-of-kusama-410066fc1e1f)

## Tools terbuka untuk para Karura Dapp Builder

Sekarang terserah kepada komunitas Karura untuk membangun dApp komunitas pertama di DeFi hub dari Kusama. Di bawah ini adalah contoh sederhana bagaimana Karura dapat menggunakan SubQuery untuk menemukan dan mengambil ekstrinsik masa lalu (dan transfer di dalamnya) untuk akun apa pun di Karura --- Anda dapat melihat bahwa ini dibuat sepenuhnya online di [SubQuery explorer](https://explorer.subquery.network/subquery/AcalaNetwork/karura).

![](https://cdn-images-1.medium.com/max/1600/0*t6stH0LeQC8M5fSp)

## Tentang SubQuery

[SubQuery](https://subquery.network/) adalah layer agregasi data yang akan beroperasi antara layer-1 blockchain (Karura) dan dApps. SubQuery memungkinkan pengembang dApp untuk mengeksplorasi dan mengubah data on-chain untuk membangun dApps intuitif lebih cepat, tanpa perlu khawatir tentang membangun atau mengelola backend khusus untuk pemrosesan data. [Mulailah sekarang](https://doc.subquery.network/).

[Website](https://subquery.network/) | [Dokumentasi](https://doc.subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

## Tentang Karura

[Karura](http://acala.network/karura) adalah sebuah all-in-one DeFi hub dari Kusama. Didirikan oleh Acala Foundation, Karura adalah jaringan yang dapat diskalakan dan kompatibel dengan EVM yang dioptimalkan untuk DeFi. Platformnya menawarkan serangkaian aplikasi keuangan termasuk: trustless staking derivative (liquid KSM), stablecoin multi-jaminan yang didukung oleh aset lintas chain (kUSD), dan Karura Swap sebuah AMM DEX--- semua dengan biaya gas mikro yang dapat dibayarkan dalam token apa pun. Karura adalah platform blockchain yang dibuat khusus untuk DeFi dan didukung oleh KAR, yang memungkinkan penyelesaian transaksi dan eksekusi smart contract, memberi insentif kepada operator node, dan memberdayakan para pemegangnya untuk berpartisipasi dalam governance.

[Linktree](http://linktr.ee/karuranetwork) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc) | [Discord](https://discord.gg/vdbFVCH) | [Website](http://acala.network/karura) | [Twitter](https://twitter.com/KaruraNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [YouTube](http://youtube.com/c/acalanetwork)
