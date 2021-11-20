# Las sesiones de despliegue están aquí para los proyectos de SubQuery

> Hoy estamos presentando espacios de implementación, una característica completamente nueva que mejora la experiencia del desarrollador en el servicio alojado de SubQuery.

[Proyectos de SubQuery](https://project.subquery.network/) ya están siendo utilizados como un servicio administrado y alojado para muchos Proyectos, ya sean exploradores de cadenas, billeteras, exploradores de NFT u otros. Es un servicio en el que nuestros clientes confían.

![](https://miro.medium.com/max/1400/0*PugDgh6weZspRIO2)

Ahora puedes desplegar en una ranura de staging aislada

Aunque siempre puede ejecutar la infraestructura de SubQuery usted mismo (con su propio servicio de nodo y consulta), nuestro objetivo es hacer de nuestro servicio hospedado el proveedor de datos más confiable, resistente y eficiente en el ecosistema Polkadot/Substrate.

Los creadores de [SubQuery Projects](https://project.subquery.network/) están mejorando y actualizando constantemente sus Proyectos y los datos dentro de esos proyectos. Lamentablemente se tarda horas si no días en reindexar los datos de la cadena en caso de un cambio importante — en última instancia nuestro objetivo de permitirle actualizar su proyecto, reindexar sus datos y actualizar sus SubQuery Proyects alojados con **cero tiempo de inactividad**

**Eso es lo que las ranuras de despliegue están aquí para resolver**

![](https://miro.medium.com/max/1400/0*vQ33aqhn1eVllo5t)

Su espacio de puesta en escena funcionará independientemente de la ranura de producción primaria

Al crear un nuevo despliegue en su [SubQuery Project en nuestro servicio alojado](https://project.subquery.network/), Usted puede elegir o bien desplegar en el espacio de producción o de puesta en escena. Estos dos espacios son entornos aislados y cada uno tiene sus propias bases de datos y sincronizan de forma independiente. Una vez que tu staging ha comenzado y completado la indexación, puedes promoverla a la producción sin tiempo de inactividad.

La ranura de montaje es perfecta para:

-   Validar los cambios en su proyecto de SubQuery en un entorno separado. La ranura de staging tiene una URL diferente a la de producción que puedes utilizar en tu dApps.
-   Calentando e indexando datos para un proyecto actualizado de SubQuery para eliminar los tiempos de inactividad en tu dApp
-   Preparando una nueva versión para su SubQuery Project sin exponerla públicamente. El espacio para escenarios no se muestra al público en el explorador y tiene una URL única que solo es visible para usted.

Puedes probarlo tú mismo ahora en [SubQuery Proyects](https://project.subquery.network/).