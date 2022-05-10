# SubQuery se asocia con Darwinia Network para crear la herramienta CLI SubQuery

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

Hoy queremos anunciar nuestra asociación entre Darwinia Network y SubQuery Network. Darwinia ha ganado recientemente su puesto en la subasta de Kusama parachain, y se está preparando para asegurar su puesto en Polkadot. Como parte del roadmap de Darwinia para construir un bridge de cadena cruzada para Polkadot, Darwinia se ha asociado con SubQuery para construir la plétora de aplicaciones que se necesitarán para proporcionar la mejor experiencia de usuario para las interacciones de cadena cruzada

Nuestra asociación va más allá de utilizar SubQuery para potenciar el ecosistema de aplicaciones de Darwinia, Darwinia ha estado trabajando estrechamente con el equipo de SubQuery para [construir una herramienta CLI](https://github.com/fewensa/subquery-cli) para el servicio gestionado de SubQuery ([https://project.subquery.network](https://project.subquery.network)). Puede utilizar esta [CLI](https://github.com/fewensa/subquery-cli) para crear un proyecto SubQuery y desplegar automáticamente una nueva versión en la ranura de staging o de producción. Además, puede recuperar información, incluyendo el estado detallado de la sincronización y los registros de su proyecto en ejecución, que está alojado gratuitamente en SubQuery Projects. Darwinia ha llevado esto aún más lejos y ha construido un ejemplo de flujo de trabajo de [Acción GitHub](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) que utiliza la herramienta CLI para hacer esto en cualquier empuje a la rama principal de su [repositorio](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml). Esta nueva automatización es un excelente ejemplo de la estrecha relación entre Darwinia y SubQuery, y la herramienta CLI ya es utilizada por muchos otros proyectos dentro del amplio ecosistema de SubQuery.
> "La herramienta CLI de SubQuery que hemos construido ha facilitado realmente nuestro proceso de desarrollo, ahora podemos gestionar completamente las versiones en ramas y sentirnos seguros de que nuestros cambios se desplegarán automáticamente en el servicio alojado de SubQuery. Estamos especialmente orgullosos de nuestro proceso automatizado para comprobar si el archivo schema.graphql ha cambiado, y si es así, volvemos a desplegar una nueva base de datos limpia" - Yalin, Core Developer - Darwinia Network


Echa un vistazo a la [nueva herramienta CLI aquí](https://github.com/fewensa/subquery-cli) y ve un [ejemplo vivo de la misma aquí](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml).

La primera de las muchas aplicaciones del creciente ecosistema de aplicaciones de Darwinia es la aplicación [Wormhole](https://wormhole.darwinia.network/). Wormhole es una aplicación fácil de usar que facilita la transferencia de activos entre redes y es una parte clave de la estrategia de cadena cruzada de Darwinia. Actualmente el puente entre Darwinia y Ethereum está operativo. [SubQuery se utiliza para mostrar las transferencias históricas y los eventos](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia) que han ocurrido en su dirección de Darwinia/Crab/Pangolin relacionados con el agujero de gusano (por ejemplo, la llegada de activos de otra red).

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

El equipo de Darwinia está construyendo una nueva [Smart App que es un eje central](https://apps.darwinia.network/) para gestionar todas las interacciones de la red Darwinia, incluyendo la gobernanza, staking, la exploración de la cadena y mucho más. Esta aplicación utiliza una cantidad considerable de datos de [SubQuery para mostrar datos históricos y acciones](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery trabajará estrechamente con el equipo de Darwinia para que esta experiencia de usuario sea la más rápida y sencilla de todo el ecosistema de Polkadot.
> "Estamos muy contentos de utilizar SubQuery para reemplazar nuestros actuales servicios de backend para Wormhole, a largo plazo con la Red SubQuery esto hará que nuestros servicios sean totalmente descentralizados y de código abierto - ¡es algo de lo que estamos orgullosos!" — Yalin, Desarrollador Principal — Red Darwinia


Además, Darwinia está utilizando SubQuery para [proveer los datos que hay detrás](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot) de su [sitio web de oferta de préstamos de Parachain](https://darwinia.network/plo_contribute). Aunque el Cangrejo ya ha ganado su espacio en Kusama, no es demasiado tarde para contribuir a la campaña de Darwinia para conseguir un espacio en Polkadot. También están aprovechando SubQuery para indexar [Rangos de montaña de Merkle](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr) para todos los bloques creados en su red.

La Red Darwinia está utilizando [Proyectos de SubQuery](https://project.subquery.network/) para gestionar su propio proyecto y realizar las actualizaciones necesarias. Los servicios de indexación y consulta que proporcionamos están completamente gestionados por SubQuery y se ofrecen a la comunidad de Polkadot de forma gratuita en [El Explorador de SubQuery](https://explorer.subquery.network/).

## Acerca de Darwinia Network

La red Darwinia es una red descentralizada de cadenas cruzadas que se basa en Substrate, que es el "Golden Gate Bridge" de la ecología de cadenas cruzadas. Proporciona la solución de puente general más segura, conectando Polkadot, Ethereum, BSC y otras cadenas heterogéneas mediante la transferencia de activos entre cadenas y la llamada general a la cadena remota. Además, entre sus principales áreas de aplicación se encuentran Defi, el mercado de comercio NFT de cadena cruzada, los juegos, etc.

[Website](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## Acerca de la Red SubQuery

[SubQuery](https://subquery.network/) es una agregación de datos descentralizada, indexación & capa de consulta entre las blockchains Layer-1 y las aplicaciones descentralizadas (DApps). Actualmente centrado en los proyectos Polkadot y Substrate, este servicio de datos permite a los desarrolladores centrarse en su caso de uso principal y en el frente

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
