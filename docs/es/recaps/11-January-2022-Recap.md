# Recapitulación de enero

![](https://miro.medium.com/max/1400/1*2IMAaY-YYyAdl7YfZqHTAg.png)

¡Hola a todos, y bienvenido a 2022! El año pasado fue enorme para nosotros en SubQuery, pero después de unas muy necesarias vacaciones de verano aquí en Nueva Zelanda, el equipo está bien descansado y energizado por el potencial que tenemos ante nosotros. ¡Este año va a ser el año de la revolución de los datos descentralizados!

As always, we are breaking down our monthly update into three sections; community, core product development, and the SubQuery Network.

## Community

SubQuery’s community is expanding rapidly in terms of numbers and regions we cover! As a result, we have a lot to talk about in this area.

### SubQuery Partners With Leading Polkadot Teams On Technical Bounties via the SubQuery Grants Programme

Last month we launched the SubQuery Grants Programme, a non dilutive accelerator to help developers in our community build the next generation of dApps. This month we’ve talked to our partners to release a first round of bounties in partnership with Moonbeam, Acala, Astar and Bifrost as projects for inspiration. All are open to apply now, and as a bonus, if your application is successful you’ll get to work closely with the parachain team that suggested the challenge!

Applicants who are interested in any of these bounties are encouraged to submit their proposal with the budget required to complete the task and other requirements [here](https://docs.google.com/forms/d/e/1FAIpQLSfmMazkebKwNTWThBkVGaxf2Bg8s4aWZ0ZhwiMCtc9kv4sJHQ/viewform). Additionally, we look forward to announce the first round of SubQuery grantees in February.

[Read more here](https://subquery.medium.com/subquery-partners-with-leading-polkadot-teams-on-technical-bounties-via-the-subquery-grants-d40453788435)

### SubQuery Celebrates Winners of Gitcoin GR 12 Hackathon

[SubQuery se asoció con Gitcoin en diciembre](https://subquery.medium.com/subquery-announces-gitcoin-hackathon-16c9d18753a) para patrocinar cinco retos por un valor de 37.000 dólares (el mayor premio del reto), invitando a los desarrolladores a construir herramientas útiles, cuadros de mando e incluso a extender SubQuery a otra blockchain de capa 1.

![](https://miro.medium.com/max/1400/1*BUq3ah1ULNnvLjqxv_vzlQ.png)

[Sam Zou](https://twitter.com/zoujialiu), director general y fundador de SubQuery comentó: "_SubQuery está encantado con los resultados del Hackathon Gitcoin GR12. Nuestra misión se basa en contar con una red de desarrolladores que estén capacitados para crear e innovar dentro del ecosistema de Substrate/Polkadot. Esta asociación ofreció oportunidades a desarrolladores motivados de todo el mundo para construir las aplicaciones del mañana. Estamos entusiasmados por nutrir a los ganadores de los retos para que desarrollen aún más sus ideas_"

Recientemente, hemos cubierto a los muchos ganadores que participaron en este hackathon y los increíbles proyectos que han incorporado [este detallado escrito](https://subquery.medium.com/subquery-celebrates-winners-of-gitcoin-gr-12-hackathon-7486afaeab29). La calidad y el progreso de los envíos en tan poco tiempo nos han llevado a pensar y nos complace invitar a muchos de los envíos a participar en nuestro programa de subvenciones.

[Lee más aquí](https://subquery.medium.com/subquery-celebrates-winners-of-gitcoin-gr-12-hackathon-7486afaeab29)

### Hero Course China

Nuestro Curso de Héroe hecho en colaboración con OneBlock+ comenzó a principios de enero y ahora ya hemos publicado tres lecciones a más de 200 estudiantes! Únete a la comunidad de OneBlock+ para unirte a este curso u horas de oficina. China es una región estratégicamente importante para SubQuery, pero esperamos lanzar muchos otros cursos de desarrollo regional pronto. ¡Póngase en contacto con nosotros si puede ayudarnos!

![](https://miro.medium.com/max/1400/1*_8N000hX1WBM79ZbFyhvYQ.png)

## Desarrollo de Producto Principal

### Soporte multichain

SubQuery es nativo de Polkadot, es nuestra casa y hemos trabajado duro para construir relaciones en este ecosistema. El núcleo de la misión de Polkadot es crear una emocionante comunidad de desarrolladores, usuarios y empresas que aprovecharán su interoperabilidad multicadena. Mantenemos esa visión y también creemos que Polkadot será un actor destacado en esa iniciativa.

A pesar de esto, también creemos en un futuro multicadena, ya que sabemos que va a haber muchas blockchains diferentes trabajando juntas para resolver diferentes problemas. Nuestro plan a largo plazo siempre ha sido tomar SubQuery y adaptarlo al trabajo para otros blockchain que no tienen una solución de indexación actual. Nuestro enfoque de cadena múltiple que hemos necesitado para el Polkadot significa que nos adaptamos de manera única a este desafío.

Estamos finalizando el trabajo en la primera de 5 nuevas cadenas de capa 1 que SubQuery indexará, ¡no podemos esperar para anunciarlo pronto!

![](https://miro.medium.com/max/1400/1*jD1n5MSjeatjiaF5hY-Wjg.png)

### Mejoras de rendimiento

La velocidad de indexación de SubQuery está siendo siempre mejorada, es un foco constante en nuestro equipo de desarrollo. Nuestro soporte avanzado de diccionario permite esto, Los diccionarios aceleran tu proyecto en varios múltiplos y te permiten indexar toda la cadena Polkadot en minutos, no en horas (dependiendo de la complicidad de tu proyecto).

Como indicador de la amplitud de apoyo que SubQuery ofrece al ecosistema Polkadot ahora estamos hospedando y gestionando diccionarios a través de las 31 diferentes redes, representando la mayoría de los parachains más importantes de Polkadot/Kusama.

![](https://miro.medium.com/max/1400/1*WeMY5WnWZ_jvllxidhycUA.png)

### Registro de plantillas de subQuery

> 29 redes están cubiertas por plantillas

The `subql init` command is a familiar one for anyone that has built a SubQuery project; it represents a blank canvas — limitless opportunities. We are aware that we can do better to help others get started, rather than a blank canvas developers want a blank scaffold, where all the boiler-plate code is already written.

Today when you write `subql init`, you are presented with a list of 29 networks from which you are provided a pre-created scaffold with all the correct endpoints, dictionary links, and even type definitions. This eliminates one of the most difficult steps when starting a new SubQuery project and makes building your next big dApp that much easier and faster.

### Data Aggregation Features

SubQuery now supports advanced GraphQL aggregate functions to allow you to perform a calculation on a set of values during your query. These functions provide our customers a richer set of insights and calculations from their existing data set. For example with a single query you can calculate the median contribution amount for each crowdloan broken down by contribution date.

[Read more about how to use these features in our upgraded docs.](https://doc.subquery.network/query/aggregate/)

### SubQuery partners with Darwinia Network to build SubQuery’s CLI Tool

Darwinia has partnered with SubQuery to build the plethora of applications that will be needed to provide the ultimate user experience for cross chain interactions. This includes a new [Smart App that is a central hub](https://apps.darwinia.network/) to manage all Darwinia network interactions including governance, staking, chain exploration and more. This app uses a considerable amount of [SubQuery data to show historic data and actions](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery will be working closely with the team at Darwinia to make this the best experience in the entire Polkadot ecosystem.

![](https://miro.medium.com/max/1200/1*bL2Csj9qyamD7txAheCTIg.gif)

Darwinia have also been working closely with the SubQuery team to [build a CLI tool](https://github.com/fewensa/subquery-cli) for the SubQuery managed service (https://project.subquery.network). You can use this [CLI](https://github.com/fewensa/subquery-cli) to create a SubQuery project and automatically deploy a new version to either the staging or production slot. Additionally you can retrieve information including the detailed syncing status and logs from your running project that is hosted for free in SubQuery Projects. [Read more here](https://subquery.medium.com/subquery-partners-with-darwinia-network-to-build-subquerys-cli-tool-903dc4c9ef66)

## SubQuery Network

Last community call we walked through a few important details of the upcoming SubQuery test network. It will be run over at least three seasons, each season will test different aspects of the network:

- Season 1: Early stage alpha testing of a limited number of features with a select few participants
- Season 2: Large beta testing of more features with hundreds of participants
- Season 3: Full public test network for load and scale testing with thousands of participants

Each season will have multiple challenges that you can complete which may result in real SQT rewards. Expect things to kickoff here in March!

## Roadmap Update

Last October we released out [technical roadmap](https://blog.subquery.network/blogs/20211029-roadmap-october.html) with the next year mapped out for SubQuery, we’re overdue to address exactly how we’re doing here.

![](https://miro.medium.com/max/1400/1*2a3SGrW-OG5pbw67jsavvw.jpeg)

As you can see in the original roadmap above, we’ve completed all of Milestone 0 and 1, and are making good progress on Milestone 2. We’ve even delivered some features relevant to our hosted service much earlier than expected due to the huge scale of requests currently going to [our enterprise customers](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html).

## Other things you might have missed

- We will be having weekly office hours on our Discord Server! Join SubQuery’s ‘Office Hours’ on our stages channel where you can catch-up with the team in a casual environment.
- We had a Russian QnA with James & Dmytro in Discord where all questions were asked and answered in Russian. Let us know which language you would like to hear next

P.S.

Remember to join our [Discord](https://discord.com/invite/subquery) and our [social channels](https://linktr.ee/subquerynetwork) to stay updated on our latest news and announcements.

The SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Email](hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
