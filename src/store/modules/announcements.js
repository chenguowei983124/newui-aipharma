import axios from 'axios'
export default {
    state: () => ({
        info: [],
    }),

    getters: {
        INFO(state) {
            return state.info
        }
    },

    mutations: {
        SET_INFO(state, info) {
            state.info = info
        },
    },

    actions: {
        async GET_TOP_INFO({ rootState, commit }, userGroupId) {
            const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/todos`, {
                params: {
                    token: rootState.apiToken,
                    user_group_id: userGroupId
                }
            })
            console.log(info)
            commit('SET_INFO', info)
        },
    },
}
