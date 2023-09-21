<template>
  <div>
    <transition name="fade">
      <canvas
        class="flashLight"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
        v-if="isVisible"
        ref="canvasEl"
      ></canvas>
    </transition>

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
        <div ref="root" class="particle-root"></div>

        <div class="score">{{ score }}</div>
        <div
          class="background-area"
          @mouseup="stopCounting"
          @mouseleave="stopCounting"
        >
          <div class="color-zone red"></div>
          <div class="color-zone yellow"></div>
          <div class="color-zone green"></div>
          <div class="gauge-bar" :style="{ width: gaugeValue + '%' }"></div>
          <!-- Add the Persuade button here -->
        </div>
      </div>
      <button class="persuade-button" @click="persuade">설득</button>

      <div class="bottomImage"></div>
    </div>
    <!-- <particleBoxVue></particleBoxVue> -->
  </div>
</template>

<script>
// import particleBoxVue from "./particle/particleBox.vue";
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
      score: 0, // 점수
      hasScoreDecreasedAtZero: false, // 게이지가 0이 되었을 때 점수를 이미 감소시켰는지 확인하는 플래그
      decreaseInterval: null, // 게이지 감소를 위한 interval을 저장
      routeChanged: false,
      //---
      particles: [],
      clicks: [],
      images: [
        `${process.env.BASE_URL}assets/04_anders_clinic/bottle/bottle_1.png`,
        `${process.env.BASE_URL}assets/04_anders_clinic/bottle/bottle_2.png`,
        `${process.env.BASE_URL}assets/04_anders_clinic/bottle/bottle_3.png`,
        `${process.env.BASE_URL}assets/04_anders_clinic/bottle/bottle_4.png`,
      ],
      //----
      mousePosition: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      },
      flashlight_size: {
        center: window.innerHeight / 5,
        outside: window.innerHeight / 3,
      },
      gradient_color: {
        first: "rgba(0,0,0,0.8)",
        second: "rgba(0,0,0,0)",
      },
      gradient: null,
      //------
      isVisible: true, //빛
      lastScrollPosition: 0,
    };
  },
  watch: {
    score(newValue) {
      if (newValue >= 100) {
        this.removeAllImages();
      }
    },
  },
  mounted() {
    this.startDecreasingGauge();
    this.loop();
    window.addEventListener("click", this.handleClick);
    this.initializeCanvas();
    this.draw();
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPosition = window.scrollY;

      if (
        currentScrollPosition > this.lastScrollPosition &&
        currentScrollPosition > 2700
      ) {
        // 사용자가 아래로 스크롤할 때
        this.isVisible = false;
      }

      // 마지막 스크롤 위치를 업데이트
      this.lastScrollPosition = currentScrollPosition;
    },
    // 마우스를 눌렀을 때 게이지를 한 번만 증가시키는 함수
    increaseGauge() {
      if (this.gaugeValue >= 50 && this.gaugeValue < this.maxGaugeValue) {
        this.gaugeValue += 1;
      } else {
        this.gaugeValue += 2;
      }

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
      this.gaugeValue--;
      if (this.gaugeValue <= 0) {
        this.gaugeValue = 0;
        if (!this.hasScoreDecreasedAtZero) {
          this.score = 0; // 점수를 0으로 초기화
          this.hasScoreDecreasedAtZero = true;
        }
      } else {
        this.hasScoreDecreasedAtZero = false; // 게이지가 0이 아니면 상태를 초기화
      }
      this.adjustScore(); // 점수를 조정하는 함수 호출 (필요한 경우)
    },
    adjustScore() {
      if (this.gaugeValue < 33) {
        this.score -= 5;
      } else if (this.gaugeValue >= 66) {
        this.score += 5;
      }
      // 점수가 0보다 작아지지 않도록 조정
      if (this.score < 0) {
        this.score = 0;
      }
      // 점수가 100을 넘지 않도록 조정
      if (this.score > 100) {
        this.score = 100;
      }
      // 점수가 100이 되면 알림 띄우기
      if (this.score === 100 && !this.routeChanged) {
        this.routeChanged = true;
        this.$router.push({ name: "/FF-05-2-AA-05-03" });
      }
    },

    // 현재 게이지 값이 목표 영역 내에 있는지 확인하는 함수
    checkTargetZone() {
      if (
        this.gaugeValue >= this.targetZoneStart &&
        this.gaugeValue <= this.targetZoneEnd
      ) {
        if (!this.targetTime && !this.countdownInterval) {
          // this.startCountdown();
        }
      } else {
        // this.stopCountdown();
      }
    },
    // // 5초 카운트다운을 시작하는 함수
    // startCountdown() {
    //   this.countdown = 5;
    //   this.targetTime = new Date();
    //   this.countdownInterval = setInterval(() => {
    //     this.countdown--;
    //     if (this.countdown <= 0) {
    //       this.gameClear();
    //     }
    //   }, 1000);
    // },
    // // 카운트다운을 중지하는 함수
    // stopCountdown() {
    //   clearInterval(this.countdownInterval);
    //   this.countdownInterval = null;
    //   this.targetTime = null;
    //   this.countdown = null;
    // },
    // 게임을 클리어했을 때 실행되는 함수
    // gameClear() {
    //   clearInterval(this.increasingInterval);
    //   clearInterval(this.countdownInterval);
    //   this.increasingInterval = null;
    //   this.countdown = null;
    //   this.gaugeValue = 0;

    //   setTimeout(() => {
    //     this.$router.push({ name: "/FF-05-2-AA-05-03" });
    //   }, 2000);
    // },
    startDecreasingGauge() {
      this.stopDecreasingGauge(); // 이미 실행 중인 interval이 있다면 중지

      let decreaseSpeed = 300; // 기본 감소 속도: 1초에 한 번

      // 게이지가 초록 영역 (50 이상) 일 경우 감소 속도를 더 빠르게 설정
      if (this.gaugeValue > 200) {
        decreaseSpeed = 20; // 초록 영역에서는 0.5초에 한 번 감소
      }

      this.decreaseInterval = setInterval(() => {
        this.decreaseGauge(); // 게이지 값을 감소

        // 초록 영역에서 벗어났을 경우 감소 속도를 조절
        if (this.gaugeValue === 50) {
          this.startDecreasingGauge();
        }
      }, decreaseSpeed);
    },

    stopDecreasingGauge() {
      if (this.decreaseInterval) {
        clearInterval(this.decreaseInterval);
        this.decreaseInterval = null;
      }
    },
    persuade() {
      // Adjust the gauge value as needed
      if (this.gaugeValue >= 50 && this.gaugeValue < this.maxGaugeValue) {
        this.gaugeValue += 1;
      } else {
        this.gaugeValue += 2;
      }

      if (this.gaugeValue > this.maxGaugeValue) {
        this.gaugeValue = this.maxGaugeValue;
      }

      this.checkTargetZone();
    },
    //----------
    randomFloat(min = 0, max = 9999) {
      return Math.random() * (max - min) + min;
    },
    mapRange(value, source, target) {
      return (
        target[0] +
        ((value - source[0]) * (target[1] - target[0])) /
          (source[1] - source[0])
      );
    },
    addParticle(x, y) {
      const particle = this.createParticle(x, y, () => {
        this.particles.splice(this.particles.indexOf(particle), 1);
        this.$nextTick(() => {
          if (this.$refs.root && particle.el) {
            this.$nextTick(() => {
              if (this.$refs.root) {
                this.$refs.root.removeChild(particle.el);
              }
            });
          }
        });
      });
      this.particles.push(particle);
      this.$refs.root.appendChild(particle.el);
      return particle;
    },
    addParticles(x, y) {
      const rest = Math.max(0, Math.min(1, 200 - this.particles.length));
      for (let i = 0; i < rest; i++) this.addParticle(x, y);
    },
    handleClick(e) {
      this.clicks.push([e.pageX, e.pageY]);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => (this.clicks = []), 400);
      if (this.clicks.length > 1)
        this.addParticles(
          this.clicks[this.clicks.length - 1][0],
          this.clicks[this.clicks.length - 1][1]
        );
    },
    createParticle(x, y, ondistroyed) {
      const el = document.createElement("img");
      el.src = this.images[Math.floor(Math.random() * this.images.length)];
      const maxAge = this.randomFloat(50, 250);
      const velocity = 10;
      const seedR =
        this.randomFloat(0, 1) < 0.5
          ? this.randomFloat(-maxAge * 0.2, -maxAge)
          : this.randomFloat(maxAge * 0.2, maxAge);
      const seedSX = this.randomFloat(maxAge * 0.6, maxAge);
      const seedSY = this.randomFloat(maxAge * 0.6, maxAge);
      const seedX = this.randomFloat(-velocity, velocity);
      const seedY = this.randomFloat(-velocity, velocity);

      let age = 0;
      let dead = false;
      let translateX = 0;
      let translateY = 0;

      el.style.position = "absolute";
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      // el.style.width = "10px";
      // el.style.height = "10px";
      el.style.transform = "translate3d(-50%, -50%, 0)";

      const distroy = () => {
        dead = true;
        ondistroyed();
      };

      const update = () => {
        if (dead) return;

        age++;
        if (age > maxAge) {
          distroy();
          return;
        }

        translateX += seedX;
        translateY += seedY;
        const rotate = this.mapRange(age, [0, seedR], [0, 360]);
        const scaleX = this.mapRange(age, [0, seedSX], [0.25, 3]);
        const scaleY = this.mapRange(age, [0, seedSY], [0.25, 3]);
        const transform = `translate3d(-50%, -50%, 0) translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate}deg) scale(${scaleX}, ${scaleY})`;
        const opacity = this.mapRange(age, [maxAge * 0.6, maxAge], [1, 0]);

        el.style.transform = transform;
        el.style.opacity = opacity;
      };

      return { el, update, distroy };
    },
    loop() {
      requestAnimationFrame(this.loop);
      this.particles.forEach((x) => x.update());
    },
    removeAllImages() {
      this.particles.forEach((particle) => particle.distroy());
      this.particles = [];
    },
    initializeCanvas() {
      const canvasEl = this.$refs.canvasEl;
      canvasEl.width = window.innerWidth;
      canvasEl.height = window.innerHeight;

      if (
        window.getComputedStyle(document.body).getPropertyValue("position") !==
        "relative"
      ) {
        document.body.style.position = "relative";
      }
      canvasEl.style = "position: fixed; top: 0; left: 0;";
    },
    handleMouseMove(e) {
      this.mousePosition.x = e.offsetX;
      this.mousePosition.y = e.offsetY;
      this.draw();
    },
    handleMouseLeave() {
      this.draw();
    },
    draw() {
      const canvasEl = this.$refs.canvasEl;
      const c = canvasEl.getContext("2d");
      const w = canvasEl.width;
      const h = canvasEl.height;

      c.save();
      c.clearRect(0, 0, w, h);

      this.gradient = c.createRadialGradient(
        this.mousePosition.x,
        this.mousePosition.y,
        this.flashlight_size.center,
        this.mousePosition.x,
        this.mousePosition.y,
        this.flashlight_size.outside
      );
      this.gradient.addColorStop(0, this.gradient_color.first);
      this.gradient.addColorStop(1, this.gradient_color.second);

      c.fillStyle = "#000";
      c.fillRect(0, 0, w, h);

      c.globalCompositeOperation = "destination-out";
      c.fillStyle = this.gradient;
      c.arc(
        this.mousePosition.x,
        this.mousePosition.y,
        this.flashlight_size.outside,
        0,
        Math.PI * 2,
        false
      );

      c.fill();
      c.restore();
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("click", this.handleClick);
  },
};
// 컴포넌트가 마운트되었을 때 게이지 감소를 시작
</script>

