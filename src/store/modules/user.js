import axios from 'axios'
import Vue from "vue"

const api = process.env.VUE_APP_BASE_API

const state = () => ({
  // todos: [],
  // currentTodo: {},
  userError: '',


  // user: null
  status: '',
  token: localStorage.getItem('token') || '',
  user : {}

})

const getters = {
  // user: state => state.user,
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  userError: state => state.userError
}

const actions = {
  async register({ commit }, userObj) {
    try {
      commit('setError', '')

      console.log(userObj);
      const response = await axios.post(`${api}/users`, { ...userObj })
      console.log(response);






      const token = response.data.token
      const user = response.data.user

      localStorage.setItem('token', token)
      // axios.defaults.headers.common['Authorization'] = token
      // //////localStorage.setItem('user',JSON.stringify(response.data.user)) ?


      commit('setUser', token, user)

    } catch (e) {
      commit('setError', e.message)
      Vue.$vToastify.error(e.message, "Что-то пошло не так")
      localStorage.removeItem('token')
    }
  },

  async login({ commit }, userObj) {
    try {
      commit('setError', '')

      console.log(userObj);
      // const response = await axios.post(`${api}/users`)


      // temp
      const response = await axios.get(`${api}/users`)
      const result = response.data.filter(u => u.email === userObj.email)[0]
      //temp

      console.log(result);

      const token = 12345 //response.data.token
      // const user = response.data.user



      localStorage.setItem('token', token)
      // axios.defaults.headers.common['Authorization'] = token
      // //////localStorage.setItem('user',JSON.stringify(response.data.user)) ?


      commit('setUser', {token, user: result}) //user)

      // let result = response.data.filter(u => u.email === userObj.email)[0]
      // console.log(result);
    } catch (e) {
      commit('setError', e.message)
      Vue.$vToastify.error(e.message, "Что-то пошло не так")
      localStorage.removeItem('token')
    }
  },

  logout({ commit }) {
    commit('logout')
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
  }
}

const mutations = {
  setUser: (state, { token, user }) => {
    console.log(user, 'success');
    state.token = token
    state.user = user
  },

  logout: state => {
    state.status = ''
    state.token = ''
  },

  // setUser: (state, user) => state.user = user,
  setError: (state, error) => state.userError = error,
}

export default {
  state,
  getters,
  actions,
  mutations
}