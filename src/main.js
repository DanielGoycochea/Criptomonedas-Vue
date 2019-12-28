import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import {dolarFilter, percentFilters} from '@/filters'

import router from "@/router";
Vue.filter ('dolar', dolarFilter);
Vue.filter ('percent',percentFilters)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
