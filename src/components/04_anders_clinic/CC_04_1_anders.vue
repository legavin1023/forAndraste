<template>
  <div @mousemove="draggingImage" @mouseup="endDrag">
    <div class="topImage anders"></div>
    <div
      class="bottleBox"
      v-for="image in images"
      :key="image.id"
      :style="{
        top: image.top + 'vh',
        left: image.left + 'vw',
        position: 'absolute',
      }"
      @mousedown="startDrag($event, image)"
    >
      <img :src="image.src" />
    </div>
    <div class="content">
      <p class="content-text">
        앤더스의 진료소는 문도 잠겨있지 않았고 안쪽은 어수선하기 짝이 없었다.
        <br />
        널부러진 물건들과 훼손된 가구들은 도둑들이 뒤집어 놓은 잔해인지, 아니면
        급하게 짐을 챙겨 도망친 뒤의 흔적인지 명확하게 구분할 수 없었다. <br />
        <br />
        먼지인지 재인지 알아볼 수 없는 시커먼 가루들이 지푸라기니 털이니
        잡동사니에 얽혀 이곳저곳에 주인마냥 자리를 틀고 쌓여있었다. <br />
        어디서부터 시작해야할 지 막막할 정도로 어지럽게 흩어진 물건들이
        마구잡이로 발에 채였다. <br />
        <br />
        진료소 가장 안쪽의 책상에 쌓인 먼지를 손으로 쓸어내자, 둥그렇게 테두리를
        따라 그을린 자국이 두어개 모습을 드러냈다. 컵이라기엔 크고 냄비라기엔
        작았다. <br />
        <br />책상 밑에 자각거리며 밟히는 유리를 내려다보았다. 둥그렇고 작은
        유리병 입구를 주워 올렸다. 익숙한 형태였다. 템플러들이 리륨을 가열하여
        기체를 흡입할 때 쓰던 플라스크와 유사했다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">뭔가 실험을 했던 건가?</div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        책상의 위치로 보건데 아주 비밀스럽게 이루어진 실험이었다.<br />
        템플러를 폭발시킨 것과 관련이 있을까 <br />그렇다면 대체 무엇으로,
        어떻게 그 정도의 폭발을 일으킬 수 있었던 걸까.<br /><br />
        책상에서 눈을 돌려, 벽 한쪽을 가득 채운 작은 보관함 진열장으로 향했다.
        서랍들은 무작위로 열려있었고, 대부분은 비어있었다.<br />
        이름표가 붙어있거나 드문드문 재료들이 남아있는 경우도 있었지만, 모두
        평범한 약재처럼 보였다. <br /><br />딱 하나만 빼고.<br />맨 아래 쪽,
        손잡이 없이 고양이 그림이 양각 되어있는 서랍이 있었다, 언뜻봤을 때는
        보관함을 장식하는 부분으로밖에 보이지 않았지만, 분명히 그 안쪽에
        무언가가 들어있었다.<br /><br />고양이 그림을 밀고 문질러봤지만 열리지
        않았다. <br />작은 가방에 담긴 것 같은 모양의 고양이는 여전히 그
        자리에서 이쪽을 보고 있었고, 목에 걸린 이름표는 비어 있었다.
      </p>
      <div class="puzzle">
        <div class="game-container">
          <!-- <p>기회: {{ chances }}</p> -->

          <!-- <p>틀린 문자: {{ wrongGuesses.join(", ") }}</p> -->
          <div class="progress-bar">
            <div
              class="progress-bar-fill"
              :style="{ width: (chances / 5) * 100 + '%' }"
            ></div>
            <img
              x
              class="hangman-image cat"
              src="/assets/04_anders_clinic/cat.svg"
              alt="Hangman"
              :style="{
                width: '200px',
                left: `calc((${(chances / 5) * 100}%) - 150px)`,
              }"
            />
            <img
              class="hangman-image fish"
              src="/assets/04_anders_clinic/fish.svg"
              alt="Hangman"
              :style="{
                left: '0%',
              }"
            />
          </div>
        </div>
        <div class="buttonBox">
          <input
            v-model="guess"
            @keyup.enter="checkGuess"
            :disabled="chances === 0"
          />
          <button
            v-for="letter in alphabet"
            :key="letter"
            @click="makeGuess(letter)"
            :disabled="chances === 0"
          >
            {{ letter }}
          </button>
        </div>
        <div class="char_box">
          <div
            v-for="(char, index) in currentWord.split('')"
            :key="index"
            class="char-container"
            :class="{ 'correct-guess': correctGuesses.includes(index) }"
          >
            {{ char }}
          </div>
        </div>
      </div>
    </div>
    <div class="bottomImage"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      wordToGuess: "pouncealot",
      currentWord: "",
      guess: "",
      chances: 5,
      wrongGuesses: [],
      alphabet: "abcdefghijklmnopqrstuvwxyz".split(""),
      correctGuesses: [],
      dragging: null,
      currentX: 0,
      currentY: 0,
      images: [
        {
          id: 1,
          src: "/assets/04_anders_clinic/bottle/bottle_1.png",
          top: 0,
          left: 0,
        },
        {
          id: 2,
          src: "/assets/04_anders_clinic/bottle/bottle_2.png",
          top: 0,
          left: 0,
        },
        {
          id: 3,
          src: "/assets/04_anders_clinic/bottle/bottle_3.png",
          top: 0,
          left: 0,
        },
        {
          id: 4,
          src: "/assets/04_anders_clinic/bottle/bottle_4.png",
          top: 0,
          left: 0,
        },
        {
          id: 5,
          src: "/assets/04_anders_clinic/bottle/bottle_5.png",
          top: 0,
          left: 0,
        },
        {
          id: 6,
          src: "/assets/04_anders_clinic/bottle/bottle_6.png",
          top: 0,
          left: 0,
        },
        {
          id: 7,
          src: "/assets/04_anders_clinic/bottle/bottle_7.png",
          top: 0,
          left: 0,
        },
        {
          id: 8,
          src: "/assets/04_anders_clinic/bottle/bottle_8.png",
          top: 0,
          left: 0,
        },
        {
          id: 9,
          src: "/assets/04_anders_clinic/bottle/bottle_9.png",
          top: 0,
          left: 0,
        },
        {
          id: 10,
          src: "/assets/04_anders_clinic/bottle/bottle_10.png",
          top: 0,
          left: 0,
        },
      ],
    };
  },
  methods: {
    startDrag(event, image) {
      this.dragging = image;
      this.currentX = event.clientX;
      this.currentY = event.clientY;
    },
    draggingImage(event) {
      if (!this.dragging) return;

      const dx = event.clientX - this.currentX;
      const dy = event.clientY - this.currentY;
      this.dragging.left += (dx / window.innerWidth) * 100;
      this.dragging.top += (dy / window.innerHeight) * 100;
      this.currentX = event.clientX;
      this.currentY = event.clientY;
    },
    endDrag() {
      this.dragging = null;
    },
    randomizeImagePositions() {
      this.images = this.images.map((img) => ({
        ...img,
        top: Math.random() * 90 + 60, // 랜덤한 Y 위치
        left: Math.random() * 30 + 35, // 중앙에 더욱 집중적으로 랜덤한 X 위치
      }));
    },
    startGame() {
      this.currentWord = "_".repeat(this.wordToGuess.length);
      this.guess = "";
      this.chances = 5;
      this.wrongGuesses = [];
    },
    makeGuess(letter) {
      if (this.chances === 0) {
        return;
      }

      if (this.wordToGuess.includes(letter)) {
        this.updateCurrentWord(letter);
      } else {
        this.wrongGuesses.push(letter);
        this.chances--;
      }
      console.log("Chances left:", this.chances); // Add this line
      if (this.currentWord === this.wordToGuess) {
        this.$router.push({ path: "/CS-04-2" });
      } else if (this.chances === 0) {
        this.$router.push({ path: "/CF-04-3" });
      }
    },
    updateCurrentWord(letter) {
      for (let i = 0; i < this.wordToGuess.length; i++) {
        if (this.wordToGuess[i] === letter) {
          this.currentWord =
            this.currentWord.substring(0, i) +
            letter +
            this.currentWord.substring(i + 1);
          this.correctGuesses.push(i); // 추가된 코드
        }
      }
    },
  },
  created() {
    this.startGame();
    this.randomizeImagePositions(); // 초기에 이미지 위치 랜덤화
  },
};
</script>

