import axios from 'axios'
export default {
    state: () => ({
        noticeInfo: [],
        bulletinBoardInfo: [],
        scientifiSocietyInfo: {},
        pmdaInfo: [],
        managementInfo: [],
        managementItemList: [],
        managementItemUserList: []
    }),

    getters: {
        topNoticeInfo(state) {
            // const noticeInfo = [
            //     { group: 'organization', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加採用薬に○○が追加採用薬に○○が追加採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', linkUrl: '' },
            //     { group: 'whole', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', linkUrl: '' },
            //     { group: 'group', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', linkUrl: '' },
            //     { group: 'society', looked: 'Looked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', linkUrl: '' },
            //     { group: 'whole', looked: 'Looked', date: '2021.01.01', title: '採用薬に○○が追加採用薬に○○が追加されました。', browseRequired: 'notbrowsed', notificationType: 'notice', viewCount: '12345', linkUrl: '' }
            // ]

            return state.noticeInfo;
        },
        topBulletinBoardInfo(state) {
            // const bulletinBoardInfo = [
            //     { group: 'organization', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', linkUrl: '' },
            //     { group: 'organization', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', linkUrl: '' },
            //     { group: 'organization', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', linkUrl: '' },
            //     { group: 'organization', looked: 'Looked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', linkUrl: '' },
            //     { group: 'organization', looked: 'Looked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', linkUrl: '' }
            // ]

            return state.bulletinBoardInfo;
        },
        topScientifiSocietyInfo(state) {
            // const scientifiSocietyInfo = {
            //     "details": [
            //         { dateFrom: '2021.01.01', dateTo: '2021.12.30', title: '一般社団法人妊娠と薬情報研究会。', urlTitle: 'e-ラーニングBASIC', linkUrl: '' },
            //         { dateFrom: '2021.01.01', dateTo: '', title: '福井県病院薬剤師会。', urlTitle: '血液腫瘍における感染症対策について考える ～福井県病院薬剤師会共催～', linkUrl: '' },
            //         { dateFrom: '2021.01.01', dateTo: '2021.12.30', title: '日本製薬医学会', urlTitle: '【ハイブリット開催】第12回日本製薬医学会年次大会', linkUrl: '' },
            //     ],
            //     "imageLists": [
            //         { imageUrl: 'organization', linkUrl: 'notLooked' },
            //         { imageUrl: 'organization', linkUrl: 'notLooked' },
            //         { imageUrl: 'organization', linkUrl: 'notLooked' },
            //         { imageUrl: 'organization', linkUrl: 'notLooked' },
            //         { imageUrl: 'organization', linkUrl: 'notLooked' },
            //         { imageUrl: 'organization', linkUrl: 'notLooked' },
            //         { imageUrl: 'organization', linkUrl: 'notLooked' },
            //         { imageUrl: 'organization', linkUrl: 'notLooked' },

            //     ]
            // }
            return state.scientifiSocietyInfo;
        },
        topPMDAInfo(state) {
            // const pmdaInfo = [
            //     { type: ['eventType', 'recruitment'], date: '2021.01.01', title: '採用薬に○○が追加されました。', states: 'new', linkUrl: '' },
            //     { type: 'recruitment', date: '2021.01.01', title: '採用薬に○○が追加されました。', states: 'new', linkUrl: '' },
            //     { type: 'international', date: '2021.01.01', title: '採用薬に○○が追加されました。', states: 'new', linkUrl: '' },
            //     { type: 'examination', date: '2021.01.01', title: '採用薬に○○が追加されました。', states: 'update', linkUrl: '' },
            //     { type: 'rescue', date: '2021.01.01', title: '採用薬に○○が追加されました。', states: '', linkUrl: '' }
            // ]

            return state.pmdaInfo;
        },
        // management
        topManagementInfo(state) {
            const managementInfo = { lastName: '木村', name: '木村 太郎', title: 'doctor', hospital: '◯◯◯◯◯◯大学病院', authority: '管 理 者', }

            return managementInfo;
        },
        // managementGroup
        topManagementItemList(state) {
            const managementItemList = [
                { 'title': '組織内DI 記録', 'itemStyle': 'title' },
                { 'title': '症例', 'itemStyle': 'title' },
                { 'title': '下書き一覧', 'itemStyle': 'title' }
            ]

            return managementItemList;
        },
        // managementUserGroup
        topManagementItemUserList(state) {
            const managementItemUserList = [{ 'title': 'マイページ' },
            { 'title': '施設切替' },
            { 'title': '設定' },
            { 'title': 'ログアウト' }
            ]

            return managementItemUserList;
        },
        // managementitemLists
        topManagementitemLists(state) {
            const managementitemList = [
                { 'title': 'データ登録', 'itemStyle': 'title' },
                { 'title': '組織内DI 記録（Q&A）登録', 'itemStyle': 'item' },
                { 'title': '症例（プレアボイド）登録', 'itemStyle': 'item' },
                { 'title': 'マイデータ', 'itemStyle': 'title' },
                { 'title': '組織内DI 記録（Q&A）', 'itemStyle': 'item' },
                { 'title': '症例（プレアボイド）', 'itemStyle': 'item' },
                { 'title': '下書き一覧', 'itemStyle': 'item' },
            ]

            return managementitemList;
        },
        // managementitemLists
        topPcManagementitemLists(state) {
            const managementitemList = [
                { 'title': 'データ登録', 'itemStyle': 'title' },
                { 'title': '組織内DI 記録 登録', 'itemStyle': 'item' },
                { 'title': '症例 登録', 'itemStyle': 'item' },
                { 'title': 'マイデータ', 'itemStyle': 'title' },
                { 'title': '組織内DI 記録 ', 'itemStyle': 'item' },
                { 'title': '症例', 'itemStyle': 'item' },
                { 'title': '下書き一覧', 'itemStyle': 'item' },
            ]

            return managementitemList;
        }
    },

    mutations: {
        basic(state, payload) {
            state[payload.key] = payload.info.data
        },

    },

    actions: {
        // トップ画面のお知らせ情報取得
        async getTopNotice({ rootState, commit }) {
            const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/get_topmenu_Noticel_info`, {
                params: {
                    token: '123456',
                }
            })
            commit('basic', { key: 'noticeInfo', info })
        },
        // トップ画面の掲示板情報取得
        async getTopBulletinBoardInfo({ rootState, commit }) {
            const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/get_topmenu_bulletinboard_info`, {
                params: {
                    token: '123456',
                }
            })
            commit('basic', { key: 'bulletinBoardInfo', info })
        },
        // トップ画面の学会情報取得
        async getScientifiSocietyInfoe({ rootState, commit }) {
            const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/get_topmenu_scientifisociety_info`, {

            })
            commit('basic', { key: 'scientifiSocietyInfo', info })
        },
        // トップ画面のPDMAリスト情報取得
        async getPmdaInfo({ rootState, commit }) {
            const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/get_topmenu_pmda_info`, {

            })
            commit('basic', { key: 'pmdaInfo', info })
        },
    },
}
