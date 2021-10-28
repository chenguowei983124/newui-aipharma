export default {
    state: () => ({
        isFormScreen: false,
        isLoadingShow: false,
        isMenuClick: false,
        isPortraitClick: false,
        isManagementClick: false,
        isIssueIconClick: false,
        qa_classify_class: {},
        qa_classify_subject: {},
        oidcCode: '',
        dateValueFrom: '',
        dateValueTo: '',
        styles: '-1',
        qa_classify_facility: [
            { value: '0', title: '全体' },
            { value: '1', title: '自施設のみ' },
            { value: '2', title: '他施設のみ' },
            { value: '3', title: 'グループ施設のみ' },
            { value: '4', title: 'グループ施設+自施設' },
        ],
        oidcCode: '',
        download: false,
    }),

    getters: {
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
    },

    mutations: {
        basic(state, payload) {
            state[payload.key] = payload.value
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
            // console.log(value)
        },
        setPortraitClick({ commit, state }, value) {
            commit('basic', { key: 'isPortraitClick', value })
            // console.log("isPortraitClick =" + value)
        },
        setManagementClick({ commit, state }, value) {
            commit('basic', { key: 'isManagementClick', value })
            // console.log("isManagementClick =" + value)
        },
        setDateValueFrom({ commit, state }, value) {
            commit('basic', { key: 'dateValueFrom', value })
            console.log('dateValueFrom =' + value)
        },
        setDateValueTo({ commit, state }, value) {
            commit('basic', { key: 'dateValueTo', value })
            console.log('dateValueTo =' + value)
        },
        setStyles({ commit, state }, value) {
            commit('basic', { key: 'styles', value })
            console.log('styles =' + value)
        },
        setIssueIconClick({ commit, state }, value) {
            commit('basic', { key: 'isIssueIconClick', value })
            // console.log("isManagementClick =" + value)
        },
        getCommonInfo({ commit, state }) {
            // console.log("getCommonInfo =11")
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
    },
}
