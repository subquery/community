# Ternoa 네트워크에서 비밀 NFT 탐색

![](https://miro.medium.com/max/1200/0*s1fSGGelS-HVJNBm)

7월 5일 주 동안 Ternoa는 미래 사용자가 Ternoa 블록체인에서 발행된 $CAPS 및 '**_Secret NFT'_**를 보내고 받을 수 있을 뿐만 아니라 소유자에게 자신의 Secret을 쉽게 공개할 수 있는 앱인 새로운 Wallet을 도입했습니다. '**_NTF_**'에 대한 '**_비밀_**'의 개념은 Ternoa 팀에서 상상했습니다.

그 '_비밀 NFTs_'는 Ternoa 팀이 구축한 전용 마켓플레이스([https://www.secret-nft.com/](https://www.secret-nft.com/))에서 찾아 구매할 수 있습니다. Ternoa Wallet은 [WalletConnect](https://walletconnect.org/) 프로젝트에서 영감을 받은 솔루션으로 사용자가 웹사이트와 앱 간의 간단한 QR 코드 상호 작용으로 NFT에 쉽게 로그인하고 구매할 수 있도록 합니다.

**_Secret NFTs_**는 Ternoa가 개발하고 개발한 특별한 종류의 NFT이며 독특하고 우아한 블록체인 아키텍처로 가능합니다: Secret-NFT는 두 개의 미디어로 구성되는데, 하나는 워터마크가 있는 공개되거나 저품질이고 다른 하나는 NFT라고 불리는 것의 소유자만 볼 수 있는 개인적인 것입니다. 이것은 아티스트와 KOL을 위조로부터 놀라운 보호 기능을 제공하고 많은 사용 사례를 열어줍니다.

SecretNFT를 보유한 지갑 사용자는 비밀 미디어에 쉽게 액세스할 수 있습니다.

**SubQuery**는 사용자 잔고에 대한 인덱싱 솔루션, Ternoa Wallet 및 Secret-NFT 웹사이트 모두에서 NFT 탐색기를 제공하여 Ternoa를 지원하고 있습니다.

![](https://miro.medium.com/max/1400/0*gquKRKBgiyAAxRFZ)

> “우리는 문서가 언뜻 보기에 명확해 보였고 실수하지 않았기 때문에 SubQuery를 사용하기로 결정했습니다. SubQuery는 테스트 및 배포를 매우 쉽게 만드는 도커 머신이 있는 완전한 환경을 제공합니다. 이 환경에서 개발하고 블록체인에서 발생하는 다양한 이벤트를 수신하도록 프로그래밍하는 것은 상대적으로 쉽습니다. 매우 반응이 좋은 지원에도 축하드립니다.” — Ternoa CTO

또한 [SubQuery의](https://subquery.network/) 서비스는 Ternoa NFT의 고유한 기능을 지원하는 방식으로 Ternoa 블록체인에서 생성된 Secret-NFT에 대한 체인 데이터를 추출하고 쿼리하는 데 도움이 됩니다.

![](https://miro.medium.com/max/1400/0*CA7lfxmZxHCKhzWw)

아래 예에서는 [SubQuery를 사용하여](https://explorer.subquery.network/subquery/capsule-corp-ternoa/indexer) Ternoa 네트워크에서 처음 5개의 NFT를 찾습니다.

![](https://miro.medium.com/max/1400/0*YaQGpb3xUn7BUESx)

Secret NFT는 [SubQuery 프로젝트](https://project.subquery.network/)를 사용하여 자체 프로젝트를 관리하고 필요에 따라 업데이트합니다. 우리가 제공하는 인덱싱 및 쿼리 서비스는 SubQuery에서 완전히 관리되며 [SubQuery의 Explorer](https://explorer.subquery.network/)에서 Polkadot 커뮤니티에 무료로 제공됩니다.

[Ternoa Secret NFT 데이터세트 살펴보기](https://explorer.subquery.network/subquery/capsule-corp-ternoa/indexer)