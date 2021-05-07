import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import "tailwindcss/tailwind.css"
import VueToastify from "vue-toastify"
import Vuelidate from 'vuelidate'


Vue.use(Vuelidate)
Vue.use(VueToastify);
Vue.config.productionTip = false

const token = localStorage.getItem('token')

if (token) {
  console.log('here');
  // axios.defaults.headers.common['Authorization'] = token
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

// const headers  = {
//   "Accept": "*/*",
//   "Access-Control-Allow-Origin": "*",
//   "X-Requested-With": "XMLHttpRequest",
//   "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
//   "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
// }

// axios.defaults.headers.common = {...axios.defaults.headers.common, ...headers}


// axios.defaults.baseURL = 'https://api.example.com';


axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
