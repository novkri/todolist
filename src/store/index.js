import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import tasks from './modules/tasks'
import user from './modules/user'

Vue.use(Vuex)
// const API_URL = 'http://localhost:3000';

export default new Vuex.Store({
  modules: {
    todos,
    tasks,
    user,
  },
})