# Actualización técnica de noviembre de SubQuery: EVM y actualizaciones de manifiesto

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**Obtenga más información para conocer nuestro análisis técnico profundo de la última versión de SubQuery**

## Support for External Chain Type Files in Project Manifest

Hoy es el lanzamiento de [versión 0.2.0](https://doc.subquery.network/create/manifest/) de nuestro archivo manifestado de proyecto (`project.yaml`). Esta nueva versión proporciona a los desarrolladores varias mejoras que han sido solicitadas por los clientes.

Lo más importante es que ahora puede hacer referencia a un archivo de definición de tipo de cadena que tiene todos los tipos personalizados incluidos cuando se indexa una cadena de substratos personalizada. Esto le permite conectar rápidamente un nuevo proyecto SubQuery a cualquier cadena basada en substrates, incluyendo todos los parachains de Kusama. Este debería ser un archivo de tipo de cadena estándar que declare los tipos específicos soportados por esta cadena de bloques en cualquiera de los dos `. son` o `formato.yaml`.

Esta solución le permite evitar copiar y gestionar definiciones de tipo de cadena en el manifiesto mismo. y le permite clonar los [archivos de tipo de cadena publicados listados en repositorios como PolkadotJS](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec).

[Puedes leer sobre el nuevo archivo de manifiesto, incluyendo cómo puedes migrar tus proyectos a él, aquí en nuestros documentos actualizados.](https://doc.subquery.network/create/manifest/)

## Moonbeam EVM Support

Last week we were pleased to [announce that we were working with Moonbeam to bring complete EVM and Substrate indexing support to Moonriver](../customer_announcements/20211028-moonbeam-evm.md).

Hoy damos seguimiento a ese anuncio con todos los recursos para desarrolladores y lo que necesitas para comenzar.

Actualmente no existe ninguna herramienta de código abierto que permita a los desarrolladores recolectar y consultar datos de forma flexible tanto en Ethereum como en Polkadot/Kusama. Esta limitación puede hacer que las soluciones dApps dentro de Moonriver sean silenciadas en la capa de contratos inteligentes y de este modo limiten su potencial a los consumidores a través de ambas redes de expansión. Esta asociación con Moonbeam trae una solución completa y unificada de indexación de datos para todos los datos de blockchain dentro de Moonriver y beneficiará en gran medida al creciente ecosistema de aplicación de Moonriver.

**SubQuery será un invitado en el próximo taller de constructores lunares el miércoles 1 de diciembre** [**regístrese aquí**](https://www.crowdcast.io/e/moonbuilders-ws/10)**.**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[Firstly, familiarize yourself with the updated documentation on how to connect to and index data from Moonbeam, Moonbase Alpha, and Moonriver.](https://doc.subquery.network/create/substrate-evm/) The process to index Moonbeam data is only two steps:

### Step 1: Add the Moonbeam Custom Data Source

Hemos creado un procesador de datos específicamente hecho para trabajar con la implementación de Moonbeam de [Frontier](https://github.com/paritytech/frontier). Le permite hacer referencia a recursos específicos de ABI utilizados por el procesador para analizar argumentos y la dirección del contrato inteligente a la que proceden los eventos o a la que se hace la llamada. [You can read more here](https://doc.subquery.network/create/substrate-evm/#data-source-spec).

SubQuery introduce filtros más avanzados que otros índices, permitiendo el filtrado de transacciones no contratadas, remitentes de transacciones, contratos y argumentos de registro indexados. Esto permite a los desarrolladores construir una amplia variedad de proyectos que atiendan sus necesidades específicas de datos.

### Step 2: Index Moonbeam Data

Al igual que un proyecto de SubQuery normal, usas una función de mapeo para transformar los datos de la cadena a las entidades GraphQL que definas, la diferencia es que en lugar de un `SubstrateEvent` o `SubstrateExtrinsic`, tu función de mapeo recibirá una `MoonbeamCall` o `MoonbeamEvent` que se basan en [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) o [Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log) tipo. [You can read more about these here](https://doc.subquery.network/create/substrate-evm/#frontierevmcall).

[Lea la documentación completa sobre este proceso aquí](https://doc.subquery.network/create/substrate-evm/#frontierevmcall)

### Example Project

Hay un proyecto de ejemplo completo que indexa eth `eventos de transferencia` y `aprueba` llamadas inteligentes de contrato. El código para este proyecto de ejemplo está [aquí en GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter) o accesible a través del [proyecto de subconsulta en SubQuery Explorer aquí](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project).

La mayor parte de los cambios ocurren en el archivo de Manifest (`project.yaml`). You can see below that we have [extended call filters](https://doc.subquery.network/create/substrate-evm/#call-filters) to support either [function signature strings](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) or the function sighash to filter the function called on the contract. For [event filters](https://doc.subquery.network/create/substrate-evm/#event-filters), you can use topics filtering that follows the [Ethereum JSON-PRC log filters standard found here](https://docs.ethers.io/v5/concepts/events/). Tenga en cuenta que SubQuery introduce filtros más avanzados que otros indexadores para Moonbeam EVM y estas mejoras deberían beneficiar significativamente a los desarrolladores.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

Si estás familiarizado con cómo se realiza el proyecto SubQuery basado en Substrate, notarás lo similares que son las funciones de mapeo para el nuevo soporte Moonriver. Cada función de mapeo recibe una `MoonbeamCall` o `MoonbeamEvent` y los procesa como cualquier otro proyecto de SubQuery.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

If you have any questions about this make sure you [check our docs](https://doc.subquery.network/create/substrate-evm) or reach out to us on our #technical-support channel in our [Discord community](https://discord.com/invite/subquery).

[Clonar el proyecto de ejemplo en GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

Como pueden ver, crear un proyecto Moonriver o Moonbase Alpha que indexe los datos de Substrate y EVM en un solo proyecto es extremadamente simple y en gran medida similar. Puedes utilizar las herramientas avanzadas de andamiaje de SubQuery para acelerar el desarrollo de tu dApp y aprovechar o mejorar la indexación para tus datos para construir dApps más intuitivas. ¡No podemos esperar a ver lo que construyes!

## About SubQuery

SubQuery es una capa de agregación de datos que opera entre las blockchains de la capa 1 (Moonriver y Polkadot) y DApps. Este servicio desbloquea los datos de la cadena de bloques y los transforma a un estado consultable para que pueda ser usado en aplicaciones intuitiva. Permite a los desarrolladores de DApp centrarse en su caso principal de uso y en el front-end, sin necesidad de perder el tiempo en la construcción de un backend personalizado para el procesamiento de datos.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## About Moonbeam

Moonbeam es una plataforma de contratos inteligentes compatible con Ethereum en la red Polkadot que facilita la construcción de aplicaciones nativamente interoperables. Esta compatibilidad con Ethereum permite a los desarrolladores implementar contratos inteligentes de Solidity existentes y frontends de DApp a Moonbeam con cambios mínimos. Como un parachain en la red Polkadot, Moonbeam se beneficiará de la seguridad compartida de la cadena principal de Polkadot e integraciones con otras cadenas conectadas a Polkadot. Actualmente en desarrollo activo por PureStake, se espera que Moonbeam llegue a MainNet para el Q4 2021. Más información: [https://moonbeam.network/](https://moonbeam.network/).
