# Di dalam Polkadot Crowdloans

![](https://miro.medium.com/max/2400/1*JvR4YsstF6OHG3mTr_1Seg.png)

**SubQuery Menggali Data Lelang Parachain**

Sebuah perjalanan besar baru saja dicapai untuk Polkadot, penyelesaian putaran pertama lelang parachain. Selama beberapa minggu terakhir kami telah mengamati pertarungan sengit untuk mahkota Polkadot, slot parachain pertama, antara Moonbeam dan Acala. Setelah pertarungan sengit, pemenang lelang dinyatakan sebagai Acala, jika Anda ingin mempelajari lebih lanjut tentang bagaimana pemenang dipilih dalam lelang candlestick modern ini, lihat
ringkasan bagus Dan Reecer (dari Acala)</ 0>.</p> 

SubQuery adalah layanan pengindeksan data terkemuka dari Polkadot, dan selama seminggu terakhir kami telah mendukung jutaan permintaan harian ke sebagian besar dasbor crowdloan, aplikasi kontribusi, dan situs web analitik. Tim seperti [SubVis](https://www.subvis.io/), [Parallel Finance](https://parallel.fi/), dan [DotMarketCap](https://dotmarketcap.com/) mengandalkan SubQuery untuk menyediakan data real time tentang crowdloan dan data on-chain lainnya langsung ke website dan aplikasi.

Hari ini kita akan mengeksplorasi lebih banyak tentang apa yang terjadi dalam lelang pertama dengan menyelami data di balik setiap kontribusi.

![](https://miro.medium.com/max/2400/0*Pcp3KJvC5eyP2KQ3)

Pertama, dari peluncuran crowdloan pertama hingga penutupan lelang pertama (lebih dari 13 hari), lebih dari 87,5 juta DOT disumbangkan di semua crowdloan hanya dengan kurang dari 68.000 alamat. Pada dasarnya 68.000 alamat bekerja bersama lebih dari 187.000 kontribusi untuk mengumpulkan dan berkomitmen lebih dari US$3,54 miliar dalam 2 minggu. Itu jumlah yang fenomenal menurut standar apa pun, dan indikasi besar tentang seberapa besar komitmen individu (dan entitas) untuk mengunci DOT mereka hingga 2 tahun untuk mendukung jaringan favorit mereka. Modal komitmen setara dengan hampir 10% dari seluruh pasokan yang beredar di Polkadot.

![](https://miro.medium.com/max/2400/0*-ovBJnjxAKfeB81Y)

Minat investor benar-benar melonjak di awal lelang, dengan lonjakan kontribusi (berdasarkan hitungan) selama beberapa jam pertama dan juga menjelang akhir sebelum penutupan. Hari pertama crowdloan melihat lebih dari 34.000 kontribusi dan menit terakhir terburu-buru kembali dengan 5.618 kontribusi dalam periode 2 jam.

Seperti yang dapat Anda lihat pada grafik di bawah, Moonbeam sejauh ini memiliki jumlah kontribusi terbesar sepanjang lelang, menarik hampir 23.984 kontribusi dari lebih dari 21.333 alamat unik lebih banyak daripada Acala.

![](https://miro.medium.com/max/2400/0*MSHfjnu7KmMvDmnY)

Acala jelas unggul sebagai pemenang, jadi bagaimana ini bisa terjadi? Jumlah kontributor dan kontribusinya menyembunyikan fakta bahwa kontributor Acala rata-rata berkontribusi jauh lebih banyak daripada Moonbeam. Akibatnya total kontribusi dalam hal nilai tampak seperti grafik di bawah ini di mana Acala sedikit di depan Moonbeam sepanjang lelang.

![](https://miro.medium.com/max/2400/0*YbV-ReqSwfimUsbO)

Mayoritas kontribusi berdasarkan nilai terjadi dalam dua peristiwa individu, dua peristiwa penting ini pada dasarnya mengubah hasil lelang pertama.

![](https://miro.medium.com/max/2400/0*jmRsZ7kxEYAWYaUq)

Yang pertama terjadi dalam waktu 5 menit mulai pukul 13:25 UTC pada tanggal 11 November. Satu alamat yang telah kami tautkan ke alamat [Crowdloan Binance](https://www.binance.com/en/dotslot) membuat serangkaian 7 transaksi dengan nilai total lebih dari 19 juta DOT (US$768,9 juta). Yang pertama adalah kontribusi tunggal terbesar untuk Moonbeam dengan lebih dari 9 juta DOT (US$364 juta), diikuti oleh 6 kontribusi lainnya dengan rata-rata selisih 34 detik. Alamat ini juga memberikan kontribusi yang signifikan untuk Acala (2,6 juta DOT), Clover (2,1 juta DOT), Astar (2 juta DOT), dan Manta (1,7 juta DOT).

Peristiwa penting kedua terjadi dalam waktu 75 menit dari pukul 10.40 pagi pada tanggal 13 November ketika satu akun membuat banyak kontribusi signifikan untuk Acala. Akun ini mewakili [alamat LCDOT Acala](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157) dan Acala menyebarkan semua DOT yang dipertaruhkan cair ke crowdloan-nya. Pertama adalah beberapa transaksi percobaan, kemudian beberapa transaksi besar yang termasuk yang terbesar dari 5,5 juta DOT (USD$222,5 juta). Pada akhirnya dana LCDOT Acala membuat 3758 kontribusi selama lelang.

![](https://miro.medium.com/max/2400/0*GTJviXqhPmRIIf73)

Serangkaian transaksi ini pada akhirnya mampu mendorong Acala di atas Moonbeam, dan memberikan Acala persentase kemenangan sebesar 63,11% dari blok. Ketika blok pemenang acak dipilih ~56 jam kemudian di blok 7.718.090, Acala berada di depan Moonbeam hanya dengan ~38.000 DOT (USD$1,5 juta).

Salah satu hal yang menakjubkan tentang lelang ini, adalah bahwa bahkan setelah mengumpulkan lebih dari 66 juta DOT (USD$2,67 miliar) antara Acala dan Moonbeam, margin kemenangan di blok yang dipilih secara acak hanya 0,056% dari jumlah total.

Jadi siapa yang berkontribusi pada crowdloans? Pertama, jumlah rata-rata yang disumbangkan oleh semua hanya 12 DOT (USD$485,64), 47% dari semua kontribusi kurang dari 10 DOT dan 88% kurang dari 100 DOT (US$4.047.00). Ini jelas menunjukkan komunitas kontributor individu yang sangat kuat dan kokoh, bukti minat ritel dalam lelang parachain.

Pertanyaan besar di benak semua orang adalah siapa jaringan orang-orang itu? Jaringan mana yang memiliki proporsi terbesar dari kontributor kecil? Untuk wawasan berikut tentang perincian ukuran kontribusi, kami telah mengecualikan beberapa akun pertukaran atau crowdloan yang diketahui (daftar di lampiran). Anda dapat melihat bahwa beberapa jaringan hampir sepenuhnya didanai dengan modal kecil (SubGame Gamma dan Darwinia). Di sisi lain, investor kapitalisasi besar (>5.000 DOT) merupakan 68% dari crowdloan Moonbeam (berdasarkan nilai), 62% dari Parallel Finance, dan 58% dari Clover.

![](https://miro.medium.com/max/2400/0*ztRnFrVfJ2aTlMiU)

Jelas kita di sini untuk melihat Moonbeam dan Acala, dan di sini kita dapat melihat bahwa Acala memiliki lebih banyak pendanaan dengan kapitalisasi kecil daripada Moonbeam, dengan 33% kontribusi Acala kurang dari 1.000 DOT (USD$40.470) dibandingkan dengan 21% dari Moonbeam.

![](https://miro.medium.com/max/2400/0*ge-2XDPgddj-J07V)

_Perhatikan, wawasan sebelumnya seputar "jaringan orang" telah diambil setelah mengecualikan kontributor yang diketahui yang menggabungkan kontribusi lain menjadi satu. SubQuery hanya mengidentifikasi sejumlah kecil, pasti akan ada agregator yang kami lewatkan yang mungkin menjadi bahan untuk data yang dibagikan di sini_

Jadi dari mana orang berkontribusi? SubQuery telah mengidentifikasi bahwa [LCOT Acala](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157) adalah sukses besar, dan menghasilkan hampir 28% dari semua kontribusi. Dengan lebih dari 24 juta DOT (US$971 juta) yang dikontribusikan langsung ke Acala, lelang ini kemungkinan akan berjalan dengan cara lain tanpanya.

Selain itu, [Binance](https://www.binance.com/en/dotslot) terbukti menjadi jalur partisipasi yang populer dengan 27% kontribusi di sebagian besar peserta. Kami melengkapi metode kontribusi signifikan dengan [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot) pada 11% kontribusi, dan [Kraken](https://www.kraken.com/learn/parachain-auctions) pada 7%. Pertukaran terpusat masih jelas merupakan metode partisipasi yang disukai.



## Tentang SubQuery Network

SubQuery adalah penyedia data terkemuka Polkadot, yang mendukung pengindeksan & lapisan kueri antara blockchain Layer-1 (Polkadot) dan aplikasi terdesentralisasi. Layanan data SubQuery sedang digunakan oleh sebagian besar situs web lelang crowdloan dan parachain Polkadot dan Kusama saat ini.

Protokol SubQuery mengabstraksi keanehan data blockchain dengan SubQuery SDK, memungkinkan pengembang untuk fokus pada penerapan produk inti mereka tanpa membuang-buang upaya pada teknologi backend kustom.

​​​​[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)  |  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [Matrix](https://matrix.to/#/#subquery:matrix.org)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)



## Appendix

Semua harga USD dikutip pada harga pada penutupan Lelang Pertama = USD$40,47

Semua data adalah dari awal Crowdloans Polkadot hingga penyelesaian lelang pertama pada 18 November 11.57 UTC (blok 7.756.107)

Situs Crowdloan yang Dikecualikan

-   [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
-   [Binance Crowdloan](https://www.binance.com/en/dotslot)
-   [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
-   [Kraken Crowdloan](https://www.kraken.com/learn/parachain-auctions)
-   [https://pos.dog/](https://pos.dog/)
-   [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
