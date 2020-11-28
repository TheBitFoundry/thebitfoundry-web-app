import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogSingle from "../views/BlogSingle"
import ServicesCreative from "../views/Services-Creative"
import ServicesTechnical from "../views/Services-Technical"
import FoundryAerotechnical from "../views/Foundry-Aerotechnical"
import FoundryBlockchain from "../views/Foundry-Blockchain"
import FoundryCleanTech from "../views/Foundry-Clean-Tech"
import FoundryCreative from "../views/Foundry-Creative"
import FoundryScaleUp from "../views/Foundry-Scale-Up"
import FoundrySoftware from "../views/Foundry-Software"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/aerotechnical-foundry',
    name: 'Aerotechnical',
    component: FoundryAerotechnical
  },
  {
    path: '/aerotechnical-foundry',
    name: 'Aerotechnical',
    component: FoundryAerotechnical
  },
  {
    path: '/blockchain-foundry',
    name: 'Blockchain',
    component: FoundryBlockchain
  },
  {
    path: '/clean-tech-foundry',
    name: 'Clean Tech',
    component: FoundryCleanTech
  },
  {
    path: '/creative-foundry',
    name: 'Creative',
    component: FoundryCreative
  },
  {
    path: '/scale-up-foundry',
    name: 'Scale Up',
    component: FoundryScaleUp
  },
  {
    path: '/software-foundry',
    name: 'Software',
    component: FoundrySoftware
  }
]

const router = new VueRouter({
  routes
})

export default router
