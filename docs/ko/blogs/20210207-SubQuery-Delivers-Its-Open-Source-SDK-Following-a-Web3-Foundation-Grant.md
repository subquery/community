# SubQuery는 Web3 Foundation 지원을 받은 오픈 소스 SDK를 제공합니다.

## 이제 개발자는 Web3 미래로 나아가는 전세계의 데이타를 변환하고 쿼리할 수 있습니다.

![](https://miro.medium.com/max/1400/1*f9Jw37LjUGu8P8W39cjDYw.png)

이번 주 OnFinality (SubQuery를 뒷받쳐주는 팀)는 Web3 Foundation Grant를 통해 SubQuery 프로젝트를 만들기 위한 완전한 워크플로를 제공했습니다. 우리는 이 지원을 완료하기 위해 우리가 수행한 작업을 발표하고, 전 세계와 공유하여 그들이 오늘날 우리 프로젝트를 사용하여 네트워크를 보다 효율적으로 쿼리할 수 있도록 하게 된 것을 기쁘게 생각합니다.

SubQuery는 블록체인 팀과 사용자가 노드를 시작하고 광범위한 블록체인 프로토콜에 액세스할 수 있는 인프라 Iaas & SaaS 플랫폼인 OnFinality의 팀에 의해 개발되었습니다. 우리는 API 공유 노드 서비스를 포함한 일련의 협력 서비스를 보유하고 있으며 최고의 Polkadot/Substrate 팀과 협력 관계를 맺고 있습니다.

거의 모든 블록체인은 데이터를 처리하고 쿼리해야 합니다. 우리 프로젝트는 애플리케이션 계층에 서비스를 제공하는 데이터 프로토콜들의 성장에서 영감을 얻었으며, 점점 커지는 Polkadot 커뮤니티를 돕기 위해 나타났습니다. SubQuery의 목표는 누구나 안정적으로 데이터를 더 빨리 찾고 소비할 수 있도록 하여 Polkadot/Substrate 프로젝트가 더 나은 dApp을 개발할 수 있도록 돕는 것입니다. 우리의 서비스를 통해 사용자는 데이터를 추출, 변환, 유지 및 쿼리할 수 있을 뿐만 아니라, 향후 데이터를 연결하고 표시할 수 있습니다.

[Web3 Foundation Open Grants Program](https://github.com/w3f/Open-Grants-Program/pull/136)을 통해, 우리는 사용자가 체인에서 인덱서를 실행하여 GraphQL로 쿼리할 수 있는 데이터 세트를 만들 수 있는 오픈 소스 프로젝트인 SubQuery를 개발할 수 있었습니다.

이 도구 모음에는 인덱서가 자체 네트워크를 다니며 집계하는 방법을 정의하여 프로젝트들이 자체 SubQuery 프로젝트를 생성할 수 있는 @subql/cli를 포함하고 있습니다. 우리 제안으로, 사용자에게 cli를 사용하여 [귀하가 따라할 수 있는](https://doc.subquery.network/quickstart.html) 네트워크를 인덱싱하는 방법을 보여주는 기본 튜토리얼을 제공하고 있습니다. 또한 고급 사용법을 위해 더 자세한 개발자 문서도 제공하고 있습니다.

두번째로, CLI에 의해 생성된 정의된 SubQuery 프로젝트를 불러온 다음 네트워크를 Postgres 데이터베이스에 인덱싱하는 SubQuery 노드 패키지가 있습니다. Hasura를 사용하면, 인덱싱된 테이블에 대해 GraphQL 쿼리를 즉시 실행할 수 있습니다. 이러한 도구들과 우리가 항상 개선하고 있는 커뮤니티 지원의 도움으로, 누구나 쉽게 쿼리를 만들고 실행할 수 있습니다.

**귀하는 [**SubQuery Github 저장소**](https://github.com/OnFinality-io/subql)**에 있는 예제를 따라 바로 시작할 수 있습니다.** 또한 ** [**SubQuery 문서**](https://doc.subquery.network/)를 **읽거나** [**새 웹사이트를 방문하여**](https://subquery.network/) 더 자세히 알아볼 수 있습니다**.**

커뮤니티를 위해 이 프로젝트를 수행하는 데 도와주기 위해 Web3 Foundation에서 지원해준 것에 대해 대단히 감사합니다. Web3 Foundation은 분산 웹의 기술 스택을 구축하는 연구 및 개발 팀에 자금을 지원합니다. 이더리움 공동 창립자이자 전 최고 기술 책임자인 Gavin Wood 박사가 스위스 Zug에서 설립했습니다. Polkadot은 재단의 주력 프로젝트입니다.

우리는 이 제품을 기반으로 더 성능과 확장성을 갖춘 관리형 호스팅 서비스를 구축하는 데 집중할 것입니다. 업로드된 SubQuery 프로젝트에서 강력한 생산적인 SubQuery 노드를 만들 신뢰할만한 공용 인프라를 제공할 것입니다. 그런 다음 서비스는 체인 상태를 인덱싱하고 유지하며, 자체 호스팅 구현을 대체할 수 있는 프로덕션 GraphQL 끝점을 제공합니다. 우리는 다른 모든 사람들이 자신의 dApp을 구축하고 성장시키는 데 집중할 수 있는데 집중할 것입니다.

우리는 Polkadot의 잠재력을 일찍이 보았고 처음부터 거기에 우리의 노력을 집중하는 것이 당연하다고 생각했습니다. Polkadot의 핵심 전제는 멀티체인 상호운용성을 활용할 개발자, 사용자 및 비즈니스의 번창하는 커뮤니티를 만드는 것입니다. 커뮤니티는 데이터를 안정적으로 빠르게 찾고 소비할 수 있는 서비스가 필요합니다.

Polkadot의 고유한 아키텍처는 우리가 하나의 네트워크에 집중한 다음 여러 현재 및 미래의 체인들을 쉽게 지원할 수 있음을 의미합니다. Polkadot은 아직 개발 중이지만, 차세대 블록체인 개발자가 차세대 큰 dApp을 만들 수 있도록 도울 것입니다.

[SubQuery Github 저장소](https://github.com/OnFinality-io/subql)에서 시작하십시오.

[SubQuery 문서](https://doc.subquery.network/) 읽기

[새로운 웹사이트 방문](https://subquery.network/)

Web3 Foundation [웹 사이트](https://web3.foundation/)를 방문하여 자세히 알아보십시오. Web3 Foundation의 최신 개발 사항을 확인하려면, [Reddit](https://www.reddit.com/r/dot/) 또는 [Twitter](https://twitter.com/web3foundation)에서 가입하십시오.

우리의 소식이 궁금하다면:

-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/%23subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)