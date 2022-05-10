# 사전을 사용하여 SubQuery가 훨씬 빨라졌습니다.

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

오늘 우리는 SubQuery의 사전 인덱싱 기능인 SubQuery에 대한 새로운 개선 사항을 발표하게 된 것을 자랑스럽게 생각합니다.

SubQuery 사전은 프로젝트의 속도를 높이는 모든 것입니다. SubQuery 프로젝트의 인덱싱 성능을 극적으로 향상시키며 **때로는 최대 10배까지 빨라집니다.**

체인 데이터를 인덱싱할 때 SubQuery 프로젝트는 각 블록을 검사하는 데 사용됩니다. Polkadot의 체인은 거의 6백만 블록에 걸쳐 130GB의 비정형 데이터로 구성되어 있습니다. 이것은 색인을 생성하는 데 많은 시간이 걸리며 특히 테스트할 때 기다리고 싶지 않은 시간입니다.

SubQuery 프로젝트에는 이제 이 모든 것을 건너뛸 수 있는 옵션이 있습니다. 기본적으로 체인 내 모든 이벤트의 위치를 ​​미리 인덱싱합니다.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

데이터가 일반적이지 않고 체인을 따라 산재되어 있을 때 성능이 가장 향상됩니다. 마치 데이터가 희귀한 것처럼 사전이 더 많은 블록을 건너뛰므로 성능에 미치는 영향이 더 큽니다.

사전 끝점은 ['project.yaml' 파일](https://doc.subquery.network/create/manifest.html)에 추가하거나 [런타임에 지정](https://doc.subquery.network/run/run.html#using-a-dictionary)할 수 있습니다. 또한 [SubQuery 프로젝트](https://project.subquery.network/)에서 프로젝트를 실행할 때 이 끝점을 재정의할 수도 있습니다.

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

[여기의 유용한 문서](https://doc.subquery.network/run/run.html#using-a-dictionary)에서 사전에 대한 자세한 내용을 읽을 수 있습니다.

우리는 SubQuery가 모든 Polkadot/Substrate dApp에 사용할 수 있는 최고의 데이터 인덱싱 옵션이라고 생각하며, 이 SubQuery 사전의 새로운 구현을 통해 SubQuery 프로젝트의 인덱싱 프로세스 속도를 높여 서비스를 더욱 개선할 수 있습니다.

[SubQuery 프로젝트](https://project.subquery.network/)에서 직접 시도하거나 [탐색기](https://explorer.subquery.network/)에서 사전 자체를 볼 수 있습니다. 기존 프로젝트에서 사전을 사용하려면 @subql/cli 버전이 0.10.0 이상이어야 합니다.

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)