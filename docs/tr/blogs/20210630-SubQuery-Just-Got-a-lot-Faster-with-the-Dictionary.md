# SubQuery Sözlükle Daha Çok Hızlı Oldu

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

Bugün SubQuery'nin Sözlük indeksleme özelliği olan, SubQuery'deki yeni geliştirmemizi duyurmaktan gurur duyuyoruz.

SubQuery Sözlüğü, projelerinizi hızlandırmakla ilgilidir. SubQuery, projenizin performansını dizine eklemeyi önemli ölçüde iyileştirir.** Bazen 10 kata kadar daha hızlıdır.**

Zincir verilerini indekslerken, her bloğu incelemek için SubQuery Projeleri kullanılır. Polkadot'un zinciri büyük, neredeyse 6 milyon bloktan oluşan 130 GB'lık yapılandırılmamış veridir. Bu, -özellikle test ederken- beklemek istemediğiniz bir dizine eklemek saatler sürebilir.

SubQuery projesi artık tamamını atlama seçeneceğine sahip, aslında bir zincir içindeki tüm olayların konumunu önceden indeksliyoruz.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Verilerin yaygın olmadığı, ancak veri seyrekmiş gibi zincir boyunca iç içe geçtiği durumlarda performans iyileştirilir, Sözlük daha fazla blok atlar ve bu nedenle performans etkisi daha fazladır.

Sözlük uç noktası, ['project.yaml'](https://doc.subquery.network/create/manifest.html), dosyanıza eklenebilir veya alternatif olarak [çalışma zamanında belirtilebilir.](https://doc.subquery.network/run/run.html#using-a-dictionary). Ayrıca, Projenizi [SubQuery Projelerinde](https://project.subquery.network/) çalıştırırken de bu uç noktayı geçersiz kılabilirsiniz.

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

You can read more about the dictionary in our [helpful documentation here](https://doc.subquery.network/run/run.html#using-a-dictionary).

We believe SubQuery is the best data indexing option available for any Polkadot/Substrate dApp, and this new implementation of SubQuery’s Dictionary allows us to further improve our service by speeding up the indexing process for your SubQuery Projects.

You can try it yourself in [SubQuery Projects](https://project.subquery.network/) or view the dictionaries themselves in [our explorer](https://explorer.subquery.network/). In order to use a Dictionary in your existing project, your [@subql/cli](https://www.npmjs.com/package/@subql/cli) version must be at least 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)