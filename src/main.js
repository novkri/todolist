import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "tailwindcss/tailwind.css"
import VueToastify from "vue-toastify"
import Vuelidate from 'vuelidate'


Vue.use(Vuelidate)
Vue.use(VueToastify);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
