# Explorez les NFTs secrets sur le réseau Ternoa

![](https://miro.medium.com/max/1200/0*s1fSGGelS-HVJNBm)

Durant la semaine du 5 juillet, Ternoa a présenté son nouveau Wallet, une application permettant aux futurs utilisateurs d'envoyer et de recevoir des $CAPS et des '**_Secret NFTs'_** frappés sur la Blockchain Ternoa, ainsi que de dévoiler facilement leur Secret à leurs propriétaires. Le concept de '**_Secret_**' pour les '**_NTFs_**' a été imaginé par l'équipe Ternoa.

Ces '_NTFs secrets_' peuvent être trouvés et achetés sur la place de marché dédiée[(https://www.secret-nft.com/](https://www.secret-nft.com/)) construite par l'équipe Ternoa. Le Ternoa Wallet est une solution inspirée du projet [WalletConnect](https://walletconnect.org/), qui permet aux utilisateurs de se connecter facilement et d'acheter des NFT grâce à une simple interaction par code QR entre le site web et l'application.

Les **_Secret NFTs_** sont un type particulier de NFTs inventés et développés par Ternoa, et rendus possibles par leur architecture blockchain unique et élégante : Les NFTs secrets sont composés de deux médias, l'un public avec un filigrane ou une qualité inférieure, et l'autre privé qui ne peut être vu que par le propriétaire dudit NFT. Cela offre une protection étonnante contre la falsification pour les artistes et les KOLs, et ouvre de nombreux cas d'utilisation.

Le support secret sera facilement accessible par l'utilisateur du portefeuille qui détient son SecretNFT.

**SubQuery** soutient Ternoa en fournissant des solutions d'indexation pour leurs soldes d'utilisateurs, l'explorateur NFT à la fois sur le Ternoa Wallet et le site Secret-NFT.

![](https://miro.medium.com/max/1400/0*gquKRKBgiyAAxRFZ)

> "Nous avons fait le choix d'utiliser SubQuery car la documentation nous semblait claire au premier coup d'œil et nous ne nous sommes pas trompés. SubQuery fournit un environnement complet avec une machine docker qui rend les tests et le déploiement très faciles. Il est relativement facile de développer dans cet environnement et de programmer l'écoute des différents événements émis par notre blockchain. Félicitations également au support qui est très réactif." - Ternoa CTO

Les services[de SubQuery](https://subquery.network/) permettent également d'extraire et d'interroger sur les données de la chaîne pour les NFTs secrets frappés sur la blockchain Ternoa, d'une manière qui prend en charge les caractéristiques uniques des NFTs de Ternoa.

![](https://miro.medium.com/max/1400/0*CA7lfxmZxHCKhzWw)

Dans l'exemple ci-dessous, nous [utilisons SubQuery](https://explorer.subquery.network/subquery/capsule-corp-ternoa/indexer) pour trouver les 5 premiers NFTs sur le réseau Ternoa.

![](https://miro.medium.com/max/1400/0*YaQGpb3xUn7BUESx)

Le NFT secret utilise [SubQuery Projects](https://project.subquery.network/) pour gérer son propre projet et effectuer les mises à jour nécessaires. Les services d'indexation et d'interrogation que nous fournissons sont entièrement gérés par SubQuery et mis gratuitement à la disposition de la communauté Polkadot dans l'[Explorer de SubQuery](https://explorer.subquery.network/).

[Explorez le jeu de données Ternoa Secret NFT](https://explorer.subquery.network/subquery/capsule-corp-ternoa/indexer)