<template>
  <div>
    <div class="topImage anders"></div>
    <div class="content">
      <p class="content-text">
        고양이 모양이 돌아가면서 앞쪽 판이 달각, 하고 가볍게 맞물리며 <br />
        떨어져나왔다. <br />안쪽에는 검은 가죽으로 감싼 무언가 옷감같은 것과,
        각종 고양이 용품들, 그리고 양손 크기 만한 철제 상자가 고스란히 남아
        있었다.<br /><br />
        검은 가죽을 벗겨내자, 안쪽에는 익숙한 옷과 경갑이 모습을 드러냈다.<br /><br />
        회색감시자의 것이었다.<br /><br />이것을 왜 앤더스가 가지고 있었단
        말인가. 위장을 위해서인가? 다른 것도 아니고 회색감시자로 위장을 해서
        얻게 될 이익은 알 수가 없었다. 대재앙이 끝난지는 한참이었다. 이제와서
        회색감시자의 신분이 어떤 힘을 가진단 말인가.<br />
        게다가 마지막 대재앙은 미심쩍은 부분이 많아, 그것이 정말로
        대재앙이었냐며 온갖 음모론이 판을 쳤었다. 너무 빨리 마무리되었다든지, 그
        과정에서 희생된 사람이 정치적으로 연관되어 있었다든지....<br />
        회색감시자들은 역설적으로 재앙과 가까운 존재들이라 배척당하기
        일쑤였기에, 신분을 숨기는 경우도 많았다.<br />설마- 그렇기 때문인가?
        그가 정말로 회색감시자였기 때문에?
      </p>
      <p class="content-text">
        <br /><br />그 다음으로는 철제 상자를 열었다. <br />작은 결정 몇개와
        가루가 모습을 드러냈다.<br /><br />
        ‘셀라 페트래’<br /><br />
        배설물을...농축시킨 결정체였다.<br />
        탑에서 근무를 섰을 때 메이지들이 서로에 대한 욕으로 쓸 때를 제외하면
        활용처가 마땅치 않은 것으로 알고 있었다. 이걸 굳이 이렇게 꽁꽁 숨겨서
        놓을 이유가 떠오르지 않았다.<br /><br />영문을 알 수 없는 물건들의
        등장에, 안쪽을 더 살펴봤지만 딱히 별다른 것은 더 없었다.<br />
        허탈하게 고양이 판자를 제 자리에 돌려놓는데, 보관함 뒤쪽에 낀 종이
        테두리가 눈에 띄었다.<br /><br />
        조심스럽게 당기자, 종이 조각 몇 개가 틈 새로 떨어져내렸다.<br /><br />
        온전해 보이는 건 방금 잡아당긴 종이 한 장뿐이었는데, 그마저도 불에
        그을려 있었다. <br />마구잡이로 그어진 선과 표식들... 못 알아볼 수 없는
        상징들...<br />
        조악하게 그려낸, 챈트리 내부 지도였다.<br /><br />
        피가 차갑게 식는 기분이었다.<br />여러 개로 이어진 선은 바깥에서 챈트리
        중앙으로 향해 있었고, 빗금쳐진 부분들은 템플러들의 순찰 경로였다.
        바깥에서 안쪽으로 침입해서 무언가를 저지른 방식을 명확하게 증명하고
        있었다.<br /><br />
        서둘러 바닥에 떨어진 종이 조각들을 주워들었다. 이것들 역시 앤더스가 벌인
        일과 연관이 있을 것이었다.
      </p>
      <div class="puzzle">
        <div class="dnd-image-drag cf">
          <div class="container">
            <div class="inner gallery-list cf">
              <img
                v-for="(image, index) in images"
                :key="index"
                :src="image.src"
                class="drag"
                :value="image.value"
                :style="{
                  width: image.width,
                  height: image.height,
                }"
                draggable="true"
                @dragstart="dragStart($event, image)"
                @dragend="dragEnd"
              />
            </div>
          </div>
          <p class="puzzle_text">이 영역 위에서 맞추세요.</p>
          <div class="container dropBox">
            <div
              v-for="(value, index) in [1, 2, 3, 4, 5, 6]"
              :key="index"
              class="drop"
              :value="value"
              @dragenter="dragEnter"
              @dragover.prevent
              @dragleave="dragLeave"
              @drop="drop"
              :style="{
                width: originalImages.find((img) => img.value === value).width,
                height: originalImages.find((img) => img.value === value)
                  .height,
              }"
            >
              <img
                v-if="droppedImages[value]"
                :src="droppedImages[value].src"
                class="drag"
                :value="value"
                :style="{
                  width: originalImages.find((img) => img.value === value)
                    .width,
                  height: originalImages.find((img) => img.value === value)
                    .height,
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottomImage"></div>
  </div>
