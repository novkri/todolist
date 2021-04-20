// const state = () => ({
//   tasks: [],
//   currentTodoId: '',
//   error: ''
// })

// const getters = {
//   allTasks: state => state.tasks,
//   allCurrentTodoTasks: state => state.tasks.filter(task => task.todoId === state.currentTodoId),
//   allCurrentTasksLength: (state, getters) => getters.allCurrentTodoTasks.length,
//   doneTasks: (state, getters) => getters.allCurrentTodoTasks.filter(task => task.done),
//   doneTasksLength: (state, getters) => getters.doneTasks.length,
//   tasksError: state => state.error
// }

// const actions = {
//   async fetchTasks({ commit }, payload) {
//     commit('setCurrentTodoId', payload)

//     try {
//       commit('setError', '')

//       const response = await axios.get(`${api}/tasks`)

//       commit('setTasks', response.data)
//     } catch(e) {
//       commit('setError', e)
//       console.log(e);
//       commit('setCurrentTodoId', '')
//     }
//   },

//   async addTask({ commit }, newTask) {
//     const response = await axios.post(`${api}/tasks`, newTask)

//     commit('addNewTask', response.data)
//   }
// }

// const mutations = {
//   setCurrentTodoId: (state, id) => (state.currentTodoId = id),
//   setTasks: (state, tasks) => (state.tasks = tasks),
//   addNewTask: (state, task) => state.tasks.push(task)
// }

// export default {
//   state,
//   getters,
//   actions,
//   mutations
// }