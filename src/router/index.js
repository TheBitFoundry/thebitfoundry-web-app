import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Team from '../views/Team.vue'
import Blog from '../views/Blog'
import BlogSingle from '../views/BlogSingle'
import ServicesCreative from '../views/Services-Creative'
import ServicesTechnical from '../views/Services-Technical'
import FoundryAerotechnical from '../views/Foundry-Aerotechnical'
import FoundryBlockchain from '../views/Foundry-Blockchain'
import FoundryCleanTech from '../views/Foundry-Clean-Tech'
import FoundryCreative from '../views/Foundry-Creative'
import FoundryScaleUp from '../views/Foundry-Scale-Up'
import FoundrySoftware from '../views/Foundry-Software'
import PortfolioPage from '../views/Portfolio'
import PortfolioItemTemplate from '../views/portfolio-items/Portfolio-Item-Template'
import AgapeLuxury from '../views/portfolio-items/Agape-Luxury'
import TyreDev from '../views/portfolio-items/Tyre-Dev'
import InstantECommerce from '../views/portfolio-items/Instant-eCommerce'
import Quick from '../views/portfolio-items/Quick';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioPage
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blogs/:slug',
    name: 'blogs',
    component: BlogSingle
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/creative-services',
    name: 'creative',
    component: ServicesCreative
  },
  {
    path: '/technical-services',
    name: 'technical',
    component: ServicesTechnical
  },
  {
    path: '/aerotechnical-foundry',
    name: 'aerotechnical',
    component: FoundryAerotechnical
  },
  {
    path: '/blockchain-foundry',
    name: 'blockchain',
    component: FoundryBlockchain,
  },
  {
    path: '/clean-tech-foundry',
    name: 'clean tech',
    component: FoundryCleanTech
  },
  {
    path: '/creative-foundry',
    name: 'creative',
    component: FoundryCreative
  },
  {
    path: '/scale-up-foundry',
    name: 'scale up',
    component: FoundryScaleUp
  },
  {
    path: '/software-foundry',
    name: 'software',
    component: FoundrySoftware
  },
  {
    path: '/portfolio/portfolio-item-template',
    name: 'portfolio item template',
    component: PortfolioItemTemplate
  },
  {
    path: '/portfolio/agape-luxury',
    name: 'agape luxury',
    component: AgapeLuxury
  },
  {
    path: '/portfolio/tyre-dev',
    name: 'tyre dev',
    component: TyreDev
  },
  {
    path: '/portfolio/instant-ecommerce',
    name: 'instant-ecommerce',
    component: InstantECommerce
  },
  {
    path: '/portfolio/quick',
    name: 'quick',
    component: Quick
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router

