import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'cityinfo',
      meta: {
        keepAlive: true
      },
      component: Index
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/search'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/submenu',
      name: 'submenu',
      component: () => import('./components/menu.vue')
    }
  ]
})
