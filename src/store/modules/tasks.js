import axios from 'axios'
import Vue from "vue"

const api = process.env.VUE_APP_BASE_API

const state = () => ({
  tasks: [],
  currentTodo: {},
  taskError: ''
})

const getters = {
  allTasks: state => state.tasks.sort((a, b) => {
    return a.created_at > b.created_at ? -1 : 1
  }),
  allCurrentTodoTasks: (state, getters) => getters.allTasks.filter(task => task.list_id === state.currentTodo.id),
  allCurrentTasksLength: (state, getters) => getters.allCurrentTodoTasks.length,
  doneTasks: (state, getters) => getters.allCurrentTodoTasks.filter(task => task.is_completed),
  doneTasksLength: (state, getters) => getters.doneTasks.length,
  tasksError: state => state.taskError,
  currentTodo: state => state.currentTodo,


  checkIfTasksCompleted: (state, getters) => {
    if (getters.allCurrentTasksLength === getters.doneTasksLength) {
      return true
    } else {
      return false
    }
  }
}

const actions = {
  async fetchTasks({ commit }) {
    try {
      commit('setTaskError', '')
      const response = await axios.get(`${api}/tasks`)
      commit('setTasks', response.data)
    } catch(e) {
      commit('setTaskError', e.message)
      Vue.$vToastify.error(e.message)
    }
  },

  async fetchCurrentTodo({ commit }, id) {
    try {
      commit('setTaskError', '')
      const response = await axios.get(`${api}/todos/${id}`)
      commit('setCurrentTodo', response.data)
    } catch (e) {
      commit('setTaskError', e.message)
      Vue.$vToastify.error(e.message)
      commit('setCurrentTodo', '')
    }
  },

  async addTask({ commit }, newTask) {
    try {
      commit('setTaskError', '')
      const response = await axios.post(`${api}/tasks`, newTask)
      commit('addNewTask', response.data)
    } catch (e) {
      commit('setTaskError', e.message)
      Vue.$vToastify.error(e.message)
    }
    
  },

  async deleteTask({ commit }, taskId) {
    try {
      commit('setTaskError', '')
      await axios.delete(`${api}/tasks/${taskId}`)
      commit('deleteOneTask', taskId)
    } catch (e) {
      commit('setTaskError', e.message)
      Vue.$vToastify.error(e.message)
    }
  },

  async toggleTaskCompletion({ commit }, task) {
    try {
      commit('setTaskError', '')
      const response = await axios.put(`${api}/tasks/${task.id}`, task)
      commit('setTaskComplete', response)
    } catch (e) {
      commit('setTaskError', e.message)
      Vue.$vToastify.error(e.message)
    }
  },
}

const mutations = {
  setTaskError: (state, error) => state.taskError = error,
  setCurrentTodo: (state, todo) => state.currentTodo = todo,
  setTasks: (state, tasks) => state.tasks = tasks,
  addNewTask: (state, task) => state.tasks.push(task),
  deleteOneTask: (state, taskId) => state.tasks = state.tasks.filter(task => task.id !== taskId),
  setTaskComplete: (state, task) => console.log(state, task),
}

export default {
  state,
  getters,
  actions,
  mutations
}