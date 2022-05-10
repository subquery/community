# SubQuery 네트워크 - 요약

**How does the SubQuery Network work? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)**

Today we’re going to talk about how the SubQuery Network works at a high level.

## 참가자들

![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Participants in the SubQuery Network

There are three types of participants in the SubQuery Network:

- **소비자**: 소비자는 특정 데이터에 대해 SubQuery 네트워크에 요청하고 광고한만큼의 SQT를 지불합니다.
- **인덱서**: 인덱서는 데이터를 인덱싱하고 GraphQL 요청에 응답하기 위해 노드와 쿼리 서비스를 모두 실행하여 자체 인프라에서 SubQuery 프로젝트를 호스팅합니다.
- **위임자**: 위임자는 자신이 좋아하는 인덱서를 지원하여 네트워크에 참여하여 보상을 받습니다.

## 인덱서, 소비자 및 쿼리

Let’s start with Indexers, Indexers do a lot of the hard work behind the scenes. The manage hardware, run infrastructure, monitor resources, and choose the right SubQuery projects to index

This takes time and money, but once they have this, Consumers may come and make requests. Consumers will make requests to the SubQuery network for specific data and pay an advertised amount of our token, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Consumers will make requests to the SubQuery network for specific data and pay an advertised amount of our token, SQT.

## Cobb-Douglas 생산 함수

This payment goes into a project revenue pool and at the end of a staking era (28 days) we take this project revenue pool and split it. It’s spit across indexers by something called the Cobb-Douglas production function.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

It’s spit across indexers by something called the Cobb-Douglas production function.

This approach, in simple terms, means that revenue is allocated to competing Indexers as a proportion of both requests answered and amount staked.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Revenue is allocated to competing Indexers as a proportion of both requests answered and amount staked.

In our view, the beauty of this equation is that a rational Indexer must maintain a high level of staked SQT relative to the work they do in order to receive optimal revenue. As a result, we do not need to enforce arbitrary staking requirements because Indexers are incentivised to self-manage and maintain a stake or skin in the game.

## 위임자

So Indexers are incentivised to both do as much work as possible, and to stake as much as possible to maximise their rewards. This is where delegators come in.

Delegators can delegate their spare SQT to Indexers, each Indexer can publish a _query fee revenue share rate_, and those delegators will be rewarded by a portion of the query fee revenue that the indexer is rewarded in.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Delegators can delegate their spare SQT to Indexers and those delegators will be rewarded by a portion of the query fee revenue that the indexer is rewarded in

The _query fee revenue share rate_ that indexers advertise is locked for each 28 day staking era, and a decrease to it must be advertised for an entire 28 day staking era before coming into force.

Similarly, delegators can remove their delegation amounts at any point, but they will only receive rewards when they have delegated for the entire staking era.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegators will only receive rewards when they have delegated for the entire staking era

## Purchase Orders

Indexing a project takes time and money, there’s a lot of data on the chain. In order to encourage Indexers to index and support an entirely new SubQuery Project, we plan to implement a market mechanism for Consumers to signal guaranteed revenue to Indexers of new SubQuery Projects.

We’re calling them purchase orders, and Consumers can advertise a contract on chain for a set price and number of requests. Indexers can view this and choose to fill the contracts.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Consumers can advertise a purchase order on chain for a set price and number of requests.

Purchase orders can also be placed on existing SubQuery Projects to attract additional Indexers to improve competition and decrease prices
