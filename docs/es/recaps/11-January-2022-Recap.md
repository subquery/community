# Recapitulación de enero

![](https://miro.medium.com/max/1400/1*2IMAaY-YYyAdl7YfZqHTAg.png)

¡Hola a todos, y bienvenido a 2022! El año pasado fue enorme para nosotros en SubQuery, pero después de unas muy necesarias vacaciones de verano aquí en Nueva Zelanda, el equipo está bien descansado y energizado por el potencial que tenemos ante nosotros. ¡Este año va a ser el año de la revolución de los datos descentralizados!

Como siempre, estamos dividiendo nuestra actualización mensual en tres secciones; comunidad, desarrollo de productos básicos y SubQuery Network.

## Comunidad

¡La comunidad de SubQuery se está expandiendo rápidamente en términos de números y regiones que cubrimos! En consecuencia, tenemos mucho de lo que hablar en este ámbito.

### SubQuery se asocia con los principales equipos de Polkadot en las recompensas técnicas a través del programa de Grants de SubQuery

El mes pasado lanzamos el SubQuery Grants Programme, un acelerador no diluyente para ayudar a los desarrolladores de nuestra comunidad a construir la próxima generación de dApps. Este mes hemos hablado con nuestros socios para lanzar una primera ronda de recompensas en asociación con Moonbeam, Acala, Astar y Bifrost como proyectos de inspiración. ¡Todas las solicitudes están abiertas ahora, y como ventaja, si tu solicitud tiene éxito, podrás trabajar estrechamente con el equipo de parachain que propuso el reto!

Los solicitantes que estén interesados en alguna de estas recompensas deben presentar su propuesta con el presupuesto necesario para completar la tarea y otros requisitos [aquí](https://docs.google.com/forms/d/e/1FAIpQLSfmMazkebKwNTWThBkVGaxf2Bg8s4aWZ0ZhwiMCtc9kv4sJHQ/viewform). Adicionalmente, esperamos anunciar la primera ronda de SubQuery en febrero.

[Lee más aquí](https://subquery.medium.com/subquery-partners-with-leading-polkadot-teams-on-technical-bounties-via-the-subquery-grants-d40453788435)

### SubQuery celebra a los ganadores del Hackathon Gitcoin GR 12

[SubQuery se asoció con Gitcoin en diciembre](https://subquery.medium.com/subquery-announces-gitcoin-hackathon-16c9d18753a) para patrocinar cinco retos por un valor de 37.000 dólares (el mayor premio del reto), invitando a los desarrolladores a construir herramientas útiles, cuadros de mando e incluso a extender SubQuery a otra blockchain de capa 1.

![](https://miro.medium.com/max/1400/1*BUq3ah1ULNnvLjqxv_vzlQ.png)

[Sam Zou](https://twitter.com/zoujialiu), director general y fundador de SubQuery comentó: "_SubQuery está encantado con los resultados del Hackathon Gitcoin GR12. Nuestra misión se basa en contar con una red de desarrolladores que estén capacitados para crear e innovar dentro del ecosistema de Substrate/Polkadot. Esta asociación ofreció oportunidades a desarrolladores motivados de todo el mundo para construir las aplicaciones del mañana. Estamos entusiasmados por nutrir a los ganadores de los retos para que desarrollen aún más sus ideas_"

Recientemente, hemos cubierto a los muchos ganadores que participaron en este hackathon y los increíbles proyectos que han incorporado [este detallado escrito](https://subquery.medium.com/subquery-celebrates-winners-of-gitcoin-gr-12-hackathon-7486afaeab29). La calidad y el progreso de los envíos en tan poco tiempo nos han llevado a pensar y nos complace invitar a muchos de los envíos a participar en nuestro programa de subvenciones.

[Lee más aquí](https://subquery.medium.com/subquery-celebrates-winners-of-gitcoin-gr-12-hackathon-7486afaeab29)

### Hero Course China

Nuestro Curso de Héroe hecho en colaboración con OneBlock+ comenzó a principios de enero y ahora ya hemos publicado tres lecciones a más de 200 estudiantes! Únete a la comunidad de OneBlock+ para unirte a este curso u horas de oficina. China es una región estratégicamente importante para SubQuery, pero esperamos lanzar muchos otros cursos de desarrollo regional pronto. ¡Póngase en contacto con nosotros si puede ayudarnos!

![](https://miro.medium.com/max/1400/1*_8N000hX1WBM79ZbFyhvYQ.png)

## Desarrollo de Producto Principal

### Soporte multichain

SubQuery es nativo de Polkadot, es nuestra casa y hemos trabajado duro para construir relaciones en este ecosistema. El núcleo de la misión de Polkadot es crear una emocionante comunidad de desarrolladores, usuarios y empresas que aprovecharán su interoperabilidad multicadena. Mantenemos esa visión y también creemos que Polkadot será un actor destacado en esa iniciativa.

A pesar de esto, también creemos en un futuro multicadena, ya que sabemos que va a haber muchas blockchains diferentes trabajando juntas para resolver diferentes problemas. Nuestro plan a largo plazo siempre ha sido tomar SubQuery y adaptarlo al trabajo para otros blockchain que no tienen una solución de indexación actual. Nuestro enfoque de cadena múltiple que hemos necesitado para el Polkadot significa que nos adaptamos de manera única a este desafío.

Estamos finalizando el trabajo en la primera de 5 nuevas cadenas de capa 1 que SubQuery indexará, ¡no podemos esperar para anunciarlo pronto!

![](https://miro.medium.com/max/1400/1*jD1n5MSjeatjiaF5hY-Wjg.png)

### Mejoras de rendimiento

La velocidad de indexación de SubQuery está siendo siempre mejorada, es un foco constante en nuestro equipo de desarrollo. Nuestro soporte avanzado de diccionario permite esto, Los diccionarios aceleran tu proyecto en varios múltiplos y te permiten indexar toda la cadena Polkadot en minutos, no en horas (dependiendo de la complicidad de tu proyecto).

Como indicador de la amplitud de apoyo que SubQuery ofrece al ecosistema Polkadot ahora estamos hospedando y gestionando diccionarios a través de las 31 diferentes redes, representando la mayoría de los parachains más importantes de Polkadot/Kusama.

![](https://miro.medium.com/max/1400/1*WeMY5WnWZ_jvllxidhycUA.png)

### Registro de plantillas de subQuery

> 29 redes están cubiertas por plantillas

El comando `subql init` es familiar para cualquiera que haya creado un proyecto SubQuery; representa un lienzo en blanco — con oportunidades ilimitadas. Somos conscientes de que podemos hacer mejor para ayudar a otros a empezar, en lugar de los desarrolladores de lienzos en blanco quieren un andamio en blanco, donde todo el código basico ya está escrito.

Hoy cuando escribes `subql init`, se te presenta una lista de 29 redes de las cuales se te proporciona un andamio precreado con todos los extremos correctos, enlaces de diccionario, e incluso definiciones de tipos. Esto elimina uno de los pasos más difíciles al iniciar un nuevo proyecto de SubQuery y hace que la construcción de tu siguiente gran dApp sea mucho más fácil y rápida.

### Características de agregación de datos

SubQuery soporta funciones avanzadas de agregación para permitirle realizar un cálculo de un conjunto de valores durante su consulta. Estas funciones proporcionan a nuestros clientes un conjunto más rico de información y cálculos a partir de su conjunto de datos existente. Por ejemplo, con una única consulta se puede calcular el monto medio de la contribución por cada crédito desglosado por fecha de contribución.

[Lea más acerca de cómo utilizar estas características en nuestros documentos actualizados.](https://doc.subquery.network/query/aggregate/)

### SubQuery se asocia con Darwinia Network para crear la herramienta CLI SubQuery

Darwinia se ha asociado con SubQuery para construir la plétora de aplicaciones que serán necesarias para proporcionar la mejor experiencia de usuario para interacciones entre cadenas cruzadas. El equipo de Darwinia está construyendo una nueva [Smart App que es un eje central](https://apps.darwinia.network/) para gestionar todas las interacciones de la red Darwinia, incluyendo la gobernanza, staking, la exploración de la cadena y mucho más. Esta aplicación utiliza una cantidad considerable de datos de [SubQuery para mostrar datos históricos y acciones](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery trabajará estrechamente con el equipo de Darwinia para que esta experiencia de usuario sea la más rápida y sencilla de todo el ecosistema de Polkadot.

![](https://miro.medium.com/max/1200/1*bL2Csj9qyamD7txAheCTIg.gif)

Nuestra asociación va más allá de utilizar SubQuery para potenciar el ecosistema de aplicaciones de Darwinia, Darwinia ha estado trabajando estrechamente con el equipo de SubQuery para [construir una herramienta CLI para el servicio gestionado de SubQuery (https://project.subquery.network](https://github.com/fewensa/subquery-cli)). Puede utilizar esta [CLI](https://github.com/fewensa/subquery-cli) para crear un proyecto SubQuery y desplegar automáticamente una nueva versión en la ranura de staging o de producción. Además, puede recuperar información, incluyendo el estado detallado de la sincronización y los registros de su proyecto en ejecución, que está alojado gratuitamente en SubQuery Projects. [Lea más aquí](https://subquery.medium.com/subquery-partners-with-darwinia-network-to-build-subquerys-cli-tool-903dc4c9ef66)

## SubQuery Network

Última llamada comunitaria caminamos a través de algunos detalles importantes de la próxima red de pruebas de SubQuery. Se ejecutará en al menos tres temporadas, cada temporada pondrá a prueba diferentes aspectos de la red:

- Temporada 1: Pruebas alfa tempranas de un número limitado de características con unos pocos participantes seleccionados
- Temporada 2: Prueba beta grande de más características con cientos de participantes
- Temporada 3: Red pública completa de pruebas para pruebas de carga y escala con miles de participantes

Cada temporada tendrá múltiples desafíos que usted puede completar y que pueden resultar en verdaderas recompensas SQT. ¡Espere que las cosas comiencen aquí en Marzo!

## Actualizar Hoja de Ruta

El pasado mes de octubre liberamos [mapa técnico](https://blog.subquery.network/blogs/20211029-roadmap-october.html) con el siguiente año mapeado para SubQuery, estamos demasiado retrasados para abordar exactamente cómo estamos haciendo aquí.

![](https://miro.medium.com/max/1400/1*2a3SGrW-OG5pbw67jsavvw.jpeg)

Como puedes ver en el mapa de ruta original de arriba, hemos completado todos los hitos 0 y 1, y estamos haciendo un buen progreso en el Hito 2. Incluso hemos entregado algunas características relevantes para nuestro servicio alojado mucho antes de lo esperado, debido a la enorme escala de solicitudes que actualmente van a [nuestros clientes empresariales](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html).

## Otras cosas que quizás te hayan faltado

- ¡Tendremos horas semanales de oficina en nuestro servidor de Discord! Únete a las ‘Horas de oficina’ de SubQuery en nuestro canal de etapas, donde podrás ponerte al día con el equipo en un entorno informal.
- Tuvimos una QnA rusa con James & Dmytro en Discord donde todas las preguntas se hicieron y respondieron en ruso. Háganos saber qué idioma le gustaría escuchar

P.D.

Recuerda unirse a nuestros [Discord](https://discord.com/invite/subquery) y nuestros [canales sociales](https://linktr.ee/subquerynetwork) para estar al día de nuestras últimas noticias y anuncios.

La red de SubQuery

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
