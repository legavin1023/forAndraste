<template>
  <div>
    <div class="topImage anders"></div>
    <div class="content">
      <p class="content-text">
        고양이 모양의 장식이 재빠르게 회전하며 덜걱거렸다. <br />
        무언가 틀어지며 비틀리는 소리, 부러지는 소리가 안쪽에서 들렸다.<br /><br />
        뭔가 심상치 않은 움직임에 한 걸음 물러서자, 곧장 앞 쪽의 판이 투둑하고
        벌어지고, 연기가 피어오르기 시작했다. 틈새로 비치는 불꽃의 빛이 일반적인
        불이 아니라는 것을 알려주고 있었다.<br />무엇이 되었든 의도치 않은
        방향으로 일이 틀어진 건 분명했다. <br /><br />벌어진 판은 헐거워져 조금
        건드리자, 기다렸다는 듯이 앞으로 쏟아져 떨어졌다.<br />
        안쪽은 바짝 그을려 탄 재만 남아있었다. 비틀린 금속 조각 몇 개가 그 속에
        남아있긴 했지만 원래 형태를 알아볼 수는 없었다. <br /><br />허탈하게
        고양이 판자를 다시 원래대로 돌려놓아보려고 했지만 이미 갈라지고 타버린
        보관함이 그런다고 돌아올 것은 아니었다.<br />어떤 장치가 있었던 것인지
        알아보기라도 하려고 살펴보려고 했지만 그마저도 재가 되어버린 뒤였다.<br /><br />
        한숨을 쉬며 보관함의 다른 쪽을 살펴보다, 문득 보관함 뒤쪽에 낀 종이
        테두리가 눈에 띄었다.<br /><br />
        조심스럽게 당기자, 종이 조각 몇 개가 틈 새로 떨어져내렸다.<br /><br />
        온전해 보이는 건 방금 잡아당긴 종이 한 장뿐이었는데, 그마저도 불에
        그을려 있었다.<br />
        마구잡이로 그어진 선과 표식들... 못 알아볼 수 없는 상징들... 조악하게
        그려낸, 챈트리 내부 지도였다.<br /><br />
        피가 차갑게 식 는 기분이었다.<br />여러 개로 이어진 선은 바깥에서 챈트리
        중앙으로 향해 있었고, 빗금쳐진 부분들은 템플러들의 순찰 경로였다.
        바깥에서 안쪽으로 침입해서 무언가를 저지른 방식을 명확하게 증명하고
        있었다. <br /><br />서둘러 바닥에 떨어진 종이 조각들을 주워들었다.<br />
        이것들 역시 앤더스가 벌인 일과 연관이 있을 것이었다.
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
<!-- image: "/assets/04_anders_clinic/puzzle/puzzle_1.png", -->
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      originalImages: [
        {
          src: "/assets/04_anders_clinic/puzzle/puzzle_1.png",
          value: 1,
          width: "222px",
          height: "192px",
        },
        {
          src: "/assets/04_anders_clinic/puzzle/puzzle_2.png",
          value: 2,
          width: "147px",
          height: "192px",
        },
        {
          src: "/assets/04_anders_clinic/puzzle/puzzle_3.png",
          value: 3,
          width: "240px",
          height: "202px",
        },
        {
          src: "/assets/04_anders_clinic/puzzle/puzzle_4.png",
          value: 4,
          width: "219px",
          height: "189px",
        },
        {
          src: "/assets/04_anders_clinic/puzzle/puzzle_5.png",
          value: 5,
          width: "135px",
          height: "177px",
        },
        {
          src: "/assets/04_anders_clinic/puzzle/puzzle_6.png",
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
            this.$router.push({ path: "/AA-04-FF-04-5" });
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
