import axios from 'axios'
import serve from '../../service/api'
export default {
    state: () => ({
        noticeInfo: [],
        bulletinBoardInfo: [],
        scientifiSocietyInfo: [],
        pmdaInfo: [],
        managementInfo: [],
        managementItemList: [],
        managementItemUserList: [],
    }),

    getters: {
        topNoticeInfo(state) {
            return state.noticeInfo
        },
        topBulletinBoardInfo(state) {
            return state.bulletinBoardInfo
        },
        topScientifiSocietyInfo(state) {
            const scientifiSocietyInfo = {
                details: [
                    {
                        dateFrom: '2021.01.01',
                        dateTo: '2021.12.30',
                        title: '一般社団法人妊娠と薬情報研究会。',
                        urlTitle: 'e-ラーニングBASIC',
                        url: 'https://medical-tribune.co.jp/rensai/2021/0729537412/',
                    },
                    {
                        dateFrom: '2021.01.01',
                        dateTo: '',
                        title: '福井県病院薬剤師会。',
                        urlTitle:
                            '血液腫瘍における感染症対策について考える ～福井県病院薬剤師会共催～',
                        url: 'https://www.jstage.jst.go.jp/article/rinketsu/27/11/27_11_2085/_article/-char/ja/',
                    },
                    {
                        dateFrom: '2021.01.01',
                        dateTo: '2021.12.30',
                        title: '日本製薬医学会',
                        urlTitle:
                            '【ハイブリット開催】第12回日本製薬医学会年次大会',
                        url: 'https://medical-tribune.co.jp/rensai/2021/0729537412/',
                    },
                ],
                imageLists: [
                    {
                        imageUrl:
                            'https://www.kabanoki.net/wp-content/uploads/2020/03/2n-6.png',
                        linkUrl: 'https://www.pmda.go.jp/index.html',
                    },
                    {
                        imageUrl:
                            'https://www.kabanoki.net/wp-content/uploads/2020/03/2n-6.png',
                        linkUrl: 'https://www.pmda.go.jp/index.html',
                    },
                    {
                        imageUrl:
                            'https://www.kabanoki.net/wp-content/uploads/2020/03/2n-6.png',
                        linkUrl: 'https://www.pmda.go.jp/index.html',
                    },
                    {
                        imageUrl:
                            'https://www.kabanoki.net/wp-content/uploads/2020/03/2n-6.png',
                        linkUrl: 'https://www.pmda.go.jp/index.html',
                    },
                ],
            }
            return scientifiSocietyInfo
        },
        topPMDAInfo(state) {
            return state.pmdaInfo
        },
        // management
        topManagementInfo(state) {
            const managementInfo = {
                lastName: '木村',
                name: '木村 太郎',
                title: 'doctor',
                hospital: '◯◯◯◯◯◯大学病院',
                authority: '管 理 者',
            }

            return managementInfo
        },
        // managementGroup
        topManagementItemList(state) {
            const managementItemList = [
                { title: '組織内DI 記録', itemStyle: 'title' },
                { title: '症例', itemStyle: 'title' },
                { title: '下書き一覧', itemStyle: 'title' },
            ]

            return managementItemList
        },
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
        },
        setTopPmda(state, info) {
            state.pmdaInfo = info
        },
    },

    actions: {
        async getTopNotice({ rootState, commit }) {
            const info = await serve.getTopNoticel()
            commit('setTopNotice', info.data)
        },
        async getTopBulletinBoardInfo({ rootState, commit }) {
            const info = await serve.getTopBulletinBoard()
            console.log('setTopBulletinboardinfo', info)
            commit('setTopBulletinboardinfo', info.data)
        },
        async getScientifiSocietyInfo({ rootState, commit }) {
            const info = await serve.getTopScientifiSociety()
            commit('setTopScientifisocietyInfo', info)
        },
        async getTopPMDA({ rootState, commit }) {
            const info = await serve.getTopPMDA()
            commit('setTopPmda', info.data)
        },
    },
}
