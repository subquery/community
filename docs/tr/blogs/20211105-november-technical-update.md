# SubQuery Kasım Ayı Teknik Güncellemesi: EVM ve Manifest Güncellemeleri

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**SubQuery'nin en son sürümüne ilişkin ayrıntılı teknik incelememiz için daha fazlasını okuyun**

# Proje Bildiriminde Harici Zincir Tipi Dosyalar için Destek

Bugün proje bildirim dosyamızın (`project.yaml`) [sürüm 0.2.0](https://doc.subquery.network/create/manifest/) lansmanı. Bu yeni sürüm, geliştiricilere müşteriler tarafından talep edilen çeşitli iyileştirmeler sağlar.

En önemlisi, artık özel bir alt tabaka zincirini indekslerken dahil edilen tüm özel türleri içeren bir zincir tipi tanım dosyasına başvurabilirsiniz. Bu, yeni bir SubQuery projesini, Kusama'nın tüm parachainleri dahil olmak üzere, herhangi bir alt tabaka tabanlı zincire hızlı bir şekilde bağlamanıza olanak tanır. Bu, bu blok zinciri tarafından desteklenen belirli türleri `.json` veya `.yaml` biçiminde bildiren standart bir zincir türü dosya olmalıdır.

Bu çözüm, bildirimin kendisinde zincir türü tanımlarını kopyalamaktan ve yönetmekten kaçınmanıza ve [PolkadotJS gibi depolarda listelenen yayınlanmış zincir türü dosyalarını klonlamanıza](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec) olanak tanır.

[Projelerinizi ona nasıl taşıyabileceğiniz de dahil olmak üzere yeni bildirim dosyası hakkında burada, güncellenmiş belgelerimizi okuyabilirsiniz.](https://doc.subquery.network/create/manifest/)

# Moonbeam EVM Desteği

Geçen hafta [Moonriver'a eksiksiz EVM ve Substrate indeksleme desteği getirmek için Moonbeam ile çalıştığımızı](https://subquery.medium.com/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff) duyurmaktan memnuniyet duyduk.

Bugün, başlamak için ihtiyacınız olan tüm geliştirici kaynaklarıyla birlikte bu duyuruyu takip ediyoruz.

Şu anda, geliştiricilerin hem Ethereum hem de Polkadot/Kusama'da esnek bir şekilde veri toplamasına ve sorgulamasına olanak tanıyan açık kaynaklı bir araç bulunmamaktadır. Bu sınırlama, Moonriver içindeki dApps çözümlerinin akıllı sözleşme katmanına yerleştirilmesine ve böylece potansiyellerini her iki gelişen ağdaki tüketicilerle sınırlandırmasına neden olabilir. Moonbeam ile olan bu ortaklık, Moonriver içindeki tüm blok zinciri verileri için eksiksiz ve birleşik bir veri indeksleme çözümü getiriyor ve Moonriver'ın büyüyen uygulama ekosistemine büyük fayda sağlayacak.

**SubQuery, 1 Aralık Çarşamba günü yapılacak bir sonraki Moonbuilders Atölyesi'ne konuk olacak**, [**buradan kaydolun**](https://www.crowdcast.io/e/moonbuilders-ws/10)**.**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[Öncelikle, Moonbeam, Moonbase Alpha ve Moonriver'a nasıl bağlanılacağına ve bu verilerden nasıl indeksleneceğine ilişkin güncellenmiş belgeler hakkında bilgi edinin.](https://doc.subquery.network/create/moonbeam/) Moonbeam verilerini indeksleme işlemi sadece iki adımdan oluşur:

## 1. Adım: Moonbeam Özel Veri Kaynağını Ekleyin

Moonbeam'in [Frontier](https://github.com/paritytech/frontier) uygulamasıyla çalışmak için özel olarak yapılmış bir veri işlemcisi oluşturduk. Argümanları ayrıştırmak için işlemci tarafından kullanılan belirli ABI kaynaklarına ve olayların geldiği veya çağrının yapıldığı akıllı sözleşme adresine başvurmanıza olanak tanır. [Daha fazlasını buradan okuyabilirsiniz.](https://doc.subquery.network/create/moonbeam/#data-source-spec).

SubQuery, diğer dizin oluşturuculardan daha gelişmiş filtreler sunarak, sözleşme dışı işlemlerin, işlem göndericilerinin, sözleşmelerin ve dizine alınmış günlük bağımsız değişkenlerinin filtrelenmesine olanak tanır. Bu, geliştiricilerin belirli veri ihtiyaçlarını karşılayan çok çeşitli projeler oluşturmasına olanak tanır.

## 2. Adım: Moonbeam Verilerini Dizine Alın

Normal bir SubQuery projesinde olduğu gibi, zincir dışı verileri tanımladığınız GraphQL varlıklarına dönüştürmek için bir eşleme işlevi kullanırsınız, aradaki fark, `SubstrateEvent` veya `SubstrateExtrinsic` yerine, eşleme işleviniz, Ether'in [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) veya [Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log) türüne dayanan bir `MoonbeamCall` veya `MoonbeamEvent` alacaktır. [Daha fazlasını buradan okuyabilirsiniz.](https://doc.subquery.network/create/moonbeam/#moonbeamcall).

[Bu işlemle ilgili tüm belgeleri buradan okuyun](https://doc.subquery.network/create/moonbeam/#moonbeamcall)

## Örnek Projeler

`transfer` olaylarını ve akıllı sözleşme çağrılarını `onay` dizine ekleyen eksiksiz bir örnek proje vardır. Bu örnek projenin kodu [burada GitHub'da](https://github.com/subquery/tutorials-moonriver-evm-starter) veya [SubQuery Explorer'da canlı SubQuery projesi aracılığıyla buradan erişilebilir](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project).

Değişikliklerin çoğu Manifest dosyasında (`project.yaml`) gerçekleşir. Aşağıda, işlev imza dizelerini veya sözleşmede çağrılan işlevi filtrelemek için işlev iç çekişini desteklemek için [genişletilmiş çağrı filtrelerimiz](https://doc.subquery.network/create/moonbeam/#call-filters) olduğunu görebilirsiniz. [Olay filtreleri](https://doc.subquery.network/create/moonbeam/#event-filters) için, [burada bulunan Ethereum JSON-PRC günlük filtreleri standardını](https://docs.ethers.io/v5/concepts/events/) izleyen konu filtrelemesini kullanabilirsiniz. SubQuery'nin Moonbeam EVM için diğer dizin oluşturuculardan daha gelişmiş filtreler sunduğunu ve bu iyileştirmelerin geliştiricilere önemli ölçüde fayda sağlayacağını unutmayın.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

Substrate tabanlı SubQuery projesinin nasıl yapıldığını biliyorsanız, yeni Moonriver desteği için haritalama işlevlerinin ne kadar benzer olduğunu fark edeceksiniz. Her eşleme işlevi bir `MoonbeamCall` veya `MoonbeamEvent` alır ve bunları diğer herhangi bir SubQuery projesinde olduğu gibi işler.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

Bununla ilgili herhangi bir sorunuz varsa, [belgelerimizi kontrol ettiğinizden](https://doc.subquery.network/create/moonbeam) emin olun veya [Discord topluluğumuzdaki](https://discord.com/invite/subquery) #technical-destek kanalımızdan bize ulaşın.

[Örnek projeyi GitHub'da klonlayın](https://github.com/subquery/tutorials-moonriver-evm-starter)

Gördüğünüz gibi, hem Substrate hem de EVM verilerini tek bir projede indeksleyen bir Moonriver veya Moonbase Alpha projesi oluşturmak son derece basit ve büyük ölçüde benzer. Dapp geliştirmenizi hızlandırmak için SubQuery'nin gelişmiş iskele araçlarını kullanabilir ve daha sezgisel dApp'ler oluşturmak için verilerinizin avantajlarından veya daha zengin indekslemeden yararlanabilirsiniz. Bundan sonra ne geliştireceğini görmek için sabırsızlanıyoruz!

## SubQuery Hakkında

SubQuery, katman-1 blok zincirleri (Moonriver ve Polkadot gibi) ve DApp'ler arasında çalışan bir veri toplama katmanıdır. Bu hizmet, zincir verilerinin kilidini açar ve sezgisel uygulamalarda kullanılabilmesi için sorgulanabilir bir duruma dönüştürür. DApp geliştiricilerinin, veri işleme için özel bir arka uç oluşturmaya zaman kaybetmeden temel kullanım durumlarına ve ön uçlarına odaklanmalarına olanak tanır.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Moonbeam Hakkında

Moonbeam, Polkadot ağında yerel olarak birlikte çalışabilir uygulamalar oluşturmayı kolaylaştıran Ethereum uyumlu bir akıllı sözleşme platformudur. Bu Ethereum uyumluluğu, geliştiricilerin mevcut Solidity akıllı sözleşmelerini ve DApp ön uçlarını minimum değişiklikle Moonbeam'e dağıtmasına olanak tanır. Polkadot ağı üzerinde bir parachain olarak Moonbeam, Polkadot röle zincirinin paylaşılan güvenliğinden ve Polkadot'a bağlı diğer zincirlerle entegrasyonlardan faydalanacak. Şu anda PureStake tarafından aktif olarak geliştirilmekte olan Moonbeam'in 2021'in 4. çeyreğine kadar MainNet'e ulaşması bekleniyor. Daha fazla bilgi edinin: [https://moonbeam.network/](https://moonbeam.network/).