</template>
<!-- image: `${process.env.BASE_URL}assets/04_anders_clinic/puzzle/puzzle_1.png", -->
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      originalImages: [
        {
          src: `${process.env.BASE_URL}assets/04_anders_clinic/puzzle/puzzle_1.png`,
          value: 1,
          width: "222px",
          height: "192px",
        },
        {
          src: `${process.env.BASE_URL}assets/04_anders_clinic/puzzle/puzzle_2.png`,
          value: 2,
          width: "147px",
          height: "192px",
        },
        {
          src: `${process.env.BASE_URL}assets/04_anders_clinic/puzzle/puzzle_3.png`,
          value: 3,
          width: "240px",
          height: "202px",
        },
        {
          src: `${process.env.BASE_URL}assets/04_anders_clinic/puzzle/puzzle_4.png`,
          value: 4,
          width: "219px",
          height: "189px",
        },
        {
          src: `${process.env.BASE_URL}assets/04_anders_clinic/puzzle/puzzle_5.png`,
          value: 5,
          width: "135px",
          height: "177px",
        },
        {
          src: `${process.env.BASE_URL}assets/04_anders_clinic/puzzle/puzzle_6.png`,
          value: 6,
          width: "287px",
          height: "218px",
        },
      ],

      images: [],
      dragItem: null,
      droppedImages: {},
      message: "",
      isIE: window.navigator.userAgent.includes("MSIE"),
    };
  },
  computed: {
    ...mapGetters(["getLove"]),
  },
  created() {
    this.shuffleImages();
  },
  methods: {
    shuffleImages() {
      this.images = this.originalImages.sort(() => 0.5 - Math.random());
    },
    dragStart(event, image) {
      this.dragItem = image;
      event.dataTransfer.effectAllowed = "copy";
      event.dataTransfer.setData("text/plain", JSON.stringify(image));
    },
    dragEnter(event) {
      event.target.classList.add("drop-active");
    },
    dragOver(event) {
      event.dataTransfer.dropEffect = "copy";
    },
    dragLeave(event) {
      event.target.classList.remove("drop-active");
    },
    dragEnd(event) {
      event.target.classList.remove("drag-active");
    },
    drop(event) {
      this.$store.dispatch("terminateEffectAudio");
      this.$store.dispatch(
        "setEffectAudioSource",
        `${process.env.BASE_URL}assets/sound/anders_letter_puzzle.mp3`
      );
      this.$store.dispatch("playEffectAudio");
      const drop = event.target.closest(".drop");
      const image = JSON.parse(event.dataTransfer.getData("text/plain"));

      if (drop.getAttribute("value") === image.value.toString()) {
        this.$set(this.droppedImages, drop.getAttribute("value"), image);
        this.checkCorrectDrop(drop, image);
        this.checkCorrectFinalImage();

        // 드랍된 이미지를 images 배열에서 제거
        this.images = this.images.filter((img) => img.value !== image.value);
      }
    },
    checkCorrectDrop(drop, image) {
      if (drop.getAttribute("value") === image.value.toString()) {
        drop.classList.remove("incorrect");
        drop.classList.add("correct");
      } else {
        drop.classList.remove("correct");
        drop.classList.add("incorrect");
      }
    },
    checkCorrectFinalImage() {
      if (
        Object.keys(this.droppedImages).length === this.originalImages.length
      ) {
        let isPuzzleSolved = true;

        for (let img of this.originalImages) {
          if (
            !this.droppedImages[img.value] ||
            this.droppedImages[img.value].value !== img.value
          ) {
            isPuzzleSolved = false;
            break;
          }
        }

        if (isPuzzleSolved) {
          setTimeout(() => {
            this.$router.push({ name: "/AA-04-FF-04-5" });
          }, 2000);
        }
      }
    },
    reset() {
      this.droppedImages = {};
      this.shuffleImages();
      this.message = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.dropBox {
  width: 650px;
  height: 430px;
  margin: auto;
  border-radius: 20px;
  border: 2px dashed var(--dashed_line, #ad946e);
  background: #bfae8f;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  padding: 40px 0px 0px 40px;
  z-index: 1;

  .drop {
    // border: 1px solid red;
    position: relative;
  }
  .drop:nth-of-type(2) {
    left: -30px;
  }
  .drop:nth-of-type(3) {
    left: -70px;
  }
  .drop:nth-of-type(4) {
    left: 34px;
    top: -40px;
  }
  .drop:nth-of-type(5) {
    top: -40px;
    z-index: 10;
  }
  .drop:nth-of-type(6) {
    left: -74px;
    top: -60px;
  }
}
.gallery-list {
  img {
    z-index: 100;
  }
}
.puzzle {
  width: 900px;
  margin: auto;
}
.puzzle_text {
  color: #7c6f55;
  text-align: center;
  width: 400px;
  display: block;
  margin: auto;
  position: relative;
  top: 260px;
}
</style>
