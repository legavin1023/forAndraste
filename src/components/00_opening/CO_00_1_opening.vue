<template>
  <div>
    <div class="topImage"></div>
    <div class="content">
      <p class="content-text mt26">
        서신으로 전달받은 커크월의 재앙은, <br />
        종이에 빼곡히 적힌 활자만으로는 감히 상상할 수 없을 정도로 처참한
        비극이었다. <br />
        <br />
        서둘러 수많은 템플러들이 혼란을 정리하고 질서를 회복하겠다는 미명 하에
        커크월로 향했다.
      </p>
      <div class="content-buttonBox">
        <input
          type="text"
          placeholder="여기에 입력해주세요."
          v-model="inputValue"
          @keyup.enter="checkInputValue"
        />
      </div>
      <div class="content-hint">
        <div class="ink"></div>
        <p>
          영어 소문자, 숫자로 띄어쓰기 없이 입력합니다. <br />
          정답이 고유명사인 경우에도 영문명을 입력해주세요.
        </p>
      </div>
    </div>
    <div class="bottomImage"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "", // 입력된 값 저장을 위한 변수
    };
  },
  methods: {
    checkInputValue() {
      this.$store.dispatch("terminateAudio");

      this.$store.dispatch(
        "setAudioSource",
        `${process.env.BASE_URL}assets/sound/파도소리_배소리.mp3`
      );
      this.$store.dispatch("playAudio");
      // if (this.inputValue === "fortheandraste") {
      // 입력된 값이 'fortheandraste'와 일치하는 경우, 다른 뷰로 전환
      this.$router.push({ name: "/CO-01-1" });
      // }
    },
  },
};
</script>
