import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/reset.css";
import "@/assets/scss/index.scss";
import "animate.css";
// import VueGtm from "vue-gtm";

// Vue.use(VueGtm, {
//   id: "GTM-TLP29MTB",
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
