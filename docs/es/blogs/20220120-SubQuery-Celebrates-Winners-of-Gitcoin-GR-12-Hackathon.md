# SubQuery celebra a los ganadores del Hackathon Gitcoin GR 12

![](https://miro.medium.com/max/1400/1*MnMY9j3nasex9_9MNHUPtA.png)

SubQuery, la solución de indexación de datos líder en Polkadot, se complace en anunciar a los ganadores [del reciente Hackathon Gitcoin GR 12](https://gitcoin.co/hackathon/gr12?org=subquery). Gitcoin es considerada una de las comunidades de desarrolladores de blockchain más importantes, centrada en la creación de comunidades y aplicaciones para Web3. [SubQuery se asoció con Gitcoin en diciembre](https://subquery.medium.com/subquery-announces-gitcoin-hackathon-16c9d18753a) para patrocinar cinco retos por un valor de 37.000 dólares (el mayor premio del reto), invitando a los desarrolladores a construir herramientas útiles, cuadros de mando e incluso a extender SubQuery a otra blockchain de capa 1.

El Hackathon tuvo lugar entre el 1 y el 16 de diciembre de 2021 con proyectos de blockchain líderes como Moonbeam, Astar y Acala que contribuyeron a varios premios. Los premios se conceden a aquellos que hayan completado con éxito los proyectos según los estándares preestablecidos y a quienes aporten las ideas más creativas, o aquellas que resuelvan áreas para mejorar el core SDK de SubQuery. A continuación se presenta un breve resumen de los retos:

- [Crear un explorador de bloques unificado que combine los conocimientos de substrate, EVM de Moonbeam y Astar en una aplicación fácil de usar](https://gitcoin.co/issue/subquery/grants/1) - 12.000 dólares [Patrocinado por Moonbeam y Astar]
- [Crear un panel de control DeFi inspirado en Zapper.fi o defisaver.com](https://gitcoin.co/issue/subquery/grants/2) - 8.000 dólares [Patrocinado por Acala]
- [Crear un panel de control de staking que muestre las mejores oportunidades de esta misma, en Polkadot y sus diversas parachains](https://gitcoin.co/issue/subquery/grants/3) - 3.000 dólares
- [Construir un explorador de mercado para todas las NFT basadas en el protocolo RMRK](https://gitcoin.co/issue/subquery/grants/4) - 2.000 dólares
- [Extender el servicio @subql/node para indexar datos de otra cadena de capa 1](https://gitcoin.co/issue/subquery/grants/5) - 12.000 dólares

## Explorador de bloques de substrate y EVM unificado

El ecosistema Polkadot/Kusama consiste en blockchains (llamados Parachains) construidos usando Substrate, la cual utiliza la API de Substrate. Sin embargo, algunas Parachains, como Moonbeam y Astar, ofrecen una compatibilidad perfecta con Ethereum al tener un componente EVM totalmente compatible. Tener una visibilidad simultánea de los datos de Substrate y EVM es actualmente un reto, lo que resulta en dos experiencias aisladas dentro de Moonbeam y Moonriver. Hay que elegir entre el lado de Substrate (por ejemplo, Subscan) y el lado de EVM (por ejemplo, Moonscan & Blockscout).

Este reto se planteó para hacer frente a la enorme oportunidad de construir un único lugar para comprender el historial completo de la actividad de una cuenta. Por ejemplo, para ver las acciones de staking, gobernanza y las transferencias de ERC20 en una única interfaz de usuario. Esta sería una aplicación utilizada a diario por las comunidades masivas de Moonbeam, Astar y muchas otras parachains compatibles con EVM que están despegando.

![](https://miro.medium.com/max/1400/0*b_o0NDpJOCv0QvXS)

El ganador de [este reto](https://gitcoin.co/issue/subquery/grants/1/10002717200027175) ha sido @bizzyvinci el cual [ha construido un explorador frontend que está en vivo en Heroku](https://moonriver-explorer.herokuapp.com/). Dado que este reto es una tarea enorme, no es de extrañar que aún no se haya completado al 100%, pero estamos entusiasmados por apoyar el progreso de esta innovación que cambia las reglas del juego y ayudar a extenderla a otras cadenas de EVM.

@bizzyvinci dijo lo siguiente: "Construí el [Explorador de Moonriver](https://moonriver-explorer.herokuapp.com/) y fue una experiencia increíble. El primer paso fue aprender sobre SubQuery y maldita sea, tienen una documentación impresionante que se acompañan con repositorios de plantillas. La documentación cubre todo lo necesario para empezar y explica bien cada aspecto como el archivo de manifiesto, el esquema de graphql entre otros."

## Karura/Acala DeFi Dashboard

Acala y Karura representan una gran visión del futuro de DeFi, por lo que existe una gran oportunidad de crear herramientas valiosas para el ecosistema. Este reto requirió que los desarrolladores crearan herramientas DeFi para la comunidad de Karura/Acala que se inspiran en los servicios de indexación de datos de SubQuery como [Zapper.fi](http://zapper.fi/) y [defisaver.com](http://defisaver.com/).

El ganador de [este reto](https://gitcoin.co/issue/subquery/grants/2/100027176) fue Web3Go, que construyó un resumen realmente bonito de las [Posiciones de Deuda Colateral (PDC)](https://web3go.xyz/#/CDPDetail) de Acala. Para que los usuarios puedan mintear stablecoins de kUSD en Karura, primero deben depositar tokens de uno de los activos de garantía aceptados (por ejemplo, KSM). Una vez que el usuario ha hecho esto, el parámetro de ratio de garantía mínima determina la cantidad mínima de la garantía necesaria para que el usuario acuñe kUSD. Si el precio de mercado del activo de garantía del CDP baja lo suficiente, el CDP puede considerarse "inseguro".

![](https://miro.medium.com/max/1400/0*l7GA1axntiHCINRM)

La interfaz de Web3Go enumera limpiamente todas las posiciones del CDP, su ratio y su estado de seguridad. Para cada posición, también proporciona información sobre el historial de la posición y permite fácilmente que otros supervisen el instrumento financiero. <iframe width="560" height="315" src="https://www.youtube.com/embed/hc3YDjv6dkk" title="Vista previa de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

## Polkadot Staking Dashboard

Staking es una forma clave de usar tus tokens DOT y KSM, pero actualmente la UX para esta es difícil de entender y hace que la mayoría de los usuarios tomen decisiones sin conocimiento.

El objetivo de este reto era combinar los datos de la cadena y una experiencia de usuario intuitiva, para ayudar a los usuarios a comprender el mejor rendimiento estimado de las apuestas, comparar el rendimiento histórico de los validadores y mostrar a los usuarios cuál podría ser el rendimiento de su inversión.

Ashik construyó PolkStakes, un [sitio web de clasificación de validadores de Polkadot](https://polkstakes.vercel.app/) que obtiene todos los validadores y muestra una lista limpia y organizada de validadores en Polkadot con la propia clasificación de PolkStake (basada en el rendimiento de la era anterior, las comisiones, el pago y las recompensas de las apuestas, etc.). Es una interfaz de usuario limpia y sencilla que realmente nos ha impresionado.

![](https://miro.medium.com/max/1400/0*Kaho31-nn-ly8tFS)

"_Subquery reduce el esfuerzo de indexar manualmente los datos de la cadena. Ya que ofrece un punto final de graphql, podemos consultar datos fácilmente. Reduce el esfuerzo de mantener un backend y una base de datos. Ahora, la agregación de datos para calcular la clasificación de Polkstakes se realiza en la interfaz de usuario. Esto tiene que moverse a SubQuery. Además, hay que mejorar la visualización de los datos indexados y añadir una predicción más precisa del rendimiento estimado._" - Ashik de Polkdata

El excelente equipo de SubVis también construyó un [hermoso tablero de apuestas de Polkadot](https://polkadot-staking-dashboard.vercel.app/) que muestra las estadísticas totales de apuestas a lo largo del tiempo y el rendimiento del validador en un solo lugar. Las nuevas funciones de apuestas se unen a las páginas de subastas y préstamos colectivos por las que SubVis es bien conocida.

![](https://miro.medium.com/max/1400/0*uPDQdMug2JaZwMbA)

Por último, Web3Go ha publicado otra excelente entrada con estadísticas de staking detalladas sobre Moonriver. Proporcionan información incluso sobre los delegados de cada collator, las recompensas históricas proporcionadas por cada uno de ellos e incluso las acciones que realizan. Ofrecen la ventaja adicional de poder mostrar el historial de staking de su propia dirección de cartera.

![](https://miro.medium.com/max/1400/0*jQgOnvcaXt6cprJR)

## RMRK NFT Marketplace Explorer

RMRK es un protocolo avanzado de legos en NFT que hace que estos sean mucho más que un simple jpeg. El equipo de RMRK está aportando nuevos estándares de NFT al ecosistema DOT, y liderando la construcción de la próxima generación.

Este reto requería la creación de un tablero detallado que siguiera la evolución de todos los RMRKs (centrándose potencialmente en [Kanarias](https://kanaria.rmrk.app/)), incluyendo las transferencias, el historial de emoticonos, y más en todo el RMRK2. Este tablero tenía que usar un proyecto de SubQuery centrado en RMRK2.

El ganador de [este reto](https://gitcoin.co/issue/subquery/grants/4/100027174) fue otro excelente panel de control de Web3Go llamado [Jardín NFT](https://web3go.xyz/#/NFTProfiler). Incluye detalles en profundidad sobre cada colección de NFT, como precios medios, volúmenes, rangos de precios y todas las transacciones de cada artículo. Además, hay algunas visualizaciones interesantes sobre todos los rasgos dentro de los NFT.

![](https://miro.medium.com/max/1400/0*1_mUnNIBYI84G_qs)

"_Desde el inicio de Web3Go, hemos estado utilizando SubQuery como la arquitectura subyacente para la indexación de datos. El kit de desarrollo proporcionado por SubQuery ha demostrado ser muy adecuado para que nuestro equipo desarrolle, despliegue y actualice rápidamente los proyectos, lo que también es la clave de nuestros buenos resultados en el Hackathon de Gitcoin. En el siguiente paso, utilizaremos Subquery para desarrollar cuadros de mando para todos los proyectos en las parachains de Polkadot & Kusama, en los que participarán Defi, NFT y Tokens!_" dice Hao Ding de Web3Go.

## Extend SubQuery to another Layer-1 Blockchain

SubQuery es nativo de Polkadot, es nuestra casa y hemos trabajado duro para construir relaciones en este ecosistema. A pesar de esto, también creemos en un futuro multicadena, ya que sabemos que va a haber muchas blockchains diferentes trabajando juntas para resolver diferentes problemas. Nuestro plan a largo plazo es tomar SubQuery y adaptarlo para que funcione en otras blockchains que no tienen una solución de indexación actual, para así ayudar a los desarrolladores a construir nuevas dApps.

El ganador de [este reto de 12.000 dólares](https://gitcoin.co/issue/subquery/grants/5/100027175) fue Naveen, que amplió a SubQuery para indexar la blockchain de Terra. Esto se implementó creando un fork que extiende el paquete node de la implementación oficial de subql para indexar Terra. Naveen sigue trabajando en esto y pronto podrás esperar noticias sobre los planes de SubQuery para soportar otras cadenas de capa 1 fuera de Polkadot. <iframe width="560" height="315" src="https://www.youtube.com/embed/K_pjh5OC95A" title="Vista previa de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

"_He estado estudiando un montón de indexadores en los últimos meses y llegué a construir un indexador desde cero. Esa podría ser la razón por la que SubQuery llamó mi atención en el Hackathon Gitcoin GR12. Me di a la tarea de extender SubQuery para indexar Terra. No creía que pudiera conseguirlo en 15 días. Pero la arquitectura de SubQuery ha sido tan magnífica que me ha permitido crear una imagen mental de lo que ocurre bajo el capó muy rápidamente. He conseguido una solución que funciona justo a tiempo y actualmente estoy trabajando con SubQuery para fusionar el indexador Terra en el paquete subql. En un futuro próximo, seguiré trabajando con SubQuery para mantener y ampliar el proyecto y, posiblemente, para construir indexadores para otras cadenas de capa 1_", dijo Naveen.

[Sam Zou](https://twitter.com/zoujialiu), director general y fundador de SubQuery comentó: "_SubQuery está encantado con los resultados del Hackathon Gitcoin GR12. Nuestra misión se basa en contar con una red de desarrolladores que estén capacitados para crear e innovar dentro del ecosistema de Substrate/Polkadot. Esta asociación ofreció oportunidades a desarrolladores motivados de todo el mundo para construir las aplicaciones del mañana. Estamos entusiasmados por nutrir a los ganadores de los retos para que desarrollen aún más sus ideas_"

Tras este exitoso Hackathon, SubQuery quiere animar a los desarrolladores que quieran aprender más sobre cómo crear aplicaciones con SubQuery a [inscribirse en nuestro "Curso de Héroes" gratuito en línea, o solicitar nuestro recientemente anunciado Programa de Becas](https://subquery.coassemble.com/unlock/dOKZW6O#/).

---

## Acerca de SubQuery

[SubQuery](https://subquery.network/) es una agregación de datos descentralizada, indexando & consultando capa entre blockchains Layer-1 y aplicaciones descentralizados. Este servicio desbloquea los datos de la cadena de bloques y los transforma a un estado consultable para que pueda ser usado en aplicaciones intuitiva. Permite a los desarrolladores de DApp centrarse en su caso principal de uso y en el front-end, sin necesidad de perder el tiempo en la construcción de un backend personalizado para el procesamiento de datos. La próxima Red de SubQuery descentralizará y tokenize el ecosistema para permitir a todos participar en la revolución de datos web 3.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
