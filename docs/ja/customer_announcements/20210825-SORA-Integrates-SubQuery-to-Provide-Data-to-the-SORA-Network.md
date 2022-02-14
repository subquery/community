# SORAがSubQueryを統合し、SORAネットワークにデータを提供

![sora-header.jpg](https://miro.medium.com/max/1400/1*fPPW0DsynIt9QpvK4ZrsUA.jpeg)

今日は、SubQueryでのエキサイティングな新プロジェクト「SORAとPolkaswap」をご紹介します。 [SORA](https://sora.org/)は、SORAと[Polkaswap.io](http://polkaswap.io/)で構築されたモバイルアプリケーションを動かすために、SORAネットワークからデータを取得するSubQuery Projectを構築しました。 試しに[こちら](https://explorer.subquery.network/subquery/sora-xor/sora)をご覧ください。

![sora-frontend.jpg](https://miro.medium.com/max/1400/1*pq0U6wsutlf8rjXqq7i2BQ.jpeg)

> 「SORA のネットワーク利用のUXを向上させるためにSubQueryを採用しました。 SubQueryを使用して、extrinsicの詳細を取得・一覧表示し、フィアット価格と流動性プールのAPYを計算しました。 私たちの目的は、SORAネットワークで動作するアプリケーションのトランザクション履歴や集計データを得ることでした。
> 
> SubQueryは、デプロイや管理が容易で、学習や開発がしやすく、ドキュメントも充実しており、Githubとの連携で独自のインフラも整備されているため、当社のニーズに最適なソリューションでした。 SubQueryは、プレーンなデータ構造により高速なアクセスを実現し、クライアントアプリケーションのためのGraphQL APIをサポートし、イベント、extrinsics、および追加のフィルタリングを伴うブロックを解析するための柔軟な構成を備えています。 最後に、このアプリケーションはユーザーにとって完全に透明なので、アプリケーションが更新されたか停止されたかに気づくことはありません」 -SORA開発チーム

Polkaswapは盛んなPolkadotエコシステムの中でも代表的なDEXであり、SubQueryを使ってPolkaswapで発生した送金やスワップ、流動性の追加や削除、トークンのフラットプライス、流動性プールのAPYなどを取得しています。

SubQueryは、チームがカスタムバックエンドソリューションの構築に費やす時間を短縮することで、SORAのモバイルアプリやPolkaswapの開発を容易にしている。SORAのチームは、将来的にPolkaswapをよりよくサポートするために、Polkaswap SubQuery Projectを拡張することを計画しています。

![sora-explorer.jpg](https://miro.medium.com/max/1400/1*vjdjmmffvJ7zfOQyxo0ZAA.jpeg)

この例では、SubQuery を使用して、各流動性プールで保有されている XOR の合計量を引き出しています(最初の 2 つのプールのみを表示するようにフィルタリングされています) 。 また、各流動性プールに関連する現在のAPYも表示されています(最初の2つのプールのみを表示するようにフィルタリングされています) 。

![sora-playground.jpg](https://miro.medium.com/max/1400/1*oTh-ajGfG1oEhYdvqo12tQ.jpeg)

SORA は [SubQuery Projects](https://project.subquery.network/) を使用してプロジェクトを管理し、必要に応じて更新を行っています。 私たちが提供するインデックスやクエリのサービスは、SubQueryによって完全に管理され、[SubQuery's Explorer](https://explorer.subquery.network/)としてPolkadotコミュニティに無料で提供されています。

SORAのプロジェクトは、SubQueryエクスプローラー([こちら](https://explorer.subquery.network/subquery/sora-xor/sora)) でご覧いただけます。

---

### SORAについて

SORAは、SORA議会の暗号化された分類ベースの民主的な監督のもと、分散型金融(DeFi) のためのツールを組み込んだ超国家的な世界経済システムを構築しています。

SORAネットワークは、アトミック・トークン・スワップ、他のブロックチェーンへのトークンブリッジ、デジタル・アセットを含むプログラム・ルールの作成など、デジタル・アセットを使用する分散型アプリケーションのためのツールを提供することを得意としています。

[Website](https://sora.org/) | [Reddit](https://www.reddit.com/r/SORA/) | [Blog](https://sora.org/blog) | [Telegram](https://t.me/sora_xor) | [Twitter](https://twitter.com/sora_xor) | [YouTube](https://youtube.com/sora_xor) | [Instagram](https://instagram.com/sora_xor)

### SubQuery について

[SubQuery](https://subquery.network/)は、Layer-1ブロックチェーンと分散型アプリケーションの間にある、分散型のデータ集約、インデックス作成、およびクエリを行うためのレイヤーです。 現在、PolkadotとSubstrateのプロジェクトに注力しているこのData-as-a-Serviceにより、開発者はデータ処理用のカスタムバックエンドの構築に時間を費やすことなく、コアユースケースとフロントエンドに集中することができます。

[Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Email](mailto:hello@subquery.network)