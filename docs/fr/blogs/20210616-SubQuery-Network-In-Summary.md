# Réseau SubQuery - Résumé

**Comment fonctionne le réseau SubQuery ? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)**

Aujourd'hui, nous allons parler du fonctionnement du réseau de sous-questionnaires à un niveau élevé.

## Participants

![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Participants au réseau SubQuery

Il existe trois types de participants au réseau de SubQuery :

- **Consommateurs**: Les consommateurs font des demandes au réseau SubQuery pour des données spécifiques et paient un montant annoncé de SQT
- **Indexeurs**: Les indexeurs hébergent les projets SubQuery dans leur propre infrastructure, en exécutant à la fois le nœud et le service de requête pour indexer les données et répondre aux requêtes GraphQL.
- **Délégués**: Les délégués participeront au réseau en soutenant leurs indexeurs favoris afin de gagner des récompenses

## Indexeurs, consommateurs et requêtes

Commençons par les indexeurs, qui effectuent une grande partie du travail dans les coulisses. Ils gèrent le matériel, exécutent l'infrastructure, surveillent les ressources et choisissent les bons projets de sous-questionnaires à indexer

Cela prend du temps et de l'argent, mais une fois qu'ils l'ont, les consommateurs peuvent venir et faire des demandes. Les consommateurs feront des demandes au réseau SubQuery pour des données spécifiques et paieront un montant annoncé de notre jeton, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Les consommateurs feront des demandes au réseau SubQuery pour des données spécifiques et paieront un montant annoncé de notre jeton, SQT.

## Fonction de production Cobb-Douglas

Ce paiement est versé dans une réserve de revenus du projet et, à la fin d'une période de staking (28 jours), nous prenons cette réserve de revenus du projet et la divisons. C'est craché à travers les indexeurs par quelque chose appelé la fonction de production Cobb-Douglas.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

C'est craché à travers les indexeurs par quelque chose appelé la fonction de production Cobb-Douglas.

Cette approche, en termes simples, signifie que les revenus sont alloués aux indexeurs concurrents en fonction des demandes auxquelles il est répondu et des montants mis en jeu.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Les revenus sont alloués aux indexeurs concurrents en fonction des demandes auxquelles ils ont répondu et du montant des mises.

À notre avis, la beauté de cette équation est qu'un indexeur rationnel doit maintenir un niveau élevé de SQT staké par rapport au travail qu'il effectue afin de recevoir un revenu optimal. Par conséquent, nous n'avons pas besoin d'appliquer des exigences arbitraires en matière de mise de fonds, car les indexeurs sont incités à s'autogérer et à maintenir une mise de fonds ou une participation au jeu.

## Délégués

Les indexeurs sont donc incités à travailler le plus possible et à miser le plus possible pour maximiser leurs récompenses. C'est là que les délégués interviennent.

Les délégués peuvent déléguer leur SQT de réserve aux indexeurs, chaque indexeur peut publier un _taux de partage des revenus de la redevance de requête_, et ces délégués seront récompensés par une partie des revenus de la redevance de requête dans laquelle l'indexeur est récompensé.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Les délégués peuvent déléguer leur SQT de rechange aux indexeurs et ces délégués seront récompensés par une partie des revenus de la redevance de requête que l'indexeur reçoit

Le _taux de partage des revenus des frais de requête_ que les indexeurs annoncent est bloqué pour chaque ère de staking de 28 jours, et une diminution de ce taux doit être annoncée pour une ère entière de staking de 28 jours avant d'entrer en vigueur.

De même, les délégants peuvent retirer leurs montants de délégation à tout moment, mais ils ne recevront des récompenses que lorsqu'ils auront délégué pour toute la période de staking.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Les délégués ne recevront des récompenses que lorsqu'ils auront délégué pour toute la période de staking

## Bons de commande

L'indexation d'un projet prend du temps et de l'argent, il y a beaucoup de données sur la chaîne. Afin d'encourager les indexeurs à indexer et à soutenir un tout nouveau projet de sous-questionnaire, nous prévoyons de mettre en œuvre un mécanisme de marché permettant aux consommateurs de signaler les revenus garantis aux indexeurs des nouveaux projets de sous-questionnaires.

Nous les appelons des bons de commande, et les consommateurs peuvent annoncer un contrat sur la chaîne pour un prix et un nombre de demandes déterminés. Les indexeurs peuvent voir cela et choisir de remplir les contrats.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Les consommateurs peuvent annoncer un ordre d'achat sur la chaîne pour un prix et un nombre de demandes déterminés.

Des commandes peuvent également être passées sur des projets de sous-référencement existants afin d'attirer des indexeurs supplémentaires pour améliorer la concurrence et faire baisser les prix
