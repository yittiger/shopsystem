import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

const Login = () => import('pages/login/Login')
const Home = () => import('pages/home/Home')

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
