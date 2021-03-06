# SubQuery предоставя своя SDK с отворен код след грант от Web3 Foundation

## Разработчиците вече могат да заявяват и трансформират световни данни за Web3 бъдеще

![](https://miro.medium.com/max/1400/1*f9Jw37LjUGu8P8W39cjDYw.png)

Тази седмица OnFinality (екипът, който стои зад SubQuery) предостави своя грант на Web3 Foundation, за да осигури завършен работен процес за създаване на SubQuery проекти. Развълнувани сме да обявим работата, която свършихме, за да усвоим тази грант, и да я споделим със света, за да могат още днес да започнат да използват нашия проект за по-ефективно търсене в своите мрежи.

SubQuery е изграден от екипа на OnFinality, което е инфраструктурна Iaas & SaaS платформа за блокчейн екипи и потребители за да могат да стартират нодове и да получава достъп до голям набор от блокчейн протоколи. Ние разполагаме с набор от симбиотични услуги, включително нашите API услуги за споделени нодове, и поддържаме връзка с най-добрите екипи на Polkadot/Substrate.

Почти всяка блокчейн има нужда от обработка и търсене на данни. Нашият проект е вдъхновен от разрастването на протоколите за данни, обслужващи приложенията, и е тук, за да помогне на процъфтяващата общност на Polkadot. Целта на SubQuery е да помогне на проектите изградени върху Polkadot/Substrate да създадат по-добри dApps, като позволи на всеки да намира и използва данни по-бързо и надеждно. Нашата услуга позволява на потребителите да извличат, трансформират, съхраняват и заявяват данни, както и да ги свързват и представят в бъдеще.

[Web3 Foundation програмата за грантове](https://github.com/w3f/Open-Grants-Program/pull/136) ни позволи да създадем SubQuery - проект с отворен код, който позволява на потребителите да стартират индексатор в своята верига, за да изградят набор от данни, които могат да бъдат търсени с GraphQL.

Този набор от инструменти включва @subql/cli, който позволява на проектите да генерират свой SubQuery собствен проект, определящ как индексатора да обхожда и агрегира собствената им мрежа. Като част от нашето предложение предоставихме основно ръководство, което показва на потребителите как да използват клиент, за да индексират своята мрежа, което [можете да видите тук](https://doc.subquery.network/quickstart.html). Дори предоставихме по-подробна документация за разработчици за напреднали решения.

Второ, има SubQuery нод пакет, който зарежда избрания SubQuery проект създаден от CLI, и след това индексира мрежата и я зарежда в Postgres база данни. С помощта на Hasura можете веднага да изпълнявате GraphQL заявки върху индексирани таблици. С помощта на тези инструменти и материалите за поддръжка на общността, които постоянно подобряваме, всеки може лесно да създава и изпълнява заявки.

** Можете да започнете веднага, като следвате нашия пример в хранилището** [** SubQuery в Github **](https://github.com/OnFinality-io/subql)**. Освен това можете да научите повече, като прочетете нашите документи за ** [**SubQuery**](https://doc.subquery.network/) **или** [**посетите новия ни уебсайт**](https://subquery.network/)**.**

Изключително сме благодарни за подкрепата, предоставена от Web3 Foundation, която ни помогна да осъществим този проект за общността. Web3 Foundation финансира изследователски и развойни екипи, които изграждат технологичния стек на децентрализираната мрежа. Тя е създадена в Цуг, Швейцария, от съоснователя на Ethereum и бивш главен технологичен директор д-р Гавин Ууд. Polkadot е водещият проект на фондацията.

Ще се съсредоточим върху изграждането на управлявана хоствана услуга, базирана на това предложение, която ще бъде по-производителна и мащабируема. Ще предоставим надеждна публична инфраструктура, която ще изгради мощен производствен SubQuery нод от готов проект на SubQuery. След това услугата ще индексира и запази състоянието на веригата и ще предостави производствена GraphQL крайна точка (endpoint), която може да замени самостоятелно хостваните алтернативи. Ние ще се съсредоточим върху това, така че всички останали да могат да се съсредоточат върху изграждането и развитието на своите dApp.

Рано забелязахме потенциала на Polkadot и още от самото начало ни се стори естествено да съсредоточим усилията си там. Основната предпоставка на Polkadot е да създаде процъфтяваща общност от разработчици, потребители и предприятия, които ще се възползват от неговата многоверижна оперативна съвместимост - тази общност ще се нуждае от услуга, която им позволява надеждно да намират и използват данни бързо.

Уникалната архитектура на Polkadot означава, че можем да се съсредоточим върху една мрежа и след това да поддържаме лесно множество настоящи и бъдещи вериги. Въпреки че Polkadot все още е в процес на разработка, ние ще бъдем там, готови да помогнем на следващото поколение блокчейн разработчици да създадат следващия голям dApp.

Започнете работа в [repository SubQuery в Github.](https://github.com/OnFinality-io/subql)

Прочетете нашите [документи за SubQuery](https://doc.subquery.network/)

[Посетете нашия нов уебсайт](https://subquery.network/)

Научете повече за Web3 Foundation, като посетите техния [уебсайт ](https://web3.foundation/). За да следите последните събития във Фондация Web3, присъединете се към тях в [Reddit ](https://www.reddit.com/r/dot/)или [Twitter](https://twitter.com/web3foundation).

Следвайте ни в:

-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/%23subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)