# SubQuery стал намного быстрее со словарем

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

Сегодня мы с гордостью объявляем о нашем новом усовершенствовании SubQuery, функции индексирования словаря SubQuery.

Словарь SubQuery предназначен для ускорения ваших проектов. Это значительно повышает производительность индексации вашего проекта SubQuery, ** иногда до 10 раз быстрее. **

При индексировании данных цепочки проекты SubQuery используются для проверки каждого блока. Сеть Polkadot велика, 130 Гб неструктурированных данных в почти 6 миллионах блоков. На индексацию уходит много часов - время, которого не стоит ждать, особенно при тестировании.

Проекты SubQuery теперь имеют возможность пропустить все это, мы предварительно индексируем местоположение всех событий в цепочке.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Производительность улучшается в тех случаях, когда данные не являются обычным явлением, а переплетаются по цепочке, как если бы данные были редки, Dictionary пропускает больше блоков, и поэтому влияние на производительность больше.

Конечная точка Dictionary может быть добавлена в [ваш ‘project.yaml’ файл](https://doc.subquery.network/create/manifest.html), или же [указанный при запуске](https://doc.subquery.network/run/run.html#using-a-dictionary). Кроме того, вы также можете отменить эту конечную точку при запуске вашего проекта в [SubQuery Projects](https://project.subquery.network/).

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

Подробнее о SubQuery Dictionary вы можете прочитать в [полезной документации здесь](https://doc.subquery.network/run/run.html#using-a-dictionary).

Мы считаем, что SubQuery является лучшим вариантом индексации данных, доступным для любого Polkadot/Substrate dApp, и эта новая реализация SubQuery Dictionary позволяет нам еще больше улучшить наш сервис, ускоряя процесс индексации ваших SubQuery Projects.

Вы можете попробовать это самостоятельно в [SubQuery Projects](https://project.subquery.network/) или просмотреть словари в [нашем исследователе](https://explorer.subquery.network/). Чтобы использовать Dictionary в существующем проекте, ваша версия [@subql/cli](https://www.npmjs.com/package/@subql/cli) должна быть не менее 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)