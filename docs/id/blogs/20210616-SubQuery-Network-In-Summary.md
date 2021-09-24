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

Let’s start with Indexers, Indexers do a lot of the hard work behind the scenes. The manage hardware, run infrastructure, monitor resources, and choose the right SubQuery projects to index

This takes time and money, but once they have this, Consumers may come and make requests. Consumers will make requests to the SubQuery network for specific data and pay an advertised amount of our token, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Konsumen akan membuat permintaan ke SubQuery network untuk data tertentu dan membayar sejumlah token kami yang diiklankan, SQT.

## Fungsi Produksi Cobb-Douglas

This payment goes into a project revenue pool and at the end of a staking era (28 days) we take this project revenue pool and split it. It’s spit across indexers by something called the Cobb-Douglas production function.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

Ini dibagi di seluruh pengindeks oleh sesuatu yang disebut fungsi produksi Cobb-Douglas.

Pendekatan ini, secara sederhana, berarti bahwa pendapatan dialokasikan untuk para Pengindeks yang bersaing sebagai proporsi dari permintaan yang dijawab dan jumlah yang distake.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Pendapatan dialokasikan untuk para Pengindeks yang bersaing sebagai proporsi dari permintaan yang dijawab dan jumlah yang distake.

In our view, the beauty of this equation is that a rational Indexer must maintain a high level of staked SQT relative to the work they do in order to receive optimal revenue. As a result, we do not need to enforce arbitrary staking requirements because Indexers are incentivised to self-manage and maintain a stake or skin in the game.

## Delegators

So Indexers are incentivised to both do as much work as possible, and to stake as much as possible to maximise their rewards. This is where delegators come in.

Delegator dapat mendelegasikan SQT mereka ke Pengindeks, setiap Pengindeks dapat menerbitkan _tingkat bagi hasil biaya kueri_, dan para delegator tersebut akan diberi reward dengan sebagian dari pendapatan biaya kueri yang diberikan kepada pengindeks.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Delegator dapat mendelegasikan SQT mereka ke Pengindeks dan para delegator tersebut akan diberi reward dengan sebagian dari pendapatan biaya kueri yang diberikan kepada pengindeks

_Tingkat bagi hasil biaya kueri_ yang diiklankan oleh pengindeks dilock untuk setiap era staking selama 28 hari, dan pengurangan yang dilakukan harus diiklankan untuk seluruh era staking 28 hari sebelum berlaku.

Demikian pula, delegator dapat mencabut jumlah delegasi mereka kapan saja, tetapi mereka hanya akan menerima reward ketika mereka telah mendelegasikan untuk seluruh era staking.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegator hanya akan menerima reward ketika mereka telah mendelegasikan untuk seluruh era staking

## Purchase Orders

Indexing a project takes time and money, there’s a lot of data on the chain. In order to encourage Indexers to index and support an entirely new SubQuery Project, we plan to implement a market mechanism for Consumers to signal guaranteed revenue to Indexers of new SubQuery Projects.

We’re calling them purchase orders, and Consumers can advertise a contract on chain for a set price and number of requests. Indexers can view this and choose to fill the contracts.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Konsumen dapat mengiklankan pesanan pembelian di dalam chain untuk harga yang telah ditetapkan dan jumlah permintaan.

Purchase order juga dapat ditempatkan pada Proyek SubQuery yang ada untuk menarik Pengindeks tambahan untuk meningkatkan persaingan dan menurunkan harga