import axios from 'axios'
import serve from '../../service/api'
export default {
    state: () => ({
        searchKey: '',
        organizationInfo: {},
        searchAllDiKnowledgeInfo: {},
        searchAIDiKnowledgeInfo: {},
        searchAllOrganizationDidDocument: { allCount: '' },
        searchAllPreAvoid: { allCount: '' },
        searchAllbulletinBoardInfo: { allCount: '' },
        searchAllGoogleInfo: {},
    }),

    getters: {
        // DI ナレッジシェアの検索結果取得
        getSearchAllDiKnowledge(state) {
            return state.searchAllDiKnowledgeInfo
        },
        // DI ナレッジシェアのAI検索結果取得
        getSearchAIDiKnowledge(state) {
            return state.searchAIDiKnowledgeInfo
        },
        // 組織内 DI 記録（Q&A）の検索結果取得
        getSearchAllOrganizationDidDocument(state) {
            return state.searchAllOrganizationDidDocument
        },
        // 症例（プレアボイド）の検索結果取得
        getSearchAllPreAvoid(state) {
            return state.searchAllPreAvoid
        },
        // 掲示板の検索結果取得
        getSearchAllBulletinBoardInfo(state) {
            return state.searchAllbulletinBoardInfo
        },
        // Googleの検索結果取得
        getSearchAllGoogleInfo(state) {
            return state.searchAllGoogleInfo
        },
        getSearchValue(state) {
            return state.searchKey
        },
    },

    mutations: {
        searchAllDiKnowledgeInfo(state, info) {
            state.searchAllDiKnowledgeInfo = info
        },
        searchAIDiInfo(state, info) {
            console.log("searchAIDiInfo", info)
            state.searchAIDiKnowledgeInfo = info
        },
        searchAllOrganizationInfo(state, info) {
            state.searchAllOrganizationDidDocument = info
        },
        searchAllPreAvoidInfo(state, info) {
            state.searchAllPreAvoid = info
        },
        searchALLBulletinBoardInfo(state, info) {
            state.searchAllbulletinBoardInfo = info
        },
        setALLGoogleInfo(state, info) {
            state.searchAllGoogleInfo = info
        },
        basic(state, payload) {
            state[payload.key] = payload.value
        },
        setSearchKey(state, info) {
            state.searchKey = info
        },
    },

    actions: {
        saveSearchValue({ commit, state }, value) {
            commit('setSearchKey', value)
        },
        // ========================================
        // DI ナレッジシェアAPI実行
        // ========================================
        async searchALLLDiKnowledgeInfo({ rootState, state, commit }) {
            let params = {
                question: state.searchKey,
            }
            const info = await serve
                .getALLDiKnowledgeInfo(params)
                .then((response) => {
                    // 検索結果格納
                    commit('searchAllDiKnowledgeInfo', response.data)
                })
        },
        // ========================================
        // DI ナレッジシェア AI API実行
        // ========================================
        async searchAIDiKnowledgeInfo({ rootState, state, commit }) {
            let params = {
                question: state.searchKey,
            }
            const info = await serve
                .getAIDiKnowledgeInfo(params)
                .then((response) => {
                    // 検索結果格納
                    commit('searchAIDiInfo', response.data)
                })
            console.log("searchAIDiInfo", info)
        },
        // ========================================
        // 組織内 DI 記録（Q&A）API実行
        // ========================================
        async searchALLLOrganizationInfo({ rootState, state, commit }) {
            let params = {
                question: state.searchKey,
            }
            const info = await serve
                .getALLOrganizationInfo(params)
                .then((response) => {
                    // 検索結果格納
                    commit('searchAllOrganizationInfo', response.data)
                })
        },
        // ========================================
        // 症例API実行
        // ========================================
        async searchALLLPreAvoidInfo({ rootState, state, commit }) {
            let params = {
                searchKey: state.searchKey,
            }
            const info = await serve
                .getALLMedicineCase_Info(params)
                .then((response) => {
                    // 検索結果格納
                    commit('searchAllPreAvoidInfo', response.data)
                })
        },
        // ========================================
        // 掲示板情報取得API実行
        // ========================================
        async searchALLBulletinBoardInfo({ rootState, state, commit }) {
            let params = {
                searchKey: state.searchKey,
            }
            const info = await serve
                .getALLBulletinBoard_Info(params)
                .then((response) => {
                    // 検索結果格納
                    commit('searchALLBulletinBoardInfo', response.data)
                })
        },
        // ========================================
        // Google情報取得API実行
        // ========================================
        async searchGoogleInfo({ rootState, state, commit }) {
            let params = {
                searchKey: state.searchKey,
            }
            const info = await serve
                .getALLGoogle_Info(params)
                .then((response) => {
                    // console.log('getALLGoogle_Info', response.data)
                    // 検索結果格納
                    commit('setALLGoogleInfo', response.data)
                })
        },
    },
}
