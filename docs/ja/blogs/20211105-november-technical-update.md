# SubQuery 11月 技術更新: EVMとマニフェストのアップデート

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**SubQuery の最新リリースについての詳細はこちらをご覧ください。**

## Support for External Chain Type Files in Project Manifest

本日は、プロジェクトマニフェストファイル ( [project.yaml](https://doc.subquery.network/create/manifest/) ) の`バージョン 0.2.0` のリリースです。 この新しいバージョンは、開発者が顧客から要求されたさまざまな改善を提供します。

最も重要なことに、カスタムSubstrateチェーンのインデックス作成時に含まれるすべてのカスタムタイプを持つチェーン型定義ファイルを参照できるようになりました。 これとも、新しい SubQuery プロジェクトを、すべての Substrate ベースのチェーンに接続することができます。 これは、このブロックチェーンでサポートされている特定の型を、 `のいずれかで宣言する標準的なチェーンタイプファイルであるべきです。 son <code> または` .yaml `` フォーマット。

このソリューションにより、マニフェスト内のチェーン型定義のコピーと管理を避けることができます。 そして、PolkadotJS [のようなリポジトリにリストされている](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec) 公開されたチェーンタイプのファイルをクローンすることができます。

[新しいマニフェストファイルについては、ここで更新されたドキュメントで、プロジェクトを移行する方法を含めて読むことができます。](https://doc.subquery.network/create/manifest/)

## Moonbeam EVM Support

Last week we were pleased to [announce that we were working with Moonbeam to bring complete EVM and Substrate indexing support to Moonriver](../customer_announcements/20211028-moonbeam-evm.md).

今日は、その発表を開始する必要があるすべての開発者リソースについてフォローアップします。

現在、開発者がEthereumとPolkadot/Kusamaの両方で柔軟にデータを収集しクエリできるオープンソースのツールはありません。 この制限により、Moonriver内のdAppsソリューションはスマートコントラクト層にサイロ化され、それによってネットワークが繁栄する両方の消費者の可能性が制限される可能性があります。 Moonbeamとのパートナーシップにより、Moonriver内のすべてのブロックチェーンデータに完全かつ統一されたデータインデックス作成ソリューションが提供され、Moonriverの成長するアプリケーションエコシステムに大きな利益がもたらされます。

**SubQueryは、12月1日水曜日の次のムーンビルダーワークショップのゲストになります** [**ここで登録**](https://www.crowdcast.io/e/moonbuilders-ws/10)**。**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDROC29Jiitnw.gif)

[Firstly, familiarize yourself with the updated documentation on how to connect to and index data from Moonbeam, Moonbase Alpha, and Moonriver.](https://doc.subquery.network/create/substrate-evm/) The process to index Moonbeam data is only two steps:

### Step 1: Add the Moonbeam Custom Data Source

私たちはMoonbeamの [Frontier](https://github.com/paritytech/frontier)の実装のために特別に作られたデータプロセッサを作成しました。 これは、引数を解析するためにプロセッサが使用する特定のABIリソースを参照し、イベントが発生したり呼び出しが行われたりするスマートコントラクトアドレスを参照することができます。 [You can read more here](https://doc.subquery.network/create/substrate-evm/#data-source-spec).

SubQueryは他のインデクサよりも高度なフィルタを導入し、非コントラクトトランザクション、トランザクション送信者、コントラクト、インデックス付きログ引数をフィルタリングできます。 これにより、開発者は特定のデータニーズに応えるさまざまなプロジェクトを構築できます。

### Step 2: Index Moonbeam Data

通常のSubQueryプロジェクトと同様に、マッピング関数を使用して、チェーンデータを定義したGraphQLエンティティに変換します。違いは、`SubstrateEvent`または`SubstrateExtrinsic`の代わりに、マッピング関数は、Etherの[TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse)または[Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log)タイプに基づく`MoonbeamCall`または`MoonbeamEvent`を受け取ることです。 [You can read more about these here](https://doc.subquery.network/create/substrate-evm/#frontierevmcall).

[このプロセスの完全なドキュメントはこちらをご覧ください](https://doc.subquery.network/create/substrate-evm/#frontierevmcall)

### Example Project

thth `transfer` イベントをインデックスし、 `スマートコントラクト呼び出しを` 承認する完全なプロジェクトがあります。 この例のプロジェクトのコードは GitHub 上の [](https://github.com/subquery/tutorials-moonriver-evm-starter) か、SubQuery Explorer の [ライブの SubQuery プロジェクト](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project) からアクセスできます。

変更の大部分は、マニフェストファイル (`project.yaml` ) で発生します。 You can see below that we have [extended call filters](https://doc.subquery.network/create/substrate-evm/#call-filters) to support either [function signature strings](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) or the function sighash to filter the function called on the contract. For [event filters](https://doc.subquery.network/create/substrate-evm/#event-filters), you can use topics filtering that follows the [Ethereum JSON-PRC log filters standard found here](https://docs.ethers.io/v5/concepts/events/). SubQueryでは、Moonbeam EVMの他のインデクサよりも高度なフィルタが導入されており、これらの改善は開発者に大きな利益をもたらすはずです。

![](https://miro.medium.com/max/700/1*4JRHITnILfCie4FT6sYLEA.png)

SubstrateベースのSubQueryプロジェクトがどのように作られたかご存知であれば、新しいMoonriverサポートのためにマッピング機能がどのように似ているかがわかります。 それぞれのマッピング関数は `MoonbeamCall` または `MoonbeamEvent` を受け取り、他のSubQuery プロジェクトと同じように処理します。

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

If you have any questions about this make sure you [check our docs](https://doc.subquery.network/create/substrate-evm) or reach out to us on our #technical-support channel in our [Discord community](https://discord.com/invite/subquery).

[GitHubでサンプルプロジェクトを複製](https://github.com/subquery/tutorials-moonriver-evm-starter)

ご覧の通りです 1つのプロジェクトでSubstrateとEVMの両方のデータをインデックス化するMoonriverまたはMoonbase Alphaプロジェクトを作成することは、非常にシンプルで大部分が似ています。 SubQueryの高度な足場ツールを使用して、dApp開発をスピードアップし、データを活用したり、より直感的なdAppを構築することができます。 何を作るのが待ちきれません！

## About SubQuery

SubQueryは、レイヤー1のブロックチェーン(MoonriverやPolkadotなど) とDAppsの間で動作するデータ・アグリゲーション・レイヤーです。 このサービスでは、ブロックチェーンのデータをアンロックし、クエリ可能な状態に変換することで、直感的なアプリケーションでの利用を可能にします。 このサービスにより、DAppの開発者はコアユースケースとフロントエンドに集中できます。 データ処理のためのカスタムバックエンドを構築するのに時間を無駄にする必要はありません。

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## About Moonbeam

MoonbeamはEthereum互換のスマートコントラクトプラットフォームで、ネイティブに相互運用可能なアプリケーションを簡単に構築できるPolkadotネットワーク上にあります。 このEthereum互換性により、開発者は既存のSolidityスマートコントラクトとDAppフロントエンドを最小限の変更でMoonbeamに展開することができます。 Polkadotネットワーク上のパラチェーンとして、MoonbeamはPolkadotリレーチェーンの共有セキュリティとPolkadotに接続されている他のチェーンとの統合の恩恵を受けるでしょう。 現在、PureStakeによる積極的な開発を進めているMoonbeamは2021年第4四半期までにMainNetに到達する予定です。 詳細はこちら: [https://moonbeam.network/](https://moonbeam.network/).
