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

@bizzyvinci said the following: “I built the [Moonriver Explorer](https://moonriver-explorer.herokuapp.com/) and it was an awesome experience., The first step was learning about SubQuery and damn, they’ve got an awesome documentation which are accompanied with template repositories. The documentation covers everything it takes to get started and explains each aspect well such as the manifest file, graphql schema among others.”

## Karura/Acala DeFi Dashboard

Acala and Karura represent a huge vision for the future of DeFi, so there is a big opportunity to build valuable tools for the ecosystem. This challenge required developers to create DeFi tools for the Karura/Acala community that are inspired by the likes of [Zapper.fi](http://zapper.fi/) and [defisaver.com](http://defisaver.com/) leveraging SubQuery’s data indexing services.

The winner of [this challenge](https://gitcoin.co/issue/subquery/grants/2/100027176) was Web3Go who built a really nice summary of [Acala’s Collateral Debt Positions (CDPs)](https://web3go.xyz/#/CDPDetail). For users to mint kUSD stablecoins on Karura, they must first deposit tokens of one of the accepted collateral assets (e.g. KSM). Once the user has done so, the min collateral ratio parameter determines the minimum amount of the collateral needed for a user to mint kUSD. If the market price of the CDP’s collateral asset drops low enough, the CDP may be considered “unsafe.”

![](https://miro.medium.com/max/1400/0*l7GA1axntiHCINRM)

Web3Go’s interface cleanly lists all CDP positions, their ratio and their safe status. For each position it also provides information about the history of the position and easily allows others to monitor the financial instrument. <iframe width="560" height="315" src="https://www.youtube.com/embed/hc3YDjv6dkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

## Polkadot Staking Dashboard

Staking is a key way to put your DOT and KSM tokens to use, but currently the UX for staking is difficult to understand and results in most users making uneducated choices.

This challenge’s objective was to combine on-chain data and an intuitive user experience, to help users understand the best estimated staking yield, compare the historical performance of validators, and show users what their return on investment might be.

Ashik built PolkStakes, a [Polkadot validator ranking website](https://polkstakes.vercel.app/) that fetches all validators and shows a cleanly organised list of validators in Polkadot with PolkStake’s own rating (based on previous era performance, commissions, payout, and staking rewards etc). It’s a clean and simple UI that really impressed us.

![](https://miro.medium.com/max/1400/0*Kaho31-nn-ly8tFS)

“_Subquery reduces the effort in manually indexing on-chain data. Since it offers a graphql endpoint, we can query data easily. It reduces the effort in maintaining a backend and database. Now, data aggregation for calculating Polkstakes ranking is done in UI. This has to be moved to SubQuery. Also, better visualization has to be done for indexed data and more accurate estimated yield prediction has to be added._” — Ashik from Polkdata

The excellent SubVis team also built a [beautiful Polkadot staking dashboard](https://polkadot-staking-dashboard.vercel.app/) that shows total staking statistics over time and the validator performance in one place. The new staking features join the existing auction and crowdloan pages that SubVis are well known for.

![](https://miro.medium.com/max/1400/0*uPDQdMug2JaZwMbA)

Finally, Web3Go put in another excellent entry with detailed staking statistics on Moonriver. They provide information even about the delegators for each collator, the historic rewards provided by each collator, and even the actions that collators take. They provide the additional benefits of being able to show staking history for your own wallet address.

![](https://miro.medium.com/max/1400/0*jQgOnvcaXt6cprJR)

## RMRK NFT Marketplace Explorer

RMRK is an advanced protocol of NFT legos making NFTs that are so much more than just a jpeg. The team at RMRK are bringing new standards of NFTs to the DOT ecosystem, and leading the way in building the next generation.

This challenge called for the creation of a detailed dashboard that tracks the evolution of all RMRKs (potentially focusing on [Kanarias](https://kanaria.rmrk.app/)), including transfers, emote history, and more across RMRK2. This dashboard had to use a RMRK2 focused SubQuery project.

The winner of [this challenge](https://gitcoin.co/issue/subquery/grants/4/100027174) was another excellent dashboard from Web3Go called the [NFT Garden](https://web3go.xyz/#/NFTProfiler). It includes in depth details about each NFT collection, such as average prices, volumes, price ranges, and all transactions for each single item. Additionally, there are some interesting visualisations on all the traits within NFTs.

![](https://miro.medium.com/max/1400/0*1_mUnNIBYI84G_qs)

“_Since the inception of Web3Go, we have been using SubQuery as the underlying architecture for data indexing. The development kit provided by SubQuery has proven to be very suitable for our team to quickly develop, deploy and upgrade projects, which is also the key to our good results on the Gitcoin Hackathon. In the next step, we will use Subquery to develop dashboards for all projects on the Polkadot & Kusama parachains, which will involve Defi, NFT, and Tokens!_” says Hao Ding from Web3Go.

## Extend SubQuery to another Layer-1 Blockchain

SubQuery is native to Polkadot, it’s our home and we’ve worked hard to build relationships in this ecosystem. In spite of this we also believe in a multi chain future, as we know that there are going to be many different blockchains working together to solve different problems. Our long term plan is to take SubQuery and to adapt it to work for other blockchains that don’t have a current indexing solution to help developers build new dApps.

The winner of [this US$12,000 challenge](https://gitcoin.co/issue/subquery/grants/5/100027175) was Naveen who extended SubQuery to index the Terra blockchain. This was implemented by creating a fork that extends the node package of the official subql implementation to index Terra. Naveen is continuing to work on this and you can expect news soon about SubQuery’s plans for support of other layer 1 chains outside of Polkadot. <iframe width="560" height="315" src="https://www.youtube.com/embed/K_pjh5OC95A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

“_I have been studying a bunch of indexers in the past few months and went as far as building an indexer from scratch. That might be the reason why SubQuery caught my attention in the Gitcoin GR12 Hackathon. I took up the task of extending SubQuery to index Terra. I did not believe that I could pull this off in 15 days. But, SubQuery was architected in such a magnificent manner that it allowed me to create a mental picture of what is happening under the hood very quickly. I hacked together a working solution just in time and I am currently working with SubQuery to merge the Terra indexer into the subql package. In the foreseeable future, I will be continuing to work with SubQuery to maintain and scale the project and possibly build indexers for several other layer 1 chains_” said Naveen.

[Sam Zou](https://twitter.com/zoujialiu), the CEO and Founder of SubQuery commented, “_SubQuery is delighted with the results of the Gitcoin GR12 Hackathon. Our mission relies on having a network of developers who are empowered to create and innovate within the Substrate/Polkadot ecosystem. This partnership provided opportunities for motivated developers around the world to build the applications of tomorrow. We are excited to nurture the winners of the challenges to develop their ideas even further_”

Following on from this successful Hackathon, SubQuery would like to encourage developers who would like to learn more about how to build applications with SubQuery to [register for our free online “Hero Course”, or apply for our recently announced Grants Programme](https://subquery.coassemble.com/unlock/dOKZW6O#/).

---

## About SubQuery

[SubQuery](https://subquery.network/) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. This service unlocks blockchain data and transforms it to a queryable state so that it can be used in intuitive applications. It allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The upcoming SubQuery Network will decentralize and tokenize the ecosystem to allow everyone to participate in the web3 data revolution.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
