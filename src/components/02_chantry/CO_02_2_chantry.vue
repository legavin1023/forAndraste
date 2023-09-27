<template>
  <div>
    <div class="topImage chantry"></div>
    <div class="content">
      <p class="content-text mt26">
        평범해 보이는 중갑옷에게 자리를 내어준 템플러 갑옷은 창고라고 부르기에도
        민망한 천막에 보관하게 되었다. <br />천막을 나서자 아까 인사를 건넸던
        템플러가 알아보고 먼저 인사를 건넸다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait templarB"></div>
            <div class="content-dialog-text">
              수고가 많으십니다. 도움이 필요하신 부분이 있으면 언제든지
              말씀해주십시오.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              혹시 호크나 앤더스에 대해 잘 아십니까?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait templarB"></div>
            <div class="content-dialog-text">
              앤더스는... 직접 본 적은 없습니다. 호크도 이번 사태 때 얼핏 본게
              다 입니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              음, 그럼 혹시 둘에 대해 더 자세히 알고 있는 분이 있으십니까?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait templarB"></div>
            <div class="content-dialog-text">
              기사단장님이라면 알고 계실 겁니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              아까 말씀하셨던, 치료 중이신...?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait templarB"></div>
            <div class="content-dialog-text">
              네. 컬렌 러더포드 사령관님입니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">지금 어디에 계십니까?</div>
          </li>
          <li>
            <div class="content-dialog-portrait templarB"></div>
            <div class="content-dialog-text">
              행드맨에 계실겁니다. 원래는 주점인데, 상황이 이렇다보니 부상자
              수용도 하고 있습니다.
            </div>
          </li>
        </ul>
      </div>
      <div class="puzzle">
        <div class="puzzle-image">
          <div class="map"></div>
          <div class="compass"></div>
        </div>

        <table class="puzzle-table">
          <thead>
            <tr>
              <th></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>4</td>
              <td>1</td>
              <td>4</td>
              <td>8</td>
              <td>7</td>
              <td>8</td>
              <td>7</td>
            </tr>
            <tr>
              <td>2</td>
              <td>4</td>
              <td>8</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>6</td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>1</td>
              <td>2</td>
              <td>6</td>
              <td>4</td>
              <td>2</td>
              <td>4</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>4</td>
              <td>4</td>
              <td>3</td>
              <td>4</td>
              <td>7</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>1</td>
            </tr>
            <tr>
              <td>5</td>
              <td>8</td>
              <td>4</td>
              <td>2</td>
              <td>5</td>
              <td>8</td>
              <td>6</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>6</td>
              <td>7</td>
              <td>6</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>9</td>
              <td>7</td>
              <td>2</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>1</td>
              <td>1</td>
              <td>5</td>
              <td>2</td>
              <td>7</td>
              <td>0</td>
              <td>5</td>
            </tr>
            <tr>
              <td>8</td>
              <td>7</td>
              <td>2</td>
              <td>1</td>
              <td>1</td>
              <td>4</td>
              <td>2</td>
              <td>5</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="content-buttonBox">
        <input
          type="text"
          placeholder="여기에 입력해주세요."
          v-model="inputValue"
          @keyup.enter="checkInputValue"
          :class="{ 'shake-animation': shakeIt }"
        />
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
      shakeIt: false, // 흔들림 애니메이션 활성화 플래그
    };
  },
  methods: {
    checkInputValue() {
      if (this.inputValue === "12142715") {
        this.$store.dispatch("terminateAudio");

        this.$store.dispatch(
          "setAudioSource",
          `${process.env.BASE_URL}assets/sound/떠드는 소리.flac`
        );
        this.$store.dispatch("playAudio");
        setTimeout(() => {
          this.$store.dispatch("fadeOutAudio");
        }, 10000);
        this.$router.push({ name: "/TT-03-1-MM-03-2" });
      } else {
        this.shakeIt = true;
        setTimeout(() => {
          this.shakeIt = false;
        }, 600);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.puzzle {
  &-image {
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  .map {
    width: 473px;
    height: 347px;
    background: url("@/assets/02_chantry/map.png") no-repeat;
    background-position: center;
    background-color: #f0e7d7;
    padding: 20px;
  }
  .compass {
    width: 357px;
    height: 360px;
    background: url("@/assets/02_chantry/compass.png") no-repeat;
    background-position: center;
    background-color: #f0e7d7;
    padding: 14px;
  }
  &-table {
    width: 900px;
    height: 392px;
    margin: 60px auto 0;
    background: #f0e7d7;
    thead {
      background: #7e6f6f;
      color: #ddd;
      text-align: center;
      font-size: 14px;
      tr {
        th {
          border: 1px solid #cfc5b2;
        }
      }
    }
    tbody {
      tr {
        td {
          border: 1px solid #cfc5b2;
          text-align: center;
        }
        td:first-of-type {
          background: #7e6f6f;
          color: #ddd;
          font-size: 14px;
          width: 100px;
        }
      }
    }
  }
}
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(-10px);
  }
  20% {
    transform: translateX(10px);
  }
  30% {
    transform: translateX(-10px);
  }
  40% {
    transform: translateX(10px);
  }
  50% {
    transform: translateX(-10px);
  }
  60% {
    transform: translateX(10px);
  }
  70% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(10px);
  }
  90% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}

.shake-animation {
  animation: shake 0.6s;
}
</style>
