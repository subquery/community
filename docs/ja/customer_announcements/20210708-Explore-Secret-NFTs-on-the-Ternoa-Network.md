# TernoaネットワークでSecret NFTを探る

![](https://miro.medium.com/max/1200/0*s1fSGGelS-HVJNBm)

7月5日の週に、Ternoaは新しいWalletを導入しました。このWalletは、未来のユーザーがTernoaブロックチェーンでミントされた$CAPSや「**_Secret NFT_**」を送受信したり、所有者にSecretを簡単に公開したりすることができるアプリです。 **_NTFs_**」のための「**_Secret_**」というコンセプトは、Ternoaチームによって想像されました。

それらの「_Secret NFT_」は、Ternoaチームが構築した専用のマーケットプレイス([https://www.secret-nft.com/](https://www.secret-nft.com/)) で見つけて購入することができます。 Ternoa Walletは、[WalletConnect](https://walletconnect.org/)プロジェクトにヒントを得たソリューションで、ウェブサイトとアプリの間でQRコードをやり取りするだけで、簡単にログインしてNFTを購入することができます。

**_Secret NFT_**は、Ternoaが発明・開発した特別な種類のNFTであり、ユニークでエレガントなブロックチェーン・アーキテクチャによって実現されています。Secret NFTは2つのメディアで構成されており、1つは透かしや低品質のパブリック、もう1つは当該NFTの所有者のみが見ることができるプライベートです。 これは、アーティストやKOLにとって、偽造からの素晴らしい保護となり、多くのユースケースをもたらします。

シークレットメディアは、そのSecretNFTを持っているWalletユーザーが簡単にアクセスできます。

**SubQuery**は、Ternoa WalletとSecret-NFTのウェブサイトの両方においてNFTエクスプローラーで、ユーザーバランスに対してインデックスソリューションを提供し、Ternoaをサポートしています。

![](https://miro.medium.com/max/1400/0*gquKRKBgiyAAxRFZ)

> 「SubQueryを採用したのは、ドキュメントを一目見てわかりやすいと感じたからですが、それは間違いではありませんでした。 SubQueryは、テストとデプロイを非常に簡単にするdockerマシンを備えた完全な環境を提供します。 この環境での開発は比較的容易であり、我々のブロックチェーンが発する様々なイベントの聞き取りをプログラムすることができます。 また、非常に迅速な対応をしてくれるサポートにも感謝しています」 — Ternoa CTO

[SubQuery](https://subquery.network/)のサービスは、Ternoaブロックチェーン上でミントされたSecret-NFTのチェーンデータの抽出と照会を、TernoaのNFTのユニークな特徴をサポートする形で行います。

![](https://miro.medium.com/max/1400/0*CA7lfxmZxHCKhzWw)

以下の例では、[SubQuery](https://explorer.subquery.network/subquery/capsule-corp-ternoa/indexer)を使用して、Ternoa Network上の最初の5つのNFTを見つけています。

![](https://miro.medium.com/max/1400/0*YaQGpb3xUn7BUESx)

Secret NFTは[SubQuery Projects](https://project.subquery.network/)を使って自分のプロジェクトを管理し、必要に応じてアップデートを行っています。 私たちが提供するインデックスやクエリのサービスは、SubQueryによって完全に管理され、[SubQuery's Explorer](https://explorer.subquery.network/)としてPolkadotコミュニティに無料で提供されています。

[Ternoa Secret NFT データセットを詳しく見る](https://explorer.subquery.network/subquery/capsule-corp-ternoa/indexer)