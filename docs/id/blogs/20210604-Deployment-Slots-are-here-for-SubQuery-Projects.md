# Deployment Slots are here for SubQuery Projects

> Hari ini kami memperkenalkan deployment slots, fitur baru yang meningkatkan pengalaman developer dalam layanan yang dihosting SubQuery.

[SubQuery Projects](https://project.subquery.network/) is already being used as a managed and hosted service for many Projects, whether they’re chain explorers, wallets, NFT explorers, or others. It’s a service that our customers rely on.

![](https://miro.medium.com/max/1400/0*PugDgh6weZspRIO2)

Anda sekarang dapat mendeploy ke isolated staging slot

Meskipun Anda selalu dapat menjalankan infrastruktur SubQuery sendiri (dengan node dan layanan kueri Anda sendiri), kami bertujuan untuk menjadikan layanan hosted sebagai penyedia data yang paling andal, tangguh, dan berkinerja terbaik di ekosistem Polkadot/Substrate.

Creators of [SubQuery Projects](https://project.subquery.network/) are constantly improving and updating their Projects and the data within those projects. Unfortunately it takes hours if not days to reindex chain data in the event of a major change — ultimately our goal to to allow you to update your Project, reindex your data, and upgrade your hosted SubQuery Projects with **zero downtime**

**Itulah mengapa deployment slots hadir untuk memecahkan masalah ini**

![](https://miro.medium.com/max/1400/0*vQ33aqhn1eVllo5t)

Staging slot anda akan berjalan secara independen dari production slot utama

When creating a new deployment to your [SubQuery Project in our hosted service](https://project.subquery.network/), you can choose to either deploy to the production or staging slot. These two slots are isolated environments, each has its own database and sync independently. Once your staging slot has started and completed indexing, you can then promote it to production with zero downtime.

Slot staging sangat cocok untuk:

-   Validating changes to your SubQuery Project in a separate environment. The staging slot has a different URL to production that you can use in your dApps.
-   Pemanasan dan pengindeksan data untuk proyek SubQuery yang diperbarui untuk mengeliminasi downtime di dApp Anda
-   Preparing a new release for your SubQuery Project without exposing it publicly. The staging slot is not shown to the public in the Explorer and has a unique URL that is visible only to you.

Anda dapat mencobanya sendiri sekarang di [Proyek SubQuery](https://project.subquery.network/).