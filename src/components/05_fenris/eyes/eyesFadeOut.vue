<template>
  <div id="eyesFadeOutVue">
    <div class="fof">
      <canvas ref="eyeCanvas"></canvas>
    </div>
  </div>
</template>

<script>
import Eye from "@/components/05_fenris/eyes/eyesMove.js";
export default {
  name: "eyesFadeOutVue",
  data() {
    return {
      DISPLAY_WIDTH: window.innerWidth,
      DISPLAY_HEIGHT: window.innerHeight,
      DISPLAY_DURATION: 10,
      mouse: { x: 0, y: 0 },
      eyes: [],
      startTime: null,
      canvas: null,
      context: null,
    };
  },
  mounted() {
    window.addEventListener("mousemove", this.handleMouseMove);
    this.initialize();
  },
  methods: {
    initialize() {
      this.canvas = this.$refs.eyeCanvas;
      this.canvas.width = this.DISPLAY_WIDTH;
      this.canvas.height = this.DISPLAY_HEIGHT;
      this.context = this.canvas.getContext("2d");

      this.eyes = [
        new Eye(this.canvas, 0.19, 0.8, 0.88, 0.31),
        new Eye(this.canvas, 0.1, 0.54, 0.84, 0.32),
        new Eye(this.canvas, 0.81, 0.13, 0.63, 0.33),
        new Eye(this.canvas, 0.89, 0.19, 0.58, 0.34),
        new Eye(this.canvas, 0.4, 0.08, 0.97, 0.35),
        new Eye(this.canvas, 0.64, 0.74, 0.57, 0.36),
        new Eye(this.canvas, 0.41, 0.89, 0.56, 0.37),
        new Eye(this.canvas, 0.92, 0.89, 0.75, 0.38),
        new Eye(this.canvas, 0.27, 0.2, 0.87, 0.39),
        new Eye(this.canvas, 0.17, 0.46, 0.68, 0.41),
        new Eye(this.canvas, 0.71, 0.29, 0.93, 0.42),
        new Eye(this.canvas, 0.84, 0.46, 0.54, 0.43),
        new Eye(this.canvas, 0.93, 0.35, 0.63, 0.44),
        new Eye(this.canvas, 0.77, 0.82, 0.85, 0.45),
        new Eye(this.canvas, 0.36, 0.74, 0.9, 0.46),
        new Eye(this.canvas, 0.13, 0.24, 0.85, 0.47),
        new Eye(this.canvas, 0.58, 0.2, 0.77, 0.48),
        new Eye(this.canvas, 0.55, 0.84, 0.87, 0.5),
        new Eye(this.canvas, 0.5, 0.5, 5.0, 0.1),
      ];

      this.startTime = Date.now();
      this.animate();
    },
    animate() {
      const seconds = (Date.now() - this.startTime) / 1000;
      this.context.clearRect(0, 0, this.DISPLAY_WIDTH, this.DISPLAY_HEIGHT);

      for (let eye of this.eyes) {
        if (seconds > eye.activationTime * this.DISPLAY_DURATION) {
          eye.activate();
        }
        eye.update(this.mouse);
      }

      requestAnimationFrame(this.animate);
    },
    handleMouseMove(event) {
      this.mouse.x = event.clientX;
      this.mouse.y = event.clientY;
    },
  },

  beforeDestroy() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  },
};
</script>

<style scoped>
body {
  background: #000;
  overflow: hidden;
}

.fof {
  margin: 10px 0;
}

.fof canvas,
.fof img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  z-index: 1;

  background: #000;
}
</style>
