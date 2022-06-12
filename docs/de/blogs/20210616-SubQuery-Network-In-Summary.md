# SubQuery-Netzwerk - Zusammenfassung

**How does the SubQuery Network work? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)**

Today we’re going to talk about how the SubQuery Network works at a high level.

## Teilnehmer

![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Participants in the SubQuery Network

There are three types of participants in the SubQuery Network:

- **Verbraucher**: Verbraucher stellen Anfragen an das SubQuery-Netzwerk nach bestimmten Daten und zahlen einen beworbenen Betrag von SQT
- **Indexer**: Indexer hosten SubQuery-Projekte in ihrer eigenen Infrastruktur und führen sowohl den Knoten als auch den Abfragedienst aus, um Daten zu indizieren und GraphQL-Anfragen zu beantworten.
- **Delegatoren**: Delegatoren nehmen am Netzwerk teil, indem sie ihre bevorzugten Indexer unterstützen, um Belohnungen zu verdienen

## Indexer, Verbraucher und Abfragen

Let’s start with Indexers, Indexers do a lot of the hard work behind the scenes. The manage hardware, run infrastructure, monitor resources, and choose the right SubQuery projects to index

This takes time and money, but once they have this, Consumers may come and make requests. Consumers will make requests to the SubQuery network for specific data and pay an advertised amount of our token, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Consumers will make requests to the SubQuery network for specific data and pay an advertised amount of our token, SQT.

## Cobb-Douglas Produktionsfunktion

This payment goes into a project revenue pool and at the end of a staking era (28 days) we take this project revenue pool and split it. It’s spit across indexers by something called the Cobb-Douglas production function.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

It’s spit across indexers by something called the Cobb-Douglas production function.

This approach, in simple terms, means that revenue is allocated to competing Indexers as a proportion of both requests answered and amount staked.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Revenue is allocated to competing Indexers as a proportion of both requests answered and amount staked.

In our view, the beauty of this equation is that a rational Indexer must maintain a high level of staked SQT relative to the work they do in order to receive optimal revenue. As a result, we do not need to enforce arbitrary staking requirements because Indexers are incentivised to self-manage and maintain a stake or skin in the game.

## Delegierten

So Indexers are incentivised to both do as much work as possible, and to stake as much as possible to maximise their rewards. This is where delegators come in.

Delegators can delegate their spare SQT to Indexers, each Indexer can publish a _query fee revenue share rate_, and those delegators will be rewarded by a portion of the query fee revenue that the indexer is rewarded in.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Delegators can delegate their spare SQT to Indexers and those delegators will be rewarded by a portion of the query fee revenue that the indexer is rewarded in

The _query fee revenue share rate_ that indexers advertise is locked for each 28 day staking era, and a decrease to it must be advertised for an entire 28 day staking era before coming into force.

Similarly, delegators can remove their delegation amounts at any point, but they will only receive rewards when they have delegated for the entire staking era.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegators will only receive rewards when they have delegated for the entire staking era

## Kauforder

Indexing a project takes time and money, there’s a lot of data on the chain. In order to encourage Indexers to index and support an entirely new SubQuery Project, we plan to implement a market mechanism for Consumers to signal guaranteed revenue to Indexers of new SubQuery Projects.

We’re calling them purchase orders, and Consumers can advertise a contract on chain for a set price and number of requests. Indexers can view this and choose to fill the contracts.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Consumers can advertise a purchase order on chain for a set price and number of requests.

Purchase orders can also be placed on existing SubQuery Projects to attract additional Indexers to improve competition and decrease prices
