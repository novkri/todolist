import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo'
const Tasks = () => import('../views/Tasks')
import LoginForm from '../views/auth/LoginForm'
import RegisterForm from '../views/auth/RegisterForm'

// import store from './store.js'

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
    ],
    meta: { 
      requiresAuth: true
    }
  },

  {
    path: '/login',
    name: 'login',
    component: LoginForm //() => import('../views/auth/LoginForm')
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterForm //() => import('../views/auth/RegisterForm')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.matched.some(record => record.meta.requiresAuth));
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/login',
        // params: { nextUrl: to.fullPath }
      })
      // return
    } else {
      // let user = JSON.parse(localStorage.getItem('user'))
      next()
    }
  } 

  next()
})

export default router
