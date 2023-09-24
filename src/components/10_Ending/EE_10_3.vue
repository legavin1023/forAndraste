<template>
  <div>
    <div class="topImage gallows"></div>
    <div class="content">
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              앤더스가 어떻게 챈터리를 폭발시켰는지는 못찾았지만, 어디로 갔는지
              짐작가는 곳이 있습니다.
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
            <div class="content-dialog-text">
              행방을 알아낸 건가? 설명해주겠나?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              일단 본핏으로 이어지는 것 같습니다.
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
              하지만 그가 어떻게 챈트리를 이꼴로 만들었는지 알지 못한다면
              무턱대고 그를 대대적으로 쫓는 건 위험하겠어.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              하지만 붉은 리륨을 뒤쫓는 것이 위험하다는 얘기도 많이 들었습니다.
              리륨에 강한 드워프도 현혹되었다고 합니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              하지만 이대로 붉은 리륨에 대한 단서를 놓칠 수는 없지... 앤더스도
              마찬가지고... 그럼....
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
              그리고 자네는, 다시 한 번 더 조심스럽게 앤더스를 추적하게.
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
        딥로드로 빨아들이는 것처럼 보였다. <br /><br />
        템플러 몇은 그들과 다르게, 본핏으로 향해 그곳에서부터 다시 시작된
        앤더스의 흔적을 따라, 그들을 또다른 모험의 길로 향했다.<br /><br />
        딥로드로 향했던 템플러들이 모두 실종되었다는 소식이, 앤더스를 추적하던
        템플러들에게 닿은 것은 한참 뒤의 일이었다.
      </p>
      <div class="content-button ending mt90 pb70">
        <div class="varric pb70">베릭 테트라스의 메모에서</div>
        <button class="ending-button pb70" @click="checkPath">
          <span>엔딩2</span>
          <p>공동수색 A : 남겨진 자들 A</p>
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
