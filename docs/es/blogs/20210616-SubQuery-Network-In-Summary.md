# Red de SubQuery - Resumen

> How does the SubQuery Network work? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.) [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)

Hoy vamos a hablar de cómo funciona SubQuery Network en un nivel alto.

## Participantes


![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Participantes en la Red de SubQuery

Hay tres tipos de participantes en la red de SubQuery:

-   **Consumidores**: Los consumidores harán solicitudes a la red de SubQuery para datos específicos y pagarán una cantidad anunciada de SQT
-   **Indexadores**: Los indexadores alojarán los proyectos de SubQuery en su propia infraestructura, ejecutando tanto el nodo como el servicio de consultas para indexar datos y responder solicitudes GraphQL.
-   **Delegators**: Los delegadores participarán en la red apoyando a sus Indexadores favoritos para ganar recompensas

## Indexadores, Consumidores y Consultas

Empecemos por los Indexers, Indexadores hace mucho trabajo detrás de las escenas. El hardware de gestión, ejecutar infraestructura, supervisar recursos y elegir los proyectos de SubQuery correctos para indexar

Esto lleva tiempo y dinero, pero una vez que lo tienen, los consumidores pueden venir a hacer peticiones. Los consumidores harán peticiones a la red de SubQuery para datos específicos y pagarán una cantidad anunciada de nuestro token, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Los consumidores harán peticiones a la red de SubQuery para datos específicos y pagarán una cantidad anunciada de nuestro token, SQT.

## Función de Producción Cobb-Douglas

Este pago va en un grupo de ingresos del proyecto y al final de una era de apuestas, (28 días) tomamos este grupo de ingresos del proyecto y lo dividimos. Es escupido a través de los indexadores por algo llamado la función de producción Cobb-Douglas.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

Es escupido a través de los indexadores por algo llamado la función de producción Cobb-Douglas.

Este enfoque, en términos sencillos, significa que los ingresos se asignan a los Indexadores Compientes como proporción de las solicitudes respondidas y de la cantidad que se apuestan.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Los ingresos se asignan a los Indexadores Compientes como proporción de las solicitudes respondidas y de la cantidad apostada.

En nuestra opinión, la belleza de esta ecuación es que un indexador racional debe mantener un alto nivel de SQT apostado en relación con el trabajo que hacen para recibir ingresos óptimos. Como resultado, no necesitamos hacer cumplir los requisitos arbitrarios de apuesta, porque los Indexadores son incentivados para autogestionar y mantener una apuesta o una piel en el juego.

## Delegadores

De modo que los Indexadores son incentivados tanto a hacer el mayor trabajo posible como a apostar lo más posible para maximizar sus recompensas. Aquí es donde entran los delegados.

Delegators puede delegar su SQT de repuesto a los indexadores, cada indexador puede publicar una _tarifa de consulta tasa de participación _, y esos delegados serán recompensados con una porción de los ingresos de las tasas de consulta en los que el indexador será recompensado.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Los delegadores pueden delegar su SQT reservado a los Indexadores y esos delegados serán recompensados con una porción de los ingresos de las tasas de consulta en los que el indexador sea recompensado

La _tasa de intercambio de ingresos de comisión de consulta_ que anuncian los indexadores está bloqueada por cada 28 días de la era de apuesta, y una disminución de la misma debe ser anunciada durante toda una era de 28 días de apuesta, antes de entrar en vigencia.

Del mismo modo, los delegados pueden retirar las cantidades de su delegación en cualquier momento, pero sólo recibirán recompensas cuando hayan delegado durante toda la era de apuestas.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Los delegadores solo recibirán recompensas cuando hayan delegado durante toda la era de apuestas,

## Ordenes de Compra

Indexar un proyecto lleva tiempo y dinero, hay muchos datos en la cadena. Para alentar a los Indexadores a indexar y soportar un proyecto de SubQuery completamente nuevo, planea implementar un mecanismo de mercado para que los consumidores indiquen ingresos garantizados a los Indexadores de nuevos Proyectos de Subconsulta.

Les llamamos órdenes de compra, y los consumidores pueden anunciar un contrato en cadena por un precio determinado y número de solicitudes. Los indexadores pueden ver esto y elegir llenar los contratos.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Los consumidores pueden anunciar una orden de compra en cadena por un precio determinado y número de solicitudes.

Las órdenes de compra también se pueden realizar en los proyectos de SubQuery existentes para atraer Indexadores adicionales para mejorar la competencia y bajar los precios