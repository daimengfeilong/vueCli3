import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: (resolve) => require(/* webpackChunkName: "about" */ ['../views/About.vue'], resolve)
  },
  {
    path: '/test',
    name: 'test',
    component: (resolve) => require(/* webpackChunkName: "about" */ ['../views/test/Test.vue'], resolve)
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: (resolve) => require(/* webpackChunkName: "about" */ ['../views/tabs/TabsMain.vue'], resolve)
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
