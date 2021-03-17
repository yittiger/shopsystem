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

router.beforeEach((to, from, next) => {
  const token = window.sessionStorage.getItem('token')
  if(to.path === '/login' || token){
    next()
  }else{
    next('/login')
  }
  next()
})

export default router
