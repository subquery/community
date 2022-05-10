# 2021년 11월 요약

![](https://miro.medium.com/max/1400/1*qzKzZnWY2ao3tiffwwugXQ.png) **_이번 달은 모두 실행에 관한 것입니다_**

SubQuery의 최신 월간 업데이트에 오신 것을 환영합니다. 특히 이 업데이트는 커뮤니티에서 일어나는 모든 흥미로운 일들로 가득합니다.

## SubQuery Network

### SubQuery to launch on Acala

![](https://miro.medium.com/max/600/0*SJ1TWt1sGwUWqvuI.gif) 커뮤니티 콜에서 마침내 SubQuery와 SQT 토큰이 Acala와 함께 출시되는 최초의 외부 애플리케이션 및 토큰이 될 것이라고 발표했습니다.

우리는 Polkadot에 구축된 선도적인 DeFi 프로토콜을 출시하여 Acala와의 기존 파트너십을 강화하기로 결정하기 전에 다양한 옵션을 고려했습니다. Acala와 함께 출시하기로 결정한 세 가지 주요 이유는 커뮤니티 액세스, 도메인/기술적 우수성 및 기존의 강력한 관계였습니다.

James는 이 결정과 파트너십에 대한 광범위한 인터뷰를 위해 Acala의 Bette Chen과 함께 했습니다. 여기에는 왜 Acala와 SubQuery가 맺어질 수 밖에 없었는지에 대한 세부 사항도 포함됩니다.

[여기에서 이 발표에 대해 자세히 읽어보세요.](https://blog.subquery.network/blogs/20211125-subquery-network-acala.html)

### Significant Development on the SubQuery Network

비록 우리가 SubQuery 네트워크에서 열심히 일하고 있지만, 여전히 2022년 1분기 테스트 네트워크 출시를 향해 서두르고 있습니다.  우리는 스마트 계약과 토큰 경제 모델을 개선하는 데 큰 진전을 이뤘습니다. 곧 이에 대해 더 많은 정보를 공유할 수 있기를 기대합니다.

## Core Product Development

### Scaling our Hosted Service

SubQuery Projects has been a recipient of some explosive growth over the past month as [thousands of academy participants](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html) have created even more projects in our hosted service ([project.subquery.network](https://project.subquery.network/)) in the space of a few weeks.

우리는 호스팅 서비스에 배포된 2,000개 이상의 프로젝트라는 이정표를 넘었고 결과적으로 호스팅 서비스를 확장하는 것이 최우선 과제였습니다. 이제 엔터프라이즈 고객에게 성능과 안정성을 개선하기 위한 전용 리소스를 제공합니다.

If you would like to upgrade your SubQuery project to receive dedicated resourcing, contact us at [sales@subquery.network](mailto:sales@subquery.network).

### Supporting External Chain Type Files in our Project Manifest

In November we launched [**version 0.2.0**](https://doc.subquery.network/create/manifest/) of our project manifest file (`project.yaml`). 이 새 버전은 개발자에게 고객이 요청한 다양한 개선 사항을 제공합니다.

가장 중요한 것은 이제 사용자 정의 기질 체인을 인덱싱할 때 모든 사용자 정의 유형이 포함된 체인 유형 정의 파일을 참조할 수 있다는 것입니다. 이를 통해 Kusama의 모든 파라체인을 포함하여 모든 기판 기반 체인에 새 SubQuery 프로젝트를 빠르게 연결할 수 있습니다.

[이 새로운 기능에 대한 자세한 내용은 여기에서 읽을 수 있습니다](https://blog.subquery.network/blogs/20211105-november-technical-update.html#support-for-external-chain-type-files-in-project-manifest).

### Moonriver EVM Support

![](https://miro.medium.com/max/600/0*B27QVtvcR6nXA9ff.gif)

이전에 발표한 바와 같이 SubQuery에서 Moonbeam 및 Moonriver 네트워크에 대한 지원을 구현했습니다. 11월에 시작하는 데 필요한 모든 개발자 리소스에 대한 후속 조치를 취했습니다.  [여기에서 지침을 읽을 수 있습니다](https://blog.subquery.network/blogs/20211105-november-technical-update.html#moonbeam-evm-support).

Additionally, Scott was able to present this entire workflow to the [Moonbuilders workshop](https://www.crowdcast.io/e/moonbuilders-ws/10) for everyone to watch. 우리가 후원하는 Gitcoin Grants를 위한 완벽한 타이밍입니다(자세한 내용은 아래 참조).

## Community

### Gitcoin Hackathon

Hot on the heels of the overwhelming success of the SubQuery Academy’s _Hero Course_, we were proud to announce that we would be providing our first hackathon opportunity for all developers via [Gitcoin Grants Round 12](https://gitcoin.co/hackathon/gr12/?org=subquery) starting on December 1st.

SubQuery는 총 상금이 $34,000인 5개의 현상금을 제안했습니다.

- [Create a unified block explorer that combines Substrate and EVM insights from Moonbeam and Astar into one easy to use application](https://gitcoin.co/issue/subquery/grants/1) — US$12,000 [Sponsored by Moonbeam and Astar]
- [Work with SubQuery and the DeFi hub at Karura/Acala to build a dashboard that’s inspired by Zapper.fi or defisaver.com](https://gitcoin.co/issue/subquery/grants/2) — US$8,000 [Sponsored by Acala]
- [Create a staking dashboard that shows the best staking opportunities across Polkadot and its various parachains](https://gitcoin.co/issue/subquery/grants/3) — US$3,000
- [Build a marketplace explorer for all RMRK protocol based NFTs](https://gitcoin.co/issue/subquery/grants/4) — US$2,000
- [Extend the @subql/node service to index data from another layer 1 chain](https://gitcoin.co/issue/subquery/grants/5) — US$12,000

[여기에서 이러한 현상금에 대해 자세히 알아볼 수 있습니다.](https://blog.subquery.network/blogs/20211120-gitcoin12-hackathon.html)

### Analysis into the Polkadot Crowdloans

SubQuery는 Polkadot의 선도적인 데이터 인덱싱 서비스이며 지난 주에 우리는 대다수의 크라우드 론 대시보드, 기여 앱 및 분석 웹 사이트에 대한 수백만 건의 일일 요청을 지원했습니다. Teams like [**SubVis**](https://www.subvis.io/), [**Parallel Finance**](https://parallel.fi/), and [**DotMarketCap**](https://dotmarketcap.com/) rely on SubQuery to provide real-time data on the crowdloans and other on-chain data directly to their websites and apps.

![](https://miro.medium.com/max/60/0*HfsoOwpat76ip6Jg?q=20)

![](https://miro.medium.com/max/700/0*HfsoOwpat76ip6Jg)

우리는 최근에 Polkadot crowdloans(특히 Acala와 Moonbeam 간의 타이틀 싸움)에 대해 자세히 알아보았습니다. [아직 읽지 않았다면 여기에서 읽어야 합니다](https://blog.subquery.network/blogs/20211124-polkadot-crowdloans.html).

## Other things you might have missed

- We’re working closely with the new team at [Web3Go](https://www.web3go.xyz/) to [provide data anaysis tools to the SubQuery ecosystem.](https://blog.subquery.network/customer_announcements/20211110-web3go.html)
- [Brave New Coin의 팟캐스트에서 Sam과 James의 이야기를 들어보세요](https://bravenewcoin.com/insights/podcasts/subquery-connecting-the-dots-on-polkadot).
- James talked to Acala’s Brett Kolodny to talk about how [Acala use SubQuery in their stack](https://www.youtube.com/watch?v=Wbxwj8K67Lw).
- Siqi, our China representative, [talked to Acala Network and Polkaworld about the latest in web3](https://www.huoxing24.com/live/24313016).
- We released modules [1](https://doc.subquery.network/academy/herocourse/module1/) to [4](https://doc.subquery.network/academy/herocourse/module4/) of our [SubQuery Hero Course](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
- James also talked to Jacky to explore Litentry’s plans [for a future DID protocol](https://www.youtube.com/watch?v=Rqlpo9QIVyk).

As always, please [join our social channels](https://linktr.ee/subquerynetwork) (especially our [Discord](https://discord.com/invite/subquery)) to stay updated on our latest news and announcements.

James, Sam, and the SubQuery 팀

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
