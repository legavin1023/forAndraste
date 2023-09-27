<template>
  <div class="box">
    <div class="topImage varric"></div>
    <div class="content">
      <p class="content-text">
        배릭의 집은 한때 그의 형인 바트란드의 소유였지만, 모종의 사건 이후 그의
        소유가 되었다. <br />
        사람들은 그곳을 여전히 ‘붉은 귀신이 사는 집’이라고 부르곤 했지만,
        <br />재앙 이후 커크월에 남은 건물들 중에서는 그나마 말끔하게 관리되어
        있었다.<br /><br />
        다만 그 문은 굳게 잠겨있었고, 안쪽에서는 그 어떤 인기척도 느껴지지
        않았다.<br />이름을 부르며 노크를 해도 대답은 없었다. 창문도 살펴봤지만
        모두 커튼이 쳐져 있었다.<br />
        다른 이들과 마찬가지로 이곳을 떠난 것인지, 한참을 기웃거렸지만 알아낼 수
        있는 건 없었다.<br /><br />현관문의 열쇠 구멍을 잠시 내려다보았다.<br />간신히
        이어온 단서를 여기서 놓칠 수는 없었다.
      </p>
      <div class="puzzle">
        <div id="wrap">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/collar.png"
            alt=""
            id="collar"
            style="opacity: 0"
          />
          <div id="cylinder" ref="cylinder"></div>
          <div class="driverW"><div id="driver" ref="driver"></div></div>
          <div id="pin" ref="pin">
            <div class="top" ref="pinTop"></div>
            <div class="bott" ref="pinBott"></div>
          </div>
        </div>
        <p style="display: none">
          <span ref="numPinsSpan">{{ numPins }}</span
          >개 남음
        </p>
      </div>
    </div>

    <div class="bottomImage"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  data: function () {
    return {
      minRot: -90,
      maxRot: 90,
      solveDeg: Math.random() * 180 - 90,
      solvePadding: 4,
      maxDistFromSolve: 45,
      pinRot: 0,
      cylRot: 0,
      lastMousePos: 0,
      mouseSmoothing: 2,
      keyRepeatRate: 25,
      cylRotSpeed: 3,
      pinDamage: 20,
      pinHealth: 100,
      pinDamageInterval: 150,
      numPins: 9999, //락픽숫자
      userPushingCyl: false,
      gameOver: false,
      gamePaused: false,
      pin: null,
      cyl: null,
      driver: null,
      cylRotationInterval: null,
      pinLastDamaged: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      // Initialize DOM elements
      this.pin = this.$refs.pin;
      this.cyl = this.$refs.cylinder;
      this.driver = this.$refs.driver;

      // Bind event listeners
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("mouseleave", this.handleMouseLeave);
      document.addEventListener("keydown", this.handleKeydown);
      document.addEventListener("keyup", this.handleKeyup);
    });
  },
  beforeDestroy() {
    // Cleanup event listeners
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("mouseleave", this.handleMouseLeave);
    document.removeEventListener("keydown", this.handleKeydown);
    document.removeEventListener("keyup", this.handleKeyup);
  },
  methods: {
    handleMouseMove(e) {
      if (this.lastMousePos && !this.gameOver && !this.gamePaused) {
        let pinRotChange =
          (e.clientX - this.lastMousePos) / this.mouseSmoothing;
        this.pinRot += pinRotChange;
        this.pinRot = this.clamp(this.pinRot, this.maxRot, this.minRot);
        this.pin.style.transform = "rotateZ(" + this.pinRot + "deg)";
      }
      this.lastMousePos = e.clientX;
    },
    handleMouseLeave() {
      this.lastMousePos = 0;
    },
    handleKeydown(e) {
      if (
        [87, 65, 83, 68, 37, 39].includes(e.keyCode) &&
        !this.userPushingCyl &&
        !this.gameOver &&
        !this.gamePaused
      ) {
        this.pushCyl();
      }
    },
    handleKeyup(e) {
      if ([87, 65, 83, 68, 37, 39].includes(e.keyCode) && !this.gameOver) {
        this.unpushCyl();
      }
    },
    pushCyl() {
      clearInterval(this.cylRotationInterval);
      this.userPushingCyl = true;

      // Calculate the maximum rotation allowance for the cylinder
      let distFromSolve =
        Math.abs(this.pinRot - this.solveDeg) - this.solvePadding;
      distFromSolve = this.clamp(distFromSolve, this.maxDistFromSolve, 0);
      let cylRotationAllowance = this.convertRanges(
        distFromSolve,
        0,
        this.maxDistFromSolve,
        1,
        0.02
      );
      cylRotationAllowance *= this.maxRot;

      // Set up an interval to rotate the cylinder forward
      this.cylRotationInterval = setInterval(() => {
        this.cylRot += this.cylRotSpeed;

        if (this.cylRot >= this.maxRot) {
          this.cylRot = this.maxRot;
          // Perform actions for solving
          clearInterval(this.cylRotationInterval);
          this.unlock();
        } else if (this.cylRot >= cylRotationAllowance) {
          this.cylRot = cylRotationAllowance;
          // Perform actions for damaging the pin
          this.damagePin();
        }

        // Update the cylinder's rotation
        this.cyl.style.transform = `rotateZ(${this.cylRot}deg)`;
        this.driver.style.transform = `rotateZ(${this.cylRot}deg)`;
      }, this.keyRepeatRate);
    },
    unpushCyl() {
      this.userPushingCyl = false;
      clearInterval(this.cylRotationInterval);

      // Set up an interval to rotate the cylinder backward
      this.cylRotationInterval = setInterval(() => {
        this.cylRot -= this.cylRotSpeed;
        this.cylRot = Math.max(this.cylRot, 0);

        // Update the cylinder's rotation
        this.cyl.style.transform = `rotateZ(${this.cylRot}deg)`;
        this.driver.style.transform = `rotateZ(${this.cylRot}deg)`;

        if (this.cylRot <= 0) {
          this.cylRot = 0;
          clearInterval(this.cylRotationInterval);
        }
      }, this.keyRepeatRate);
    },
    damagePin() {
      if (
        !this.pinLastDamaged ||
        Date.now() - this.pinLastDamaged > this.pinDamageInterval
      ) {
        this.pinHealth -= this.pinDamage;
        console.log("damagePin, pinHealth=", this.pinHealth);
        this.pinLastDamaged = Date.now();

        // Pin damage and lock jiggle animation
        let tl = gsap.timeline();
        tl.to(this.pin, this.pinDamageInterval / 4 / 1000, {
          rotationZ: this.pinRot - 2,
        });
        tl.to(this.pin, this.pinDamageInterval / 4 / 1000, {
          rotationZ: this.pinRot,
        });

        if (this.pinHealth <= 0) {
          this.breakPin();
        }
      }
    },
    breakPin() {
      this.$store.dispatch("terminateEffectAudio");
      this.$store.dispatch(
        "setEffectAudioSource",
        `${process.env.BASE_URL}assets/sound/pin.mp3`
      );
      this.$store.dispatch("playEffectAudio");
      this.gamePaused = true;
      clearInterval(this.cylRotationInterval);
      this.numPins--;

      let pinTop = this.$refs.pin.querySelector(".top");
      let pinBott = this.$refs.pin.querySelector(".bott");

      // Create a new timeline using gsap.timeline()
      let tl = gsap.timeline();

      tl.to(pinTop, 0.7, {
        rotationZ: -400,
        x: -200,
        y: -100,
        opacity: 0,
      }).to(
        pinBott,
        0.7,
        {
          rotationZ: 400,
          x: 200,
          y: 100,
          opacity: 0,
          onComplete: () => {
            if (this.numPins > 0) {
              this.gamePaused = false;
              this.reset();
            } else {
              this.outOfPins();
            }
          },
        },
        0
      );
    },
    reset() {
      this.cylRot = 0;
      this.pinHealth = 100;
      this.pinRot = 0;

      // Reset the rotations of pin, cylinder, and driver
      this.$refs.pin.style.transform = `rotateZ(${this.pinRot}deg)`;
      this.$refs.cylinder.style.transform = `rotateZ(${this.cylRot}deg)`;
      this.$refs.driver.style.transform = `rotateZ(${this.cylRot}deg)`;

      // Reset the pin's top and bottom parts
      gsap.to(this.$refs.pinTop, 0, {
        rotationZ: 0,
        x: 0,
        y: 0,
        opacity: 1,
      });
      gsap.to(this.$refs.pinBott, 0, {
        rotationZ: 0,
        x: 0,
        y: 0,
        opacity: 1,
      });
    },
    outOfPins() {
      this.gameOver = true;
      this.$refs.lose.style.display = "inline-block";
      this.$refs.modal.style.display = "block";
    },
    unlock() {
      setTimeout(() => {
        this.$store.dispatch("terminateBackgroundAudio");
        this.$store.dispatch(
          "setBackgroundAudioSource",
          `${process.env.BASE_URL}assets/sound/lock.mp3`
        );
        this.$store.dispatch("playBackgroundAudio");
        this.$store.dispatch("terminateEffectAudio");

        this.$store.dispatch(
          "setEffectAudioSource",
          `${process.env.BASE_URL}assets/sound/화살소리.mp3`
        );
        this.$store.dispatch("playEffectAudio");
        this.$router.push({ name: "/CO-07-2" });
      }, 300);
    },
    clamp(val, max, min) {
      return Math.min(Math.max(val, min), max);
    },
    convertRanges(OldValue, OldMin, OldMax, NewMin, NewMax) {
      return (
        ((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin) + NewMin
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: absolute;
  overflow: hidden;
  margin: auto;
  left: calc(50% - 600px);
}
#wrap {
  display: block;
  position: relative;
  width: 1200px;
  height: 300px;
  margin: auto;
  padding: 250px 0;
  overflow-y: hidden;
  overflow-y: visible;
  display: flex;
  flex-direction: column;
}

#collar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
}
#cylinder {
  display: block;
  background: url("@/assets/07_varric/pin/cylinder.png");
  background-size: cover;
  width: 400.947px;
  height: 400.947px;
  position: absolute;
  left: calc(50% - 200px);
  top: 100px;
}
#cylinder::after {
  content: "";
  background: url("@/assets/07_varric/pin/game.png");
  width: 411.778px;
  height: 119.307px;
  display: block;
  position: relative;
  top: 370px;
}
.driverW {
  width: 100%;
  overflow-x: hidden;
}
#driver {
  display: block;
  width: 979.116px;
  height: 477.842px;
  background: url("@/assets/07_varric/pin/driver.png");
  background-size: cover;
  position: absolute;
  top: 320px;
  right: -380px;
  transform-origin: 3% -3%;
}
#pin {
  display: block;
  background-size: cover;
  width: 20px; // 7.1304% of collar width
  height: 500px; // 146.4347% of collar width
  position: absolute;
  left: calc(50% - 10px);
  top: -200px;
  transform-origin: 50% 99%;
  z-index: 1000;
  .top {
    display: block;
    width: 100%;
    height: 50%;
    position: absolute;
    top: 0;
    left: 0;
    background: url("@/assets/07_varric/pin/pinTop.png");
    background-size: fill;
    // background: red;
  }
  .bott {
    display: block;
    width: 100%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    background: url("@/assets/07_varric/pin/pinBott.png");
    background-size: fill;
    // background: red;
  }
}
</style>
