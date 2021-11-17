# Les créneaux de déploiement sont arrivés pour les projets SubQuery

> Aujourd'hui, nous introduisons les créneaux de déploiement, une toute nouvelle fonctionnalité qui améliore l'expérience des développeurs dans le service hébergé de SubQuery.

[SubQuery Projects](https://project.subquery.network/) est déjà utilisé comme un service géré et hébergé pour de nombreux projets, qu'il s'agisse d'explorateurs de chaînes, de portefeuilles, d'explorateurs NFT ou autres. C'est un service sur lequel nos clients comptent.

![](https://miro.medium.com/max/1400/0*PugDgh6weZspRIO2)

Vous pouvez maintenant déployer vers un emplacement de transit isolé

Bien que vous puissiez toujours faire fonctionner l'infrastructure de SubQuery vous-même (avec votre propre nœud et service de requête), notre objectif est de faire de notre service hébergé le fournisseur de données le plus fiable, le plus résilient et le plus performant de l'écosystème Polkadot/Substrate.

Les créateurs de [projets SubQuery](https://project.subquery.network/) améliorent et mettent à jour en permanence leurs projets et les données qu'ils contiennent. Malheureusement, il faut des heures, voire des jours, pour réindexer les données de la chaîne en cas de changement majeur. Notre objectif ultime est de vous permettre de mettre à jour votre projet, de réindexer vos données et de mettre à niveau vos projets SubQuery hébergés **sans aucun temps d'arrêt**.

**C'est pour ça que les slots de déploiement sont là, pour résoudre cela**

![](https://miro.medium.com/max/1400/0*vQ33aqhn1eVllo5t)

Votre emplacement de préparation fonctionnera indépendamment de l'emplacement de production primaire.

Lorsque vous créez un nouveau déploiement pour votre [projet SubQuery dans notre service hébergé](https://project.subquery.network/), vous pouvez choisir de le déployer soit dans le créneau de production, soit dans le créneau de mise à disposition. Ces deux slots sont des environnements isolés, chacun possède sa propre base de données et se synchronise indépendamment. Une fois que votre emplacement de préparation a démarré et terminé l'indexation, vous pouvez ensuite le promouvoir vers la production sans aucun temps d'arrêt.

Le staging slot (emplacement de mise à disposition) est parfait pour :

-   Valider les modifications apportées à votre projet SubQuery dans un environnement séparé. Le slot de staging (emplacement de mise à disposition) possède une URL différente de celle de la production que vous pouvez utiliser dans vos dApps.
-   Réchauffer et indexer les données pour un projet SubQuery mis à jour afin d'éliminer les temps d'arrêt dans votre dApp.
-   Préparation d'une nouvelle version de votre projet SubQuery sans l'exposer publiquement. L'emplacement de mise à disposition n'est pas exposé au public dans l'explorateur et possède une URL unique qui n'est visible que par vous.

Vous pouvez l'essayer vous-même dès maintenant dans [SubQuery Projects](https://project.subquery.network/).