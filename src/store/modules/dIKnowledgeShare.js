import axios from 'axios'
import serve from '../../service/api'
export default {
    state: () => ({
        dIKnowledgeShareSearchAIInfo: {},
        dIKnowledgeShareSearchInfo: {},
        diKnowledgeShareNewQAInfo: {},
        diKnowledgeShareLookcarefullyQAInfo: {},
    }),
    getters: {
        dIKnowledgeShareSearchAIInfo(state) {
            return state.dIKnowledgeShareSearchAIInfo
        },
        dIKnowledgeShareSearchInfo(state) {
            return state.dIKnowledgeShareSearchInfo
        },
        diKnowledgeShareNewQAInfo(state) {
            return state.diKnowledgeShareNewQAInfo
        },
        diKnowledgeShareLookcarefullyQAInfo(state) {
            return state.diKnowledgeShareLookcarefullyQAInfo
        },
    },
    mutations: {
        setdIKnowledgeShareSearchInfo(state, info) {
            // state.dIKnowledgeShareSearchAIInfo = info.data.ai
            state.dIKnowledgeShareSearchInfo = info.data.search
        },
        setdIKnowledgeShareSearchAIInfo(state, info) {
            state.dIKnowledgeShareSearchAIInfo = info.data.ai
        },
        setDiKnowledgeShareNewQAInfo(state, info) {
            state.diKnowledgeShareNewQAInfo = info.data
        },
        setDiKnowledgeShareLookcarefullyQAInfo(state, info) {
            state.diKnowledgeShareLookcarefullyQAInfo = info.data
        },
    },
    actions: {
        async getdIKnowledgeShareSearchInfo(
            { rootState, commit },
            { inputSearchValue, tagValue, id }
        ) {
            // console.log(inputSearchValue)
            const info = await serve.getOwndIKnowledgeShare({})
            // console.log(inputSearchValue)
            // console.log("getdIKnowledgeShareSearchInfoinfo", info)
            // console.log(id)
            // const info = await axios.get(`http://mock-api.com/ZzRpqmne.mock/get_DIKnowledgeShare_search_info`, {
            // const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/get_DIKnowledgeShare_search_info`, {
            //     params: {
            //         id: id
            //     }
            // })
            // console.log('getOrganizationSearchInfo', info)
            // commit('basic', { key: 'organizationSearchInfo', info })
            commit('setdIKnowledgeShareSearchInfo', info)
            commit('setdIKnowledgeShareSearchAIInfo', info)
        },
        //===========================
        // DIナレッジシェア検索結果取得（新着QA）
        //===========================
        async getDiKnowledgeShareNewQAInfo({ rootState, commit }) {
            const info = await serve.getDiKnowledgeShareNewQA()
            commit('setDiKnowledgeShareNewQAInfo', info)
        },
        //===========================
        // DIナレッジシェア検索結果取得（よく見られているQA）
        //===========================
        async getDiKnowledgeShareLookcarefullyQAInfo({ rootState, commit }) {
            const info = await serve.getDIKnowledgeShareLookcarefullyQA()
            commit('setDiKnowledgeShareLookcarefullyQAInfo', info)
        },
        cleardIKnowledgeShareSearchInfo({ rootState, commit }) {
            commit('setdIKnowledgeShareSearchInfo', {})
            commit('setdIKnowledgeShareSearchAIInfo', {})
        },
    },
}
