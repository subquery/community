# SubQuery는 고객에게 엔터프라이즈 지원을 제공합니다.

![](https://miro.medium.com/max/1400/1*z_StqAT5KeaxQLBCm-xpRQ.jpeg)

커뮤니티가 커짐에 따라 매일 수백 개의 배포가 발생하고 호스팅 서비스에 대한 트래픽이 기하급수적으로 증가하고 있습니다. 그러나 SubQuery의 팀은 이 문제에 대처하고 있으며 [호스팅 서비스](https://projects.subquery.network/)를 무료로 유지하면서 고객의 전례 없는 도구 수요를 충족하기 위해 서비스를 확장하고 있습니다.

많은 고객이 이제 SubQuery를 사용하여 프로덕션 앱에 미션 크리티컬 데이터를 제공합니다. 이러한 고객은 가장 큰 지갑([Nova](https://novawallet.io/) 및 [Fearless](https://fearlesswallet.io/)), 스캐너([Subscan](https://www.subscan.io/), [SubVis](https://www.subvis.io/) 및 [DotMarketCap](https://dotmarketcap.com/)), NFT 플랫폼([Kodadot](https://kodadot.xyz/) 및 [Yuuser](https://yuser.co/)) 등을 대표합니다. 이것들은 Polkadot 커뮤니티가 매일 사용하는 거대한 응용 프로그램이며 항상 온라인 상태여야 합니다.

우리가 호스팅하는 서비스의 성능과 안정성은 여기 SubQuery에서 한동안 최우선 순위 목록에 있었습니다. 자매 팀은 Polkadot의 가장 큰 인프라 제공업체인 OnFinality이므로 이 분야에서 풍부한 경험을 보유하고 있습니다. 그 결과, 오늘 우리는 SubQuery를 Polkadot에서 가장 안정적이고 확장 가능하며 성능이 뛰어난 데이터 플랫폼으로 만드는 세 가지 최신 개선 사항을 살펴보겠습니다.

![](https://miro.medium.com/max/1200/1*QckhJzjQqw9czpBMRhXgXQ.gif)

# 전용 데이터베이스

처음에 모든 SubQuery 프로젝트는 비용을 절감하고 서비스를 무료로 유지하기 위해 인프라의 공유 데이터베이스에 배포되었습니다. 그러나 이렇게 하면 대규모 데이터 세트가 포함된 트래픽이 많은 프로젝트가 동일한 데이터베이스에서 호스팅되는 다른 프로젝트를 교살할 수 있습니다.

프로덕션용으로 설계된 프로젝트를 구축하는 경우 SubQuery 클러스터에서 호스팅되는 전용 데이터베이스를 제공하여 다른 사람의 성능 영향을 걱정하지 않고 수천 개의 복잡한 쿼리를 처리하는 데 필요한 모든 리소스를 프로젝트에 제공할 수 있습니다.

이를 업그레이드하려면 sales@subquery.network로 연락해야 합니다. 기존 테이블에서 데이터를 복제하므로 이미 보유한 데이터를 다시 인덱싱하는 데 시간을 할애할 필요가 없으므로 다운타임 없이 마이그레이션이 가능합니다.

# 다중 클러스터 지원

복원력과 안정성은 SubQuery에서 우리에게 모든 것을 의미합니다. 세계의 별도 지역에 중복 클러스터가 있다는 것은 때때로 지역을 오프라인으로 만드는 클라우드 공급자 중단으로부터 신속하게 복구할 수 있음을 의미합니다.

또한 호스팅 서비스에서 SubQuery 프로젝트를 요청할 때 대기 시간의 대부분은 대기 시간에서 발생합니다. 대기 시간은 요청이 세계를 가장 가까운 SubQuery 클러스터로 순환하는 데 걸리는 지점 간 시간이며 일부 원격 지역에서는 최대 1~2초가 소요될 수 있습니다. 전 세계에 여러 클러스터를 보유하면 요청 시간(대기 시간)의 가장 중요한 부분을 줄일 수 있습니다.

동일한 서비스를 제공하는 여러 지역에 여러 클러스터를 구현했습니다. 이 작업에는 이러한 클러스터에서 프로젝트를 배포하고 관리할 수 있는 [SubQuery 프로젝트](https://project.subquery.network/)의 도구도 포함됩니다. 또한 다른 지역의 데이터베이스가 일관성을 유지하도록 하는 프로세스를 구현하여 요청이 어느 클러스터로 이동하든 수신 데이터가 일관되도록 합니다.

# 지능형 라우팅

다른 지역에서 실행 중인 SubQuery 클러스터가 있으면 다음 논리적 단계는 이 기능을 사용자에게 보이지 않게 만드는 것입니다. 사용자는 요청이 어떤 클러스터로 이동할지 결정할 필요가 없습니다. SubQuery는 요청을 가장 가까운 정상 클러스터로 자동 라우팅해야 합니다.  이것이 SubQuery의 지능형 라우팅이 제공하는 것입니다.

우리는 모든 요청에 ​​자동으로 적용되는 지능형 라우팅이 있는 각 프리미엄 고객에게 단일 글로벌 엔드포인트를 제공합니다. 이 서비스에는 상태 확인을 위해 각 클러스터를 지속적으로 ping하고 사용자가 과부하 또는 오프라인 상태인 클러스터로 라우팅되지 않도록 하는 상당한 모니터링이 포함됩니다. 글로벌 엔드포인트는 가장 가까운 클러스터에 대한 각 요청의 라우팅을 최적화하여 사용자가 클러스터에서 최상의 성능을 받을 수 있도록 합니다.

![](https://miro.medium.com/max/1000/0*DNXDiABzli0et1MU)

요약하면 이러한 서비스를 통해 더 많은 고객에게 자신 있게 프리미엄 서비스를 제공할 수 있습니다. 우리는 각 고객과 협력하여 비즈니스와 목표를 이해하고 고객의 요구에 맞는 서비스를 설정합니다. SubQuery는 Polkadot에서 가장 큰 데이터 서비스 제공업체이며 이러한 기능은 Polkadot에서 가장 큰 프로젝트와 동시에 수천 개의 커뮤니티 프로젝트를 지원하는 방법을 보여줍니다.

# SubQuery 네트워크 소개

SubQuery는 Layer-1 블록체인(Polkadot)과 분산 애플리케이션 간의 인덱싱 & 쿼리 레이어를 지원하는 Polkadot의 선도적인 데이터 제공업체입니다. SubQuery의 데이터 서비스는 현재 대부분의 Polkadot 및 Kusama 크라우드론 및 파라체인 경매 웹사이트에서 사용되고 있습니다.

SubQuery의 프로토콜은 SubQuery SDK를 사용하여 블록체인 데이터 고유성을 추상화하여 개발자가 사용자 지정 백엔드 기술에 대한 노력을 불필요하게 낭비하지 않고 핵심 제품 배포에 집중할 수 있도록 합니다.

[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)|  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [Matrix](https://matrix.to/#/#subquery:matrix.org)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
