import axios from 'axios'
import serve from '../../service/api'
export default {
    state: () => ({
        searchKey: '',
        organizationInfo: {},
        searchAllDiKnowledgeInfo: {},
        searchAllOrganizationDidDocument: { allCount: '' },
        searchAllPreAvoid: { allCount: '' },
        searchAllbulletinBoardInfo: {},
    }),

    getters: {
        // DI ナレッジシェアの検索結果取得
        getSearchAllDiKnowledge(state) {
            return state.searchAllDiKnowledgeInfo
        },
        // 組織内 DI 記録（Q&A）の検索結果取得
        getSearchAllOrganizationDidDocument(state) {
            return state.searchAllOrganizationDidDocument
        },
        // 症例（プレアボイド）の検索結果取得
        getSearchAllPreAvoid(state) {
            return state.searchAllPreAvoid
        },
        // 掲示板の検索結果取得
        getSearchAllBulletinBoardInfo(state) {
            return (state.searchAllbulletinBoardInfo = {
                count: '456',
                details: [
                    {
                        group: 'ownFacility',
                        title: '痛み止めとして処方される痛み止めとして処方される痛み止めとして処方される',
                        states: 'new',
                        date: '2021.01.01',
                        viewCount: '12345',
                        linkUrl: '',
                    },
                    {
                        group: 'otherFacility',
                        title: 'ロキソニンの用途については◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
                        states: 'new',
                        date: '2021.01.01',
                        viewCount: '12345',
                        linkUrl: '',
                    },
                    {
                        group: 'otherFacility',
                        title: 'ロキソニンテープ 50mg の用途ロキソニンテープの用途◯◯◯◯◯◯',
                        states: 'new',
                        date: '2021.01.01',
                        viewCount: '12345',
                        linkUrl: '',
                    },
                    {
                        group: 'group',
                        title: 'ロキソニンの用途については◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
                        states: 'update',
                        date: '2021.01.01',
                        viewCount: '12345',
                        linkUrl: '',
                    },
                    {
                        group: 'group',
                        title: 'ロキソニンの用途については◯◯◯◯◯◯◯◯◯◯◯◯◯◯',
                        states: 'update',
                        date: '2021.01.01',
                        viewCount: '12345',
                        linkUrl: '',
                    },
                ],
            })
        },
        searchAllGoogle(state) {
            const google = [
                {
                    urlTitle: 'ロキソニン S（詳細）｜第一三共ヘルスケア',
                    overview:
                        '※プロドラッグ製剤とは、成分が体内で吸収されてから活性型に変化し、効果を発揮する仕組みの製剤です。ご利用のポイント．こんな時に。頭痛や生理痛など。突然くるつらい痛みに…',
                    url: '',
                },
                {
                    urlTitle:
                        'ロキソニン錠 60mg の基本情報（薬効分類・副作用・添付文書',
                    overview:
                        'ロキソニン錠 60mg（一般名：ロキソプロフェンナトリウム水和物錠）の薬効分類・副作用・添付文書・薬価などを掲載しています。「処方薬辞典」は日経メディカルが運営する医療・医薬関係者向け医薬品検索データベースです。',
                    url: '',
                },
                {
                    urlTitle: 'ロキソプロフェン（内用）：ロキソニン',
                    overview:
                        'ロキソニンとは？ロキソプロフェンの効能、副作用等を説明、ジェネリックや薬価も',
                    url: '',
                },
            ]
            return google
        },
        getSearchValue(state) {
            return state.searchKey
        },
    },

    mutations: {
        searchAllDiKnowledgeInfo(state, info) {
            state.searchAllDiKnowledgeInfo = info
        },
        searchAllOrganizationInfo(state, info) {
            state.searchAllOrganizationDidDocument = info
        },
        searchAllPreAvoidInfo(state, info) {
            state.searchAllPreAvoid = info
        },
        basic(state, payload) {
            state[payload.key] = payload.value
        },
        setSearchKey(state, info) {
            state.searchKey = info
        },
    },

    actions: {
        saveSearchValue({ commit, state }, value) {
            commit('setSearchKey', value)
        },
        // ========================================
        // DI ナレッジシェアAPI実行
        // ========================================
        async searchALLLDiKnowledgeInfo({ rootState, state, commit }) {
            let params = {
                searchKey: state.searchKey,
            }
            const info = await serve
                .getALLDiKnowledgeInfo(params)
                .then((response) => {
                    // 検索結果格納
                    commit('searchAllDiKnowledgeInfo', response.data)
                })
        },
        // ========================================
        // DI ナレッジシェアAPI実行
        // ========================================
        async searchALLLOrganizationInfo({ rootState, state, commit }) {
            let params = {
                searchKey: state.searchKey,
            }
            const info = await serve
                .getALLOrganizationInfo(params)
                .then((response) => {
                    // 検索結果格納
                    console.log('own', response.data)
                    commit('searchAllOrganizationInfo', response.data)
                })
        },
        // ========================================
        // 症例API実行
        // ========================================
        async searchALLLPreAvoidInfo({ rootState, state, commit }) {
            let params = {
                searchKey: state.searchKey,
            }
            const info = await serve
                .getALLMedicineCase_Info(params)
                .then((response) => {
                    // 検索結果格納
                    commit('searchAllPreAvoidInfo', response.data)
                })
        },
    },
}
