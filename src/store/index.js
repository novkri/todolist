import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import tasks from './modules/tasks'
// import popup from './modules/popup'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPopupOpen: false,
    popup: {}
  },

  getters: {
    popupContent: state => state.popup,
    isPopupOpen: state => state.isPopupOpen
  },

  actions: {
    popupContent({ commit }, content) {
      commit('setPopupContent', content)
    },
    openPopup({ commit }) {
      commit('setPopupOpen')
    },
    closePopup({ commit }) {
      commit('setPopupClose')
      commit('clearPopupContent')
    },
    confirmAction({ commit, dispatch }, {actionToDispatch, data}) {
      console.log('here');
      dispatch(actionToDispatch, data)
      commit('setPopupClose')
      commit('clearPopupContent')
    },
    // cancelAction({ commit }) {}
  },

  mutations: {
    setPopupClose: state => state.isPopupOpen = false,
    setPopupOpen: state => state.isPopupOpen = true,
    setPopupContent: (state, content) => state.popup = content,
    clearPopupContent: state => state.popup = {}
  },

  modules: {
    todos,
    tasks,
    // popup
  },
})