import axios from 'axios'
import serve from '../../service/api'
export default {
    state: () => ({
        dIKnowledgeShareSearchAIInfo: {},
        dIKnowledgeShareSearchInfo: {},
    }),
    getters: {
        dIKnowledgeShareSearchAIInfo(state) {
            return state.dIKnowledgeShareSearchAIInfo;
        },
        dIKnowledgeShareSearchInfo(state) {
            return state.dIKnowledgeShareSearchInfo;
        },
    },
    mutations: {
        setdIKnowledgeShareSearchInfo(state, info) {
            // state.dIKnowledgeShareSearchAIInfo = info.data.ai
            state.dIKnowledgeShareSearchInfo = info.data.search
            console.log("state.dIKnowledgeShareSearchInfo", state.dIKnowledgeShareSearchInfo)
        },
        setdIKnowledgeShareSearchAIInfo(state, info) {
            state.dIKnowledgeShareSearchAIInfo = info.data.ai
            console.log("state.dIKnowledgeShareSearchAIInfo", state.dIKnowledgeShareSearchAIInfo)
        },
    },
    actions: {
        async getdIKnowledgeShareSearchInfo({ rootState, commit }, { inputSearchValue, tagValue, id }) {
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
        cleardIKnowledgeShareSearchInfo({ rootState, commit }) {
            commit('setdIKnowledgeShareSearchInfo', {})
            commit('setdIKnowledgeShareSearchAIInfo', {})
        },
    }
}
