import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SoureContent from '../views/SoureContent.vue'
import PageNotFound from '../views/Pagenotfound.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home' ,
      component: Home
    },
    {
      path: '/sura/:id',
      beforeEnter(to, from, next) {
        if (+to.params.id > 114) {
          next('/error')
        } else {
          next()
        }
      },
      component: SoureContent
    },
    {
      path: '/:catchall(.*)*',
      name: 'PageNotFound' ,
      component: PageNotFound
    }
  ]
})

export default router
// {
//   path: '/',
//   name: 'home',
//   component: HomeView
// }