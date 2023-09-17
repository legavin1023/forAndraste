<template>
  <div>
    <div class="topImage fenris"></div>
    <div class="content">
      <p class="content-text">
        고양이를 따라 도착한 곳은 하이타운의 커다란 저택이었다. <br />
        하지만 커크월이 이렇게 된데다 주인이 자리를 비운 저택은, 그 전에 품고
        있었을 호화로운 빛을 모두 잃은 것처럼 보였다. <br /><br />장식장에
        고양이가 그려져 있다는 것만으로, 홀린듯이 길고양이를 쫓아 여기까지 온
        것이 어리석었다는 것을 인정할 때 쯤, 저택 안쪽에서 무언가 깨지는 소리와
        함께 희미하게 싸우는 소리가 들렸다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait thiefA"></div>
            <div class="content-dialog-text">
              이걸 왜 굳이 네가 가져가겠다는 건데!
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait thiefB"></div>
            <div class="content-dialog-text">
              그게 왜 중요해? 네가 가져갈 이유는 또 뭐야!
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait thiefA"></div>
            <div class="content-dialog-text">
              진료소 턴 다음에 판 돈 네가 더 많이 가져간 걸 모를 줄 알아?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait thiefB"></div>
            <div class="content-dialog-text">또 그 소리야? 증거 있어?</div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        도둑들인 모양이었다. <br />이대로 경비대에게 보고하는 것이 올바른
        수순이겠지만. 그들이 말 한 '진료소 턴 다음에'라는 말은그대로 지나칠 수
        있는 것이 아니었다. <br />
        <br />이미 자물쇠가 박살난 문은 손쉽게 열 수 있었다. 안쪽의 뿌연 먼지를
        따라 도둑들의 발자국이 그대로 남아있는데다, 워낙 큰 소리로 다투고
        있는지라 도둑들의 위치를 찾아가는 것은 어렵지 않았다. <br />
        <br />지하의 와인창고의 문은 활짝 열려있었고, 경계 태세를 취하며
        안쪽으로 고개를 살짝 기울이자, 두 사람이 와인 병 몇 개를 두고 싸우고
        있는 게 보였다. <br />두 사람의 싸움은 곧 몸싸움으로 번져갔는데, 그
        자세가 어색하고 엉망진창이었다 <br />
        <br />목을 가다듬는 소리를 내자, 한순간에 소음이 잦아들고 두 쌍의 눈이
        이쪽으로 꽂혔다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait thiefA"></div>
            <div class="content-dialog-text">뭐야 넌!</div>
          </li>
          <li>
            <div class="content-dialog-portrait thiefB"></div>
            <div class="content-dialog-text">여긴 우리가 먼저 왔어!</div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        아무래도 이쪽을 같은 도둑 쯤으로 생각한 모양이었다. <br />'대화'를
        하려면, 조금의 '설득'이 필요해보였다.
      </p>
      <div class="puzzle">
        <div
          class="background-area"
          @mouseup="stopCounting"
          @mouseleave="stopCounting"
          @mousedown="increaseGauge"
        >
          <div class="gauge-bar" :style="{ width: gaugeValue + '%' }"></div>
          <div class="target-zone"></div>
          <div v-if="countdown" class="countdown">{{ countdown }}</div>
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
      gaugeValue: 0, // 현재 게이지의 값
      maxGaugeValue: 100, // 게이지의 최대 값
      startTime: null, // 게이지 증가를 시작한 시간
      targetTime: null, // 목표 영역에 처음 진입한 시간
      countdownInterval: null, // 카운트다운 감소에 사용되는 인터벌
      countdown: null, // 카운트다운의 현재 값 (초)
      targetZoneStart: 65, // 목표 영역의 시작 지점 (%)
      targetZoneEnd: 85, // 목표 영역의 끝 지점 (%)
      increasingInterval: null, // 게이지 증가에 사용되는 인터벌
      decreasingInterval: null, // 게이지 감소에 사용되는 인터벌 (현재 사용 안 함)
    };
  },
  mounted() {
    setInterval(() => {
      if (this.gaugeValue > 0) {
        this.decreaseGauge();
      }
    }, 500);
  },
  methods: {
    // 마우스를 눌렀을 때 게이지를 한 번만 증가시키는 함수
    increaseGauge() {
      this.gaugeValue += 4;
      if (this.gaugeValue > this.maxGaugeValue) {
        this.gaugeValue = this.maxGaugeValue;
      }
      this.checkTargetZone();
    },
    // 마우스를 뗐을 때 게이지 증가를 중지
    stopCounting() {
      clearInterval(this.increasingInterval);
      this.increasingInterval = null;
    },

    // 게이지 값을 감소시키는 함수
    decreaseGauge() {
      this.gaugeValue -= 5;
      if (this.gaugeValue < 0) {
        this.gaugeValue = 0;
      }
      this.checkTargetZone();
    },
    // 현재 게이지 값이 목표 영역 내에 있는지 확인하는 함수
    checkTargetZone() {
      if (
        this.gaugeValue >= this.targetZoneStart &&
        this.gaugeValue <= this.targetZoneEnd
      ) {
        if (!this.targetTime && !this.countdownInterval) {
          this.startCountdown();
        }
      } else {
        this.stopCountdown();
      }
    },
    // 5초 카운트다운을 시작하는 함수
    startCountdown() {
      this.countdown = 5;
      this.targetTime = new Date();
      this.countdownInterval = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          this.gameClear();
        }
      }, 1000);
    },
    // 카운트다운을 중지하는 함수
    stopCountdown() {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
      this.targetTime = null;
      this.countdown = null;
    },
    // 게임을 클리어했을 때 실행되는 함수
    gameClear() {
      clearInterval(this.increasingInterval);
      clearInterval(this.countdownInterval);
      this.increasingInterval = null;
      this.countdown = null;
      this.gaugeValue = 0;

      setTimeout(() => {
        this.$router.push({ path: "/FF-05-2-AA-05-03" });
      }, 2000);
    },
  },
};
// 컴포넌트가 마운트되었을 때 게이지 감소를 시작
</script>

<style>
.background-area {
  width: 300px;
  height: 30px;
  background-color: #fff;
  position: relative;
  margin: auto;
}

.gauge-bar {
  height: 30px;
  background-color: #837a6e;
  transition: width 0.3s;
}

.target-zone {
  position: absolute;
  top: 0;
  left: 65%;
  width: 20%;
  height: 30px;
  border: 2px dashed red;
}

.countdown {
  position: absolute;
  top: 0;
  left: 75%;
  transform: translateX(-50%);
  font-size: 20px;
  color: black;
}
.puzzle {
  padding: 90px;
}
</style>
