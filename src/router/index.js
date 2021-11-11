import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import login from '/src/view/login.vue'
import sendResetPasswordMail from '/src/view/sendResetPasswordMail.vue'
import sendResetPassword from '/src/view/sendResetPassword.vue'
import setPassword from '/src/view/setPassword.vue'
import myHome from '/src/view/myHome.vue'
import notification from '/src/view/notification.vue'
import searchResultAll from '/src/view/searchResultAll.vue'
import searchOrganization from '/src/view/searchOrganization.vue'
import searchDiKnowledge from '/src/view/searchDiKnowledge.vue'
import searchPreavoids from '/src/view/searchPreavoids.vue'
import searchBulletinBoard from '/src/view/searchBulletinBoard.vue'
import newOrgDIRecord from '/src/view/newOrgDIRecord.vue'
import newBbsRecord from '/src/view/newBbsRecord.vue'
import notFound from '/src/view/notFound.vue'
import error from '/src/view/error.vue'
import Redirect from '/src/view/Redirect.vue'

const routes = [
    // ログイン　画面
    {
        path: '/',
        redirect: '/login',
    },
    // OIDC 認証
    {
        path: '/redirect',
        name: 'redirect',
        component: Redirect,
    },
    // ログイン
    {
        path: '/login',
        name: 'login',
        component: login,
    },
    // メール　送信
    {
        path: '/sendResetPasswordMail',
        name: 'sendResetPasswordMail',
        component: sendResetPasswordMail,
    },
    // パスワード　再設定
    {
        path: '/sendResetPassword',
        name: 'sendResetPassword',
        component: sendResetPassword,
    },
    //　パスワード　初回設定
    {
        path: '/setPassword',
        name: 'setPassword',
        component: setPassword,
    },
    // トップ　画面
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
    // 一括検索
    {
        path: '/searchResultAll',
        name: 'searchResultAll',
        component: searchResultAll,
        meta: {
            requireAuth: true,
        },
    },
    // 組織内DI 記録（Q&A）
    {
        path: '/searchOrganization',
        name: 'searchOrganization',
        component: searchOrganization,
        meta: {
            requireAuth: true,
        },
    },
    // DI ナレッジシェア
    {
        path: '/searchDiKnowledge',
        name: 'searchDiKnowledge',
        component: searchDiKnowledge,
        meta: {
            requireAuth: true,
        },
    },
    // 症例（プレアボイド）
    {
        path: '/searchPreavoids',
        name: 'searchPreavoids',
        component: searchPreavoids,
        meta: {
            requireAuth: true,
        },
    },
    // 掲示板画面
    {
        path: '/searchBulletinBoard',
        name: 'searchBulletinBoard',
        component: searchBulletinBoard,
        meta: {
            requireAuth: true,
        },
    },
    // 組織内DI 記録（Q&A）登録
    {
        path: '/newOrgDIRecord',
        name: 'newOrgDIRecord',
        component: newOrgDIRecord,
        meta: {
            requireAuth: true,
        },
    },
    // 掲示板 登録
    {
        path: '/newBbsRecord',
        name: 'newBbsRecord',
        component: newBbsRecord,
        meta: {
            requireAuth: true,
        },
    },
    // エラー 画面
    {
        path: '/error',
        name: 'error',
        component: error,
    },
    // 404 画面
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
