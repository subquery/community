# Bifrost、新しいdAppのデータ提供にSubQueryを採用

![](https://miro.medium.com/max/1400/0*nqNosmn0y7FHOI42)

Bifrostは先日、新しいdAppのベータ版を発表しました。このdAppは、Bifrostのすべてのサービスの公式な対話型インターフェースです。 このdAppを通じて、ユーザーはvTokensをミントし、これらのデリバティブを換金・交換することで、その収益をリアルタイムに確認することができます。 このベータ版dAppは、ユーザーが流動性を維持することで、チェーン間のステーキングコストを削減できるようにするための大きな一歩となります。 [Bifrostの新しいdAppをここで試すことができます](https://apps.bifrost.finance/)。

> 「もしもSubQueryがなければ、チェーンから手作業でデータを収集することがどれほど煩雑なことか想像もつきません。 Bifrostの開発者は、取引履歴に使用するチェーン上のすべての取引データを探すのに多くの時間を費やすかもしれません。 SubQueryは、開発者の反復作業のコストを大幅に削減します。 BifrostはSubQueryと末永く協力し、製品開発のイテレーション・スピードを加速させていきます」 — Bifrost.Finance


![](https://miro.medium.com/max/1400/0*_JK-h0rjef6rk1ot)

SubQuery エクスプローラーに表示された新しいBifrost SubQueryプロジェクト

[SubQuery](https://subquery.network/)のサービスは、[Bifrost](https://bifrost.finance/)の新しいdAppで表示されるデータの多くをサポートしています。 転送、ミント、償還イベントに関するすべての履歴データ(価格、日付、通貨、プールなど) が集約され、SubQueryの高度なインデックス・クエリ・サービスから照会されます。 例えば、BifrostはSubQueryを使って、vDotやvEthのリアルタイムのミント価格や償還価格を計算してアプリに表示したり、特定のウォレットに入っているvTokensの合計数を取得したりすることができます。

![](https://miro.medium.com/max/1400/0*WIxvwcgPIHzCf0E3)

vDOTのリアルタイムのミント価格を示す簡単な例

Bifrostは[SubQuery Projects](https://project.subquery.network/)を使って自分のプロジェクトを管理し、必要に応じてアップデートを行っています。 The indexing and query services for this service is completely managed by SubQuery and provided to the Polkadot community for free in [SubQuery’s Explorer](https://explorer.subquery.network/). You can play around with the Bifrost SubQuery dataset using the Explorer without implementing any code [here](https://explorer.subquery.network/subquery/bifrost-finance/subql).

![](https://miro.medium.com/max/1400/0*J9Rao6oyFMxVNWzZ)

Another SubQuery example to retrieve total staking revenue for vDOT

[SubQuery](https://subquery.network/) is a data aggregation layer that will operate between the layer-1 blockchains (Bifrost) and DApps. The solution aggregates and organises data from [Bifrost](https://bifrost.finance/) and other blockchains, serving up well-structured data for their dApp and for other developers to use in a wide array of projects. This service allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing.

Learn more about Bifrost

[Website](https://bifrost.finance/) | [Telegram](https://t.me/bifrost_finance) | [Twitter](https://twitter.com/bifrost_finance) | [Discord](https://discord.gg/XjnjdKBNXj)

Learn more about SubQuery

[Website](https://subquery.network/) | [Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)