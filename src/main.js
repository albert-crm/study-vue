import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Vue.directive("focus", {
//   inserted(el) {
//     console.log(el);
//     el.focus();
//   },
// });

// Vue.directive("focus", {
//   inserted(el) {
//     console.log(el);
//     el.focus();
//   },
// });

new Vue({
  render: (h) => h(App),
}).$mount("#app");
