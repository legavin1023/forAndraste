import Vue from "vue";

import VueGtm from "vue-gtm";

Vue.use(VueGtm, {
  id: "GTM-TLP29MTB", // GTM 컨테이너 ID를 입력하세요
  enabled: true,
  debug: true,
  vueRouter: router, // Vue Router 인스턴스, 필요하면
});
// Google Analytics 스크립트 초기화
Vue.prototype.$gtag = window.gtag = function () {
  window.dataLayer.push(arguments);
};
window.dataLayer = window.dataLayer || [];
window.gtag("js", new Date());
window.gtag("config", "G-QCVE085BGW"); // 여기에 Google Analytics 추적 ID를 입력하세요.

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/reset.css";
import "@/assets/scss/index.scss";
import "animate.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
