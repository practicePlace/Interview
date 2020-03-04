import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const Question = () => import(/* webpackChunkName: "Test" */ '../views/question/index.vue')
const Q29 =  () => import(/* webpackChunkName: "Q29" */ '../views/question/29.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/question',
    name: 'Question',
    component: Question
  },
  {
    path: '/29',
    name: '29',
    component: Q29
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
