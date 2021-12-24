# SubQuery 11月 技術更新: EVMとマニフェストのアップデート

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**SubQuery の最新リリースについての詳細はこちらをご覧ください。**

# プロジェクトマニフェスト内の外部チェーンタイプファイルのサポート

本日は、プロジェクトマニフェストファイル ( [project.yaml](https://doc.subquery.network/create/manifest/) ) の`バージョン 0.2.0` のリリースです。 この新しいバージョンは、開発者が顧客から要求されたさまざまな改善を提供します。

最も重要なことに、カスタムSubstrateチェーンのインデックス作成時に含まれるすべてのカスタムタイプを持つチェーン型定義ファイルを参照できるようになりました。 これとも、新しい SubQuery プロジェクトを、すべての Substrate ベースのチェーンに接続することができます。 これは、このブロックチェーンでサポートされている特定の型を、 `のいずれかで宣言する標準的なチェーンタイプファイルであるべきです。 son <code> または` .yaml `` フォーマット。

このソリューションにより、マニフェスト内のチェーン型定義のコピーと管理を避けることができます。 そして、PolkadotJS [のようなリポジトリにリストされている](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec) 公開されたチェーンタイプのファイルをクローンすることができます。

[新しいマニフェストファイルについては、ここで更新されたドキュメントで、プロジェクトを移行する方法を含めて読むことができます。](https://doc.subquery.network/create/manifest/)

# MoonbeamのEVMサポート

先週、私たちはMoonriver [と協力して、Moonriver](https://subquery.medium.com/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff)に完全なEVMとSubstrateインデックスのサポートを提供しました。

今日は、その発表を開始する必要があるすべての開発者リソースについてフォローアップします。

現在、開発者がEthereumとPolkadot/Kusamaの両方で柔軟にデータを収集しクエリできるオープンソースのツールはありません。 この制限により、Moonriver内のdAppsソリューションはスマートコントラクト層にサイロ化され、それによってネットワークが繁栄する両方の消費者の可能性が制限される可能性があります。 Moonbeamとのパートナーシップにより、Moonriver内のすべてのブロックチェーンデータに完全かつ統一されたデータインデックス作成ソリューションが提供され、Moonriverの成長するアプリケーションエコシステムに大きな利益がもたらされます。

**SubQueryは、12月1日水曜日の次のムーンビルダーワークショップのゲストになります** [**ここで登録**](https://www.crowdcast.io/e/moonbuilders-ws/10)**。**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[まず、ムーンビーム、ムーンベースアルファ、ムーンリバーのデータに接続およびインデックスを作成する方法に関する更新されたドキュメントに精通してください。](https://doc.subquery.network/create/moonbeam/) Moonbeamデータのインデックスを作成するプロセスは、2つのステップにすぎません。

## ステップ 1: Moonbeamカスタムデータソースを追加

私たちはMoonbeamの [Frontier](https://github.com/paritytech/frontier)の実装のために特別に作られたデータプロセッサを作成しました。 これは、引数を解析するためにプロセッサが使用する特定のABIリソースを参照し、イベントが発生したり呼び出しが行われたりするスマートコントラクトアドレスを参照することができます。 [こちら](https://doc.subquery.network/create/moonbeam/#data-source-spec) をご覧ください。

SubQueryは他のインデクサよりも高度なフィルタを導入し、非コントラクトトランザクション、トランザクション送信者、コントラクト、インデックス付きログ引数をフィルタリングできます。 これにより、開発者は特定のデータニーズに応えるさまざまなプロジェクトを構築できます。

## ステップ 2: Moonbeam データのインデックス

通常のSubQueryプロジェクトと同様に、マッピング関数を使用して、チェーンデータを定義したGraphQLエンティティに変換します。違いは、`SubstrateEvent`または`SubstrateExtrinsic`の代わりに、マッピング関数は、Etherの[TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse)または[Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log)タイプに基づく`MoonbeamCall`または`MoonbeamEvent`を受け取ることです。 [こちら](https://doc.subquery.network/create/moonbeam/#moonbeamcall) をご覧ください。

[このプロセスの完全なドキュメントはこちらをご覧ください](https://doc.subquery.network/create/moonbeam/#moonbeamcall)

## サンプルプロジェクト

thth `transfer` イベントをインデックスし、 `スマートコントラクト呼び出しを` 承認する完全なプロジェクトがあります。 この例のプロジェクトのコードは GitHub 上の [](https://github.com/subquery/tutorials-moonriver-evm-starter) か、SubQuery Explorer の [ライブの SubQuery プロジェクト](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project) からアクセスできます。

変更の大部分は、マニフェストファイル (`project.yaml` ) で発生します。 以下に、 [関数署名文字列](https://doc.subquery.network/create/moonbeam/#call-filters) をサポートするための [拡張コールフィルター](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) 、またはコントラクト上で呼び出された関数をフィルタするための関数sighashがあります。 [イベントフィルター](https://doc.subquery.network/create/moonbeam/#event-filters)には、 [イーサリアムJSON-PRCログフィルタの標準に続くトピックのフィルタリングを使用できます](https://docs.ethers.io/v5/concepts/events/)。 SubQueryでは、Moonbeam EVMの他のインデクサよりも高度なフィルタが導入されており、これらの改善は開発者に大きな利益をもたらすはずです。

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

SubstrateベースのSubQueryプロジェクトがどのように作られたかご存知であれば、新しいMoonriverサポートのためにマッピング機能がどのように似ているかがわかります。 それぞれのマッピング関数は `MoonbeamCall` または `MoonbeamEvent` を受け取り、他のSubQuery プロジェクトと同じように処理します。

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

これについて質問がある場合は、 [私たちのドキュメント](https://doc.subquery.network/create/moonbeam) を確認するか、 [Discordコミュニティ](https://discord.com/invite/subquery) の #technical-support チャンネルでお問い合わせください。

[GitHubでサンプルプロジェクトを複製](https://github.com/subquery/tutorials-moonriver-evm-starter)

As you can see, creating a Moonriver or Moonbase Alpha project that indexes both Substrate and EVM data in a single project is extremely simple and largely similar. You can use SubQuery’s advanced scaffolding tools to speed up your dApp development and take advantage or richer indexing for you data to build more intuitive dApps. We can’t wait to see what you build!

## About SubQuery

SubQuery is a data aggregation layer that operates between the layer-1 blockchains (such as Moonriver and Polkadot) and DApps. This service unlocks blockchain data and transforms it to a queryable state so that it can be used in intuitive applications. It allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## About Moonbeam

Moonbeam is an Ethereum-compatible smart contract platform on the Polkadot network that makes it easy to build natively interoperable applications. This Ethereum compatibility allows developers to deploy existing Solidity smart contracts and DApp frontends to Moonbeam with minimal changes. As a parachain on the Polkadot network, Moonbeam will benefit from the shared security of the Polkadot relay chain and integrations with other chains that are connected to Polkadot. Currently in active development by PureStake, Moonbeam is expected to reach MainNet by Q4 2021. Learn more: [https://moonbeam.network/](https://moonbeam.network/).
