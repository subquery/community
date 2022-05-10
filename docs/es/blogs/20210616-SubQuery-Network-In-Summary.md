# Red de SubQuery - Resumen

**¿Cómo funciona la red de SubQuery? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)**

Hoy vamos a hablar de cómo funciona la red de SubQuery a alto nivel.

## Participantes

![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Colaboradores de la Red SubQuery

Hay tres tipos de colaboradores en la Red SubQuery:

- **Consumidores**: Los consumidores harán solicitudes a la red de SubQuery para datos específicos y pagarán una cantidad anunciada de SQT
- **Indexadores**: Los indexadores alojarán los proyectos de SubQuery en su propia infraestructura, ejecutando tanto el nodo como el servicio de consultas para indexar datos y responder solicitudes GraphQL.
- **Delegators**: Los delegadores participarán en la red apoyando a sus Indexadores favoritos para ganar recompensas

## Indexadores, Consumidores y Consultas

Empecemos por los indexadores, que hacen gran parte del trabajo duro entre bastidores. La gestión del hardware, la ejecución de la infraestructura, la supervisión de los recursos y la elección de los proyectos de SubQuery adecuados para indexar

Esto lleva tiempo y dinero, pero una vez que lo tienen, los consumidores pueden venir a hacer peticiones. Los consumidores harán peticiones a la red SubQuery para obtener datos específicos y pagarán una cantidad anunciada de nuestro token, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Los consumidores harán peticiones a la red SubQuery para obtener datos específicos y pagarán una cantidad anunciada de nuestro token, SQT.

## Función de Producción Cobb-Douglas

Este pago va a un fondo de ingresos del proyecto y al final de una época de apuestas (28 días) tomamos este fondo de ingresos del proyecto y lo dividimos. Se escupe a través de los indexadores por algo llamado función de producción Cobb-Douglas.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

Se escupe a través de los indexadores por algo llamado función de producción Cobb-Douglas.

Este enfoque, en términos sencillos, significa que los ingresos se asignan a los indexadores que compiten como una proporción tanto de las solicitudes respondidas como de la cantidad apostada.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Los ingresos se asignan a los indexadores competidores en proporción a las solicitudes contestadas y a la cantidad apostada.

En nuestra opinión, la belleza de esta ecuación es que un indexador racional debe mantener un alto nivel de SQT apostado en relación con el trabajo que realiza para recibir unos ingresos óptimos. Como resultado, no necesitamos imponer requisitos de apuesta arbitrarios porque los indexadores están incentivados a autogestionar y mantener una participación o piel en el juego.

## Delegadores

Así pues, los indexadores están incentivados a trabajar lo máximo posible y a apostar lo máximo posible para maximizar sus recompensas. Aquí es donde entran los delegados.

Los delegadores pueden delegar sus SQT sobrantes a los indexadores, cada indexador puede publicar una tasa de participación en los _ingresos de la tasa de consulta_, y esos delegadores serán recompensados con una parte de los ingresos de la tasa de consulta en la que el indexador es recompensado.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Los delegadores pueden delegar sus SQT sobrantes a los indexadores y esos delegadores serán recompensados con una parte de los ingresos de la tasa de consulta que el indexador recibe en

The _query fee revenue share rate_ that indexers advertise is locked for each 28 day staking era, and a decrease to it must be advertised for an entire 28 day staking era before coming into force.

Similarly, delegators can remove their delegation amounts at any point, but they will only receive rewards when they have delegated for the entire staking era.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegators will only receive rewards when they have delegated for the entire staking era

## Ordenes de Compra

Indexing a project takes time and money, there’s a lot of data on the chain. In order to encourage Indexers to index and support an entirely new SubQuery Project, we plan to implement a market mechanism for Consumers to signal guaranteed revenue to Indexers of new SubQuery Projects.

We’re calling them purchase orders, and Consumers can advertise a contract on chain for a set price and number of requests. Indexers can view this and choose to fill the contracts.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Consumers can advertise a purchase order on chain for a set price and number of requests.

Purchase orders can also be placed on existing SubQuery Projects to attract additional Indexers to improve competition and decrease prices
