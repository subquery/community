# SubQuery がエンコードクラブハッカソンの勝者を祝う

![](https://miro.medium.com/max/1400/1*MnMY9j3nasex9_9MNHUPtA.png)

Polkadot の主要なデータインデックスソリューションである SubQuery は、最近の[Encode Club](https://gitcoin.co/hackathon/gr12?org=subquery) Polkadot Hackathon の受賞者を紹介できることを嬉しく思います。 Gitcoin は、Web3 のコミュニティとアプリケーションの作成に焦点を当てたブロックチェーン開発者コミュニティの中でも傑出した 1 つとして認識されています。 [SubQuery は 12 月に Gitcoin と提携しました](https://subquery.medium.com/subquery-announces-gitcoin-hackathon-16c9d18753a) USD$37 の価値に 5 つのチャレンジをスポンサーします 00(チャレンジで最大の賞金プール)は、有用なツール、ダッシュボードを構築し、SubQuery を別のレイヤ 1 ブロックチェーンに拡張するために開発者を招待しました。

ハッカソンは 12 月 1 日から 16 日まで開催され、Moonbeam、Astar、Acala などの主要なブロックチェーンプロジェクトが様々な賞金プールに貢献しました。 賞品は、事前に設定された基準に基づいてプロジェクトを完了した人に付与されます。 そして、最も創造的なアイデアを提供する人、あるいは SubQuery SDK を改善するための領域を解決する人。 課題を簡単にまとめると以下のようになります。

- [Moonbeam と Astar が提供する Substrate と EVM のインサイトを 1 つの使いやすいアプリケーションにまとめた統一ブロックエクスプローラーの作成](https://gitcoin.co/issue/subquery/grants/1) - 12,000 ドル 【スポンサー：Moonbeam、Astar】。
- [SubQuery や Karura/Acala の DeFi ハブと協力して、Zapper.fi や defisaver.com にインスパイアされたダッシュボードを構築する](https://gitcoin.co/issue/subquery/grants/2) - 8,000 ドル 【スポンサー：Acala】。
- [Polkadot とその様々なパラチェーンにおける最適なステーキングの機会を示すステーキング・ダッシュボードの作成](https://gitcoin.co/issue/subquery/grants/3) - 3,000 ドル
- [すべての RMRK プロトコルベースの NFT のための、マーケットプレイス・エクスプローラーを構築する](https://gitcoin.co/issue/subquery/grants/4) - 2,000 ドル
- [@subql/node サービスを拡張して、別のレイヤー 1 チェーンのデータにインデックスを付ける](https://gitcoin.co/issue/subquery/grants/5) - 12,000 ドル

## 統合 EVM と基底ブロックエクスプローラ

Polkadot/Kusama エコシステムは、Substrate API を使用して構築された Parachain と呼ばれるブロックチェーンで構成されています。 しかし、Moonbeam や Astar などの特定の Parachains は、完全に互換性のある EVM コンポーネントを持つことによってシームレスな Ethereum 互換性を提供します。 現在、Substrate と EVM データを同時に可視化することは困難であり、Moonbeam と Moonriver で 2 つの孤立した経験をもたらしています。 サブストレイト側（例えばサブスキャン）と EVM 側（例：Moonscan & Blockscout）から選択する必要があります。

この課題は、一つの場所を構築し、アカウントの活動の歴史を理解するための大きな機会に対処するために想定されました。 例えば、ステーキングとガバナンスのアクションと ERC20 は、単一のユーザーインターフェイスで転送されます。 これは、Moonbeam 内の大規模なコミュニティによって毎日使用されるアプリケーションになります, アスター, そして、離陸している他の多くの EVM 互換のパラチェーン。

![](https://miro.medium.com/max/1400/0*b_o0NDpJOCv0QvXS)

[このチャレンジ](https://gitcoin.co/issue/subquery/grants/1/10002717200027175) の勝者は@bizzyvinci で、 [Heroku に住んでいるフロントエンド探検家を](https://moonriver-explorer.herokuapp.com/)建設しました。 このチャレンジが巨大なタスクであることを考えると、まだ 100%完了していないことは驚くことではありません。 しかし、我々は、この画期的なイノベーションの進展を支援し、他の EVM チェーンへの拡大に貢献できることを楽しみにしています。

@bizzyvinci は次のように述べました：「私は [ムーンリバーエクスプローラ](https://moonriver-explorer.herokuapp.com/) を作りました。それは素晴らしい経験でした。 最初のステップは SubQuery について学ぶことでした。テンプレートリポジトリを伴う素晴らしいドキュメントがあります。 ドキュメントは、それが始めるために必要なすべてをカバーし、マニフェストファイル、graphql スキーマなど、各側面についても説明します。

## Karura/Acala DeFi ダッシュボード

Acala と Karura は、DeFi の将来のための巨大なビジョンを表しているので、エコシステムのための貴重なツールを構築する大きな機会があります。 この課題には、開発者は、

Zapper に触発された Karura/Acala コミュニティ向けの DeFi ツールを作成する必要がありました。 SubQuery のデータインデックスサービスを利用する [](http://zapper.fi/) と [defisaver.com](http://defisaver.com/)。

[このチャレンジ](https://gitcoin.co/issue/subquery/grants/2/100027176) の勝者は Web3Go で、 [Acala の担保債務ポジション(CDP)](https://web3go.xyz/#/CDPDetail)の素敵な概要を作成しました。 ユーザーがカルラに kUSD 安定したコインを鋳造するには、受け入れられた担保資産の 1 つ(例えば KSM)の最初の預金トークンが必要です。 ユーザーがそうすると、最小担保比率パラメータは、ユーザーが kUSD を鋳造するために必要な担保の最小量を決定します。 CDP の担保資産の市場価格が十分に低下した場合、CDP は「危険」とみなされる可能性があります。

![](https://miro.medium.com/max/1400/0*l7GA1axntiHCINRM)

Web3Go のインターフェイスは、すべての CDP ポジション、その比率、およびその安全なステータスをきれいにリストします。 各ポジションについても、ポジションの履歴に関する情報を提供し、他の人が金融商品を監視することが容易になります。 <iframe width="560" height="315" src="https://www.youtube.com/embed/hc3YDjv6dkk" title="YouTube動画プレイヤー" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

## Polkadot ステーキングダッシュボード

ステーキングは、DOT と KSM トークンを使用するための重要な方法です。 しかし、現在ステーキング用の UX は理解しにくく、ほとんどのユーザーが無学の選択をすることになります。

このチャレンジの目的は、チェーン上のデータと直感的なユーザーエクスペリエンスを組み合わせて、ユーザーが推定される最高の投資収益を理解できるようにすることでした。 検証者の過去のパフォーマンスを比較し、投資収益率が何であるかをユーザーに示します。

Ashik は、すべてのバリデータを取得し、PolkStake 独自の評価(以前の時代のパフォーマンス、手数料、支払い、ステーキング報酬などに基づく)でポルカドットのバリデータのきれいに整理されたリストを表示する[ポルカドットバリデータランキングウェブサイト](https://polkstakes.vercel.app/)である PolkStakes を構築しました。 きれいでシンプルな UI で、本当に感銘を受けました。

![](https://miro.medium.com/max/1400/0*Kaho31-nn-ly8tFS)

"_Subquery は、手動でチェーン上のデータのインデックス作成の労力を軽減します。 これは graphql エンドポイントを提供するので、簡単にデータをクエリできます。 バックエンドとデータベースのメンテナンスの労力を軽減します。 現在、ポークステークスのランキングを計算するためのデータ集計は UI で行われています。 これは SubQuery に移動する必要があります。 また、インデックス化されたデータに対して可視化を行う必要があり、より正確な推定歩留まり予測を追加する必要があります。_" — Polkdata からの Ashik

素晴らしい SubVis チームも構築しました [美しい Polkadot ステーキングダッシュボード](https://polkadot-staking-dashboard.vercel.app/) それは時間の経過と検証のパフォーマンスの合計を示しています 新しいステーキング機能は、SubVis がよく知られている既存のオークションとクラウドローンのページに参加します。

![](https://miro.medium.com/max/1400/0*uPDQdMug2JaZwMbA)

最後に、Web3Go は Moonriver に詳細なステーキング統計を記載した別の優れたエントリに入れました。 各コラーの代表者についての情報、各コラーが提供する歴史的報酬、さらにはコラーが行う行動についての情報を提供します。 彼らはあなた自身のウォレットアドレスにステーキング履歴を表示できるという追加の利点を提供します。

![](https://miro.medium.com/max/1400/0*jQgOnvcaXt6cprJR)

## RMRK NFT マーケットプレイスエクスプローラー

RMRK は、単なる jpeg 以上の NFT を作る NFT レゴの高度なプロトコルです。 RMRK のチームは、DOT エコシステムに NFT の新しい標準をもたらし、次世代の構築をリードしています。

この課題は、すべての RMRK の進化を追跡する詳細なダッシュボードの作成を求めていました( [Kanarias](https://kanaria.rmrk.app/)に焦点を当てている可能性があります)。 RMRK2 全体での転送、エモート履歴などが含まれます。 このダッシュボードは、RMRK2 に焦点を当てた SubQuery プロジェクトを使用する必要がありました。

[このチャレンジ](https://gitcoin.co/issue/subquery/grants/4/100027174) の勝者は、 [NFT Garden](https://web3go.xyz/#/NFTProfiler)と呼ばれる Web3Go の優れたダッシュボードでした。 平均価格、ボリューム、価格範囲、および各アイテムのすべてのトランザクションなど、各 NFT コレクションに関する詳細情報が含まれています。 さらに、NFT 内のすべての特性に興味深いビジュアライゼーションがあります。

![](https://miro.medium.com/max/1400/0*1_mUnNIBYI84G_qs)

"_Web3Go の発足以来、SubQuery をデータインデックスの基礎となるアーキテクチャとして使用しています。 SubQuery が提供する開発キットは、私たちのチームが迅速に開発するのに非常に適していることが証明されました。 プロジェクトの展開とアップグレードは、Gitcoin Hackathon の優れた結果の鍵でもあります。 次のステップでは、Subquery を使用して、Defi、NFT、トークンを含む Polkadot&Kusama パラチェーン上のすべてのプロジェクトのダッシュボードを開発します!_」と Web3Go の Hao Ding は言う。

## サブクエリを別のレイヤ 1 ブロックチェーンに拡張

SubQuery は、Polkadot にネイティブであり、私たちの家であり、このエコシステムの関係を構築するために懸命に取り組んできました。 それにもかかわらず、私たちはマルチチェーンの未来を信じています さまざまな問題を解決するために協働する多くの異なるブロックチェーンが存在することを知っているように。 私たちの長期的な計画は、SubQuery を利用して、開発者が新しい dApp を構築するのを助けるために、現在のインデックス作成ソリューションを持っていない他のブロックチェーンに適応させることです。

[この 12,000 米ドルチャレンジ](https://gitcoin.co/issue/subquery/grants/5/100027175) の勝者は、SubQuery を Terra ブロックチェーンのインデックスに拡張した Naveen でした。 これは、公式の subql 実装の node パッケージを index の Terra まで拡張するフォークを作成することによって実装されました。 Naveen はこれに取り組んでおり、すぐに SubQuery の計画についてのニュースを期待することができます 他のレイヤー 1 チェーンの外側に。 <iframe width="560" height="315" src="https://www.youtube.com/embed/K_pjh5OC95A" title="YouTube動画プレイヤー" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

"_私は過去数ヶ月間、インデクサーの多くを研究してきましたが、インデクサーをゼロから構築するまで行ってきました。 それが、SubQuery が Gitcoin GR12 Hackathon で私の注意を引いた理由かもしれません。 SubQuery をインデックスの Terra に拡張する作業を取り上げました。 私はこれを 15 日で終わらせられるとは思っていませんでした。 しかし、SubQuery は壮大な方法で設計されたので、私は非常に迅速にフードの下で起こっていることの精神的なイメージを作成することができました。 私はちょうど時間内に動作するソリューションをハッキングし、現在 Subql パッケージに Terra インデクサをマージするために SubQuery と協力しています。 近い将来に。 今後も SubQuery と連携してプロジェクトを維持・拡大し、他の幾つかのレイヤ 1 チェーンのインデクサを構築していきます。_

SubQuery 社の CEO 兼創設者である[Sam Zou](https://twitter.com/zoujialiu)は次のようにコメントしています。 _「SubQuery は、Web3.の未来を築くために Gitcoin GR12 ハッカソンと提携できることを誇りに思います。 私たちの使命は、作成し、Substrate/Polkadot エコシステム内で革新される開発者のネットワークを持つことに依存しています。 Gitcoin とのパートナーシップは、世界中の意欲的な開発者に未来のアプリケーションを構築する機会を提供するという、私たちのコミットメントを反映したものです。 私たちは彼らのアイデアをさらに発展させるために挑戦の勝者を育てることに興奮しています_"

この成功したハッカソンに続いて、SubQuery は、SubQuery を使用してアプリケーションを構築する方法の詳細を[無料のオンライン「ヒーローコース」に登録するか、最近発表された助成金プログラムを申請したい開発者を奨励したいと考えています](https://subquery.coassemble.com/unlock/dOKZW6O#/)。

---

## SubQuery について

[SubQuery](https://subquery.network/)は、Layer-1 ブロックチェーンと分散型アプリケーションの間にある、分散型のデータ集約、インデックス作成、およびクエリを行うためのレイヤーです。 このサービスでは、ブロックチェーンのデータをアンロックし、クエリ可能な状態に変換することで、直感的なアプリケーションでの利用を可能にします。 このサービスにより、DApp の開発者はコアユースケースとフロントエンドに集中できます。 データ処理のためのカスタムバックエンドを構築するのに時間を無駄にする必要はありません。 来るべき SubQuery Network は、エコシステムの分散化とトークン化を行い、誰もが web3 データ革命に参加できるようにします。

[Linktree](https://linktr.ee/subquerynetwork) | [Web サイト](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
