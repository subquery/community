# Recapitulación de enero

![](https://miro.medium.com/max/1400/1*2IMAaY-YYyAdl7YfZqHTAg.png)

¡Hola a todos, y bienvenido a 2022! El año pasado fue enorme para nosotros en SubQuery, pero después de unas muy necesarias vacaciones de verano aquí en Nueva Zelanda, el equipo está bien descansado y energizado por el potencial que tenemos ante nosotros. ¡Este año va a ser el año de la revolución de los datos descentralizados!

Como siempre, estamos dividiendo nuestra actualización mensual en tres secciones; comunidad, desarrollo de productos básicos y SubQuery Network.

## Comunidad

¡La comunidad de SubQuery se está expandiendo rápidamente en términos de números y regiones que cubrimos! En consecuencia, tenemos mucho de lo que hablar en este ámbito.

### SubQuery se asocia con los principales equipos de Polkadot en las recompensas técnicas a través del programa de Grants de SubQuery

El mes pasado lanzamos el SubQuery Grants Programme, un acelerador no diluyente para ayudar a los desarrolladores de nuestra comunidad a construir la próxima generación de dApps. Este mes hemos hablado con nuestros socios para lanzar una primera ronda de recompensas en asociación con Moonbeam, Acala, Astar y Bifrost como proyectos de inspiración. ¡Todas las solicitudes están abiertas ahora, y como ventaja, si tu solicitud tiene éxito, podrás trabajar estrechamente con el equipo de parachain que propuso el reto!

Los solicitantes que estén interesados en alguna de estas recompensas deben presentar su propuesta con el presupuesto necesario para completar la tarea y otros requisitos [aquí](https://docs.google.com/forms/d/e/1FAIpQLSfmMazkebKwNTWThBkVGaxf2Bg8s4aWZ0ZhwiMCtc9kv4sJHQ/viewform). Adicionalmente, esperamos anunciar la primera ronda de SubQuery en febrero.

[Lee más aquí](../blogs/20220127-grants-bounties.md)

### SubQuery celebra a los ganadores del Hackathon Gitcoin GR 12

[SubQuery partnered with Gitcoin in December](../blogs/20211120-gitcoin12-hackathon.md) to sponsor five challenges to a value of USD$37,000 (the largest prize pool in the challenge), inviting developers to build useful tools, dashboards and even extend SubQuery to another Layer-1 blockchain.

![](https://miro.medium.com/max/1400/1*BUq3ah1ULNnvLjqxv_vzlQ.png)

[Sam Zou](https://twitter.com/zoujialiu), director general y fundador de SubQuery comentó: "_SubQuery está encantado con los resultados del Hackathon Gitcoin GR12. Nuestra misión se basa en contar con una red de desarrolladores que estén capacitados para crear e innovar dentro del ecosistema de Substrate/Polkadot. Esta asociación ofreció oportunidades a desarrolladores motivados de todo el mundo para construir las aplicaciones del mañana. Estamos entusiasmados por nutrir a los ganadores de los retos para que desarrollen aún más sus ideas_"

Recently we’ve covered the many winners that participated in this hackathon and the amazing projects that they have built in [this detailed writeup](../blogs/20220120-gr12-winners.md). La calidad y el progreso de los envíos en tan poco tiempo nos han llevado a pensar y nos complace invitar a muchos de los envíos a participar en nuestro programa de subvenciones.

[Lee más aquí](../blogs/20220120-gr12-winners.md)

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

**29 networks are covered by templates**

The `subql init` command is a familiar one for anyone that has built a SubQuery project; it represents a blank canvas — limitless opportunities. We are aware that we can do better to help others get started, rather than a blank canvas developers want a blank scaffold, where all the boiler-plate code is already written.

Today when you write `subql init`, you are presented with a list of 29 networks from which you are provided a pre-created scaffold with all the correct endpoints, dictionary links, and even type definitions. This eliminates one of the most difficult steps when starting a new SubQuery project and makes building your next big dApp that much easier and faster.

### Características de agregación de datos

SubQuery now supports advanced GraphQL aggregate functions to allow you to perform a calculation on a set of values during your query. These functions provide our customers a richer set of insights and calculations from their existing data set. For example with a single query you can calculate the median contribution amount for each crowdloan broken down by contribution date.

[Read more about how to use these features in our upgraded docs.](https://doc.subquery.network/query/aggregate/)

### SubQuery se asocia con Darwinia Network para crear la herramienta CLI SubQuery

Darwinia has partnered with SubQuery to build the plethora of applications that will be needed to provide the ultimate user experience for cross chain interactions. This includes a new [Smart App that is a central hub](https://apps.darwinia.network/) to manage all Darwinia network interactions including governance, staking, chain exploration and more. This app uses a considerable amount of [SubQuery data to show historic data and actions](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery will be working closely with the team at Darwinia to make this the best experience in the entire Polkadot ecosystem.

![](https://miro.medium.com/max/1200/1*bL2Csj9qyamD7txAheCTIg.gif)

Darwinia have also been working closely with the SubQuery team to [build a CLI tool](https://github.com/fewensa/subquery-cli) for the SubQuery managed service (https://project.subquery.network). You can use this [CLI](https://github.com/fewensa/subquery-cli) to create a SubQuery project and automatically deploy a new version to either the staging or production slot. Additionally you can retrieve information including the detailed syncing status and logs from your running project that is hosted for free in SubQuery Projects. [Read more here](../customer_announcements/20220125-subquery-partners-with-darwinia-network-to-build-subquerys-cli-tool.md)

## SubQuery Network

Last community call we walked through a few important details of the upcoming SubQuery test network. It will be run over at least three seasons, each season will test different aspects of the network:

- Temporada 1: Pruebas alfa tempranas de un número limitado de características con unos pocos participantes seleccionados
- Temporada 2: Prueba beta grande de más características con cientos de participantes
- Temporada 3: Red pública completa de pruebas para pruebas de carga y escala con miles de participantes

Each season will have multiple challenges that you can complete which may result in real SQT rewards. Expect things to kickoff here in March!

## Actualizar Hoja de Ruta

Last October we released out [technical roadmap](https://blog.subquery.network/blogs/20211029-roadmap-october.html) with the next year mapped out for SubQuery, we’re overdue to address exactly how we’re doing here.

![](https://miro.medium.com/max/1400/1*2a3SGrW-OG5pbw67jsavvw.jpeg)

As you can see in the original roadmap above, we’ve completed all of Milestone 0 and 1, and are making good progress on Milestone 2. We’ve even delivered some features relevant to our hosted service much earlier than expected due to the huge scale of requests currently going to [our enterprise customers](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html).

## Otras cosas que quizás te hayan faltado

- ¡Tendremos horas semanales de oficina en nuestro servidor de Discord! Únete a las ‘Horas de oficina’ de SubQuery en nuestro canal de etapas, donde podrás ponerte al día con el equipo en un entorno informal.
- Tuvimos una QnA rusa con James & Dmytro en Discord donde todas las preguntas se hicieron y respondieron en ruso. Háganos saber qué idioma le gustaría escuchar

P.S.

Remember to join our [Discord](https://discord.com/invite/subquery) and our [social channels](https://linktr.ee/subquerynetwork) to stay updated on our latest news and announcements.

The SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Email](hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
