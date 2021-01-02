import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cap from "./views/Cap";
import Body from "./views/Body";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About')
    },
    {
      path: '/cap',
      name: 'cap',
      component: Cap
    },
    {
      path: '/body',
      name: 'body',
      component: Body
    },
    {
      path: '/cartridge',
      name: 'cartridge',
      component: () => import('./views/Cartridge')
    }
  ]
})
