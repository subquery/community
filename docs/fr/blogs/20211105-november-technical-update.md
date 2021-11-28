# Mise à jour technique de novembre de SubQuery : mises à jour de l'EVM et du manifeste

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**Lisez la suite pour notre plongée technique dans la dernière version de SubQuery**

# Prise en charge des fichiers externes de type chaîne dans le manifeste du projet

Aujourd'hui est le lancement de [version 0.2.0](https://doc.subquery.network/create/manifest/) de notre fichier manifeste de projet (`project.yaml`). Cette nouvelle version apporte aux développeurs diverses améliorations qui ont été demandées par les clients.

Plus important encore, vous pouvez maintenant référencer un fichier de définition de types de chaîne qui a tous les types personnalisés inclus lorsque vous indexez une chaîne de substrat personnalisée. Cela vous permet de connecter rapidement un nouveau projet SubQuery à n'importe quelle chaîne basée sur le substrat, y compris tous les parachains de Kusama. Ce devrait être un fichier type de chaîne standard qui déclare les types spécifiques pris en charge par cette blockchain dans l'un ou l'autre des `. format fils` ou `.yaml`.

Cette solution vous permet d'éviter de copier et de gérer les définitions de type de chaîne dans le manifeste lui-même, et vous permet de simplement cloner les [fichiers de type de chaîne publiés répertoriés dans des dépôts comme PolkadotJS](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec).

