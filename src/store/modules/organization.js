import axios from 'axios'
import serve from '../../service/api'
export default {
    state: () => ({
        goodMessageBox: false,
        commentMessageBox: false,
        organizationSearchInfo: {},
        organizationSeartorenndoTab: {},
        organizationNewQAInfo: {},
        organizationLookcarefullyQAInfo: {},
        isOrganizationSearch: false,

        // 検索条件
        // searchWord: '', // キーワード
        searchTags: [], // タブ
        medicineID: '0', // 薬区分
        questionID: '0', // 質問区分
        facilityID: '0', // 施設
        page: '1', // ページ
        QAID: '', // QAID
        sort: 'last_updated_at_desc', // ソート順
        maxCount: '20', // 表示件数
        // 検索対象
        checkQ: true, // Q
        checkA: true, // A
        checkComment: true, // コメント
        checkAddFileName: true, // 添付ファイル名
        checkContributor: true, // 投稿者
        checkLastEditer: true, // 最終編集者
        checkFacilityName: true, // 施設名
        checkNote: true, // 備考
        filterBBS: {},
        searchTagsLable: [], // タブname
        orgTagsList: [],
    }),

    getters: {
        //
        getorgTagsList(state) {
            return state.orgTagsList
        },
        // キーワード
        // getSearchWord(state) {
        //     return state.searchWord
        // },
        // タブ
        getSearchTags(state) {
            return state.searchTags
        },
        // タブ
        getSearchTagsLable(state) {
            return state.searchTagsLable
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
        organizationNewQAInfo(state) {
            return state.organizationNewQAInfo
        },
        organizationLookcarefullyQAInfo(state) {
            return state.organizationLookcarefullyQAInfo
        },
        getOrganizationDateSort(state) {
            return state.organizationDateSort
        },
        getOrganizationCountSort(state) {
            return state.organizationCountSort
        },
        getOrganizationSeartorenndoTab(state) {
            // const organizationSeartorenndoTab = {
            //     torenndoTab: [{ value: 1, label: 'ファモチジン' },
            //     { value: 2, label: 'ファモセット注' },
            //     { value: 3, label: 'ロキソニン' },
            //     { value: 4, label: '用途' },],
            // }
            return state.organizationSeartorenndoTab
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
        setOrganizationTab(state, info) {
            state.organizationSeartorenndoTab = info.data
        },
        setOrganizationNewQAInfo(state, info) {
            state.organizationNewQAInfo = info.data
        },
        setOrganizationLookcarefullyQAInfo(state, info) {
            state.organizationLookcarefullyQAInfo = info.data
        },
    },

    actions: {
        //===========================
        // 組織内DI記録検索結果取得（ID）
        //===========================
        async getOrganizationSearchQaIdInfo(
            { rootState, commit },
            { inputSearchValue, tagValue, id }
        ) {
            const info = await serve.getOwn({ id: id })
            commit('setOrganizationSearchInfo', info)
        },
        //===========================
        // 組織内DI記録検索結果取得（検索条件）
        //===========================
        async getOrganizationSearchConditionsInfo(
            { rootState, commit },
            param
        ) {
            const info = await serve.getOwnData(param)
            console.log(info)
            commit('setOrganizationSearchInfo', info)
        },
        //===========================
        // 組織内DI記録検索結果取得（init タグ取得）
        //===========================
        async getOrganizationSeartorenndoTab({ rootState, commit }) {
            const info = await serve.getTrendTag()
            commit('setOrganizationTab', info)
        },
        //===========================
        // 組織内DI記録検索結果取得（新着QA）
        //===========================
        async getOrganizationNewQAInfo({ rootState, commit }) {
            const info = await serve.getOwnNewQA()
            commit('setOrganizationNewQAInfo', info)
        },
        //===========================
        // 組織内DI記録検索結果取得（よく見られているQA）
        //===========================
        async getOrganizationLookcarefullyQAInfo({ rootState, commit }) {
            const info = await serve.getOwnLookcarefullyQA()
            commit('setOrganizationLookcarefullyQAInfo', info)
        },
        setOrganizationSeartorenndoTab({ commit, state }, value) {
            commit('basic', { key: 'organizationSeartorenndoTab', value })
        },

        setOrganizationSearchInfo({ rootState, commit }, info) {
            console.log(info)
            for (let index = 0; index < 100; index++) {
                info.data.qas.push(info.data.qas[0])
            }
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
        //
        setOrgTagsList({ commit, state }, value) {
            commit('basic', { key: 'orgTagsList', value })
        },
        // // キーワード
        // setSearchWord({ commit, state }, value) {
        //     commit('basic', { key: 'searchWord', value })
        // },
        // タブ
        setSearchTags({ commit, state }, value) {
            commit('basic', { key: 'searchTags', value })
        },
        // タブ
        setSearchTagsLable({ commit, state }, value) {
            commit('basic', { key: 'searchTagsLable', value })
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
