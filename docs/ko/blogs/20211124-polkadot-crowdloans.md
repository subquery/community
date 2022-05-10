# Polkadot Crowdloans 살펴보기(1부)

![](https://miro.medium.com/max/2400/1*JvR4YsstF6OHG3mTr_1Seg.png)

**SubQuery는 Parachain 경매 데이터를 파헤칩니다.**

Parachain 경매의 첫 번째 라운드가 완료된 Polkadot에 대한 거대한 이정표가 막 달성되었습니다. 지난 몇 주 동안 우리는 Moonbeam과 Acala가 서로 첫 번째 파라체인 슬롯을 두고 치열하게 싸우는 것을 목격했습니다. 치열한 경쟁 후에 Acala가 경매의 승자가 되었습니다. 이 현대 촛대 경매 방식에서 승자가 어떻게 선택되는지 자세히 알고 싶다면 [Dan Reecer(Acala) 의 뛰어난 요약을 참고하세요](https://twitter.com/danreecer_/status/1364646604024786949).

SubQuery는 Polkadot의 선도적인 데이터 인덱싱 서비스이며 지난 주에 우리는 대다수의 크라우드 론 대시보드, 기여 앱 및 분석 웹 사이트에 대한 수백만 건의 일일 요청을 지원했습니다. [SubVis](https://www.subvis.io/), [Parallel Finance](https://parallel.fi/) 및 [DotMarketCap](https://dotmarketcap.com/)과 같은 팀은 SubQuery를 사용하여 크라우드론에 대한 실시간 데이터와 기타 온체인 데이터를 웹사이트와 앱에 직접 제공합니다.

오늘 우리는 모든 단일 기여 이면의 데이터를 살펴봄으로써 첫 번째 경매에서 일어난 일에 대해 조금 더 탐구할 것입니다.

![](https://miro.medium.com/max/2400/0*Pcp3KJvC5eyP2KQ3)

첫째, 첫 번째 크라우드론의 시작부터 경매가 종료될 때까지(13일 조금 넘게), 68,000개 미만의 주소에서 모든 크라우드론에 8,750만 DOT가 기부되었습니다. 기본적으로 68,000개의 주소가 187,000개 이상의 기부금을 모아 2주 동안 35억 4000만 달러 이상을 모금했습니다. 이는 경이적인 금액이며, 개인(및 단체)이 선호하는 네트워크를 지원하기 위해 2년 동안 DOT를 잠그는 데 얼마나 진심인지를 보여주는 큰 지표입니다. 약정된 자금은 Polkadot의 전체 순환 공급량의 거의 10%에 해당합니다.

![](https://miro.medium.com/max/2400/0*-ovBJnjxAKfeB81Y)

투자자들의 관심은 경매 시작과 함께 처음 몇시간동안 기여금(갯수 기준)이 급증하고 마감 직전에도 마찬가지로 보여준 것처럼 엄청나게 폭발적이었습니다. 크라우드 론의 첫날에는 34,000개 이상의 기여가 있었고 막판 러시는 2시간 동안 5,618개의 기여가 이뤄졌습니다.

아래 그래프에서 볼 수 있듯이 Moonbeam은 경매 전체에서 단연 가장 많은 참여를 받았으며, Acala보다 21,333개 이상의 고유 주소에서 거의 23,984개의 기여를 받았습니다.

![](https://miro.medium.com/max/2400/0*MSHfjnu7KmMvDmnY)

Acala는 분명히 승자로 앞서 나갔는데, 어떻게 이런 결과가 나왔을까요? 기여자의 수와 기여도는 평균적으로 Acala의 기여자가 Moonbeam보다 훨씬 더 많이 기여했다는 사실을 가립니다. 그 결과 아래의 그래프에서 보여지는 것처럼 총 기여된 가치 측면에서는 경매기간 동안 Acala가 Moonbeam보다 약간 앞서 있었음을 볼 수 있습니다.

![](https://miro.medium.com/max/2400/0*YbV-ReqSwfimUsbO)

가치별 기여의 대부분은 두 개의 개별 이벤트에서 발생했으며, 이 두 가지 중요한 이벤트는 첫 번째 경매의 결과를 변경에 중요한 영향을 미쳤습니다.

![](https://miro.medium.com/max/2400/0*jmRsZ7kxEYAWYaUq)

첫 번째는 11월 11일 UTC 오후 1시 25분부터 5분 간격으로 발생했습니다. [Binance의 Crowdloan](https://www.binance.com/en/dotslot) 주소에 연결된 단일 주소는 총 1,900만 DOT(US$7억6,890만) 이상의 7번의 거래를 만들었습니다.  첫 번째는 Moonbeam에 대한 가장 큰 단일 기여로 9백만 DOT(US$3억6천4백만)가 넘었으며, 그 다음은 평균 34초 간격으로 6개의 다른 기여였습니다. 이 주소는 또한 Acala(260만 DOT), Clover(210만 DOT), Astar(200만 DOT) 및 Manta(170만 DOT) 에 상당한 기여를 했습니다.

두 번째 중요한 이벤트는 단일 계정이 Acala에 여러 중요한 기여를 한 11월 13일 오전 10시 40분부터 75분 간격으로 발생했습니다. 이 계정은 [Acala의 LCDOT 주소](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)를 나타내며 Acala는 모든 유동 스테이킹 DOT를 크라우드론에 배포했습니다. 첫 번째는 일부 테스트 거래였고, 그 다음에는 550만 DOT(USD$2억2250만) 중 가장 큰 거래를 포함하는 주요 거래가 있었습니다. 결국 Acala의 LCDOT 펀드는 경매에 3,758개의 기여를 했습니다.

![](https://miro.medium.com/max/2400/0*GTJviXqhPmRIIf73)

이러한 일련의 거래는 궁극적으로 Acala를 Moonbeam 이상으로 밀어붙일 수 있었고, Acala에 블록의 63.11%의 승률을 제공할 수 있었습니다. 무작위 당첨 블록이 ~56시간 후 블록 7,718,090에서 선택되었을 때 Acala는 Moonbeam보다 ~38,000 DOT(USD$150만) 앞서 있었습니다.

이 경매의 놀라운 점 중 하나는 Acala와 Moonbeam 사이에서 6600만 DOT(USD $26.7억) 이상을 모금한 후에도 무작위로 선택된 블록의 승률이 전체 금액의 0.056%에 불과했다는 것입니다.

그렇다면 누가 크라우드 론에 기여했을까요? 첫째, 모두가 기여한 중앙값은 12 DOT(USD$485.64)였으며 전체 기여의 47%는 10 DOT 미만, 88%는 100 DOT(US$4,047.00) 미만이었습니다. 이것은 개인 기여자의 극도로 강력하고 강력한 커뮤니티를 분명히 보여주며, 이는 파라체인 경매에 대한 소매상의 관심에 대한 증거입니다.

모든 사람들이 가장 궁금해하는 것은 사람들의 네트워크가 누구냐는 것입니다. 소규모 기여자의 비율이 가장 큰 네트워크는 무엇입니까? 기부 규모 분석에 대한 다음 통찰력을 위해 일부 알려진 거래소 또는 크라우드 론 계정(부록 목록)을 제외했습니다. 일부 네트워크는 거의 대부분 소규모 자금으로만 모금되었습니다 (SubGame Gamma 및 Darwinia). 반면, 대형 투자자(>5,000 DOT)는 Moonbeam의 크라우드론(가치 기준)의 68%, Parallel Finance의 62%, Clover의 58%를 차지합니다.

![](https://miro.medium.com/max/2400/0*ztRnFrVfJ2aTlMiU)

분명히 우리는 여기서 Moonbeam과 Acala를 보았고, 1,000 DOT($40,470)이하 기여자들이 Acala는 33%인 반면, Moonbeam은 21%로 보다 더 많은 소액 펀딩의 참여가 이뤄졌음을 알 수 있습니다.

![](https://miro.medium.com/max/2400/0*ge-2XDPgddj-J07V)

_"사람들의 네트워크"에 대한 이전 통찰력은 다른 기여를 하나로 통합하는 알려진 기여자를 제외하고 얻어진 것입니다. SubQuery는 단지 소수만을 식별했습니다. 여기에서 공유된 데이터 중에는 우리가 놓친 중요한 애그리게이터가 분명히 있을 것입니다._

그렇다면 사람들은 어디로부터 기여합니까? SubQuery는 [Acala의 LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)가 엄청난 성공을 거두었으며 전체 기여의 거의 28%를 차지했음을 확인했습니다. 2,400만 DOT(미화 9억 7,100만 달러) 이상이 Acala에 직접 기부되었기 때문에, 이 경매는 그것 없이는 다른 방식으로 진행되었을 것입니다.

또한, [바이낸스](https://www.binance.com/en/dotslot)는 대부분의 참가자에게 27%의 기여로 인기 있는 참여 경로임이 입증되었습니다. [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)는 11%, [Kraken](https://www.kraken.com/learn/parachain-auctions)은 7%로 유의미한 기여를 하는 경로였습니다. 중앙화 거래소들은 여전히 ​​선호되는 참여 방법입니다.

## SubQuery 네트워크 정보

SubQuery는 Layer-1 블록체인(Polkadot)과 분산 애플리케이션 간의 인덱싱 및 쿼리 레이어를 지원하는 Polkadot의 선도적인 데이터 제공업체입니다. SubQuery의 데이터 서비스는 현재 대부분의 Polkadot 및 Kusama 크라우드론 및 파라체인 경매 웹사이트에서 사용되고 있습니다.

SubQuery의 프로토콜은 SubQuery SDK를 사용하여 블록체인 데이터 고유성을 추상화하여 개발자가 사용자 지정 백엔드 기술에 대한 노력을 불필요하게 낭비하지 않고 핵심 제품 배포에 집중할 수 있도록 합니다.

​​​​[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)  |  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [Matrix](https://matrix.to/#/#subquery:matrix.org)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## 부록

모든 USD 가격은 1차 경매 종료 시 가격 = USD$40.47

모든 데이터는 Polkadot Crowdloans 시작부터 11월 18일 11.57AM UTC(블록 7,756,107)의 첫 번째 경매 완료까지입니다.

제외된 크라우드론 사이트

-   [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
-   [Binance Crowdloan](https://www.binance.com/en/dotslot)
-   [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
-   [Kraken Crowdloan](https://www.kraken.com/learn/parachain-auctions)
-   [https://pos.dog/](https://pos.dog/)
-   [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
