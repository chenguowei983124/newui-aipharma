export default {
    state: () => ({
        searchPreavoidsInfo: { searchData: [], dataCount: 0 },
        trendKeywords: {},
    }),

    getters: {
        // 症例検索結果取得
        getSearchPreavoidsInfo(state) {
            return state.searchPreavoidsInfo
        },
        getTrendKeywords(state) {
            return [
                { value: 1, label: 'ファモチジン' },
                { value: 2, label: 'ファモセット注' },
                { value: 3, label: 'ロキソニン' },
                { value: 4, label: '用途' },
            ]
        },
    },

    mutations: {
        searchPreavoidsInfo(state, info) {
            state.searchPreavoidsInfo = info
        },
        setTrendKeywords(state, info) {
            state.trendKeywords = info.data
        },
    },

    actions: {
        // ========================================
        // 症例検索画面API実行
        // ========================================
        setPearchPreavoidsInfo({ rootState, state, commit }, data) {
            commit('searchPreavoidsInfo', data)
        },
        clearPreavoidsInfo({ commit }) {
            commit('searchPreavoidsInfo', { searchData: [], dataCount: 0 })
        },
    },
}
