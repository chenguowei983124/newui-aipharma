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
            const noticeInfo = [
                { group: 'organization', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', linkUrl: '' },
                { group: 'whole', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', linkUrl: '' },
                { group: 'group', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', linkUrl: '' },
                { group: 'society', looked: 'Looked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', linkUrl: '' },
                { group: 'whole', looked: 'Looked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'notbrowsed', notificationType: 'notice', viewCount: '12345', linkUrl: '' }
            ]

            return noticeInfo;
        },
        topBulletinBoardInfo(state) {
            const bulletinBoardInfo = [
                { group: 'organization', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', linkUrl: '' },
                { group: 'organization', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', linkUrl: '' },
                { group: 'organization', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', linkUrl: '' },
                { group: 'organization', looked: 'Looked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', linkUrl: '' },
                { group: 'organization', looked: 'Looked', date: '2021.01.01', title: '採用薬に○○が追加されました。', notificationType: 'query', viewCount: '12345', linkUrl: '' }
            ]

            return bulletinBoardInfo;
        },
        topScientifiSocietyInfo(state) {
            const scientifiSocietyInfo = {
                "details": [
                    { dateFrom: '2021.01.01', dateTo: '2021.12.30', title: '採用薬に○○が追加されました。', urlTitle: 'dfsdfsdfsd', linkUrl: '' },
                    { dateFrom: '2021.01.01', dateTo: '', title: '採用薬に○○が追加されました。', urlTitle: 'query', linkUrl: '' },
                    { dateFrom: '2021.01.01', dateTo: '2021.12.30', title: '採用薬に○○が追加されました。', urlTitle: 'query', linkUrl: '' },
                    { dateFrom: '2021.01.01', dateTo: '', title: '採用薬に○○が追加されました。', urlTitle: 'query', linkUrl: '' },
                    { dateFrom: '2021.01.01', dateTo: '2021.12.30', title: '採用薬に○○が追加されました。', urlTitle: 'query', linkUrl: '' },
                    { dateFrom: '2021.01.01', dateTo: '2021.12.30', title: '採用薬に○○が追加されました。', urlTitle: 'query', linkUrl: '' },
                    { dateFrom: '2021.01.01', dateTo: '', title: '採用薬に○○が追加されました。', urlTitle: 'query', linkUrl: '' },
                    { dateFrom: '2021.01.01', dateTo: '2021.12.30', title: '採用薬に○○が追加されました。', urlTitle: 'query', linkUrl: '' },
                    { dateFrom: '2021.01.01', dateTo: '', title: '採用薬に○○が追加されました。', urlTitle: 'query', linkUrl: '' },
                    { dateFrom: '2021.01.01', dateTo: '2021.12.30', title: '採用薬に○○が追加されました。', urlTitle: 'query', linkUrl: '' },
                    { dateFrom: '2021.01.01', dateTo: '', title: '採用薬に○○が追加されました。', urlTitle: 'query', linkUrl: '' }
                ],
                "imageLists": [
                    { imageUrl: 'organization', linkUrl: 'notLooked' },
                    { imageUrl: 'organization', linkUrl: 'notLooked' },
                    { imageUrl: 'organization', linkUrl: 'notLooked' },
                    { imageUrl: 'organization', linkUrl: 'notLooked' },
                    { imageUrl: 'organization', linkUrl: 'notLooked' },
                    { imageUrl: 'organization', linkUrl: 'notLooked' },
                    { imageUrl: 'organization', linkUrl: 'notLooked' },
                    { imageUrl: 'organization', linkUrl: 'notLooked' },

                ]
            }
            return scientifiSocietyInfo;
        }, topPMDAInfo(state) {
            const pmdaInfo = [
                { type: 'eventType', date: '2021.01.01', title: '採用薬に○○が追加されました。', states: 'new', linkUrl: '' },
                { type: 'recruitment', date: '2021.01.01', title: '採用薬に○○が追加されました。', states: 'new', linkUrl: '' },
                { type: 'international', date: '2021.01.01', title: '採用薬に○○が追加されました。', states: 'new', linkUrl: '' },
                { type: 'examination', date: '2021.01.01', title: '採用薬に○○が追加されました。', states: 'update', linkUrl: '' },
                { type: 'rescue', date: '2021.01.01', title: '採用薬に○○が追加されました。', states: '', linkUrl: '' }
            ]

            return pmdaInfo;
        },
        // management
        topManagementInfo(state) {
            const managementInfo = { name: '木村 太郎', title: 'doctor', hospital: '◯◯◯◯◯◯◯◯◯◯大学病院', authority: '管 理 者', }

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
        }
    },

    mutations: {
        setTopNotice(state, info) {
            state.noticeInfo = info
        },
    },

    actions: {
        async getTopNotice({ rootState, commit }, userGroupId) {
            const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/todos`, {
                params: {
                    token: rootState.apiToken,
                    user_group_id: userGroupId
                }
            })
            commit('setTopNotice', info)
        },
    },
}
