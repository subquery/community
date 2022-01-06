# KaruraがSubQueryと統合し、DeFiデータを集約してKusama Buildersに提供

![](https://cdn-images-1.medium.com/max/1600/0*EBj5be1webNUchfi)

ここ数週間で、KaruraとAcalaのチームは、Polkadot/Kusamaのエコシステムにおける初の分散型取引所である[Karura Swap](https://apps.karura.network/)のローンチに成功しました。

本日は、このローンチを実現したSubQueryについてご紹介します。 KaruraはSubQueryを使ってKaruraのチェーンからデータを抽出してクエリを行い、[Karuraのアプリ](https://apps.karura.network/)のクエリを高速かつ効率的にしています。

> 「Subqueryを使うことで、Dappsの構築が簡単になり、必要なデータを得るために複雑な一連のcallをする必要がなくなりました」* --- Brett (Developer at Acala)*

Karuraが公開している新しいSubQueryプロジェクトにより、Karura上でのdAppsの開発がより速くなりました。 公開されている[SubQueryプロジェクト](https://explorer.subquery.network/subquery/AcalaNetwork/karura)があり、Karuraコミュニティがフォークして好きなdAppを作ることができます。 さらに、[Karura Dictionary](https://explorer.subquery.network/subquery/AcalaNetwork/karura-dictionary)を使うと、[インデックス作成が格段に速くなります](https://subquery.medium.com/subquerys-just-got-a-lot-faster-with-the-dictionary-8a7a1447574)。

![](https://cdn-images-1.medium.com/max/1600/1*vvI_pI93mhe4kzSNQ2yMoQ.png)

## Karuraとは？

Acala Foundationによって設立されたKaruraは、DeFiに最適化されたスケーラブルなEVM互換のネットワークで、Kusamaをベースに構築されています。 これは、オールインワンのDeFiプラットフォームであり、以下のような一連の金融アプリケーションを提供しています。信頼性の高いステーキングデリバティブ(liquid KSM) 、クロスチェーン資産に裏付けられたマルチ担保のステーブルコイン(kUSD) 、AMM DEX(Karura Swap) ---これらはすべて、どのトークンでも支払うことができるマイクロガス料金で提供されています。 SubQueryを使用したライブアプリを試すには[こちら](http://apps.karura.network)にアクセスしてください。

![](https://cdn-images-1.medium.com/max/1600/0*g174RcFJwJcw2ITS)

また、Karuraは、倫理的で持続可能なトークンの流通モデルと、オンチェーンのKarura Treasuryを提供しており、この2つがコミュニティと長寿を支えています。 Karuraは、Kusamaのパラチェーンスロットオークションで勝利した最初のパラチェーンであり、コミュニティから500,000KSM(1億ドル) 以上のクラウドローンを集めました。 Karuraは、Ethereumとの互換性を保ちつつ、Substrate*の機能を無制限に利用できる斬新なAcala EVMを採用しているため、Ethereum以外のサービスの拡大を目指す有力なDeFiプロジェクトの展開をサポートします。

*[Substrate](http://substrate.dev/) ※は、PolkadotやKusamaをベースにしたブロックチェーン構築のためのフレームワークです。*

[Karuraについて詳しく知りたい場合は、こちらをご覧ください。](https://medium.com/acalanetwork/countdown-to-karura-a-deep-dive-on-the-defi-hub-of-kusama-410066fc1e1f)

## Karura DApp ビルダーのためのオープンツール

KusamaのDeFiハブで初のコミュニティdAppを構築するのは、Karuraコミュニティにかかっています。 以下は、KaruraがSubQueryを使用して、Karura上のあらゆるアカウントの過去のextrinsic(およびその中のtransfer) を検索して取得する方法の簡単な例です。これは[SubQuery Explorer](https://explorer.subquery.network/subquery/AcalaNetwork/karura)で完全にオンライン化されていることがわかります。

![](https://cdn-images-1.medium.com/max/1600/0*t6stH0LeQC8M5fSp)

## SubQuery について

[SubQuery](https://subquery.network/)は、レイヤー1のブロックチェーン(Karura) とDAppsの間で動作するデータ集約レイヤーです。 SubQueryを使用することで、dApp開発者は、データ処理のためのカスタムバックエンドの構築や管理を気にすることなく、オンチェーンデータの探索や変換を行い、直感的なdAppを迅速に構築することができます。 [今すぐ始めましょう](https://doc.subquery.network/)。

[Website](https://subquery.network/) | [Documentation](https://doc.subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

## Karura について

[Karura](http://acala.network/karura)は、KusamaのオールインワンのDeFiハブです。 Acala Foundationによって設立されたKaruraは、DeFiに最適化されたスケーラブルなEVM互換のネットワークです。 このプラットフォームでは、以下のような一連の金融アプリケーションを提供しています。トラストレスなステーキング・デリバティブ(liquid KSM) 、クロスチェーン資産に裏付けられたマルチ担保のステーブルコイン(kUSD) 、AMM DEXであるKarura Swap --- これらはすべて、どのトークンでも支払うことができるマイクロガス料金で提供されています。 Karuraは、DeFiのためにカスタム構築されたブロックチェーンプラットフォームで、KARを搭載しており、取引の決済やスマートコントラクトの実行を可能にし、ノードオペレーターにインセンティブを与え、保有者がガバナンスに参加できるようにしています。

[Linktree](http://linktr.ee/karuranetwork) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc) | [Discord](https://discord.gg/vdbFVCH) | [Website](http://acala.network/karura) | [Twitter](https://twitter.com/KaruraNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [YouTube](http://youtube.com/c/acalanetwork)