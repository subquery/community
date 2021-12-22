# 2021년 11월 요약

![](https://miro.medium.com/max/1400/1*qzKzZnWY2ao3tiffwwugXQ.png) **_이번 달은 실행에 관한 모든 것입니다_**

SubQuery의 최신 월간 업데이트에 오신 것을 환영합니다. 특히 이 업데이트는 커뮤니티에서 일어나는 모든 흥미로운 일들로 가득합니다.

# SubQuery 네트워크

## Acala에서 실행할 SubQuery

![](https://miro.medium.com/max/600/0*SJ1TWt1sGwUWqvuI.gif) 커뮤니티 콜에서 마침내 SubQuery와 SQT 토큰이 Acala와 함께 출시되는 최초의 외부 애플리케이션 및 토큰이 될 것이라고 발표했습니다.

우리는 Polkadot에 구축된 선도적인 DeFi 프로토콜을 출시하여 Acala와의 기존 파트너십을 심화하기로 결정하기 전에 다양한 옵션을 고려했습니다. Acala와 함께 출시하기로 결정한 세 가지 주요 이유는 커뮤니티 액세스, 도메인/기술적 우수성 및 기존의 강력한 관계였습니다.

James는 이 결정과 파트너십에 대한 광범위한 인터뷰를 위해 Acala의 Bette Chen을 따라갔습니다. 여기에는 왜 Acala와 SubQuery가 하늘에서 맺어진 짝인지에 대한 세부 사항이 포함됩니다.

[여기에서 이 발표에 대해 자세히 읽어보세요.](https://blog.subquery.network/blogs/20211125-subquery-network-acala.html)

## SubQuery 네트워크의 상당한 발전

비록 우리가 SubQuery 네트워크에서 열심히 일하고 있고 여전히 2022년 1분기 테스트 네트워크 출시를 향해 서두르고 있습니다.  우리는 스마트 계약과 토큰 경제 모델을 개선하는 데 큰 진전을 이뤘습니다. 곧 이에 대해 더 많은 정보를 공유할 수 있기를 기대합니다.

# 핵심 제품 개발

## 호스팅 서비스 확장

[수천 명의 아카데미 참가자](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)가 몇 주 만에 호스팅 서비스([project.subquery.network](https://project.subquery.network/))에서 훨씬 더 많은 프로젝트를 생성함에 따라 SubQuery 프로젝트는 지난 한 달 동안 폭발적인 성장을 보였습니다.

우리는 호스팅 서비스에 배포된 2,000개 이상의 프로젝트라는 이정표를 넘었고 결과적으로 호스팅 서비스를 확장하는 것이 최우선 과제였습니다. 이제 엔터프라이즈 고객에게 성능과 안정성을 개선하기 위한 전용 리소스를 제공합니다.

전용 리소스를 받기 위해 SubQuery 프로젝트를 업그레이드하려면 [sales@subquery.network](mailto:sales@subquery.network)로 문의하십시오.

## 프로젝트 매니페스트에서 외부 체인 유형 파일 지원

11월에 프로젝트 매니페스트 파일(`project.yaml`) [**버전 0.2.0**](https://doc.subquery.network/create/manifest/)을 출시했습니다. 이 새 버전은 개발자에게 고객이 요청한 다양한 개선 사항을 제공합니다.

가장 중요한 것은 이제 사용자 정의 기질 체인을 인덱싱할 때 모든 사용자 정의 유형이 포함된 체인 유형 정의 파일을 참조할 수 있다는 것입니다. 이를 통해 Kusama의 모든 파라체인을 포함하여 모든 기판 기반 체인에 새 SubQuery 프로젝트를 빠르게 연결할 수 있습니다.

[이 새로운 기능에 대한 자세한 내용은 여기에서 읽을 수 있습니다](https://blog.subquery.network/blogs/20211105-november-technical-update.html#support-for-external-chain-type-files-in-project-manifest).

## Moonriver EVM 지원

![](https://miro.medium.com/max/600/0*B27QVtvcR6nXA9ff.gif)

이전에 발표한 바와 같이 SubQuery에서 Moonbeam 및 Moonriver 네트워크에 대한 지원을 구현했습니다. 11월에 시작하는 데 필요한 모든 개발자 리소스에 대한 후속 조치를 취했습니다.   [여기에서 지침을 읽을 수 있습니다](https://blog.subquery.network/blogs/20211105-november-technical-update.html#moonbeam-evm-support).

또한 Scott은 모든 사람이 볼 수 있도록 이 전체 워크플로를 [Moonbuilders 워크숍](https://www.crowdcast.io/e/moonbuilders-ws/10)에 발표할 수 있었습니다. 우리가 후원하는 Gitcoin Grants를 위한 완벽한 타이밍입니다(자세한 내용은 아래 참조).

# 커뮤니티

## Gitcoin 해커톤

SubQuery Academy의 _Hero Course_의 압도적인 성공에 힘입어 우리는 12월 1일부터 [Gitcoin Grants Round 12](https://gitcoin.co/hackathon/gr12/?org=subquery)를 통해 모든 개발자에게 첫 해커톤 기회를 제공할 것임을 발표하게 된 것을 자랑스럽게 생각합니다.

SubQuery는 총 상금이 $34,000인 5개의 현상금을 제안했습니다.

-   [Moonbeam 및 Astar의 Substrate 및 EVM 통찰력을 사용하기 쉬운 하나의 애플리케이션으로 결합하는 통합 블록 탐색기 생성](https://gitcoin.co/issue/subquery/grants/1) — US$12,000 [Sponsored by Moonbeam and Astar]
-   [Karura/Acala의 SubQuery 및 DeFi 허브와 협력하여 Zapper.fi 또는 defisaver.com에서 영감을 받은 대시보드 구축](https://gitcoin.co/issue/subquery/grants/2) — US$8,000 [Acala 후원]
-   [Polkadot 및 다양한 파라체인 전반에 걸쳐 최고의 스테이킹 기회를 보여주는 스테이킹 대시보드 생성](https://gitcoin.co/issue/subquery/grants/3) — US$3,000
-   [모든 RMRK 프로토콜 기반 NFT용 마켓플레이스 탐색기 구축](https://gitcoin.co/issue/subquery/grants/4) — US$2,000
-   [@subql/node 서비스를 확장하여 다른 레이어 1 체인의 데이터 인덱싱](https://gitcoin.co/issue/subquery/grants/5) — US$12,000

[여기에서 이러한 현상금에 대해 자세히 알아볼 수 있습니다.](https://blog.subquery.network/blogs/20211120-gitcoin12-hackathon.html)

## Polkadot 크라우드론 분석

SubQuery는 Polkadot의 선도적인 데이터 인덱싱 서비스이며 지난 주에 우리는 대다수의 크라우드 론 대시보드, 기여 앱 및 분석 웹 사이트에 대한 수백만 건의 일일 요청을 지원했습니다. [**SubVis**](https://www.subvis.io/), [**Parallel Finance**](https://parallel.fi/) 및 [**DotMarketCap**](https://dotmarketcap.com/)과 같은 팀은 SubQuery를 사용하여 크라우드론에 대한 실시간 데이터와 기타 온체인 데이터를 웹사이트와 앱에 직접 제공합니다.

![](https://miro.medium.com/max/60/0*HfsoOwpat76ip6Jg?q=20)

![](https://miro.medium.com/max/700/0*HfsoOwpat76ip6Jg)

우리는 최근에 Polkadot crowdloans(특히 Acala와 Moonbeam 간의 타이틀 싸움)에 대해 자세히 알아보았습니다.  [아직 읽지 않았다면 여기에서 읽어야 합니다](https://blog.subquery.network/blogs/20211124-polkadot-crowdloans.html).

# 당신이 놓쳤을 수도 있는 다른 것들

-   우리는 [Web3Go](https://www.web3go.xyz/)의 새로운 팀과 긴밀히 협력하여 [SubQuery 생태계에 데이터 분석 도구를 제공하고 있습니다](https://blog.subquery.network/customer_announcements/20211110-web3go.html).
-   [Brave New Coin의 팟캐스트에서 Sam과 James의 이야기를 들어보세요](https://bravenewcoin.com/insights/podcasts/subquery-connecting-the-dots-on-polkadot).
-   James는 Acala의 Brett Kolodny와 대화하여 [Acala가 스택에서 SubQuery를 사용하는 방법](https://www.youtube.com/watch?v=Wbxwj8K67Lw)에 대해 이야기했습니다.
-   중국 대표인 Siqi는 [최신 web3에 대해 Acala Network 및 Polkaworld와 이야기했습니다](https://www.huoxing24.com/live/24313016).
-   [SubQuery Hero Course](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)의 모듈 [1](https://doc.subquery.network/academy/herocourse/module1/)~[4](https://doc.subquery.network/academy/herocourse/module4/)를 출시했습니다.
-   James는 또한 Jacky와 대화하여 Litentry의 [향후 DID 프로토콜](https://www.youtube.com/watch?v=Rqlpo9QIVyk) 계획을 살펴보았습니다.

언제나처럼 [소셜 채널](https://linktr.ee/subquerynetwork)(특히 [Discord](https://discord.com/invite/subquery))에 가입하여 최신 뉴스와 공지 사항을 확인하세요.

James, Sam, and the SubQuery 팀

[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)  |  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
