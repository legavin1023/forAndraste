v
<template>
  <div>
    <div class="topImage kirkwall"></div>
    <div class="content">
      <p class="content-text mt26">
        쇠사슬의 도시, 커크월 항구가 멀찍이 보이기 시작했다. <br />
        기사단장은 템플러들에게 이번 파견의 목적을 다시 한 번 상기시켰다.
        <br />-<br />첫째, 커크월의 재앙에서 살아남은 템플러들을 지원한다.<br />
        둘째, 이 사태의 범인인 메이지 '앤더스'의 행방을 확인한다<br />. 셋째,
        기사단장 메레디스를 집어삼킨 정체불명의 '붉은 리륨'에 대해 수색한다.
      </p>
      <div class="content-dialog">
        <span class="content-dialog-span"></span>
        <ul>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              기사단장님, 앤더스라는 자는 현장의 템플러들이 처리하지 못한
              겁니까?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              직후에 메이지 반란이 있었던데다 메레디스도 그렇게 됐으니....
              <br />
              반란 직전에 커크월의 챔피언 손에 죽었다는 소문이 있긴 한데, 시신은
              찾지 못했다더군.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              커크월의 챔피언이라고 하시면, 호크 말씀이십니까?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              그래. 먼저 받은 문서에서 봤겠지만 앤더스와 아주 밀접한 사람이었지.
              <br />
              다만- 호크는 커크월의 영웅이네.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              그럼 단독수색을 지시하신 이유가....
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              지금 커크월에서 템플러에 대한 인식은 살얼음판과도 같네. 아주
              조용히, 앤더스의 행방을 알아내도록 하게. 그가 죽었더라도, 누가 왜
              어디로 시신을 치웠는지를 알아내야만 해.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              예. 알겠습니다. <br />
              혹시 호크에 대해서는, 특별히 신경쓰이는 부분이 있으십니까?
            </div>
          </li>
        </ul>
        <span></span>
      </div>
      <div class="content-button love mt70">
        <button @click="handleAM()">
          호크는 앤더스와 연인관계였고, 이 재앙에서 메이지를 위해 싸웠네.
        </button>
        <button @click="handleAT()">
          호크는 앤더스와 연인관계였고, 이 재앙에서 템플러를 위해 싸웠네.
        </button>
        <button @click="handleFM()">
          호크는 펜리스라는 엘프와 연인관계였고, 이 재앙에서 메이지를 위해
          싸웠네.
        </button>
        <button @click="handleFT()">
          호크는 펜리스라는 엘프와 연인관계였고, 이 재앙에서 템플러를 위해
          싸웠네.
        </button>
      </div>
    </div>
    <div class="bottomImage"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handleAM() {
      // 로컬 스토리지에 'love' 키로 'AA' 값을 저장
      localStorage.setItem("love", "AA");
      // 로컬 스토리지에 'route' 키로 'AM' 값을 저장
      localStorage.setItem("route", "AM");
      this.$router.push({ path: "/CO-01-2" });
    },
    handleAT() {
      localStorage.setItem("love", "AA");
      localStorage.setItem("route", "AT");
      this.$router.push({ path: "/CO-01-2" });
    },
    handleFM() {
      localStorage.setItem("love", "FF");
      localStorage.setItem("route", "FM");
      this.$router.push({ path: "/CO-01-2" });
    },
    handleFT() {
      localStorage.setItem("love", "FF");
      localStorage.setItem("route", "FT");
      this.$router.push({ path: "/CO-01-2" });
    },
  },
};
</script>

<style></style>
