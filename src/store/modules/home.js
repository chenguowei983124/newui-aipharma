import axios from 'axios'
export default {
    state: () => ({
        noticeInfo: [],
        bulletinBoardInfo: [],
        managementInfo: [],
        managementItemList: [],
        managementItemUserList: []
    }),

    getters: {
        topNoticeInfo(state) {
            const noticeInfo = [
                { group: 'whole', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', linkUrl: '' },
                { group: 'whole', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', linkUrl: '' },
                { group: 'whole', looked: 'notLooked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', linkUrl: '' },
                { group: 'whole', looked: 'Looked', date: '2021.01.01', title: '採用薬に○○が追加されました。', browseRequired: 'browse', notificationType: 'notice', viewCount: '12345', linkUrl: '' },
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
        // management
        topManagementInfo(state) {
            const managementInfo = { name: '木村 太郎', title: 'doctor', hospital: '◯◯◯◯◯◯◯◯◯◯大学病院', authority: '管 理 者', }

            return managementInfo;
        },
        // managementGroup
        topManagementItemList(state) {
            const managementItemList = [
                { 'id': '1', 'title': '組織内DI 記録', 'itemStyle': 'title' },
                { 'id': '4', 'title': '症例', 'itemStyle': 'title' },
                { 'id': '8', 'title': '下書き一覧', 'itemStyle': 'title' }
            ]

            return managementItemList;
        },
        // managementUserGroup
        topManagementItemUserList(state) {
            const managementItemUserList = [{ 'id': '1', 'title': 'マイページ' },
            { 'id': '2', 'title': '施設切替' },
            { 'id': '3', 'title': '設定' },
            { 'id': '4', 'title': 'ログアウト' }
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
