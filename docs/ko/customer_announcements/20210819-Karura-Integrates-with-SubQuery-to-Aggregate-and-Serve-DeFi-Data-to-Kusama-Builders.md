# Karura, SubQuery와 통합하여 Kusama Builders에 DeFi 데이터 집계 및 제공

![](https://cdn-images-1.medium.com/max/1600/0*EBj5be1webNUchfi)

최근 몇 주 동안 Karura와 Acala 팀은 Polkadot/Kusama 생태계에서 최초의 탈중앙화 거래소인 [Karura Swap](https://apps.karura.network/)의 출시를 축하했습니다.

오늘, 우리는 SubQuery가 이 출시가 가능케 한 방법에 대해서 이야기할 것입니다. Karura는 SubQuery를 사용하여 Karura의 체인에서 데이터를 추출하고 쿼리하여 [Karura 앱](https://apps.karura.network/)에 대한 쿼리를 빠르고 효율적으로 만듭니다.

> *"Using SubQuery makes building dapps easy, no more making a complicated series of calls to get the data I need."* - Brett (Developer at Acala)

이제 Karura에서 게시한 새로운 공개 SubQuery 프로젝트를 통해 Karura에서 dApp을 개발하는 것이 훨씬 빨라졌습니다. Karura 커뮤니티가 원하는 dApp을 포크하고 구축할 수 있는 공개적으로 사용 가능한 [SubQuery 프로젝트](https://explorer.subquery.network/subquery/AcalaNetwork/karura)가 있습니다. Additionally, a [Karura Dictionary](https://explorer.subquery.network/subquery/AcalaNetwork/karura-dictionary) makes [indexing much faster](../blogs/20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md).

![](https://cdn-images-1.medium.com/max/1600/1*vvI_pI93mhe4kzSNQ2yMoQ.png)

## Karura는 무엇인가요?

Acala Foundation에서 설립한 Karura는 DeFi에 최적화되고 Kusama를 기반으로 구축된 확장 가능한 EVM 호환 네트워크입니다. 무신뢰 스테이킹 파생상품(유동성 KSM), 크로스체인 자산(kUSD)으로 뒷받침되는 다중 담보 스테이블코인, AMM DEX(Karura Swap)를 포함한 금융 애플리케이션 제품군을 제공하는 올인원 DeFi 플랫폼입니다. --- 모든 토큰으로 지불할 수 있는 마이크로 가스 수수료가 있습니다. [여기](http://apps.karura.network)로 이동하여 SubQuery를 사용하는 라이브 앱을 사용해 보세요.

![](https://cdn-images-1.medium.com/max/1600/0*g174RcFJwJcw2ITS)

Karura는 또한 커뮤니티와 지속성을 지원하는 온체인 Karura Treasure뿐만 아니라 윤리적며 지속 가능한 토큰 배포 모델을 제공합니다. Karura는 커뮤니티에서 500,000 KSM($100M USD) 이상의 크라우드론을 모으는 Kusama의 파라체인 슬롯 경매에서 우승한 최초의 파라체인이었습니다. Because Karura leverages the novel Acala EVM, which enables Ethereum compatibility with unlimited Substrate\* functionality, the network is primed to support the deployment of leading DeFi projects who aim to expand their services beyond Ethereum.

*[Substrate](http://substrate.dev/) *is the blockchain-building framework for building on Polkadot and Kusama\*

[여기에서 Karura에 대해 보다 자세히 알아보십시오.](https://medium.com/acalanetwork/countdown-to-karura-a-deep-dive-on-the-defi-hub-of-kusama-410066fc1e1f)

## Karura DApp 빌더를 위한 도구 열기

이제 Kusama의 DeFi 허브에서 최초의 커뮤니티 dApp을 구축하는 것은 Karura 커뮤니티에 달려 있습니다. 다음은 Karura가 SubQuery를 사용하여 Karura --- 의 모든 계정에 대한 과거 외부 항목(및 내부 전송)을 찾고 검색하는 방법에 대한 간단한 예입니다. [SubQuery 탐색기](https://explorer.subquery.network/subquery/AcalaNetwork/karura)에서 이것이 완전히 온라인 상태임을 확인할 수 있습니다.

![](https://cdn-images-1.medium.com/max/1600/0*t6stH0LeQC8M5fSp)

## SubQuery 소개

[SubQuery](https://subquery.network/)는 레이어 1 블록체인(Karura)과 dApp 사이에서 작동하는 데이터 집계 레이어입니다. SubQuery를 통해 dApp 개발자는 데이터 처리를 위한 맞춤형 백엔드 구축 또는 관리에 대해 걱정할 필요 없이 온체인 데이터를 탐색하고 변환하여 직관적인 dApp을 더 빠르게 구축할 수 있습니다. [지금 시작하세요](https://doc.subquery.network/).

[Website](https://subquery.network/) | [Documentation](https://doc.subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

## Karura에 대하여

[Karura](http://acala.network/karura)는 Kusama의 올인원 DeFi 허브입니다. Acala Foundation에 의해 설립된 Karura는 DeFi에 최적화된 확장 가능한 EVM 호환 네트워크입니다. 플랫폼은 다음을 포함하는 금융 애플리케이션 제품군을 제공합니다. 무신뢰 스테이킹 파생상품(유동성 KSM), 교차 사슬 자산(kUSD)으로 뒷받침되는 다중 담보 스테이블 코인 및 AMM DEX --- 모두 모든 토큰으로 지불할 수 있습니다. Karura는 DeFi를 위해 맞춤형으로 구축되고 KAR로 구동되는 블록체인 플랫폼으로, 거래 및 스마트 계약 실행을 가능하게 하고 노드 운영자에게 인센티브를 제공하며 보유자가 거버넌스에 참여할 수 있도록 합니다.

[Linktree](http://linktr.ee/karuranetwork) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc) | [Discord](https://discord.gg/vdbFVCH) | [Website](http://acala.network/karura) | [Twitter](https://twitter.com/KaruraNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [YouTube](http://youtube.com/c/acalanetwork)
