import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from "../components/Todo";
import Tasks from "../components/Tasks";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Todo,
    children: [
      {
        path: "todo/:id",
        components: { tasks: Tasks },
        name: "tasks"
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
