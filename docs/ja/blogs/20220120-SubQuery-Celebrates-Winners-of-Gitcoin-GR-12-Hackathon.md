# SubQuery がエンコードクラブハッカソンの勝者を祝う

![](https://miro.medium.com/max/1400/1*MnMY9j3nasex9_9MNHUPtA.png)

Polkadotの主要なデータインデックスソリューションであるSubQueryは、最近の[Encode Club](https://gitcoin.co/hackathon/gr12?org=subquery) Polkadot Hackathonの受賞者を紹介できることを嬉しく思います。 Gitcoinは、Web3のコミュニティとアプリケーションの作成に焦点を当てたブロックチェーン開発者コミュニティの中でも傑出した1つとして認識されています。 [SubQuery は 12 月に Gitcoin と提携しました](https://subquery.medium.com/subquery-announces-gitcoin-hackathon-16c9d18753a) USD$37 の価値に 5 つのチャレンジをスポンサーします 00(チャレンジで最大の賞金プール)は、有用なツール、ダッシュボードを構築し、SubQueryを別のレイヤ 1 ブロックチェーンに拡張するために開発者を招待しました。

ハッカソンは12月1日から16日まで開催され、Moonbeam、Astar、Acalaなどの主要なブロックチェーンプロジェクトが様々な賞金プールに貢献しました。 賞品は、事前に設定された基準に基づいてプロジェクトを完了した人に付与されます。 そして、最も創造的なアイデアを提供する人、あるいはSubQuery SDKを改善するための領域を解決する人。 課題を簡単にまとめると以下のようになります。

- [MoonbeamとAstarが提供するSubstrateとEVMのインサイトを1つの使いやすいアプリケーションにまとめた統一ブロックエクスプローラーの作成](https://gitcoin.co/issue/subquery/grants/1) - 12,000ドル 【スポンサー：Moonbeam、Astar】。
- [SubQueryやKarura/AcalaのDeFiハブと協力して、Zapper.fiやdefisaver.comにインスパイアされたダッシュボードを構築する](https://gitcoin.co/issue/subquery/grants/2) - 8,000ドル 【スポンサー：Acala】。
- [Polkadotとその様々なパラチェーンにおける最適なステーキングの機会を示すステーキング・ダッシュボードの作成](https://gitcoin.co/issue/subquery/grants/3) - 3,000ドル
- [すべてのRMRKプロトコルベースのNFTのための、マーケットプレイス・エクスプローラーを構築する](https://gitcoin.co/issue/subquery/grants/4) - 2,000ドル
- [@subql/node サービスを拡張して、別のレイヤー 1 チェーンのデータにインデックスを付ける](https://gitcoin.co/issue/subquery/grants/5) - 12,000ドル

## 統合EVMと基底ブロックエクスプローラ

Polkadot/Kusama エコシステムは、Substrate API を使用して構築された Parachain と呼ばれるブロックチェーンで構成されています。 しかし、MoonbeamやAstarなどの特定のParachainsは、完全に互換性のあるEVMコンポーネントを持つことによってシームレスなEthereum互換性を提供します。 現在、SubstrateとEVMデータを同時に可視化することは困難であり、MoonbeamとMoonriverで2つの孤立した経験をもたらしています。 サブストレイト側（例えばサブスキャン）とEVM側（例：Moonscan & Blockscout）から選択する必要があります。

この課題は、一つの場所を構築し、アカウントの活動の歴史を理解するための大きな機会に対処するために想定されました。 例えば、ステーキングとガバナンスのアクションと ERC20 は、単一のユーザーインターフェイスで転送されます。 これは、Moonbeam内の大規模なコミュニティによって毎日使用されるアプリケーションになります, アスター, そして、離陸している他の多くのEVM互換のパラチェーン。

![](https://miro.medium.com/max/1400/0*b_o0NDpJOCv0QvXS)

[このチャレンジ](https://gitcoin.co/issue/subquery/grants/1/10002717200027175) の勝者は@bizzyvinciで、 [Herokuに住んでいるフロントエンド探検家を](https://moonriver-explorer.herokuapp.com/)建設しました。 このチャレンジが巨大なタスクであることを考えると、まだ100%完了していないことは驚くことではありません。 しかし、我々は、この画期的なイノベーションの進展を支援し、他のEVMチェーンへの拡大に貢献できることを楽しみにしています。

@bizzyvinciは次のように述べました：「私は [ムーンリバーエクスプローラ](https://moonriver-explorer.herokuapp.com/) を作りました。それは素晴らしい経験でした。 最初のステップはSubQueryについて学ぶことでした。テンプレートリポジトリを伴う素晴らしいドキュメントがあります。 ドキュメントは、それが始めるために必要なすべてをカバーし、マニフェストファイル、graphql スキーマなど、各側面についても説明します。

## Karura/Acala DeFiダッシュボード

AcalaとKaruraは、DeFiの将来のための巨大なビジョンを表しているので、エコシステムのための貴重なツールを構築する大きな機会があります。 この課題には、開発者は、

Zapperに触発されたKarura/Acalaコミュニティ向けのDeFiツールを作成する必要がありました。 SubQueryのデータインデックスサービスを利用する [](http://zapper.fi/) と [defisaver.com](http://defisaver.com/)。</p> 

[このチャレンジ](https://gitcoin.co/issue/subquery/grants/2/100027176) の勝者はWeb3Goで、 [Acalaの担保債務ポジション(CDP)](https://web3go.xyz/#/CDPDetail)の素敵な概要を作成しました。 ユーザーがカルラにkUSD安定したコインを鋳造するには、受け入れられた担保資産の1つ(例えばKSM)の最初の預金トークンが必要です。 ユーザーがそうすると、最小担保比率パラメータは、ユーザーがkUSDを鋳造するために必要な担保の最小量を決定します。 CDPの担保資産の市場価格が十分に低下した場合、CDPは「危険」とみなされる可能性があります。

![](https://miro.medium.com/max/1400/0*l7GA1axntiHCINRM)

Web3Goのインターフェイスは、すべてのCDPポジション、その比率、およびその安全なステータスをきれいにリストします。 各ポジションについても、ポジションの履歴に関する情報を提供し、他の人が金融商品を監視することが容易になります。 <iframe width="560" height="315" src="https://www.youtube.com/embed/hc3YDjv6dkk" title="YouTube動画プレイヤー" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe> 



## Polkadot ステーキングダッシュボード

ステーキングは、DOTとKSMトークンを使用するための重要な方法です。 しかし、現在ステーキング用のUXは理解しにくく、ほとんどのユーザーが無学の選択をすることになります。

このチャレンジの目的は、チェーン上のデータと直感的なユーザーエクスペリエンスを組み合わせて、ユーザーが推定される最高の投資収益を理解できるようにすることでした。 検証者の過去のパフォーマンスを比較し、投資収益率が何であるかをユーザーに示します。

Ashikは、すべてのバリデータを取得し、PolkStake独自の評価(以前の時代のパフォーマンス、手数料、支払い、ステーキング報酬などに基づく)でポルカドットのバリデータのきれいに整理されたリストを表示する[ポルカドットバリデータランキングウェブサイト](https://polkstakes.vercel.app/)であるPolkStakesを構築しました。 きれいでシンプルなUIで、本当に感銘を受けました。

![](https://miro.medium.com/max/1400/0*Kaho31-nn-ly8tFS)

"_Subquery は、手動でチェーン上のデータのインデックス作成の労力を軽減します。 これは graphql エンドポイントを提供するので、簡単にデータをクエリできます。 バックエンドとデータベースのメンテナンスの労力を軽減します。 現在、ポークステークスのランキングを計算するためのデータ集計はUIで行われています。 これはSubQueryに移動する必要があります。 また、インデックス化されたデータに対して可視化を行う必要があり、より正確な推定歩留まり予測を追加する必要があります。_" — PolkdataからのAshik

素晴らしいSubVisチームも構築しました [美しいPolkadotステーキングダッシュボード](https://polkadot-staking-dashboard.vercel.app/) それは時間の経過と検証のパフォーマンスの合計を示しています 新しいステーキング機能は、SubVisがよく知られている既存のオークションとクラウドローンのページに参加します。

![](https://miro.medium.com/max/1400/0*uPDQdMug2JaZwMbA)

最後に、Web3GoはMoonriverに詳細なステーキング統計を記載した別の優れたエントリに入れました。 各コラーの代表者についての情報、各コラーが提供する歴史的報酬、さらにはコラーが行う行動についての情報を提供します。 彼らはあなた自身のウォレットアドレスにステーキング履歴を表示できるという追加の利点を提供します。

![](https://miro.medium.com/max/1400/0*jQgOnvcaXt6cprJR)



## RMRK NFT Marketplace Explorer

RMRK is an advanced protocol of NFT legos making NFTs that are so much more than just a jpeg. The team at RMRK are bringing new standards of NFTs to the DOT ecosystem, and leading the way in building the next generation.

This challenge called for the creation of a detailed dashboard that tracks the evolution of all RMRKs (potentially focusing on [Kanarias](https://kanaria.rmrk.app/)), including transfers, emote history, and more across RMRK2. This dashboard had to use a RMRK2 focused SubQuery project.

The winner of [this challenge](https://gitcoin.co/issue/subquery/grants/4/100027174) was another excellent dashboard from Web3Go called the [NFT Garden](https://web3go.xyz/#/NFTProfiler). It includes in depth details about each NFT collection, such as average prices, volumes, price ranges, and all transactions for each single item. Additionally, there are some interesting visualisations on all the traits within NFTs.

![](https://miro.medium.com/max/1400/0*1_mUnNIBYI84G_qs)

“_Since the inception of Web3Go, we have been using SubQuery as the underlying architecture for data indexing. The development kit provided by SubQuery has proven to be very suitable for our team to quickly develop, deploy and upgrade projects, which is also the key to our good results on the Gitcoin Hackathon. In the next step, we will use Subquery to develop dashboards for all projects on the Polkadot & Kusama parachains, which will involve Defi, NFT, and Tokens!_” says Hao Ding from Web3Go.



## Extend SubQuery to another Layer-1 Blockchain

SubQuery is native to Polkadot, it’s our home and we’ve worked hard to build relationships in this ecosystem. In spite of this we also believe in a multi chain future, as we know that there are going to be many different blockchains working together to solve different problems. Our long term plan is to take SubQuery and to adapt it to work for other blockchains that don’t have a current indexing solution to help developers build new dApps.

The winner of [this US$12,000 challenge](https://gitcoin.co/issue/subquery/grants/5/100027175) was Naveen who extended SubQuery to index the Terra blockchain. This was implemented by creating a fork that extends the node package of the official subql implementation to index Terra. Naveen is continuing to work on this and you can expect news soon about SubQuery’s plans for support of other layer 1 chains outside of Polkadot. <iframe width="560" height="315" src="https://www.youtube.com/embed/K_pjh5OC95A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe> 

“_I have been studying a bunch of indexers in the past few months and went as far as building an indexer from scratch. That might be the reason why SubQuery caught my attention in the Gitcoin GR12 Hackathon. I took up the task of extending SubQuery to index Terra. I did not believe that I could pull this off in 15 days. But, SubQuery was architected in such a magnificent manner that it allowed me to create a mental picture of what is happening under the hood very quickly. I hacked together a working solution just in time and I am currently working with SubQuery to merge the Terra indexer into the subql package. In the foreseeable future, I will be continuing to work with SubQuery to maintain and scale the project and possibly build indexers for several other layer 1 chains_” said Naveen.

[Sam Zou](https://twitter.com/zoujialiu), the CEO and Founder of SubQuery commented, “_SubQuery is delighted with the results of the Gitcoin GR12 Hackathon. Our mission relies on having a network of developers who are empowered to create and innovate within the Substrate/Polkadot ecosystem. This partnership provided opportunities for motivated developers around the world to build the applications of tomorrow. We are excited to nurture the winners of the challenges to develop their ideas even further_”

Following on from this successful Hackathon, SubQuery would like to encourage developers who would like to learn more about how to build applications with SubQuery to [register for our free online “Hero Course”, or apply for our recently announced Grants Programme](https://subquery.coassemble.com/unlock/dOKZW6O#/).



---



## About SubQuery

[SubQuery](https://subquery.network/) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. This service unlocks blockchain data and transforms it to a queryable state so that it can be used in intuitive applications. It allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The upcoming SubQuery Network will decentralize and tokenize the ecosystem to allow everyone to participate in the web3 data revolution.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
