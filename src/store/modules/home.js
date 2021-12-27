import axios from 'axios'
import serve from '../../service/api'
export default {
    state: () => ({
        noticeInfo: [],
        bulletinBoardInfo: [],
        bbsDropDownInfo: [],
        scientifiSocietyInfo: [],
        pmdaInfo: [],
        managementInfo: [],
        managementItemList: [],
        managementItemUserList: [],
    }),

    getters: {
        topNoticeInfo(state) {
            return state.noticeInfo
        },
        topBulletinBoardInfo(state) {
            return state.bulletinBoardInfo
        },
        bbsDropDownInfo(state) {
            return state.bbsDropDownInfo
        },
        topScientifiSocietyInfo(state) {
            return state.scientifiSocietyInfo
        },
        topPMDAInfo(state) {
            return state.pmdaInfo
        },
        // management
        topManagementInfo(state) {
            return state.managementInfo
        },
        // managementGroup
        topManagementItemList(state) {
            const managementItemList = [
                { title: '所属内DI 記録', itemStyle: 'title', routerPath: '/myData/org'},
                { title: '症例', itemStyle: 'title', routerPath: '/myData/pvd' },
                { title: '掲示板', itemStyle: 'title', routerPath: '/myData/bbs' },
                { title: '下書き一覧', itemStyle: 'title', routerPath: '/myData/list' },
            ]

            return managementItemList
        },
    },

    mutations: {
        setTopNotice(state, info) {
            state.noticeInfo = info
        },
        setTopBulletinboardinfo(state, info) {
            state.bulletinBoardInfo = info
        },
        setBBSDropDowninfo(state, info) {
            state.bbsDropDownInfo = info
        },
        setTopScientifisocietyInfo(state, info) {
            state.scientifiSocietyInfo = info
        },
        setTopPmda(state, info) {
            state.pmdaInfo = info
        },
        setTopManagementInfo(state, info) {
            state.managementInfo = info
        },
    },

    actions: {
        async getTopNotice({ rootState, commit }, code) {
            commit('setTopNotice', {})
            const info = await serve.getTopNoticel(code)
            if (!!info) {
                commit('setTopNotice', info.data)
            }
        },
        async getTopBulletinBoardInfo({ rootState, commit }, code) {
            commit('setTopBulletinboardinfo', {})
            const info = await serve.getTopBulletinBoard(code)
            if (!!info) {
                commit('setTopBulletinboardinfo', info.data)
            }
        },
        async getBBSDropDowninfo({ rootState, commit }, code) {
            commit('setBBSDropDowninfo', {})
            const tags = await serve.getTagsMaster(code)

            const bbsDropDowninfo = {
                tags: tags,
            }
            commit('setBBSDropDowninfo', bbsDropDowninfo)
        },
        getTopManagementInfo({ rootState, commit }, info) {
            // const info = await serve.getManagementInfo(code)
            commit('setTopManagementInfo', info.data)
        },
        async getScientifiSocietyInfo({ rootState, commit }) {
            const info = await serve.getTopScientifiSociety()
            commit('setTopScientifisocietyInfo', info.data)
        },
        setTopScientifiSociety({ rootState, commit }, info) {
            commit('setTopScientifisocietyInfo', info)
        },
        async getTopPMDA({ rootState, commit }) {
            const info = await serve.getTopPMDA()
            commit('setTopPmda', info.data)
        },
    },
}
