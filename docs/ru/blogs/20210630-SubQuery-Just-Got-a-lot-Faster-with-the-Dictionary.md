# SubQuery стал намного быстрее со словарем

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

Сегодня мы с гордостью объявляем о нашем новом усовершенствовании SubQuery, функции индексирования словаря SubQuery.

Словарь SubQuery предназначен для ускорения ваших проектов. Это значительно повышает производительность индексации вашего проекта SubQuery, ** иногда до 10 раз быстрее.

При индексировании данных цепочки проекты SubQuery используются для проверки каждого блока. Сеть Polkadot велика, 130 Гб неструктурированных данных в почти 6 миллионах блоков. На индексацию уходит много часов - время, которого не стоит ждать, особенно при тестировании.

SubQuery projects now have the option to skip all this, we essentially pre-index the location of all events within a chain.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Performance is improved the most when the data is not a common occurrence, but instead interspersed along the chain, as if the data is rare, the Dictionary skips more blocks, and therefore the impact on performance is greater.

The Dictionary endpoint can be added in [your ‘project.yaml’ file](https://doc.subquery.network/create/manifest.html), or alternatively [specified at run time](https://doc.subquery.network/run/run.html#using-a-dictionary). Additionally, you can also override this endpoint when running your Project in [SubQuery Projects](https://project.subquery.network/).

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

You can read more about the dictionary in our [helpful documentation here](https://doc.subquery.network/run/run.html#using-a-dictionary).

We believe SubQuery is the best data indexing option available for any Polkadot/Substrate dApp, and this new implementation of SubQuery’s Dictionary allows us to further improve our service by speeding up the indexing process for your SubQuery Projects.

You can try it yourself in [SubQuery Projects](https://project.subquery.network/) or view the dictionaries themselves in [our explorer](https://explorer.subquery.network/). In order to use a Dictionary in your existing project, your [@subql/cli](https://www.npmjs.com/package/@subql/cli) version must be at least 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)