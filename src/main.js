import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import reset from "@/assets/css/reset.css";
import index from "@/assets/scss/index.scss";
import "animate.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  reset,
  index,
  render: (h) => h(App),
}).$mount("#app");
