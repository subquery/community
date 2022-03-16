# SubQuery 11 月 技術更新: EVM とマニフェストのアップデート

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**SubQuery の最新リリースについての詳細はこちらをご覧ください。**

# プロジェクトマニフェスト内の外部チェーンタイプファイルのサポート

本日は、プロジェクトマニフェストファイル ( [project.yaml](https://doc.subquery.network/create/manifest/) ) の`バージョン 0.2.0` のリリースです。 この新しいバージョンは、開発者が顧客から要求されたさまざまな改善を提供します。

最も重要なことに、カスタム Substrate チェーンのインデックス作成時に含まれるすべてのカスタムタイプを持つチェーン型定義ファイルを参照できるようになりました。 これとも、新しい SubQuery プロジェクトを、すべての Substrate ベースのチェーンに接続することができます。 これは、このブロックチェーンでサポートされている特定の型を、 `のいずれかで宣言する標準的なチェーンタイプファイルであるべきです。 json または` .yaml `` フォーマット。

このソリューションにより、マニフェスト内のチェーン型定義のコピーと管理を避けることができます。 そして、PolkadotJS [のようなリポジトリにリストされている](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec) 公開されたチェーンタイプのファイルをクローンすることができます。

[新しいマニフェストファイルについては、ここで更新されたドキュメントで、プロジェクトを移行する方法を含めて読むことができます。](https://doc.subquery.network/create/manifest/)

# Moonbeam の EVM サポート

先週、私たちは Moonriver [と協力して、Moonriver](https://subquery.medium.com/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff)に完全な EVM と Substrate インデックスのサポートを提供しました。

今日は、その発表を開始する必要があるすべての開発者リソースについてフォローアップします。

現在、開発者が Ethereum と Polkadot/Kusama の両方で柔軟にデータを収集しクエリできるオープンソースのツールはありません。 この制限により、Moonriver 内の dApps ソリューションはスマートコントラクト層にサイロ化され、それによってネットワークが繁栄する両方の消費者の可能性が制限される可能性があります。 Moonbeam とのパートナーシップにより、Moonriver 内のすべてのブロックチェーンデータに完全かつ統一されたデータインデックス作成ソリューションが提供され、Moonriver の成長するアプリケーションエコシステムに大きな利益がもたらされます。

**SubQuery は、12 月 1 日水曜日の次のムーンビルダーワークショップのゲストになります** [**ここで登録**](https://www.crowdcast.io/e/moonbuilders-ws/10)**。**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDROC29Jiitnw.gif)

[まず、ムーンビーム、ムーンベースアルファ、ムーンリバーのデータに接続およびインデックスを作成する方法に関する更新されたドキュメントに精通してください。](https://doc.subquery.network/create/moonbeam/) Moonbeam データのインデックスを作成するプロセスは、2 つのステップにすぎません。

## ステップ 1: Moonbeam カスタムデータソースを追加

私たちは Moonbeam の [Frontier](https://github.com/paritytech/frontier)の実装のために特別に作られたデータプロセッサを作成しました。 これは、引数を解析するためにプロセッサが使用する特定の ABI リソースを参照し、イベントが発生したり呼び出しが行われたりするスマートコントラクトアドレスを参照することができます。 [こちら](https://doc.subquery.network/create/moonbeam/#data-source-spec) をご覧ください。

SubQuery は他のインデクサよりも高度なフィルタを導入し、非コントラクトトランザクション、トランザクション送信者、コントラクト、インデックス付きログ引数をフィルタリングできます。 これにより、開発者は特定のデータニーズに応えるさまざまなプロジェクトを構築できます。

## ステップ 2: Moonbeam データのインデックス

通常の SubQuery プロジェクトと同様に、マッピング関数を使用して、チェーンデータを定義した GraphQL エンティティに変換します。違いは、`SubstrateEvent`または`SubstrateExtrinsic`の代わりに、マッピング関数は、Ether の[TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse)または[Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log)タイプに基づく`MoonbeamCall`または`MoonbeamEvent`を受け取ることです。 [こちら](https://doc.subquery.network/create/moonbeam/#moonbeamcall) をご覧ください。

[このプロセスの完全なドキュメントはこちらをご覧ください](https://doc.subquery.network/create/moonbeam/#moonbeamcall)

## サンプルプロジェクト

thth `transfer` イベントをインデックスし、 `スマートコントラクト呼び出しを` 承認する完全なプロジェクトがあります。 この例のプロジェクトのコードは GitHub 上の [](https://github.com/subquery/tutorials-moonriver-evm-starter) か、SubQuery Explorer の [ライブの SubQuery プロジェクト](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project) からアクセスできます。

変更の大部分は、マニフェストファイル (`project.yaml` ) で発生します。 以下に、 [関数署名文字列](https://doc.subquery.network/create/moonbeam/#call-filters) をサポートするための [拡張コールフィルター](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) 、またはコントラクト上で呼び出された関数をフィルタするための関数 sighash があります。 [イベントフィルター](https://doc.subquery.network/create/moonbeam/#event-filters)には、 [イーサリアム JSON-PRC ログフィルタの標準に続くトピックのフィルタリングを使用できます](https://docs.ethers.io/v5/concepts/events/)。 SubQuery では、Moonbeam EVM の他のインデクサよりも高度なフィルタが導入されており、これらの改善は開発者に大きな利益をもたらすはずです。

![](https://miro.medium.com/max/700/1*4JRHITnILfCie4FT6sYLEA.png)

Substrate ベースの SubQuery プロジェクトがどのように作られたかご存知であれば、新しい Moonriver サポートのためにマッピング機能がどのように似ているかがわかります。 それぞれのマッピング関数は `MoonbeamCall` または `MoonbeamEvent` を受け取り、他の SubQuery プロジェクトと同じように処理します。

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

これについて質問がある場合は、 [私たちのドキュメント](https://doc.subquery.network/create/moonbeam) を確認するか、 [Discord コミュニティ](https://discord.com/invite/subquery) の #technical-support チャンネルでお問い合わせください。

[GitHub でサンプルプロジェクトを複製](https://github.com/subquery/tutorials-moonriver-evm-starter)

ご覧の通りです 1 つのプロジェクトで Substrate と EVM の両方のデータをインデックス化する Moonriver または Moonbase Alpha プロジェクトを作成することは、非常にシンプルで大部分が似ています。 SubQuery の高度な足場ツールを使用して、dApp 開発をスピードアップし、データを活用したり、より直感的な dApp を構築することができます。 何を作るのが待ちきれません！

## SubQuery の内容

SubQuery は、レイヤー 1 のブロックチェーン(Moonriver や Polkadot など) と DApps の間で動作するデータ・アグリゲーション・レイヤーです。 このサービスでは、ブロックチェーンのデータをアンロックし、クエリ可能な状態に変換することで、直感的なアプリケーションでの利用を可能にします。 このサービスにより、DApp の開発者はコアユースケースとフロントエンドに集中できます。 データ処理のためのカスタムバックエンドを構築するのに時間を無駄にする必要はありません。

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Moonbeam について

Moonbeam は Ethereum 互換のスマートコントラクトプラットフォームで、ネイティブに相互運用可能なアプリケーションを簡単に構築できる Polkadot ネットワーク上にあります。 この Ethereum 互換性により、開発者は既存の Solidity スマートコントラクトと DApp フロントエンドを最小限の変更で Moonbeam に展開することができます。 Polkadot ネットワーク上のパラチェーンとして、Moonbeam は Polkadot リレーチェーンの共有セキュリティと Polkadot に接続されている他のチェーンとの統合の恩恵を受けるでしょう。 現在、PureStake による積極的な開発を進めている Moonbeam は 2021 年第 4 四半期までに MainNet に到達する予定です。 詳細はこちら: [https://moonbeam.network/](https://moonbeam.network/).
