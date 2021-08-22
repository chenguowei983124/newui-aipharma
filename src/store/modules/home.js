import axios from 'axios'
export default {
    state: () => ({
        noticeInfo: [],
        bulletinBoardInfo: [],
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
