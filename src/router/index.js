import { createRouter, createWebHashHistory } from 'vue-router'
import myHome from '/src/view/myHome.vue'
//import Home from '/src/components/Home.vue'
import About from '/src/components/About.vue'
import vTable from '/src/components/vTable.vue'
import fonts from '/src/components/tailwindTest/fonts.vue'
import select from '/src/components/tailwindTest/select.vue'
import FILTERS from '/src/components/tailwindTest/FILTERS.vue'
import Borders from '/src/components/tailwindTest/Borders.vue'
import pm from '/src/components/tailwindTest/padding_margin.vue'
const routes = [
    {
        path: '/',
        name: 'myHome',
        component: myHome,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/vTable',
        name: 'vTable',
        component: vTable,
    },
    {
        path: '/fonts',
        name: 'fonts',
        component: fonts,
    },
    {
        path: '/select',
        name: 'select',
        component: select,
    }, {
        path: '/FILTERS',
        name: 'FILTERS',
        component: FILTERS,
    }, {
        path: '/Borders',
        name: 'Borders',
        component: Borders,
    }, {
        path: '/pm',
        name: 'pm',
        component: pm,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router
