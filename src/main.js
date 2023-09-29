import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createApp } from "vue";
import "@/assets/css/reset.css";
import "@/assets/scss/index.scss";
import "animate.css";
import createGtm from "vue-gtm";

const app = createApp(App);

app.use(createGtm, {
  id: "GTM-TLP29MTB", // GTM 컨테이너 ID를 입력하세요
  enabled: true,
  debug: process.env.NODE_ENV !== "production",
  vueRouter: router, // Vue Router 인스턴스, 필요하면
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
