# Mengumumkan SubQuery Explorer

Since announcing SubQuery to the world just a month ago, the response and feedback we’ve received from the Polkadot community has been overwhelmingly positive. We’ve gained thousands of followers on our channels, and there have been over 1,353 installs from NPM. It’s inspiring to receive all the messages of support, and to see the engagement from the community. **It’s time for us to give something back!**

We’ve been working overtime over the last month to release the next major stage of our roadmap for SubQuery. Today we’re announcing the release of the [SubQuery Explorer.](https://explorer.subquery.network/)

![](https://miro.medium.com/max/1400/0*2bDaF3HPgNkpm8Kt)

[SubQuery Explorer](https://explorer.subquery.network/) is an online hosted service that provides access to published SubQuery projects made by contributors around the world and managed by the SubQuery team. It furthers our mission to support Polkadot developers by providing infrastructure services by making accessing Polkadot network data even easier.

Hari ini, siapa pun dapat mengkueri dan mengekstrak data jaringan Polkadot hanya dalam hitungan menit dan tanpa biaya.

The SubQuery explorer makes getting started easy. We’ve prebuilt SubQuery projects for two use cases (more about these below) and have indexed each network. We’re hosting these SubQuery nodes online and allow anyone to query each for free. These managed nodes will be monitored and run by the SubQuery team at a performance level that will allow production apps to use and rely on them.

![](https://miro.medium.com/max/1400/0*3hmnk6sNoO5pdOWc)

You’ll also note that the SubQuery Explorer provides a playground for discovering available data with example queries. You can play around with each SubQuery Graph using this explorer without implementing anything in code. Additionally, we’ve made some small improvements to our documentation to better support developers on their journey to better query and analyse the world’s Polkadot data.

![](https://miro.medium.com/max/1400/0*V1Mjpi1-gAT6M8-q)

## **Staking Sum SubQuery Project (**[GitHub Project Code](https://github.com/subquery/subql-examples/tree/main/sum-reward))

You can quickly find total staking revenue awarded to any account since the beginning of time by querying their account address. This subquery project indexes and records the accounts participating in the staking bond on the blockchain. The continued indexing will find out obtained staking reward and slashes for this account and aggregates their sums to a database.

## **Validator Threshold SubQuery Project (**[GitHub Project Code](https://github.com/subquery/subql-examples/tree/main/validator-threshold))

You can quickly see the minimum staking amount required for a validator to be elected. This project is an excellent example of implementing query states in the mapping function. It first finds the active staking Era through a state query and records the validators of this session staking amount by each. It then calculates the minimum staking amount and the total amount staked in this Era. Lastly, it records the maximum number of nominators that can be rewarded.

This SubQuery Explorer is just the first set of our plans to build a community hub for Polkadot data. We’re going to follow up with the following features:

-   Kami berfokus pada alat komunitas, sehingga Anda dapat mengharapkan dokumentasi developer yang lebih mendalam, tutorial yang mudah diikuti, dan proyek contoh yang mencakup beberapa kasus penggunaan yang sangat keren untuk data yang muncul di SubQuery.
-   Lebih banyak proyek SubQuery secara bertahap akan muncul berdasarkan feedback dari komunitas, kami ingin beberapa ide tentang apa yang ingin Anda lihat selanjutnya — hubungi salah satu channel sosial kami (lihat di bawah)
-   Kami akan membangun platform mitra, sehingga komunitas kami dapat membangun dan mengunggah proyek SubQuery mereka sendiri dan kami yang akan mengelola dan meng-hostnya untuk Anda secara gratis.

Mulai mengkueri data di [SubQuery Explorer](https://explorer.subquery.network/) yang baru

Buat proyek SubQuery Anda sendiri dengan mengikuti [dokumen SubQuery](https://doc.subquery.network/) kami

Kunjungi [website](https://subquery.network/) kami

**Berbicara dengan kami di:**

-   [hello@subquery.network](mailto:hello@subquery.network)
-   [Discord](https://discord.com/invite/78zg8aBSMG)
-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/#subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)

![](https://miro.medium.com/max/1400/0*tzhwpKRunR7AqFhr)