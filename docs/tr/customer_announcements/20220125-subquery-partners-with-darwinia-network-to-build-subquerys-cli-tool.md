# SubQuery, SubQuery'nin CLI Aracını oluşturmak için Darwinia Network ile ortaklık yapıyor

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

Bugün Solarbeam ve SubQuery Network arasındaki ortaklığımızı duyurmak istiyoruz. Darwinia kısa süre önce Kusama parachain açık artırma yuvasını kazandı ve Polkadot yuvalarını güvenceye almaya hazırlanıyor. Darwinia'nın Polkadot için bir çapraz zincir köprü merkezi oluşturma yol haritasının bir parçası olarak, Darwinia, çapraz zincir etkileşimleri için nihai kullanıcı deneyimini sağlamak üzere ihtiyaç duyulacak çok sayıda uygulamayı oluşturmak üzere SubQuery ile ortaklık kurdu

Ortaklığımız, Darwinia'nın uygulama ekosistemini güçlendirmek için SubQuery kullanmaktan daha derine iniyor; Darwinia, SubQuery tarafından yönetilen hizmet için [bir CLI aracı](https://github.com/fewensa/subquery-cli) oluşturmak için SubQuery ekibiyle yakın bir şekilde çalışıyor ([https://project. subquery.network](https://project.subquery.network)). Bu [CLI'ı](https://github.com/fewensa/subquery-cli) bir SubQuery projesi oluşturmak ve yeni bir sürümü hazırlama veya üretim yuvasına otomatik olarak dağıtmak için kullanabilirsiniz. Ek olarak, SubQuery Projelerinde ücretsiz olarak barındırılan çalışan projenizden ayrıntılı eşitleme durumu ve günlükler dahil olmak üzere bilgileri alabilirsiniz. Darwinia bunu daha da ileri götürdü ve [depolarının](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) ana dalına yapılan herhangi bir göndermede bunu yapmak için CLI aracını kullanan bir [GitHub Action iş akışı örneği](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) oluşturdu. Bu yeni otomasyon, Darwinia ve SubQuery arasındaki yakın ilişkinin mükemmel bir örneğidir ve CLI aracı, SubQuery'nin geniş ekosistemindeki diğer birçok proje tarafından zaten kullanılmaktadır.
> "Oluşturduğumuz SubQuery CLI aracı, geliştirme işlem hattımızı gerçekten kolaylaştırdı, artık şubelerdeki sürümleri tamamen yönetebiliyoruz ve değişikliklerimizin SubQuery'nin barındırılan hizmetine otomatik olarak dağıtılacağından eminiz. Schema.graphql dosyasının değişip değişmediğini kontrol etmeye yönelik otomatik sürecimizden özellikle gurur duyuyoruz ve eğer öyleyse, yeni ve temiz bir veritabanını yeniden konuşlandıracağız” — Yalin, Core Developer — Darwinia Network


[Yeni CLI aracına](https://github.com/fewensa/subquery-cli) buradan göz atın ve [canlı örneğini burada görün](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml).

Darwinia'nın büyüyen uygulama ekosistemindeki birçok uygulamanın ilki [Wormhole](https://wormhole.darwinia.network/) uygulaması. Wormhole, ağlar arasında varlık transferini kolaylaştıran kullanımı kolay bir uygulamadır ve Darwinia'nın zincirler arası stratejisinin önemli bir parçasıdır. Şu anda Darwinia ve Ethereum arasındaki köprü çalışıyor. [SubQuery, solucan deliği ile ilgili Darwinia/Crab/Pangolin adresinizde meydana gelen geçmiş aktarımları ve olayları](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia) göstermek için kullanılır (ör. varlıkların başka bir ağdan gelmesi).

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

Buna yönetişim, bahis, zincir keşfi ve daha fazlası dahil olmak üzere tüm Darwinia ağ etkileşimlerini yönetmek için [merkezi bir merkez olan yeni bir Akıllı Uygulama](https://apps.darwinia.network/) dahildir. Bu uygulama, önemli miktarda [Geçmiş verileri ve eylemleri göstermek için SubQuery verileri kullanır](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery, bunu tüm Polkadot ekosisteminde en iyi deneyim haline getirmek için Darwinia'daki ekiple yakın bir şekilde çalışacak.
> "Wormhole için mevcut arka uç hizmetlerimizi değiştirmek üzere SubQuery'yi kullanmaktan heyecan duyuyoruz, uzun vadede SubQuery Network ile bu, hizmetlerimizi tamamen merkezi olmayan ve açık kaynak haline getirecek - gurur duyduğumuz bir şey!" — Yalin, Çekirdek Geliştirici — Darwinia Network


Ayrıca Darwinia, [Parachain Loan Offer web sitelerinin](https://darwinia.network/plo_contribute) [arkasındaki verileri ](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot)sağlamak için SubQuery kullanıyor. Crab, Kusama'daki yerini çoktan kazanmış olsa da, Darwinia'nın bir Polkadot slotu kampanyasına katkıda bulunmak için çok geç değil. Ayrıca, ağlarında oluşturulan tüm bloklar için [Merkle Dağ sıralarını](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr) dizine eklemek için SubQuery'den yararlanıyorlar.

Darwinia, kendi projesini yönetmek ve gerektiğinde güncellemeler yapmak için [SubQuery Projeleri](https://project.subquery.network/)'ni kullanıyor. Sağladığımız dizin oluşturma ve sorgulama hizmetleri tamamen SubQuery tarafından yönetilir ve Polkadot topluluğuna [SubQuery's Explorer'](https://explorer.subquery.network/)da ücretsiz olarak sağlanır.

## Darwinia Ağı Hakkında

Darwinia Network, zincirler arası ekolojinin “Golden Gate Köprüsü” olan Substrate üzerinde inşa edilen merkezi olmayan bir zincirler arası köprü ağıdır. Polkadot, Ethereum, BSC ve diğer heterojen zincirleri çapraz zincir varlık transferi ve genel uzak zincir çağrısı ile birbirine bağlayan en güvenli genel köprü çözümünü sağlar. Ayrıca ana uygulama alanları arasında Defi, zincirler arası NFT ticaret pazarı, oyunlar vb.

[Website](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## SubQuery Ağı Hakkında

[SubQuery](https://subquery.network/), Katman-1 blok zincirleri ve merkezi olmayan uygulamalar (DApp'ler) arasında merkezi olmayan bir veri toplama, indeksleme ve sorgulama katmanıdır. Şu anda Polkadot ve Substrate projelerine odaklanan bu hizmet olarak veri, geliştiricilerin temel kullanım senaryolarına ve ön cephelerine odaklanmasına olanak tanır

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