[Vous pouvez vous informer sur le nouveau fichier manifeste, y compris sur la façon dont vous pouvez y migrer vos projets, ici dans notre documentation mise à jour.](https://doc.subquery.network/create/manifest/)

# Support de l'EVM Moonbeam

La semaine dernière, nous avons été heureux d'annoncer [que nous travaillions avec Moonbeam pour apporter le support complet de l'indexation EVM et Substrate à Moonriver](https://subquery.medium.com/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff).

Aujourd'hui, nous donnons suite à cette annonce avec toutes les ressources pour développeurs dont vous avez besoin pour démarrer.

Actuellement, il n'existe pas d'outil open-source permettant aux développeurs de collecter et d'interroger les données de manière flexible sur Ethereum et Polkadot/Kusama. Cette limitation peut faire en sorte que les solutions dApps de Moonriver soient cloisonnées dans la couche des contrats intelligents et limitent ainsi leur potentiel pour les consommateurs des deux réseaux prospères. Ce partenariat avec Moonbeam apporte une solution d'indexation des données complète et unifiée pour toutes les données blockchain au sein de Moonriver et profitera grandement à l'écosystème d'applications en pleine croissance de Moonriver.

**SubQuery sera l'invité du prochain atelier Moonbuilders, le mercredi 1er décembre,** [**inscrivez-vous ici**](https://www.crowdcast.io/e/moonbuilders-ws/10)**.**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[Premièrement, vous familiarisez avec la documentation mise à jour sur la façon de vous connecter et d'indexer les données de Moonbeam, Moonbase Alpha, et Moonriver.](https://doc.subquery.network/create/moonbeam/) Le processus d'indexation des données de Moonbeam ne comporte que deux étapes :

## Étape 1 : Ajouter la source de données personnalisée de Moonbeam

Nous avons créé un processeur de données spécialement conçu pour fonctionner avec l'implémentation de [Frontier](https://github.com/paritytech/frontier) de Moonbeam. Il vous permet de référencer des ressources ABI spécifiques utilisées par le processeur pour analyser les arguments et l'adresse du contrat intelligent d'où proviennent les événements ou vers lequel l'appel est effectué. [Vous pouvez en savoir plus ici](https://doc.subquery.network/create/moonbeam/#data-source-spec).

SubQuery introduit des filtres plus avancés que d'autres indexeurs, permettant le filtrage des transactions non-contractuelles, des expéditeurs de transactions, des contrats et des arguments de log indexés. Cela permet aux développeurs de construire une grande variété de projets qui répondent à leurs besoins spécifiques en matière de données.

## Étape 2 : Indexer les données de Moonbeam

Tout comme un projet de SubQuery normal, vous utilisez une fonction de mapping pour transformer les données hors chaîne vers les entités GraphQL que vous définissez, la différence est que au lieu d'un `SubstrateEvent` ou `SubstrateExtrinsic`, votre fonction de mappage recevra un `MoonbeamCall` ou `MoonbeamEvent` basé sur le type [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) d'Ether ou [Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log). [Vous pouvez en savoir plus à ce sujet ici](https://doc.subquery.network/create/moonbeam/#moonbeamcall).

[Lisez la documentation complète sur ce processus ici](https://doc.subquery.network/create/moonbeam/#moonbeamcall)

## Exemples de Projets

Il y a un exemple de projet complet qui indexe les `événements de transfert` et `approuve` appels de contrat intelligent. Le code pour ce projet d'exemple est [ici sur GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter) ou accessible via le projet [live SubQuery sur SubQuery Explorer ici](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project).

La majeure partie des changements se produisent dans le fichier Manifest (`project.yaml`). Vous pouvez voir ci-dessous que nous avons [des filtres d'appel étendus](https://doc.subquery.network/create/moonbeam/#call-filters) pour prendre en charge soit [les chaînes de signature de fonction](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) ou la fonction sighash pour filtrer la fonction appelée sur le contrat. Pour les [filtres d'événements](https://doc.subquery.network/create/moonbeam/#event-filters), vous pouvez utiliser un filtrage des sujets qui suit la norme [Ethereum JSON-PRC log la norme sur les filtres se trouve ici](https://docs.ethers.io/v5/concepts/events/). Notez que SubQuery introduit des filtres plus avancés que d'autres indexeurs pour Moonbeam EVM et que ces améliorations devraient bénéficier de manière significative aux développeurs.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

Si vous connaissez la façon dont le projet SubQuery basé sur Substrate est réalisé, vous remarquerez à quel point les fonctions de mappage sont similaires pour le nouveau support de Moonriver. Chaque fonction de mappage reçoit un `MoonbeamCall` ou `MoonbeamEvent` et les traite comme n'importe quel autre projet de SubQuery.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

Si vous avez des questions à ce sujet, assurez-vous d'avoir [consultez notre documentation](https://doc.subquery.network/create/moonbeam) ou contactez-nous sur notre canal de support #technical-support dans notre communauté [Discord](https://discord.com/invite/subquery).

[Cloner le projet d'exemple sur GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

Comme vous pouvez le constater, la création d'un projet Moonriver ou Moonbase Alpha qui indexe à la fois les données Substrate et EVM dans un seul projet est extrêmement simple et largement similaire. Vous pouvez utiliser les outils d'échafaudage avancés de SubQuery pour accélérer le développement de votre dApp et tirer parti de l'indexation ou de l'indexation plus riche pour vous pour construire des dApps plus intuitifs. Nous sommes impatients de voir ce que vous allez construire !

## À propos de SubQuery

SubQuery est une couche d'agrégation de données qui fonctionne entre les blockchains de couche 1 (comme Moonriver et Polkadot) et les DApps. Ce service débloque les données de la blockchain et les transforme en un état interrogeable afin qu'elles puissent être utilisées dans des applications intuitives. Il permet aux développeurs de DApps de se concentrer sur leur cas d'utilisation principal et leur front-end, sans avoir besoin de perdre du temps à construire un back-end personnalisé pour le traitement des données.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## À propos de Moonbeam

Moonbeam est une plateforme de contrats intelligents compatible avec Ethereum sur le réseau Polkadot qui facilite la création d'applications nativement interopérables. Cette compatibilité avec Ethereum permet aux développeurs de déployer des contrats intelligents Solidity existants et des frontaux DApp sur Moonbeam avec un minimum de modifications. En tant que parachain sur le réseau Polkadot, Moonbeam bénéficiera de la sécurité partagée de la chaîne relais Polkadot et des intégrations avec d'autres chaînes connectées à Polkadot. Actuellement en développement actif par PureStake, Moonbeam devrait atteindre le MainNet au quatrième trimestre 2021. Pour en savoir plus : [https://moonbeam.network/](https://moonbeam.network/).
