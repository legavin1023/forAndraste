<template>
  <div>
    <div ref="root" class="particle-root"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      particles: [],
      clicks: [],
      images: [
        // Add the URLs of your images here.
        `${process.env.BASE_URL}assets/04_anders_clinic/bottle/bottle_1.png,`,
        `${process.env.BASE_URL}assets/04_anders_clinic/bottle/bottle_2.png,`,
        `${process.env.BASE_URL}assets/04_anders_clinic/bottle/bottle_3.png,`,
        `${process.env.BASE_URL}assets/04_anders_clinic/bottle/bottle_4.png,`,
        //...
      ],
    };
  },
  methods: {
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
        this.$refs.root.removeChild(particle.el);
      });
      this.particles.push(particle);
      this.$refs.root.appendChild(particle.el);
      return particle;
    },
    addParticles(x, y) {
      const rest = Math.max(0, Math.min(20, 200 - this.particles.length));
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
  },
  mounted() {
    this.loop();
    window.addEventListener("click", this.handleClick);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.handleClick);
  },
};
</script>

<style>
.particle-root {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  pointer-events: none;
  overflow: hidden;
}
</style>
