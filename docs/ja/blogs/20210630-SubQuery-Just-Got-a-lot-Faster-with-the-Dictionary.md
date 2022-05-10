# サブクエリは辞書でもっと速くなりました

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

本日、SubQueryの辞書インデックス機能の改善点を発表いたしました。

SubQuery辞書は、プロジェクトのスピードアップについてです。 SubQuery Projectのパフォーマンスを劇的に向上させます。 **場合によっては最大 10 倍速くなることがあります。**

チェーンデータのインデックス作成時、各ブロックを検査するために使用されるSubQuery Projects。 ポルカドットのチェーンは、約600万ブロックにわたって130GBの非構造化データです。 インデックス作成には多くの時間がかかります。特にテスト時には、待ちたくない時間があります。

SubQuery プロジェクトには、これらすべてをスキップするオプションがあります。基本的には、チェーン内のすべてのイベントの位置をインデックス前に作成します。

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

データが一般的な発生ではなく、その代わりにチェーンに点在する場合、パフォーマンスが最も向上します。 データが稀なように、辞書はブロックを多くスキップするため、パフォーマンスへの影響が大きくなります。

辞書エンドポイントは、 [実行時に指定された](https://doc.subquery.network/create/manifest.html)の [project.yamlファイル](https://doc.subquery.network/run/run.html#using-a-dictionary)に追加することができます。 さらに、 [SubQuery Projects](https://project.subquery.network/) でプロジェクトを実行するときに、このエンドポイントを上書きすることもできます。

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

辞書の詳細はこちら [役立つドキュメント](https://doc.subquery.network/run/run.html#using-a-dictionary)をご覧ください。

SubQuery は、Polkadot/Substrate dApp で利用可能な最高のデータインデックス化オプションだと信じています。 SubQueryの辞書のこの新しい実装により、SubQueryプロジェクトのインデックス作成プロセスを高速化することで、サービスをさらに改善することができます。

[SubQuery Projects](https://project.subquery.network/) で自分で試すか、 [エクスプローラー](https://explorer.subquery.network/) で辞書を表示することができます。 既存のプロジェクトで 辞書を使用するには、 [@subql/cli](https://www.npmjs.com/package/@subql/cli) のバージョンが 0.10.0 以上である必要があります。

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)