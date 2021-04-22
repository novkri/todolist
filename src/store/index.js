import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import tasks from './modules/tasks'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   isModalOpen: false,
  //   modal: {}
  // },

  // getters: {
  //   modalContent: state => state.Modal,
  //   isModalOpen: state => state.isModalOpen
  // },

  // actions: {
  //   modalContent({ commit }, content) {
  //     commit('setModalContent', content)
  //   },
  //   openModal({ commit }) {
  //     commit('setModalOpen')
  //   },
  //   closeModal({ commit }) {
  //     commit('setModalClose')
  //     commit('clearModalContent')
  //   },
  //   confirmAction({ commit, dispatch }, {actionToDispatch, data}) {
  //     dispatch(actionToDispatch, data)
  //     commit('setModalClose')
  //     commit('clearModalContent')
  //   },
  //   // cancelAction({ commit }) {}
  // },

  // mutations: {
  //   setModalClose: state => state.isModalOpen = false,
  //   setModalOpen: state => state.isModalOpen = true,
  //   setModalContent: (state, content) => state.Modal = content,
  //   clearModalContent: state => state.Modal = {}
  // },

  modules: {
    todos,
    tasks,
  },
})