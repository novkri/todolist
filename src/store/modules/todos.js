import axios from 'axios'

const state = () => ({
  todos: [],
  error: ''
})

const getters = {
  allTodos: state => state.todos,
  todosError: state => state.error
}

const actions = {
  async fetchTodos({ commit }) {

    try {
      commit('setError', '')
      // http://localhost:3000/todos to const ?
      const response = await axios.get('http://localhost:3000/todos')

      commit('setTodos', response.data)
    } catch(e) {
      commit('setError', e)
      console.log(e);
    }
  }
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  setError: (state, error) => (state.error = error),
}

export default {
  state,
  getters,
  actions,
  mutations
}