import axios from 'axios'
import serve from '../../service/api'
export default {
    state: () => ({
        // searchKey: '',
        organizationInfo: {},
        searchAllDiKnowledgeInfo: {},
        searchAIDiKnowledgeInfo: {},
        searchAllOrganizationDidDocument: { allCount: '' },
        searchAllPreAvoid: { allCount: '' },
        searchAllbulletinBoardInfo: { allCount: '' },
        searchAllGoogleInfo: {},
        searchAllStatus: {
            DiKnowledge: false,
            AIDiKnowledge: false,
            Organization: false,
            PreAvoid: false,
            BBS: false,
            Google: false,
        },
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
        // getSearchValue(state) {
        //     return state.searchKey
        // },
        getSearchStatus(state) {
            // return state.searchAllStatus
            return (
                state.searchAllStatus.AIDiKnowledge &&
                state.searchAllStatus.DiKnowledge &&
                state.searchAllStatus.Organization &&
                state.searchAllStatus.PreAvoid &&
                state.searchAllStatus.BBS &&
                state.searchAllStatus.Google
            )
        },
    },

    mutations: {
        searchAllDiKnowledgeInfo(state, info) {
            state.searchAllDiKnowledgeInfo = info
        },
        searchAIDiInfo(state, info) {
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
        // setSearchKey(state, info) {
        //     state.searchKey = info
        // },
        setSearchAllStatus(state, info) {
            state.searchAllStatus = info
        },
    },

    actions: {
        saveSearchValue({ commit, state }, value) {
            commit('setSearchKey', value)
        },
        // ========================================
        // DI ナレッジシェアAPI実行
        // ========================================
        async searchALLLDiKnowledgeInfo({ rootState, state, commit, getters }) {
            let params = {
                question: state.searchWord,
            }
            const info = await serve
                .getALLDiKnowledgeInfo(params)
                .then((response) => {
                    // 検索結果格納
                    commit('searchAllDiKnowledgeInfo', response.data)
                    // 検索状態設定
                    let status = state.searchAllStatus
                    status.DiKnowledge = true
                    commit('setSearchAllStatus', status)

                    if (getters.getSearchStatus) {
                        let falseFlg = false
                        let trueFlg = true
                        commit('basic', { key: 'loadingShowFlg', trueFlg })
                        commit('basic', { key: 'isLoadingShow', falseFlg })
                    }
                })
        },
        // ========================================
        // DI ナレッジシェア AI API実行
        // ========================================
        async searchAIDiKnowledgeInfo({ rootState, state, commit, getters }) {
            let params = {
                question: state.searchWord,
            }
            const info = await serve
                .getAIDiKnowledgeInfo(params)
                .then((response) => {
                    // 検索結果格納
                    commit('searchAIDiInfo', response.data)

                    // 検索状態設定
                    let status = state.searchAllStatus
                    status.AIDiKnowledge = true
                    commit('setSearchAllStatus', status)
                    if (getters.getSearchStatus) {
                        let falseFlg = false
                        let trueFlg = true
                        commit('basic', { key: 'loadingShowFlg', trueFlg })
                        commit('basic', { key: 'isLoadingShow', falseFlg })
                    }
                })
        },
        // ========================================
        // 組織内 DI 記録（Q&A）API実行
        // ========================================
        async searchALLLOrganizationInfo({
            rootState,
            state,
            commit,
            getters,
        }) {
            let params = {
                question: state.searchWord,
            }
            const info = await serve
                .getALLOrganizationInfo(params)
                .then((response) => {
                    // 検索結果格納
                    commit('searchAllOrganizationInfo', response.data)

                    // 検索状態設定
                    let status = state.searchAllStatus
                    status.Organization = true
                    commit('setSearchAllStatus', status)
                    if (getters.getSearchStatus) {
                        let falseFlg = false
                        let trueFlg = true
                        commit('basic', { key: 'loadingShowFlg', trueFlg })
                        commit('basic', { key: 'isLoadingShow', falseFlg })
                    }
                })
        },
        // ========================================
        // 症例API実行
        // ========================================
        async searchALLLPreAvoidInfo({ rootState, state, commit, getters }) {
            let params = {
                searchKey: state.searchWord,
            }
            const info = await serve
                .getALLMedicineCase_Info(params)
                .then((response) => {
                    // 検索結果格納
                    commit('searchAllPreAvoidInfo', response.data)

                    // 検索状態設定
                    let status = state.searchAllStatus
                    status.PreAvoid = true
                    commit('setSearchAllStatus', status)
                    if (getters.getSearchStatus) {
                        let falseFlg = false
                        let trueFlg = true
                        commit('basic', { key: 'loadingShowFlg', trueFlg })
                        commit('basic', { key: 'isLoadingShow', falseFlg })
                    }
                })
        },
        // ========================================
        // 掲示板情報取得API実行
        // ========================================
        async searchALLBulletinBoardInfo({
            rootState,
            state,
            commit,
            getters,
        }) {
            let params = {
                searchKey: state.searchWord,
            }
            const info = await serve
                .getALLBulletinBoard_Info(params)
                .then((response) => {
                    // 検索結果格納
                    commit('searchALLBulletinBoardInfo', response.data)

                    // 検索状態設定
                    let status = state.searchAllStatus
                    status.BBS = true
                    commit('setSearchAllStatus', status)
                    if (getters.getSearchStatus) {
                        let falseFlg = false
                        let trueFlg = true
                        commit('basic', { key: 'loadingShowFlg', trueFlg })
                        commit('basic', { key: 'isLoadingShow', falseFlg })
                    }
                })
        },
        // ========================================
        // Google情報取得API実行
        // ========================================
        async searchGoogleInfo({ rootState, state, commit, getters }) {
            let params = {
              question: state.searchWord,
            }
            const info = await serve
                .getALLGoogle_Info(params)
                .then((response) => {
                    // 検索結果格納
                    commit('setALLGoogleInfo', response.data)

                    // 検索状態設定
                    let status = state.searchAllStatus
                    status.Google = true
                    commit('setSearchAllStatus', status)
                    if (getters.getSearchStatus) {
                        let falseFlg = false
                        let trueFlg = true
                        commit('basic', { key: 'loadingShowFlg', trueFlg })
                        commit('basic', { key: 'isLoadingShow', falseFlg })
                    }
                })
        },
        initSearchAllStatus({ rootState, state, commit }) {
            // 検索状態設定
            let status = state.searchAllStatus
            status.DiKnowledge = false
            status.AIDiKnowledge = false
            status.Organization = false
            status.PreAvoid = false
            status.BBS = false
            status.Google = false
            commit('setSearchAllStatus', status)
        },
    },
}
