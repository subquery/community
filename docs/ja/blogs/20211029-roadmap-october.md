# SubQueryテクニカルロードマップのリリース

![](https://cdn-images-1.medium.com/max/800/1*Qcu5mFIs8eJhAXaMpWOlMQ.png)

**SubQueryがTGEのタイムラインを含む重要なマイルストーンを発表**

本日、初めて詳細な技術ロードマップを発表できることを嬉しく思います。 SubQueryの目標は、Polkadotのエコシステムにおける主要なデータプロバイダーになることであり、このビジョンを実現するための、コミュニティからのサポートは素晴らしいものでした。 2020年末の[Web3 Grant](https://web3.foundation/)を介した正式な設立から、2021年1月の最初のオープンソースバージョンのリリース、そして[9月のシリーズAの終了](https://subquery.medium.com/series-a-1abed6c1c2af)まで、私たちがこの段階に至るまでにご支援いただいた皆様に感謝いたします。

私たちの勢いが増すにつれ、技術的なロードマップを含む将来の計画について、より多くのことをお伝えする時期が来ました。 SubQueryの次の進化が、Polkadotのエコシステムにさらなる価値をもたらし、コミュニティが我々の成長に参加する機会をどのように提供するのかということに、興奮しています。

## 私たちの未来

SubQueryはすでに[Polkadot & Kusamaの60以上のプロジェクト](https://project.subquery.network/)に毎日、何百万ものデータクエリを提供していますが、次の成長段階では、組織的に管理された方法で実施したいと考えていました。

そのため、インセンティブ付きのテストネットプログラムを通じて、SubQuery Networkのスケーラビリティを実証し、完全にテストすることが重要だと考えています。 このプロセスにより、2022年3月にTGEを介して公開し、来年後半には最終的なメインネットを立ち上げる前に、インデクサーのコミュニティを確立することができます。

![](https://cdn-images-1.medium.com/max/800/1*I6mko5xumHAArzGePvEZiQ.jpeg)

このように、私たちのワークフローにおける主要な成果物は、以下の主要なマイルストーンに分けられます。

## 現在の状況 - 2021年第4四半期の半ば

### パラチェーンのEVM対応

[イーサリアムバーチャルマシン（EVM）のPolkadot実装のベータ版サポート](https://medium.com/@subquery/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff) を近日中にリリースする予定です。 これにより、PolkadotとEthereumの開発者は、SubstrateとEVMの両方のデータをシームレスに一箇所に統合し、GraphQLを使ってこの単一のデータソースをクエリすることができます。

SubQueryは、他のインデクサよりも高度なフィルタを導入し、非コントラクトトランザクション、トランザクションの送信者、コントラクト、インデックス化されたログ引数のフィルタリングを可能にするため、開発者は特定のデータニーズに対応した、多様なプロジェクトを構築することができます。

### SubQueryアカデミー

このアカデミーは、モジュール化された教育プログラムを提供することで、SubQueryエコシステムの開発者のスキルアップと能力向上を目的としています。 [アカデミーの最初のコースは_Hero Course_](https://doc.subquery.network/academy/herocourse/)で、2021年10月22日（金）にスタートしました。

_Hero Course_の各モジュールには、5～10分程度のレッスンがいくつか用意されており、それらはビデオ配信されます。 ビデオコンテンツには、書面によるチュートリアル、スライド、ワークブック、完成したGitHubコード・リポジトリへのリンクが含まれています。

このコースは、開発者がSubQueryについて何も知らない状態から、新しいブロックチェーンアプリケーションのためにSubQueryデータソースを構築するエキスパートになることを目的としています。

今後数ヶ月の間に、新しいSubQuery _Hero Course_のコンテンツを毎週リリースし、さらに多くのコースをコミュニティのために展開していきたいと考えています。

### プルーフ・オブ・インデックス(Proof of Indexing)

プルーフ・オブ・インデックス(Proof of indexing) により、同じSubQueryプロジェクトで作業している2つの異なるインデクサが、全く同じデータをインデックスしたことを保証することができます。 これは、分散型のSubQueryネットワークの開発に必要な重要なコンポーネントです。 私たちはMerkle Mountain Rangeと呼ばれる概念を使ってこのことを確認し、保証しています。このことをさらに詳しく説明する将来のブログ記事にご注目ください。

### プレミアム・エンタープライズ・サービス

Karura、Kodadot、Fearless Walletなどの大規模なお客様がSubQueryでプロダクション・アプリケーションを実行しています。 これらのチームは、サービスの向上とより高いレベルの信頼性を求めています。

私たちは、サービス・レベル・アグリーメント、エンタープライズ・サービス・ティアなど、大規模なお客様がご自身のビジネスを運営し、アプリケーションのためにSubQueryから可能な限り最高のパフォーマンスを得るために必要なツールを提供することに挑戦しています。

SubQueryからエンタープライズレベルのサービスやサポートを受けることについて相談したい場合は、チームに連絡してください。

## マイルストーン1 - 2021年第4四半期の終わりまで

### SubQuery 開発者/助成プログラム

この助成プログラムは、PolkadotとSubQueryによるイノベーションを促進し、web3革命を推進する次世代のdAppsを構築することを目的としています。 SubQuery他による助成金、技術サポート、マーケティング、ビジネス開発のアドバイスなどにより、新しいプロジェクトを支援します。

私たちはこの可能性に期待しており、近日中に詳細な情報を公開する予定です。

### コーディネーターおよびクライアントSDKの実装

今後は、コアとなるSubQuery SDKを改良し、SubQueryコーディネーターとクライアントのコンポーネントを追加していく予定です。

インデクサー・コーディネーターは、インデクサーにネットワークを公開するために、インデクサーによってデプロイされ、インデクサーが自身をSubQueryネットワークに登録し、利用可能なデータを宣伝できるようにします。

クライアントSDKはコンシューマーが使用するもので、インデクサを見つけたり、コンシューマーがデータを取得して支払いを行う際のトランザクション全体を管理することができます。

### SQTネットワークコントラクトの内部MVP

SubQueryネットワークの最初のバージョンは、スマートコントラクトの中にあり、主要なPolkadot パラチェーンに展開されます。 内部MVPを完成させることで、ここにあるすべてのものを社内でテストし始めることができ、私たちにとって大きなマイルストーンとなります。

### EUクラスター

お客様からは、SubQueryデータをより多くの世界中のクラスターでサポートしてほしいという要望があります。 クラスタの数を増やすことで耐障害性を向上させ、SubQueryのデータをお客様の近くでホスティングすることができます。 ヨーロッパの新しいクラスターは、コンシューマー向けのリクエストの高速化、dApp開発者向けの比類ないパフォーマンス、SubQueryネットワークの回復力の向上を意味します。

### subql initの改善

_subql init_コマンドは、SubQueryプロジェクトを構築したことのある人にはおなじみのもので、真っ白なキャンバス、つまり無限の可能性を表しています。 私たちは、他の人が始めるのを助けるために、もっと良い方法があると考えています。開発者は、真っ白なキャンバスではなく、定型的なコードがすでに書かれている、真っ白な足場を求めています。

このロードマップ項目は、開発者がエンドポイントや辞書、型などを気にすることなく、どのようなパラチェーンでも構築を開始できるようにするための作業を表しています。 開発者にとっては時間の節約になり、他の人にとっては開発の手助けになります。

## マイルストーン2 - 2022年第1四半期の半ば

### 公開テストネットのローンチ

SQTネットワークのコントラクトの内部MVPに続き、少人数の参加者を募り、オンボードでSubQueryネットワークのテストを開始します。 ローンチのためには、大量のタスクをこなし、さらに大量のドキュメントを作成する必要があります。

2022年初頭に、このプロセスと参加申請方法についての詳細情報をお伝えします。

### ポイントインタイムインデックス

ある時点でのブロックチェーンの状態を知ることができる、ということを想像してみてください。例えば、500万ブロック目の時点で、SubQueryプロジェクトはどのような状態でしょうか？ 今回の新機能は、まさにそれを実現するものです。

### SQT Network contract v1 and external code audit

All important networks require a through code audit by an external partner to ensure that the network’s code is secure and scalable. SubQuery is no different, so we’ll be working with key partners for a full code audit here and also continue to receive code audits for our smart contracts going forward.

### Internal micropayments testing

This is a key feature for us. We are going to be doing a lot of work within the Polkadot ecosystem to manage and handle micropayments within SubQuery. The advantage of Polkadot is tiny transaction fees relative to other networks like Ethereum, meaning micropayments are much more relevant to. This will roll out to our incentivised test network after we carry out thorough internal testing.

### SubQuery Network Explorer and App

We’re building an explorer and other applications to allow participants in the SubQuery Network explore and find data within the SubQuery Network. Consumers will also use this to navigate the library of supported data sources, as well as delegators to analyse how indexers are performing to decide how to delegate their SQT tokens.

### Enterprise health monitoring

Following on from our SubQuery Enterprise service tier, you can also expect a large amount of health monitoring and other performance analytics tools to be made available to customers.

## Milestone 3 — End of Q1 2022

### SQT token generation event

After a successful test network phase we are expecting to launch the SubQuery token on a Polkadot parachain partner. We will be sharing more information on our tokenomics with the community in the coming weeks.

### Public incentivised testnet launch with micropayments

This is the final stage of our test network. We will release everything to our test network and expect participants to push it to its limits. This includes scale and load testing, fine tuning our economic models and coefficients, testing our documentation and onboarding processes, and making sure that you can transact with a precursor to SQT within it.

We expect that we will be rewarding participants of our test network, those that complete certain quests or tasks, and those that act as different members of the test network.

### Data traffic insights and reporting

We are handling millions of data requests to SubQuery projects each day. Most of our customers don’t have analytics in their own dApps for user privacy but they still need to know how their dApps are operating so we will be improving this.

### Scalable intelligent routing

We have a goal of a Billion daily SubQuery requests to our hosted service, that’s why we are going to introduce a globally scalable service with multiple SubQuery hosted services running.

It’s a new and continuously improving feature that automatically routes requests to the closest available node. Additionally, it allows us to redirect all requests immediately to a backup SubQuery zone, providing us with a fault tolerant system in the case of regional outage.

In the future it means that we’ll be creating more and more smaller SubQuery hosted services tactically placed closer to our users.

## Milestone 4 — Middle of Q2 2022

### Launch of the SubQuery Foundation

In our move to create a decentralized SubQuery Network we will establish a SubQuery Foundation to administer the future governance and growth of the ecosystem. The ownership of the SubQuery Network will come under the SubQuery foundation initially.

### Finalise research for other Layer-1 chains

While our home will always be Polkadot we are exploring supporting various other Layer-1 blockchains with our indexing capabilities.

### Liquidity mining program

In order to enhance the liquidity of the SQT token, we will create a liquidity mining program with a decentralized exchange (DEX). This will enable token holders to generate returns on their investment.

## Milestone 5 — End of Q2 2022

### Mainnet launch 🚀

After we complete testing of the SubQuery network will launch the first SubQuery Network mainnet. This is where everything really starts. Initially, we will onboard and reward participants of the test network, and then it will be completely open to everyone in the community.

### Centralised Exchange launch

In order to drive increased adoption of SQT, we anticipate launching the token on one if not multiple leading CEX during this period as well as many other DEXs.

## Milestone 6 — Long term plans

### Launch our own Parachain

Although we initially plan to partner with a top Polkadot parachain to get SubQuery Network released and scaled quicker, in the long-term SubQuery also intends to launch on it’s own parachain and integrate itself even more in the ecosystem.

This self owned parachain will allow us to further innovate in tools that can help developers build the web3 future faster. We want to aim for a parachain slot once we have a proven track record behind us and the data, community, and token to support it.

### SubQuery Foundation moves to a DAO

This one is a long way off, but it’s always our dream the SubQuery eventually becomes a community owned DAO. We’ve said many times that the community plays a huge part in SubQuery, everything that we do is for our customers — becoming a DAO is the embodiment of that focus.

That being said, this is a long long way off, and will only be done once we are absolutely confident of SubQuery's success and future with the community.

## About SubQuery

[SubQuery](https://subquery.network) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. The protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
