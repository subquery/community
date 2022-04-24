# Pembaruan Teknis SubQuery November: Pembaruan EVM dan Manifes

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**Baca selengkapnya untuk penjelasan teknis kami tentang rilis terbaru SubQuery**

## Support for External Chain Type Files in Project Manifest

Hari ini adalah peluncuran [versi 0.2.0](https://doc.subquery.network/create/manifest/) file manifes proyek kami (`project.yaml`). Versi baru ini memberikan pengembang dengan berbagai perbaikan yang telah diminta oleh pelanggan.

Yang terpenting, Anda sekarang dapat mereferensikan file definisi tipe chain yang memiliki semua tipe kustom yang disertakan saat Anda mengindeks chain substrat kustom. Ini dengan cepat memungkinkan Anda untuk menghubungkan proyek SubQuery baru ke chain berbasis substrat apa pun, termasuk semua parachain Kusama. Ini harus berupa file tipe chain standar yang menyatakan tipe spesifik yang didukung oleh blockchain ini dalam format `.json` atau `.yaml`.

Solusi ini memungkinkan Anda untuk menghindari penyalinan dan pengelolaan definisi tipe chain dalam manifes itu sendiri, dan memungkinkan Anda untuk hanya mengkloning [file tipe chain yang diterbitkan yang terdaftar di repositori seperti PolkadotJS](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec).

[Anda dapat membaca tentang file manifes baru, termasuk bagaimana Anda dapat memigrasikan proyek Anda ke sana, di sini di dokumen kami yang diperbarui.](https://doc.subquery.network/create/manifest/)

## Moonbeam EVM Support

Last week we were pleased to [announce that we were working with Moonbeam to bring complete EVM and Substrate indexing support to Moonriver](../customer_announcements/20211028-moonbeam-evm.md).

Hari ini kami menindaklanjuti pengumuman itu dengan semua sumber daya pengembang yang Anda butuhkan untuk memulai.

Saat ini, tidak ada alat sumber terbuka yang memungkinkan pengembang untuk secara fleksibel mengumpulkan dan menanyakan data di Ethereum dan Polkadot/Kusama. Keterbatasan ini dapat menyebabkan solusi dApps di dalam Moonriver dikurung ke dalam lapisan kontrak pintar dan dengan demikian membatasi potensinya bagi konsumen di kedua jaringan yang berkembang pesat. Kemitraan dengan Moonbeam ini menghadirkan solusi pengindeksan data yang lengkap dan terpadu untuk semua data blockchain di dalam Moonriver dan akan sangat menguntungkan ekosistem aplikasi Moonriver yang sedang berkembang.

**SubQuery akan menjadi tamu di Workshop Moonbuilders berikutnya pada hari Rabu tanggal 1 Desember,** [**daftar di sini**](https://www.crowdcast.io/e/moonbuilders-ws/10)**.**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[Firstly, familiarize yourself with the updated documentation on how to connect to and index data from Moonbeam, Moonbase Alpha, and Moonriver.](https://doc.subquery.network/create/substrate-evm/) The process to index Moonbeam data is only two steps:

### Step 1: Add the Moonbeam Custom Data Source

Kami telah membuat pemroses data yang dibuat khusus untuk bekerja dengan implementasi [Frontier](https://github.com/paritytech/frontier) Moonbeam. Hal ini memungkinkan Anda untuk mereferensikan sumber daya ABI tertentu yang digunakan oleh prosesor untuk mengurai argumen dan alamat kontrak pintar dari mana peristiwa itu berasal atau panggilan dilakukan. [You can read more here](https://doc.subquery.network/create/substrate-evm/#data-source-spec).

SubQuery memperkenalkan filter yang lebih canggih daripada pengindeks lainnya, memungkinkan pemfilteran transaksi non-kontrak, pengirim transaksi, kontrak, dan argumen log yang diindeks. Hal ini memungkinkan pengembang untuk membangun berbagai macam proyek yang memenuhi kebutuhan data spesifik mereka.

### Step 2: Index Moonbeam Data

Sama seperti proyek SubQuery biasa, Anda menggunakan fungsi pemetaan untuk mengubah data rantai ke entitas GraphQL yang Anda tentukan, perbedaannya adalah alih-alih `SubstrateEvent` atau `SubstrateExtrinsic`, fungsi pemetaan Anda akan menerima `MoonbeamCall` atau `MoonbeamEvent` yang didasarkan pada jenis [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) atau [Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log) Eter. [You can read more about these here](https://doc.subquery.network/create/substrate-evm/#frontierevmcall).

[Baca dokumentasi lengkap tentang proses ini di sini](https://doc.subquery.network/create/substrate-evm/#frontierevmcall)

### Example Project

Ada proyek contoh lengkap yang mengindeks peristiwa `transfer` dan `menyetujui` panggilan kontrak pintar. Kode untuk proyek contoh ini [di sini di GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter) atau dapat diakses melalui [proyek SubQuery langsung di SubQuery Explorer di sini](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project).

Sebagian besar perubahan terjadi di file Manifes (`project.yaml`). You can see below that we have [extended call filters](https://doc.subquery.network/create/substrate-evm/#call-filters) to support either [function signature strings](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) or the function sighash to filter the function called on the contract. For [event filters](https://doc.subquery.network/create/substrate-evm/#event-filters), you can use topics filtering that follows the [Ethereum JSON-PRC log filters standard found here](https://docs.ethers.io/v5/concepts/events/). Perhatikan bahwa SubQuery memperkenalkan filter yang lebih canggih daripada pengindeks lain untuk Moonbeam EVM dan peningkatan ini akan sangat menguntungkan pengembang.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

Jika Anda mengetahui bagaimana proyek SubQuery berbasis Substrat dibuat, Anda akan melihat betapa miripnya fungsi pemetaan untuk dukungan Moonriver yang baru. Setiap fungsi pemetaan menerima `MoonbeamCall` atau `MoonbeamEvent` dan memprosesnya sama seperti proyek SubQuery lainnya.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

If you have any questions about this make sure you [check our docs](https://doc.subquery.network/create/substrate-evm) or reach out to us on our #technical-support channel in our [Discord community](https://discord.com/invite/subquery).

[Kloning proyek contoh di GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

Seperti yang Anda lihat, membuat proyek Moonriver atau Moonbase Alpha yang mengindeks data Substrat dan EVM dalam satu proyek sangat sederhana dan sebagian besar serupa. Anda dapat menggunakan alat scaffolding canggih SubQuery untuk mempercepat pengembangan dApp Anda dan memanfaatkan atau pengindeksan yang lebih kaya untuk data Anda guna membangun dApps yang lebih intuitif. Kami tidak sabar untuk melihat apa yang Anda buat!

## About SubQuery

SubQuery adalah lapisan agregasi data yang beroperasi antara blockchain lapisan-1 (seperti Moonriver dan Polkadot) dan DApps. Layanan ini membuka kunci data blockchain dan mengubahnya menjadi status yang dapat ditanyakan sehingga dapat digunakan dalam aplikasi intuitif. Ini memungkinkan pengembang DApp untuk fokus pada kasus penggunaan inti dan front-end mereka, tanpa perlu membuang waktu untuk membangun backend khusus untuk pemrosesan data.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## About Moonbeam

Moonbeam adalah platform kontrak pintar yang kompatibel dengan Ethereum di jaringan Polkadot yang memudahkan untuk membangun aplikasi yang dapat dioperasikan secara native. Kompatibilitas Ethereum ini memungkinkan pengembang untuk menyebarkan kontrak pintar Solidity yang ada dan frontend DApp ke Moonbeam dengan sedikit perubahan. Sebagai parachain di jaringan Polkadot, Moonbeam akan mendapatkan keuntungan dari keamanan bersama dari rantai relay Polkadot dan integrasi dengan chain lain yang terhubung ke Polkadot. Saat ini dalam pengembangan aktif oleh PureStake, Moonbeam diharapkan mencapai MainNet pada Q4 2021. Pelajari lebih lanjut: [https://moonbeam.network/](https://moonbeam.network/).
