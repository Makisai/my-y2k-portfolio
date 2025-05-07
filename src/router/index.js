import { createRouter, createWebHistory } from 'vue-router'
import MyHome from '../views/MyHome.vue'
import MyCosplay from '../views/MyCosplay.vue'
import MyCode from '../views/MyCode.vue'
import MyArt from '../views/MyArt.vue'
import MyTravel from '../views/MyTravel.vue'
import MyPnP from '../views/MyPnP.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyHome,
    },
    {
      path: '/cosplay',
      name: 'cosplay',
      component: MyCosplay,
    },
    {
      path: '/code',
      name: 'code',
      component: MyCode,
    },
    {
      path: '/art',
      name: 'art',
      component: MyArt,
    },
    {
      path: '/travel',
      name: 'travel',
      component: MyTravel,
    },
    {
      path: '/p&p',
      name: 'p&p',
      component: MyPnP,
    },
  ],
})

export default router
