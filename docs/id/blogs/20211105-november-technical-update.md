# Pembaruan Teknis SubQuery November: Pembaruan EVM dan Manifes

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**Baca selengkapnya untuk penjelasan teknis kami tentang rilis terbaru SubQuery**

# Dukungan untuk File Jenis Chain Eksternal di Manifes Proyek

Hari ini adalah peluncuran [versi 0.2.0](https://doc.subquery.network/create/manifest/) file manifes proyek kami (`project.yaml`). Versi baru ini memberikan pengembang dengan berbagai perbaikan yang telah diminta oleh pelanggan.

Yang terpenting, Anda sekarang dapat mereferensikan file definisi tipe chain yang memiliki semua tipe kustom yang disertakan saat Anda mengindeks chain substrat kustom. Ini dengan cepat memungkinkan Anda untuk menghubungkan proyek SubQuery baru ke chain berbasis substrat apa pun, termasuk semua parachain Kusama. Ini harus berupa file tipe chain standar yang menyatakan tipe spesifik yang didukung oleh blockchain ini dalam format `.json` atau `.yaml`.

Solusi ini memungkinkan Anda untuk menghindari penyalinan dan pengelolaan definisi tipe chain dalam manifes itu sendiri, dan memungkinkan Anda untuk hanya mengkloning [file tipe chain yang diterbitkan yang terdaftar di repositori seperti PolkadotJS](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec).

[Anda dapat membaca tentang file manifes baru, termasuk bagaimana Anda dapat memigrasikan proyek Anda ke sana, di sini di dokumen kami yang diperbarui.](https://doc.subquery.network/create/manifest/)

# Dukungan Moonbeam EVM

Minggu lalu kami dengan senang hati [mengumumkan bahwa kami bekerja dengan Moonbeam untuk menghadirkan dukungan pengindeksan EVM dan Substrat yang lengkap ke Moonriver](https://subquery.medium.com/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff).

Hari ini kami menindaklanjuti pengumuman itu dengan semua sumber daya pengembang yang Anda butuhkan untuk memulai.

Saat ini, tidak ada alat sumber terbuka yang memungkinkan pengembang untuk secara fleksibel mengumpulkan dan menanyakan data di Ethereum dan Polkadot/Kusama. Keterbatasan ini dapat menyebabkan solusi dApps di dalam Moonriver dikurung ke dalam lapisan kontrak pintar dan dengan demikian membatasi potensinya bagi konsumen di kedua jaringan yang berkembang pesat. Kemitraan dengan Moonbeam ini menghadirkan solusi pengindeksan data yang lengkap dan terpadu untuk semua data blockchain di dalam Moonriver dan akan sangat menguntungkan ekosistem aplikasi Moonriver yang sedang berkembang.

**SubQuery akan menjadi tamu di Workshop Moonbuilders berikutnya pada hari Rabu tanggal 1 Desember,** [**daftar di sini**](https://www.crowdcast.io/e/moonbuilders-ws/10)**.**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[Pertama, pelajari dokumentasi terbaru tentang cara menghubungkan dan mengindeks data dari Moonbeam, Moonbase Alpha, dan Moonriver.](https://doc.subquery.network/create/moonbeam/) Proses untuk mengindeks data Moonbeam hanya dua langkah:

## Langkah 1: Tambahkan Data Source Khusus Moonbeam

Kami telah membuat pemroses data yang dibuat khusus untuk bekerja dengan implementasi [Frontier](https://github.com/paritytech/frontier) Moonbeam. Hal ini memungkinkan Anda untuk mereferensikan sumber daya ABI tertentu yang digunakan oleh prosesor untuk mengurai argumen dan alamat kontrak pintar dari mana peristiwa itu berasal atau panggilan dilakukan. [Anda dapat membaca selengkapnya di sini](https://doc.subquery.network/create/moonbeam/#data-source-spec).

SubQuery introduces more advanced filters than other indexers, allowing filtering of non-contract transactions, transaction senders, contracts and indexed log arguments. This allows developers to build a wide variety of projects that cater to their specific data needs.

## Step 2: Index Moonbeam Data

Just like a normal SubQuery project, you use a mapping function to transform off chain data to the GraphQL entities that you define, the difference is that instead of a `SubstrateEvent` or `SubstrateExtrinsic`, your mapping function will receive a `MoonbeamCall` or `MoonbeamEvent` which are based on Ether's [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) or [Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log) type. [You can read more about these here](https://doc.subquery.network/create/moonbeam/#moonbeamcall).

[Read the full documentation on this process here](https://doc.subquery.network/create/moonbeam/#moonbeamcall)

## Example Project

There is a complete example project that indexes eth `transfer` events and `approve` smart contract calls. The code for this example project is [here on GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter) or accessible via the [live SubQuery project on SubQuery Explorer here](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project).

The bulk of the changes happen in the Manifest file (`project.yaml`). You can see below that we have [extended call filters](https://doc.subquery.network/create/moonbeam/#call-filters) to support either [function signature strings](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) or the function sighash to filter the function called on the contract. For [event filters](https://doc.subquery.network/create/moonbeam/#event-filters), you can use topics filtering that follows the [Ethereum JSON-PRC log filters standard found here](https://docs.ethers.io/v5/concepts/events/). Note that SubQuery introduces more advanced filters than other indexers for Moonbeam EVM and these improvements should significantly benefit developers.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

If you are familiar with how Substrate based SubQuery project are made, you’ll notice how similar the mapping functions are for the new Moonriver support. Each mapping function receives a `MoonbeamCall` or `MoonbeamEvent` and processes them just like any other SubQuery project.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

If you have any questions about this make sure you [check our docs](https://doc.subquery.network/create/moonbeam) or reach out to us on our #technical-support channel in our [Discord community](https://discord.com/invite/subquery).

[Clone the example project on GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

As you can see, creating a Moonriver or Moonbase Alpha project that indexes both Substrate and EVM data in a single project is extremely simple and largely similar. You can use SubQuery’s advanced scaffolding tools to speed up your dApp development and take advantage or richer indexing for you data to build more intuitive dApps. We can’t wait to see what you build!

## About SubQuery

SubQuery is a data aggregation layer that operates between the layer-1 blockchains (such as Moonriver and Polkadot) and DApps. This service unlocks blockchain data and transforms it to a queryable state so that it can be used in intuitive applications. It allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## About Moonbeam

Moonbeam is an Ethereum-compatible smart contract platform on the Polkadot network that makes it easy to build natively interoperable applications. This Ethereum compatibility allows developers to deploy existing Solidity smart contracts and DApp frontends to Moonbeam with minimal changes. As a parachain on the Polkadot network, Moonbeam will benefit from the shared security of the Polkadot relay chain and integrations with other chains that are connected to Polkadot. Currently in active development by PureStake, Moonbeam is expected to reach MainNet by Q4 2021. Learn more: [https://moonbeam.network/](https://moonbeam.network/).
