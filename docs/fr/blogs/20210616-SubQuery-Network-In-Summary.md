# Réseau SubQuery - Résumé

> Comment fonctionne le réseau SubQuery ? [ELI5](https://www.dictionary.com/e/slang/eli5/#:\~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)

Aujourd'hui, nous allons parler du fonctionnement du réseau SubQuery à un haut niveau.

## Participants


![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Les participants au réseau SubQuery

Il y a trois types de participants dans le réseau SubQuery :

-   **Consommateurs**: Les consommateurs font des demandes au réseau SubQuery pour des données spécifiques et paient un montant annoncé de SQT.
-   **Indexeurs**: Les indexeurs hébergent les projets SubQuery dans leur propre infrastructure, en exécutant à la fois le nœud et le service de requête pour indexer les données et répondre aux requêtes GraphQL.
-   **Délégués**: Les délégués participeront au réseau en soutenant leurs indexeurs favoris afin de gagner des récompenses.

## Indexeurs, consommateurs et requêtes

Commençons par les indexeurs, qui effectuent une grande partie du travail en coulisse. Ils gèrent le matériel, font fonctionner l'infrastructure, surveillent les ressources et choisissent les bons projets de sous-requêtes à indexer.

Cela prend du temps et de l'argent, mais une fois qu'ils l'ont fait, les consommateurs peuvent venir et faire des demandes. Les consommateurs feront des demandes au réseau SubQuery pour des données spécifiques et paieront un montant annoncé de notre jeton, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Les consommateurs feront des demandes au réseau SubQuery pour des données spécifiques et paieront un montant annoncé de notre jeton, SQT.

## Fonction de production Cobb-Douglas

Ce paiement va dans un pool de revenus de projet et à la fin d'une période de jalonnement (28 jours), nous prenons ce pool de revenus de projet et le divisons. Il est réparti entre les indexeurs par ce qu'on appelle la fonction de production Cobb-Douglas.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

Il est réparti entre les indexeurs par une fonction de production dite Cobb-Douglas.

Cette approche, en termes simples, signifie que les revenus sont alloués aux indexeurs concurrents en proportion des demandes auxquelles ils ont répondu et du montant des mises.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Les revenus sont alloués aux indexeurs concurrents en fonction des demandes auxquelles ils ont répondu et du montant des mises.

À notre avis, la beauté de cette équation est qu'un indexeur rationnel doit maintenir un niveau élevé de SQT jalonné par rapport au travail qu'il effectue afin de recevoir un revenu optimal. Par conséquent, nous n'avons pas besoin d'appliquer des exigences arbitraires en matière de jalonnement, car les indexeurs sont incités à s'autogérer et à maintenir un jalonnement ou une main dans le jeu.

## Délégués

Les indexeurs sont donc incités à faire le plus de travail possible et à miser le plus possible pour maximiser leurs récompenses. C'est là que les délégués interviennent.

Les délégués peuvent déléguer leur SQT libre aux indexeurs, chaque indexeur peut publier un _taux de partage des revenus de la taxe de requête_, et ces délégués seront récompensés par une partie des revenus de la taxe de requête que l'indexeur est récompensé.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Les délégués peuvent déléguer leur SQT libre aux indexeurs et ces délégués seront récompensés par une partie du revenu de la redevance de requête que par laquelle l'indexeur est récompensé.

Le _taux de partage des revenus de la redevance de requête_ que les indexeurs annoncent est bloqué pour chaque période de jalonnement de 28 jours, et une diminution de ce taux doit être annoncée pour une période de jalonnement de 28 jours avant d'entrer en vigueur.

De même, les délégués peuvent retirer leurs montants de délégation à tout moment, mais ils ne recevront des récompenses que lorsqu'ils auront délégué pour toute la période d'enchères.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Les délégués ne recevront des récompenses que lorsqu'ils auront délégué pour toute la période d'enchères.

## Bons de commande

L'indexation d'un projet prend du temps et de l'argent, il y a beaucoup de données sur la chaîne. Afin d'encourager les indexeurs à indexer et à soutenir un tout nouveau projet de SubQuery, nous prévoyons de mettre en place un mécanisme de marché permettant aux consommateurs de signaler des revenus garantis aux indexeurs de nouveaux projets de SubQuery.

Nous appelons cela des bons de commande, et les consommateurs peuvent annoncer un contrat sur la chaîne pour un prix et un nombre de requêtes déterminés. Les indexeurs peuvent voir cela et choisir de remplir les contrats.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Les consommateurs peuvent annoncer un ordre d'achat sur la chaîne pour un prix et un nombre de demandes déterminés.

Les commandes peuvent également être placées sur des projets de SubQuery existants afin d'attirer des indexeurs supplémentaires pour améliorer la concurrence et diminuer les prix.