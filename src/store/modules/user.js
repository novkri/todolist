import axios from 'axios'
import Vue from "vue"
import {BASE_API_URL as api} from '../../api'


const state = () => ({
  userError: '',
  token: localStorage.getItem('token') || '',
  user: localStorage.getItem('user') || null
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
      await axios.post(`${api}/user/register`, {...userObj})
      Vue.$vToastify.success("", "Вы зарегистрированы!")
    } catch (e) {
      commit('setError', e.response.data.email)
      if(e.response.status === 404) {
        Vue.$vToastify.error('Ошибка 404', "Что-то пошло не так")
      } else {
        Vue.$vToastify.error("", "Email уже занят")
      }
    }
  },

  async login({ commit }, userObj) {
    try {
      commit('setError', '')
      const response = await axios.post(`${api}/user/login`, {...userObj})
      Vue.$vToastify.success("", "Добро пожаловать!")

      const token = response.data.data.access_token
      const user = JSON.stringify(userObj.email)

      
      localStorage.setItem('token', token)
      localStorage.setItem('user', user)

      commit('setUser', {token, user: userObj.email})
    } catch (e) {
      commit('setError', e.response.data.email)
      if(e.response.status === 404) {
        Vue.$vToastify.error('Ошибка 404', "Что-то пошло не так")
      } else {
        Vue.$vToastify.error('', "Неправильные Email или пароль")
      }
      
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