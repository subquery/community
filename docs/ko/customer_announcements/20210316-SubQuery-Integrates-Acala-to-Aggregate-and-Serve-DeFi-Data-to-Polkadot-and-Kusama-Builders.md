# SubQuery, Acala에 통합하여 DeFi 데이터를 집계하고 Polkadot 및 Kusama 빌더에 제공

![](https://miro.medium.com/max/1400/1*cg4kJs0WEcyPP73EAtHomA.png)

지난 주 [SubQuery](https://www.subquery.network/)는 프로젝트의 다음 단계인 [SubQuery Explorer](https://explorer.subquery.network/)를 출시했습니다. 이번 주, Acala와 SubQuery는 통합을 완료하여 사용자와 개발자가 몇 분 만에 무료로 Acala의 Polkadot용 DeFi 허브에서 데이터를 쿼리하고 추출할 수 있습니다.

SubQuery는 Layer-1 블록체인(Acala)과 DApp 계층 사이에서 작동하는 데이터 집계 계층입니다. 이 솔루션은 Acala 및 기타 블록체인의 데이터를 집계 및 구성하여 개발자가 다양한 프로젝트에 사용할 수 있도록 잘 구성된 데이터를 제공합니다. 이 서비스를 통해 DApp 개발자는 데이터 처리를 위한 맞춤형 백엔드 구축에 시간을 낭비할 필요 없이 핵심 사용 사례와 프런트엔드에 집중할 수 있습니다.

Acala는 유동성 단편화를 줄이고 구성 가능성을 높이며 모든 사람이 DeFi에 액세스할 수 있도록 하는 멀티체인 미래를 위한 확고한 신념이자 장기적인 구축자입니다. Acala는 탈중앙화 금융(DeFi)에 중점을 둔 전문 블록체인으로, DeFi 허브와 Polkadot 및 Kusama 생태계를 지원하는 인프라가 된 여러 DeFi 프리미티브를 생성했습니다. 팀은 다중 담보 스테이블 코인(aUSD — The Acala Dollar), AMM(Automated Market Maker) DEX, LDOT(Liquid DOT)라고 하는 토큰화된 지분 자산을 포함한 제품을 구축했으며 자체 가스 가져오기 기능을 구현했습니다. 스테이블코인과 같은 지원 자산에서 가스 요금을 지불할 수 있습니다. Acala의 파라체인은 Polkadot의 DeFi 허브 역할과 다양한 블록체인의 자산과 유동성을 집계하는 랜딩 패드의 역할을 할 계획입니다.

오늘 [SubQuery Explorer](https://explorer.subquery.network/)에 액세스하면 새로운 Acala SubQuery 프로젝트를 환영합니다. 이 SubQuery는 Acala에서 생성된 모든 외부 데이터를 동적으로 추적하고 다음에 대해 파생된 집계 통계를 빠르게 표시할 수 있습니다.

-   유동성 변화에 대한 과거 데이터(제공자별로 분류)
-   모든 교차 체인 자산 스왑에 대한 과거 데이터
-   이적 내역

![](https://miro.medium.com/max/1400/0*sXPljA1RE754fuDQ)

코드에서 아무 것도 구현하지 않고 [Explorer](https://explorer.subquery.network/)를 사용하여 Acala SubQuery Graph를 가지고 놀 수 있습니다. 또한 Acala의 데이터를 분석할 때 각 GraphQL 요청에서 지정할 수 있는 유형을 문서화했습니다.

다음은 사용자가 Acala Mandala 네트워크를 통해 ACA 토큰을 사용하여 이전 5개의 전송 이벤트를 빠르고 쉽게 볼 수 있는 방법의 간단한 예입니다. 여기에서 간단한 GraphQL 언어를 사용하여 이 데이터를 정렬하고 모든 클라이언트에 검색하는 것을 볼 수 있습니다. DApp은 이를 사용하여 대출 위치를 모니터링하고 경매 등을 통해 담보물을 청산할 수 있습니다.

![](https://miro.medium.com/max/1400/0*zlxPf2tz8DVX95kY)

다음은 단일 계정을 검사하고 해당 계정에서 발생한 모든 토큰 스왑 이벤트를 검색하는 약간 더 복잡한 예입니다. 포트폴리오 DApp은 이 데이터를 사용하여 보유자의 계정 및 토큰 성능, 스테이킹으로 인한 수익, 유동성 공급 및 차입 비용에 대한 개요를 생성할 수 있습니다.

![](https://miro.medium.com/max/1400/0*hdTbn41vDvIYuv3_)

[SubQuery Explorer](https://explorer.subquery.network/)는 전 세계의 기여자가 만들고 SubQuery 팀에서 관리하는 게시된 SubQuery 프로젝트에 대한 액세스를 제공하는 온라인 호스팅 서비스입니다. 그 임무는 개발자가 더 많은 것을 달성할 수 있도록 지원하는 인프라 서비스를 제공하여 Polkadot 네트워크 데이터에 쉽게 액세스하는 것입니다.

[SubQuery](https://www.subquery.network/)를 사용하면 모든 Substrate/Polkadot 팀이 데이터를 처리하고 쿼리할 수 있습니다. 이 프로젝트는 애플리케이션 계층에 서비스를 제공하는 데이터 프로토콜의 성장에서 영감을 얻었으며, 그 목표는 누구나 안정적으로 데이터를 더 빨리 찾고 소비할 수 있도록 하여 Polkadot/Substrate 프로젝트가 더 나은 dApp을 구축할 수 있도록 돕는 것입니다. 오늘날 누구나 무료로 몇 분 만에 Polkadot 네트워크 데이터를 쿼리하고 추출할 수 있습니다.

[Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

[Acala](http://acala.network/)는 분산형 금융 허브이자 Polkadot의 스테이블 코인으로, 빠르고 쉽게 금융 애플리케이션을 구축하고 거래 효율성을 개선하고 시간을 절약합니다. 플랫폼은 일련의 금융 기본 요소를 제공합니다: 비트코인과 같은 교차 체인 자산, 무신뢰 스테이킹 파생 상품, 유동성을 발휘하고 금융 혁신을 강화하는 분산형 거래소로 뒷받침되는 다중 담보 스테이블 코인. Acala는 즉시 사용 가능한 크로스체인 기능과 강력한 보안을 갖춘 스마트 계약 또는 내장 프로토콜을 사용하는 금융 애플리케이션을 위한 사실상의 개방형 플랫폼입니다.

[Discord](https://discord.gg/vdbFVCH) | [Website](https://acala.network/) | [Twitter](https://twitter.com/AcalaNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [Acala Wiki](https://github.com/AcalaNetwork/Acala/wiki) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc)