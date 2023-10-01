<template>
  <div>
    <div class="topImage hawke"></div>
    <div class="content">
      <p class="content-text">
        꽤나 번듯한 저택이었다. 호크의 저택에 노크를 하자, 배릭의 말처럼-
        피곤함과 경계심이 가득 들어찬 남성이 이쪽을 노려보며 문틈으로 모습을
        드러냈다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              안녕하십니까, 호크 가족 분 되십니까?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait gam"></div>
            <div class="content-dialog-text">또 무슨 일이요?</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              이번에 사건을 수습하러 온 템플러 조사관입니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait gam"></div>
            <div class="content-dialog-text">호크는 여기 없으니 돌아가쇼.</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              예. 알고 있습니다. 가족분 이야기를 좀 듣고 싶어서요.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait gam"></div>
            <div class="content-dialog-text">난 할 얘기 없으니까-</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              혹시, 안에 앤더스나, 메이지를 숨기고 있는 게 아니라면
              들여보내주시겠습니까?
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        배릭의 말대로, 템플러로서 할 수 있는 최고의 협박을 던지자, 감렌이 비명에
        가깝게 숨을 들이키며 문을 열었다.
      </p>
      <div v-if="love === 'AA'">
        <div class="content-dialog">
          <ul>
            <li>
              <div class="content-dialog-portrait gam"></div>
              <div class="content-dialog-text">
                끔찍한 소리 하지 마쇼. 보는 눈이 얼마나 없으면 어디서 그런 놈을
                데려오더니 같이 살다시피하고, 결국 이꼴이 나고.... 내가 그렇게
                마음에 안든다고 누누이 말했건만....
              </div>
            </li>
          </ul>
        </div>
        <p class="content-text">
          감렌은 한숨을 쉬며 계속해서 이쪽을 지켜봤다. 권위에 눌려 집에 들이긴
          했지만, 역시 템플러가 반가울리 없었다.
        </p>
        <div class="content-dialog">
          <ul>
            <li>
              <div class="content-dialog-portrait"></div>
              <div class="content-dialog-text">
                유일한 가족이시라고 들었습니다.
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait gam"></div>
              <div class="content-dialog-text">
                뭐, 그런 셈이지. 그 잘난 아버지는 일찍이 세상을 떴고, 리안드라-
                어머니는 뭔 미친 메이지한테 죽고, 형제들도 뭐....
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait"></div>
              <div class="content-dialog-text">
                호크의 어머니께서 메이지한테...?
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait gam"></div>
              <div class="content-dialog-text">
                그래. 내 누이였지. 그러고도 또 조카가 메이지를 집에 들이다니 내
                심정이 어땠을 지 상상이 가쇼?
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait"></div>
              <div class="content-dialog-text">
                그, 메이지 연인과 관련해서...호크가 남기고 간 건 없습니까?
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="love === 'FF'">
        <div class="content-dialog">
          <ul>
            <li>
              <div class="content-dialog-portrait gam"></div>
              <div class="content-dialog-text">
                끔찍한 소리 하지 마쇼. 갑자기 어디서 그런 놈을 친구라고 데리고
                다니고, 감싸돌고... 저가 데려와서 같이 살다시피 한 비쩍 마른
                엘프도 그렇게 메이지를 싫어하는데 귓등으로도 안듣더니 사단이
                났지....
              </div>
            </li>
          </ul>
        </div>
        <p class="content-text">
          감렌은 한숨을 쉬며 계속해서 이쪽을 지켜봤다. 권위에 눌려 집에 들이긴
          했지만, 역시 템플러가 반가울리 없었다.
        </p>
        <div class="content-dialog">
          <ul>
            <li>
              <div class="content-dialog-portrait"></div>
              <div class="content-dialog-text">
                유일한 가족이시라고 들었습니다.
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait gam"></div>
              <div class="content-dialog-text">
                뭐, 그런 셈이지. 그 잘난 아버지는 일찍이 세상을 떴고, 리안드라-
                어머니는 뭔 미친 메이지한테 죽고, 형제들도 뭐....
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait"></div>
              <div class="content-dialog-text">
                호크의 어머니께서 메이지한테...?
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait gam"></div>
              <div class="content-dialog-text">
                그래. 내 누이였지. 그런데 호크는 그러고도 정신 못차리고, 저
                친구들은 그런 메이지가 아니라느니 뭐라느니...
              </div>
            </li>
            <li>
              <div class="content-dialog-portrait"></div>
              <div class="content-dialog-text">
                그, 메이지 친구와 관련해서...호크가 남기고 간 건 없습니까?
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="content-dialog-image gam"></div>
      <div class="puzzle">
        <ul>
          <li>
            <span>호크</span>
            <p>호크는 배릭 오른쪽에 있었다. 호크는 중앙에 있지 않았다.</p>
          </li>
          <li>
            <span>앤더스</span>
            <p>
              앤더스는 호크 바로 옆에 있지 않았다. 앤더스는 중앙보다 오른쪽에
              있었다.
            </p>
          </li>
          <li>
            <span>펜리스</span>
            <p>펜리스는 아벨린 왼쪽에 있었다. 펜리스는 맨 앞에 있지 않았다.</p>
          </li>
          <li>
            <span>아벨린</span>
            <p>
              아벨린은 앤더스 바로 옆에 있었다. 아벨린은 맨 뒤에 있지 않았다.
            </p>
          </li>
          <li>
            <span>배릭</span>
            <p>배릭은 중앙보다 왼쪽에 있었다.</p>
          </li>
        </ul>
        <div class="image">
          <div class="image-list">
            <div
              v-for="image in shuffledImages"
              :key="image.id"
              @dragstart="startDrag($event, image.id)"
            >
              <img :src="image.src" :alt="image.id" draggable="true" />
            </div>
          </div>

          <div class="drop-areas">
            <div
              v-for="(order, index) in correctOrder"
              :key="order"
              @drop="
                onDrop(index, $event);
                stopDragging();
              "
              @dragover.prevent
              @dragenter="isDragging"
              @dragleave="stopDragging"
            >
              <img
                v-if="userOrder[index]"
                :src="getSrcById(userOrder[index])"
                :alt="order"
                draggable="true"
                @dragstart="startDragOut(index, $event, userOrder[index])"
              />
              <img
                v-else
                :src="
                  placeholders[index].dragging
                    ? placeholders[index].dragIn
                    : placeholders[index].src
                "
                :alt="order"
              />
            </div>
          </div>
          <div class="content-hint">
            <p>인물을 드래그하여 올바른 자리에 놓으십시오.</p>
          </div>
        </div>
      </div>
      <div class="content-button">
        <button @click="checkPath">
          감렌에게 호크에 대해 더 묻는다 (시도 {{ num }}/3) ▶
        </button>
      </div>
    </div>
    <div class="bottomImage"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholders: [
        {
          id: "front",
          src: `${process.env.BASE_URL}assets/08_hawke/back/drag_front.png`,
          dragIn: `${process.env.BASE_URL}assets/08_hawke/back/drag_in.png`,
        },
        {
          id: "drag",
          src: `${process.env.BASE_URL}assets/08_hawke/back/drag.png`,
          dragIn: `${process.env.BASE_URL}assets/08_hawke/back/drag_in.png`,
        },
        {
          id: "center",
          src: `${process.env.BASE_URL}assets/08_hawke/back/drag_center.png`,
          dragIn: `${process.env.BASE_URL}assets/08_hawke/back/drag_in.png`,
        },
        {
          id: "drage",
          src: `${process.env.BASE_URL}assets/08_hawke/back/drag.png`,
          dragIn: `${process.env.BASE_URL}assets/08_hawke/back/drag_in.png`,
        },
        {
          id: "back",
          src: `${process.env.BASE_URL}assets/08_hawke/back/drag_back.png`,
          dragIn: `${process.env.BASE_URL}assets/08_hawke/back/drag_in.png`,
        },
      ],
      dragging: false,
      images: [
        {
          id: "호크",
          src: `${process.env.BASE_URL}assets/08_hawke/puzzle/image_1.png`,
        },
        {
          id: "앤더스",
          src: `${process.env.BASE_URL}assets/08_hawke/puzzle/image_2.png`,
        },
        {
          id: "아벨린",
          src: `${process.env.BASE_URL}assets/08_hawke/puzzle/image_3.png`,
        },
        {
          id: "배릭",
          src: `${process.env.BASE_URL}assets/08_hawke/puzzle/image_4.png`,
        },
        {
          id: "펜리스",
          src: `${process.env.BASE_URL}assets/08_hawke/puzzle/image_5.png`,
        },
      ],
      shuffledImages: [],
      correctOrder: ["배릭", "호크", "펜리스", "아벨린", "앤더스"],
      userOrder: Array(5).fill(null),
      love: localStorage.getItem("love"),
      route: localStorage.getItem("route"),
      num: 3,
      gameOver: false,
      draggingFrom: -1, // 이미지를 드래그 시작할 때의 인덱스를 저장하는 변수입니다.
    };
  },
  computed: {
    placeholderImageSrc() {
      return this.dragging
        ? "path_to_drag_in_image.jpg"
        : "path_to_original_placeholder_image.jpg";
    },
  },
  mounted() {
    this.shuffleImages();
  },
  methods: {
    startDragOut(index, event, imageId) {
      // dragstart 이벤트 핸들러를 추가하여 drop-areas의 이미지를 드래그 시작할 때 실행될 로직을 작성합니다.
      event.dataTransfer.setData("imageId", imageId);
      this.draggingFrom = index;

      // 사용자 순서에서 해당 이미지를 제거하고 shuffledImages 배열에 다시 추가합니다.
      this.shuffledImages.push({
        id: imageId,
        src: this.getSrcById(imageId),
      });
      this.$set(this.userOrder, index, null); // Vue에서 배열의 특정 인덱스를 변경할 때는 $set을 사용해야 합니다.
    },
    checkPath() {
      this.num--; // 시도 횟수 감소

      if (
        JSON.stringify(this.userOrder) === JSON.stringify(this.correctOrder)
      ) {
        setTimeout(() => {
          let currentValue = localStorage.getItem("pv2");
          // 가져온 값을 숫자로 변환합니다.
          let numericValue = parseInt(currentValue, 10);
          // 1을 더합니다.
          numericValue += 1;
          // 결과를 다시 로컬 스토리지에 저장합니다.
          localStorage.setItem("pv2", numericValue.toString());
          this.$store.dispatch("playNextSound");
          this.$router.push({ name: "/AT-08-3-AM-08-4_FT-08-5-FM-08-6" });
        }, 500);
        // 여기서 게임을 리셋하거나 다른 로직을 실행할 수 있습니다.
      } else if (this.num === 0) {
        this.gameOver = true;
        setTimeout(() => {
          this.$router.push({ name: "/CF-08-7" });
        }, 500);
        // 게임 오버 처리 (예: 페이지 리로드 또는 다른 화면으로 전환)
      } else {
        this.resetGame(); // 게임 리셋 메서드 호출
        alert(`틀렸습니다. 다시 시도하세요. (시도 ${this.num}/3)`);
      }
    },
    shuffleImages() {
      this.shuffledImages = this.images.sort(() => Math.random() - 0.5);
    },
    startDrag(event, imageId) {
      event.dataTransfer.setData("imageId", imageId);
      this.draggingFrom = this.userOrder.indexOf(imageId); // 이미지의 원래 위치를 기억합니다.
    },
    onDrop(index, event) {
      this.$store.dispatch("terminateEffectAudio");
      this.$store.dispatch(
        "setEffectAudioSource",
        `${process.env.BASE_URL}assets/sound/cat_btn.mp3`
      );
      this.$store.dispatch("playEffectAudio");

      const imageId = event.dataTransfer.getData("imageId");

      // 드래그된 영역에 이미 이미지가 있는 경우
      if (this.draggingFrom !== -1) {
        // 드래그 시작 위치의 이미지와 드롭 영역의 이미지를 교환합니다.
        const tmpId = this.userOrder[this.draggingFrom];
        this.userOrder[this.draggingFrom] = this.userOrder[index];
        this.userOrder[index] = tmpId;
        this.draggingFrom = -1;
      } else {
        // 이미지 리스트에서 드래그를 시작한 경우
        if (this.userOrder[index]) {
          // 드롭 영역에 이미 이미지가 있는 경우, 해당 이미지를 shuffledImages 배열에 다시 추가합니다.
          this.shuffledImages.push({
            id: this.userOrder[index],
            src: this.getSrcById(this.userOrder[index]),
          });
        }

        // 드롭 영역에 드래그한 이미지를 설정하고 shuffledImages 배열에서 그 이미지를 제거합니다.
        this.userOrder[index] = imageId;
        this.shuffledImages = this.shuffledImages.filter(
          (img) => img.id !== imageId
        );
      }
    },
    resetGame() {
      this.shuffleImages(); // 이미지를 다시 셔플합니다.
      this.userOrder = []; // 사용자의 선택을 초기화합니다.
      // 필요한 다른 리셋 로직을 여기에 추가합니다.
    },
    getSrcById(imageId) {
      const image = this.images.find((img) => img.id === imageId);
      return image ? image.src : "";
    },
    isDragging() {
      this.dragging = true;
    },
    stopDragging() {
      this.dragging = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  width: 900px;
  margin: 70px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .image-list,
  .drop-areas {
    display: flex;
    justify-content: center;
  }
}

.puzzle {
  ul {
    width: 849px;
    height: 364px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: auto;
    li {
      display: flex;
      span {
        padding: 8px 39px;
        display: block;
        width: 90px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border-radius: 100px;
        background: #cfbea4;
      }
      p {
        font-size: 20px;
        line-height: 50px;
        margin-left: 21px;
      }
      &::after {
        content: " ";
        border-bottom: 1px solid #cfbea4;
        width: 849px;
        display: block;
        position: absolute;
        padding-bottom: 60px;
      }
    }
  }
}
</style>
