import { createRouter, createWebHashHistory } from 'vue-router'
import myHome from '/src/view/myHome.vue'
import searchResultAll from '/src/view/searchResultAll.vue'
import carouselVertical from '../components/seachResult/carouselVertical.vue'
const routes = [
    {
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
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router
