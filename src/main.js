import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'

import "tailwindcss/tailwind.css"

Vue.config.productionTip = false
// Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
