# SubQueryはDarwiniaネットワークと提携してSubQueryのCLIツールを構築します。

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

本日は、KodadotとSubQuery Networkの戦略的パートナーシップについてお知らせします。 ダーウィニアは最近、クサマパラチェーンオークトンスロットを獲得し、ポルカドットスロットを確保する準備をしています。 ダーウィニアは、ポルカドットのクロスチェーンブリッジハブを構築するためのロードマップの一環として、サブクエリと提携して、クロスチェーンインタラクションの究極のユーザーエクスペリエンスを提供するために必要な多数のアプリケーションを構築しています。

私たちのパートナーシップは、Darwiniaのアプリケーションエコシステムを強化するためにSubQueryを使用するだけでなく、SubQueryチームと緊密に協力して[SubQueryマネージドサービスのCLIツール](https://github.com/fewensa/subquery-cli)を構築しています([https://project.subquery.network](https://project.subquery.network))。 この[CLI](https://github.com/fewensa/subquery-cli)を使用して、SubQueryプロジェクトを作成し、ステージングまたは本番スロットに新しいバージョンを自動的にデプロイできます。 さらに、SubQuery Projectsで無料でホストされている実行中のプロジェクトから詳細な同期ステータスやログなどの情報を取得できます。 Darwiniaはこれをさらに進め、[GitHubアクションワークフロー](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml)の例を構築しました。これは、CLIツールを使用して、[リポジトリ](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml)のメインブランチへのプッシュでこれを行います。 この新しい自動化は、DarwiniaとSubQueryとの密接な関係の良い例です。 CLIツールはすでにSubQueryの大きなエコシステム内の他の多くのプロジェクトで使用されています。
> 「私たちが構築したSubQuery CLI ツールは、開発パイプラインを簡単にしました。 ブランチでリリースを完全に管理し、SubQueryのホストされたサービスに自動的に変更が展開されると確信できるようになりました。 私たちは、スキーマかどうかを確認するために私たちの自動化されたプロセスを誇りに思っています。 raphqlファイルが変更されました。もしそうであれば、新しいクリーンなデータベースを再デプロイします。」 — ヤリン、コア開発者 — Darwinia Network


ここで [新しい CLI ツールをチェックし、](https://github.com/fewensa/subquery-cli) ここで [生きている例](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) を参照してください。

Darwiniaの成長を続けるアプリケーションエコシステムの最初の多くのアプリケーションは、 [Wormholeアプリ](https://wormhole.darwinia.network/)です。 Wormholeは使いやすいアプリケーションであり、ネットワーク間でアセットを簡単に転送することができ、Darwiniaのクロスチェーン戦略の重要な部分です。 現在、DarwiniaとEthereumの間のブリッジは稼働しています。 [SubQuery は、ワームホールに関連する Darwinia/Crab/Pangolin アドレスで発生した歴史的な送金やイベント](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia) を表示するために使用されます。 を選択します。

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

Darwiniaのチームは、ガバナンスを含むすべてのDarwiniaネットワークの相互作用を管理するための中央ハブである [スマートアプリを新たに構築中です](https://apps.darwinia.network/) 杭打ちやチェーン探査などです。 このアプリはかなりの量の [SubQuery データを使用して、歴史的なデータとアクション](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab) を表示します。 SubQuery は、Darwinia のチームと密接に連携し、これを全体の Polkadot エコシステムにおける最速かつより簡単なユーザ体験にします。
> 「Wormhole用の既存のバックエンドserviesをSubQueryに置き換えることを楽しみにしています。 SubQuery Networkの長期的な機能により、これによりサービスは完全に分散型でオープンソースになります。 — ヤリン、コア開発者 — Darwinia Network


さらに、DarwiniaはSubQueryを [に使用して、](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot) 彼らの [Parachain Loan Offering ウェブサイト](https://darwinia.network/plo_contribute)の背後にあるデータを提供しています。 Crab は Kusama で既にスロットを獲得していますが、Darwinia のキャンペーンに貢献するには遅すぎることはありません。 彼らはまた、ネットワーク内で作成されたすべてのブロックに対して [Merkle Mountain range](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr) をインデックスするために SubQuery を利用しています。

Darwiniaは[SubQuery Projects](https://project.subquery.network/)を使って自分のプロジェクトを管理し、必要に応じてアップデートを行っています。 私たちが提供するインデックスやクエリのサービスは、SubQueryによって完全に管理され、[SubQuery's Explorer](https://explorer.subquery.network/)としてPolkadotコミュニティに無料で提供されています。

## Darwinia Networkについて

Darwinia Networkは、クロスチェーン生態学の「ゴールデンゲートブリッジ」であるSubstrate上に構築された分散型クロスチェーンブリッジネットワークです。 これは、クロスチェーンアセット転送と一般的なリモートチェーンコールによってPolkadot、Ethereum、BSCおよびその他の異種チェーンを接続し、最も安全な一般的なブリッジソリューションを提供します。 また、主なアプリケーション分野には、デフィ、クロスチェーンNFT取引市場、ゲームなどがあります。

[Website](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## SubQuery Networkについて

[SubQuery](https://subquery.network/)は、Layer-1ブロックチェーンと分散型アプリケーションの間にある、分散型のデータ集約、インデックス作成、およびクエリを行うためのレイヤーです。 現在、ポルカドットと基板プロジェクトに焦点を当てているこのサービスとしてのデータは、開発者がコアユースケースとフロントに集中することを可能にします。

[Linktree](https://linktr.ee/subquerynetwork) | [Webサイト](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
