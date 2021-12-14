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
        commonInfo: {},
        commentInfo: {},
        oidcCode: 'test',
        dateValueFrom: '',
        dateValueTo: '',
        styles: '-1',
        scope: 'created_at-desc',
        // 検索条件
        searchWord: '', // キーワード
        bbsCheckInfo: {
            checkTitle: true,
            checkContent: true,
            checkComment: true,
            checkPost: true,
            checkLastEditor: true,
            checkFacilityName: true,
        },
        ediCheckInfo: {
            checkTitle: true,
            checkContent: true,
            checkComment: true,
            checkPost: true,
            checkLastEditor: true,
            checkFacilityName: true,
        },
        oidcCode: '',
        download: false,
        upload: false,
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
        getUpload(state) {
            return state.upload
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
        // 各画面のプルダウン情報取得
        getCommonInfo(state) {
            return state.commonInfo
        },
        getCommonInfo_AskedPerson(state) {
            let arr = Array.from(
                state.commonInfo.asked_persons_class.map((item) => {
                    return {
                        value: item.id,
                        title: item.name,
                    }
                })
            )

            return arr
        },
        getCommonInfo_PatientGgender(state) {
            let arr = Array.from(
                state.commonInfo.patient_gender.map((item) => {
                    return {
                        value: item.name,
                        title: item.name,
                    }
                })
            )

            return arr
        },
        getCommonInfo_qa_classify_class(state) {
            let arr = Array.from(
                state.commonInfo.qa_classify_class.map((item) => {
                    return {
                        value: item.title,
                        label: item.title,
                    }
                })
            )
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i].value === '0') {
                    delete arr[i]
                }
            }
            return arr
        },
        getCommonInfo_qa_category_lists(state) {
            let arr = Array.from(
                state.commonInfo.qa_category_lists.map((item) => {
                    return {
                        value: item.title,
                        label: item.title,
                    }
                })
            )
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i].value === '0') {
                    delete arr[i]
                }
            }
            return arr
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
        // キーワード
        getSearchWord(state) {
            return state.searchWord
        },
        getBbsCheckInfo(state) {
            return state.bbsCheckInfo
        },
        getEdiCheckInfo(state) {
            return state.ediCheckInfo
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
        setEidCheck(state, info) {
            state.ediCheckInfo = info
        },
        // 薬の分類
        setQaClassifyClass(state, info) {
            state.qa_classify_class = info.data.qa_classify_class
        },
        // 質問区分
        setQaClassifySubject(state, info) {
            state.qa_classify_subject = info.data.qa_category_lists
        },
        setCommon(state, info) {
            state.commonInfo = info.data
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
        setUpload({ commit }, value) {
            commit('basic', { key: 'upload', value })
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
        getCommonInfo({ rootState, commit }, info) {
            commit('setQaClassifyClass', info)
            commit('setQaClassifySubject', info)
            commit('setCommon', info)
        },
        setOidcCode({ commit, state }, value) {
            commit('basic', { key: 'oidcCode', value })
        },
        // コメント取得
        setCommentInfo({ commit }, value) {
            commit('setCommnet', value)
        },
        setScopeInfo({ commit }, value) {
            commit('setScope', value)
        },
        // キーワード
        setSearchWord({ commit, state }, value) {
            commit('basic', { key: 'searchWord', value })
        },
        setBbsCheckInfo({ commit }, value) {
            commit('setBbsCheck', value)
        },
        setEdiCheckInfo({ commit }, value) {
            commit('setEidCheck', value)
        },
        setBbsTagsList({ commit, state }, value) {
            commit('basic', { key: 'bbsTagsList', value })
        },
        setLoadingShowFlg({ commit, state }, value) {
            commit('basic', { key: 'loadingShowFlg', value })
        },
    },
}
