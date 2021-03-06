import axios from 'axios'
import Vue from "vue"
import {BASE_API_URL as api} from '../../api'


const state = () => ({
  tasks: [],
  taskError: ''
})

const getters = {
  allCurrentTodoTasks: state => state.tasks.sort((a, b) => {
    return a.created_at > b.created_at ? -1 : 1
  }),
  allCurrentTasksLength: state => state.tasks.length,
  doneTasks: (state, getters) => getters.allCurrentTodoTasks.filter(task => task.is_completed),
  doneTasksLength: (state, getters) => getters.doneTasks.length,
  tasksError: state => state.taskError,
  checkIfTasksCompleted: (state, getters) => {
    if (getters.allCurrentTasksLength === getters.doneTasksLength) {
      return true
    } else {
      return false
    }
  }
}

const actions = {
  async fetchTasks({ commit }, id) {
    try {
      commit('setTaskError', '')
      const response = await axios.get(`${api}/task/get-items`)

      let currTasks = response.data.data.items.filter(task => task.list_id === id)
      commit('setTasks', currTasks)
    } catch(e) {
      commit('setTaskError', e.message)
      Vue.$vToastify.error(e.message, "Что-то пошло не так")
    }
  },

  async addTask({ commit }, newTask) {

    try {
      commit('setTaskError', '')
      const response = await axios.post(`${api}/task/create`, {attributes: newTask})

      commit('addNewTask', response.data.data.attributes)
    } catch (e) {
      commit('setTaskError', e.message)
      Vue.$vToastify.error(e.message, "Что-то пошло не так")
    }
    
  },

  async deleteTask({ commit }, taskId) {
    try {
      commit('setTaskError', '')
      await axios.delete(`${api}/task/delete/${taskId}`)
      commit('deleteOneTask', taskId)
    } catch (e) {
      commit('setTaskError', e.message)
      Vue.$vToastify.error(e.message, "Что-то пошло не так")
    }
  },

  async toggleTaskCompletion({ commit }, task) {
    try {
      commit('setTaskError', '')
      await axios.put(`${api}/task/update/${task.id}`, {attributes: task})
    } catch (e) {
      commit('setTaskError', e.message)
      Vue.$vToastify.error(e.message, "Что-то пошло не так")
    }
  },
}

const mutations = {
  setTaskError: (state, error) => state.taskError = error,
  setTasks: (state, tasks) => state.tasks = tasks,
  addNewTask: (state, task) => state.tasks.unshift(task),
  deleteOneTask: (state, taskId) => state.tasks = state.tasks.filter(task => task.id !== taskId),
}

export default {
  state,
  getters,
  actions,
  mutations
}