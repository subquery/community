# SubQuery Cosmos/Juno Support --- Developer Deep Dive

![](https://miro.medium.com/max/1400/0*29dsUJbyIb34mYkF)

Desde el desafortunado colapso del ecosistema Terra/Luna Hemos estado hablando con otros ecosistemas en el Cosmos (intencionado) y hemos encontrado nuestro primer hogar en[Juno](https://www.junonetwork.io/). Hemos estado adaptando nuestro soporte Terra original detrás de las escenas y probándolo con socios clave para el lanzamiento del desarrollo. Estamos orgullosos de ofrecer nuestro apoyo más amplio para Cosmos con nuestra primera implementación específica para Juno, en este artículo compartimos una guía detallada de desarrolladores y un mapa de ruta para que toda la comunidad Cosmos pueda utilizar para resolver sus necesidades de indexación de datos.

SubQuery es un indexador de datos abierto, flexible y rápido. Nuestra herramienta de indexación abierta está diseñada para ayudar a los desarrolladores a construir su propia API en horas, y está diseñada para indexar cadenas increíblemente rápido con la ayuda de diccionarios (índices precalculados). Nuestra experiencia con clientes a través de todos los verticales en Polkadot y Avalanche (carteras, redes, exploradores, NFT, DeFi, escánners, etc) nos ha ayudado a construir esto.

Esto todavía está en sus versiones iniciales, y mientras que lo consideramos mucho más allá de una "beta", le agradeceríamos que nos informara de algún error a nuestro equipo para que podamos resolverlo rápidamente.

## ¿Por qué usar SubQuery?

El ecosistema de aplicaciones ha emocionado en Cosmos a pesar de que existe una grave falta de algunas herramientas clave para desarrolladores y servicios de infraestructura. En la mayoría de los casos, cuando preguntamos a los equipos cómo resolvieron sus necesidades de indexación de datos, fue:

- **Construya su propia solución:** Una implementación personalizada construida por usted mismo específicamente para su aplicación. Pero, ¿por qué reinventar la rueda? SubQuery se centra en construir un indexador abierto fiable y rápido --- estamos aquí para ahorrarte tiempo
- **Diseñar contratos inteligentes para consultas:**Algunos equipos incluso están implementando rarezas personalizadas en sus contratos inteligentes para permitir específicamente consultas más avanzadas específicas a la lógica de su aplicación.

En SubQuery tenemos un SDK de código abierto que es fácil de usar y rápido como un rayo. Le proporciona un punto final GraphQL estándar, o puede consultar directamente la base de datos Postgres. Con él puedes indexar un conjunto único de datos de tus propios contratos inteligentes que te permiten construir un producto superior que haga volar a tu competencia! Le damos flexibilidad para que obtenga los datos que necesita en la forma que más le convenga.

La fiabilidad es la clave, y necesitas una plataforma fiable y escalable para alojarla. [El servicio gestionado de SubQuery](https://subquery.network/managedservices) es una solución de alojamiento líder en la industria para todos los clientes que está sirviendo cientos de millones de peticiones diarias a los mayores proyectos de Polkadot. Proporcionamos a nuestros [clientes de nivel empresarial](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html) servicios como bases de datos dedicadas, clústeres redundantes, enrutamiento inteligente de varios clústeres y supervisión y análisis avanzados. Apoyará su aplicación cuando esté listo y escalará con usted.

Y por último, dentro de unos meses podrá descentralizar completamente su infraestructura SubQuery con la Red SubQuery, el futuro de la infraestructura Web3. La Red SubQuery indexará y servirá los datos de sus proyectos a la comunidad mundial de forma incentivada y verificable. Está diseñado para apoyar cualquier proyecto de SubQuery desde cualquier red de capas 1, incluyendo Cosmos, para que pueda aprovechar la escala de SubQuery Network unificada desde el lanzamiento.

## Comenzando

La mejor manera es comenzar con[nuestro proyecto inicial](https://github.com/subquery/juno-subql-starter)que contiene un proyecto en ejecución con un ejemplo de todas las funciones de mapeo. Necesitarás instalar una versión reciente de`@subql/cli`vía`npm i -g @subql/cli@latest`.

Si no desea ver un ejemplo de lavabo de cocina, usted puede seguir una guía paso a paso sobre cómo crear un ejemplo del mundo real. Sigue nuestro[tutorial de inicio rápido](https://doc.subquery.network/quickstart/quickstart-cosmos.html)para ver cómo indexar todos los votos del Fondo de Desarrollo de Terra en la red de Juno en menos de 15 minutos.

Con la integración de SubQuery's Comos, podemos indexar lo siguiente:

- BlockHandler: Todos los bloques y su hash y altura
- TransactionHandler: Todas las transacciones y su hash, altura y marca de tiempo
- EventHandler: Todos los eventos de transferencia de contratos inteligentes y su hash, altura, remitente, destinatario y cantidad, esto puede ser filtrado a un contrato inteligente específico
- MessageHandler: Todos los mensajes de contrato inteligente y sus datos de hash, altura, contrato, remitente y execute_msg, esto puede ser filtrado a un contrato inteligente específico

SubQuery soporta indexar los contratos inteligentes de Juno tanto con las suscripciones de transacciones y mensajes como con los manejadores. Puede ver un ejemplo funcional de soporte para Contratos Inteligentes en el[proyecto inicial](https://github.com/subquery/juno-subql-starter)y leer la documentación en la[documentación de SubQuery](http://doc.subquery.network/build/manifest.html#mapping-handlers-and-filters).

La implementación de Cosmos de SubQuery ha sido diseñada para funcionar de forma casi idéntica al soporte de Polkadot de SubQuery, y de forma similar al enfoque de Graph. Hemos actualizado la [Documentación de SubQuery](https://doc.subquery.network/) para añadir información específica de Cosmos a la documentación general de SubQuery. Puedes empezar siguiendo esta [excelente guía de inicio aquí](https://doc.subquery.network/quickstart/quickstart-cosmos.html).

## Nuestro soporte de Cosmos

Como parte de nuestras ambiciones multicadena, estamos planeando apoyar todo el ecosistema de Cosmos a largo plazo. Nuestra primera implementación comienza específicamente con Juno, donde hemos completado la mayor parte de nuestras pruebas y estamos seguros de que esto funciona.

Sin embargo, estamos seguros de que esta implementación de SubQuery debería funcionar sin problemas con la mayoría de las otras cadenas de Cosmos que implementan CosmWasm. Mientras que la compatibilidad de SubQuery con Cosmos comienza con [Juno](https://www.junonetwork.io/), el servicio debería funcionar con [Cronos](https://cronos.org/), [OKExChain](https://www.okex.com/), [Osmosis](https://osmosis.zone/), [Secret Network](https://scrt.network/), [Stargaze](https://stargaze.zone/) y [Injective](https://injective.com/). Además, hemos probado con éxito esto en CosmosHub, todo lo que necesitas hacer es añadir un nodo de archivo no podado e importar los mensajes protobuf correctos en el [project.yaml](https://github.com/subquery/juno-subql-starter/blob/a177837a36c86fda8fb2bdbd7a83bb408c89d4bd/project.yaml#L24).

## Despliegue de su proyecto en el servicio gestionado de SubQuery

Aunque siempre podrás ejecutar tu proyecto en tu propia infraestructura fácilmente, el servicio gestionado de [SubQuery](https://subquery.network/managedservices) soporta ahora proyectos Cosmos. Algunos de los mayores proyectos dependen del servicio gestionado de [nivel empresarial](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html) de SubQuery y ahora usted también puede hacerlo. Como parte de nuestro acuerdo de socio de lanzamiento, le proporcionamos 3 meses de alojamiento gratuito.

Puedes [seguir la guía aquí](https://doc.subquery.network/run_publish/publish.html) para publicar tu proyecto Cosmos SubQuery en nuestro servicio gestionado. Tenga en cuenta que debe alojar su proyecto [SubQuery utilizando IPFS](https://university.subquery.network/run_publish/publish.html) en lugar de GitHub.

Puedes actualizar tu proyecto de servicios gestionados tanto como quieras. Incluso disponemos de una ranura de despliegue [de etapas](https://blog.subquery.network/blogs/20210604-Deployment-Slots-are-here-for-SubQuery-Projects.html) para permitirle realizar actualizaciones azules/verdes sin ningún tiempo de inactividad. Esta ranura de puesta en escena también se puede utilizar para ejecutar una instancia limpia de SubQuery con una base de datos fresca para la reindexación completa de fondo de su proyecto. Los clientes suelen vincular la ranura de preparación a las versiones de preparación/desarrollo de sus aplicaciones.

Una vez desplegado, puede acceder a su proyecto utilizando el Explorador de SubQuery, y hacer peticiones directamente desde su aplicación al punto final GraphQL proporcionado. Háganos saber si desea que habilitemos características más avanzadas como [suscripciones a GraphQL](https://university.subquery.network/run_publish/subscription.html), consultas más complejas y [funciones de agregación](https://university.subquery.network/run_publish/aggregate.html).

Por favor, notifíquenos una vez que haya desplegado su proyecto, ya que es posible que tengamos que ayudarle a ajustar el tamaño del lote para garantizar que nuestro nodo de archivo Juno funcione bien para su proyecto.

## Resúmen

Hoy compartimos lo siguiente:

- Indexación avanzada de bloques, evento
- Soporte completo para Cosmos en nuestro servicio gestionado gratuito de [nivel empresarial](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html)
- Documentación intuitiva en la [Documentación de SubQuery](https://doc.subquery.network/)

En las próximas semanas puedes esperar:

- Diccionario Cosmos: Índices precalculados para [reducir drásticamente el tiempo de indexación](https://blog.subquery.network/blogs/20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.html)
- Un curso de aprendizaje paso a paso en la [Academia SubQuery](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
- Soporte completo para Cosmos en nuestra red descentralizada SubQuery (pronto verá un proyecto en nuestra actual red de prueba Frontier)

---

El lanzamiento de nuestro soporte beta significa que SubQuery proporciona soporte multicadena para tres líderes de la capa 1 que se centran en el enfoque multicadena (Polkadot, Avalanche y Cosmos). Estamos deseosos de recibir comentarios de la comunidad para mejorar nuestra oferta y aumentar nuestra visibilidad como socio de infraestructura de confianza para una de las comunidades de desarrolladores de más rápido crecimiento en Web3

*James Bayly*

## Links

- [Guía de Comienzo](https://doc.subquery.network/quickstart/quickstart-cosmos.html)
- [SubQuery University (Documentación)](https://doc.subquery.network/)
- [Ejemplo de Cosmos (Juno) Proyecto --- Ejemplo de Kitchen sink](https://github.com/subquery/juno-subql-starter)
- [Ejemplo de Cosmos (Juno) Proyecto --- votos del fondo de desarrollo Terra](https://github.com/jamesbayly/juno-terra-developer-fund-votes)
- [Gestionar los servicios](https://explorer.subquery.network/)
- [Publica tu propio Proyecto Cosmos al Servicio Administrado](https://project.subquery.network/)

## Acerca de SubQuery

[SubQuery](https://subquery.network/) es un conjunto de herramientas para desarrolladores de blockchain que permite a otros crear aplicaciones Web3 del futuro. Un proyecto de SubQuery es una completa API para organizar y consultar los datos de las cadenas de capa-1. Actualmente prestando servicios a proyectos de Polkadot, Substrate, Avalanche y ahora Cosmos, estos datos como servicio permiten a los desarrolladores centrarse en su caso de uso principal y front-end, sin necesidad de perder tiempo en la creación de un back-end personalizado para el procesamiento de datos. La Red SubQuery propone hacer posible esta misma solución escalable y fiable, pero de forma totalmente descentralizada.

[Linktree](https://linktr.ee/subquerynetwork) | [Sitio web](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
