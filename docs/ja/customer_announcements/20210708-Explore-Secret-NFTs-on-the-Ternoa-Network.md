# TernoaネットワークでSecret NFTを探る

![](https://miro.medium.com/max/1200/0*s1fSGGelS-HVJNBm)

7月5日の週に、Ternoaは新しいWalletを導入しました。このWalletは、未来のユーザーがTernoaブロックチェーンでミントされた$CAPSや「**_Secret NFT_**」を送受信したり、所有者にSecretを簡単に公開したりすることができるアプリです。 **_NTFs_**」のための「**_Secret_**」というコンセプトは、Ternoaチームによって想像されました。

それらの「_Secret NFT_」は、Ternoaチームが構築した専用のマーケットプレイス([https://www.secret-nft.com/](https://www.secret-nft.com/)) で見つけて購入することができます。 Ternoa Walletは、[WalletConnect](https://walletconnect.org/)プロジェクトにヒントを得たソリューションで、ウェブサイトとアプリの間でQRコードをやり取りするだけで、簡単にログインしてNFTを購入することができます。

**_Secret NFT_**は、Ternoaが発明・開発した特別な種類のNFTであり、ユニークでエレガントなブロックチェーン・アーキテクチャによって実現されています。Secret NFTは2つのメディアで構成されており、1つは透かしや低品質のパブリック、もう1つは当該NFTの所有者のみが見ることができるプライベートです。 これは、アーティストやKOLにとって、偽造からの素晴らしい保護となり、多くのユースケースをもたらします。

シークレットメディアは、そのSecretNFTを持っているWalletユーザーが簡単にアクセスできます。

**SubQuery** is supporting Ternoa by providing indexing solutions for their user balances, NFT explorer on both the Ternoa Wallet and the Secret-NFT website.

![](https://miro.medium.com/max/1400/0*gquKRKBgiyAAxRFZ)

> “We made the choice to use SubQuery because the documentation seemed clear to us at first glance and we were not mistaken. SubQuery provides a complete environment with a docker machine which makes testing and deployment very easy. It is relatively easy to develop in this environment and to program the listening of the different events emitted by our blockchain. Congratulations also to the support which is very responsive.” — Ternoa CTO

[SubQuery’s](https://subquery.network/) services also help extract and query on chain data for Secret-NFTs minted on the Ternoa Blockchain, in a way that supports the unique features of Ternoa’s NFTs.

![](https://miro.medium.com/max/1400/0*CA7lfxmZxHCKhzWw)

In the example below, we’re [using SubQuery](https://explorer.subquery.network/subquery/capsule-corp-ternoa/indexer) to find the first 5 NFTs on the Ternoa Network.

![](https://miro.medium.com/max/1400/0*YaQGpb3xUn7BUESx)

Secret NFT is using [SubQuery Projects](https://project.subquery.network/) to manage their own project and make updates as required. The indexing and query services we provide are completely managed by SubQuery and provided to the Polkadot community for free in [SubQuery’s Explorer](https://explorer.subquery.network/).

[Explore the Ternoa Secret NFT dataset](https://explorer.subquery.network/subquery/capsule-corp-ternoa/indexer)