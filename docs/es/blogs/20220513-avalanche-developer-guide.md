# SubQuery support beta released for Avalanche

![](https://miro.medium.com/max/1400/1*BiJaESR69-vDimBJmXhQvw.png)

Hoy, después de meses de mejoras, refactorización y pruebas, estamos encantados de compartir el apoyo beta de nuestra solución de indexación abierta con la comunidad Avalanche. Después de establecer a SubQuery como el indexador de datos líder en Polkadot, el reciente anuncio de nuestra expansión a Avalancha durante la reciente Cumbre de Avalancha fue recibido con entusiasmo por los desarrolladores ansiosos por una herramienta de indexación flexible y escalable.

Sigue la guía beta aquí:  https://university.subquery.network/quickstart/quickstart-avalanche.html

SubQuery es un indexador de datos abiertos que es flexible y rápido. Nuestra herramienta de indexación abierta está diseñada para ayudar a los desarrolladores a crear su propia API en horas y está diseñada para indexar cadenas increíblemente rápido con la ayuda de diccionarios (índices recalculados). Nuestra experiencia con clientes en todas las verticales en Polkadot (carteras, redes, exploradores, NFT, Debí, escáneres, etc.) nos ha ayudado a construir esto.

A partir de hoy, los desarrolladores de Avalancha podrán acceder a la beta de la misma solución de indexación rápida, flexible y abierta ampliamente utilizada en Polkadot. Como se trata de una versión beta, es probable que tenga algunos problemas. Por ello, agradeceríamos que se informara de cualquier error a nuestro equipo para poder solucionarlo rápidamente.

## ¿Por qué utilizar la SubQuery?

_Ya hay otras opciones en Avalanche, así que ¿por qué construir con SubQuery?_

Esta misma pregunta me la hicieron muchos de los que tuve la suerte de conocer en la Cumbre de las Avalanche. En nuestro espacio suele haber otras tres soluciones:

- Construya su propia solución: ¿Por qué reinventar la rueda? SubQuery se centra en construir un indexador abierto fiable y rápido --- estamos aquí para ahorrarte tiempo
- Servicios de datos estandarizados o "APIs unificadas": Estos proveedores son excelentes si construyes la misma aplicación sobre el mismo contrato inteligente básico que todos los demás, pero no es así. Necesita un conjunto de datos único que le permita construir un producto superior que haga volar a su competencia! Necesita flexibilidad para obtener los datos que necesita en la forma que mejor le convenga
- Otros servicios de datos GraphQL abiertos: Todos los que ya los utilizaban expresaron los mismos problemas, había una grave falta de apoyo a los desarrolladores y algunos problemas de rendimiento importantes. Además, sólo había cobertura en la cadena de contratos, sin planes de ampliación a su siguiente subred

En SubQuery tenemos un SDK de código abierto que es fácil de usar y rápido como un rayo. Le proporciona un punto final GraphQL estándar, o puede consultar directamente la base de datos Postgres.

La fiabilidad es la clave, y necesitas una plataforma fiable y escalable para alojarla. [Servicio gestionado de SubQuery](https://subquery.network/managedservices) es una solución de alojamiento líder en la industria para todos los clientes que está sirviendo cientos de millones de solicitudes diarias a los mayores proyectos en Polkadot. Proporcionamos nuestro [clientes de nivel empresarial](./20211228-enterprise-hosted.md) con servicios como bases de datos dedicadas, clústeres redundantes, enrutamiento inteligente de varios clústeres y supervisión y análisis avanzados. Apoyará su aplicación cuando esté listo y escalará con usted.

Y por último, dentro de unos meses podrá descentralizar completamente su infraestructura SubQuery con la Red SubQuery, el futuro de la infraestructura Web3. La Red SubQuery indexará y servirá los datos de sus proyectos a la comunidad mundial de forma incentivada y verificable. Está diseñado para admitir cualquier proyecto SubQuery de cualquier red de capa 1, incluida Avalanche, para que pueda aprovechar la escala de la red SubQuery unificada desde su lanzamiento.

## Instrucciones de instalación

Sigue la guía de la beta aquí:  https://university.subquery.network/quickstart/quickstart-avalanche.html

Primero tendrás que instalar @subql/cli via *npm i -g @subql/cli*

La mejor manera es comenzar con nuestro proyecto de inicio, que contiene un proyecto en ejecución con un ejemplo de todas las funciones de mapeo: https://github.com/subquery/avalanche-subql-starter. Este proyecto indexa lo siguiente del [Contrato inteligente Pangolin](https://snowtrace.io/token/0x60781c2586d68229fde47564546784ab3faca982):

- BlockHandler: Todos los bloques y su información básica
- TransactionHandler: Todas las transacciones de la función de aprobación dentro del contrato inteligente Pangolin
- EventHandler: Todos los eventos de transferencia del contrato inteligente Pangolin

La implementación de Avalanche de SubQuery ha sido diseñada para funcionar de forma casi idéntica al soporte de Polkadot de SubQuery, y de forma similar al enfoque de Graph. Hemos actualizado el [Universidad SubQuery](https://university.subquery.network/build/introduction.html) para añadir información específica de Avalanche a la documentación general de SubQuery. Puede empezar por seguir esto [excelente guía de iniciación aquí](https://university.subquery.network/quickstart/quickstart-avalanche.html).

## Soporte de SubQuery para Avalanche

Estamos completando la primera fase de nuestro apoyo total al ecosistema de Avalanche.

![](https://miro.medium.com/max/1400/0*GUKZJfJCz1nB_3zc)

Hoy compartimos lo siguiente:

- Indexación avanzada de la cadena de contratos
- Diccionario de avalanchas: Índices precalculados para [reducir drásticamente el tiempo de indexación](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
- Soporte completo para Avalanche en nuestro [nivel empresarial](./20211228-enterprise-hosted.md) servicio gestionado
- Documentación intuitiva en el [Universidad SubQuery](https://university.subquery.network/)

En las próximas semanas puedes esperar:

- Un curso de aprendizaje paso a paso en el [SubQuery Academy](./20211018-subquery-launches-the-subquery-academy.md)
- Soporte completo para Avalanche en nuestra red descentralizada SubQuery (verás un proyecto en nuestra actual testnet Frontier)

Con el número de subredes previstas en los próximos meses, habrá una enorme necesidad de un soporte de indexación rápido, abierto y flexible que funcione en todas las subredes compatibles. Tenemos experiencia en la implementación de este nivel de configurabilidad para los parachains de Polkadot, y estamos investigando cómo proporcionar el mismo resultado para Avalanche (por ejemplo, importando implementaciones personalizadas de snowman.Block, etc).

El lanzamiento de nuestra compatibilidad beta con Avalanche marca un hito importante en nuestro compromiso de ofrecer herramientas de indexación mejoradas a la comunidad de Avalanche para que sus desarrolladores puedan llegar más lejos, con mayor rapidez. Estamos deseosos de recibir comentarios de la comunidad para mejorar nuestra oferta y aumentar nuestra visibilidad como socio de infraestructura de confianza para una de las comunidades de desarrolladores de más rápido crecimiento en Web3

Ahora estamos buscando socios de lanzamiento a los que podamos apoyar de cerca mientras desarrollan sus primeros proyectos de SubQuery en este ecosistema. Ponte en contacto conmigo en james.bayly@subquery.network si quieres ser el primero en el viaje con nosotros.

_James Bayly_

Siga la guía de la beta aquí: https://university.subquery.network/quickstart/quickstart-avalanche.html

## Acerca de SubQuery

[SubQuery](https://subquery.network/) es un conjunto de herramientas para desarrolladores de blockchain que permite a otros construir aplicaciones Web3 del futuro. Un proyecto SubQuery es una API completa para organizar y consultar los datos de las cadenas de la capa 1. Este servicio de datos permite a los desarrolladores centrarse en su caso de uso principal y en el front-end, sin necesidad de perder tiempo en la construcción de un backend personalizado para el procesamiento de datos. SubQuery Network propone hacer posible esta misma solución escalable y fiable, pero de forma totalmente descentralizada.

[Linktree](https://linktr.ee/subquerynetwork)  [Website](https://subquery.network/)  [Discord](https://discord.com/invite/78zg8aBSMG)  [Telegram](https://t.me/subquerynetwork)  [Twitter](https://twitter.com/subquerynetwork)  [Matrix](https://matrix.to/#/#subquery:matrix.org)  [LinkedIn](https://www.linkedin.com/company/subquery)  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