<style lang="scss" scoped>
.game-container {
  width: 456.279px;
  position: relative;
  margin: auto;
  top: 80px;
}

.hangman-image {
  position: absolute;
  width: 50px;
  height: 100px;
  img {
  }
}
.hidden-img {
  display: none;
}

img {
  position: absolute;

  cursor: pointer;
}
.char_box {
  display: flex;
  justify-content: center;
  .char-container {
    border-radius: 8px;
    border: 1px solid #837676;
    background: rgba(255, 255, 255, 0.15);
    margin: 2px;
    width: 40px;
    height: 40px;
    position: relative;
    top: 120px;
    font-family: "Pretendard";
    text-align: center;
    line-height: 40px;
    &.correct-guess {
      background: #c4beb2;
    }
  }
}
.puzzle {
  width: 910px;
  height: 804px;
  margin: auto;
  background: url("@/assets/04_anders_clinic/puzzleBox.png") no-repeat;
  background-position: center;
  padding-top: 300px;

  .fish {
    top: -60px;
    width: 70px !important;
    height: auto;
  }
  .cat {
    position: relative;
    top: -120px;
  }
  .progress-bar {
    position: relative;
    top: 400px;
    width: 456.279px;
    height: 7px;
    margin: auto;
    border-radius: 3.5px;
    background: #655d5d;
    &-fill {
      width: 456.279px;
      height: 7px;
      background: #c4beb2;
      z-index: 300;
    }
  }

  .buttonBox {
    width: 910px;
    margin: auto;
    position: relative;
    top: -300px;
    input {
      display: none;
    }
    button {
      border-radius: 8px;
      border: 1px solid #847575;
      background: #f0e7d7;
      margin: 5px;
      width: 60px;
      height: 60px;
      font-family: "Pretendard";
    }
  }
}
</style>
