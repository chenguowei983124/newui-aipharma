import axios from 'axios'
import serve from '../../service/api'
export default {
    state: () => ({
        organizationDateSort: [
            { "value": "0", "title": "最終編集日が新しい順" },
            { "value": "1", "title": "最終編集日が古い" },
            { "value": "2", "title": "Goodが多い順" },
            { "value": "3", "title": "Badが多い順" },
            { "value": "4", "title": "コメント数が多い順" },
            { "value": "5", "title": "コメント数が少ない順" },
            { "value": "6", "title": "Q&A-ID昇順" },
            { "value": "7", "title": "Q&A-ID降順" }
        ],
        organizationCountSort: [
            { "value": "0", "title": "20件 表示" },
            { "value": "1", "title": "50件 表示" },
            { "value": "2", "title": "100件 表示" }
        ],
        goodMessageBox: false,
        commentMessageBox: false,
        organizationSearchInfo: {},
        organizationSeartorenndoTab: {},
        isOrganizationSearch: false,
    }),

    getters: {
        getGoodMessageBox(state) {
            return state.goodMessageBox
        },
        getCommentMessageBox(state) {
            return state.commentMessageBox
        },
        getIsOrganizationSearch(state) {
            return state.isOrganizationSearch
        },
        organizationSearchInfo(state) {
            return state.organizationSearchInfo;
        },
        getOrganizationDateSort(state) {
            return state.organizationDateSort
        },
        getOrganizationCountSort(state) {
            return state.organizationCountSort
        }, getOrganizationSeartorenndoTab(state) {
            const organizationSeartorenndoTab = {
                "torenndoTab": ["ロキソニン", "ロキソ", "用途", "痛み止め", "ロキソニン", "ロキソ", "ロキソニン",
                    "ロキソ", "用途", "痛み止め", "ロキソニン", "ロキソ", "ロキソニン", "ロキソ",
                    "用途", "痛み止め", "ロキソニン", "ロキソ"]
            }
            return organizationSeartorenndoTab
        },
    },

    mutations: {
        basic(state, payload) {
            state[payload.key] = payload.value
            // state[payload.key] = payload.info.data
            // console.log(payload.info.data)
            // console.log(state[payload.key])
        },
        setOrganizationSearchInfo(state, info) {
            state.organizationSearchInfo = info.data
        },
    },

    actions: {
        async getOrganizationSearchInfo({ rootState, commit }, { inputSearchValue, tagValue, id }) {
            console.log(inputSearchValue)
            const info = await serve.getOwn({ id: id })
            // console.log(inputSearchValue)
            console.log(info)
            // console.log(id)
            // const info = await axios.get(`http://mock-api.com/ZzRpqmne.mock/preavoid/get_organization_search_info`, {
            //     // const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/get_organization_search_info`, {
            //     params: {
            //         id: id
            //     }
            // })
            // console.log('getOrganizationSearchInfo', info)
            // commit('basic', { key: 'organizationSearchInfo', info })
            commit('setOrganizationSearchInfo', info)
        },
        setOrganizationSeartorenndoTab({ commit, state }, value) {
            commit('basic', { key: 'organizationSeartorenndoTab', value })
            // console.log(value)
        },

        setOrganizationSearchInfo({ rootState, commit }, info) {
            console.log("setOrganizationSearchInfo", info)
            commit('setOrganizationSearchInfo', info)
        },
        clearOrganizationSearchInfo({ rootState, commit }) {
            commit('setOrganizationSearchInfo', {})
        },
        setGoodMessageBox({ commit, state }, value) {
            commit('basic', { key: 'goodMessageBox', value })
            // console.log(value)
        },

        setCommentMessageBox({ commit, state }, value) {
            commit('basic', { key: 'commentMessageBox', value })
            // console.log(value)
        },
        setIsOrganizationSearch({ commit, state }, value) {
            commit('basic', { key: 'isOrganizationSearch', value })
            // console.log(value)
        },
    },
}
