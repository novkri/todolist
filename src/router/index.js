import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo'
const Tasks = () => import('../views/Tasks')
// import LoginForm from '../components/auth/LoginForm'
// import RegisterForm from '../components/auth/RegisterForm'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Todo,
    children: [
      {
        path: "todo/:id",
        components: { tasks: Tasks },        
        name: "tasks"
      }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/LoginForm')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/auth/RegisterForm')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
