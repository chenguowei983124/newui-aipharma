import { createRouter, createWebHashHistory } from 'vue-router'
import myHome from '/src/view/myHome.vue'
import searchResultAll from '/src/view/searchResultAll.vue'
import carouselVertical from '../components/searchResult/carouselVertical.vue'
import test from '../components/test.vue'
const routes = [
    {
        meta: {
            title: 'HOME'
        },
        path: '/',
        name: 'myHome',
        component: myHome,
    }, {
        path: '/searchResultAll',
        name: 'searchResultAll',
        component: searchResultAll,
    }, {
        path: '/carouselVertical',
        name: 'carouselVertical',
        component: carouselVertical,
    }, {
        path: '/test',
        name: 'test',
        component: test,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
})


export default router
