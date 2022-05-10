# SubQuery ofrece a los clientes asistencia empresarial

![](https://miro.medium.com/max/1400/1*z_StqAT5KeaxQLBCm-xpRQ.jpeg)

A medida que nuestra comunidad crece, estamos viendo cientos de despliegues y un tráfico exponencialmente mayor en nuestro servicio alojado cada día. The team at SubQuery are rising to this challenge however and are scaling our services to meet the unprecedented demand for our tools by our customers, while keeping our [hosted service](https://projects.subquery.network/) free.

Many customers now rely on SubQuery to provide mission critical data to their production apps. These customers represent some of the largest wallets ([Nova](https://novawallet.io/) and [Fearless](https://fearlesswallet.io/)), scanners ([Subscan](https://www.subscan.io/), [SubVis](https://www.subvis.io/), and [DotMarketCap](https://dotmarketcap.com/)), NFT platforms ([Kodadot](https://kodadot.xyz/) and [Yuser](https://yuser.co/)), and more. Se trata de enormes aplicaciones que la comunidad de Polkadot utiliza a diario y que deben estar en línea en todo momento.

El rendimiento y la fiabilidad de nuestro servicio alojado han estado en lo más alto de nuestra lista de prioridades durante algún tiempo aquí en SubQuery. Nuestro equipo hermano es OnFinality, el mayor proveedor de infraestructura de Polkadot, por lo que tenemos mucha experiencia en esta área. Como resultado, hoy vamos a recorrer tres mejoras recientes que harán de SubQuery la plataforma de datos más fiable, escalable y con mayor rendimiento de Polkadot.

![](https://miro.medium.com/max/1200/1*QckhJzjQqw9czpBMRhXgXQ.gif)

## Dedicated Databases

Al principio, todos los proyectos de SubQuery se desplegaban en bases de datos compartidas en nuestra infraestructura para ahorrar dinero y permitir que nuestro servicio siguiera siendo gratuito. Sin embargo, esto provocaría que los proyectos de alto tráfico con grandes conjuntos de datos estrangularan a otros proyectos alojados en la misma base de datos.

Si está construyendo un proyecto diseñado para su uso en producción, ofrecemos una base de datos dedicada alojada en nuestros clusters de SubQuery que puede dar a su proyecto todos los recursos que necesita para manejar miles de consultas complicadas sin preocuparse por el impacto en el rendimiento de otros.

Si desea actualizarla, póngase en contacto con nosotros en sales@subquery.network. Replicamos sus datos a partir de las tablas existentes para que no tenga que dedicar tiempo a reindexar los datos que ya tiene, lo que se traduce en una migración sin tiempo de inactividad.

## Multiple Cluster Support

La resistencia y la fiabilidad lo son todo para nosotros en SubQuery. Disponer de un clúster redundante en otra parte del mundo significa que podemos recuperarnos rápidamente de las interrupciones del proveedor de la nube que ocasionalmente desconectan regiones.

Además, cuando se hace una petición a un proyecto de SubQuery en nuestro servicio alojado, la mayor parte del tiempo de espera proviene de la latencia. La latencia es el tiempo punto a punto que tarda su solicitud en dar la vuelta al mundo hasta el clúster de SubQuery más cercano y puede tardar hasta un segundo o dos desde algunas regiones remotas. Disponer de múltiples clusters en todo el mundo nos permite reducir la parte más significativa del tiempo de solicitud (la latencia).

Hemos implementado múltiples clusters en diferentes regiones que proporcionan el mismo servicio. This work also includes a tool in [SubQuery Projects](https://project.subquery.network/) that allows you to deploy and manage your project across these clusters. También hemos implementado procesos que garantizan la coherencia de las bases de datos de las distintas regiones, de modo que, independientemente del clúster al que se dirija su solicitud, los datos que reciba sean coherentes.

## Intelligent Routing

Una vez que tenemos clusters de SubQuery funcionando en diferentes regiones, el siguiente paso lógico es hacer que esta función sea invisible para sus usuarios. Sus usuarios nunca deberían tener que decidir a qué clúster van sus peticiones, SubQuery debería dirigir automáticamente sus peticiones al clúster sano más cercano. Esto es lo que proporciona el enrutamiento inteligente de SubQuery.

Ofrecemos un único punto final global a cada cliente premium que tiene un enrutamiento inteligente aplicado automáticamente a todas y cada una de las solicitudes. Este servicio incluye una supervisión considerable que hace ping constantemente a cada clúster para comprobar su estado y garantizar que un usuario nunca sea dirigido a un clúster que esté saturado o desconectado. El punto final global optimiza el enrutamiento de cada solicitud al clúster más cercano para garantizar que sus usuarios reciban el mejor rendimiento de sus clústeres.

![](https://miro.medium.com/max/1000/0*DNXDiABzli0et1MU)

En resumen, estos servicios nos permiten ofrecer nuestro servicio premium a más clientes con confianza. Trabajamos con cada cliente para entender su negocio y sus objetivos, y luego establecer un servicio que satisfaga sus necesidades. SubQuery es el mayor proveedor de servicios de datos en Polkadot, y estas características muestran cómo apoyamos a miles de proyectos comunitarios al mismo tiempo que a los mayores proyectos de Polkadot.

## About SubQuery Network

SubQuery es el principal proveedor de datos de Polkadot, que soporta una capa de indexación & consulta entre blockchains Layer-1 (Polkadot) y aplicaciones descentralizadas. El servicio de datos de SubQuery está siendo utilizado por la mayoría de los sitios web de subastas de crowdloan y parachain de Polkadot y Kusama.

El protocolo de SubQuery abstracta la idiosincrasia de datos de blockchain con SubQuery SDK, que permite a los desarrolladores centrarse en implementar su producto principal sin desperdiciar innecesariamente esfuerzos en tecnologías de backend personalizadas.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG)| [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
