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
        setBBSDropDowninfo(state, info) {
            state.bbsDropDownInfo = info
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
            const scops = [
                { value: '0', title: '全体' },
                { value: '1', title: '組織' },
                { value: '2', title: 'グループ' },
            ]
            const genre_Info = [
                { value: 'notice', title: '告知' },
                { value: 'event', title: 'イベント' },
                { value: 'other', title: 'その他' },
            ]
            const genre_BBS = [
                { value: 'notice', title: '告知' },
                { value: 'event', title: 'イベント' },
                { value: 'query', title: '質問' },
                { value: 'questionnaire', title: 'アンケート' },
                { value: 'other', title: 'その他' },
            ]
            const bbsDropDowninfo = {
                tags: tags,
                scops: scops,
                genre_Info: genre_Info,
                genre_BBS: genre_BBS,
            }
            // console.log('setBBSDropDowninfo', bbsDropDowninfo)
            commit('setBBSDropDowninfo', bbsDropDowninfo)
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
