# SubQuery Network - Rangkuman

> Bagaimana cara kerja SubQuery Network? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)

Hari ini kita akan berbicara tentang bagaimana SubQuery Network bekerja pada tingkat tinggi.

## Peserta


![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Peserta dalam SubQuery Network

Ada tiga jenis peserta di SubQuery Network:

-   **Konsumen**: Konsumen akan membuat permintaan ke SubQuery Network untuk data tertentu dan membayar sejumlah SQT yang diiklankan
-   **Pengindeks**: Pengindeks akan meng-host Proyek SubQuery di infrastruktur mereka sendiri, menjalankan node dan layanan kueri untuk mengindeks data dan menjawab permintaan GraphQL.
-   **Delegator**: Delegator akan berpartisipasi dalam jaringan dengan mendukung Pengindeks favorit mereka untuk mendapatkan reward

## Pengindeks, Konsumen, dan Kueri

Mari kita mulai dengan Pengindeks, Pengindeks melakukan banyak kerja keras di belakang layar. Mereka mengelola hardware, menjalankan infrastruktur, memantau sumber daya, dan memilih proyek SubQuery yang tepat untuk diindeks

Ini membutuhkan waktu dan uang, tetapi begitu mereka memilikinya, Konsumen dapat datang dan mengajukan permintaan. Konsumen akan membuat permintaan ke SubQuery network untuk data tertentu dan membayar sejumlah token kami yang diiklankan, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Konsumen akan membuat permintaan ke SubQuery network untuk data tertentu dan membayar sejumlah token kami yang diiklankan, SQT.

## Fungsi Produksi Cobb-Douglas

Pembayaran ini masuk ke kumpulan pendapatan proyek dan pada akhir era staking (28 hari) kami mengambil kumpulan pendapatan proyek ini dan membaginya. Ini dibagi ke seluruh pengindeks oleh sesuatu yang disebut fungsi produksi Cobb-Douglas.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

Ini dibagi di seluruh pengindeks oleh sesuatu yang disebut fungsi produksi Cobb-Douglas.

Pendekatan ini, secara sederhana, berarti bahwa pendapatan dialokasikan untuk para Pengindeks yang bersaing sebagai proporsi dari permintaan yang dijawab dan jumlah yang distake.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Pendapatan dialokasikan untuk para Pengindeks yang bersaing sebagai proporsi dari permintaan yang dijawab dan jumlah yang distake.

Dalam pandangan kami, keindahan persamaan ini adalah bahwa Pengindeks yang rasional harus mempertahankan tingkat SQT yang distake relatif terhadap pekerjaan yang mereka lakukan untuk menerima pendapatan yang optimal. Hasilnya, kita tidak perlu memaksakan persyaratan staking yang sewenang-wenang karena Pengindeks diberi insentif untuk mengelola sendiri dan mempertahankan stake or skin dalam permainan.

## Delegator

Jadi Pengindeks diberi insentif untuk melakukan pekerjaan sebanyak mungkin, dan melakukan staking sebanyak mungkin untuk memaksimalkan imbalan mereka. Di sinilah para delegator berperan.

Delegator dapat mendelegasikan SQT mereka ke Pengindeks, setiap Pengindeks dapat menerbitkan _tingkat bagi hasil biaya kueri_, dan para delegator tersebut akan diberi reward dengan sebagian dari pendapatan biaya kueri yang diberikan kepada pengindeks.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Delegator dapat mendelegasikan SQT mereka ke Pengindeks dan para delegator tersebut akan diberi reward dengan sebagian dari pendapatan biaya kueri yang diberikan kepada pengindeks

_Tingkat bagi hasil biaya kueri_ yang diiklankan oleh pengindeks dilock untuk setiap era staking selama 28 hari, dan pengurangan yang dilakukan harus diiklankan untuk seluruh era staking 28 hari sebelum berlaku.

Demikian pula, delegator dapat mencabut jumlah delegasi mereka kapan saja, tetapi mereka hanya akan menerima reward ketika mereka telah mendelegasikan untuk seluruh era staking.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegator hanya akan menerima reward ketika mereka telah mendelegasikan untuk seluruh era staking

## Order Pembelian

Mengindeks proyek membutuhkan waktu dan uang, ada banyak data di dalam chain. Untuk mendorong Pengindeks untuk mengindeks dan mendukung Proyek SubQuery yang masih baru, kami berencana untuk menerapkan mekanisme pasar bagi Konsumen untuk memberi sinyal pendapatan yang dijamin kepada Pengindeks Proyek SubQuery baru.

Kami menyebutnya order pembelian, dan Konsumen dapat mengiklankan kontrak on chain dengan harga dan jumlah permintaan yang ditetapkan. Pengindeks dapat melihat ini dan memilih untuk mengisi kontrak.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Konsumen dapat mengiklankan pesanan pembelian di dalam chain untuk harga yang telah ditetapkan dan jumlah permintaan.

Purchase order juga dapat ditempatkan pada Proyek SubQuery yang ada untuk menarik Pengindeks tambahan untuk meningkatkan persaingan dan menurunkan harga