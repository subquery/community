# SubQuery, DeFi Verilerini Birleştirmek Polkadot ve Kusama Kurucularina Sunmak için Acala'yı Entegre Ediyor

![](https://miro.medium.com/max/1400/1*cg4kJs0WEcyPP73EAtHomA.png)

Geçen hafta [SubQuery](https://www.subquery.network/), projelerinin bir sonraki aşaması olan [SubQuery Explorer](https://explorer.subquery.network/)'ı yayınladı. Bu hafta, Acala ve SubQuery, kullanıcıların ve geliştiricilerin, Acala'nın Polkadot için DeFi merkezinden verileri yalnızca birkaç dakika içinde ve ücretsiz olarak sorgulamasına ve çıkarmasına olanak tanıyan bir entegrasyonu tamamladı.

SubQuery, katman-1 blok zinciri (Acala) ve DApp katmanı arasında çalışacak bir veri toplama katmanıdır. Çözüm, Acala ve diğer blok zincirlerinden gelen verileri toplar ve düzenler, geliştiricilerin çok çeşitli projeler için kullanması için iyi yapılandırılmış veriler sunar. Bu hizmet, DApp geliştiricilerinin veri işleme için özel bir arka uç oluşturmaya zaman kaybetmeden temel kullanım durumlarına ve ön uçlarına odaklanmalarına olanak tanır.

Bu hizmet, Dapp geliştiricilerinin veri işleme için özel bir arka uç zaman zaman gözden düşmeden temel durum uçlarına sahip olmalarından yararlanma beklentilerdir. Acala, merkezi olmayan finansa (DeFi) odaklanan özel bir blok zinciridir Polkadot ve Kusama ekosistemlerine hizmet eden bir DeFi merkezi ve altyapısı haline gelen çoklu DeFi ilkelleri yaratır. Ekip, çok teminatlı bir stablecoin (aUSD — The Acala Dollar), otomatik bir piyasa yapıcı (AMM) DEX, Liquid DOT (LDOT) adlı tokenize edilmiş bir stake edilmiş varlık dahil olmak üzere ürünler geliştirdi ve kendi gazını getir özelliği uyguladı. Sabit paralar gibi desteklenen herhangi bir varlıkta gaz ücretlerinin ödenmesine izin vermek. Acala'nın para zinciri, Polkadot için DeFi merkezi ve çeşitli blok zincirlerinden varlıkları ve likiditeyi toplayan bir iniş pisti rolünü oynamayı planlıyor.

Bugün [Alt Sorgu Gezgini](https://explorer.subquery.network/)'ne eriştiğinizde yeni bir Acala Alt Sorgu Projesi ile karşılanacaksınız. Bu Alt Sorgu, Acala'da oluşturulan tüm harici verileri dinamik olarak izler ve aşağıdakiler için türetilmiş toplu istatistikleri hızlı bir şekilde gösterebilir:

-   Likidite değişikliklerine ilişkin Geçmiş Veriler (sağlayıcılara göre ayrılmış)
-   Tüm zincirler arası varlık takaslarına ilişkin Geçmiş Veriler
-   Transfer geçmişi

![](https://miro.medium.com/max/1400/0*sXPljA1RE754fuDQ)

[Explorer](https://explorer.subquery.network/)'ı kullanarak kodda hiçbir şey uygulamadan Acala Alt Sorgu Grafiği ile oynayabilirsiniz. Ayrıca, Acala'nın verilerini analiz ederken her GraphQL talebinde belirtebileceğiniz türleri belgeledik.

Aşağıda, bir kullanıcının Acala Mandala ağı üzerinden ACA jetonunu kullanarak önceki 5 transfer olayını nasıl hızlı ve kolay bir şekilde görebileceğine dair basit bir örnek verilmiştir. Burada, bu verileri herhangi bir istemciye sıralamak ve almak için basit GraphQL dilini kullandığımızı görebilirsiniz. DApp'ler bunu kredi pozisyonlarını izlemek için kullanabilir ve teminatları tasfiye etmeye yardımcı olmak için açık artırmalara vb.

![](https://miro.medium.com/max/1400/0*zlxPf2tz8DVX95kY)

Tek bir hesabı incelediğimiz ve onun tarafından yapılan tüm token takas olaylarını aldığımız biraz daha karmaşık bir örnek aşağıdadır. Bir portföy DApp'i, bu verileri, sahibinin hesabı ve token performansı, bahisten elde edilen gelir, likidite provizyonu ve borçlanma harcamalarına ilişkin bir genel bakış oluşturmak için kullanabilir.

![](https://miro.medium.com/max/1400/0*hdTbn41vDvIYuv3_)

[SubQuery Explorer](https://explorer.subquery.network/), dünya çapında katkıda bulunanlar tarafından yapılan ve SubQuery ekibi tarafından yönetilen yayınlanmış SubQuery projelerine erişim sağlayan, çevrimiçi olarak barındırılan bir hizmettir. Misyonu, geliştiricilerin daha fazlasını başarmasına yardımcı olmak için altyapı hizmetleri sağlayarak Polkadot ağ verilerine erişimi kolaylaştırmaktır.

[Alt Sorgu](https://www.subquery.network/), her Substrate/Polkadot ekibinin verilerini işlemesine ve sorgulamasına olanak tanır. Proje, uygulama katmanına hizmet eden veri protokollerinin büyümesinden ilham alıyor ve amacı, Polkadot/Substrate projelerinin, herkesin verileri güvenilir bir şekilde daha hızlı bulmasını ve tüketmesini sağlayarak daha iyi dApp'ler oluşturmasına yardımcı olmaktır. Bugün herkes Polkadot ağ verilerini sadece birkaç dakika içinde ve hiçbir ücret ödemeden sorgulayabilir ve çıkarabilir.

[E-posta](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [Linkedin](https://www.linkedin.com/company/subquery)

[Acala](http://acala.network/), Polkadot'un finansal uygulamaları kullanmayı veya oluşturmayı hızlı ve kolay hale getiren, ticaret verimliliğini artıran ve zamandan tasarruf sağlayan merkezi olmayan finans merkezi ve sabit para birimidir. Platform bir dizi finansal ilkel sunuyor: Bitcoin gibi zincirler arası varlıklar tarafından desteklenen çok taraflı bir stabilcoin, güvenilmez bir staking türevi ve likiditeyi serbest bırakmak ve finansal yenilikleri güçlendirmek için merkezi olmayan bir borsa. Acala, kullanıma hazır çapraz zincir yetenekleri ve sağlam güvenlik ile akıllı sözleşmeleri veya yerleşik protokolleri kullanmak için finans uygulamaları için fiili açık platformdur.

[Discord](https://discord.gg/vdbFVCH) | [Web sitesi](https://acala.network/) | [Twitter](https://twitter.com/AcalaNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [Acala Wiki](https://github.com/AcalaNetwork/Acala/wiki) | [Bülten](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc)