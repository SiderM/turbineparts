import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'about',
            component: About
        },
        {
            path: '/cataloge/:name',
            component: () => import('./views/Parts')
        }
    ]
})
