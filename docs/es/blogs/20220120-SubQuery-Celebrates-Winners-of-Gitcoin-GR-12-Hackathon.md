# SubQuery celebra a los ganadores del Hackathon Gitcoin GR 12

![](https://miro.medium.com/max/1400/1*MnMY9j3nasex9_9MNHUPtA.png)

SubQuery, la solución de indexación de datos líder en Polkadot, se complace en anunciar a los ganadores [del reciente Hackathon Gitcoin GR 12](https://gitcoin.co/hackathon/gr12?org=subquery). Gitcoin es considerada una de las comunidades de desarrolladores de blockchain más importantes, centrada en la creación de comunidades y aplicaciones para Web3. [SubQuery se asoció con Gitcoin en diciembre](https://subquery.medium.com/subquery-announces-gitcoin-hackathon-16c9d18753a) para patrocinar cinco retos por un valor de 37.000 dólares (el mayor premio del reto), invitando a los desarrolladores a construir herramientas útiles, cuadros de mando e incluso a extender SubQuery a otra blockchain de capa 1.

El Hackathon tuvo lugar entre el 1 y el 16 de diciembre de 2021 con proyectos de blockchain líderes como Moonbeam, Astar y Acala que contribuyeron a varios premios. Los premios se conceden a aquellos que hayan completado con éxito los proyectos según los estándares preestablecidos y a quienes aporten las ideas más creativas, o aquellas que resuelvan áreas para mejorar el core SDK de SubQuery. A continuación se presenta un breve resumen de los retos:

- [Crear un explorador de bloques unificado que combine los conocimientos de substrate, EVM de Moonbeam y Astar en una aplicación fácil de usar](https://gitcoin.co/issue/subquery/grants/1) - 12.000 dólares [Patrocinado por Moonbeam y Astar]
- [Crear un panel de control DeFi inspirado en Zapper.fi o defisaver.com](https://gitcoin.co/issue/subquery/grants/2) - 8.000 dólares [Patrocinado por Acala]
- [Crear un panel de control de staking que muestre las mejores oportunidades de esta misma, en Polkadot y sus diversas parachains](https://gitcoin.co/issue/subquery/grants/3) - 3.000 dólares
- [Construir un explorador de mercado para todas las NFT basadas en el protocolo RMRK](https://gitcoin.co/issue/subquery/grants/4) - 2.000 dólares
- [Extender el servicio @subql/node para indexar datos de otra cadena de capa 1](https://gitcoin.co/issue/subquery/grants/5) - 12.000 dólares

## Explorador de bloques de substrate y EVM unificado

El ecosistema Polkadot/Kusama consiste en blockchains (llamados Parachains) construidos usando Substrate, la cual utiliza la API de Substrate. Sin embargo, algunas Parachains, como Moonbeam y Astar, ofrecen una compatibilidad perfecta con Ethereum al tener un componente EVM totalmente compatible. Tener una visibilidad simultánea de los datos de Substrate y EVM es actualmente un reto, lo que resulta en dos experiencias aisladas dentro de Moonbeam y Moonriver. Hay que elegir entre el lado de Substrate (por ejemplo, Subscan) y el lado de EVM (por ejemplo, Moonscan & Blockscout).

Este reto se planteó para hacer frente a la enorme oportunidad de construir un único lugar para comprender el historial completo de la actividad de una cuenta. Por ejemplo, para ver las acciones de staking, gobernanza y las transferencias de ERC20 en una única interfaz de usuario. Esta sería una aplicación utilizada a diario por las comunidades masivas de Moonbeam, Astar y muchas otras parachains compatibles con EVM que están despegando.

![](https://miro.medium.com/max/1400/0*b_o0NDpJOCv0QvXS)

El ganador de [este reto](https://gitcoin.co/issue/subquery/grants/1/10002717200027175) ha sido @bizzyvinci el cual [ha construido un explorador frontend que está en vivo en Heroku](https://moonriver-explorer.herokuapp.com/). Dado que este reto es una tarea enorme, no es de extrañar que aún no se haya completado al 100%, pero estamos entusiasmados por apoyar el progreso de esta innovación que cambia las reglas del juego y ayudar a extenderla a otras cadenas de EVM.

@bizzyvinci dijo lo siguiente: "Construí el [Explorador de Moonriver](https://moonriver-explorer.herokuapp.com/) y fue una experiencia increíble. El primer paso fue aprender sobre SubQuery y maldita sea, tienen una documentación impresionante que se acompañan con repositorios de plantillas. La documentación cubre todo lo necesario para empezar y explica bien cada aspecto como el archivo de manifiesto, el esquema de graphql entre otros."

## Karura/Acala DeFi Dashboard

Acala y Karura representan una gran visión del futuro de DeFi, por lo que existe una gran oportunidad de crear herramientas valiosas para el ecosistema. Este reto requirió que los desarrolladores crearan herramientas DeFi para la comunidad de Karura/Acala que se inspiran en los servicios de indexación de datos de SubQuery como [Zapper.fi](http://zapper.fi/) y [defisaver.com](http://defisaver.com/).

El ganador de [este reto](https://gitcoin.co/issue/subquery/grants/2/100027176) fue Web3Go, que construyó un resumen realmente bonito de las [Posiciones de Deuda Colateral (PDC)](https://web3go.xyz/#/CDPDetail) de Acala. Para que los usuarios puedan mintear stablecoins de kUSD en Karura, primero deben depositar tokens de uno de los activos de garantía aceptados (por ejemplo, KSM). Una vez que el usuario ha hecho esto, el parámetro de ratio de garantía mínima determina la cantidad mínima de la garantía necesaria para que el usuario acuñe kUSD. Si el precio de mercado del activo de garantía del CDP baja lo suficiente, el CDP puede considerarse "inseguro".

![](https://miro.medium.com/max/1400/0*l7GA1axntiHCINRM)

La interfaz de Web3Go enumera limpiamente todas las posiciones del CDP, su ratio y su estado de seguridad. Para cada posición, también proporciona información sobre el historial de la posición y permite fácilmente que otros supervisen el instrumento financiero. <iframe width="560" height="315" src="https://www.youtube.com/embed/hc3YDjv6dkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

## Polkadot Staking Dashboard

Staking es una forma clave de usar tus tokens DOT y KSM, pero actualmente la UX para esta es difícil de entender y hace que la mayoría de los usuarios tomen decisiones sin conocimiento.

El objetivo de este reto era combinar los datos de la cadena y una experiencia de usuario intuitiva, para ayudar a los usuarios a comprender el mejor rendimiento estimado de las apuestas, comparar el rendimiento histórico de los validadores y mostrar a los usuarios cuál podría ser el rendimiento de su inversión.

Ashik construyó PolkStakes, un [sitio web de clasificación de validadores de Polkadot](https://polkstakes.vercel.app/) que obtiene todos los validadores y muestra una lista limpia y organizada de validadores en Polkadot con la propia clasificación de PolkStake (basada en el rendimiento de la era anterior, las comisiones, el pago y las recompensas de las apuestas, etc.). Es una interfaz de usuario limpia y sencilla que realmente nos ha impresionado.

![](https://miro.medium.com/max/1400/0*Kaho31-nn-ly8tFS)

"_Subquery reduce el esfuerzo de indexar manualmente los datos de la cadena. Ya que ofrece un punto final de graphql, podemos consultar datos fácilmente. Reduce el esfuerzo de mantener un backend y una base de datos. Ahora, la agregación de datos para calcular la clasificación de Polkstakes se realiza en la interfaz de usuario. Esto tiene que moverse a SubQuery. Además, hay que mejorar la visualización de los datos indexados y añadir una predicción más precisa del rendimiento estimado._" - Ashik de Polkdata

El excelente equipo de SubVis también construyó un [hermoso tablero de apuestas de Polkadot](https://polkadot-staking-dashboard.vercel.app/) que muestra las estadísticas totales de apuestas a lo largo del tiempo y el rendimiento del validador en un solo lugar. Las nuevas funciones de apuestas se unen a las páginas de subastas y préstamos colectivos por las que SubVis es bien conocida.

![](https://miro.medium.com/max/1400/0*uPDQdMug2JaZwMbA)

Por último, Web3Go ha publicado otra excelente entrada con estadísticas de staking detalladas sobre Moonriver. Proporcionan información incluso sobre los delegados de cada collator, las recompensas históricas proporcionadas por cada uno de ellos e incluso las acciones que realizan. Ofrecen la ventaja adicional de poder mostrar el historial de apuestas de su propia dirección de cartera.

![](https://miro.medium.com/max/1400/0*jQgOnvcaXt6cprJR)

## RMRK NFT Marketplace Explorer

RMRK is an advanced protocol of NFT legos making NFTs that are so much more than just a jpeg. The team at RMRK are bringing new standards of NFTs to the DOT ecosystem, and leading the way in building the next generation.

This challenge called for the creation of a detailed dashboard that tracks the evolution of all RMRKs (potentially focusing on [Kanarias](https://kanaria.rmrk.app/)), including transfers, emote history, and more across RMRK2. This dashboard had to use a RMRK2 focused SubQuery project.

The winner of [this challenge](https://gitcoin.co/issue/subquery/grants/4/100027174) was another excellent dashboard from Web3Go called the [NFT Garden](https://web3go.xyz/#/NFTProfiler). It includes in depth details about each NFT collection, such as average prices, volumes, price ranges, and all transactions for each single item. Additionally, there are some interesting visualisations on all the traits within NFTs.

![](https://miro.medium.com/max/1400/0*1_mUnNIBYI84G_qs)

“_Since the inception of Web3Go, we have been using SubQuery as the underlying architecture for data indexing. The development kit provided by SubQuery has proven to be very suitable for our team to quickly develop, deploy and upgrade projects, which is also the key to our good results on the Gitcoin Hackathon. In the next step, we will use Subquery to develop dashboards for all projects on the Polkadot & Kusama parachains, which will involve Defi, NFT, and Tokens!_” says Hao Ding from Web3Go.

## Extend SubQuery to another Layer-1 Blockchain

SubQuery is native to Polkadot, it’s our home and we’ve worked hard to build relationships in this ecosystem. In spite of this we also believe in a multi chain future, as we know that there are going to be many different blockchains working together to solve different problems. Our long term plan is to take SubQuery and to adapt it to work for other blockchains that don’t have a current indexing solution to help developers build new dApps.

The winner of [this US$12,000 challenge](https://gitcoin.co/issue/subquery/grants/5/100027175) was Naveen who extended SubQuery to index the Terra blockchain. This was implemented by creating a fork that extends the node package of the official subql implementation to index Terra. Naveen is continuing to work on this and you can expect news soon about SubQuery’s plans for support of other layer 1 chains outside of Polkadot. <iframe width="560" height="315" src="https://www.youtube.com/embed/K_pjh5OC95A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

“_I have been studying a bunch of indexers in the past few months and went as far as building an indexer from scratch. That might be the reason why SubQuery caught my attention in the Gitcoin GR12 Hackathon. I took up the task of extending SubQuery to index Terra. I did not believe that I could pull this off in 15 days. But, SubQuery was architected in such a magnificent manner that it allowed me to create a mental picture of what is happening under the hood very quickly. I hacked together a working solution just in time and I am currently working with SubQuery to merge the Terra indexer into the subql package. In the foreseeable future, I will be continuing to work with SubQuery to maintain and scale the project and possibly build indexers for several other layer 1 chains_” said Naveen.

[Sam Zou](https://twitter.com/zoujialiu), the CEO and Founder of SubQuery commented, “_SubQuery is delighted with the results of the Gitcoin GR12 Hackathon. Our mission relies on having a network of developers who are empowered to create and innovate within the Substrate/Polkadot ecosystem. This partnership provided opportunities for motivated developers around the world to build the applications of tomorrow. We are excited to nurture the winners of the challenges to develop their ideas even further_”

Following on from this successful Hackathon, SubQuery would like to encourage developers who would like to learn more about how to build applications with SubQuery to [register for our free online “Hero Course”, or apply for our recently announced Grants Programme](https://subquery.coassemble.com/unlock/dOKZW6O#/).

---

## About SubQuery

[SubQuery](https://subquery.network/) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. This service unlocks blockchain data and transforms it to a queryable state so that it can be used in intuitive applications. It allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The upcoming SubQuery Network will decentralize and tokenize the ecosystem to allow everyone to participate in the web3 data revolution.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
