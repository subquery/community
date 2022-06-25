# Dukungan SubQuery Cosmos/Juno --- Developer Deep Dive

![](https://miro.medium.com/max/1400/0*29dsUJbyIb34mYkF)

Sejak keruntuhan ekosistem Terra/Luna yang tidak menguntungkan, kami telah berbicara dengan ekosistem lain di Kosmos (pun intended) dan telah menemukan rumah pertama kami di [Juno](https://www.junonetwork.io/). Kami telah mengadaptasi dukungan Terra asli kami di belakang layar dan mengujinya dengan mitra peluncuran pengembangan utama. Kami bangga untuk merilis dukungan kami yang lebih luas untuk Cosmos dengan implementasi pertama kami khusus untuk Juno, dalam artikel ini kami membagikan panduan pengembang terperinci dan peta jalan untuk semua komunitas Cosmos untuk digunakan untuk menyelesaikan kebutuhan pengindeksan data mereka.

SubQuery adalah pengindeks data terbuka yang fleksibel dan cepat. Alat pengindeksan terbuka kami dirancang untuk membantu pengembang membangun API mereka sendiri dalam hitungan jam, dan dirancang untuk mengindeks rantai dengan sangat cepat dengan bantuan kamus (indeks yang telah dihitung sebelumnya). Our experience with customers across all verticals in Polkadot and Avalanche (wallets, networks, explorers, NFT, DeFi, scanners, etc) has helped us build this.

Ini masih dalam versi awal, dan meskipun kami menganggapnya jauh melampaui "beta", kami akan sangat menghargai jika ada bug yang dapat dilaporkan ke tim kami sehingga kami dapat mengatasinya dengan cepat.

## Mengapa Menggunakan SubQuery?

Ini masih dalam versi awal, dan meskipun kami menganggapnya jauh melampaui "beta", kami akan sangat menghargai jika ada bug yang dapat dilaporkan ke tim kami sehingga kami dapat mengatasinya dengan cepat. Dalam kebanyakan kasus ketika kami bertanya kepada tim bagaimana mereka menyelesaikan kebutuhan pengindeksan data mereka, itu adalah:

- **Buat solusi Anda sendiri:** Penerapan kustom yang berjalan sendiri yang dibuat khusus untuk aplikasi Anda. Tapi mengapa menemukan kembali roda? SubQuery berfokus pada membangun pengindeks terbuka yang andal dan cepat --- kami di sini untuk menghemat waktu Anda
- **Merancang kontrak cerdas untuk kueri:** Beberapa tim bahkan menerapkan kebiasaan khusus dalam kontrak cerdas mereka untuk secara khusus memungkinkan kueri lebih lanjut khusus untuk logika aplikasi mereka.

Di SubQuery, kami memiliki SDK sumber terbuka yang mudah digunakan dan secepat kilat. Ini memberi Anda titik akhir GraphQL standar, atau Anda bisa langsung menanyakan database postgres. Dengannya, Anda dapat mengindeks kumpulan data unik dari smart contract Anda sendiri yang memungkinkan Anda membangun produk unggulan yang mengalahkan pesaing Anda! Kami memberi Anda fleksibilitas untuk mendapatkan data yang Anda butuhkan dalam bentuk yang paling sesuai untuk Anda.

Keandalan adalah kuncinya, dan Anda memerlukan platform yang andal dan skalabel untuk menampungnya. [Layanan terkelola SubQuery](https://subquery.network/managedservices) adalah solusi hosting terdepan di industri untuk semua pelanggan yang melayani ratusan juta permintaan harian ke proyek terbesar di Polkadot. Kami menyediakan [pelanggan tingkat perusahaan](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html) layanan seperti database khusus, cluster redundan, perutean multi-cluster yang cerdas, serta pemantauan dan analitik lanjutan. Ini akan mendukung aplikasi Anda saat Anda siap dan akan menskalakan bersama Anda.

Dan terakhir, dalam beberapa bulan Anda akan dapat mendesentralisasikan infrastruktur SubQuery Anda sepenuhnya dengan Jaringan SubQuery, infrastruktur Web3 masa depan. Jaringan SubQuery akan mengindeks dan melayani data proyek Anda ke komunitas global dengan cara yang berinsentif dan dapat diverifikasi. Ini dirancang untuk mendukung proyek SubQuery apa pun dari jaringan layer-1 mana pun termasuk Cosmos, sehingga Anda dapat memanfaatkan skala Jaringan SubQuery terpadu sejak peluncuran.

## Petunjuk Awal

The best way is to start with [our starter project](https://github.com/subquery/juno-subql-starter) which contains a running project with an example of all mapping functions. You'll need to install a recent version of `@subql/cli` via `npm i -g @subql/cli@latest`.

If you don't want to see a kitchen sink example, you can follow a step by step guide on how to create a real world example. Follow our [quick start tutorial](https://doc.subquery.network/quickstart/quickstart-cosmos.html) to see how to index all Terra Development Fund votes on the Juno network in less than 15 minutes.

With SubQuery's Comos integration, we can index the following:

- BlockHandler: All blocks and their hash and height
- TransactionHandler: All transactions and their hash, height, and timestamp
- EventHandler: All smart contract transfer events and their hash, height, sender, recipient, and amount, this can be filtered to a specific smart contract
- MessageHandler: All smart contract messages and their hash, height, contract, sender, and execute_msg data, this can be filtered to a specific smart contract

SubQuery supports indexing Juno's smart contracts with both transaction and message subscriptions and handlers. You can see a working example of Smart Contract support in the [starter project](https://github.com/subquery/juno-subql-starter) and read the documentation on the [SubQuery Documentation](http://doc.subquery.network/build/manifest.html#mapping-handlers-and-filters).

SubQuery's Cosmos implementation has been designed to operate almost identically to SubQuery's Polkadot support, and in a similar way to the Graph's approach. We've updated the [SubQuery Documentation](https://doc.subquery.network/) to add Cosmos specific information to the general SubQuery documentation. You can start by following this [excellent getting started guide here](https://doc.subquery.network/quickstart/quickstart-cosmos.html).

## Our Cosmos Support

As part of our multi-chain ambitions, we are planning to support the entire Cosmos ecosystem in the long term. Our first implementation starts specifically with Juno where we have completed most of our testing and are confident that this works.

However, we are confident that this SubQuery implementation should work seamlessly with most other Cosmos chains that implement CosmWasm. While SubQuery's Cosmos support begins with [Juno](https://www.junonetwork.io/), the service should work with [Cronos](https://cronos.org/), [OKExChain](https://www.okex.com/), [Osmosis](https://osmosis.zone/), [Secret Network](https://scrt.network/), [Stargaze](https://stargaze.zone/), and [Injective](https://injective.com/). We have additionally successfully tested this on CosmosHub, all you need to do is add a non-pruned archive node endpoint and import correct protobuf messages in the [project.yaml](https://github.com/subquery/juno-subql-starter/blob/a177837a36c86fda8fb2bdbd7a83bb408c89d4bd/project.yaml#L24).

## Deploying your Project to SubQuery's Managed Service

Although you will always be able to run your project in your own infrastructure easily, [SubQuery's managed service](https://subquery.network/managedservices) now supports Cosmos projects. Some of the biggest projects depend on SubQuery's [enterprise level](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html) managed service and now you can too. As part of our launch partner agreement, we are providing you with 3 months free hosting.

You can [follow the guide here](https://doc.subquery.network/run_publish/publish.html) to publish your Cosmos SubQuery project to our managed service. Please note that you must host your [SubQuery project using IPFS](https://university.subquery.network/run_publish/publish.html) rather than GitHub.

You can update your managed service project as much as you want. We even have a [staging deployment slot](https://blog.subquery.network/blogs/20210604-Deployment-Slots-are-here-for-SubQuery-Projects.html) to allow you to do seamless blue/green upgrades without any downtime. This staging slot can also be used to run a clean instance of SubQuery with a fresh database for complete background reindexing of your project. Customers usually link the staging slot to the staging/development versions of their applications.

Once deployed, you can access your project using the SubQuery Explorer, and make requests directly from your app to the provided GraphQL endpoint. Let us know if you would like us to enable more advanced features like [GraphQL subscriptions](https://university.subquery.network/run_publish/subscription.html), more complex queries, and [aggregation functions](https://university.subquery.network/run_publish/aggregate.html).

Please notify us once you have deployed your project as we may need to assist with fine tuning the batch size to ensure that our Juno archive node runs well for your project.

## Summary

Today we are sharing the following:

- Advanced Indexing of blocks, event
- Full support for Cosmos in our free [enterprise level](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html) managed service
- Intuitive documentation in the [SubQuery Documentation](https://doc.subquery.network/)

In the coming weeks you can expect:

- Cosmos Dictionary: Pre-computed indices to [dramatically reduce indexing time](https://blog.subquery.network/blogs/20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.html)
- A step by step learning course in the [SubQuery Academy](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
- Full support for Cosmos in our decentralised SubQuery Network (you'll soon see a project in our current Frontier test network)

---

The launch of our beta support means SubQuery provides multi-chain support for three leading layer-1's focusing on the multi-chain approach (Polkadot, Avalanche, and Cosmos). We are eager to get feedback from the community in order to improve our offering and increase our visibility as a trusted infrastructure partner for one of the fastest growing developer communities in Web3

*James Bayly*

## Links

- [Getting Started Guide](https://doc.subquery.network/quickstart/quickstart-cosmos.html)
- [SubQuery University (Documentation)](https://doc.subquery.network/)
- [Example Cosmos (Juno) Project --- Kitchen sink example](https://github.com/subquery/juno-subql-starter)
- [Example Cosmos (Juno) Project --- Terra development fund votes](https://github.com/jamesbayly/juno-terra-developer-fund-votes)
- [Managed Service](https://explorer.subquery.network/)
- [Publish your own Cosmos Project to the Managed Service](https://project.subquery.network/)

## About SubQuery

[SubQuery](https://subquery.network/) is a blockchain developer toolkit enabling others to build Web3 applications of the future. A SubQuery project is a complete API to organise and query data from layer-1 chains. Currently servicing Polkadot, Substrate, Avalanche, and now Cosmos projects, this data-as-a-service allows developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The SubQuery Network proposes to enable this same scalable and reliable solution, but in a completely decentralised way.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
