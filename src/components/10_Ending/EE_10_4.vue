<template>
  <div>
    <div class="topImage gallows"></div>
    <div class="content">
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              앤더스에 대해서- 폭발 방법도, 행방도 알아내지 못했습니다.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        기사단장은 신음에 가까운 한숨을 내뱉으며 고개를 살짝 숙였다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              어쩔 수 없지. 쉬운 임무는 아니었네.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">죄송합니다.</div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              괜찮네. 일단은 지금 해결할 수 있는 일에 집중하도록 하지. 붉은 리륨
              수색대에 함께하도록 하게.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              기사단장님, 조사과정에서 붉은 리륨을 뒤쫓는 것이 위험하다는 얘기를
              많이 들었습니다. 리륨에 강한 드워프도 현혹되었다고 합니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              단단히 경계해야겠군. 이대로 붉은 리륨의 단서까지 놓칠수는 없어.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        기사단장은 호흡을 가다듬고 수색대로 소집된 템플러들을 집합시켰다.
      </p>
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
        기사단장과 수색대는 딥로드로 향했다. <br />
        남은 템플러들은 불길한 붉은 기운이 그들을 마치 딥로드로 빨아들이는
        것처럼 보였다고 묘사했다.<br /><br />
        그 안으로 향했던 템플러들이 모두 실종되었다는 소식은 커크월의 또다른
        괴담이 되어 흉흉한 소문으로 퍼져나갔다.<br />밤중에 붉은 리륨의 빛이
        한차례 통로 안쪽을 환히 밝혔다느니, 붉은 리륨에 홀려 죽은 템플러들의
        비명 소리가 안쪽에서 들린다느니, 하며 온갖 진실과 허구가 뒤섞여갔다.<br /><br />뒤늦게
        이들을 찾기 위해 쫓아 들어간 템플러들이 마주한 것은 무너져 내려 막다른
        길이 되어버린 딥로드의 입구 뿐이었고, 그들의 행방을 아는 사람은 아무도
        없었다.
      </p>
      <div class="content-button ending mt90 pb70">
        <div class="varric pb70">베릭 테트라스의 메모에서</div>
        <button class="ending-button pb70" @click="checkPath">
          <span>엔딩4</span>
          <p>수색실패 : 레드템플러</p>
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
