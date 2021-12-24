# SubQuery 11월 기술 업데이트: EVM 및 매니페스트 업데이트

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**최신 SubQuery 릴리스에 대한 기술 심층 분석에 대해 자세히 알아보십시오.**

# 프로젝트 매니페스트에서 외부 체인 유형 파일 지원

오늘은 프로젝트 매니페스트 파일(`project.yaml`)의 [버전 0.2.0](https://doc.subquery.network/create/manifest/)이 출시되는 날입니다. 이 새 버전은 개발자에게 고객이 요청한 다양한 개선 사항을 제공합니다.

가장 중요한 것은 이제 사용자 정의 기질 체인을 인덱싱할 때 모든 사용자 정의 유형이 포함된 체인 유형 정의 파일을 참조할 수 있다는 것입니다. 이를 통해 Kusama의 모든 파라체인을 포함하여 모든 기판 기반 체인에 새 SubQuery 프로젝트를 빠르게 연결할 수 있습니다. 이것은 이 블록체인에서 지원하는 특정 유형을 `.json` 또는 `.yaml` 형식으로 선언하는 표준 체인 유형 파일이어야 합니다.

이 솔루션을 사용하면 매니페스트 자체에서 체인 유형 정의를 복사 및 관리하는 것을 피할 수 있으며 [PolkadotJS와 같은 저장소에 나열된 게시된 체인 유형 파일](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec)을 복제할 수 있습니다.

[여기 업데이트된 문서에서 프로젝트를 마이그레이션하는 방법을 포함하여 새 매니페스트 파일에 대해 읽을 수 있습니다.](https://doc.subquery.network/create/manifest/)

# Moonbeam EVM 지원

지난 주 우리는 [Moonriver에 완전한 EVM 및 기판 인덱싱 지원을 제공하기 위해 Moonbeam과 협력하고 있음을 발표](https://subquery.medium.com/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff)하게 된 것을 기쁘게 생각합니다.

오늘 우리는 시작하는 데 필요한 모든 개발자 리소스와 함께 발표에 대한 후속 조치를 취하고 있습니다.

현재 개발자가 이더리움과 Polkadot/Kusama에서 데이터를 유연하게 수집하고 쿼리할 수 있는 오픈 소스 도구는 없습니다. 이러한 제한으로 인해 Moonriver 내의 dApp 솔루션이 스마트 계약 레이어에 격리되어 두 번성하는 네트워크의 소비자에 대한 잠재력이 제한될 수 있습니다. Moonbeam과의 이번 파트너십은 Moonriver 내의 모든 블록체인 데이터에 대한 완전하고 통합된 데이터 인덱싱 솔루션을 제공하며 Moonriver의 성장하는 애플리케이션 생태계에 큰 도움이 될 것입니다.

**SubQuery는 12월 1일 수요일 다음 Moonbuilders Workshop에 게스트로 참석할 예정입니다.** [**여기에서 등록하세요.**](https://www.crowdcast.io/e/moonbuilders-ws/10)****

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[먼저 Moonbeam, Moonbase Alpha 및 Moonriver에 연결하고 데이터를 색인화하는 방법에 대한 업데이트된 설명서를 숙지하십시오.](https://doc.subquery.network/create/moonbeam/) Moonbeam 데이터를 인덱싱하는 프로세스는 단 두 단계입니다.

## 1단계: Moonbeam 사용자 지정 데이터 원본 추가

Moonbeam의 [Frontier](https://github.com/paritytech/frontier) 구현과 함께 작동하도록 특별히 제작된 데이터 프로세서를 만들었습니다. 이를 통해 프로세서가 인수를 구문 분석하는 데 사용하는 특정 ABI 리소스와 이벤트가 발생하거나 호출이 이루어진 스마트 계약 주소를 참조할 수 있습니다. [여기에서 더 읽을 수 있습니다.](https://doc.subquery.network/create/moonbeam/#data-source-spec)

SubQuery는 다른 인덱서보다 고급 필터를 도입하여 비계약 트랜잭션, 트랜잭션 발신자, 계약 및 인덱싱된 로그 인수를 필터링할 수 있습니다. 이를 통해 개발자는 특정 데이터 요구 사항을 충족하는 다양한 프로젝트를 구축할 수 있습니다.

## 2단계: Moonbeam 데이터 색인 생성

일반 SubQuery 프로젝트와 마찬가지로 매핑 기능을 사용하여 오프체인 데이터를 정의한 GraphQL 엔터티로 변환합니다. 차이점은 `SubstrateEvent` 또는 `SubstrateExtrinsic` 대신 매핑 기능이 Ether를 기반으로 하는 `MoonbeamCall` 또는 `MoonbeamEvent`를 수신한다는 것입니다. [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) 또는 [로그](https://docs.ethers.io/v5/api/providers/types/#providers-Log) 유형입니다. [여기에서 이에 대한 자세한 내용을 읽을 수 있습니다](https://doc.subquery.network/create/moonbeam/#moonbeamcall).

[여기에서 이 프로세스에 대한 전체 문서를 읽으십시오.](https://doc.subquery.network/create/moonbeam/#moonbeamcall)

## 예시 프로젝트

eth `전송` 이벤트를 인덱싱하고 스마트 계약 호출을 `승인`하는 완전한 예제 프로젝트가 있습니다. 이 예제 프로젝트의 코드는 [여기 GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)에 있거나 [여기에서 SubQuery Explorer의 라이브 SubQuery 프로젝트](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project)를 통해 액세스할 수 있습니다.

대부분의 변경 사항은 매니페스트 파일(`project.yaml`)에서 발생합니다. 아래에서 [함수 서명 문자열](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) 또는 계약에서 호출된 함수를 필터링하기 위한 함수 한숨을 지원하도록 [확장된 호출 필터](https://doc.subquery.network/create/moonbeam/#call-filters)가 있음을 볼 수 있습니다. [이벤트 필터](https://doc.subquery.network/create/moonbeam/#event-filters)의 경우 [여기에 있는 Ethereum JSON-PRC 로그 필터 표준을 따르는 주제 필터링](https://docs.ethers.io/v5/concepts/events/)을 사용할 수 있습니다. SubQuery는 Moonbeam EVM용으로 다른 인덱서보다 고급 필터를 도입했으며 이러한 개선 사항은 개발자에게 상당한 이점이 될 것입니다.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

Substrate 기반 SubQuery 프로젝트가 어떻게 만들어지는지 잘 알고 있다면 새로운 Moonriver 지원에 대한 매핑 기능이 얼마나 유사한지 알 수 있습니다. 각 매핑 함수는 `MoonbeamCall` 또는 `MoonbeamEvent`를 수신하고 다른 SubQuery 프로젝트와 마찬가지로 처리합니다.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

이에 대해 질문이 있는 경우 [문서를 확인](https://doc.subquery.network/create/moonbeam)하거나 [Discord 커뮤니티](https://discord.com/invite/subquery)의 #technical-support 채널에서 문의하세요.

[GitHub에서 예제 프로젝트 복제](https://github.com/subquery/tutorials-moonriver-evm-starter)

보시다시피 단일 프로젝트에서 Substrate와 EVM 데이터를 모두 인덱싱하는 Moonriver 또는 Moonbase Alpha 프로젝트를 만드는 것은 매우 간단하고 거의 비슷합니다. SubQuery의 고급 스캐폴딩 도구를 사용하여 dApp 개발 속도를 높이고 보다 직관적인 dApp을 구축하기 위해 데이터에 대한 이점 또는 풍부한 인덱싱을 활용할 수 있습니다. 당신이 무엇을 만들지 정말 기대됩니다!

## SubQuery 소개

SubQuery는 레이어 1 블록체인(Moonriver 및 Polkadot 등)과 DApp 사이에서 작동하는 데이터 집계 레이어입니다. 이 서비스는 블록체인 데이터를 잠금 해제하고 쿼리 가능한 상태로 변환하여 직관적인 애플리케이션에서 사용할 수 있도록 합니다. 이를 통해 DApp 개발자는 데이터 처리를 위한 맞춤형 백엔드 구축에 시간을 낭비할 필요 없이 핵심 사용 사례와 프런트엔드에 집중할 수 있습니다.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Moonbeam 소개

Moonbeam은 기본적으로 상호 운용 가능한 응용 프로그램을 쉽게 구축할 수 있도록 하는 Polkadot 네트워크의 Ethereum 호환 스마트 계약 플랫폼입니다. 이 이더리움 호환성을 통해 개발자는 최소한의 변경으로 기존 Solidity 스마트 계약 및 DApp 프론트엔드를 Moonbeam에 배포할 수 있습니다. Polkadot 네트워크의 파라체인으로서 Moonbeam은 Polkadot 릴레이 체인의 공유 보안과 Polkadot에 연결된 다른 체인과의 통합의 이점을 누릴 것입니다. 현재 PureStake에서 활발히 개발 중인 Moonbeam은 2021년 4분기에 MainNet에 도달할 것으로 예상됩니다. 자세히 알아보기: [https://moonbeam.network/](https://moonbeam.network/).
