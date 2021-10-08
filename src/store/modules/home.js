import axios from 'axios'
export default {
    state: () => ({
        noticeInfo: [],
        bulletinBoardInfo: [],
        scientifiSocietyInfo: [],
        pmdaInfo: [],
        managementInfo: [],
        managementItemList: [],
        managementItemUserList: []
    }),

    getters: {
        topNoticeInfo(state) {
            // const noticeInfo =
            // {
            //     "details": [
            //         { group: 'organization', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加採用薬に○○が追加採用薬に○○が追加採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', id: '1234' },
            //         { group: 'whole', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', id: '123' },
            //         { group: 'group', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', id: '123' },
            //         { group: 'society', looked: 'Looked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', id: '123' },
            //         { group: 'whole', looked: 'Looked', date: '2021.01.01', title: '採用薬に○○が追加採用薬に○○が追加されました。', browseRequired: 'notbrowsed', notificationType: 'notice', viewCount: '12345', id: '123' }
            //     ]
            // }

            return state.noticeInfo;
        },
        topBulletinBoardInfo(state) {
            const bulletinBoardInfo = {
                "details": [
                    { group: 'organization', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', id: '123' },
                    { group: 'organization', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', id: '123' },
                    { group: 'organization', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', id: '123' },
                    { group: 'organization', looked: 'Looked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', id: '123' },
                    { group: 'organization', looked: 'Looked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', id: '123' }
                ]
            }

            return state.bulletinBoardInfo;
        },
        topScientifiSocietyInfo(state) {
            const scientifiSocietyInfo = {
                "details": [
                    { dateFrom: '2021.01.01', dateTo: '2021.12.30', title: '一般社団法人妊娠と薬情報研究会。', urlTitle: 'e-ラーニングBASIC', url: 'https://medical-tribune.co.jp/rensai/2021/0729537412/' },
                    { dateFrom: '2021.01.01', dateTo: '', title: '福井県病院薬剤師会。', urlTitle: '血液腫瘍における感染症対策について考える ～福井県病院薬剤師会共催～', url: 'https://www.jstage.jst.go.jp/article/rinketsu/27/11/27_11_2085/_article/-char/ja/' },
                    { dateFrom: '2021.01.01', dateTo: '2021.12.30', title: '日本製薬医学会', urlTitle: '【ハイブリット開催】第12回日本製薬医学会年次大会', url: 'https://medical-tribune.co.jp/rensai/2021/0729537412/' },
                ],
                "imageLists": [
                    { imageUrl: 'https://www.kabanoki.net/wp-content/uploads/2020/03/2n-6.png', linkUrl: 'https://www.pmda.go.jp/index.html' },
                    { imageUrl: 'https://www.kabanoki.net/wp-content/uploads/2020/03/2n-6.png', linkUrl: 'https://www.pmda.go.jp/index.html' },
                    { imageUrl: 'https://www.kabanoki.net/wp-content/uploads/2020/03/2n-6.png', linkUrl: 'https://www.pmda.go.jp/index.html' },
                    { imageUrl: 'https://www.kabanoki.net/wp-content/uploads/2020/03/2n-6.png', linkUrl: 'https://www.pmda.go.jp/index.html' },

                ]
            }
            return scientifiSocietyInfo;
        }, topPMDAInfo(state) {
            const pmdaInfo =
            {
                "details": [
                    { type: ['eventType', 'recruitment'], date: '2021.01.01', title: '一般競争入札公告（政府調達）（令和4年定期購読洋雑誌の調達）', states: 'new', url: 'https://www.pmda.go.jp/procurements/public-bidding/general-competition-government/0077.html' },
                    { type: ['recruitment'], date: '2021.01.01', title: '令和2年度入札情報（政府調達）', states: 'new', url: 'https://www.pmda.go.jp/procurements/public-bidding/general-competition-government/0044.html' },
                    { type: ['international'], date: '2021.01.01', title: '令和2年度入札情報（政府調達）', states: 'new', url: 'https://www.pmda.go.jp/procurements/public-bidding/general-competition-government/0044.html' },
                    { type: ['examination'], date: '2021.01.01', title: '令和2年度入札情報（政府調達）', states: 'update', url: 'https://www.pmda.go.jp/procurements/public-bidding/general-competition-government/0044.html' },
                    { type: ['rescue'], date: '2021.01.01', title: '令和2年度入札情報（政府調達）', states: '', url: 'https://www.pmda.go.jp/procurements/public-bidding/general-competition-government/0044.html' }
                ]
            }


            return pmdaInfo;
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
        setTopNotice(state, info) {
            state.noticeInfo = info
        },
        setTopBulletinboardinfo(state, info) {
            state.bulletinBoardInfo = info
        },
        setTopScientifisocietyInfo(state, info) {
            state.scientifiSocietyInfo = info
        }
    },

    actions: {
        async getTopNotice({ rootState, commit }) {
            const info = await axios.get(`http://mock-api.com/ZzRpqmne.mock/preavoid/get_topmenu_Noticel_info`, {
                params: {
                    // token: '123456',
                }
            })
            commit('setTopNotice', info.data)
            // commit('basic', { key: 'noticeInfo', info })
        },

        // getTopNotice({ rootState, commit }, userGroupId) {
        // http://mock-api.com/ZzRpqmne.mock/preavoid/get_organization_search_info

        // const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/todos`, {
        //     params: {
        //         token: rootState.apiToken,
        //         user_group_id: userGroupId
        //     }
        // })
        // commit('setTopNotice', info)
        // },
        async getTopBulletinBoardInfo({ rootState, commit }, userGroupId) {
            const info = await axios.get(`http://mock-api.com/ZzRpqmne.mock/preavoid/get_topmenu_bulletinboard_info`, {
                params: {
                    // token: '123456',
                }
            })
            commit('setTopBulletinboardinfo', info.data)

            // const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/todos`, {
            //     params: {
            //         token: rootState.apiToken,
            //         user_group_id: userGroupId
            //     }
            // })
            // commit('setTopNotice', info)
        },
        async getScientifiSocietyInfoe({ rootState, commit }, userGroupId) {
            const info = await axios.get(`http://mock-api.com/ZzRpqmne.mock/preavoid/get_topmenu_scientifisociety_info`, {
                params: {
                    // token: rootState.apiToken,
                    // user_group_id: userGroupId
                }
            })
            commit('setTopScientifisocietyInfo', info)
        },
        getPmdaInfo({ rootState, commit }, userGroupId) {
            // const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/todos`, {
            //     params: {
            //         token: rootState.apiToken,
            //         user_group_id: userGroupId
            //     }
            // })
            // commit('setTopNotice', info)
        },
    },
}
