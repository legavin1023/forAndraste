<template>
  <div>
    <div class="topImage chantry"></div>
    <div class="content">
      <p class="content-text mt26">
        가장 먼저 재앙이 시작된 챈트리는 처참했다. <br />
        빗물에 미처 씻겨가지 못한 핏자국과 시신을 수습하면서 남겨진 유류품들이
        선명하게 새겨진 마법의 상흔에 뒤엉켜있었고, 중심지를 잃은 템플러들은 그
        위에 텐트나 열악한 가건물을 세우고 임무를 이어가고 있었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait templarA"></div>
            <div class="content-dialog-text">창조주께서 함께하시길.</div>
          </li>
          <li>
            <div class="content-dialog-portrait templarB"></div>
            <div class="content-dialog-text">도움에 감사드립니다.</div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        먼 길을 찾아온 그들을 맞이한 것은 지쳐보이는 템플러 두어명의 인사
        뿐이었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              새로운 기사단장은 어디에 있나?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait templarA"></div>
            <div class="content-dialog-text">
              부상 때문에 인근에서 치료 중이십니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">저런, 심각한 부상인가?</div>
          </li>
          <li>
            <div class="content-dialog-portrait templarA"></div>
            <div class="content-dialog-text">
              아닙니다. 오후 쯤에는 복귀하실겁니다.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        기사단장은 템플러에게 가볍게 묵례한 뒤, 함께 온 템플러들을 향해
        지시했다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              붉은 리륨 조사를 진행하는 템플러들은 나와 함께 ‘갤로우즈’에서
              집합한다. 아직 메이지 쪽 반란분자들이 남아있을 수도 있으니 조심들
              하도록.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        기사단장은 앤더스와 관련된 단독임무가 마무리되는 대로 갤로우즈로
        복귀하라고 지시한 후 챈트리에서 멀어졌다. <br />
        우선은, 불필요한 표적이 되지 않기 위해서 템플러의 신분을 잠시
        내려놓아야했다. 평상시라면 , 특히 메이지가 얽힌 임무에서라면, 템플러
        갑옷은 힘의 상징과도 같았지만, 커크월은 바로 그 갈등으로 삶이 망가진
        사람들이 머무는 곳이었다.
      </p>
      <div class="puzzle">
        <transition-group
          name="slide"
          class="container"
          :style="{ width: containerWidth + 'px' }"
        >
          <div v-for="tile in tiles" class="tile" :key="tile.index">
            <div
              :style="{
                backgroundImage: `url(${imgURL})`,
                width: `${tileWidth - 2}px`,
                height: `${tileHeight - 2}px`,
                backgroundSize: `${containerWidth}px`,
                backgroundPosition: getBackgroundPosition(tile.index),
                opacity: tile.position === openPosition ? 0 : 1,
              }"
              class="image"
              @click="move(tile.position)"
            >
              {{ showNumbers ? tile.index + 1 : null }}
              <br />
            </div>
          </div>
        </transition-group>
      </div>

      <div class="content-button mt90">
        <button @click="checkPath" v-if="showButton">
          중갑옷으로 갈아입는다.
        </button>
        <button @click="checkPath">중갑옷으로 갈아입는다.</button>
      </div>
    </div>

    <div class="bottomImage"></div>
  </div>
</template>
<!-- "/assets/04_anders_clinic/puzzle/puzzle.png -->
<script>
export default {
  created() {
    this.setup();
    this.correctOrder = [...this.tiles];
    this.shuffleTiles();
  },
  data() {
    return {
      tiles: [],
      correctOrder: [],
      imgURL: "/assets/02_chantry/solas.png",
      containerWidth: 500,
      cols: 3,
      rows: 3,
      openPosition: null,
      showNumbers: false, //숫자 보이게
      solving: false,
      isShuffled: false,
      showButton: false,
    };
  },
  computed: {
    tileWidth() {
      return this.containerWidth / this.cols;
    },
    tileHeight() {
      return this.containerWidth / this.rows;
    },
  },
  watch: {
    rows() {
      this.setup();
    },
    cols() {
      this.setup();
    },
  },
  methods: {
    checkPath() {
      this.$router.push({ path: "/CO-02-2" });
    },
    setup() {
      this.tiles = Array.from(
        { length: this.cols * this.rows },
        (_, index) => ({
          index,
          position: index,
        })
      );
      this.openPosition = this.cols * this.rows - 1;
    },
    move(position) {
      if (this.solving) return;

      const adjacentPositions = [
        position - 1,
        position + 1,
        position - this.cols,
        position + this.cols,
      ];
      if (adjacentPositions.includes(this.openPosition)) {
        const temp = this.tiles[position];
        this.tiles[position] = this.tiles[this.openPosition];
        this.tiles[this.openPosition] = temp;
        this.tiles[position].position = position;
        this.tiles[this.openPosition].position = this.openPosition;
        this.openPosition = position;

        if (this.isPuzzleSolved()) {
          this.showWinAlert();
        }
      }
    },
    positionToCoords(index) {
      return {
        x: index % this.cols,
        y: Math.floor(index / this.cols),
      };
    },
    getBackgroundPosition(index) {
      const coords = this.positionToCoords(index);
      return `${-coords.x * this.tileWidth}px ${-coords.y * this.tileHeight}px`;
    },
    shuffleTiles() {
      const iterations = 100;
      let counter = 0;
      const interval = setInterval(() => {
        const possibleSlides = this.getPossibleSlides(this.openPosition);
        this.move(
          possibleSlides[Math.floor(Math.random() * possibleSlides.length)]
        );
        counter++;
        if (counter >= iterations) {
          clearInterval(interval);
          this.solving = false;
          this.isShuffled = true;
        }
      }, 50);
    },
    getPossibleSlides(index) {
      const directions = [];
      if (index % this.cols !== 0) directions.push(index - 1);
      if (index % this.cols !== this.cols - 1) directions.push(index + 1);
      if (index >= this.cols) directions.push(index - this.cols);
      if (index < (this.rows - 1) * this.cols)
        directions.push(index + this.cols);
      return directions;
    },
    isPuzzleSolved() {
      return (
        this.isShuffled &&
        this.tiles.every(
          (tile, idx) => tile.index === this.correctOrder[idx].index
        )
      );
    },
    showWinAlert() {
      this.solving = false;

      setTimeout(() => {
        this.showButton = true; // 버튼을 보여줍니다.
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
.fadeIn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  display: flex;
  flex-wrap: wrap;
  font-size: 0;
  margin: -1px;
  background: #e2d2b4;
  border: 1px solid #25130f;
  // box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  margin: auto;
}

.tile {
  display: inline-block;
  // width: 150px;
  // height: 150px;
  padding: 1px;
  box-sizing: border-box;

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    height: 100%;
    background-size: cover;
    font-size: 2rem;
    color: white;
    filter: brightness(0.65);
    transition: filter 200ms;
    cursor: pointer;

    &:hover {
      filter: brightness(1);
    }
  }
}

.controls {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.controls > * + * {
  margin-top: 1em;
}

.slide-move {
  transition: 100ms linear;
}
</style>
