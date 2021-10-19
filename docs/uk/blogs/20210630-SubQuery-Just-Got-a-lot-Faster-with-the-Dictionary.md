# SubQuery став набагато швидше зі словником

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

Сьогодні ми з гордістю повідомляємо про наше нове вдосконалення для SubQuery, функції індексації словника SubQuery.

Словник SubQuery - це прискорення ваших проектів. Це значно покращує індексацію продуктивності вашого проекту SubQuery, **іноді до 10 разів швидше.**

Під час індексування ланцюгових даних, SubQuery Projects використовуються для перевірки кожного блоку. Ланцюг Polkadot - великий, 130 Гб неструктурованих даних за майже 6 мільйонів блоків. Індексування займає багато часу, яке ви не хочете втрачати - особливо під час тестування.

Проекти SubQuery тепер мають можливість пропустити все це, ми по суті попередньо індексуємо розташування всіх подій у ланцюжку.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Продуктивність найбільше покращується, коли дані не є звичайним явищем, а замість цього входять у ланцюжок, як ніби дані рідкісні, Словник пропускає більше блоків, а отже, вплив на продуктивність більший.

Кінцеву точку словника можна додати у [файл ‘project.yaml’ ](https://doc.subquery.network/create/manifest.html) або як альтернативу [ вказану під час виконання](https://doc.subquery.network/run/run.html#using-a-dictionary). Крім того, ви також можете змінити цю кінцеву точку під час запуску вашого проекту в [SubQuery Projects](https://project.subquery.network/).

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

Детальніше про словник можна прочитати у нашій [корисній документації тут](https://doc.subquery.network/run/run.html#using-a-dictionary).

Ми вважаємо, що SubQuery є найкращим варіантом індексування даних, доступним для будь -якого додатка Polkadot/Substrate, і ця нова реалізація Словника SubQuery дозволяє нам ще більше покращити наш сервіс, прискоривши процес індексації для ваших проектів SubQuery.

You can try it yourself in [SubQuery Projects](https://project.subquery.network/) or view the dictionaries themselves in [our explorer](https://explorer.subquery.network/). In order to use a Dictionary in your existing project, your [@subql/cli](https://www.npmjs.com/package/@subql/cli) version must be at least 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)