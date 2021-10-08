import { createRouter, createWebHashHistory } from 'vue-router'
import login from '/src/view/login.vue'
import myHome from '/src/view/myHome.vue'
import searchResultAll from '/src/view/searchResultAll.vue'
import searchOrganization from '/src/view/searchOrganization.vue'
import searchDiKnowledge from '/src/view/searchDiKnowledge.vue'
import searchPreavoids from '/src/view/searchPreavoids.vue'
import searchNotice from '/src/view/searchNotice.vue'
import searchBulletinBoard from '/src/view/searchBulletinBoard.vue'
import notFound from '/src/view/notFound.vue'
import error from '/src/view/error.vue'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: login,
    },
    {
        path: '/myHome',
        name: 'myHome',
        component: myHome,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
    }, {
        path: '/searchResultAll',
        name: 'searchResultAll',
        component: searchResultAll,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
    }, {
        path: '/searchOrganization',
        name: 'searchOrganization',
        component: searchOrganization,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
    }, {
        path: '/searchDiKnowledge',
        name: 'searchDiKnowledge',
        component: searchDiKnowledge,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
    }, {
        path: '/searchPreavoids',
        name: 'searchPreavoids',
        component: searchPreavoids,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
    }, {
        path: '/searchNotice',
        name: 'searchNotice',
        component: searchNotice,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
    }, {
        path: '/searchBulletinBoard',
        name: 'searchBulletinBoard',
        component: searchBulletinBoard,
        meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        }
    }, {
        path: '/error',
        name: 'error',
        component: error,

    }
    ,
    { path: '/:path(.*)', component: notFound },
]




const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
})

router.beforeEach((to, from, next) => {

    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        // setTimeout(()=>{
        if (localStorage.getItem('token')) {  // localStorage获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/login',
                // query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
        // },10000)
    }
    else {
        next();
    }
})

export default router
