export default {
    state: () => ({
        isFormScreen: false,
        isMenuClick: false
    }),

    getters: {
        getIsMenuClick(state) {
            return state.isMenuClick
        }
    },

    mutations: {
        basic(state, payload) {
            state[payload.key] = payload.value
        },
        basic(state, payload) {
            state[payload.key] = payload.value
        },
    },

    actions: {
        formScreenToggle({ commit, state }, value) {
            console.log(value)
            commit('basic', { key: 'isFormScreen', value })
        },
        setMenuClick({ commit, state }, value) {
            commit('basic', { key: 'isMenuClick', value })
            console.log(value)
        }
    },
}
