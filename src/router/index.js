import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from "../components/TodoList";
import TasksList from "../components/TasksList";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TodoList,
    children: [
      {
        path: "todo/:id",
        components: { tasks: TasksList },
        name: "tasks"
      }
    ]
  },

  // {
  //   path: '/todo/:id',
  //   name: 'TaskList',
  //   component: () => import('../views/TasksList.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
