# SubQuery acaba de obtener un Lot Faster con el diccionario

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

Hoy estamos orgullosos de anunciar nuestra nueva mejora a SubQuery, la característica de indexación de diccionarios de SubQuery.

El Diccionario SubQuery trata de acelerar sus proyectos. Mejora dramáticamente el rendimiento del proyecto SubQuery, **a veces hasta 10 veces más rápido.**

Al indexar datos de cadena, los proyectos de SubQuery utilizados para inspeccionar cada bloque. La cadena de Polkadot es grande, 130 Gb de datos no estructurados en casi 6 millones de bloques. Esto tarda muchas horas en indexar, tiempo que no quiere esperar — especialmente cuando se prueba.

Los proyectos de SubQuery ahora tienen la opción de omitir todo esto, básicamente pre-indexamos la ubicación de todos los eventos dentro de una cadena.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

El rendimiento se mejora más cuando los datos no son una ocurrencia común, sino que se intercalan a lo largo de la cadena, como si los datos fueran raros, el Diccionario omite más bloques, y por lo tanto el impacto en el rendimiento es mayor.

El punto final del diccionario puede ser añadido en [tu archivo 'project.yaml'](https://doc.subquery.network/create/manifest.html)o alternativamente [especificado en tiempo de ejecución](https://doc.subquery.network/run/run.html#using-a-dictionary). Además, también puedes sobrescribir este endpoint al ejecutar tu proyecto en [Proyectos de SubQuery](https://project.subquery.network/).

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

Puedes leer más sobre el diccionario en nuestra [documentación útil aquí](https://doc.subquery.network/run/run.html#using-a-dictionary).

Creemos que SubQuery es la mejor opción de indexación de datos disponible para cualquier dApp de Polkadot/Substrate, y esta nueva implementación del Diccionario de SubQuery nos permite mejorar aún más nuestro servicio acelerando el proceso de indexación de sus Proyectos de SubQuery.

Puedes probarlo tú mismo en [Proyectos de SubQuery](https://project.subquery.network/) o ver los propios diccionarios en [nuestro explorador](https://explorer.subquery.network/). Para poder usar un diccionario en tu proyecto existente, tu versión [@subql/cli](https://www.npmjs.com/package/@subql/cli) debe ser al menos 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)