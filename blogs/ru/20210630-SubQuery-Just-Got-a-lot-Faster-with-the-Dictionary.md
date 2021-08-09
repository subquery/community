![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)


Сегодня мы с гордостью сообщаем о новом улучшении функции индексации словаря SubQuery.

The SubQuery Dictionary is all about increase your Projects. Это значительно повышает производительность индексации вашего проекта SubQuery **иногда до 10 x быстрее.**

При индексировании данных цепочки, проекты подзапроса используются для проверки каждого блока. Цепочка Полкадота большая, 130ГБ неструктурированных данных почти на 6 миллионов блоков. Это занимает много часов для индексации, времени, которое вы не хотите ждать — особенно при тестировании.

Проекты SubQuery теперь имеют возможность пропустить все это, мы по существу предварительно индексируем местоположение всех событий в цепочке.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Производительность улучшается в тех случаях, когда данные не являются обычным явлением, а переплетаются по цепочке, как если бы данные редки, Словарь пропускает больше блоков, и поэтому влияние на производительность больше.

Конечная точка словаря может быть добавлена в [ваш ‘project.yaml’ файл](https://doc.subquery.network/create/manifest.html), или же [указанный при запуске](https://doc.subquery.network/run/run.html#using-a-dictionary). Кроме того, вы также можете переопределить эту конечную точку при запуске вашего проекта в [SubQuery Projects](https://project.subquery.network/).

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

Подробнее о словаре вы можете прочитать в [полезной документации здесь](https://doc.subquery.network/run/run.html#using-a-dictionary).

Мы считаем, что SubQuery является лучшим вариантом индексации данных, доступным для любого Polkadot/Substrate dApp, и эта новая реализация словаря SubQuery's Dictionary позволяет нам еще больше улучшить наш сервис, ускоряя процесс индексации ваших SubQuery Projects.

Вы можете попробовать это самостоятельно в [SubQuery Projects](https://project.subquery.network/) или просмотреть словари в [нашем исследователе](https://explorer.subquery.network/). Чтобы использовать словарь в существующем проекте, ваша версия [@subql/cli](https://www.npmjs.com/package/@subql/cli) должна быть не менее 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)