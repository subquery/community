# Polkadotのクラウドローンの裏側(パート1)

![](https://miro.medium.com/max/2400/1*JvR4YsstF6OHG3mTr_1Seg.png)

**Subqueryはパラチェーンオークションデータを掘り下げます**

この度、Polkadot社にとって大きなマイルストーンとなる、パラチェーンオークションの第1回目が終了しました。 ここ数週間、パラチェーンスロット第1号、Polkadotクラウンをめぐって、MoonbeamとAcalaの間で激しい戦いが繰り広げられました。 オークションの勝者はAcalaでした。この現代のキャンドル・オークションで勝者がどのようにして選ばれるのかについて詳しく知りたい方は、[AcalaのDan Reecer氏の素晴らしい要約](https://twitter.com/danreecer_/status/1364646604024786949)をご覧ください。

SubQueryはPolkadotの代表的なデータ・インデックス・サービスであり、過去1週間にわたり、クラウドローンのダッシュボード、コントリビューションアプリ、分析サイトの大半に毎日数百万のリクエストを提供してきました。 [SubVis](https://www.subvis.io/)、[Parallel Finance](https://parallel.fi/)、[DotMarketCap](https://dotmarketcap.com/)などのチームは、SubQueryを利用して、クラウドローンやその他のオンチェーンのデータをリアルタイムでウェブサイトやアプリに直接提供しています。

今日は、最初のオークションで何が起こったのかを、一つ一つの寄付のデータに基づいて、もう少し詳しく調べてみたいと思います。

![](https://miro.medium.com/max/2400/0*Pcp3KJvC5eyP2KQ3)

まず、最初のクラウドローンが開始されてから最初のオークションが終了するまで(13日強) 、すべてのクラウドローンに関しては、68,000弱のアドレスから8,750万DOT以上が貢献されました。 2週間で68,000アドレスが18万7,000回の寄付を行い、35億4,000万ドルの寄付金を集め、コミットしました。 これは誰が見ても驚異的な金額であり、個人(および企業) がお気に入りのネットワークをサポートするために、DOTを最大2年間ロックすることにどれだけ熱心に取り組んでいるかを示しています。 今回の出資額は、Polkadotの全流通量の約10％に相当します。

![](https://miro.medium.com/max/2400/0*-ovBJnjxAKfeB81Y)

オークションが始まると投資家の関心が一気に高まり、最初の数時間、そして終了前の最後の方では、貢献数(カウント) が急増しました。 クラウドローンの初日には34,000件以上の貢献があり、直前のラッシュでは2時間で5,618件の貢献がありました。

下のグラフにあるように、Moonbeamは、Acalaよりも21,333以上多くのユニークアドレスから23,984の貢献を集め、オークション期間中の貢献数が圧倒的に多かったのです。

![](https://miro.medium.com/max/2400/0*MSHfjnu7KmMvDmnY)

Acalaが勝利したのは当然として、なぜこうなったのでしょうか？ 貢献者の数とその貢献量は、Acalaの貢献者が平均してMoonbeamよりもはるかに多く貢献しているという事実を隠しています。 その結果、貢献量の合計は下のグラフのようになり、オークション期間中、AcalaがMoonbeamをわずかに上回っていました。

![](https://miro.medium.com/max/2400/0*YbV-ReqSwfimUsbO)

貢献額の大半は2つのイベントで発生しており、この2つの重要なイベントが最初のオークションの結果を大きく変えました。

![](https://miro.medium.com/max/2400/0*jmRsZ7kxEYAWYaUq)

まず最初のイベントは、11月11日午後1時25分（UTC）から5分間の間に発生しました。 当社が[Binanceクラウドローン](https://www.binance.com/en/dotslot)のアドレスにリンクさせた1つのアドレスでは、総額1,900万DOT(7億8,890万米ドル) 以上の7つの取引が連続して行われていました。 1回目は900万DOT(3億6400万米ドル) を超える「Moonbeam」への最大の単独貢献であり、その後、平均34秒間隔で6回の貢献が続きました。 このアドレスは、Acala(260万DOT) 、Clover(210万DOT) 、Astar(200万DOT) 、Manta(170万DOT) にも大きく貢献しています。

2つ目の重要なイベントは、11月13日午前10時40分から75分間の間に発生したもので、1つのアカウントがAcalaに複数の重要な貢献を行ったものです。 このアカウントは[AcalaのLCDOTアドレス](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)を表しており、Acalaはそのクラウドローンに流動性提供されたDOTをすべて投入していました。 最初にいくつかの試験的な取引が行われ、その後、最大の550万DOT(2億2,250万米ドル) を含む大規模な取引が行われました。 最終的にアカラのLCDOTファンドは、オークション期間中に3758回の貢献を行いました。

![](https://miro.medium.com/max/2400/0*GTJviXqhPmRIIf73)

これらの一連の取引により、最終的にAcalaはMoonbeamを上回り、ブロックの勝率は63.11%となりました。 56時間後、ランダムに選ばれた7,718,090ブロックでは、AcalaがMoonbeamに3万8,000DOT(150万米ドル) の差をつけていました。

このオークションのすごいところは、AcalaとMoonbeamの間で6600万DOT(26億7000万米ドル) 以上の資金を集めたにもかかわらず、ランダムに選ばれたブロックでの勝率は、総額のわずか0.056％だったことです。

では誰がクラウドローンに貢献していたのでしょうか? まず、全体の貢献額の中央値はわずか12DOT(485.64ドル) 、全体の47％は10DOT以下、88％は100DOT(4,047.00ドル) 以下でした。 これは、個人の貢献者のコミュニティが非常に強く、強固であることを示しており、パラチェーン・オークションに対するリテールの関心の高さを物語っています。

みなさんの大きな関心ごとは、誰がネットワークを構築しているのか？ということです。 少額の貢献者の中で最も多いのはどのネットワークでしょうか？ 貢献額の内訳を把握するために、既知の取引所やクラウドローンのアカウントは除外しています(リストは付録にあります) 。 ネットワークの中には、ほとんどが少額の資金で構成されているものがあることがわかります(SubGame GammaとDarwinia) 。 一方、Moonbeamのクラウドローン(金額ベース) の68%、Parallel Financeの62%、Clover社の58%を大口投資家(> 5,000 DOT) が占めています。

![](https://miro.medium.com/max/2400/0*ztRnFrVfJ2aTlMiU)

ここではMoonbeamとAcalaを見ていますが、AcalaはMoonbeamよりも小口資金が多く、Acalaの出資額の33％が1,000DOT(40,470米ドル) 未満であるのに対し、Moonbeamでは21％です。

![](https://miro.medium.com/max/2400/0*ge-2XDPgddj-J07V)

_なお、これまでの誰がネットワークを構築しているのかに関する洞察は、既知の貢献者を除外した上で得られたものです。 SubQueryが確認できたのはごく一部であり、ここで共有されているデータに重要な意味を持つ、我々が見逃しているアグリゲータもあるはずです。_

では、人々はどこから貢献しているのでしょうか。 SubQueryでは、[Acala's LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)の暴走が確認されており、全貢献の約28%を占める結果となりました。 2,400万DOT(9億7,100万ドル) を超える金額が直接Acalaに貢献されており、このオークションはAcalaがなければ別の方法で行われていたかもしれません。

さらに、[Binance](https://www.binance.com/en/dotslot)は人気のある参加経路であることがわかり、参加者全体で27%の貢献がありました。 貢献の多い方法としては、[Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)が11％、[Kraken](https://www.kraken.com/learn/parachain-auctions)が7％となっています。 中央集権型取引所は、今でも明らかに好ましい参加方法です。

## SubQuery Networkについて

SubQueryは、Layer-1ブロックチェーン(Polkadot) と分散型アプリケーションとの間のインデックス & クエリーレイヤーをサポートする、Polkadotの代表的なデータプロバイダーです。 SubQueryのデータサービスは、現在稼働しているPolkadotやKusamaといったクラウドローンやパラチェーンオークションのサイトのほとんどで採用されています。

SubQueryのプロトコルは、ブロックチェーンのデータの特異性をSubQuery SDKによって抽象化しているため、開発者はカスタムバックエンド技術に無駄な労力を費やすことなく、コア製品の展開に集中することができます。

​​[Linktree](https://linktr.ee/subquerynetwork) | [Webサイト](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## 付録

すべてのDOT価格は、第1回オークションの終了時の価格＝40.47ドルで表示されています。

すべてのデータは、Polkadot クラウドローンの開始から、11月18日11:57AM UTCの最初のオークションの完了まで(ブロック7,756,107) のものです。

除外されたクラウドローンサイト

-   [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
-   [Binanceクラウドローン](https://www.binance.com/en/dotslot)
-   [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
-   [Krakenクラウドローン](https://www.kraken.com/learn/parachain-auctions)
-   [https://pos.dog/](https://pos.dog/)
-   [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
