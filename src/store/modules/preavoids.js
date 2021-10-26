export default {
    state: () => ({
        searchPreavoidsInfo: { searchData: [], dataCount: 0 },
    }),

    getters: {
        // 症例検索結果取得
        getSearchPreavoidsInfo(state) {
            return state.searchPreavoidsInfo
        },
    },

    mutations: {
        searchPreavoidsInfo(state, info) {
            state.searchPreavoidsInfo = info
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
