<template>
  <div>
    <div class="topImage"></div>
    <div class="content">
      <p class="content-text"></p>
      <div class="content-dialog"></div>
      <div class="content-button"></div>
    </div>
    <div class="bottomImage"></div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
this.$store.dispatch("terminateBackgroundAudio");
        this.$store.dispatch(
          "setBackgroundAudioSource",
          `${process.env.BASE_URL}assets/sound/파도소리_배소리.mp3`
        );
        this.$store.dispatch("playBackgroundAudio");