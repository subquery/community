# La guía de incorporación de SubQuery Terra

![](https://miro.medium.com/max/1400/1*DiTE9KuzH0xHLojzGWxOuw.png)

Durante bastante tiempo hemos estado desarrollando y perfeccionando el soporte de Terra entre bastidores y probándolo con los principales socios de lanzamiento del desarrollo (estén atentos a los anuncios en los próximos días). Este prolongado período nos ha permitido confiar plenamente en la escalabilidad, la fiabilidad y las funciones que SubQuery aporta hoy a Terra. En este artículo compartimos una guía detallada para desarrolladores y una hoja de ruta para que toda la comunidad de Terra pueda utilizarla para resolver sus necesidades de indexación de datos.

SubQuery es un indexador de datos abierto, flexible y rápido. Nuestra herramienta de indexación abierta está diseñada para ayudar a los desarrolladores a construir su propia API en horas, y está diseñada para indexar cadenas increíblemente rápido con la ayuda de diccionarios (índices precalculados). Nuestra experiencia con clientes de todos los verticales en Polkadot (carteras, redes, exploradores, NFT, DeFi, escáneres, etc) nos ha ayudado a construir esto.

Esto todavía está en sus primeras versiones, y aunque consideramos que está mucho más allá de una "beta", agradeceríamos que se informara de cualquier error a nuestro equipo para poder solucionarlo rápidamente.

<iframe width="656" height="369" src="https://www.youtube.com/embed/dS7h3isQCeA" title="Vista previa de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ¿Por qué usar SubQuery?

El ecosistema de aplicaciones ha prosperado en Terra a pesar de la grave carencia de algunas herramientas clave para desarrolladores y servicios de infraestructura. Es asombroso de ver, y un testimonio del empuje e ingenio de los Lunatics en Terra. En la mayoría de los casos, cuando preguntamos a los equipos cómo resolvían sus necesidades de indexación de datos, fue:

- **Construya su propia solución:** Una implementación personalizada construida por usted mismo específicamente para su aplicación. Pero, ¿por qué reinventar la rueda? SubQuery se centra en crear un indexador abierto fiable y rápido: estamos aquí para ahorrarle tiempo
- **Diseño de contratos inteligentes para consultas:** Algunos equipos estaban incluso implementando peculiaridades personalizadas en sus contratos inteligentes para permitir específicamente consultas más avanzadas específicas para su lógica de aplicación.

En SubQuery tenemos un SDK de código abierto que es fácil de usar y rápido como un rayo. Le proporciona un punto final GraphQL estándar, o puede consultar directamente la base de datos Postgres. Con él puedes indexar un conjunto único de datos de tus propios contratos inteligentes que te permiten construir un producto superior que haga volar a tu competencia! Le damos flexibilidad para que obtenga los datos que necesita en la forma que más le convenga.

La fiabilidad es la clave, y necesitas una plataforma fiable y escalable para alojarla. [El servicio gestionado de SubQuery](https://subquery.network/managedservices) es una solución de alojamiento líder en la industria para todos los clientes que está sirviendo cientos de millones de peticiones diarias a los mayores proyectos de Polkadot. Proporcionamos a nuestros [clientes de nivel empresarial](./20211228-enterprise-hosted.md) servicios como bases de datos dedicadas, clústeres redundantes, enrutamiento inteligente de varios clústeres y supervisión y análisis avanzados. Apoyará su aplicación cuando esté listo y escalará con usted.

Y por último, dentro de unos meses podrá descentralizar completamente su infraestructura SubQuery con la Red SubQuery, el futuro de la infraestructura Web3. La Red SubQuery indexará y servirá los datos de sus proyectos a la comunidad mundial de forma incentivada y verificable. Está diseñado para admitir cualquier proyecto SubQuery de cualquier red de capa 1, incluida Terra, para que pueda aprovechar la escala de la red SubQuery unificada desde el lanzamiento.

## Ver instrucciones de instalación

Primero tendrá que instalar una versión reciente de @subql/cli mediante npm i -g @subql/cli@latest

La mejor manera es comenzar con [nuestro proyecto de inicio](https://github.com/subquery/terra-subql-starter), contiene un proyecto en ejecución con un ejemplo de todas las funciones de mapeo: Este proyecto indexa lo siguiente:

- **BlockHandler:** Todos los bloques y su hash y altura
- **TransactionHandler:** Todas las transacciones y su hash, altura y timestamp
- **EventHandler:** Todos los eventos de transferencia de contratos inteligentes y su hash, altura, remitente, destinatario e importe de una dirección de contrato inteligente filtrada (bLuna)
- **MessageHandler:** Todos los mensajes del contrato inteligente y sus datos de hash, altura, contrato, remitente y execute_msg de una dirección de contrato inteligente filtrada (bLuna)

SubQuery soporta la indexación de los contratos inteligentes de Terra con suscripciones y manejadores tanto de transacciones como de mensajes. Puedes ver un ejemplo de funcionamiento del soporte de Smart Contract en el [proyecto inicial](https://github.com/subquery/terra-subql-starter) y leer la documentación en la [Universidad SubQuery](http://localhost:8080/build/manifest.html#mapping-handlers-and-filters).

La implementación de Terra de SubQuery ha sido diseñada para funcionar de forma casi idéntica al soporte Polkadot de SubQuery, y de forma similar al enfoque de Graph. Hemos actualizado la [Universidad SubQuery](https://university.subquery.network/) para añadir información específica de Terra a la documentación general de SubQuery. Puedes empezar siguiendo esta [excelente guía de inicio aquí](http://university.subquery.network/quickstart/quickstart-terra.html).

## Despliegue de su proyecto en el servicio gestionado de SubQuery

Aunque siempre podrá ejecutar su proyecto en su propia infraestructura fácilmente, el servicio gestionado de [SubQuery](https://subquery.network/managedservices) soporta ahora el proyecto Terra. Algunos de los mayores proyectos dependen del servicio gestionado de [nivel empresarial](./20211228-enterprise-hosted.md) de SubQuery y ahora usted también puede hacerlo. Como parte de nuestro acuerdo de socio de lanzamiento, le proporcionamos 3 meses de alojamiento gratuito.

Puede [seguir la guía aquí](https://university.subquery.network/run_publish/publish.html) para publicar su proyecto Terra SubQuery en nuestro servicio gestionado. Tenga en cuenta que debe alojar su proyecto [SubQuery utilizando IPFS](https://university.subquery.network/run_publish/publish.html) en lugar de GitHub.

Puede actualizar su proyecto de servicios gestionados tanto como quiera. Incluso disponemos de una ranura de despliegue [de etapas](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md) para permitirle hacer actualizaciones azules/verdes sin ningún tiempo de inactividad. Esta ranura de puesta en escena también se puede utilizar para ejecutar una instancia limpia de SubQuery con una base de datos fresca para la reindexación completa de fondo de su proyecto. Los clientes suelen vincular la ranura de preparación a las versiones de preparación/desarrollo de sus aplicaciones.

Una vez desplegado, puede acceder a su proyecto utilizando el Explorador de SubQuery, y hacer peticiones directamente desde su aplicación al punto final GraphQL proporcionado. Háganos saber si desea que habilitemos características más avanzadas como [suscripciones a GraphQL](https://university.subquery.network/run_publish/subscription.html), consultas más complejas y [funciones de agregación](https://university.subquery.network/run_publish/aggregate.html).

Por favor, notifíquenos una vez que haya desplegado su proyecto, ya que podemos necesitar ayuda para ajustar el tamaño del lote para asegurar que nuestro nodo de archivo Terra funcione bien para su proyecto.

## Soporte de SubQuery para Terra

Hoy estamos compartiendo lo siguiente:

-   Indexación avanzada de bloques, evento
-   Terra Dictionary: Índices precalculados para [reducir drásticamente el tiempo de indexación](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
-   Soporte completo para Terra en nuestro servicio gestionado gratuito de [nivel empresarial](./20211228-enterprise-hosted.md)
-   Documentación intuitiva en la [Universidad SubQuery](https://university.subquery.network/)

En las próximas semanas puedes esperar:

-   Un curso de aprendizaje paso a paso en la[SubQuery Academy](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   Soporte total para Terra en nuestra SubQuery Network descentralizada (pronto verás un proyecto en nuestra red de pruebas de Frontier actual)

---

El lanzamiento de nuestro soporte beta para Terra marca un hito significativo en nuestro compromiso de ofrecer herramientas mejoradas de indexación para la comunidad Terra para permitir a sus desarrolladores ir más lejos, más rápido. Estamos ansiosos por recibir comentarios de la comunidad para mejorar nuestra oferta y aumentar nuestra visibilidad como socio de infraestructura de confianza para una de las comunidades de desarrolladores de más rápido crecimiento en Web3

James Bayly

## Links

-   [Guía de Comienzo](https://university.subquery.network/quickstart/quickstart-terra.html)
-   [SubQuery University (Documentación)](https://university.subquery.network/)
-   [Ejemplo de proyecto Terra](https://github.com/subquery/terra-subql-starter)
-   [Gestionar los servicios](https://explorer.subquery.network/)
-   [Publica tu propio proyecto Terra al Servicio Administrado](https://project.subquery.network/)

## Acerca de SubQuery

[SubQuery](https://subquery.network/) es un conjunto de herramientas para desarrolladores de blockchain que permite a otros crear aplicaciones Web3 del futuro. Un proyecto de SubQuery es una completa API para organizar y consultar los datos de las cadenas de capa-1. Actualmente, sirviendo a los proyectos de Polkadot, Substrate y Avalanche, este servicio de datos permite a los desarrolladores centrarse en su caso de uso principal y en la linea de diseño además de los elementos gráficos, sin necesidad de perder tiempo en la creación de un codigo interno personalizado para el procesamiento de datos. La Red SubQuery propone hacer posible esta misma solución escalable y fiable, pero de forma totalmente descentralizada.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
