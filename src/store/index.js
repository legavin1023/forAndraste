import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backgroundAudio: new Audio(),
    effectAudio: new Audio(),
    isBackgroundPlaying: false,
    isEffectPlaying: false,
    shouldTerminate: false,
    volume: 1.0,
  },
  mutations: {
    setVolume(state, volume) {
      state.volume = volume;
      state.backgroundAudio.volume = volume;
      // state.effectAudio.volume = volume;
    },
    SET_BACKGROUND_AUDIO_SOURCE(state, src) {
      state.backgroundAudio.src = src;
    },
    PLAY_BACKGROUND_AUDIO(state) {
      state.backgroundAudio.play();
      state.isBackgroundPlaying = true;
    },
    PAUSE_BACKGROUND_AUDIO(state) {
      state.backgroundAudio.pause();
      state.isBackgroundPlaying = false;
    },
    TERMINATE_BACKGROUND_AUDIO(state) {
      state.backgroundAudio.pause();
      state.backgroundAudio.currentTime = 0;
      state.backgroundAudio.src = "";
      state.isBackgroundPlaying = false;
    },

    SET_EFFECT_AUDIO_SOURCE(state, src) {
      state.effectAudio.src = src;
    },
    PLAY_EFFECT_AUDIO(state) {
      state.effectAudio.play();
      state.isEffectPlaying = true;
    },
    PAUSE_EFFECT_AUDIO(state) {
      state.effectAudio.pause();
      state.isEffectPlaying = false;
    },
    TERMINATE_EFFECT_AUDIO(state) {
      state.effectAudio.pause();
      state.effectAudio.currentTime = 0;
      state.effectAudio.src = "";
      state.isEffectPlaying = false;
    },
  },
  actions: {
    setBackgroundAudioSource({ commit }, src) {
      commit("SET_BACKGROUND_AUDIO_SOURCE", src);
    },
    playBackgroundAudio({ commit }) {
      commit("PLAY_BACKGROUND_AUDIO");
    },
    pauseBackgroundAudio({ commit }) {
      commit("PAUSE_BACKGROUND_AUDIO");
    },
    terminateBackgroundAudio({ commit }) {
      commit("TERMINATE_BACKGROUND_AUDIO");
    },

    setEffectAudioSource({ commit }, src) {
      commit("SET_EFFECT_AUDIO_SOURCE", src);
    },
    playEffectAudio({ commit }) {
      commit("PLAY_EFFECT_AUDIO");
    },
    pauseEffectAudio({ commit }) {
      commit("PAUSE_EFFECT_AUDIO");
    },
    terminateEffectAudio({ commit }) {
      commit("TERMINATE_EFFECT_AUDIO");
    },
    //--------------------------------------------
    fadeOutAudio({ state, commit }) {
      let fadeOutInterval = setInterval(() => {
        let volume = state.volume - 0.05;
        if (volume <= 0) {
          commit("setVolume", 0);
          clearInterval(fadeOutInterval);
          commit("TERMINATE_AUDIO");
        } else {
          commit("setVolume", volume);
        }
      }, 200); // 200ms 간격으로 볼륨 감소
    },
    //--------------------------------------------

    playCorrectSound({ dispatch }) {
      dispatch(
        "setEffectAudioSource",
        `${process.env.BASE_URL}assets/sound/input_pass.mp3`
      ); // 정답 소리 파일 경로
      dispatch("playEffectAudio");
    },
    playWrongSound({ dispatch }) {
      dispatch(
        "setEffectAudioSource",
        `${process.env.BASE_URL}assets/sound/input_fail.mp3`
      ); // 오답 소리 파일 경로
      dispatch("playEffectAudio");
    },
    playNextSound({ dispatch }) {
      dispatch(
        "setEffectAudioSource",
        `${process.env.BASE_URL}assets/sound/btn_next.mp3`
      ); // 오답 소리 파일 경로
      dispatch("playEffectAudio");
    },
  },
});
