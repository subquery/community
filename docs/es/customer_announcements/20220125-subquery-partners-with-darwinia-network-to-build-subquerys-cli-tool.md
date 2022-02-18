# SubQuery se asocia con Darwinia Network para crear la herramienta CLI SubQuery

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

Hoy queremos anunciar nuestra asociación entre Darwinia Network y SubQuery Network. Darwinia ha ganado recientemente su puesto en la subasta de Kusama parachain, y se está preparando para asegurar su puesto en Polkadot. Como parte del roadmap de Darwinia para construir un bridge de cadena cruzada para Polkadot, Darwinia se ha asociado con SubQuery para construir la plétora de aplicaciones que se necesitarán para proporcionar la mejor experiencia de usuario para las interacciones de cadena cruzada

Nuestra asociación va más allá de utilizar SubQuery para potenciar el ecosistema de aplicaciones de Darwinia, Darwinia ha estado trabajando estrechamente con el equipo de SubQuery para [construir una herramienta CLI](https://github.com/fewensa/subquery-cli) para el servicio gestionado de SubQuery ([https://project.subquery.network](https://project.subquery.network)). Puede utilizar esta [CLI](https://github.com/fewensa/subquery-cli) para crear un proyecto SubQuery y desplegar automáticamente una nueva versión en la ranura de staging o de producción. Además, puede recuperar información, incluyendo el estado detallado de la sincronización y los registros de su proyecto en ejecución, que está alojado gratuitamente en SubQuery Projects. Darwinia ha llevado esto aún más lejos y ha construido un ejemplo de flujo de trabajo de [Acción GitHub](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) que utiliza la herramienta CLI para hacer esto en cualquier empuje a la rama principal de su [repositorio](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml). This new automation is an excellent example of the close relationship between Darwinia and SubQuery, and the CLI tool is already used by many other projects within SubQuery’s large ecosystem.
> “The SubQuery CLI tool that we’ve built has really made our development pipeline easy, now we can entirely manage releases in branches and feel confident that our changes will be deployed automatically to SubQuery’s hosted service. We are particulay proud of our automated process to check if the schema.graphql file has changed, and if so, we’ll redeploy a new clean database” — Yalin, Core Developer — Darwinia Network


Check out the [new CLI tool here](https://github.com/fewensa/subquery-cli) and see a [living example of it here](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml).

The first of many applications in Darwinia’s growing application ecosystem is the [Wormhole app](https://wormhole.darwinia.network/). Wormhole is an easy to use application that makes transferring assets between networks easy and is a key part of Darwinia’s cross chain strategy. Currently the bridge between Darwinia and Ethereum is operational. [SubQuery is used to show historic transfers and events](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia) that have occurred on your Darwinia/Crab/Pangolin address related to the wormhole (e.g. the arrival of assets from another network).

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

The team at Darwinia is in the process of building a new [Smart App that is a central hub](https://apps.darwinia.network/) to manage all Darwinia network interactions including governance, staking, chain exploration and more. This app uses a considerable amount of [SubQuery data to show historic data and actions](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery will be working closely with the team at Darwinia to make this the fastest and easier user experience in the entire Polkadot ecosystem.
> “We’re excited to use SubQuery to replace our existing backend servies for Wormhole, over the long term with the SubQuery Network this will make our services total decentralised and open source — its something that we are proud of!”” — Yalin, Core Developer — Darwinia Network


Additionally, Darwinia are using SubQuery to [provide the data behind](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot) their [Parachain Loan Offering website](https://darwinia.network/plo_contribute). Although Crab has already won their slot on Kusama, it’s not too late to contribute to Darwinia’s campaign for a Polkadot slot. They are also taking advantage of SubQuery to index [Merkle Mountain ranges](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr) for all blocks created in their network.

Darwinia Network is using [SubQuery Projects](https://project.subquery.network/) to manage their own project and make updates as required. The indexing and query services we provide are completely managed by SubQuery and provided to the Polkadot community for free in [SubQuery’s Explorer](https://explorer.subquery.network/).

## About Darwinia Network

Darwinia Network is a decentralized cross-chain bridge network building on Substrate, which is the “Golden Gate Bridge” of the cross-chain ecology. It provides the safest general bridge solution, connecting Polkadot, Ethereum, BSC and other heterogeneous chains by cross-chain assets transfer and general remote chain call. Also, its main application areas include Defi, cross-chain NFT trading market, games, etc.

[Website](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## About SubQuery Network

[SubQuery](https://subquery.network/) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications (DApps). Currently focused on Polkadot and Substrate projects, this data-as-a-service allows developers to focus on their core use case and front

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
