<template>
  <div>
    <div class="topImage hanged"></div>
    <div class="content">
      <div class="content-dialog mt26">
        <ul>
          <li>
            <div class="content-dialog-portrait aveline"></div>
            <div class="content-dialog-text">무슨 소란이죠?</div>
          </li>
        </ul>
      </div>
      <div class="content-dialog-image aveline"></div>
      <p class="content-text">
        곤란해진 상황 속에 단호한 목소리가 파고들었다. 경비대 복장의 한 여성이
        이쪽을 향해 걸어오고 있었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait manA"></div>
            <div class="content-dialog-text">
              아니- 여기 이 템플러가 우리 챔피언을 잡으러 왔다잖아! 얼른
              잡아가든가 해! 호크는 당신 친구잖아!
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait aveline"></div>
            <div class="content-dialog-text">
              무슨 소리인지 모르겠군요. 이 분은 경비대 소속입니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait manB"></div>
            <div class="content-dialog-text">응? 뭐야, 템플러가 아니었어?</div>
          </li>
          <li>
            <div class="content-dialog-portrait aveline"></div>
            <div class="content-dialog-text">
              저기 계신 템플러가 커크월 치안 문제로 다쳤으니 상태를 살펴보라고
              했을 뿐입니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait manA"></div>
            <div class="content-dialog-text">그럼 호크 얘기는 뭐야?</div>
          </li>
          <li>
            <div class="content-dialog-portrait aveline"></div>
            <div class="content-dialog-text">
              커크월에 온 지 얼마 안 된 친구라- 궁금한게 좀 많았나 보네요.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        금방이라도 끓어오를 듯이 과열됐던 분위기가 다시 싱겁게 가라앉고, 여성은
        부상당한 경비대원들이 모여있는 쪽으로 자리를 옮기자고 손짓했다.
      </p>
      <div class="content-dialog">
        <ul class="btLineNo_bottom">
          <li>
            <div class="content-dialog-portrait aveline"></div>
            <div class="content-dialog-text">
              소개가 늦었네요. 커크월의 경비대장, 아벨린 발렌입니다. 오늘
              도착하신 템플러시죠?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">예. 도와주셔서 감사합니다</div>
          </li>
          <li>
            <div class="content-dialog-portrait aveline"></div>
            <div class="content-dialog-text">호크를 잡으러 오셨다고요?</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              예? 아뇨. 아닙니다. 저는 앤더스의 행방을 쫓고 있습니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait aveline"></div>
            <div class="content-dialog-text">
              앤더스에 대해서 사람들을 통해 알아낼 수 있는 건 없을 거예요.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              그... 방금 호크랑 친한 친구이셨다고....
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait aveline"></div>
            <div class="content-dialog-text">그게 무슨 상관이죠?</div>
          </li>
        </ul>
        <ul v-if="love === 'AA'" class="btLineNo_top btLineNo_bottom">
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              호크랑 앤더스가 연인이었던 걸로 알고 있습니다. 그리고
              경비대장으로서도 그 사태에 함께 하셨을 것 같은데-
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait aveline"></div>
            <div class="content-dialog-text">
              취조라도 당하는 것 같군요. 제가 친구였다고 해서, 호크의 연애사정을
              속속들이 모두 알고 있을 이유는 없습니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              무례하게 들렸다면 죄송합니다. 하지만 앤더스가-
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait aveline"></div>
            <div class="content-dialog-text">
              당신 말대로 호크는 사랑하는 사람에게 가장 최악의 형태로 배신당한
              친구인데, 그에 대해서, 심지어 그 친구를 의심하는 사람에게 제가
              함부로 말할 거라고 생각하나요?
            </div>
          </li>
        </ul>
        <ul v-if="love === 'FF'" class="btLineNo_top btLineNo_bottom">
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              호크랑 앤더스가 친구였던 걸로 알고 있습니다. 그리고
              경비대장으로서도 그 사태에 함께 하셨을 것 같은데-
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait aveline"></div>
            <div class="content-dialog-text">
              취조라도 당하는 것 같군요. 친구라고해서 모든 사정을 속속들이 알고
              있을 이유는 없습니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              무례하게 들렸다면 죄송합니다. 하지만 앤더스가-
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait aveline"></div>
            <div class="content-dialog-text">
              호크는 모두가, 심지어 자신이 사랑한 사람이 가장 반대하더라도
              친구로서 앤더스를 곁에 두었던 사람입니다. 그러다가 가장 최악의
              형태로 배신당했고요. 그게 전부입니다.
            </div>
          </li>
        </ul>
        <ul class="btLineNo_top">
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">.......</div>
          </li>
          <li>
            <div class="content-dialog-portrait aveline"></div>
            <div class="content-dialog-text">
              이곳의 사람들에게 그날은 악몽입니다. 섣불리 묻고 다니지 마세요. 정
              궁금하시면 앤더스의 진료소로 가시는 게 낫겠습니다. 최근에 도둑이
              들어 남은 게 있을 지는 모르겠지만....
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">예. 감사합니다.</div>
          </li>
          <li>
            <div class="content-dialog-portrait aveline"></div>
            <div class="content-dialog-text">
              과거 템플러와의 인연이 있어 베푸는 친절일 뿐입니다. 이 이상
              경비대와 마주칠 일이 없었으면 좋겠군요.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        아벨린이 그 이상의 질문을 받지 않겠다는 태도를 명확히 한 채 자리를 떴고,
        주변 사람들의 시선이 슬금슬금 이쪽으로 모여왔다. <br />
        앤더스의 진료소- 그곳에서 시작해야할 것 같다.
      </p>
      <div class="puzzle slide">
        <div class="container">
          <div class="carousel" :style="carouselStyle">
            <div
              v-for="(slideSrc, slideIndex) in slides"
              :key="slideIndex"
              :class="['item', 'slide-' + (slideIndex + 1)]"
              :style="getItemStyle(slideIndex + 1)"
            >
              <img :src="slideSrc" alt="Slide Image" />
              <button v-if="slideIndex === 4" @click="checkPath"></button>
            </div>
          </div>
        </div>
        <div class="slide_btn">
          <button class="next" @click="rotate('n')">Next</button>
          <button class="prev" @click="rotate('p')">Prev</button>
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
      slides: (() => {
        let tempSlides = [];
        for (let i = 1; i <= 6; i++) {
          tempSlides.push(
            `/assets/03_hanged_man/krikwall/Map_-_Kirkwall_0${i}.png`
          );
        }
        return tempSlides;
      })(),
      currdeg: 0,
      love: localStorage.getItem("love"),
      route: localStorage.getItem("route"),
    };
  },
  computed: {
    carouselStyle() {
      return {
        "-webkit-transform": "rotateY(" + this.currdeg + "deg)",
        "-moz-transform": "rotateY(" + this.currdeg + "deg)",
        "-o-transform": "rotateY(" + this.currdeg + "deg)",
        transform: "rotateY(" + this.currdeg + "deg)",
      };
    },
  },

  methods: {
    checkPath() {
      this.$store.dispatch("terminateAudio");
      this.$store.dispatch("setAudioSource", "/assets/sound/끽소리.wav");
      this.$store.dispatch("playAudio");

      this.$router.push({ name: "/CC-04-1" });
    },
    rotate(direction) {
      if (direction === "n") {
        this.currdeg -= 60;
      } else if (direction === "p") {
        this.currdeg += 60;
      }
    },
    getItemStyle(index) {
      return {
        transform: `rotateY(${(index - 1) * 60}deg) translateZ(250px)`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.puzzle {
  cursor: pointer;
}
.prev {
}
.next {
}
.container {
  margin: 0 auto;
  width: 260px;
  height: 200px;
  position: relative;
  perspective: 1000px;
  padding-top: 50px;
  margin-bottom: 140px;
  .carousel {
    height: 100%;
    width: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 1s;
    button {
      position: absolute;
      top: 70px;
      right: 0px;
      width: 20px;
      height: 20px;
    }
    .item {
      display: block;
      position: absolute;
      background: #000;
      width: 260px;
      height: 200px;
      opacity: 0.9;
      border-radius: 10px;
      &:hover {
        opacity: 1;
      }
      img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
    }
  }
}
.slide_btn {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -50px;
  width: 130px;
  margin: auto;
  button {
    width: 52px;
    height: 52px;
    display: block;
    text-indent: -99999px;
  }
  .next {
    background: url("@/assets/03_hanged_man/arrow/arrow_next.png");
  }
  .prev {
    background: url("@/assets/03_hanged_man/arrow/arrow_prev.png");
  }
}
</style>
