# SubQuery를 소개합니다.

## 다가오는 web3.0 시대의 데이터 변환과 쿼리

![](https://miro.medium.com/max/1400/1*J5u22qNxndcuCrFJ1mfGqg.png)

OnFinality의 사명은 모든 형태와 규모의 고객에게 인프라 서비스를 제공하여 블록체인 개발자들을 지원하는 것입니다. 우리는 이 미션을 수행하기 위해 핵심 문제를 해결하는 것을 목표로 하는 새로운 도전인 SubQuery를 시작합니다.

대부분의 모든 블록체인은 데이터를 처리하고 쿼리해야합니다. 점점 커져가고 있는 Polkadot 커뮤니티에서는 데이터를 안정적으로 찾고, 빨리 사용할 수 있는 서비스가 필요합니다. 우리 프로젝트는 현재 이더리움에서 GraphQL을 사용하여 고객들에게 이 서비스를 제공하는 [The Graph](https://thegraph.com/)에서 영감을 받았습니다.

분산 시스템은 네트워크를 통해 데이터를 저장하기 때문에, 쿼리는 느리고 어렵습니다. Web 3.0의 꿈이 실현되기 위해서는, 최종 사용자를 위해 중앙 집중식 네트워크보다 더 빠르지는 못하더라도 비슷해야합니다.  프로토콜 팀들은 현재 자체 프로젝트를 위한 중앙 집중식 인덱싱 서버를 구축하고 있지만, 이는 세 가지 이슈가 있습니다.

- Polkadot/Substrate팀은 다음 dApp을 구축하는 동안 이를 구축하거나 관리하는 것에 대해 걱정할 필요가 없습니다.
- 팀들은 끊임없이 바퀴를 재발명하고 있습니다; Polkadot의 parachain 상호 운용성의 근본적인 이점은 이것을 피하는 것입니다.
- 우리의 관점에서, Substrate/Polkadot 생태계는 Ethereum과 같은 수준의 성장에 도달할 준비가 되어 있습니다. 우리는 Ethereum이 이미 가지고 있는 것과 동일한 수준의 커뮤니티 서비스를 제공해야 한다고 생각합니다.

![](https://miro.medium.com/max/1400/1*l4b4BXWkczVDaHyv30lLQQ.png)

SubQuery의 목표는 누구나 안정적으로 데이터를 더 빨리 찾고 사용할 수 있도록 하여 Polkadot/Substrate 프로젝트가 더 나은 dApp을 만들 수 있도록 돕는 것입니다. 우리 서비스를 통해 사용자는 초기에 데이터를 추출, 변환, 유지 및 쿼리할 수 있을 뿐만 아니라 향후에 데이터를 연결하고 표시할 수도 있습니다. 우리의 목표는 Ethereum에서의 The Graph처럼, Substrate/Polkadot 생태계의 핵심 인프라로 만드는 것입니다.

**SubQuery는 web3.0의 미래를 위해 전 세계의 데이터를 변환하고 쿼리하는 데 도움이 됩니다.**

![](https://miro.medium.com/max/1000/1*IHstJG-hBwQzicLdWkGR5w.png)

Web 3.0의 꿈이 실현되기 위해서는 최종 사용자를 위한 중앙 집중식 네트워크보다 (빠르지는 않더라도) 빨라야 합니다.

그렇기 때문에 사용자가 체인 전체에서 인덱서를 실행하여 GraphQL로 쿼리할 수 있는 데이터 세트를 구축할 수 있는 오픈 소스 프로젝트인 SubQuery를 발표하게 된 것을 매우 자랑스럽게 생각합니다. 이 도구 모음에는 인덱서가 자체 네트워크를 트래버스하고 집계하는 방법을 정의하여 프로젝트가 자체 SubQuery 프로젝트를 생성할 수 있도록 하는 명령줄 인터페이스가 포함되어 있습니다. 네트워크를 인덱싱하고 GraphQL 쿼리를 지원하는 SubQuery 노드 패키지가 있습니다. 이러한 도구의 도움으로 누구나 쉽게 쿼리를 만들고 실행할 수 있습니다.

**SubQuery Github 리포지토리의 예를 따르면 바로 시작할 수 있습니다. [_https://github.com/OnFinality-io/subql_](https://github.com/OnFinality-io/subql)**

또한 [SubQuery 문서](https://doc.subquery.network/)를 읽거나 새 웹사이트[https://subquery.network/](https://subquery.network/)를 방문하여 자세히 알아볼 수 있습니다.

![](https://miro.medium.com/max/1000/1*3oA1Hvns1vrImTsmowO_Jw.png)

우리는 이 제품을 기반으로 더 성능과 확장성을 갖춘 관리형 호스팅 서비스를 구축하는 데 집중할 것입니다. 업로드된 SubQuery 프로젝트에서 강력한 프로덕션화된 SubQuery 노드를 구축할 신뢰할 수 있는 공용 인프라를 제공할 것입니다. 그런 다음 서비스는 체인 상태를 인덱싱하고 유지하며 자체 호스팅 구현을 대체할 수 있는 프로덕션 GraphQL 끝점을 제공합니다. 우리는 다른 모든 사람들이 자신의 dApp을 구축하고 성장시키는 데 집중할 수 있도록 이것에 집중할 것입니다.

이것이 준비되면, 우리의 마지막 단계는 Polkadot에 대한 자체 체인(파라체인 가능성이 있음) 을 구축하여 SubQuery 비즈니스를 토큰화하는 것입니다. 기업 및 소비량이 많은 사용자를 위한 유사한 청구 모델을 제공하지만(소비 수준이 있는 구독 플랜) 이 데이터를 체인에 저장하여 모든 사람에게 투명하게 만들고 참여 당사자는 인센티브로 보상을 걸 수 있습니다. 우리는 체인에 안정성을 제공하고 커뮤니티가 우리의 방향과 로드맵에 영향을 미칠 수 있도록 거버넌스 토큰을 발행할 것입니다.

비트코인이 처음 시작된 이후 10년이 넘는 개발에도 불구하고 중앙 집중식 네트워크는 여전히 주류입니다. 이는 주로 네트워크 액세스 및 쓰기 속도와 비용 때문입니다. 이더리움은 분산형 스마트 계약으로 큰 발전을 이루었지만(결과적으로 그래프는 매우 성공적인 인프라입니다), 핵심 네트워크는 거래 비용을 줄이기 위해 고군분투하고 있습니다.

우리는 Polkadot의 잠재력을 일찍 보았고 처음부터 거기에 우리의 노력을 집중하는 것이 당연하다고 느꼈습니다. Ethereum의 거버넌스, 포크, 상호 운용성 문제 등을 해결합니다. Polkadot의 핵심 전제는 멀티체인 상호운용성을 활용할 개발자, 사용자 및 비즈니스의 번창하는 커뮤니티를 만드는 것입니다. 커뮤니티는 데이터를 안정적으로 빠르게 찾고 소비할 수 있는 서비스가 필요합니다.

Polkadot의 고유한 아키텍처는 우리가 하나의 네트워크에 집중한 다음 여러 현재 및 미래의 체인을 쉽게 지원할 수 있음을 의미합니다. 지금 이 노력을 기울이면 Polkadot이 아직 개발 중이더라도 차세대 블록체인 개발자가 차세대 대형 dApp을 만들 수 있도록 도울 준비가 되어 있습니다.

SubQuery는 블록체인 팀과 사용자가 노드를 시작하고 광범위한 블록체인 프로토콜에 액세스할 수 있는 인프라 SaaS 플랫폼인 OnFinality의 팀에 의해 구축됩니다. API 공유 노드 서비스와 인프라 관리 또는 프로토콜 팀의 CI/CD 테스트 파이프라인의 일부로 사용할 수 있는 전용 노드를 포함한 일련의 공생 서비스가 있습니다. 우리는 최고의 Polkadot/Substrate 팀과 관계를 맺고 있으며 Substrate/Polkadot 네트워크를 위한 관리형 인프라 호스팅에 대한 전문 지식과 복잡한 인프라 프로젝트를 제공하고 프로덕션 사용을 위해 호스팅할 수 있는 능력을 보유하고 있습니다.

**Sam Zou —** CEO ([LinkedIn](https://www.linkedin.com/in/sam-zou-5b8169a/))

인프라 및 클라우드 서비스 설계를 전문으로 하는 20년 이상의 IT 경험을 가진 기업가, 투자자

**Ian He —** Head of Protocol ([LinkedIn](https://www.linkedin.com/in/yin-he-7a266345/))

Blockchain Architect, polkadot-js의 기고자, Substrate 기술의 얼리 어답터이자 첫 번째 Polkadot 해커톤에서 2위를 차지했습니다.

**James Xu —** Solutions Architect ([LinkedIn](https://www.linkedin.com/in/zhexu/))

하부 구조 & 애플리케이션 설계자, 수상 경력에 빛나는 소프트웨어 엔지니어.

**James Bayly** — 사업 개발 책임자 ([LinkedIn](https://www.linkedin.com/in/james-bayly/))

[SubQuery Github 저장소](https://github.com/OnFinality-io/subql)에서 시작하세요.

[SubQuery 문서](https://doc.subquery.network/) 읽기

[새로운 웹사이트 방문](https://subquery.network/)

우리를 따라 오세요:

- [Telegram](https://t.me/subquerynetwork)
- [Twitter](https://twitter.com/subquerynetwork)
- [Matrix](https://matrix.to/#/%23subquery:matrix.org)
- [LinkedIn](https://www.linkedin.com/company/subquery)