<style lang="scss" scoped>
.background-area {
  position: relative;
  margin: auto;
  display: flex;
  width: 441px;
  height: 24px;
  transition: background-color 0.3s;

  // overflow: hidden;
}

.color-zone {
  width: 33.33%;
  transition: background-color 0.3s;
}

.color-zone.red {
  background-color: #d75656;
  border-radius: 11.5px 0 0 11.5px;
}

.color-zone.yellow {
  background-color: #f99b57;
}

.color-zone.green {
  background-color: #77c65b;
  border-radius: 0 11.5px 11.5px 0;
}

.gauge-bar {
  height: 24px;
  background-color: #fff;
  transition: width 0.3s;
  position: absolute;
  border-radius: 11.5px;
  top: 0;
  left: 0;
  z-index: 1;
  /* 이미지 추가 */
  &::after {
    width: 37px;
    height: 43px;
    display: block;

    content: "";
    background-image: url("@/assets/05_fenris/Isolation_Mode.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute; // 이 부분 추가
    right: -20px; // 이미지의 너비만큼 오른쪽으로 이동
    top: -50px; // 이미지의 위치를 게이지 바 위
  }
}
.score {
  position: relative;
  font-size: 20px;
  color: #25130f;
  font-size: 24px;
  text-align: center;
  left: -250px;
  top: 26px;
}

.puzzle {
  padding: 90px;
}
.persuade-button {
  display: block;
  width: 200px;
  text-align: center;
  margin: auto;
  background: #fff;
  margin: auto;
}
.particle-root {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  pointer-events: none;
  overflow: hidden;
}
.flashLight {
  z-index: 100;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
