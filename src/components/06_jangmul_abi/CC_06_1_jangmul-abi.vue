<template>
  <div>
    <div class="topImage abi"></div>
    <div class="content">
      <p class="content-text">
        다크타운에서 대강 서 있으면 장물아비가 먼저 다가온다. 유일한 단서는
        그것뿐이었다. <br />
        <br />
        다크타운은 숨쉬기조차 나쁠 정도로 열악했다. 탁하고 매캐한 공기가 낮게
        깔려 있었고, 어두컴컴한 조명에 눈 앞이 흐려졌다. <br />이곳의 사람들의
        표정이 어두운 것은 이번 재앙 때문만은 아닌 것 같았다. <br />그런 곳에서
        고급 와인을 덜렁 들고 서 있자니, 우스꽝스러운 기분이었다. <br />
        <br />
        문득, 콧속을 파고드는 악취가 강해져 고개를 돌리자, 하수도에서 오수가
        쏟아지는 것이 보였다. <br />
        그때, 반대편에서 누군가 팔을 가볍게 톡톡 치며 시선을 끌었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait abi"></div>
            <div class="content-dialog-text">
              처음보는 얼굴인데, 일을 이어 받았나?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              ......고급와인을 취급한다는 얘기를 들었는데.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait thiefA"></div>
            <div class="content-dialog-text">
              그럼그럼. 하이타운 대저택 지하에 숨어있던 보물인데, 이런건 내가 딱
              알아보지.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        장물아비는 능구렁이 같은 손을 뻗어 고급 와인을 가져가고, 준비해온듯
        깔끔하게 묶인 꽤나 묵직한 돈주머니를 건네주었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait abi"></div>
            <div class="content-dialog-text">
              갖고 있는 다른 물건들을 좀 볼 수 있을까?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">응?</div>
          </li>
          <li>
            <div class="content-dialog-portrait thiefA"></div>
            <div class="content-dialog-text">
              당신이 취급하는 물건 중에서, 내가 찾는 게 있을 것 같은데.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        그 순간, 능글맞은 미소를 띄우고 있던 장물아비의 표정이 순식간에
        내려앉았다. <br />
        그러더니 재빠르게 와인을 안고 도망치기 시작했다.<br />
        황급하게 손을 뻗었지만, 도주에 능숙한 그 몸짓은 이전에 저택에서 상대했던
        좀도둑들의 것과는 달랐다.
      </p>
      <div class="puzzle">
        <div class="btnBox">
          <div class="slide">
            <p>
              score <span>{{ successCount }}</span>
            </p>
            <div class="bar">
              <div
                class="adjustableDiv"
                :style="{ width: computeWidthPercentage() + '%' }"
              ></div>
            </div>
          </div>

          <button @click="startGame" v-if="!gameInProgress" class="gameStart">
            start
          </button>
        </div>
        <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="grid-row">
          <div
            v-for="(cell, colIndex) in row"
            :key="colIndex"
            class="grid-cell"
            :class="{ transparent: cell.transparent }"
            @click="cellClicked(rowIndex, colIndex)"
          >
            <img
              v-if="cell.active"
              :src="cell.coinImage"
              alt="Click Image"
              :style="{ opacity: cell.opacity }"
            />
            <img
              v-else
              :src="cell.clickImage"
              alt="Coin Image"
              :style="{ opacity: cell.opacity }"
            />
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
      grid: [],
      successCount: 0,
      timer: null,
      duration: 800, // 원이 사라지는 시간 (밀리초)
      gameInProgress: false, // 게임 진행 여부를 나타내는 변수 추가
      maxClicks: 20, // 최대 클릭 횟수
      clickCount: 0, // 클릭 횟수를 추적하는 변수 추가
      maxBlinks: 30, // 최대 깜빡이는 횟수
      blinkCount: 0, // 현재 깜빡이는 횟수
      click: [
        "assets/06_jangmul_abi/clickPuzzle/click_1.png",
        "assets/06_jangmul_abi/clickPuzzle/click_2.png",
        "assets/06_jangmul_abi/clickPuzzle/click_3.png",
        "assets/06_jangmul_abi/clickPuzzle/click_4.png",
        "assets/06_jangmul_abi/clickPuzzle/click_5.png",
        "assets/06_jangmul_abi/clickPuzzle/click_6.png",
      ],
      coin: [
        "assets/06_jangmul_abi/clickPuzzle/coin_1.png",
        "assets/06_jangmul_abi/clickPuzzle/coin_2.png",
        "assets/06_jangmul_abi/clickPuzzle/coin_3.png",
        "assets/06_jangmul_abi/clickPuzzle/coin_4.png",
        "assets/06_jangmul_abi/clickPuzzle/coin_5.png",
        "assets/06_jangmul_abi/clickPuzzle/coin_6.png",
      ],
      gridLayout: [],
    };
  },
  watch: {
    blinkCount(newVal) {
      if (newVal < 0) {
        this.blinkCount = 0; // blinkCount가 0보다 작아지지 않도록 합니다.
      }
    },
  },
  methods: {
    computeWidthPercentage() {
      return 100 - (this.blinkCount / 30) * 100;
    },
    createRandomizedGrid() {
      // 각 숫자가 6번씩 나타나게끔 초기 배열을 생성
      const initialArray = [];
      for (let i = 1; i <= 6; i++) {
        for (let j = 0; j < 6; j++) {
          initialArray.push(i);
        }
      }

      // 배열을 랜덤하게 섞는 함수
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; // swap elements
        }
      }

      shuffleArray(initialArray); // 배열을 섞어준다.

      // 6x6 그리드를 생성하여 결과를 반환한다.
      const grid = [];
      while (initialArray.length) {
        grid.push(initialArray.splice(0, 6));
      }
      return grid;
    },
    initializeGrid() {
      this.grid = [];
      for (let i = 0; i < 6; i++) {
        const row = [];
        for (let j = 0; j < 6; j++) {
          const imageIndex = this.gridLayout[i][j];
          const coinImage = `assets/06_jangmul_abi/clickPuzzle/coin_${imageIndex}.png`;
          const clickImage = `assets/06_jangmul_abi/clickPuzzle/click_${imageIndex}.png`;
          row.push({
            active: false,
            opacity: 1, // 추가: 초기 투명도는 1 (전체 투명이 아님)
            coinImage: coinImage,
            clickImage: clickImage,
          });
        }
        this.grid.push(row);
      }
    },
    startGame() {
      this.grid.forEach((row) => {
        row.forEach((cell) => {
          cell.active = false;
          // 이미지 URL은 초기화하지 않습니다.
        });
      });
      this.successCount = 0;
      this.gameInProgress = true;
      this.clickCount = 0;
      this.blinkCount = 0;
      this.playGame();
    },
    playGame() {
      // 활성화된 셀이 있는지 확인
      const activeCells = this.grid.flat().filter((cell) => cell.active);
      if (activeCells.length > 0) {
        // 이미 활성화된 셀이 있으면 함수를 종료
        return;
      }

      let randomRow, randomCol, cell;
      do {
        randomRow = Math.floor(Math.random() * 6);
        randomCol = Math.floor(Math.random() * 6);
        cell = this.grid[randomRow][randomCol];
      } while (cell.active || cell.opacity === 0);

      if (!cell.coinImage) {
        cell.coinImage = this.getRandomCoinImage();
      }

      cell.active = true;
      this.blinkCount++;

      this.timer = setTimeout(() => {
        cell.active = false;

        if (this.gameInProgress) {
          this.playGame();
        }
      }, this.duration);

      // 클릭되지 않은 경우에도 타이머를 설정하여 이미지를 사라지게 함
      setTimeout(() => {
        if (!cell.clicked) {
          cell.opacity = 0;
          // 이미지가 사라질 때 해당 이미지를 제외한 다른 이미지를 선택
          const otherCells = this.grid
            .flat()
            .filter((otherCell) => otherCell !== cell);
          const randomOtherCell =
            otherCells[Math.floor(Math.random() * otherCells.length)];
          randomOtherCell.coinImage = this.getRandomCoinImage();
        }
      }, this.duration);

      if (this.blinkCount >= 30) {
        this.gameInProgress = false;
        clearTimeout(this.timer);
        setTimeout(() => {
          this.$router.push({ path: "/CF-06-3-jangmul-abi" });
        }, 2000);
        return;
      }
    },

    cellClicked(rowIndex, colIndex) {
      const cell = this.grid[rowIndex][colIndex];
      if (this.gameInProgress && cell.active) {
        // 이미지가 클릭되었을 때만 처리
        clearTimeout(this.timer);
        cell.active = false;
        cell.opacity = 0;
        cell.clicked = true; // 이미지가 클릭되었음을 표시
        this.successCount++;
        this.clickCount++;

        if (this.successCount === 20) {
          this.gameInProgress = false;
          clearTimeout(this.timer);
          setTimeout(() => {
            this.$router.push({ path: "/CS-06-2-jangmul-abi" });
          }, 2000);
          return;
        }

        this.playGame();
      }
    },
    getRandomCoinImage() {
      const randomIndex = Math.floor(Math.random() * this.coin.length);
      return this.coin[randomIndex];
    },
  },
  mounted() {
    this.gridLayout = this.createRandomizedGrid(); // 여기서 gridLayout를 초기화
    this.initializeGrid();
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
.grid-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-cell {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}

.active {
  opacity: 1;
}
.transparent {
  opacity: 0;
}
.btnBox {
  width: 800px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  .gameStart {
    border-radius: 100px;
    border: 1px solid #6c5d5d;
    display: inline-flex;
    padding: 16px 60px;
    &:hover {
      padding: 16px 60px;
      border-radius: 100px;
      background: #6c5d5d;
      color: #fff;
    }
  }
  p {
    font-size: 18px;
    span {
      margin-left: 20px;
      font-size: 32px;
    }
  }
}
.slide {
  display: flex;
  justify-content: center;
  align-items: center;

  .bar {
    width: 441px;
    height: 7px;
    flex-shrink: 0;
    border-radius: 11.5px;
    background: #c2b39a;
    position: relative;
    left: 40px;
    .adjustableDiv {
      width: 198.632px;
      height: 7px;
      flex-shrink: 0;
      border-radius: 11.5px;
      background: #6c5d5d;
      transition: width 0.5s ease-in-out; // 너비가 바뀔 때 부드럽게 애니메이션 효과 적용
    }
  }
}
</style>
