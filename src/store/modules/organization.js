export default {
    state: () => ({
        organizationDateSort: {},
        organizationCountSort: {},
    }),

    getters: {

        getOrganizationDateSort(state) {
            state.organizationDateSort = [
                { "value": "0", "title": "最終編集日が新しい順" },
                { "value": "1", "title": "最終編集日が古い" },
                { "value": "2", "title": "Goodが多い順" },
                { "value": "3", "title": "Badが多い順" },
                { "value": "4", "title": "コメント数が多い順" },
                { "value": "5", "title": "コメント数が少ない順" },
                { "value": "6", "title": "Q&A-ID昇順" },
                { "value": "7", "title": "Q&A-ID降順" }
            ]

            return state.organizationDateSort
        },
        getOrganizationCountSort(state) {
            state.organizationCountSort = [
                { "value": "0", "title": "20件 表示" },
                { "value": "1", "title": "50件 表示" },
                { "value": "2", "title": "100件 表示" }
            ]

            return state.organizationCountSort
        }
    },

    mutations: {

    },

    actions: {

    },
}
