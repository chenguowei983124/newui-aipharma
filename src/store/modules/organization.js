import axios from 'axios'
import serve from '../../service/api'
export default {
    state: () => ({
        goodMessageBox: false,
        commentMessageBox: false,
        organizationSearchInfo: {},
        organizationSeartorenndoTab: {},
        isOrganizationSearch: false,

        // 検索条件
        searchWord: '', // キーワード
        searchTags: [], // タブ
        medicineID: '-1', // 薬区分
        questionID: '-1', // 質問区分
        facilityID: '-1', // 施設
        page: '1', // ページ
        QAID: '', // QAID
        sort: '0', // ソート順
        maxCount: '0', // 表示件数
        checkQ: true,
        checkA: true,
        checkComment: true,
        checkAddFileName: true,
        checkContributor: true,
        checkLastEditer: true,
        checkFacilityName: true,
        checkNote: true,
        filterBBS: {},
    }),

    getters: {
        // キーワード
        getSearchWord(state) {
            return state.searchWord
        },
        // タブ
        getSearchTags(state) {
            return state.searchTags
        },
        // 薬区分
        getMedicineID(state) {
            return state.medicineID
        },
        // 質問区分
        getQuestionID(state) {
            return state.questionID
        },
        // 施設
        getFacilityID(state) {
            return state.facilityID
        },
        // ページ
        getPage(state) {
            return state.page
        },
        // QAID
        getQAID(state) {
            return state.QAID
        },
        // ソート順
        getSort(state) {
            return state.sort
        },
        // 表示件数
        getMaxCount(state) {
            return state.maxCount
        },
        // 検索対象　Q
        getCheckQ(state) {
            console.log('getCheckQ', state.checkQ)
            return state.checkQ
        },
        // 検索対象　A
        getCheckA(state) {
            return state.checkA
        },
        // 検索対象　コメント
        getCheckComment(state) {
            return state.checkComment
        },
        // 検索対象　添付ファイル
        getCheckAddFileName(state) {
            return state.checkAddFileName
        },
        // 検索対象　投稿者
        getCheckContributor(state) {
            return state.checkContributor
        },
        // 検索対象　最終編集者
        getCheckLastEditer(state) {
            return state.checkLastEditer
        },
        // 検索対象　施設名
        getCheckFacilityName(state) {
            return state.checkFacilityName
        },
        // 検索対象　備考
        getCheckNote(state) {
            return state.checkNote
        },
        getGoodMessageBox(state) {
            return state.goodMessageBox
        },
        getCommentMessageBox(state) {
            return state.commentMessageBox
        },
        getIsOrganizationSearch(state) {
            return state.isOrganizationSearch
        },
        organizationSearchInfo(state) {
            return state.organizationSearchInfo
        },
        getOrganizationDateSort(state) {
            return state.organizationDateSort
        },
        getOrganizationCountSort(state) {
            return state.organizationCountSort
        },
        getOrganizationSeartorenndoTab(state) {
            const organizationSeartorenndoTab = {
                torenndoTab: [
                    'ロキソニン',
                    'ロキソ',
                    '用途',
                    '痛み止め',
                    'ロキソニン',
                    'ロキソ',
                    'ロキソニン',
                    'ロキソ',
                    '用途',
                    '痛み止め',
                    'ロキソニン',
                    'ロキソ',
                    'ロキソニン',
                    'ロキソ',
                    '用途',
                    '痛み止め',
                    'ロキソニン',
                    'ロキソ',
                ],
            }
            return organizationSeartorenndoTab
        },
        getFilterBBS(state) {
            return state.filterBBS
        },
    },

    mutations: {
        basic(state, payload) {
            state[payload.key] = payload.value
        },
        setOrganizationSearchInfo(state, info) {
            state.organizationSearchInfo = info.data
        },
    },

    actions: {
        async getOrganizationSearchQaIdInfo(
            { rootState, commit },
            { inputSearchValue, tagValue, id }
        ) {
            // console.log("getOrganizationSearchInfo", id)
            // console.log(inputSearchValue)
            const info = await serve.getOwn({ id: id })
            // console.log(inputSearchValue)
            // console.log(info)
            // const info = await axios.get(`http://mock-api.com/ZzRpqmne.mock/preavoid/get_organization_search_info`, {
            //     // const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/get_organization_search_info`, {
            //     params: {
            //         id: id
            //     }
            // })
            // console.log('getOrganizationSearchInfo', info)
            // commit('basic', { key: 'organizationSearchInfo', info })
            commit('setOrganizationSearchInfo', info)
        },
        async getOrganizationSearchConditionsInfo(
            { rootState, commit },
            param
        ) {
            // console.log("getOrganizationSearchInfo", id)
            // console.log(inputSearchValue)
            const info = await serve.getOwnData(param)
            // console.log(inputSearchValue)
            // console.log(info)
            // const info = await axios.get(`http://mock-api.com/ZzRpqmne.mock/preavoid/get_organization_search_info`, {
            //     // const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/get_organization_search_info`, {
            //     params: {
            //         id: id
            //     }
            // })
            // console.log('getOrganizationSearchInfo', info)
            // commit('basic', { key: 'organizationSearchInfo', info })
            commit('setOrganizationSearchInfo', info)
        },
        setOrganizationSeartorenndoTab({ commit, state }, value) {
            commit('basic', { key: 'organizationSeartorenndoTab', value })
        },

        setOrganizationSearchInfo({ rootState, commit }, info) {
            commit('setOrganizationSearchInfo', info)
        },
        clearOrganizationSearchInfo({ rootState, commit }) {
            commit('setOrganizationSearchInfo', {})
        },
        setGoodMessageBox({ commit, state }, value) {
            commit('basic', { key: 'goodMessageBox', value })
        },

        setCommentMessageBox({ commit, state }, value) {
            commit('basic', { key: 'commentMessageBox', value })
        },
        setIsOrganizationSearch({ commit, state }, value) {
            commit('basic', { key: 'isOrganizationSearch', value })
        },
        // キーワード
        setSearchWord({ commit, state }, value) {
            commit('basic', { key: 'searchWord', value })
        },
        // タブ
        setSearchTags({ commit, state }, value) {
            commit('basic', { key: 'searchTags', value })
        },
        // 薬区分
        setMedicineID({ commit, state }, value) {
            commit('basic', { key: 'medicineID', value })
        },
        // 質問区分
        setQuestionID({ commit, state }, value) {
            commit('basic', { key: 'questionID', value })
        },
        // 施設
        setFacilityID({ commit, state }, value) {
            commit('basic', { key: 'facilityID', value })
        },
        // ページ
        setPage({ commit, state }, value) {
            commit('basic', { key: 'page', value })
        },
        // QAID
        setQAID({ commit, state }, value) {
            commit('basic', { key: 'QAID', value })
        },
        // ソート順
        setSort({ commit, state }, value) {
            commit('basic', { key: 'sort', value })
        },
        // 表示件数
        setMaxCount({ commit, state }, value) {
            commit('basic', { key: 'maxCount', value })
        },
        // 検索対象　Q
        setCheckQ({ commit, state }, value) {
            commit('basic', { key: 'checkQ', value })
        },
        // 検索対象　A
        setCheckA({ commit, state }, value) {
            commit('basic', { key: 'checkA', value })
        },
        // 検索対象　コメント
        setCheckComment({ commit, state }, value) {
            commit('basic', { key: 'checkComment', value })
        },
        // 検索対象　添付ファイル
        setCheckAddFileName({ commit, state }, value) {
            commit('basic', { key: 'checkAddFileName', value })
        },
        // 検索対象　投稿者
        setCheckContributor({ commit, state }, value) {
            commit('basic', { key: 'checkContributor', value })
        },
        // 検索対象　最終編集者
        setCheckLastEditer({ commit, state }, value) {
            commit('basic', { key: 'checkLastEditer', value })
        },
        // 検索対象　施設名
        setCheckFacilityName({ commit, state }, value) {
            commit('basic', { key: 'checkFacilityName', value })
        },
        // 検索対象　備考
        setCheckNote({ commit, state }, value) {
            commit('basic', { key: 'checkNote', value })
        },
        // タブ
        setFilterBBS({ commit, state }, value) {
            commit('basic', { key: 'filterBBS', value })
        },
    },
}
