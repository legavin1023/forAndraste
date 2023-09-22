<template>
  <div>
    <div class="topImage gallows"></div>
    <div class="content">
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              앤더스가 챈트리를 폭발시킨 방법은 짐작이 가지만... 어디로 갔는지는
              더 알아봐야 합니다.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        기사단장은 흥미롭다는 듯이 자세를 고치고 고개를 살짝 숙였다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">설명해주겠나?</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              앤더스의 진료소에 셀라 페트래와 드레이크 스톤이 있었던 걸로
              확인했습니다. 그리고 둘을 조합하는 실험이 있었던 정황도
              파악했습니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">본핏?</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              예. 자세한 건 따로 보고를 올리겠습니다. 우선 지금은 그쪽에
              비밀통로가 있고 앤더스가 이를 확인했을 가능성이 커 보입니다. 그가
              살아있지 않더라도, 조사할 가치는 있어보입니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              둘을 조합하면... 폭약이군. 양에 따라 다르겠지만 마법으로
              증폭했다면 위력을 키우는 건 일도 아니었겠지.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">예.</div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">흠.......</div>
          </li>
        </ul>
      </div>
      <p class="content-text">기사단장은 잠시 고민하는 듯 했다.</p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              하지만 그가 어디로 향했는지가 명확하지 않으니 당장은 추가적인
              수색을 진행하기 어렵군.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              행방과 관련해서는... 하루이틀 지켜보고 호크의 저택에 다시
              찾아가보려고 합니다. 호크의 가족분의 협조를 얻어내는 데 시간이
              조금 걸리겠지만, 거기에 단서가 있을 것 같습니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              음... 그렇다 하더라도 그동안 붉은 리륨에 대한 단서를 놓칠 수는
              없지...그럼....
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        기사단장은 호흡을 가다듬고 수색대로 소집된 템플러들을 집합시켰다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              우리는 붉은 리륨의 흔적을 따라 딥로드로 향한다.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        수색대가 딥로드에 진입할 준비를 하는 동안, 기사단장은 고개를 돌려 조용히
        지시했다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              그리고 자네는, 다시 한 번 더 조심스럽게 앤더스의 행방을 알아보게.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">예. 알겠습니다.</div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              수색대에서 빠진 템플러들에게는 컬렌 사령관의 지시에 따르라고
              해놨지만, 필요하다면 몇 명 데리고 가도록 하고. 자네의 판단을
              믿겠네.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        기사단장은 수색대와 함께 딥로드로 향했다. 불길한 붉은 기운이 그들을 마치
        딥로드로 빨아들이는 것처럼 보였다. <br /><br />템플러 몇은 그들과
        다르게, 다시 한 번 더 커크월에서 앤더스와 호크에 대한 수색을 진행했으나
        별다른 진전을 보지 못한 채 커크월에 머물렀다.<br /><br />딥로드가 무너져
        내려 자취를 감추면서 그 안으로 향했던 템플러들이 모두 실종된 것은, 그리
        오래 지나지 않은 어느 날 벌어진, 커크월의 또다른 비극이었다.
      </p>
      <div class="content-button ending mt90 pb70">
        <div class="varric pb70">베릭 테스라스의 메모에서</div>
        <button class="ending-button pb70" @click="checkPath">
          <span>엔딩2</span>
          <p>공동수색 B : 남겨진 자들 B</p>
        </button>
      </div>
    </div>
    <div class="bottomImage"></div>
  </div>
</template>

<script>
export default {
  methods: {
    checkPath() {
      this.$router.push({ name: "/ES-bad" });
    },
  },
};
</script>

<style></style>
