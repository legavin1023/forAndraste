<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
.fade-element {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.visible {
  opacity: 1;
}
</style>

<script>
export default {
  data() {
    return {
      observer: null,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          this.initFadeEffect();
        });
      },
    },
  },
  methods: {
    initFadeEffect() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }

      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      };

      this.observer = new IntersectionObserver(callback, { threshold: 0.2 });

      const elements = this.$el.querySelectorAll(
        ".content-dialog, .content-text, .content-button, .endingImage .goHome"
      );
      elements.forEach((el) => {
        el.classList.add("fade-element");
        this.observer.observe(el);
      });
    },
  },

  beforeDestroy() {
    // Observer 해제
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  },
};
</script>
