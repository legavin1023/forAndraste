import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    audio: new Audio(),
    isPlaying: false,
    shouldTerminate: false,
    volume: 1.0,
  },
  mutations: {
    setVolume(state, volume) {
      state.volume = volume;
      state.audio.volume = volume;
    },
    SET_AUDIO_SOURCE(state, src) {
      state.audio.src = src;
    },
    PLAY_AUDIO(state) {
      state.audio.play();
      state.isPlaying = true;
    },
    PAUSE_AUDIO(state) {
      state.audio.pause();
      state.isPlaying = false;
    },
    TERMINATE_AUDIO(state) {
      state.audio.pause();
      state.audio.currentTime = 0; // 오디오 위치 초기화
      state.audio.src = ""; // 오디오 소스 제거
      state.isPlaying = false;
      state.shouldTerminate = true;
    },
  },
  actions: {
    setAudioSource({ commit }, src) {
      commit("SET_AUDIO_SOURCE", src);
    },
    playAudio({ commit }) {
      commit("PLAY_AUDIO");
      console.log("나옴");
    },
    pauseAudio({ commit }) {
      commit("PAUSE_AUDIO");
    },
    terminateAudio({ commit }) {
      commit("TERMINATE_AUDIO");
    },
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
  },
});
