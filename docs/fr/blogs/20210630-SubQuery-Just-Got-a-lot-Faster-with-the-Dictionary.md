# SubQuery devient beaucoup plus rapide avec le dictionnaire

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

Aujourd'hui, nous sommes fiers d'annoncer notre nouvelle amélioration de SubQuery, la fonction d'indexation du dictionnaire de SubQuery.

Le dictionnaire SubQuery a pour but d'accélérer vos projets. Il améliore considérablement les performances d'indexation de votre projet SubQuery, **parfois jusqu'à 10 fois plus vite.**

Lors de l'indexation de données en chaîne, les projets SubQuery inspectaient chaque bloc. La chaîne de Polkadot est volumineuse, 130 Go de données non structurées sur près de 6 millions de blocs. L'indexation prend plusieurs heures, un temps que vous ne voulez pas attendre, surtout lors des tests.

Les projets SubQuery ont maintenant la possibilité de sauter tout cela, nous pré-indexons essentiellement l'emplacement de tous les événements dans une chaîne.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Les performances s'améliorent le plus lorsque les données ne sont pas courantes, mais plutôt intercalées le long de la chaîne. En effet, si les données sont rares, le dictionnaire saute plus de blocs, et l'impact sur les performances est donc plus important.

Le point de terminaison du dictionnaire peut être ajouté dans [votre fichier 'project.yaml'](https://doc.subquery.network/create/manifest.html), ou [spécifié au moment de l'exécution](https://doc.subquery.network/run/run.html#using-a-dictionary). En outre, vous pouvez également remplacer ce point de terminaison lors de l'exécution de votre projet dans les [projets de SubQuery](https://project.subquery.network/).

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

Vous pouvez en savoir plus sur le dictionnaire dans notre [documentation utile ici](https://doc.subquery.network/run/run.html#using-a-dictionary).

Nous pensons que SubQuery est la meilleure option d'indexation des données disponible pour toute application numérique Polkadot/Substrate, et cette nouvelle implémentation du dictionnaire SubQuery nous permet d'améliorer encore notre service en accélérant le processus d'indexation de vos projets SubQuery.

Vous pouvez l'essayer vous-même dans [SubQuery Projects](https://project.subquery.network/) ou visualiser les dictionnaires eux-mêmes dans [notre explorateur](https://explorer.subquery.network/). Afin d'utiliser un dictionnaire dans votre projet existant, votre version [@subql/cli](https://www.npmjs.com/package/@subql/cli) doit être au moins 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)