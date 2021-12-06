import axios from 'axios'
import serve from '../../service/api'
export default {
    state: () => ({
        dIKnowledgeShareSearchAIInfo: {},
        dIKnowledgeShareSearchInfo: {},
        diKnowledgeShareNewQAInfo: {},
        diKnowledgeShareLookcarefullyQAInfo: {},
        // 検索条件
        searchWordDI: '', // キーワード
        // searchTags: [], // タブ
        pageDI: '1', // ページ
        QaAiId: '', // QAAIID　
        sortDI: 'last_updated_at_desc', // ソート順
        maxCountDI: '20', // 表示件数
        // 検索対象
        checkQDI: true, // Q
        checkADI: true, // A
        checkCommentDI: true, // コメント
        checkAddFileNameDI: true, // 添付ファイル名
        checkContributorDI: true, // 投稿者
        checkLastEditerDI: true, // 最終編集者
        checkFacilityNameDI: true, // 施設名
        checkNoteDI: true, // 備考
    }),
    getters: {
        dIKnowledgeShareSearchAIInfo(state) {
            return state.dIKnowledgeShareSearchAIInfo
        },
        dIKnowledgeShareSearchInfo(state) {
            return state.dIKnowledgeShareSearchInfo
        },
        diKnowledgeShareNewQAInfo(state) {
            return state.diKnowledgeShareNewQAInfo
        },
        diKnowledgeShareLookcarefullyQAInfo(state) {
            return state.diKnowledgeShareLookcarefullyQAInfo
        },
        // QaAiId
        getQaAiId(state) {
            return state.QaAiId
        },
        // キーワード
        getSearchWordDI(state) {
            return state.searchWordDI
        },
        // ページ
        getPageDI(state) {
            return state.pageDI
        },
        // ソート順
        getSortDI(state) {
            return state.sortDI
        },
        // 表示件数
        getMaxCountDI(state) {
            return state.maxCountDI
        },
        // 検索対象　Q
        getCheckQDI(state) {
            return state.checkQDI
        },
        // 検索対象　A
        getCheckADI(state) {
            return state.checkADI
        },
        // 検索対象　コメント
        getCheckCommentDI(state) {
            return state.checkCommentDI
        },
        // 検索対象　添付ファイル
        getCheckAddFileNameDI(state) {
            return state.checkAddFileNameDI
        },
        // 検索対象　投稿者
        getCheckContributorDI(state) {
            return state.checkContributorDI
        },
        // 検索対象　最終編集者
        getCheckLastEditerDI(state) {
            return state.checkLastEditerDI
        },
        // 検索対象　施設名
        getCheckFacilityNameDI(state) {
            return state.checkFacilityNameDI
        },
        // 検索対象　備考
        getCheckNoteDI(state) {
            return state.checkNoteDI
        },
    },
    mutations: {
        setdIKnowledgeInfo(state, info) {
            state.dIKnowledgeShareSearchInfo = info.data
        },
        setdIKnowledgeShareSearchAIInfo(state, info) {
            state.dIKnowledgeShareSearchAIInfo = info.data
        },
        setDiKnowledgeShareNewQAInfo(state, info) {
            state.diKnowledgeShareNewQAInfo = info.data
        },
        setDiKnowledgeShareLookcarefullyQAInfo(state, info) {
            state.diKnowledgeShareLookcarefullyQAInfo = info.data
        },
        // QaAiId
        setQaAiId(state, info) {
            return state.QaAiId = info
        },
        // キーワード
        setSearchWordDI(state, info) {
            return state.searchWordDI = info
        },
        // ページ
        setPageDI(state, info) {
            return state.pageDI = info
        },
        // ソート順
        setSortDI(state, info) {
            return state.sortDI = info
        },
        // 表示件数
        setMaxCountDI(state, info) {
            return state.maxCountDI = info
        },
        // 検索対象　Q
        setCheckQDI(state, info) {
            return state.checkQDI = info
        },
        // 検索対象　A
        setCheckADI(state, info) {
            return state.checkADI = info
        },
        // 検索対象　コメント
        setCheckCommentDI(state, info) {
            return state.checkCommentDI = info
        },
        // 検索対象　添付ファイル
        setCheckAddFileNameDI(state, info) {
            return state.checkAddFileNameDI = info
        },
        // 検索対象　投稿者
        setCheckContributorDI(state, info) {
            return state.checkContributorDI = info
        },
        // 検索対象　最終編集者
        setCheckLastEditerDI(state, info) {
            return state.checkLastEditerDI = info
        },
        // 検索対象　施設名
        setCheckFacilityNameDI(state, info) {
            return state.checkFacilityNameDI = info
        },
        // 検索対象　備考
        setCheckNoteDI(state, info) {
            return state.checkNoteDI = info
        },

    },
    actions: {
        async getdIKnowledgeShareSearchInfo({ rootState, commit }, param) {
            // const info = await serve.getDIKnowledgeShare(param)
            commit('setdIKnowledgeInfo', param)
        },
        async getdIKnowledgeShareSearchAIInfo({ rootState, commit }, param) {
            // const info = await serve.getDIKnowledgeShareAI(param)
            commit('setdIKnowledgeShareSearchAIInfo', param)
        },
        //===========================
        // DIナレッジシェア検索結果取得（新着QA）
        //===========================
        async getDiKnowledgeShareNewQAInfo({ rootState, commit }) {
            const info = await serve.getDiKnowledgeShareNewQA()
            commit('setDiKnowledgeShareNewQAInfo', info)
        },
        //===========================
        // DIナレッジシェア検索結果取得（よく見られているQA）
        //===========================
        async getDiKnowledgeShareLookcarefullyQAInfo({ rootState, commit }) {
            const info = await serve.getDIKnowledgeShareLookcarefullyQA()
            commit('setDiKnowledgeShareLookcarefullyQAInfo', info)
        },
    },
}
