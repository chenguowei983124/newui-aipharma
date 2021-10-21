import axios from 'axios'
import serve from '../../service/api'
export default {
    state: () => ({
        noticeInfo: [],
        bulletinBoardInfo: [],
        bbsTagsInfo: [],
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
        bbsTagsInfo(state) {
            return state.bbsTagsInfo
        },
        topScientifiSocietyInfo(state) {
            return state.scientifiSocietyInfo
        },
        topPMDAInfo(state) {
            return state.pmdaInfo
        },
        // management
        topManagementInfo(state) {
            const managementInfo = {
                lastName: '木村',
                name: '木村 太郎',
                title: 'doctor',
                hospital: '◯◯◯◯◯◯大学病院',
                authority: '管 理 者',
            }

            return managementInfo
        },
        // managementGroup
        topManagementItemList(state) {
            const managementItemList = [
                { title: '組織内DI 記録', itemStyle: 'title' },
                { title: '症例', itemStyle: 'title' },
                { title: '下書き一覧', itemStyle: 'title' },
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
        setBbsTagsinfo(state, info) {
            state.bbsTagsInfo = info
        },
        setTopScientifisocietyInfo(state, info) {
            state.scientifiSocietyInfo = info
        },
        setTopPmda(state, info) {
            state.pmdaInfo = info
        },
    },

    actions: {
        async getTopNotice({ rootState, commit }, code) {
            commit('setTopNotice', {})
            commit('setBbsTagsinfo', {})
            const info = await serve.getTopNoticel(code)
            commit('setTopNotice', info.data)
            if (!!info.master && !!info.master.tags) {
                let taglist = []
                info.master.tags.map(tag => {
                    taglist.push(tag.name)
                })
                commit('setBbsTagsinfo', taglist)
            }
        },
        async getTopBulletinBoardInfo({ rootState, commit }, code) {
            const info = await serve.getTopBulletinBoard(code)
            commit('setTopBulletinboardinfo', info.data)
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
