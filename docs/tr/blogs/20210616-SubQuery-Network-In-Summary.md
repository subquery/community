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

Delegators can delegate their spare SQT to Indexers, each Indexer can publish a _query fee revenue share rate_, and those delegators will be rewarded by a portion of the query fee revenue that the indexer is rewarded in.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Delegators can delegate their spare SQT to Indexers and those delegators will be rewarded by a portion of the query fee revenue that the indexer is rewarded in

The _query fee revenue share rate_ that indexers advertise is locked for each 28 day staking era, and a decrease to it must be advertised for an entire 28 day staking era before coming into force.

Similarly, delegators can remove their delegation amounts at any point, but they will only receive rewards when they have delegated for the entire staking era.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegators will only receive rewards when they have delegated for the entire staking era

## Purchase Orders

Indexing a project takes time and money, there’s a lot of data on the chain. In order to encourage Indexers to index and support an entirely new SubQuery Project, we plan to implement a market mechanism for Consumers to signal guaranteed revenue to Indexers of new SubQuery Projects.

We’re calling them purchase orders, and Consumers can advertise a contract on chain for a set price and number of requests. Indexers can view this and choose to fill the contracts.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Consumers can advertise a purchase order on chain for a set price and number of requests.

Purchase orders can also be placed on existing SubQuery Projects to attract additional Indexers to improve competition and decrease prices