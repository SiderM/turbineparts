import Vue from 'vue'
import Router from 'vue-router'
import Instructions from './views/Instructions.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Instructions
        },
        {
            path: '/body',
            name: 'body',
            component: () => import('./views/Body')
        }
    ]
})
