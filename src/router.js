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
            name: 'home',
            component: About
        },
        {
            path: '/cataloge/shaft',
            name: 'shaft',
            component: () => import('./views/cataloge/Shaft')
        },
        {
            path: '/cataloge/sleeve',
            name: 'sleeve',
            component: () => import('./views/cataloge/Sleeve')
        },
        {
            path: '/cataloge/nut',
            name: 'nut',
            component: () => import('./views/cataloge/Nut')
        },
        {
            path: '/cataloge/geometry',
            name: 'geometry',
            component: () => import('./views/cataloge/Geometry')
        },
        {
            path: '/cataloge/clamp',
            name: 'clamp',
            component: () => import('./views/cataloge/Clamp')
        },
        {
            path: '/cataloge/cartridge',
            name: 'cartridge',
            component: () => import('./views/cataloge/Cartridge')
        },
        {
            path: '/cataloge/coil',
            name: 'coil',
            component: () => import('./views/cataloge/Coil')
        },
        {
            path: '/cataloge/wheel',
            name: 'wheel',
            component: () => import('./views/cataloge/Wheel')
        },
        {
            path: '/cataloge/ring',
            name: 'ring',
            component: () => import('./views/cataloge/Ring')
        },
        {
            path: '/cataloge/ringrubber',
            name: 'ringrubber',
            component: () => import('./views/cataloge/Ringrubber')
        },
        {
            path: '/cataloge/gasketset',
            name: 'gasketset',
            component: () => import('./views/cataloge/Gasketset')
        },
        {
            path: '/cataloge/body',
            name: 'body',
            component: () => import('./views/cataloge/Body')
        },
        {
            path: '/cataloge/cap',
            name: 'cap',
            component: () => import('./views/cataloge/Cap')
        },
        {
            path: '/cataloge/gasket',
            name: 'gasket',
            component: () => import('./views/cataloge/Gasket')
        },
        {
            path: '/cataloge/tread',
            name: 'tread',
            component: () => import('./views/cataloge/Tread')
        },
        {
            path: '/cataloge/kit',
            name: 'kit',
            component: () => import('./views/cataloge/Kit')
        },
        {
            path: '/cataloge/snail',
            name: 'snail',
            component: () => import('./views/cataloge/Snail')
        },
        {
            path: '/cataloge/thrustbearing',
            name: 'thrustbearing',
            component: () => import('./views/cataloge/Thrustbearing')
        },
        {
            path: '/cataloge/retainer',
            name: 'retainer',
            component: () => import('./views/cataloge/Retainer')
        },
        {
            path: '/cataloge/washer',
            name: 'washer',
            component: () => import('./views/cataloge/Washer')
        },
        {
            path: '/cataloge/screen',
            name: 'screen',
            component: () => import('./views/cataloge/Screen')
        }
    ]
})
