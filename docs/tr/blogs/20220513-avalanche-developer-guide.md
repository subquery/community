# Avalanche için SubQuery Desteğinin Beta Sürümü Yayınlandı

![](https://miro.medium.com/max/1400/1*BiJaESR69-vDimBJmXhQvw.png)

Bugün, aylarca süren iyileştirmeler, yeniden düzenleme ve testlerden sonra, açık indeksleme çözümümüzün beta desteğini Avalanche topluluğuyla paylaşmaktan mutluluk duyuyoruz. Polkadot'ta lider veri indeksleyicisi olarak SubQuery'yi kurduktan sonra, yakın zamanda [Avalanche Summit](https://www.avalanchesummit.com/agenda) sırasında Avalanche genişlememizin yakın zamanda duyurulması, esnek ve ölçeklenebilir bir indeksleme aracı için istekli geliştiriciler tarafından heyecanla karşılandı. 

Beta kılavuzunu buradan takip edin: https://university.subquery.network/quickstart/quickstart-avalanche.html

SubQuery, esnek ve hızlı bir açık veri dizinleyicisidir. Açık dizin oluşturma aracımız, geliştiricilerin saatler içinde kendi API'lerini oluşturmalarına yardımcı olmak için tasarlanmıştır ve sözlüklerin (önceden hesaplanmış dizinler) yardımıyla zincirleri inanılmaz derecede hızlı bir şekilde dizine eklemek için tasarlanmıştır. Polkadot'taki tüm dikeylerdeki (cüzdanlar, ağlar, kaşifler, NFT, DeFi, tarayıcılar vb.) müşterilerle olan deneyimimiz bunu oluşturmamıza yardımcı oldu.

Bugünden itibaren, Avalanche geliştiricileri Polkadot'ta yaygın olarak kullanılan aynı hızlı, esnek ve açık dizin oluşturma çözümünün beta sürümüne erişebilecek. Bu bir beta sürümü olduğundan, bazı sorunları olması muhtemeldir. Bu nedenle, ekibimize herhangi bir hata bildirilebilirse memnun oluruz, böylece bunları hızlı bir şekilde ele alabiliriz.



## Neden SubQuery Kullanılır?

_Avalanche'da zaten birkaç seçenek daha var, peki neden SubQuery ile derleme yapasınız?_

Birçoğunuz bana Avalanche Zirvesi'nde tanışacak kadar şanslı olduğum bu soruyu sordu. Alanımızda genellikle üç çözüm daha vardır:

- Kendi çözümünüzü oluşturun: Neden tekerleği yeniden icat etmelisiniz? SubQuery, güvenilir ve hızlı bir açık dizin oluşturucu oluşturmaya odaklanıyor - size zaman kazandırmak için buradayız
- Standartlaştırılmış veri hizmetleri veya "birleşik API'ler": Bu sağlayıcılar, aynı uygulamayı herkesle aynı temel akıllı sözleşme üzerine oluşturuyorsanız mükemmeldir, ancak siz oluşturmuyorsunuz. Bununla, kendi akıllı sözleşmelerinizden benzersiz bir dizi veriyi endeksleyebilirsiniz ve bu, rekabetinizi sudan çıkaracak üstün bir ürün oluşturmanıza olanak tanır! İhtiyacınız olan verileri sizin için en uygun şekilde elde etmeniz için size esneklik sağlıyoruz
- Diğer açık GraphQL veri hizmetleri: Onları zaten kullanan herkes aynı sorunları dile getirdi, ciddi bir geliştirici desteği eksikliği ve bazı önemli performans sorunları vardı. Ek olarak, bir sonraki alt ağınıza genişletme planı olmayan sözleşme zincirinde yalnızca kapsama alanı vardı

SubQuery'de kullanımı kolay ve ışık hızında bir açık kaynaklı SDK'ya sahibiz. Size standart bir GraphQL bitiş noktası sağlar veya doğrudan postgres veritabanını sorgulayabilirsiniz.

Güvenilirlik anahtardır ve onu barındırmak için güvenilir ve ölçeklenebilir bir platforma ihtiyacınız vardır. [SubQuery'nin yönetilen hizmeti](https://subquery.network/managedservices), Polkadot'taki en büyük projelere günlük yüz milyonlarca istek sunan tüm müşteriler için sektör lideri bir barındırma çözümüdür. [Kurumsal düzeydeki müşterilerimize](./20211228-enterprise-hosted.md) özel veritabanları, yedekli kümeler, akıllı çok kümeli yönlendirme ve gelişmiş izleme ve analiz gibi hizmetler sunuyoruz. Hazır olduğunuzda uygulamanızı destekleyecek ve sizinle birlikte ölçeklenecektir.

Ve son olarak, birkaç ay içinde, Web3 altyapısının geleceği olan SubQuery Network ile SubQuery altyapınızı tamamen merkezden uzaklaştırabileceksiniz. SubQuery Ağı, proje verilerinizi küresel topluluğa teşvik edilmiş ve doğrulanabilir bir şekilde dizine ekler ve sunar. Avalanche dahil olmak üzere herhangi bir katman-1 ağından herhangi bir SubQuery projesini desteklemek üzere tasarlanmıştır, böylece lansmandan itibaren birleşik SubQuery Ağı'nın ölçeğinden yararlanabilirsiniz.



## Kurulum Talimatları

Beta kılavuzunu buradan takip edin: https://university.subquery.network/quickstart/quickstart-avalanche.html

Öncelikle @subql/cli'yi *npm i -g @subql/cli  üzerinden yüklemeniz gerekir

En iyi yol, başlangıç ​​projemizle başlamaktır, tüm eşleme işlevlerinin bir örneğini içeren çalışan bir proje içerir: Bu proje aşağıdakileri dizine ekler.: https://github.com/subquery/avalanche-subql-starter. Bu proje aşağıdakileri [Pangolin Akıllı Sözleşmesinden endekslemektedir](https://snowtrace.io/token/0x60781c2586d68229fde47564546784ab3faca982):

- BlockHandler: Tüm bloklar ve bunların hash ve yükseklikleri
- TransactionHandler: Pangolin akıllı sözleşmesindeki onaylama işlevinden yapılan tüm işlemler
- EventHandler: Pangolin akıllı sözleşmesindeki tüm transfer etkinlikleri

SubQuery'nin Avalanche uygulaması, SubQuery'nin Polkadot desteğiyle neredeyse aynı şekilde ve Graph'ın yaklaşımına benzer şekilde çalışacak şekilde tasarlanmıştır. Genel SubQuery belgelerine Avalanchea özel bilgiler eklemek için SubQuery Üniversitesi'ni güncelledik. Bu [mükemmel başlangıç ​​kılavuzunu buradan](https://university.subquery.network/quickstart/quickstart-avalanche.html) izleyerek başlayabilirsiniz.



## Avalanche için SubQuery Desteği

Avalanche ekosistemine tam desteğimizin ilk aşamasını tamamlıyoruz.

![](https://miro.medium.com/max/1400/0*GUKZJfJCz1nB_3zc)

Bugün aşağıdakileri paylaşıyoruz:

- Gelişmiş Sözleşme Zinciri İndeksleme
- Avalanche Dictionary: [dizin oluşturma süresini önemli ölçüde azaltmak için](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md) önceden hesaplanmış dizinler
- Ücretsiz [kurumsal düzeyde yönetilen](./20211228-enterprise-hosted.md) hizmetimizde Avalanche için tam destek
- SubQuery Üniversitesi'ndeki sezgisel belgeler Önümüzdeki haftalarda şunları bekleyebilirsiniz: [SubQuery Academy'de adım adım eğitim kursu](./20211018-subquery-launches-the-subquery-academy.md)
- Merkezi olmayan SubQuery Ağımızda Avalanche için tam destek (yakında mevcut Frontier test ağımızda bir proje göreceksiniz)

Önümüzdeki aylarda planlanan Alt Ağ sayısıyla, tüm uyumlu Alt Ağlarda çalışan hızlı, açık ve esnek dizin oluşturma desteğine büyük ihtiyaç duyulacaktır. Polkadot'un parachain'leri için bu yapılandırılabilirlik seviyesini uygulama deneyimine sahibiz ve Avalanche için aynı sonucun nasıl sağlanacağını araştırıyoruz (örneğin, kardan adamın özel uygulamalarını içe aktararak). Blok vb.).

Avalanche için beta desteğimizin lansmanı, geliştiricilerinin daha ileri ve daha hızlı ilerlemesini sağlamak için Avalanche topluluğu için gelişmiş indeksleme araçları sunma taahhüdümüzde önemli bir dönüm noktasıdır. Web3'teki en hızlı büyüyen geliştirici topluluklarından biri için güvenilir bir altyapı ortağı olarak teklifimizi geliştirmek ve görünürlüğümüzü artırmak için topluluktan geri bildirim almak için sabırsızlanıyoruz

Şimdi bu ekosistemdeki ilk SubQuery projelerini geliştirirken yakından destekleyebileceğimiz lansman ortakları arıyoruz. Bizimle yolculukta ilk olmak istiyorsanız james.bayly@subquery.network adresinden bana ulaşın.

_James Bayly_

Beta kılavuzunu buradan takip edin: https://university.subquery.network/quickstart/quickstart-avalanche.html



## SubQuery Hakkında

[SubQuery](https://subquery.network/), başkalarının geleceğin Web3 uygulamalarını oluşturmasını sağlayan bir blok zinciri geliştirici araç takımıdır. Bir SubQuery projesi, katman-1 zincirlerinden verileri düzenlemek ve sorgulamak için eksiksiz bir API'dir. Şu anda Polkadot, Substrate, Avalanche ve şimdi Terra projelerine hizmet veren bu hizmet olarak veri, geliştiricilerin veri işleme için özel bir arka uç oluşturmaya zaman kaybetmeden temel kullanım durumlarına ve ön uçlarına odaklanmalarına olanak tanır. SubQuery Ağı, aynı ölçeklenebilir ve güvenilir çözümü, ancak tamamen merkezi olmayan bir şekilde etkinleştirmeyi önerir.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
