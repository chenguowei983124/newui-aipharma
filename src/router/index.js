import { createRouter, createWebHashHistory } from 'vue-router'
import myHome from '/src/view/myHome.vue'

const routes = [
    {
        path: '/',
        name: 'myHome',
        component: myHome,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router
