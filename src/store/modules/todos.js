import axios from 'axios'
import Vue from "vue"

const api = process.env.VUE_APP_BASE_API

const state = () => ({
  todos: [],
  todoError: '',
  filterName: 'all'
})

const getters = {  
  allTodos: state => state.todos.sort((a, b) => {
    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
  }),

  allFilteredTodos: (state, getters) => {    
    switch (state.filterName) {
      case 'not_completed':
        return getters.allTodos.filter(todo => !todo.is_completed)
      case 'completed':
        return getters.allTodos.filter(todo => todo.is_completed)
      default:
        return getters.allTodos
    }
  },
  
  todosError: state => state.todoError
}

const actions = {
  async fetchTodos({ commit }) {
    try {
      commit('setError', '')
      const response = await axios.get(`${api}/todos`)
      commit('setTodos', response.data)
    } catch(e) {
      commit('setError', e.message)
      Vue.$vToastify.error(e.message);
    }
  },

  async addTodo({ commit }, newTodoObj) {
    try {
      commit('setError', '')
      const response = await axios.post(`${api}/todos`, { ...newTodoObj })
      commit('addNewTodo', response.data)
    } catch(e) {
      commit('setError', e.message)
      Vue.$vToastify.error(e.message)
    }
  },

  filterTodos({ commit }, optionName) {
    commit('setFilteredTodos', optionName)
  },

  async deleteTodo({ commit }, todoId) {
    try {
      commit('setError', '')
      await axios.delete(`${api}/todos/${todoId}`)
      commit('deleteOneTodo', todoId)
    } catch (e) {
      commit('setError', e.message)
      Vue.$vToastify.error(e.message)
    }
  },

  async todoListCompleted({ commit }, { todo, setTo }) {
    try {
      commit('setError', '')
      await axios.put(`${api}/todos/${todo.id}`, {...todo, is_completed: setTo})
      commit('setTodoListCompleted', {todoId: todo.id, setTo})
    } catch (e) {
      commit('setError', e.message)
      Vue.$vToastify.error(e.message)
    }
  }
}

const mutations = {
  setTodos: (state, todos) => state.todos = todos,
  setFilteredTodos: (state, optionName) => state.filterName = optionName,
  setError: (state, error) => state.todoError = error,
  addNewTodo: (state, todo) => state.todos.push(todo),
  deleteOneTodo: (state, todoId) => state.todos = state.todos.filter(todo => todo.id !== todoId),
  setTodoListCompleted: (state, { todoId, setTo }) => {
    state.todos.filter(todo => todo.id === todoId)[0].is_completed = setTo
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}