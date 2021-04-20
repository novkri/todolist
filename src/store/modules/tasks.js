import axios from 'axios'

const state = () => ({
  tasks: [],
  currentTodoId: '',
  error: ''
})

const getters = {
  allTasks: state => state.tasks,
  allCurrentTodoTasks: state => state.tasks.filter(task => task.todoId === state.currentTodoId),
  allCurrentTasksLength: (state, getters) => getters.allCurrentTodoTasks.length,
  doneTasks: (state, getters) => getters.allCurrentTodoTasks.filter(task => task.done),
  doneTasksLength: (state, getters) => getters.doneTasks.length,
  tasksError: state => state.error
}

const actions = {
  async fetchTasks({ commit }, payload) {
    commit('setCurrentTodoId', payload)
    try {
      commit('setError', '')

      // http://localhost:3000/todos to const ?
      const response = await axios.get('http://localhost:3000/tasks')

      commit('setTasks', response.data)
    } catch(e) {
      commit('setError', e)
      console.log(e);
      commit('setCurrentTodoId', '')
    }
  }
}

const mutations = {
  setCurrentTodoId: (state, id) => (state.currentTodoId = id),
  setTasks: (state, tasks) => (state.tasks = tasks)
}

export default {
  state,
  getters,
  actions,
  mutations
}