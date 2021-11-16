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
        getCommonInfo({ commit, state }) {
            let value = [
                { value: '0', title: '医療用医薬品（内服薬）' },
                { value: '1', title: '医療用医薬品（注射薬）' },
                { value: '2', title: '医療用医薬品（外用薬-塗布）' },
                { value: '3', title: '医療用医薬品（外用薬-貼付）' },
                { value: '4', title: '医療用医薬品（外用薬-吸入）' },
                { value: '5', title: '医療用医薬品（外用薬-点眼）' },
                { value: '6', title: '医療用医薬品（外用薬-その他）' },
                { value: '7', title: '一般医薬品・要指導医薬品' },
                { value: '8', title: '体外診断用医薬品' },
                { value: '9', title: '治験薬' },
                { value: '10', title: '医療機器・医療資材・衛生材料' },
                { value: '11', title: '院内製剤・薬品' },
                { value: '12', title: '不明' },
                { value: '13', title: 'その他' },
            ]

            commit('basic', { key: 'qa_classify_class', value })

            value = [
                { value: '0', title: '小児' },
                { value: '1', title: '高齢者' },
                { value: '2', title: '妊娠・授乳婦' },
                { value: '3', title: '過敏症' },
                { value: '4', title: '腎障害・透析' },
                { value: '5', title: '肝障害' },
                { value: '6', title: '配合変化・フィルター' },
                { value: '7', title: '相互作用' },
                { value: '8', title: '安定性・使用期限' },
                { value: '9', title: '医薬品鑑別' },
                { value: '10', title: '価格・処方制限' },
                { value: '11', title: '警告・禁忌' },
                { value: '12', title: '効能・効果' },
                { value: '13', title: '採用の有無・請求方法' },
                { value: '13', title: '手続き・制度' },
                { value: '13', title: '製品不具合の調査' },
                { value: '13', title: '資材関連' },
                { value: '13', title: '処方の仕方' },
                { value: '13', title: '製薬会社連絡' },
                { value: '13', title: '組成・剤形・規格' },
                { value: '13', title: '中毒' },
                { value: '13', title: '調製方法' },
                { value: '13', title: 'TDM・体内動態' },
                { value: '13', title: '副作用' },
                { value: '13', title: '粉砕・簡易懸濁' },
                { value: '13', title: '薬物治療・ガイドライン' },
                { value: '13', title: '用法・用量' },
                { value: '13', title: '漢方・生薬' },
                { value: '13', title: '不明' },
                { value: '13', title: 'その他' },
            ]

            commit('basic', { key: 'qa_classify_subject', value })
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
