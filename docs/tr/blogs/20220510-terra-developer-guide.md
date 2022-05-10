# SubQuery Terra İlk Katılım Kılavuzu

![](https://miro.medium.com/max/1400/1*DiTE9KuzH0xHLojzGWxOuw.png)

Bir süredir Terra desteğini perde arkasında geliştiriyor ve iyileştiriyoruz ve bunu önemli geliştirme lansman ortaklarıyla test ediyoruz (önümüzdeki günlerde duyuruları takip edin). Bu uzun dönem, SubQuery'nin bugün Terra'ya getirdiği ölçeklenebilirlik, güvenilirlik ve özellikler konusunda son derece emin olmamızı sağladı. Bu makalede, tüm Terra topluluğunun veri indeksleme ihtiyaçlarını çözmek için kullanmaları için ayrıntılı bir geliştirici kılavuzu ve yol haritası paylaşıyoruz.

SubQuery, esnek ve hızlı bir açık veri dizinleyicisidir. Açık dizin oluşturma aracımız, geliştiricilerin saatler içinde kendi API'lerini oluşturmalarına yardımcı olmak için tasarlanmıştır ve sözlüklerin (önceden hesaplanmış dizinler) yardımıyla zincirleri inanılmaz derecede hızlı bir şekilde dizine eklemek için tasarlanmıştır. Polkadot'taki tüm sektörlerdeki (cüzdanlar, ağlar, kaşifler, NFT, DeFi, tarayıcılar, vb.) müşterilerle olan deneyimimiz bunu oluşturmamıza yardımcı oldu.

Bu, henüz ilk sürümlerinde ve bir "beta"nın çok ötesine geçmeyi düşünsek de, herhangi bir hatanın ekibimize bildirilmesini ve bu hataları hızla giderebilmemizi memnuniyetle karşılarız.

<iframe width="656" height="369" src="https://www.youtube.com/embed/dS7h3isQCeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Neden SubQuery Kullanılır?

Bazı önemli geliştirici araçları ve altyapı hizmetlerinde ciddi bir eksiklik olmasına rağmen, uygulama ekosistemi Terra'da başarılı oldu. Bunu görmek harika ve Terra'daki Lunatics'in gücü ve yaratıcılığının bir kanıtı. Ekiplere veri indeksleme ihtiyaçlarını nasıl çözdüklerini sorduğumuzda çoğu durumda şöyleydi:

- **Kendi çözümünüzü oluşturun:** Uygulamanız için özel olarak oluşturulmuş, kendi başınıza çalışan özel bir uygulama. Ama neden tekerleği yeniden icat ettin? SubQuery, güvenilir ve hızlı bir açık dizin oluşturucu oluşturmaya odaklanıyor - size zaman kazandırmak için buradayız
- **Sorgular için akıllı sözleşmeler tasarlama:** Bazı ekipler, uygulama mantığına özel daha gelişmiş sorgulara özellikle izin vermek için akıllı sözleşmelerinde özel tuhaflıklar bile uyguluyorlardı.

SubQuery'de kullanımı kolay ve ışık hızında bir açık kaynaklı SDK'ya sahibiz. Size standart bir GraphQL bitiş noktası sağlar veya doğrudan postgres veritabanını sorgulayabilirsiniz. Bununla, kendi akıllı sözleşmelerinizden benzersiz bir dizi veriyi endeksleyebilirsiniz ve bu, rekabetinizi sudan çıkaracak üstün bir ürün oluşturmanıza olanak tanır! İhtiyacınız olan verileri sizin için en uygun şekilde elde etmeniz için size esneklik sağlıyoruz.

Güvenilirlik anahtardır ve onu barındırmak için güvenilir ve ölçeklenebilir bir platforma ihtiyacınız vardır. [SubQuery'nin yönetilen hizmeti](https://subquery.network/managedservices), Polkadot'taki en büyük projelere günlük yüz milyonlarca istek sunan tüm müşteriler için sektör lideri bir barındırma çözümüdür. [Kurumsal düzeydeki müşterilerimize](./20211228-enterprise-hosted.md) özel veritabanları, yedekli kümeler, akıllı çok kümeli yönlendirme ve gelişmiş izleme ve analiz gibi hizmetler sunuyoruz. Hazır olduğunuzda uygulamanızı destekleyecek ve sizinle birlikte ölçeklenecektir.

Ve son olarak, birkaç ay içinde, Web3 altyapısının geleceği olan SubQuery Network ile SubQuery altyapınızı tamamen merkezden uzaklaştırabileceksiniz. SubQuery Ağı, proje verilerinizi küresel topluluğa teşvik edilmiş ve doğrulanabilir bir şekilde dizine ekler ve sunar. Terra dahil olmak üzere herhangi bir katman-1 ağından herhangi bir SubQuery projesini desteklemek üzere tasarlanmıştır, böylece lansmandan itibaren birleşik SubQuery Ağı'nın ölçeğinden yararlanabilirsiniz.

## Kurulum Talimatları

Önce npm i -g @subql/cli@latest aracılığıyla @subql/cli'nin yeni bir sürümünü yüklemeniz gerekir.

En iyi yol, [başlangıç ​​projemizle başlamaktır](https://github.com/subquery/terra-subql-starter), tüm eşleme işlevlerinin bir örneğini içeren çalışan bir proje içerir: Bu proje aşağıdakileri dizine ekler:

- **BlockHandler:** Tüm bloklar ve bunların hash ve yükseklikleri
- **TransactionHandler: Tüm işlemler ve bunların karma değeri, yüksekliği ve zaman damgası</li>
- **EventHandler:** Filtrelenmiş bir akıllı sözleşme adresinden (bLuna) tüm akıllı sözleşme aktarım olayları ve bunların karması, yüksekliği, göndericisi, alıcısı ve tutarı
- **MessageHandler:** Filtrelenmiş bir akıllı sözleşme adresinden (bLuna) tüm akıllı sözleşme mesajları ve bunların hash, yükseklik, sözleşme, gönderici ve execute_msg verileri</ul>

SubQuery, Terra'nın akıllı sözleşmelerinin hem işlem hem de mesaj abonelikleri ve işleyicileri ile endekslenmesini destekler. [Başlangıç ​​projesinde](https://github.com/subquery/terra-subql-starter) Akıllı Sözleşme desteğinin çalışan bir örneğini görebilir ve [SubQuery Üniversitesi ](http://localhost:8080/build/manifest.html#mapping-handlers-and-filters)ile ilgili belgeleri okuyabilirsiniz.

SubQuery'nin Terra uygulaması, SubQuery'nin Polkadot desteğiyle neredeyse aynı şekilde ve Graph'ın yaklaşımına benzer şekilde çalışacak şekilde tasarlanmıştır. Genel SubQuery belgelerine Terra'ya özel bilgiler eklemek için 

SubQuery Üniversitesi'ni güncelledik. Bu [mükemmel başlangıç ​​kılavuzunu buradan](http://university.subquery.network/quickstart/quickstart-terra.html) izleyerek başlayabilirsiniz.</p> 



## Projenizi SubQuery'nin Yönetilen Hizmetine Dağıtma

Projenizi her zaman kendi altyapınızda kolayca çalıştırabilecek olsanız da [SubQuery'nin yönetilen hizmeti](https://subquery.network/managedservices) artık Terra projesini desteklemektedir. En büyük projelerden bazıları, SubQuery'nin [kurumsal düzeyde](./20211228-enterprise-hosted.md) yönetilen hizmetine bağlıdır ve artık siz de yapabilirsiniz. Lansman ortağı anlaşmamızın bir parçası olarak size 3 ay ücretsiz hosting sağlıyoruz.

Terra SubQuery projenizi yönetilen hizmetimizde yayınlamak için [buradaki kılavuzu](https://university.subquery.network/run_publish/publish.html) takip edebilirsiniz. Lütfen [SubQuery projenizi GitHub yerine IPFS kullanarak](https://university.subquery.network/run_publish/publish.html) barındırmanız gerektiğini unutmayın.

Yönetilen hizmet projenizi istediğiniz kadar güncelleyebilirsiniz. Kesintisiz mavi/yeşil yükseltmeler yapmanıza olanak tanımak için bir [hazırlık dağıtım yuvası](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md) bile var. Bu hazırlama yuvası, projenizin arka planda yeniden indekslenmesi için yeni bir veritabanıyla temiz bir SubQuery örneği çalıştırmak için de kullanılabilir. Müşteriler genellikle hazırlama yuvasını uygulamalarının hazırlama/geliştirme sürümlerine bağlar.

Dağıtıldıktan sonra, SubQuery Gezgini'ni kullanarak projenize erişebilir ve doğrudan uygulamanızdan sağlanan GraphQL uç noktasına isteklerde bulunabilirsiniz. [GraphQL abonelikleri](https://university.subquery.network/run_publish/subscription.html), daha karmaşık sorgular ve [toplama işlevleri](https://university.subquery.network/run_publish/aggregate.html) gibi daha gelişmiş özellikleri etkinleştirmemizi istiyorsanız bize bildirin.

Terra arşiv düğümümüzün projeniz için iyi çalışmasını sağlamak için toplu iş boyutunun ince ayarına yardımcı olmamız gerekebileceğinden, projenizi dağıttıktan sonra lütfen bize bildirin.



## Terra için SubQuery Desteği

Bugün aşağıdakileri paylaşıyoruz:

-   Gelişmiş blok indeksleme, olay
-   Terra Dictionary: [dizin oluşturma süresini önemli ölçüde azaltmak için](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md) önceden hesaplanmış dizinler
-   Ücretsiz [kurumsal düzeyde yönetilen](./20211228-enterprise-hosted.md) hizmetimizde Terra için tam destek
-   SubQuery Üniversitesi'ndeki sezgisel belgeler</li> </ul> 
  
  Önümüzdeki haftalarda şunları bekleyebilirsiniz:
  
  -   [SubQuery Academy'de adım adım eğitim kursu](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   Merkezi olmayan SubQuery Ağımızda Terra için tam destek (yakında mevcut Frontier test ağımızda bir proje göreceksiniz)



---

Terra için beta desteğimizin lansmanı, geliştiricilerinin daha ileri ve daha hızlı ilerlemesini sağlamak için Terra topluluğu için gelişmiş indeksleme araçları sunma taahhüdümüzde önemli bir dönüm noktasıdır. Web3'teki en hızlı büyüyen geliştirici topluluklarından biri için güvenilir bir altyapı ortağı olarak teklifimizi geliştirmek ve görünürlüğümüzü artırmak için topluluktan geri bildirim almak için sabırsızlanıyoruz

James Bayly



## Bağlantılar

-   [Başlangıç Kılavuzu](https://university.subquery.network/quickstart/quickstart-terra.html)
-   [SubQuery Üniversitesi (Belgeler)](https://university.subquery.network/)
-   [Örnek Terra Projesi](https://github.com/subquery/terra-subql-starter)
-   [Hizmetleri yönet](https://explorer.subquery.network/)
-   [Yönetilen Hizmette kendi Terra Projenizi yayınlayın](https://project.subquery.network/)



## SubQuery Hakkında

[SubQuery](https://subquery.network/), başkalarının geleceğin Web3 uygulamalarını oluşturmasını sağlayan bir blok zinciri geliştirici araç takımıdır. Bir SubQuery projesi, katman-1 zincirlerinden verileri düzenlemek ve sorgulamak için eksiksiz bir API'dir. Şu anda Polkadot, Substrate, Avalanche ve şimdi Terra projelerine hizmet veren bu hizmet olarak veri, geliştiricilerin veri işleme için özel bir arka uç oluşturmaya zaman kaybetmeden temel kullanım durumlarına ve ön uçlarına odaklanmalarına olanak tanır. SubQuery Ağı, aynı ölçeklenebilir ve güvenilir çözümü, ancak tamamen merkezi olmayan bir şekilde etkinleştirmeyi önerir.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
