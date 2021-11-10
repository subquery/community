# SubQuery lanza un mapa de ruta técnico

![](https://cdn-images-1.medium.com/max/800/1*Qcu5mFIs8eJhAXaMpWOlMQ.png)

**SubQuery anuncia hitos clave incluyendo la línea de tiempo TGE**

Hoy publicamos por primera vez nuestro mapa de ruta técnico detallado. El objetivo de SubQuery es ser el proveedor de datos líder en el ecosistema Polkadot y el apoyo que hemos recibido de la comunidad para ayudarnos a darse cuenta de que esta visión ha sido asombrosa. Desde nuestro establecimiento formal a finales de 2020 a través de una [Beca de Web3](https://web3.foundation/), para publicar nuestra primera versión de código abierto en enero de 2021, y [cerrando nuestra Serie A en septiembre](https://subquery.medium.com/series-a-1abed6c1c2af) nos gustaría darle las gracias por todo su apoyo para llevarnos a esta etapa!

A medida que seguimos ganando impulso, ha llegado el momento de compartir más sobre nuestros planes para el futuro, incluida nuestra hoja de ruta técnica. Estamos entusiasmados por cómo la próxima evolución de SubQuery impulsará aún más valor al ecosistema Polkadot y proporcionará más oportunidades para que nuestra comunidad participe en nuestro crecimiento.

## Nuestro Futuro

Mientras SubQuery ya está sirviendo millones de consultas de datos cada día a [más de 60 proyectos en Polkadot & Kusama](https://project.subquery.network/), queríamos garantizar que nuestra próxima fase de crecimiento se desarrollara de forma organizada y controlada.

Por esta razón, creemos que es fundamental que demostremos y probemos completamente la escalabilidad de la SubQuery Network a través de un programa de red de pruebas incentivado. Este proceso también nos permitirá establecer una comunidad de indexadores antes de lanzar públicamente a través de un TGE en marzo de 2022 y nuestro eventual red principal a finales del año próximo.

![](https://cdn-images-1.medium.com/max/800/1*I6mko5xumHAArzGePvEZiQ.jpeg)

Como tal, los resultados clave en nuestro flujo de trabajo se pueden dividir en los siguientes hitos principales.

## ¿Dónde estamos? Medio de Q4 2021

### Soporte EVM para parachains

Pronto lanzaremos [nuestro soporte beta para implementaciones Polkadot de la máquina virtual Ethereum (EVM)](https://medium.com/@subquery/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff). Esto permite a los desarrolladores de Polkadot y Ethereum integrar sin problemas los datos de Substrate y EVM en un solo lugar y consultar a este solo dato usando GraphQL.

SubQuery introducirá filtros más avanzados que otros indexadores, permitiendo el filtrado de transacciones no contratadas, remitentes de transacciones, contratos y argumentos de registro indexados, por lo que los desarrolladores pueden construir una amplia variedad de proyectos que atiendan a sus necesidades específicas de datos.

### Academia de SubQuery

La Academia está diseñada para mejorar las habilidades y capacitar a los desarrolladores en el ecosistema de SubQuery proporcionándoles un programa modular. [Nuestro primer curso en la Academia es el _Curso de Héroe_](https://doc.subquery.network/academy/herocourse/) y fue lanzado el viernes 22 de octubre de 2021.

Dentro de cada módulo del _Curso de Héroe_, hay varias lecciones de 5 a 10 minutos que se entregan por un vídeo grabado. El contenido en vídeo está acompañado de tutoriales, diapositivas, libros y enlaces escritos al repositorio de código de GitHub terminado.

El curso está diseñado para hacer que un desarrollador que no sepa nada acerca de SubQuery a convertirse en un experto en la construcción de una fuente de datos de SubQuery para su nueva aplicación blockchain.

En los próximos meses desplegaremos más educación para la Comunidad, con lanzamientos semanales de nuevo contenido de _SubQuery Curso de Héroe_, y más cursos en las próximas semanas.

### Prueba de Indexación

La prueba de indexación nos permite garantizar que dos índices diferentes que trabajan con el mismo proyecto de SubQuery indexen exactamente los mismos datos. Es un componente crítico necesario para el desarrollo de una red de SubQuery descentralizada. Estamos utilizando un concepto llamado Merkle Mountain ranges para confirmar y garantizar esto, mantente atento a un post futuro que explora este más profundo.

### Servicio Premium para Empresas

Tenemos algunos clientes grandes como Karura, Kodadot y Fearless Wallet que ejecutan aplicaciones de producción en SubQuery. Estos equipos están exigiendo un mejor servicio y mayores niveles de fiabilidad.

Estamos a la altura del desafío, con acuerdos de nivel de servicio, niveles de servicio empresarial, y otras herramientas que nuestros clientes más grandes necesitan para gestionar sus propios negocios y recibir el mejor rendimiento posible de SubQuery para sus aplicaciones.

Por favor, póngase en contacto con el equipo si desea hablar con nosotros acerca de recibir servicios de nivel empresarial y apoyo de SubQuery.

## Milestone 1 — End of Q4 2021

### SubQuery Builders/Grants Programme

This grants programme is designed to facilitate and catalyse innovation with Polkadot and SubQuery, and to build the next generation of dApps to power the web3 revolution. It will support new projects with grants, technical support, marketing and business development advice from SubQuery and others.

We are excited about the potential of this and will be releasing more information soon.

### Coordinator and client SDK implementations

We will be improving our core SubQuery SDK and adding additional components for a SubQuery coordinator and client.

The indexer coordinator will be deployed by indexers to expose the network to the indexer, and allow the indexer to register itself with the SubQuery network and advertise the data that it is making available

The client SDK will be for the consumer role, and will allow them to find indexers and manage the entire transaction that a consumer will need to retrieve and pay for data.

### SQT Network contract internal MVP

Our first version of the SubQuery network will be within a smart contract, deployed on a leading Polkadot parachain. The internal MVP will allow us to internally start testing out everything here, and is a huge milestone for us to complete.

### EU Cluster

Our customers are requesting support for more clusters for SubQuery data around the world. More clusters mean more resiliency, and hosted SubQuery data closer to where their customers are. A new European cluster means faster requests for consumers, unrivalled performance for dApp developers and more resiliency for the SubQuery network.

### Improvements to subql init

The _subql init_ command is a familiar one for anyone that has built a SubQuery project; it represents a blank canvas — limitless opportunities. We are aware that we can do better to help others get started, rather than a blank canvas developers want a blank scaffold, where all the boiler-plate code is already written.

This roadmap item represents work we want to do to allow developers to start building on any parachain without needing to worry about endpoints, dictionaries, and types — all saving time for developers and helping others get started.

## Milestone 2 — Middle of Q1 2022

### Public testnet launch

Following the SQT Network contract internal MVP, we will invite a small group of participants to onboard and join us as we start testing the SubQuery Network. In order to launch, we need to complete a large number of tasks and an even bigger amount of documentation!

In early 2022, we will share more information about this process and how you can apply to take part.

### Point-in-time indexing

Imagine being able to find out the state of the blockchain at a certain point in time - what exactly did a SubQuery project look like back at the 5 millionth block? This is exactly what this new feature will provide.

### SQT Network contract v1 and external code audit

All important networks require a through code audit by an external partner to ensure that the network’s code is secure and scalable. SubQuery is no different, so we’ll be working with key partners for a full code audit here and also continue to receive code audits for our smart contracts going forward.

### Internal micropayments testing

This is a key feature for us. We are going to be doing a lot of work within the Polkadot ecosystem to manage and handle micropayments within SubQuery. The advantage of Polkadot is tiny transaction fees relative to other networks like Ethereum, meaning micropayments are much more relevant to. This will roll out to our incentivised test network after we carry out thorough internal testing.

### SubQuery Network Explorer and App

We’re building an explorer and other applications to allow participants in the SubQuery Network explore and find data within the SubQuery Network. Consumers will also use this to navigate the library of supported data sources, as well as delegators to analyse how indexers are performing to decide how to delegate their SQT tokens.

### Enterprise health monitoring

Following on from our SubQuery Enterprise service tier, you can also expect a large amount of health monitoring and other performance analytics tools to be made available to customers.

## Milestone 3 — End of Q1 2022

### SQT token generation event

After a successful test network phase we are expecting to launch the SubQuery token on a Polkadot parachain partner. We will be sharing more information on our tokenomics with the community in the coming weeks.

### Public incentivised testnet launch with micropayments

This is the final stage of our test network. We will release everything to our test network and expect participants to push it to its limits. This includes scale and load testing, fine tuning our economic models and coefficients, testing our documentation and onboarding processes, and making sure that you can transact with a precursor to SQT within it.

We expect that we will be rewarding participants of our test network, those that complete certain quests or tasks, and those that act as different members of the test network.

### Data traffic insights and reporting

We are handling millions of data requests to SubQuery projects each day. Most of our customers don’t have analytics in their own dApps for user privacy but they still need to know how their dApps are operating so we will be improving this.

### Scalable intelligent routing

We have a goal of a Billion daily SubQuery requests to our hosted service, that’s why we are going to introduce a globally scalable service with multiple SubQuery hosted services running.

It’s a new and continuously improving feature that automatically routes requests to the closest available node. Additionally, it allows us to redirect all requests immediately to a backup SubQuery zone, providing us with a fault tolerant system in the case of regional outage.

In the future it means that we’ll be creating more and more smaller SubQuery hosted services tactically placed closer to our users.

## Milestone 4 — Middle of Q2 2022

### Launch of the SubQuery Foundation

In our move to create a decentralized SubQuery Network we will establish a SubQuery Foundation to administer the future governance and growth of the ecosystem. The ownership of the SubQuery Network will come under the SubQuery foundation initially.

### Finalise research for other Layer-1 chains

While our home will always be Polkadot we are exploring supporting various other Layer-1 blockchains with our indexing capabilities.

### Liquidity mining program

In order to enhance the liquidity of the SQT token, we will create a liquidity mining program with a decentralized exchange (DEX). This will enable token holders to generate returns on their investment.

## Milestone 5 — End of Q2 2022

### Mainnet launch 🚀

After we complete testing of the SubQuery network will launch the first SubQuery Network mainnet. This is where everything really starts. Initially, we will onboard and reward participants of the test network, and then it will be completely open to everyone in the community.

### Centralised Exchange launch

In order to drive increased adoption of SQT, we anticipate launching the token on one if not multiple leading CEX during this period as well as many other DEXs.

## Milestone 6 — Long term plans

### Launch our own Parachain

Although we initially plan to partner with a top Polkadot parachain to get SubQuery Network released and scaled quicker, in the long-term SubQuery also intends to launch on it’s own parachain and integrate itself even more in the ecosystem.

This self owned parachain will allow us to further innovate in tools that can help developers build the web3 future faster. We want to aim for a parachain slot once we have a proven track record behind us and the data, community, and token to support it.

### SubQuery Foundation moves to a DAO

This one is a long way off, but it’s always our dream the SubQuery eventually becomes a community owned DAO. We’ve said many times that the community plays a huge part in SubQuery, everything that we do is for our customers — becoming a DAO is the embodiment of that focus.

That being said, this is a long long way off, and will only be done once we are absolutely confident of SubQuery's success and future with the community.

## About SubQuery

[SubQuery](https://subquery.network) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. The protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
