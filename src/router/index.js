import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogSingle from "../views/BlogSingle"
import ServicesCreative from "../views/services-creative"
import ServicesTechnical from "../views/services-technical"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/creative-services',
    name: 'Creative',
    component: ServicesCreative
  },
  {
    path: '/technical-services',
    name: 'Technical',
    component: ServicesTechnical
  },
  {
    path: '/blogs/:slug',
    name: 'Blogs',
    component: BlogSingle
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
