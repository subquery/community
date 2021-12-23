# Actualización técnica de noviembre de SubQuery: EVM y actualizaciones de manifiesto

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**Obtenga más información para conocer nuestro análisis técnico profundo de la última versión de SubQuery**

# Soporte para archivos de tipo de cadena externa en el proyecto manifestado

Hoy es el lanzamiento de [versión 0.2.0](https://doc.subquery.network/create/manifest/) de nuestro archivo manifestado de proyecto (`project.yaml`). Esta nueva versión proporciona a los desarrolladores varias mejoras que han sido solicitadas por los clientes.

Lo más importante es que ahora puede hacer referencia a un archivo de definición de tipo de cadena que tiene todos los tipos personalizados incluidos cuando se indexa una cadena de substratos personalizada. Esto le permite conectar rápidamente un nuevo proyecto SubQuery a cualquier cadena basada en substrates, incluyendo todos los parachains de Kusama. Este debería ser un archivo de tipo de cadena estándar que declare los tipos específicos soportados por esta cadena de bloques en cualquiera de los dos `. son` o `formato.yaml`.

Esta solución le permite evitar copiar y gestionar definiciones de tipo de cadena en el manifiesto mismo. y le permite clonar los [archivos de tipo de cadena publicados listados en repositorios como PolkadotJS](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec).

[Puedes leer sobre el nuevo archivo de manifiesto, incluyendo cómo puedes migrar tus proyectos a él, aquí en nuestros documentos actualizados.](https://doc.subquery.network/create/manifest/)

# Soporte para EVM de Moonbeam

La semana pasada tuvimos el placer de [anunciar que estábamos trabajando con Moonbeam para ofrecer soporte completo de indexación EVM y Substrate a Moonriver](https://subquery.medium.com/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff).

Hoy damos seguimiento a ese anuncio con todos los recursos para desarrolladores y lo que necesitas para comenzar.

Actualmente no existe ninguna herramienta de código abierto que permita a los desarrolladores recolectar y consultar datos de forma flexible tanto en Ethereum como en Polkadot/Kusama. Esta limitación puede hacer que las soluciones dApps dentro de Moonriver sean silenciadas en la capa de contratos inteligentes y de este modo limiten su potencial a los consumidores a través de ambas redes de expansión. Esta asociación con Moonbeam trae una solución completa y unificada de indexación de datos para todos los datos de blockchain dentro de Moonriver y beneficiará en gran medida al creciente ecosistema de aplicación de Moonriver.

**SubQuery será un invitado en el próximo taller de constructores lunares el miércoles 1 de diciembre** [**regístrese aquí**](https://www.crowdcast.io/e/moonbuilders-ws/10)**.**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[En primer lugar, familiarícese con la documentación actualizada sobre cómo conectarse e indexar los datos de Moonbeam, Moonbase Alfa y Moonriver.](https://doc.subquery.network/create/moonbeam/) El proceso para indexar los datos en Moonbeam es sólo dos pasos:

## Paso 1: Añadir la fuente de datos personalizados de Moonbeam

Hemos creado un procesador de datos específicamente hecho para trabajar con la implementación de Moonbeam de [Frontier](https://github.com/paritytech/frontier). Le permite hacer referencia a recursos específicos de ABI utilizados por el procesador para analizar argumentos y la dirección del contrato inteligente a la que proceden los eventos o a la que se hace la llamada. [Puedes leer más aquí](https://doc.subquery.network/create/moonbeam/#data-source-spec).

SubQuery introduce filtros más avanzados que otros índices, permitiendo el filtrado de transacciones no contratadas, remitentes de transacciones, contratos y argumentos de registro indexados. Esto permite a los desarrolladores construir una amplia variedad de proyectos que atiendan sus necesidades específicas de datos.

## Paso 2: Indexar datos de Moonbeam

Al igual que un proyecto de SubQuery normal, usas una función de mapeo para transformar los datos de la cadena a las entidades GraphQL que definas, la diferencia es que en lugar de un `SubstrateEvent` o `SubstrateExtrinsic`, tu función de mapeo recibirá una `MoonbeamCall` o `MoonbeamEvent` que se basan en [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) o [Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log) tipo. [Puedes leer más sobre estos aquí](https://doc.subquery.network/create/moonbeam/#moonbeamcall).

[Lea la documentación completa sobre este proceso aquí](https://doc.subquery.network/create/moonbeam/#moonbeamcall)

## Ejemplo de proyecto

Hay un proyecto de ejemplo completo que indexa eth `eventos de transferencia` y `aprueba` llamadas inteligentes de contrato. El código para este proyecto de ejemplo está [aquí en GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter) o accesible a través del [proyecto de subconsulta en SubQuery Explorer aquí](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project).

La mayor parte de los cambios ocurren en el archivo de Manifest (`project.yaml`). A continuación puedes ver que tenemos [filtros de llamadas extendidos](https://doc.subquery.network/create/moonbeam/#call-filters) para soportar [cadenas de firma de función](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) o el sighash de función para filtrar la función llamada en el contrato. Para [filtros de eventos](https://doc.subquery.network/create/moonbeam/#event-filters), puede utilizar el filtrado de temas que sigue el estándar [de filtros de registro JSON-PRC encontrados aquí](https://docs.ethers.io/v5/concepts/events/). Tenga en cuenta que SubQuery introduce filtros más avanzados que otros indexadores para Moonbeam EVM y estas mejoras deberían beneficiar significativamente a los desarrolladores.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

Si estás familiarizado con cómo se realiza el proyecto SubQuery basado en Substrate, notarás lo similares que son las funciones de mapeo para el nuevo soporte Moonriver. Cada función de mapeo recibe una `MoonbeamCall` o `MoonbeamEvent` y los procesa como cualquier otro proyecto de SubQuery.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

Si tienes alguna pregunta al respecto, asegúrate de [revisar nuestros documentos](https://doc.subquery.network/create/moonbeam) o contactarnos en nuestro canal de soporte #técnico en nuestra [comunidad de Discord](https://discord.com/invite/subquery).

[Clonar el proyecto de ejemplo en GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

Como pueden ver, crear un proyecto Moonriver o Moonbase Alpha que indexe los datos de Substrate y EVM en un solo proyecto es extremadamente simple y en gran medida similar. Puedes utilizar las herramientas avanzadas de andamiaje de SubQuery para acelerar el desarrollo de tu dApp y aprovechar o mejorar la indexación para tus datos para construir dApps más intuitivas. ¡No podemos esperar a ver lo que construyes!

## Acerca de SubQuery

SubQuery es una capa de agregación de datos que opera entre las blockchains de la capa 1 (Moonriver y Polkadot) y DApps. Este servicio desbloquea los datos de la cadena de bloques y los transforma a un estado consultable para que pueda ser usado en aplicaciones intuitiva. Permite a los desarrolladores de DApp centrarse en su caso principal de uso y en el front-end, sin necesidad de perder el tiempo en la construcción de un backend personalizado para el procesamiento de datos.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Acerca de Moonbeam

Moonbeam es una plataforma de contratos inteligentes compatible con Ethereum en la red Polkadot que facilita la construcción de aplicaciones nativamente interoperables. Esta compatibilidad con Ethereum permite a los desarrolladores implementar contratos inteligentes de Solidity existentes y frontends de DApp a Moonbeam con cambios mínimos. Como un parachain en la red Polkadot, Moonbeam se beneficiará de la seguridad compartida de la cadena principal de Polkadot e integraciones con otras cadenas conectadas a Polkadot. Actualmente en desarrollo activo por PureStake, se espera que Moonbeam llegue a MainNet para el Q4 2021. Más información: [https://moonbeam.network/](https://moonbeam.network/).
