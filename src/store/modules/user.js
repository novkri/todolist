import axios from 'axios'
import Vue from "vue"

const api = process.env.VUE_APP_BASE_API

const state = () => ({
  userError: '',
  token: localStorage.getItem('token') || '',
  user : null

})

const getters = {
  isLoggedIn: state => !!state.token,
  currentUser: state => state.user,
  userError: state => state.userError
}

const actions = {
  async register({ commit }, userObj) {
    try {
      commit('setError', '')

      // console.log(userObj);
      const response = await axios.post(`${api}/users`, { ...userObj })
      // console.log(response);




      const token = 12345 //response.data.token
      const user = response.data

      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(response.data)) // ?


      commit('setUser', token, user)

    } catch (e) {
      commit('setError', e.message)
      Vue.$vToastify.error(e.message, "Что-то пошло не так")
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  },

  async login({ commit }, userObj) {
    try {
      commit('setError', '')

      // console.log(userObj);

      // later
      // const response = await axios.post(`${api}/login`)


      // temp
      const response = await axios.get(`${api}/users`)
      const result = response.data.filter(u => u.email === userObj.email)[0]
      //temp

      // console.log(result);

      const token = 12345 //response.data.token
      // const user = response.data.user


      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(result)) //temp
      // localStorage.setItem('user', JSON.stringify(response.data)) // ?


      commit('setUser', {token, user: result}) //user)
    } catch (e) {
      commit('setError', e.message)
      Vue.$vToastify.error(e.message, "Что-то пошло не так")
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  },

  logout({ commit }) {
    commit('logout')
    delete axios.defaults.headers.common['Authorization']
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}

const mutations = {
  setUser: (state, { token, user }) => {
    state.token = token
    state.user = user
  },

  logout: state => {
    state.user = null
    state.token = ''
  },

  setError: (state, error) => state.userError = error,
}

export default {
  state,
  getters,
  actions,
  mutations
}