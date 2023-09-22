<template>
  <div>
    <div class="topImage anders"></div>
    <div class="content pb70">
      <p class="content-text">
        별 것 없어보이는 종이였지만 , 뒷면에 무언가 비쳐보였다. <br />
        조심스럽게 종이를 뒤집자, 조금 동요한 듯 그리 정갈하지 못하게 쓰여진
        글자들이 빼곡하게 나열된 것이 보였다.
      </p>
      <div class="content-letter-my"><span>내 호크,</span></div>
      <p class="content-text">
        세상에, 설마 연서인가. <br />
        계속 읽어야할 지 고민이 되었지만, 호크와 이번 재앙을 연결할 수 있을지도
        몰랐다. 한숨을 크게 쉰 뒤 징그러운 문장들을 하나하나 읽어갔다.
      </p>
      <div
        class="content-letter hidden-text"
        v-if="route === 'AT' || route === 'FT'"
        ref="pElements"
      >
        <p>
          내 호크,<br />
          저번에 저스티스가 조금 오래 나와있었을 때, 네가 함께 있어줬다고
          들었어.<br /><span>미</span>안해. 네가 이런 일을 겪지 않도록 신경써야
          한다는 것을 알면서<span>도</span>, 이런 일이 벌어졌을 때 내 곁에
          있어준 게 <span>너</span>라는 사실에, 그리고 그 이후에도 여전히 내
          곁에 네가 남아 있다는 사실에 안도하고, 감사해.<br />넌
          다<span>치</span>지도 않았고, 문제될 건 아무것도 없다고 했지만-
          <span>나</span>의 어두운 일면이 네<span>게</span> 다시 영향을 주게 된
          것 같아 마음이 무거워.<br />그렇기에 나는 나와 그를 더 빨리 분리해야
          한다<span>는</span> 확신이 강해졌어.<br />네가 전에 직접 고생하며
          구해준 재료 덕분에 이제 거의 다 된 것 같아. <br />그 때가
          <span>되</span>면, 내가 오로지 나로서, 온전히 널 사랑할 수 있겠지.<br />마지막으로
          하나 <span>더</span> 부탁을 하고 싶어. 저스티스와 날 분리시키기 위한
          마지막 단계<span>야</span>. <br />챈트리 안쪽에
        </p>
        <div class="content-letter-say"></div>
      </div>
      <div
        class="content-letter hidden-text"
        v-if="route === 'AM' || route === 'FM'"
        ref="pElements"
      >
        <p>
          내 호크,<br />
          저번에 저스티스가 조금 오래 <span>나</span>와있었을 때, 네가 함께
          있었다고 들었어.<br />
          여러모로 진정할 수 있<span>게</span> 도움을 줬던 것 같아서 고맙고, 또
          <span>미</span>안해.<br />아무리 저스티스가 널 해치지 않았다지만,
          애당초에 이런 일을 겪지 않<span>도</span>록 내가 더 신경썼어야
          했는데.<br />요새 나의 어두운 일면이 점점 더 자주 일상을 차지하는
          비중이 늘어나<span>는</span> 것 같아 초조<span>해.</span><br />네게
          더이상 피해를 주지 않기 위해서<span>라</span>도 나는 더 빨리 그와
          분리되어야 <span>해</span>.<br />네가 전에 직접 고생하며 구해준 재료
          덕분에 이제 거의 다 된 것 같아.<br />
          그 때가 <span>되</span>면, 내가 나로서 온전히 살아갈 수 있겠지.<br />
          마지막으로 하나 <span>더</span> 부탁을 하고 싶어.<br />
          저스티스와 날 분리시키기 위한 마지막 단계<span>야</span>.<br />챈트리
          안쪽에
        </p>
        <div class="content-letter-say"></div>
      </div>
      <p class="content-text">
        알 수 없는 내용이었다. <br />'저스티스'는 무엇이고, '분리'한다는 것은
        무엇이란 말인가. <br />분명한 것은 그것이 챈트리 안쪽, 즉 이번 재앙과
        밀접한 관련이 있다는 의미였다. <br />
        <br />손 끝으로 마지막 단어를 문질렀다. <br />'직접 말해.' <br />편지를
        쓰다가 누군가 끼어들어 첨언한 것 같이, 전혀 다른 글씨체로 쓰여진
        단어들이었다. <br />
        <br />그때, 뒤에서 무언가 무너져 내리는 소리가 귓가를 파고들었다.
        반사적으로 돌아보자 이쪽을 멀뚱히 바라보고 있는 고양이 한 마리가 보였다.
        <br />
        그러고보니 보관함에도 고양이가 그려져 있었다. <br />
        무언가 무관하지 않다는 생각이 들어, 서둘러 고양이를 따라 나섰다.
      </p>

      <div class="puzzle pb70">
        <!-- 이미지 배열을 순회하여 모든 이미지 표시 -->
        <div
          v-for="image in imageStack"
          :key="image.id"
          class="cat"
          :class="{ 'image-disabled': image.clicked }"
        >
          <img
            :src="image.src"
            @click="!image.clicked && showNextImage(image)"
          />
        </div>
        <div class="content-button mt90">
          <button @click="checkPath" v-if="showButton">
            마치게 되더라도 나는 해야 해
          </button>
        </div>
      </div>
    </div>
    <div class="bottomImage"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        `${process.env.BASE_URL}assets/04_anders_clinic/cat/cat_1.png`,
        `${process.env.BASE_URL}assets/04_anders_clinic/cat/cat_2.png`,
        `${process.env.BASE_URL}assets/04_anders_clinic/cat/cat_3.png`,
        `${process.env.BASE_URL}assets/04_anders_clinic/cat/cat_4.png`,
        `${process.env.BASE_URL}assets/04_anders_clinic/cat/cat_5.png`,
        `${process.env.BASE_URL}assets/04_anders_clinic/cat/cat_6.png`,
      ],
      maxImages: 6, // 최대 이미지 개수
      imageStack: [], // 화면에 표시되는 이미지 스택
      currentImageIndex: 0, // 현재 이미지의 인덱스
      showButton: false,
      love: localStorage.getItem("love"),
      route: localStorage.getItem("route"),
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
  },
  created() {
    if (this.images && this.images.length) {
      // 첫 번째 이미지를 초기로 화면에 표시
      const firstImageSrc = this.images[0];
      this.imageStack.push({ src: firstImageSrc, clicked: false });
    }
  },
  methods: {
    showNextImage(clickedImage) {
      if (!this.imageStack || !this.images) return;
      // 이미 클릭된 이미지는 처리하지 않습니다.
      if (clickedImage.clicked) return;

      // 클릭된 이미지를 비활성화
      clickedImage.clicked = true;

      // 이미지 스택이 최대 이미지 수를 초과하면 추가하지 않습니다.
      if (this.imageStack.length >= this.maxImages) {
        this.scrollToTop(); // 마지막 이미지를 클릭했을 때 맨 위로 스크롤
        return;
      }

      // 다음 이미지로 이동
      const nextImageIndex = this.imageStack.length % this.images.length;
      const nextImageSrc = this.images[nextImageIndex];

      // 이미지 스택에 다음 이미지 추가
      this.imageStack.push({ src: nextImageSrc, clicked: false });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
      const spans = this.$el.querySelectorAll("span");

      spans.forEach(function (span) {
        let parentP = span.parentElement; // span의 부모 요소(p 태그)를 가져옵니다.
        if (parentP.tagName === "P") {
          parentP.style.color = "rgba(0, 0, 0, 0)"; // p 태그의 내용을 투명하게 만듭니다.
        }
        span.style.color = "red";
        span.style.fontWeight = "bold";
      });
      this.imageStack = [];
      this.showButton = true;

      // puzzle의 높이를 0으로 설정
      const puzzleElement = this.$el.querySelector(".puzzle");
      if (puzzleElement) {
        puzzleElement.style.height = "0";
      }
      const contentLetterMy = this.$el.querySelector(".content-letter-my");
      if (contentLetterMy) {
        contentLetterMy.style.display = "none";
      }
    },
    checkPath() {
      this.$router.push({ name: "/CC-05-1" });
    },
  },
};
</script>

<style scoped>
.content-buttom {
  height: 500px;
}
.image-disabled img {
  pointer-events: none; /* 이미지 클릭 방지 */
  background: rgba(red, green, blue, alpha);
}
.puzzle {
  height: 3200px;
}
.cat {
  width: 900px;
  margin: 150px auto;
  display: flex;
  justify-content: center;
  position: relative;
}

.cat:nth-of-type(2) {
  right: -240px;
}
.cat:nth-of-type(3) {
  right: -100px;
}
.cat:nth-of-type(4) {
  right: 240px;
}
.cat:nth-of-type(5) {
  right: -240px;
}
</style>
