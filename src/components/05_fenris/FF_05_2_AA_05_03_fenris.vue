<template>
  <div>
    <div class="topImage fenris"></div>
    <div class="content">
      <p class="content-text">
        제대로 된 전투를 할 줄 모르는 사람 둘을 상대하는 건 간단한 일이었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait thiefA"></div>
            <div class="content-dialog-text">
              우린 그냥 와인 몇 병만 가져가려고 했어.... 별 것도 아니었다고....
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              묻는 말에 대답만 잘 해주면, 경비대에 넘기지 않을테니 잘 대답해.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        도둑들의 눈빛은 의심이 섞여있긴 했지만 절박해보였고, 곧 고개를 끄덕였다.
      </p>
      <div class="content-dialog">
        <ul class="btLineNo_bottom">
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">진료소에서 턴 물건이 뭐지?</div>
          </li>
          <li>
            <div class="content-dialog-portrait thiefB"></div>
            <div class="content-dialog-text">헉.</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">그리고 누구에게 팔아넘겼어?</div>
          </li>
          <li>
            <div class="content-dialog-portrait thiefA"></div>
            <div class="content-dialog-text">
              ...잘은 몰라. 우린 장물아비가 커크월에서 값나가는 물건이
              어디있는지 대강 말해주면, 그대로 털어가기만 해. 여기서도 그냥
              펜리스라는 사람의 저택에 가면 최고급 와인이-
            </div>
          </li>
        </ul>
      </div>
      <div v-if="love === 'FF'">
        <div class="content-dialog">
          <ul class="btLineNo_top">
            <li>
              <div class="content-dialog-portrait"></div>
              <div class="content-dialog-text">
                여기가 펜리스 저택이라고....
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait thiefA"></div>
              <div class="content-dialog-text">
                그리고 그.... 진료소는- 뭐 이것저것 마른 풀들이랑, 무슨
                끈적끈적한 액체가 담긴 병이나... 돌 같은 게 담긴 상자였어.
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait thiefB"></div>
              <div class="content-dialog-text">
                돌 상자? 뭐야 그건! 처음 듣는데! 역시 네가...!
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait"></div>
              <div class="content-dialog-text">
                액체는 무슨 색깔이었지? 돌은 보석같은 거였나?
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait thiefA"></div>
              <div class="content-dialog-text">
                병이 어두워서 무슨 색깔이었는지는 몰라! 돌도 상자째로 넘겼고....
              </div>
            </li>
          </ul>
        </div>
        <p class="content-text">
          장물아비. 진료소에서 없어진 물건을 조사하려면 그를 찾아야 했다.
        </p>
        <div class="content-dialog">
          <ul>
            <li>
              <div class="content-dialog-portrait"></div>
              <div class="content-dialog-text">
                장물아비는 어디서 찾을 수 있지?
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait thiefB"></div>
              <div class="content-dialog-text">
                다크타운에서.... 위치는 매번 바뀌어서 우리도 잘 몰라. 대강 서
                있으면 장물아비가 먼저 다가온다고. 그럼 거래하고 우리는 끝이야.
              </div>
            </li>
          </ul>
        </div>
        <p class="content-text">
          다 됐다는 신호로 손짓하자 도둑들은 허겁지겁 저택 밖으로 사라졌다.
          <br />
          그들이 두고 간 고급 와인을 챙겨 계단을 올랐다. <br />
          <br />
          펜리스라. 호크의 연인이었던 엘프의 이름이었다. <br />작은 단서라도
          있을까 싶어 저택을 조금 더 돌아다녀봤지만, 원래도 주인이 이곳에 오래
          머물지 않았는지 생활감이라곤 거의 찾아볼 수 없었다.<br /><br />다만,
          꺼진 지 오래라 차갑게 식은 벽난로 앞에 있는 테이블 위에서 어지럽게
          쓰인 글자들을 몇 개가 보였다.<br /><br />
          어린아이가 쓴 것처럼 어색하고 흔들리는 선으로 이어지는 활자들.
          처음으로 글씨를 배우는 사람처럼 여러번 반복해서 쓰여진 글자들이었다.
        </p>
        <div class="puzzle pt70 pb70">
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

            <div class="container dropBox">
              <div
                v-for="(value, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
                :key="index"
                class="drop"
                :value="value"
                @dragenter="dragEnter"
                @dragover.prevent
                @dragleave="dragLeave"
                @drop="drop"
                :style="{
                  width: originalImages.find((img) => img.value === value)
                    .width,
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
        <p class="content-text" :class="{ hide: !showText }">
          무언가 암호문인가해서 더 들여다보았지만, 정말 그 두 단어 뿐이었다.
          <br />
          모닥불 앞에 앉아 글씨를 주고 받는, 영문모를 모습이 떠올랐지만, 이번
          사건과 큰 연관이 있어보이지는 않았다. <br />
          <br />
          우선은 장물아비를 찾는 것만이 그 다음 단서로 이어지는 길이었다.
        </p>
        <div class="content-button mt70" :class="{ hide: !showText }">
          <button @click="checkPath">다크타운으로 향한다.</button>
        </div>
      </div>
      <div v-if="love === 'AA'">
        <div class="content-dialog">
          <ul class="btLineNo_top">
            <li>
              <div class="content-dialog-portrait"></div>
              <div class="content-dialog-text">펜리스?</div>
            </li>
            <li>
              <div class="content-dialog-portrait thiefA"></div>
              <div class="content-dialog-text">
                그래, 그 챔피언 호크의 동료였던 펜리스! 엘프 있잖아! 백발에
                문신이 엄청 많은!
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait"></div>
              <div class="content-dialog-text">
                호크란 말이지.... 그래서... 진료소에서는?
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait thiefA"></div>
              <div class="content-dialog-text">
                그.... 진료소는- 뭐 이것저것 마른 풀들이랑, 무슨 끈적끈적한
                액체가 담긴 병이나... 돌 같은 게 담긴 상자였어.
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait thiefB"></div>
              <div class="content-dialog-text">
                돌 상자? 뭐야 그건! 처음 듣는데! 역시 네가...!
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait"></div>
              <div class="content-dialog-text">
                액체는 무슨 색깔이었지? 돌은 보석같은 거였나?
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait thiefA"></div>
              <div class="content-dialog-text">
                병이 어두워서 무슨 색깔이었는지는 몰라! 돌도 상자째로 넘겼고....
              </div>
            </li>
          </ul>
        </div>
        <p class="content-text">
          장물아비. 진료소에서 없어진 물건을 조사하려면 그를 찾아야 했다.
        </p>
        <div class="content-dialog">
          <ul>
            <li>
              <div class="content-dialog-portrait"></div>
              <div class="content-dialog-text">
                장물아비는 어디서 찾을 수 있지?
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait thiefB"></div>
              <div class="content-dialog-text">
                다크타운에서.... 위치는 매번 바뀌어서 우리도 잘 몰라. 대강 서
                있으면 장물아비가 먼저 다가온다고. 그럼 거래하고 우리는 끝이야.
              </div>
            </li>
          </ul>
        </div>
        <p class="content-text">
          다 됐다는 신호로 손짓하자 도둑들은 허겁지겁 저택 밖으로 사라졌다.
          <br />
          그들이 두고 간 고급 와인을 챙겨 계단을 올랐다. <br />
          <br />펜리스라. 또다시 호크와 엮인 사람이었다. <br />
          작은 단서라도 있을까 싶어 저택을 조금 더 돌아다녀봤지만, 원래도 주인이
          이곳에 오래 머물지 않았는지 생활감이라곤 거의 찾아볼 수 없었다. <br />
          <br />
          엘프 구역이 따로 있는 커크월에서, 한 명의 엘프가 이렇게 커다란 저택을
          가질 수 있었던 데는 역시 호크의 힘이 연관되어 있지 않았을까, <br />
          그 이상의 추측은 어려웠던데다, 이번 사건과 관련이 있는지 여부도
          희미했다. <br />
          <br />우선은 장물아비를 찾는 것만이 그 다음 단서로 이어지는 길이었다.
        </p>
        <div class="content-button mt70">
          <button @click="checkPath">다크타운으로 향한다.</button>
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
      originalImages: [
        {
          src: `${process.env.BASE_URL}assets/05_fenris/puzzle/f.png`,
          value: 1,
          width: "86px",
          height: "86px",
        },
        {
          src: `${process.env.BASE_URL}assets/05_fenris/puzzle/e1.png`,
          value: 2,
          id: "e1",
          width: "86px",
          height: "86px",
        },

        {
          src: `${process.env.BASE_URL}assets/05_fenris/puzzle/n.png`,
          value: 3,
          width: "86px",
          height: "86px",
        },
        {
          src: `${process.env.BASE_URL}assets/05_fenris/puzzle/r.png`,
          value: 4,
          width: "86px",
          height: "86px",
        },
        {
          src: `${process.env.BASE_URL}assets/05_fenris/puzzle/i.png`,
          value: 5,
          width: "86px",
          height: "86px",
        },
        {
          src: `${process.env.BASE_URL}assets/05_fenris/puzzle/s.png`,
          value: 6,
          width: "86px",
          height: "86px",
        },
        {
          src: `${process.env.BASE_URL}assets/05_fenris/puzzle/h.png`,
          value: 7,
          width: "86px",
          height: "86px",
        },
        {
          src: `${process.env.BASE_URL}assets/05_fenris/puzzle/a.png`,
          value: 8,
          width: "86px",
          height: "86px",
        },
        {
          src: `${process.env.BASE_URL}assets/05_fenris/puzzle/w.png`,
          value: 9,
          width: "86px",
          height: "86px",
        },
        {
          src: `${process.env.BASE_URL}assets/05_fenris/puzzle/k.png`,
          value: 10,
          width: "86px",
          height: "86px",
        },
        {
          src: `${process.env.BASE_URL}assets/05_fenris/puzzle/e2.png`,
          value: 11,
          id: "e2",
          width: "86px",
          height: "86px",
        },
      ],
      images: [],
      dragItem: null,
      droppedImages: {},
      isIE: window.navigator.userAgent.includes("MSIE"),
      showText: false,
      love: localStorage.getItem("love"),
      route: localStorage.getItem("route"),
    };
  },
  created() {
    this.shuffleImages();
  },
  methods: {
    checkPath() {
      this.$router.push({ name: "/CC-06-1" });
    },
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

      if (this.droppedImages[drop.getAttribute("value")]) {
        return; // 이미 드랍된 이미지가 있는 경우 아무것도 하지 않습니다.
      }

      if (this.isValidDrop(image, drop)) {
        this.$set(this.droppedImages, drop.getAttribute("value"), image);
        this.checkCorrectDrop(drop, image);

        // 올바른 위치에 놓인 알파벳과 e를 제외한 알파벳만 사라지도록 수정합니다.
        this.images = this.images.filter(
          (img) =>
            img.id === "e1" ||
            img.id === "e2" ||
            (img.value !== image.value && img.id !== "e1" && img.id !== "e2")
        );

        // e 알파벳도 사라지도록 추가합니다.
        if (image.id === "e1" || image.id === "e2") {
          this.images = this.images.filter((img) => img.id !== image.id);
        }
      }
      this.checkCorrectFinalImage(); // 이 부분을 확인
    },
    isValidDrop(image, drop) {
      const dropValue = drop.getAttribute("value");

      if (
        (image.id === "e1" || image.id === "e2") &&
        ["2", "11"].includes(dropValue)
      ) {
        return true;
      }

      if (image.id !== "e1" && image.id !== "e2") {
        return dropValue === image.value.toString();
      }

      return false;
    },
    checkCorrectDrop(drop, image) {
      let isCorrect = drop.getAttribute("value") === image.value.toString();

      // For e1 and e2 special condition
      if (image.value === 2 || image.value === 11) {
        isCorrect = ["2", "11"].includes(drop.getAttribute("value"));
      }

      if (isCorrect) {
        drop.classList.remove("incorrect");
        drop.classList.add("correct");
      } else {
        drop.classList.remove("correct");
        drop.classList.add("incorrect");
      }
    },
    checkCorrectFinalImage() {
      const correctPositions = this.originalImages.reduce((acc, image) => {
        acc[image.value] = image;
        return acc;
      }, {});

      // 드롭된 이미지의 개수와 원래 이미지의 개수가 동일한지 확인
      if (
        Object.keys(this.droppedImages).length !== this.originalImages.length
      ) {
        return;
      }

      const isCompleted = Object.keys(this.droppedImages).every((key) => {
        const droppedImage = this.droppedImages[key];
        const correctImage = correctPositions[key];

        // e1, e2는 특별한 경우로 간주되어 다르게 처리합니다.
        if (droppedImage.value === 2 || droppedImage.value === 11) {
          const dropValueE1 = correctPositions[2].value;
          const dropValueE2 = correctPositions[11].value;

          // e1과 e2가 드롭된 값이 서로 반대로 드랍되었을 때도 올바르다고 판단합니다.
          return (
            (droppedImage.value === dropValueE1 ||
              droppedImage.value === dropValueE2) &&
            (key === "2" || key === "11")
          );
        }

        return correctImage && correctImage.value === droppedImage.value;
      });

      if (isCompleted) {
        this.showText = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: auto;
  width: 1000px;
  .inner {
    position: relative;
    // top: -50px;
  }
}
.dropBox {
  width: 540px;
  height: 200px;
  border-radius: 9px;
  border: 1px solid #ceaa95;
  background: #ece3d2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin: auto;
  .drop {
    width: 60px;
    height: 60px;
    border: 1px dashed #ad946e;
    position: relative;
  }
}
.drag {
  cursor: pointer;
}

.hide {
  opacity: 0;
  display: none;
}
</style>
