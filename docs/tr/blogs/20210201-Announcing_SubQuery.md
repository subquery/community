# SubQuery Duyurusu

## Web3.0 geleceği için dünyanın verilerinin dönüştürün ve sorgulayın

![](https://miro.medium.com/max/1400/1*J5u22qNxndcuCrFJ1mfGqg.png)

OnFinality'nin misyonu, her şekil ve büyüklükteki müşterilere altyapı hizmetleri sağlayarak blok zinciri geliştiricilerini desteklemektir. Bu misyonu ileri taşımak için temel bir sorunu çözmeyi amaçlayan yeni bir girişim başlatıyoruz: SubQuery.

Hemen hemen her blok zincirin verileri işleme ve sorgulama ihtiyacı vardır. Gelişen Polkadot topluluğu, verileri  güvenilir bir şekilde bulmalarına ve hızlı bir şekilde tüketmelerine olanak tanıyan bir hizmete ihtiyaç duyacak. OnFinality'nin misyonu, her şekil ve büyüklükteki müşterilere altyapı hizmetleri sağlayarak blok zinciri geliştiricilerini desteklemektir.

Merkezi olmayan sistemler, verileri ağlar arasında depoladığından, sorgulama yavaş ve zordur. Web 3.0 hayalinin gerçekleşmesi için, onun son kullanıcı için merkezi ağlar kadar hızlı (hatta daha hızlı) olması gerekir. Protokol ekipleri şu anda kendi projeleri için merkezi dizin oluşturma sunucuları oluşturuyor, ancak bu üç probleme yol açıyor:

-   Polkadot/Substrate ekipleri, bir sonraki dApp'i oluştururken bunu oluşturma veya yönetme konusunda endişelenmemelidir
-   Takımlar sürekli olarak tekerleği yeniden icat ediyor; Polkadot'un parachain ile birlikte çalışabilirliğinin temel avantajı, bundan kaçınmaktır
-   Bize göre, Substrate/Polkadot ekosistemi, Ethereum ile aynı büyüme seviyesine ulaşmaya hazır. Ethereum'un hali hazırda sahip olduğu aynı düzeyde topluluk hizmetleri sağlaması gerektiğine inanıyoruz

![](https://miro.medium.com/max/1400/1*l4b4BXWkczVDaHyv30lLQQ.png)

SubQuery'nin amacı, Polkadot/Substrate projelerinin, herkesin verileri güvenilir bir şekilde bulmasına ve daha hızlı kullanmasına izin vererek daha iyi dApp'ler oluşturmasına yardımcı olmaktır. Hizmetimiz, kullanıcıların ilk olarak verileri ayıklamasına, dönüştürmesine, sürdürmesine ve sorgulamasına ve ayrıca gelecekte verileri bağlamasına ve sunmasına olanak tanır. Amacımız, tıpkı The Graph'in Ethereum için olduğu gibi, bunu Substrate/Polkadot ekosistemi için temel bir altyapı parçası haline getirmektir.

> SubQuery, dünyanın verilerini web3.0 geleceği için dönüştürmenize ve sorgulamanıza yardımcı olmak için burada.

![](https://miro.medium.com/max/1000/1*IHstJG-hBwQzicLdWkGR5w.png)

Web 3.0 hayalinin gerçekleşmesi için, son kullanıcı için merkezi ağlardan kadar hızlı (hatta daha hızlı) olması gerekir.

Bu nedenle, kullanıcıların GraphQL ile sorgulanabilecek bir veri kümesi oluşturması için zincirleri boyunca bir dizin oluşturucu çalıştırmasına olanak tanıyan açık kaynaklı bir proje olan SubQuery'yi duyurmaktan inanılmaz gurur duyuyoruz. Bu araç paketi, projelerin kendi SubQuery projelerini oluşturmasına olanak tanıyan ve dizin oluşturucunun kendi ağlarında nasıl geçiş yapabileceklerini ve bu ağları birleştireceklerini tanımlayan bir komut satırı arabirimi içerir. İşte ağı dizine ekleyen ve GraphQL sorgularını destekleyen bir SubQuery düğüm paketi. Bu araçların yardımıyla herkes kolayca sorgu oluşturabilir ve çalıştırabilir.

> _SubQuery Github deposundaki örneğimizi izleyerek hemen başlayabilirsiniz:_ [_https://github.com/OnFinality-io/subql_](https://github.com/OnFinality-io/subql)

Ek olarak, SubQuery belgelerimizi okuyarak veya [https://subquery.network/](https://doc.subquery.network/) adresindeki yeni web sitemizi ziyaret ederek daha fazla bilgi edinebilirsiniz

![](https://miro.medium.com/max/1000/1*3oA1Hvns1vrImTsmowO_Jw.png)

Bu teklife dayalı olarak daha performanslı ve ölçeklenebilir bir yönetilen barındırılan hizmet oluşturmaya odaklanacağız. Yüklenen bir SubQuery projesinden güçlü bir üretime tabi SubQuery nod oluşturacak güvenilir bir altyapı sağlayacağız. Hizmet daha sonra zincirleme durumunu indeksleyecek ve sürdürecek ve kendi kendine barındırılan uygulamaların yerini alabilecek bir üretim GraphQL uç noktası sağlayacaktır. Diğer herkesin dApp'lerini oluşturmaya ve büyütmeye odaklanabilmesi için buna odaklanacağız.

Bu gerçekleştiğinde, son aşamamız Polkadot için kendi zincirimizi (muhtemelen parachain) oluşturarak SubQuery işini tokenize etmektir. Kurumsal ve yüksek tüketimli kullanıcılar için benzer bir faturalandırma modeli sunacak olsak da (tüketim seviyelerine sahip abonelik planı), bu verileri herkese şeffaf hale getirmek için zincirimize kaydedeceğiz ve katılımcı taraflar teşvik olarak ödüller için bahis oynayabilecekler. Zincire istikrar sağlamak ve topluluğun yönümüzü ve yol haritamızı etkilemesine izin vermek için bir yönetişim belirteci çıkaracağız.

Bitcoin ilk başladığından bu yana 10 yılı aşkın bir süredir gelişmeye rağmen, merkezi ağlar hala ana akımdır. Bu büyük ölçüde ağa erişmenin ve ağa yazmanın hızı ve maliyetinden kaynaklanmaktadır. Ethereum, merkezi olmayan akıllı sözleşmelerle ileriye doğru büyük bir adım attı (ve sonuç olarak Grafik inanılmaz derecede başarılı bir altyapı parçası), ancak çekirdek ağ işlem maliyetlerini azaltmak için hala mücadele ediyor.

Polkadot'un potansiyelini erken ve en baştan gördük, çabalarımızı oraya odaklamak doğal geldi. Ethereum'un yönetişim, çatallanma, birlikte çalışabilirlik sorunlarını ve daha fazlasını çözer. Polkadot'un temel dayanağı, çok zincirli birlikte çalışabilirliğinden yararlanacak gelişen bir geliştiriciler, kullanıcılar ve işletmeler topluluğu oluşturmaktır - bu topluluğun, verileri güvenilir bir şekilde bulmalarını ve hızlı bir şekilde tüketmelerini sağlayan bir hizmete ihtiyacı olacak.

Polkadot'un benzersiz mimarisi, tek bir ağa odaklanabileceğimiz ve daha sonra mevcut ve gelecekteki birden fazla zinciri kolaylıkla destekleyebileceğimiz anlamına gelir. Şimdi bu çabayı göstererek, Polkadot hala geliştirilme aşamasındayken bile, yeni nesil blockchain geliştiricilerinin bir sonraki büyük dApp'ı yaratmasına yardımcı olmaya hazır olacağız.

SubQuery, blok zinciri ekiplerinin ve kullanıcıların düğümleri başlatması ve çok çeşitli blok zinciri protokollerine erişmesi için bir altyapı SaaS platformu olan OnFinality'deki ekip tarafından oluşturulacak. API paylaşımlı düğüm hizmetimiz ve altyapı yönetiminde veya bir protokol ekibinin CI/CD test hattının parçası olarak kullanılabilecek özel düğümler de dahil olmak üzere bir simbiyotik hizmetler paketimiz var. En iyi Polkadot/Substrate ekipleriyle ilişkilerimiz, Substrate/Polkadot ağı için yönetilen altyapı barındırma konusunda uzmanlığımız ve karmaşık altyapı projeleri sunma ve bunları üretim kullanımı için barındırma yeteneğimiz var.

**Sam Zou —** CEO ([LinkedIn](https://www.linkedin.com/in/sam-zou-5b8169a/))

Girişimci, Altyapı ve bulut hizmeti tasarımında uzmanlaşmış 20 yılı aşkın BT deneyimine sahip yatırımcılar

**Ian He —** Head of Protocol ([LinkedIn](https://www.linkedin.com/in/yin-he-7a266345/))

Blockchain Mimarı, Polkadot-js'ye Katkıda Bulunan, Substrate teknolojisini erken benimseyen ve ilk Polkadot hackathon'unda ikincilik kazandı.

**James Xu —** Solutions Architect ([LinkedIn](https://www.linkedin.com/in/zhexu/))

Altyapı ve Uygulama Mimarı, Ödüllü yazılım mühendisi

**James Bayly** — Head of Business Development ([LinkedIn](https://www.linkedin.com/in/james-bayly/))

Buradan başlayın [SubQuery Github repository.](https://github.com/OnFinality-io/subql)

Okuyun [SubQuery docs](https://doc.subquery.network/)

[Visit our new website](https://subquery.network/)

Bizi takip edin

-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/%23subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)