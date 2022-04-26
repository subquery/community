# Di dalam Polkadot Crowdloans (Bagian 2)

![](https://miro.medium.com/max/1400/0*MqQhXJbmnfMSqf-8)

Polkadot telah memberikan komunitasnya perlombaan menarik lainnya untuk lelang slot parachain ketiga mereka. Kami baru-baru ini menyaksikan Parallel Finance dan Astar bertarung memperebutkan slot ketiga, dan pada akhirnya Astar berhasil keluar sebagai pemenang. Hari ini kita akan mengeksplorasi lebih banyak tentang apa yang terjadi dalam lelang ketiga dengan menyelami data di balik setiap kontribusi.

SubQuery adalah layanan pengindeksan data terkemuka dari Polkadot, dan selama seminggu terakhir kami telah mendukung jutaan permintaan harian ke sebagian besar dasbor crowdloan, aplikasi kontribusi, dan situs web analitik. Tim seperti [SubVis](https://www.subvis.io/), [Parallel Finance](https://parallel.fi/), dan [DotMarketCap](https://dotmarketcap.com/) mengandalkan SubQuery untuk menyediakan data real time tentang crowdloan dan data on-chain lainnya langsung ke situs web dan aplikasi.

Pertama, mari kita mulai dengan beberapa fakta cepat tingkat tinggi. Seperti yang Anda lihat di bawah, Astar memiliki lebih banyak kontribusi dan kontributor. Penting untuk dicatat bahwa Parallel mengumpulkan jumlah yang signifikan melalui dana proksinya, sehingga jumlah kontributor menyesatkan karena akun proksi menyembunyikan informasi ini.

Keduanya menerima kontribusi rata-rata 10 DOT (US$367,70) tetapi Astar mampu menarik kontribusi tunggal terbesar dengan 2.005.295 DOT (US$73,7 juta). Pada akhirnya total hampir 20 juta DOT (US$735.4 juta) disumbangkan di kedua duanya selama lelang ketiga. Tidak mengherankan, jumlah ini kurang dari jumlah yang dilakukan pada lelang pertama, namun menjanjikan untuk melihat jumlah lelang masih memiliki nilai yang signifikan.

![](https://miro.medium.com/max/1920/1*cHMt10lANsqtkLYHCv6iWg.png) Seperti yang dapat Anda lihat pada grafik di bawah, jumlah kontribusi relatif konstan, dengan lonjakan simultan dalam tingkat kontribusi pada tanggal 17 November menjadi lebih dari 2.000 kontribusi dalam periode 4 jam. Sama halnya dengan [Moonbeam dan pertempuran Acala](./20211124-polkadot-crowdloans.md), lelang ini memiliki gaya partisipasi yang sangat berbeda sambil mempertahankan jumlah kontribusi yang relatif sama. Parallel Finance memiliki 20.000 lebih sedikit kontribusi untuk crowdloan mereka jika dibandingkan dengan Astar.

![](https://miro.medium.com/max/1920/0*QLdNkyaQBBj3L9Eu)

Tapi bukan jumlah kontribusi yang penting di sini, melainkan nilai kontribusi tersebut. Seperti yang dapat Anda lihat pada bagan di bawah, pelelangan berlangsung sangat ketat, dengan keunggulan melewati antar tim melalui pelelangan.

![](https://miro.medium.com/max/1920/0*AGGfB2oBSwoplGhv)

Seperti yang Anda lihat pada grafik berikut, ada dua peristiwa yang harus diperhatikan, yang pertama adalah lonjakan besar dalam kontribusi ke Astar pada 12 November. Ini memberi mereka keunggulan yang stabil hingga 24 November, di mana Parallel Finance memperoleh hampir 2,5 juta DOT (US$91 juta).

![](https://miro.medium.com/max/1920/0*UK4Drn6LXcjebF_V)

Untuk peristiwa pertama terjadi pada 12 November pukul 2:26 pagi UTC ketika akun yang terhubung ke Binance disetorkan secara berurutan, 2.005.295 DOT (US$73,5 juta) ke Astar dan 1.026.763 DOT (US$37,9 juta) ke Parallel Finance. Ini kemungkinan Binance memberikan kontribusi yang dikumpulkannya dari komunitasnya sendiri ke setiap crowdloan.

Genap kedua sedikit lebih aneh, dan merupakan 25 peristiwa yang terpisah. Dalam 11 menit, kendaraan proxy Crowdloan Parallel memberikan 25 kontribusi identik dari 98.982 DOT (US$3.639.568,14) masing-masing ke Parallel dengan total 2.474.550 DOT (US$90.989.203,50). Tidak jelas mengapa setoran ini dilakukan melalui jumlah DOT yang lebih kecil, kemungkinan kendaraan proxy Crowdloan Paralel disiapkan untuk menyumbangkan jumlah maksimum dari nilai ini setiap kali.

![](https://miro.medium.com/max/1920/0*ZErTVoVAvSJvaIsL)

Astar dan Parallel Finance memimpin lelang yang sangat kompetitif, dimana Astar terpilih sebagai pemenang di blok [7927110](https://polkadot.subscan.io/block/7927110), dengan keunggulan hanya 120.000 DOT. Jika ada blok acak lain yang dipilih lebih awal atau lebih lambat, hasilnya mungkin sangat berbeda.

Jadi siapa yang berkontribusi? Pertama ada dua paus besar yang bertanggung jawab atas gabungan 41% dari semua kontribusi dan 69,34% dari semua nilai (13.756.262 DOT). Kedua akun ini mewakili kendaraan proxy Crowdloan Parallel Finance dan Binance. Program SALP Kraken dan Bifrost juga terwakili dalam 6 kontributor teratas. Kendaraan proxy Crowdloan Paralel sangat lazim dalam hasil kami dengan lebih dari 9,3 juta kontribusi DOT (US$344,6 juta) mewakili lebih dari 47% dari semua kontribusi.

Sayangnya persentase yang tinggi ini berarti bahwa membandingkan ukuran kontribusi rata-rata sulit dilakukan, karena proxy ini terlalu mengaburkan data kontribusi. Di masa depan, kami bahkan mungkin menyelam jauh ke dalam data Parallel dan menggunakan ini untuk menentukan dengan tepat berapa banyak dari kontribusi ini yang berasal dari paus versus investor berkapitalisasi kecil individu.

Memiliki dua lelang yang sangat kompetitif menunjukkan ekosistem yang sehat, dan sangat menggembirakan melihat jumlah komitmen yang telah ditunjukkan oleh komunitas. Di sini, di SubQuery, kami sangat bersemangat untuk terus bekerja bersama proyek Polkadot terbaik, dan tidak sabar untuk melihat apa yang akan terjadi di masa depan bagi kami.

---

## Tentang SubQuery Network

SubQuery adalah penyedia data terkemuka Polkadot, yang mendukung pengindeksan & lapisan kueri antara blockchain Layer-1 (Polkadot) dan aplikasi terdesentralisasi. Layanan data SubQuery sedang digunakan oleh sebagian besar situs web lelang crowdloan dan parachain Polkadot dan Kusama saat ini.

Protokol SubQuery mengabstraksi keanehan data blockchain dengan SubQuery SDK, memungkinkan pengembang untuk fokus pada penerapan produk inti mereka tanpa membuang-buang upaya pada teknologi backend kustom.

​​​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Appendix

Semua harga USD dikutip pada harga pada penutupan Lelang ke-3 = USD$36,77

Semua data adalah dari awal Crowdloans Polkadot hingga penyelesaian lelang ketiga pada 3 Desember 1.43AM UTC (blok 7.957.704).

Situs Crowdloan yang Dikecualikan

- [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
- [Binance Crowdloan](https://www.binance.com/en/dotslot)
- [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
- [Kraken Crowdloan](https://www.kraken.com/learn/parachain-auctions)
- [https://pos.dog/](https://pos.dog/)
- [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
