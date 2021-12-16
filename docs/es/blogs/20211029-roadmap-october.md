# SubQuery lanza un mapa de ruta técnico

![](https://cdn-images-1.medium.com/max/800/1*Qcu5mFIs8eJhAXaMpWOlMQ.png)

**SubQuery anuncia hitos clave incluyendo la línea de tiempo TGE**

Hoy publicamos por primera vez nuestro mapa de ruta técnico detallado. El objetivo de SubQuery es ser el proveedor de datos líder en el ecosistema Polkadot y el apoyo que hemos recibido de la comunidad para ayudarnos a darse cuenta de que esta visión ha sido asombrosa. Desde nuestro establecimiento formal a finales de 2020 a través de una [Beca de Web3](https://web3.foundation/), para publicar nuestra primera versión de código abierto en enero de 2021, y [cerrando nuestra Serie A en septiembre](https://subquery.medium.com/series-a-1abed6c1c2af) nos gustaría darle las gracias por todo su apoyo para llevarnos a esta etapa!

A medida que seguimos ganando impulso, ha llegado el momento de compartir más sobre nuestros planes para el futuro, incluida nuestra hoja de ruta técnica. Estamos entusiasmados por cómo la próxima evolución de SubQuery impulsará aún más valor al ecosistema Polkadot y proporcionará más oportunidades para que nuestra comunidad participe en nuestro crecimiento.

## Nuestro Futuro

Mientras SubQuery ya está sirviendo millones de consultas de datos cada día a [más de 60 proyectos en Polkadot & Kusama](https://project.subquery.network/), queríamos garantizar que nuestra próxima fase de crecimiento se desarrollara de forma organizada y controlada.

Por esta razón, creemos que es fundamental que demostremos y probemos completamente la escalabilidad de la SubQuery Network a través de un programa de red de pruebas incentivado. Este proceso también nos permitirá establecer una comunidad de indexadores antes de lanzar públicamente a través de un TGE en marzo de 2022 y nuestro eventual red principal a finales del año próximo.

![](https://miro.medium.com/max/2400/1*I6mko5xumHAArzGePvEZiQ.jpeg)

Como tal, los resultados clave en nuestro flujo de trabajo se pueden dividir en los siguientes hitos principales.

## ¿Dónde estamos? Medio de Q4 2021

### Soporte EVM para parachains

Pronto lanzaremos [nuestro soporte beta para implementaciones Polkadot de la máquina virtual Ethereum (EVM)](https://medium.com/@subquery/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff). Esto permite a los desarrolladores de Polkadot y Ethereum integrar sin problemas los datos de Substrate y EVM en un solo lugar y consultar a este solo dato usando GraphQL.

SubQuery introducirá filtros más avanzados que otros indexadores, permitiendo el filtrado de transacciones no contratadas, remitentes de transacciones, contratos y argumentos de registro indexados, por lo que los desarrolladores pueden construir una amplia variedad de proyectos que atiendan a sus necesidades específicas de datos.

### Academia de SubQuery

La Academia está diseñada para mejorar las habilidades y capacitar a los desarrolladores en el ecosistema de SubQuery proporcionándoles un programa modular. [Nuestro primer curso en la Academia es el _Curso de Héroe_](https://doc.subquery.network/academy/herocourse/) y fue lanzado el viernes 22 de octubre de 2021.

Dentro de cada módulo del _Curso de Héroe_, hay varias lecciones de 5 a 10 minutos que se entregan por un vídeo grabado. El contenido en vídeo está acompañado de tutoriales, diapositivas, libros y enlaces escritos al repositorio de código de GitHub terminado.

El curso está diseñado para hacer que un desarrollador que no sepa nada acerca de SubQuery a convertirse en un experto en la construcción de una fuente de datos de SubQuery para su nueva aplicación blockchain.

En los próximos meses desplegaremos más educación para la Comunidad, con lanzamientos semanales de nuevo contenido de _SubQuery Curso de Héroe_, y más cursos en las próximas semanas.

### Prueba de Indexación

La prueba de indexación nos permite garantizar que dos índices diferentes que trabajan con el mismo proyecto de SubQuery indexen exactamente los mismos datos. Es un componente crítico necesario para el desarrollo de una red de SubQuery descentralizada. Estamos utilizando un concepto llamado Merkle Mountain ranges para confirmar y garantizar esto, mantente atento a un post futuro que explora este más profundo.

### Servicio Premium para Empresas

Tenemos algunos clientes grandes como Karura, Kodadot y Fearless Wallet que ejecutan aplicaciones de producción en SubQuery. Estos equipos están exigiendo un mejor servicio y mayores niveles de fiabilidad.

Estamos a la altura del desafío, con acuerdos de nivel de servicio, niveles de servicio empresarial, y otras herramientas que nuestros clientes más grandes necesitan para gestionar sus propios negocios y recibir el mejor rendimiento posible de SubQuery para sus aplicaciones.

Por favor, póngase en contacto con el equipo si desea hablar con nosotros acerca de recibir servicios de nivel empresarial y apoyo de SubQuery.

## Hito 1 — Final de 4Q 2021

### SubQuery Constructores/Programa de Becas

Este programa de subvenciones está diseñado para facilitar y catalizar la innovación con Polkadot y SubQuery, y construir la próxima generación de dApps para impulsar la revolución de la web 3. Apoyará nuevos proyectos con subvenciones, apoyo técnico, asesoramiento en marketing y desarrollo de negocios de SubQuery y otros.

Estamos entusiasmados con el potencial de esto y pronto publicaremos más información.

### Implementaciones SDK de coordinador y cliente

Mejoraremos nuestro SDK básico de SubQuery y añadiremos componentes adicionales para un coordinador y cliente de SubQuery.

El coordinador del indexador será desplegado por los indexadores para exponer la red al indexador, y permitir que el indexador se registre en la red de SubQuery y anuncie los datos que está poniendo a disposición

El cliente SDK será para el rol del consumidor, y les permitirá encontrar índices y gestionar toda la transacción que un consumidor necesitará para recuperar y pagar los datos.

### Contrato interno MVP de la red SQT

Nuestra primera versión de la red SubQuery estará dentro de un contrato inteligente, desplegado en un parachain líder Polkadot. El MVP interno nos permitirá empezar internamente a probar todo aquí, y es un gran hito que debemos completar.

### EU Cluster

Nuestros clientes están solicitando soporte para más clusters para los datos de SubQuery alrededor del mundo. Más clusters significan más resistencia, y los datos de SubQuery alojados más cerca de donde están sus clientes. Un nuevo clúster europeo significa peticiones más rápidas para los consumidores, un rendimiento inigualable para los desarrolladores de dApp y una mayor resistencia para la red SubQuery.

### Mejoras para subql init

El comando _subql init_ es familiar para cualquiera que haya creado un proyecto SubQuery; representa un lienzo en blanco — con oportunidades ilimitadas. Somos conscientes de que podemos hacer mejor para ayudar a otros a empezar, en lugar de los desarrolladores de lienzos en blanco quieren un andamio en blanco, donde todo el código basico ya está escrito.

Este mapa de ruta representa el trabajo que queremos hacer para permitir a los desarrolladores construyan en cualquier parachain sin tener que preocuparse por los endpoints, diccionarios y tipos - todos ahorran tiempo para los desarrolladores y ayudan a otros a empezar.

## Hito 2 — Medio de Q1 2022

### Lanzamiento público de testnet

Siguiendo el contrato interno de red SQT MVP, invitaremos a un pequeño grupo de participantes a bordo y nos uniremos a la prueba de SubQuery Network. Para poder lanzar, necesitamos completar un gran número de tareas y una mayor cantidad de documentación!

A principios de 2022, compartiremos más información sobre este proceso y cómo usted puede solicitar para participar.

### Índice de punto en tiempo

Imagínese ser capaz de averiguar el estado de la cadena de bloques en un momento determinado - ¿qué aspecto tiene exactamente un proyecto de SubQuery en el bloque 5 millones? Esto es exactamente lo que proporcionará esta nueva característica.

### Red de SQT Contrato v1 y auditoría de código externo

Todas las redes importantes requieren una auditoría de código por parte de un socio externo para asegurar que el código de la red es seguro y escalable. SubQuery no es diferente, así que trabajaremos con socios clave para una auditoría completa del código aquí y también continuaremos recibiendo auditorías de código para nuestros contratos inteligentes en progreso.

### Pruebas internas de micropagos

Esta es una característica clave para nosotros. Vamos a hacer mucho trabajo dentro del ecosistema Polkadot para gestionar y manejar micropagos dentro de SubQuery. La ventaja de Polkadot es que las transacciones son minúsculas en relación con otras redes como Ethereum, lo que significa que los micropagos son mucho más relevantes. Esto se extenderá a nuestra red de pruebas incentivadas una vez que realicemos pruebas internas exhaustivas.

### Explorador de red y aplicación de SubQuery

Estamos construyendo un explorador y otras aplicaciones para permitir a los participantes en la SubQuery Network explorar y encontrar datos dentro de SubQuery Network. Los consumidores también usarán esto para navegar por la biblioteca de fuentes de datos soportadas, así como delegadores para analizar cómo se están llevando a cabo los indexadores para decidir cómo delegar sus token SQT.

### Monitoreo de la salud empresarial

Siguiendo desde nuestro nivel de servicio de SubQuery Enterprise Usted también puede esperar que una gran cantidad de herramientas de monitoreo de salud y otras herramientas de análisis de rendimiento se pongan a disposición de los clientes.

## Hito 3 — Final de 1Q 2022

### Evento de generación de token SQT

Después de una fase de prueba exitosa de red estamos esperando lanzar el token SubQuery en un socio de parachain Polkadot. En las próximas semanas compartiremos más información sobre nuestros tokenomics con la comunidad.

### Lanzamiento público de testnet incentivado con micropagos

Esta es la etapa final de nuestra red de pruebas. Lanzaremos todo a nuestra red de pruebas y esperamos que los participantes lo empujen hasta sus límites. Esto incluye pruebas de escala y carga, afinar nuestros modelos económicos y coeficientes, probar nuestra documentación y nuestros procesos de incorporación y asegurarse de que puede transaccionar con un precursor de SQT dentro de ella.

Esperamos que recompensemos a los participantes de nuestra red de pruebas, aquellos que completan ciertas misiones o tareas, y aquellos que actúan como miembros diferentes de la red de pruebas.

### Informar y reportar sobre tráfico de datos

Estamos manejando millones de solicitudes de datos a proyectos de SubQuery cada día. La mayoría de nuestros clientes no tienen analíticas en su propia dApps para la privacidad del usuario, pero todavía necesitan saber cómo funcionan sus dApps para que podamos mejorar esto.

### Rutas inteligentes escalables

Tenemos una meta de un billon de solicitudes de SubQuery diarias a nuestro servicio de alojamiento, es por eso que vamos a introducir un servicio globalmente escalable con múltiples servicios alojados en SubQuery.

Es una característica nueva y continuamente mejorada que automáticamente conecta las peticiones al nodo más cercano disponible. Adicionalmente, nos permite redirigir todas las peticiones inmediatamente a una copia de seguridad de zona de SubQuery, que nos proporciona un sistema tolerante de fallas en el caso de una interrupción regional.

En el futuro significa que estaremos creando cada vez más servicios alojados en SubQuery más pequeños y situados tácticamente más cerca de nuestros usuarios.

## Hito 4 — Medio de 2Q 2022

### Lanzamiento de la Fundación SubQuery

En nuestro paso por crear una Red de SubQuery descentralizada estableceremos una SubQuery Foundation para administrar el futuro gobierno y crecimiento del ecosistema. La propiedad de la red de SubQuery estará bajo la fundación de SubQuery inicialmente.

### Finalizar la investigación para otras cadenas de Capa-1

Mientras que nuestra casa siempre será Polkadot, estamos explorando apoyando varias otras blockchains de Layer-1 con nuestras capacidades de indexación.

### Programa de minería de liquidez

Para mejorar la liquidez del token SQT, crearemos un programa de minería de liquidez con un intercambio descentralizado (DEX). Esto permitirá a los tenedores del token generar rendimientos de su inversión.

## Hito 5 — Final de 2Q 2022

### Lanzamiento Mainnet 🚀

Después de completar la prueba de la red SubQuery lanzará el primer mainnet de SubQuery Network. Aquí es donde todo empieza realmente. Inicialmente, participaremos y recompensaremos a los participantes de la red de pruebas, y entonces estará completamente abierto a todos los miembros de la comunidad.

### Lanzamiento en Exchanges Centralizados

Con el fin de impulsar una mayor adopción de SQT, anticipamos el lanzamiento del token en uno y posiblemente múltiple CEX líder durante este período, así como muchos otros DEXs.

## Hito 6 — Planes a largo plazo

### Lanza nuestra propia Parachain

Aunque inicialmente planeamos asociarnos con un parachain top de Polkadot para obtener SubQuery Network liberado y escalar más rápidamente, a largo plazo SubQuery también tiene la intención de lanzar su propio parachain e integrarse aún más en el ecosistema.

Este parachain propio nos permitirá innovar aún más en herramientas que pueden ayudar a los desarrolladores a construir el futuro web 3 más rápido. Queremos apuntar a una ranura de parachain una vez que tengamos un historial comprobado detrás de nosotros con los datos y un token para apoyarlo.

### La Fundacion SubQuery se mueve a un DAO

Este está muy lejos, pero es siempre nuestro sueño que SubQuery eventualmente se convierta en una comunidad propiedad de DAO. Hemos dicho muchas veces que la comunidad juega un papel enorme en SubQuery, todo lo que hacemos es para nuestros clientes — convertirse en un DAO es la encarnación de ese enfoque.

Dicho esto, estamos muy lejos y sólo se hará una vez que estemos absolutamente seguros del éxito y futuro de SubQuery con la comunidad.

## Acerca de SubQuery

[SubQuery](https://subquery.network) es una agregación de datos descentralizada, indexando & consultando capa entre blockchains Layer-1 y aplicaciones descentralizados. El protocolo abstrae las idiosincrasias de datos de blockchain con el SDK SubQuery, lo que permite a los desarrolladores enfocarse en desarrollar su producto principal sin desperdiciar esfuerzos innecesarios en tecnologías backend personalizadas.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
