# SubQuery integra Acala para agregar y servir datos DeFi a creadores de Polkadot y Kusama

![](https://miro.medium.com/max/1400/1*cg4kJs0WEcyPP73EAtHomA.png)

La semana pasada [SubQuery](https://www.subquery.network/) lanzó la siguiente etapa de su proyecto, el [Explorador SubQuery](https://explorer.subquery.network/). Esta semana Acala y SubQuery han finalizado una integración para permitir a los usuarios y desarrolladores consultar y extraer datos del centro DeFi de Acala para Polkadot en solo minutos y de manera gratuita.

SubQuery es una capa de agregación de datos que operará entre la blockchain de capa 1 (Acala) y la capa DApp. La solución agrega y organiza datos de Acala y otras blockchains, brindando datos bien estructurados para que los desarrolladores los usen en una amplia gama de proyectos. Este servicio permite a los desarrolladores de DApp enfocarse en su caso de uso principal y en el front-end, sin necesidad de perder tiempo creando un backend personalizado para el procesamiento de datos.

Acala cree firmemente y es un constructor a largo plazo para el futuro multi-chain - reduciendo la fragmentación de liquidez, aumentando la capacidad de composición y permitiéndole a todos la accesibilidad DeFi. Acala es una blockchain especializada que se centra en las finanzas descentralizadas (DeFi) y que creó múltiples DeFi primitivas que se convirtieron en un centro e infraestructura DeFi al servicio de los ecosistemas de Polkadot y Kusama. El equipo ha creado productos que incluyen una moneda multi-colateralizada (aUSD - el dólar de Acala), un creador de mercado automatizado (AMM) DEX, un activo tokenizado llamado Liquid DOT (LDOT), e implementó una función de "trae tu propio combustible", permitiendo que las tarifas de combustible se paguen en cualquier activo respaldado, como "stablecoins". La parachain de Acala planea jugar el rol de centro DeFi para Polkadot y una plataforma de aterrizaje que agregue activos y liquidez de una variedad de blockchains.

Cuando acceda hoy al [Explorador SubQuery](https://explorer.subquery.network/), se le dará la bienvenida con un nuevo Proyecto SubQuery Acala. SubQuery rastrea dinámicamente todos los datos extrínsecos creados en Acala y puede mostrar rápidamente estadísticas agregadas derivadas para lo siguiente:

-   Datos históricos de cambios de liquidez (desglosados por proveedores)
-   Datos históricos sobre todos los intercambios de activos entre cadenas
-   Historial de transferencias

![](https://miro.medium.com/max/1400/0*sXPljA1RE754fuDQ)

Puede jugar con el gráfico de Acala SubQuery usando el [Explorador](https://explorer.subquery.network/) sin implementar nada en el código. Adicionalmente hemos documentado los tipos que puede especificar en cada solicitud GraphQL al analizar los datos de Acala.

A continuación hay un ejemplo simple de cómo un usuario puede ver de manera fácil y rápida los 5 eventos de transferencia anteriores usando el token ACA a través de la red Acala Mandala. Puede ver aquí que usamos un lenguaje GraphQL simple para organizar y recuperar estos datos para cualquier cliente. Las DApps pueden usar esto para monitorear posiciones de préstamos y saltar a las subastas para ayudar a liquidar garantías.

![](https://miro.medium.com/max/1400/0*zlxPf2tz8DVX95kY)

A continuación, un ejemplo un poco más complejo en el que inspeccionamos una sola cuenta y recuperamos todos los eventos de intercambio de tokens que realizó. Una DApp de portafolio puede utilizar estos datos para crear un resumen de la cuenta del titular y el rendimiento del token, los ingresos por participación, aprovisionamiento de liquidez y gastos de endeudamiento.

![](https://miro.medium.com/max/1400/0*hdTbn41vDvIYuv3_)

[El explorador SubQuery](https://explorer.subquery.network/) es un servicio alojado en línea que proporciona acceso a proyectos publicados de SubQuery realizados por contribuyentes de todo el mundo y administrados por el equipo de SubQuery. Su misión es facilitar el acceso a los datos de la red Polkadot al proveer servicios de infraestructura para ayudar a los desarrolladores a lograr más.

[SubQuery](https://www.subquery.network/) permite a cada equipo de Substrate/Polkadot procesar y consultar sus datos. El proyecto está inspirado en el crecimiento de los protocolos de datos que sirven a la capa de aplicación y su meta es ayudar a los proyectos Polkadot/Substrate a construir mejores dApps al permitirle a cualquier persona encontrar y consumir datos de una manera más confiable y rápida. Hoy cualquiera puede consultar y extraer datos de la red Polkadot en solo minutos y sin costo alguno.

[Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

[Acala](http://acala.network/) es el centro financiero descentralizado y la moneda estable de Polkadot que hace que sea rápido y fácil de usar o crear aplicaciones financieras, mejorando la eficiencia comercial y ahorrando tiempo. La plataforma ofrece un paquete de primitivas financieras: una moneda estable con múltiples garantías, respaldada por activos crosschain como Bitcoin, un derivado de participación sin confianza y un intercambio descentralizado para liberar liquidez y alimentar innovaciones financieras. Acala es la plataforma abierta de facto para que las aplicaciones financieras usen contratos inteligentes o protocolos integrados con capacidades cross-chain listas para usar y seguridad robusta.

[Discord](https://discord.gg/vdbFVCH) | [Website](https://acala.network/) | [Twitter](https://twitter.com/AcalaNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [Acala Wiki](https://github.com/AcalaNetwork/Acala/wiki) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc)