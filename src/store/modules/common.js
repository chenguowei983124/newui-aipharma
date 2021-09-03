export default {
    state: () => ({
        isFormScreen: false,
        isMenuClick: false,
        isPortraitClick: false,
        isManagementClick: false
    }),

    getters: {
        getIsMenuClick(state) {
            return state.isMenuClick
        },
        getPortraitClick(state) {
            return state.isPortraitClick
        },
        getManagementClick(state) {
            return state.isManagementClick
        }
    },

    mutations: {
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
        },
        setPortraitClick({ commit, state }, value) {
            commit('basic', { key: 'isPortraitClick', value })
            console.log("isPortraitClick =" + value)
        },
        setManagementClick({ commit, state }, value) {
            commit('basic', { key: 'isManagementClick', value })
            console.log("isManagementClick =" + value)
        }
    },
}
