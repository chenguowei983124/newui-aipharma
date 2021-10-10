import axios from 'axios'
import serve from '../../service/api'
export default {
    state: () => ({
        organizationDateSort: [
            { "value": "0", "title": "最終編集日が新しい順" },
            { "value": "1", "title": "最終編集日が古い" },
            { "value": "2", "title": "Goodが多い順" },
            { "value": "3", "title": "Badが多い順" },
            { "value": "4", "title": "コメント数が多い順" },
            { "value": "5", "title": "コメント数が少ない順" },
            { "value": "6", "title": "Q&A-ID昇順" },
            { "value": "7", "title": "Q&A-ID降順" }
        ],
        organizationCountSort: [
            { "value": "0", "title": "20件 表示" },
            { "value": "1", "title": "50件 表示" },
            { "value": "2", "title": "100件 表示" }
        ],
        goodMessageBox: false,
        commentMessageBox: false,
        organizationSearchInfo: {},
        organizationSeartorenndoTab: {},
        isOrganizationSearch: false,

        // 検索条件
        searchWord:"",     // キーワード
        searchTags:[],     // タブ
        medicineID:"-1",     // 薬区分
        questionID:"-1",     // 質問区分 
        facilityID:"-1",     // 施設
        page:"1",           // ページ
        QAID:"",           // QAID 
        sort:"-1",           // ソート順
        maxCount:"-1"        // 表示件数        
    }),

    getters: {
        // キーワード
        getSearchWord(state){
            return state.searchWord     
        },
        // タブ
        getSearchTags(state){
            return state.searchTags     
        },
        // 薬区分
        getMedicineID(state){
            return state.medicineID     
        },
        // 質問区分
        getQuestionID(state){
            return state.questionID     
        },
        // 施設
        getFacilityID(state){
            return state.facilityID     
        },
        // ページ
        getPage(state){
            return state.page     
        },
        // QAID
        getQAID(state){
            return state.QAID     
        },
        // ソート順
        getSort(state){
            return state.sort     
        },
        // 表示件数
        getMaxCount(state){
            return state.maxCount     
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
            return state.organizationSearchInfo;
        },
        getOrganizationDateSort(state) {
            return state.organizationDateSort
        },
        getOrganizationCountSort(state) {
            return state.organizationCountSort
        },
        getOrganizationSeartorenndoTab(state) {
            const organizationSeartorenndoTab = {
                "torenndoTab": ["ロキソニン", "ロキソ", "用途", "痛み止め", "ロキソニン", "ロキソ", "ロキソニン",
                    "ロキソ", "用途", "痛み止め", "ロキソニン", "ロキソ", "ロキソニン", "ロキソ",
                    "用途", "痛み止め", "ロキソニン", "ロキソ"]
            }
            return organizationSeartorenndoTab
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
        async getOrganizationSearchQaIdInfo({ rootState, commit }, { inputSearchValue, tagValue, id }) {
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
        async getOrganizationSearchConditionsInfo({ rootState, commit }, param) {
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
        // 検索条件をクリア
        clearOwnSearchParam({ rootState, commit }, value) {
            commit('basic', { key: 'searchWord', value })
            commit('basic', { key: 'searchTags', value })
            commit('basic', { key: 'medicineID', value })
            commit('basic', { key: 'questionID', value })
            commit('basic', { key: 'facilityID', value })
            commit('basic', { key: 'QAID', value })
            sessionStorage.removeItem("searchWord")
            sessionStorage.removeItem("searchTags")
            sessionStorage.removeItem("medicineID")
            sessionStorage.removeItem("questionID")
            sessionStorage.removeItem("facilityID")
            sessionStorage.removeItem("QAID")

        },
       
    },
}
