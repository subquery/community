# SubQuery Sürümleri Güncellenmiş Teknik İnceleme

![](https://miro.medium.com/max/700/0*guA8YHyJPhu0wmzf)

_SubQuery'nin web3 altyapısının geleceğinde nasıl devrim yaratacağına dair güncellenmiş bir plan_

Uzun bir tasarım, tartışma, test ve geliştirme sürecinden sonra bugün, [Beyaz Bültenimizin yeni ve önemli ölçüde güncellenmiş bir sürümünü yayınlıyoruz](https://static.subquery.network/whitepaper.pdf). İlk olarak Haziran 2021'de yayınlanan SubQuery Whitepaper, merkezi olmayan SubQuery Network ve onun SQT belirteci için stratejik çerçevemizi özetleyen bir belgedir. Orijinal yayından bu yana, müşteri tabanımızda ve topluluğumuzda önemli bir büyüme yaşadık ve SubQuery Ağı oluşturma konusunda büyük ilerleme kaydettik. Bu kaynaklardan, iyileştirme ve yenilik yapma konusunda ilham aldık ve bu, teknik incelememizin en son sürümüyle sonuçlanıyor. <iframe width="560" height="315" src="https://www.youtube.com/embed/Ghxyw5bIHs8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

Bu teknik inceleme, SubQuery'nin SubQuery için tek bir başarısızlık noktası olmamasını sağlamak için blok zinciri verilerini organize eden küresel olarak merkezi olmayan bir katılımcılar ağına geçme planlarını özetlemektedir. Bunun SubQuery'nin çalışma süresini büyük ölçüde artırması, daha iyi artıklık sağlaması ve gecikmeyi azaltarak performansı artırması bekleniyor. Uygulamaların, ağdaki Dizinleyicilerden herhangi bir veri deposunu (SubQuery Projesi tarafından tanımlandığı gibi) sorgulamak için GraphQL'yi kullanabileceği öngörülmüştür.

![](https://miro.medium.com/max/700/0*xtd6e7mn7JkfhpzG)

## Otomatik Odaklama

[Güncellenmiş teknik inceleme](https://static.subquery.network/whitepaper.pdf), SubQuery'nin yarının veri hizmetlerinin çok zincirli, basit ve esnek olması gerektiğine dair inancını koruyor. Teknik inceleme, SubQuery Network'ün bu hususları belirteç ekonomik tasarımına nasıl etkilediğine ve aynı zamanda ileri düzey kullanıcıların bunun üzerinde kurumsal düzeyde hizmetler çalıştırmasına olanak sağladığına ilişkin ayrıntılara giriyor.

### Tasarıma Göre Çoklu Zincir

_SubQuery, web3'ün benimsenmesini teşvik etmek için birlikte çalışan bir blok zinciri topluluğunun geleceğin olduğu fikrine inanmaktadır_

SubQuery, Polkadot ekosistemine özgüdür, bizim evimizdir ve SubQuery Ağının konumu olacaktır. Ancak gelecek çok zincirli. SubQuery, farklı sorunları çözmek için birlikte çalışan birçok farklı blok zincirinin olacağını bilir.

SubQuery Ağı, herhangi bir Katman 1 ağından (Polkadot içinde veya değil) herhangi bir SubQuery Projesini desteklemek üzere tasarlanmıştır. En başından itibaren çok zincirli olacak şekilde tasarlanacak ve inşa edilecektir; burada bir ağdaki projelerin diğerinin yanı sıra dizine eklendiğini göreceksiniz.

### Basit ve klasik.

_SubQuery Ağı, insanların veri sağlayıcısı olacak şekilde tasarlanmıştır._

SubQuery Network'ün yol gösterici ilkesi basitliktir. SubQuery, merkezi olmayan veri sorgulama hizmetlerine yönelik diğer yaklaşımların aşırı karmaşık olduğu ve katılımcıların yatırım getirilerini tahmin etmelerini zorlaştırdığı görüşündedir. Amaç, ağa dahil olmanızı kolaylaştırmak ve gelecekteki potansiyel getirinizi net bir şekilde tahmin etmektir.

SubQuery, katılmak için yüksek bahis eşikleri veya donanıma büyük yatırım gerektirmez. Odak noktamız, SubQuery'nin kullanımını ve rakiplerimizden daha kolay oluşturulmasını sağlamak olacaktır - SubQuery'nin başarısı, topluluğumuzun onunla geleceği inşa etme başarısına bağlıdır.

Bu, bir tasarım hedefinin herkesin katılımını mümkün olduğunca kolaylaştırmak olduğu anlamına gelir. Bir geliştirici olmanıza veya jeton ekonomik modeli hakkında derin bir bilgiye sahip olmanıza gerek yok, kolayca Yetkilendiren olarak katılabilirsiniz. Bir Tüketici olarak, ihtiyaçlarınıza en uygun ödeme seçeneklerine de sahipsiniz. Son olarak, SubQuery Foundation'ın temel odak noktası, uzman bir blok zinciri ekibinden yeni bir hobi geliştiricisine kadar herkesin kendi SubQuery projesini oluşturabilmesi için yeterli desteğin olmasını sağlamaktır.

### Esneklik

_SubQuery topluluğumuzun elinde sadece bir araçtır, sonsuz fırsatlar sadece insanların yaratıcılığı ile sınırlıdır._

SubQuery'nin gerçek avantajları esnekliğinde yatıyor olabilir - kullanıcılar, merkezi olmayan verileri ihtiyaçlarına göre uyarlama ve dönüştürme özgürlüğüne sahip olacak. Bu esneklik dürtüsü, delege edenlerin uzun bağ çözme süreleri beklemek zorunda kalmadan farklı dizin oluşturucuları hızlı ve kolay bir şekilde desteklemesini kolaylaştırmaya kadar uzanır. Son olarak, bu yaklaşım, daha sonra ele alacağımız üç ödeme yöntemiyle mükemmel bir şekilde somutlaştırılmıştır.

## SubQuery'nin Ödeme Yöntemlerinde Yeniliği

Teknik incelemenin bu sürümündeki açık ara en büyük değişiklik, ödeme yöntemlerindeki yeniliğimizdir. Günümüzde genellikle dinlediğimiz müzikler, izlediğimiz diziler, kullandığımız uygulamalar için abonelik bazlı ödemeler yapıyoruz. Öncü web3 hizmet uygulamalarında, bunun yerine, her atomik işlemin ağda tam bir maliyetinin olduğu, kullandıkça öde modelini benimsedik.

Aboneliğe dayalı veya yinelenen ödeme yöntemlerinin kalıcı olduğunu düşünüyoruz. Hizmet sağlayıcılar bunları, öngörülebilir gelirleri temsil ettikleri için severler, benzer şekilde diğer tarafta tüketiciler, bilinen ve kolayca ölçülebilir bir maliyet oldukları için onları sever. Ayrıca, bir kez abone olduğunuzda, çoğu tüketicinin tamamını olmasa da o kadarını tüketmek zorunda hissedeceği, hizmete olan talebi artıracağı ve ölçek ekonomilerinin devreye girmesine izin verecek psikolojik bir faktör de vardır.

Sonuç olarak, SubQuery, tüm katılımcılara SubQuery Token (SQT) ile işlem yapmak için çeşitli esnek yollar sağlayarak, SubQuery Ağı içinde ödeme yapmak için üç yol sunmayı planlıyor. Hem Dizin Oluşturucular hem de Tüketiciler, fiyatlandırmalarının ve desteklenen ödeme yöntemlerinin reklamını yapmak için Plan Pazarında bir araya gelecekler.

![](https://miro.medium.com/max/700/0*f0yVHlbWTE8DdjuB)

### Kullandıkça Öde (PAYG)

Web3 endüstrisi arasında ilk ve bir standart, Kullandıkça Öde'dir. Bu, temel ödeme yöntemidir ve diğerleri için bir yedektir. Her Dizin Oluşturucu, belirli SubQuery Projeleri için istekleri sunma yeteneklerini kaydederken PAYG fiyatlarının reklamını yapacaktır.

### Kapanan Planlar ve Anlaşmalar

Kapatılan Sözleşmeler, yalnızca bir Dizin Oluşturucu ile bir Tüketici arasındaki bir anlaşmayı temsil eder. Yapılan iş için tüm ödemelerin iki taraf arasında aktığı doğrudan bir ilişkidir. Kapalı Anlaşmalar, Dizin Oluşturuculara belirli bir SubQuery Projesi'nden gelen veriler için bir pazar olduğuna dair güven vermek ve esasen onlara hangi Projelerin endekslenmesi gerektiğini belirtmek için tasarlanmıştır. Kapalı Planlar, o SubQuery Projesine ek Dizin Oluşturucuları çekmek için mevcut SubQuery Projelerine de yerleştirilebilir. Bu, mevcut tekelci Endeksleyicinin veriler için makul olmayan bir miktar talep edebileceği veya fiyatları dengeye getirmek için rekabet eksikliğinin olduğu durumlarda faydalı olabilir.

### Kapanan Planlar ve Anlaşmalar

Açık Sözleşmeler, Kapalı Sözleşmelere benzer, ancak birden fazla Dizin Oluşturucunun Tüketiciye veri sağlamak için katılmasına ve rekabet etmesine izin verir. Bir Açık Sözleşme, bir Tüketici ile bir Dizin Oluşturucu arasında bir Sözleşme olarak başlayabilir, ancak daha fazla taraf, "n" Dizin Oluşturucular ve "n" Tüketiciler ile sonuçlanan mevcut Anlaşmaya katılabilir.

Açık Sözleşmeler, hem Dizin Oluşturucular hem de Tüketiciler için uygun koşullar sağlar, ancak rekabet etmek ve aynı verileri sunmak için daha fazla Dizin Oluşturucuyu çekerek Tüketiciler için daha iyi performans ve güvenilirlik sağlar. Tüketiciler dünya çapındaki kullanıcılarla büyük ölçekli uygulamalar çalıştırıyorsa, Açık Sözleşmeler idealdir.

![](https://miro.medium.com/max/1400/0*sc9-ee7VTl0XEhTS)

dizin oluşturucular için yukarıdaki üç ödeme seçeneğinin birleşimi, Tüketiciler ve Dizin Oluşturucular için birkaç gelişmiş abonelik tabanlı seçenek sunar. Bazı taraflar, Kapanan Sözleşmeler tarafından sağlanan ödüllerin kesinliğinden ve yinelenen maliyetlerin öngörülebilirliğinden yararlanabilir. Aynı şekilde, diğerleri de Kullandıkça Öde pazarında yüksek hacimli yinelenen anlaşmalar veya düşük spot fiyatlara giderek en uygun fiyatlı verileri aramayı tercih edebilir.

Bu değişiklikler ve teknik incelemede özetlenen diğerleri, mümkün olan en büyük web3 altyapı hizmetini oluşturmaya odaklandığımızı göstermektedir. Belirteç ekonomik tasarımımızın dikkatlice düşünüldüğünden ve tüm katılımcılar için kapsayıcı büyüme için tasarlandığından eminiz. Devasa bir merkezi hizmetle başlayıp, yavaş yavaş merkezi olmayan bir hizmete geçmek kolay olmasa da, SubQuery ekibi bu zorlu göreve hazır ve umarız bize katılırsınız!

Daha fazla bilgi için lütfen [Discord'daki ekibimizle iletişime geçin](https://discord.com/invite/78zg8aBSMG) veya bir sonraki “Ofis Saatlerimizde” bizimle sohbet edin. Ayrıca, yaklaşan SubQuery test ağında dizin oluşturucu olmak için [ilgi ifadenizi kaydedebilirsiniz](https://forms.gle/RyXyhb8T9Gxkwi7R9).

[Güncellenen teknik incelemeyi okuyun](https://static.subquery.network/whitepaper.pdf)

## SubQuery Ağı Hakkında

SubQuery'nin misyonu, diğerlerinin merkezi olmayan bir geleceğe daha hızlı geçmemizi sağlayan ürünler oluşturmasına yardımcı olmaktır. SubQuery, bir blockchain geliştirici araç takımı ve web3 altyapısının omurgasıdır. Bir SubQuery projesi, zincirlerdeki verileri düzenlemek ve sorgulamak için eksiksiz bir API'dir. Katman 1 blok zincirleri ve merkezi olmayan uygulamalar (dApp) arasında çalışan SubQuery, GraphQL üzerinden iyi yapılandırılmış verileri organize eden ve sunan açık kaynaklı bir dizin oluşturucudur. SubQuery, web3 verileriyle yeni nesil dApp'lere ve araçlara güç sağlar

Şu anda herkes, blockchain verilerini yalnızca birkaç dakika içinde ve ücretsiz olarak, ancak merkezi bir şekilde ayıklamak ve sorgulamak için SubQuery'yi kullanabilir. SubQuery Ağı, aynı ölçeklenebilir ve performanslı çözümü, ancak tamamen merkezi olmayan bir şekilde etkinleştirmeyi önerir.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
