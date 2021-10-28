import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import login from '/src/view/login.vue'
import myHome from '/src/view/myHome.vue'
import notification from '/src/view/notification.vue'
import bulletinBoard from '/src/view/bulletinBoard.vue'
import searchResultAll from '/src/view/searchResultAll.vue'
import searchOrganization from '/src/view/searchOrganization.vue'
import searchDiKnowledge from '/src/view/searchDiKnowledge.vue'
import searchPreavoids from '/src/view/searchPreavoids.vue'
import searchNotice from '/src/view/searchNotice.vue'
import searchBulletinBoard from '/src/view/searchBulletinBoard.vue'
import newOrgDIRecord from '/src/view/newOrgDIRecord.vue'
import newBbsRecord from '/src/view/newBbsRecord.vue'
import notFound from '/src/view/notFound.vue'
import error from '/src/view/error.vue'
import Redirect from '/src/view/Redirect.vue'

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/redirect',
        name: 'redirect',
        component: Redirect,
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
            requireAuth: true,
        },
    },
    // お知らせ画面
    {
        path: '/notification',
        name: 'notification',
        component: notification,
        meta: {
            requireAuth: true,
        },
    },
    // 掲示板画面
    {
        path: '/bulletinBoard',
        name: 'bulletinBoard',
        component: bulletinBoard,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/searchResultAll',
        name: 'searchResultAll',
        component: searchResultAll,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/searchOrganization/:id',
        name: 'searchOrganization',
        component: searchOrganization,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/searchOrganization',
        name: 'searchOrganization',
        component: searchOrganization,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/searchDiKnowledge',
        name: 'searchDiKnowledge',
        component: searchDiKnowledge,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/searchPreavoids',
        name: 'searchPreavoids',
        component: searchPreavoids,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/searchNotice',
        name: 'searchNotice',
        component: searchNotice,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/searchBulletinBoard',
        name: 'searchBulletinBoard',
        component: searchBulletinBoard,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/newOrgDIRecord',
        name: 'newOrgDIRecord',
        component: newOrgDIRecord,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/newBbsRecord',
        name: 'newBbsRecord',
        component: newBbsRecord,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/error',
        name: 'error',
        component: error,
    },
    {
        path: '/404',
        name: '404',
        component: notFound,
    },
    { path: '/:path(.*)', name: 'notfound', component: notFound },
]

const router = createRouter({
    mode: 'history',
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    },
})

router.beforeEach((to, from, next) => {
    if (sessionStorage.getItem('routerID')) {
        sessionStorage.setItem(
            'routerID',
            Number(sessionStorage.getItem('routerID')) + 1
        )
    } else {
        sessionStorage.setItem('routerID', 1)
    }

    if (to.meta.requireAuth) {
        // setTimeout(()=>{
        if (localStorage.getItem('token')) {
            // localStorageにtokenの存在チェック
            next()
        } else {
            next({
                path: '/login',
                // query: { redirect: to.fullPath }
            })
        }
        // },10000)
    } else {
        next()
    }
})

export default router
