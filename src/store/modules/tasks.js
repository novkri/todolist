import axios from 'axios'

const api = process.env.VUE_APP_BASE_API

const state = () => ({
  tasks: [],
  currentTodo: {},
  error: ''
})

const getters = {
  allTasks: state => state.tasks,
  allCurrentTodoTasks: state => state.tasks.filter(task => task.todoId === state.currentTodo.id),
  allCurrentTasksLength: (state, getters) => getters.allCurrentTodoTasks.length,
  doneTasks: (state, getters) => getters.allCurrentTodoTasks.filter(task => task.done),
  doneTasksLength: (state, getters) => getters.doneTasks.length,
  tasksError: state => state.error,
  currentTodo: state => state.currentTodo
}

const actions = {
  async fetchTasks({ commit }) {
    // commit('setCurrentTodoId', payload)

    try {
      commit('setError', '')
      const response = await axios.get(`${api}/tasks`)
      commit('setTasks', response.data)
    } catch(e) {
      commit('setError', e)
      console.log(e);
      // commit('setCurrentTodoId', '')
    }
  },

  async fetchCurrentTodo({ commit }, id) {
    try {
      commit('setError', '')
      const response = await axios.get(`${api}/todos/${id}`)
      commit('setCurrentTodo', response.data)
    } catch (e) {
      commit('setError', e)
      console.log(e);
      commit('setCurrentTodo', '')
    }
  },

  async addTask({ commit }, newTask) {
    const response = await axios.post(`${api}/tasks`, newTask)
    commit('addNewTask', response.data)
  }
}

const mutations = {
  setCurrentTodo: (state, todo) => (state.currentTodo = todo),
  setTasks: (state, tasks) => (state.tasks = tasks),
  addNewTask: (state, task) => state.tasks.push(task)
}

export default {
  state,
  getters,
  actions,
  mutations
}