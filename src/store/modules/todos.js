import axios from 'axios'

const api = process.env.VUE_APP_BASE_API

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
console.log('fetchTodos');
    try {
      commit('setError', '')
      
      const response = await axios.get(`${api}/todos`)

      commit('setTodos', response.data)
    } catch(e) {
      commit('setError', e)
      console.log(e);
    }
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(`${api}/todos`, { title })

    commit('addNewTodo', response.data)
  }
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  setError: (state, error) => (state.error = error),
  addNewTodo: (state, todo) => state.todos.push(todo),
}

export default {
  state,
  getters,
  actions,
  mutations
}