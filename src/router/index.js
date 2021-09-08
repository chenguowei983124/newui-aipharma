import { createRouter, createWebHashHistory } from 'vue-router'
import myHome from '/src/view/myHome.vue'
import searchResultAll from '/src/view/searchResultAll.vue'
import searchOrganization from '/src/view/searchOrganization.vue'



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
        path: '/searchOrganization',
        name: 'searchOrganization',
        component: searchOrganization,
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
