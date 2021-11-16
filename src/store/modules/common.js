import serve from '../../service/api'
export default {
    state: () => ({
        isFormScreen: false,
        isLoadingShow: false,
        isMenuClick: false,
        isPortraitClick: false,
        isManagementClick: false,
        isIssueIconClick: false,
        // 組織内 DI 記録（Q&A） ドット-水平
        isOrgDotsClick: false,
        // 組織内 DI 記録（Q&A） 詳細条件
        isOrgDotsDetailedClick: true,
        qa_classify_class: {},
        qa_classify_subject: {},
        commentInfo: {},
        oidcCode: '',
        dateValueFrom: '',
        dateValueTo: '',
        styles: '-1',
        scope: '0',
        bbsCheckInfo: {
            checkTitle: true,
            checkContent: true,
            checkComment: true,
            checkPost: true,
            checkLastEditor: true,
            checkFacilityName: true,
        },
        oidcCode: '',
        download: false,
        bbsTagsList: [],
        loadingShowFlg: true,
    }),

    getters: {
        getBbsTagsList(state) {
            return state.bbsTagsList
        },
        getDownload(state) {
            return state.download
        },
        getIsMenuClick(state) {
            return state.isMenuClick
        },
        getIsLoadingShow(state) {
            return state.isLoadingShow
        },
        getPortraitClick(state) {
            return state.isPortraitClick
        },
        getManagementClick(state) {
            return state.isManagementClick
        },
        getIssueIconClick(state) {
            return state.isIssueIconClick
        },
        // 組織内 DI 記録（Q&A） ドット-水平
        getIsOrgDotsClick(state) {
            return state.isOrgDotsClick
        },
        // 組織内 DI 記録（Q&A） 詳細条件
        getIsOrgDotsDetailedClick(state) {
            return state.isOrgDotsDetailedClick
        },
        getQa_classify_class(state) {
            return state.qa_classify_class
        },
        qa_classify_subject(state) {
            return state.qa_classify_subject
        },
        getOidcCode(state) {
            return state.oidcCode
        },
        // 対象期間From
        getDateValueFrom(state) {
            return state.dateValueFrom
        },
        // 対象期間To
        getDateValueTo(state) {
            return state.dateValueTo
        },
        // 様式
        getStyles(state) {
            return state.styles
        },
        // コメント情報
        getCommentInfo(state) {
            return state.commentInfo
        },
        getScope(state) {
            return state.scope
        },
        getBbsCheckInfo(state) {
            return state.bbsCheckInfo
        },
        getLoadingShowFlg(state) {
            return state.loadingShowFlg
        },
    },

    mutations: {
        basic(state, payload) {
            state[payload.key] = payload.value
        },
        setCommnet(state, info) {
            state.commentInfo = info
        },
        setScope(state, info) {
            state.scope = info
        },
        setBbsCheck(state, info) {
            state.bbsCheckInfo = info
        },
        // 薬の分類
        setQaClassifyClass(state, info) {
            console.log('setQaClassifyClass02', info.data.qa_classify_class)
            state.qa_classify_class = info.data.qa_classify_class
        },
        // 質問区分
        setQaClassifySubject(state, info) {
            console.log('setQaClassifyClass03', info.data.qa_category_lists)
            state.qa_classify_subject = info.data.qa_category_lists
        },
    },

    actions: {
        formScreenToggle({ commit, state }, value) {
            commit('basic', { key: 'isFormScreen', value })
        },
        setIsLoadingShow({ commit, state }, value) {
            commit('basic', { key: 'isLoadingShow', value })
        },
        setDownload({ commit }, value) {
            commit('basic', { key: 'download', value })
        },
        setMenuClick({ commit, state }, value) {
            commit('basic', { key: 'isMenuClick', value })
        },
        setPortraitClick({ commit, state }, value) {
            commit('basic', { key: 'isPortraitClick', value })
        },
        setManagementClick({ commit, state }, value) {
            commit('basic', { key: 'isManagementClick', value })
        },
        setDateValueFrom({ commit, state }, value) {
            commit('basic', { key: 'dateValueFrom', value })
        },
        setDateValueTo({ commit, state }, value) {
            commit('basic', { key: 'dateValueTo', value })
        },
        setStyles({ commit, state }, value) {
            commit('basic', { key: 'styles', value })
        },
        setIssueIconClick({ commit, state }, value) {
            commit('basic', { key: 'isIssueIconClick', value })
        },
        // 組織内 DI 記録（Q&A） ドット-水平
        setIsOrgDotsClick({ commit, state }, value) {
            commit('basic', { key: 'isOrgDotsClick', value })
        },
        // 組織内 DI 記録（Q&A）
        setIsOrgDotsDetailedClick({ commit, state }, value) {
            commit('basic', { key: 'isOrgDotsDetailedClick', value })
        },
        // 薬の分類 質問区分
        async getCommonInfo({ rootState, commit }) {
            const info = await serve.getOrgCommonInfo()
            console.log('getOrgCommonInfogetOrgCommonInfo01', info)
            commit('setQaClassifyClass', info)
            commit('setQaClassifySubject', info)
        },
        setOidcCode({ commit, state }, value) {
            commit('basic', { key: 'oidcCode', value })
        },
        setCommentInfo({ commit }, value) {
            commit('setCommnet', value)
        },
        setScopeInfo({ commit }, value) {
            commit('setScope', value)
        },
        setBbsCheckInfo({ commit }, value) {
            commit('setBbsCheck', value)
        },
        setBbsTagsList({ commit, state }, value) {
            commit('basic', { key: 'bbsTagsList', value })
        },
        setLoadingShowFlg({ commit, state }, value) {
            commit('basic', { key: 'loadingShowFlg', value })
        },
    },
}
