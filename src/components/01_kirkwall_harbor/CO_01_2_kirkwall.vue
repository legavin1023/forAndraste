<template>
  <div>
    <div class="topImage kirkwall"></div>
    <div class="content">
      <p class="content-text mt26">
        커크월에 도착한 수많은 템플러들은 커크월을 뒤덮은 커다란 혼란과 절망
        앞에 말을 잃었다. <br />과장되었을 것이라고 생각했던 소문은, 오히려
        과소평가된 비극이었던 것이다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              우선 챈트리 쪽으로 가도록 하지. 지도는 갖고 있나?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">예. 챙겨두었습니다.</div>
          </li>
        </ul>
      </div>
      <div class="puzzle mt70">
        <div class="maze-container">
          <!-- <select v-model="difficulty">
            <option value="easy">Easy</option>
            <option value="normal">Normal</option>
            <option value="hard">Hard</option>
          </select>
          <select v-model="strategy">
            <option value="cluster">cluster</option>
            <option value="dig">dig</option>
          </select>
          <div class="time">{{ time }}ms</div> -->
          <maze
            :strategy="strategy"
            :difficulty="difficulty"
            @start="onStart"
            @finish="onFinish"
            @init="onInit"
            :style="mazeStyle"
          ></maze>
        </div>
      </div>
    </div>
    <transition>
      <div class="content" :class="{ hide: !showButton }">
        <p class="content-text">
          커크월 전반에 걸쳐 흩어진 무너진 건물의 파편.<br />
          화마가 휩쓸고 지나간 잿더미들.<br />
          아직 수습되지 못한 시신들.<br /><br />한차례 이곳을 휩쓸고 지나갔을
          울음와 비명소리는 소름끼치는 적막 너머에 새겨져 있었다.<br />매캐한
          연기의 냄새가 아직도 공기 중에 흐릿하게 남아있었다. <br />한 차례 비가
          왔었는지 바닥은 축축하고 질척거렸다.
        </p>
        <div class="content-button">
          <button @click="checkPath">챈트리로 향한다.</button>
        </div>
      </div>
    </transition>
    <div class="bottomImage"></div>
  </div>
</template>

<script>
import Maze from "@/components/01_kirkwall_harbor/puzzle/mazeRoom";

export default {
  components: {
    Maze,
  },
  data() {
    return {
      mazeStyle: {
        width: "100%",
        height: "100%",
      },
      startTime: 0,
      time: 0,
      difficulty: "easy",
      strategy: "cluster",
      showButton: false,
    };
  },
  methods: {
    onStart() {
      this.startTime = Date.now();
    },
    onFinish() {
      this.showButton = true;
    },
    onInit() {
      this.startTime = 0;
    },
    checkPath() {
      this.$store.dispatch("terminateAudio");
      this.$router.push({ path: "/CO-02-1" });
    },
  },
};
</script>
<style scoped>
.maze-container {
  width: 700px;
  height: 360px;
  margin: auto;
  padding-bottom: 20px;
  overflow: hidden;
  z-index: 10;
}
.hide {
  display: none;
}
.mazeBtn {
  z-index: 10;
  position: absolute;
  cursor: pointer;
}
</style>
