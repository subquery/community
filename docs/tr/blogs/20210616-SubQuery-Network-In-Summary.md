# SubQuery Network - Özet

> SubQuery Network nasıl çalışır? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)

Bugün, SubQuery Network'ün yüksek düzeyde nasıl çalıştığı hakkında konuşacağız.

## Katılımcılar


![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

SubQuery Network'deki Katılımcılar

SubQuery Network'de üç tür katılımcı vardır:

-   **Tüketiciler**: Tüketiciler, belirli veriler için SubQuery Network'e talepte bulunacak ve reklamı yapılan SQT miktarını ödeyecektir
-   **İndeksleyiciler**: Indeksleyiciler, verileri endekslemek ve GraphQL isteklerini yanıtlamak için hem node hem de sorgu hizmetini çalıştırarak SubQuery Projelerini kendi altyapılarında barındırır.
-   **Yetkililer**: Delegeler, ödül kazanmak için favori Indeksleyicileri destekleyerek ağa katılacak

## Indeksleyiciler, Tüketiciler ve Sorgucular

Indeksleyiciler ile başlayalım, Indeksleyiciler, perde arkasında çok fazla zor iş yapar. Donanımı yönetin, altyapıyı çalıştırın, kaynakları izleyin ve endekslenecek doğru SubQuery projelerini seçin

Bu zaman ve para gerektirir, ancak buna sahip olduklarında Tüketiciler gelip talepte bulunabilirler. Tüketiciler: Tüketiciler, belirli veriler için SubQuery network'e talepte bulunacak ve reklamı yapılan SQT miktarını ödeyecektir.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Tüketiciler, belirli veriler için SubQuery network'e talepte bulunacak ve reklamı yapılan SQT miktarını ödeyecektir.

## Cobb-Douglas Üretim Fonksiyonu

Bu ödeme bir proje gelir havuzuna gider ve bir stake döneminin sonunda (28 gün) bu proje gelir havuzunu alır ve böleriz. Cobb-Douglas üretim fonksiyonu adı verilen bir şey tarafından indeksleyicilere saçılır.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

Cobb-Douglas üretim fonksiyonu adı verilen bir şey tarafından indeksleyicilere saçılır.

Bu yaklaşım, basit bir ifadeyle, gelirin, hem yanıtlanan taleplerin hem de stake edilen miktarın bir oranı olarak rakip Dizin Oluşturuculara tahsis edildiği anlamına gelir.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Gelir, hem yanıtlanan taleplerin hem de stake edilen miktarın bir oranı olarak rakip Dizin Oluşturuculara tahsis edilir.

Bize göre, bu denklemin güzelliği, rasyonel bir İndeks Oluşturucunun, optimum gelir elde etmek için yaptıkları işe göre yüksek düzeyde SQT'yi sürdürmesi gerektiğidir. Sonuç olarak, İndeksleyiciler oyunda bir hisseyi veya kaplamayı kendi kendine yönetmeye ve sürdürmeye teşvik edildiğinden, keyfi stake şartlarını zorlamamız gerekmiyor.

## Delegeler

Bu nedenle, İndeksleyiciler hem mümkün olduğu kadar çok iş yapmaya hem de ödüllerini en üst düzeye çıkarmak için mümkün olduğunca çok bahis yapmaya teşvik edilir. Delegelerin geldiği yer burasıdır.

Delegeler, yedek SQT'lerini Dizin Oluşturuculara devredebilir, her Dizin Oluşturucu bir _sorgu ücreti gelir paylaşım oranı_ yayınlayabilir, ve bu delegeler, dizin oluşturucunun ödüllendirildiği sorgu ücreti gelirinin bir kısmı ile ödüllendirilecektir.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Delegeler, yedek SQT'lerini Dizin Oluşturuculara devredebilir ve bu yetki verenler, dizin oluşturucunun ödüllendirildiği sorgu ücreti gelirinin bir kısmı ile ödüllendirilecektir

Dizin oluşturucuların reklamını yaptığı _sorgu ücreti gelir payı oranı_, her 28 günlük stake dönemi için kilitlenir ve yürürlüğe girmeden önce 28 günlük stake döneminin tamamı için buna bir düşüş ilan edilmelidir.

Benzer şekilde, delegeler delegasyon tutarlarını herhangi bir noktada kaldırabilirler, ancak yalnızca tüm stake dönemi için yetki verdiklerinde ödül alırlar.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegeler, yalnızca tüm bahis dönemi için yetki verdiklerinde ödül alacaklardır

## Satın alma emirleri

Bir projeyi indekslemek zaman ve para gerektirir, zincirde çok fazla veri vardır. Dizin Oluşturucuları, tamamen yeni bir SubQuery Projesini endekslemeye ve desteklemeye teşvik etmek için, Tüketicilerin yeni SubQuery Projelerinin Dizin Oluşturucularına garantili gelir sinyali vermesi için bir piyasa mekanizması uygulamayı planlıyoruz.

Onlara satın alma emirleri diyoruz ve Tüketiciler, belirli bir fiyat ve talep sayısı için zincir üzerinde bir sözleşmenin reklamını yapabilir. Dizin oluşturucular bunu görüntüleyebilir ve sözleşmeleri doldurmayı seçebilirler.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Tüketiciler, belirli bir fiyat ve talep sayısı için zincirde bir satın alma emrinin reklamını yapabilir.

Rekabeti artırmak ve fiyatları düşürmek için ek Dizin Oluşturucuları çekmek için mevcut SubQuery Projelerine satın alma siparişleri de verilebilir