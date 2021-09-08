import axios from 'axios'
export default {
    state: () => ({
        searchKey: "",
        organizationInfo: {},
        searchAllDiKnowledge: {},
        searchAllOrganizationDidDocument: {},
        searchAllPreAvoid: {},
        searchAllbulletinBoardInfo: {}
    }),

    getters: {
        // DI ナレッジシェアの検索結果取得
        getSearchAllDiKnowledge(state) {
            return state.searchAllDiKnowledge = {
                details: [
                    { group: 'AI', title: 'Q：ロキソニン貼付剤の適応症は', Certainty: '12345', linkUrl: '' },
                    { group: 'keyword', title: 'Q：ロキソニンとベンザリンの相互作用についてロキソニンとベンザリンの相互作用について', Certainty: '', linkUrl: '' },
                    { group: 'keyword', title: ' Q：ロキソニンとオメプラゾンの相互作用について', Certainty: '', linkUrl: '' },
                    { group: 'keyword', title: ' Q：ロキソニンとデパケンの相互作用について', Certainty: '', linkUrl: '' },
                    { group: 'keyword', title: ' Q：ロキソニンとリスパダールの相互作用について', Certainty: '', linkUrl: '' },
                ]
            };
        },
        // 組織内 DI 記録（Q&A）の検索結果取得
        getSearchAllOrganizationDidDocument(state) {
            return state.searchAllOrganizationDidDocument = {
                count: "123"
                , details: [
                    { group: 'ownFacility', title: '痛み止めとして処方される痛み止めとして処方される痛み止めとして処方される', states: 'new', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'otherFacility', title: 'ロキソニンの用途については◯◯◯◯◯◯◯◯◯◯◯◯◯◯', states: 'new', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'otherFacility', title: 'ロキソニンテープ 50mg の用途◯◯◯◯◯◯◯◯◯◯◯◯◯', states: 'new', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'group', title: 'ロキソニンの用途については◯◯◯◯◯◯◯◯◯◯◯◯◯◯', states: 'update', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'group', title: 'ロキソニンの用途については◯◯◯◯◯◯◯◯◯◯◯◯◯◯', states: 'update', date: '2021.01.01', viewCount: '12345', linkUrl: '' }
                ]
            };
        },
        // 症例（プレアボイド）の検索結果取得
        getSearchAllPreAvoid(state) {
            return state.searchAllPreAvoid = {
                count: "456",
                details: [
                    { group: 'ownFacility', title: '採用薬に○○が追加されました。採用薬に○○が追加されました。', states: 'new', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'otherFacility', title: '採用薬に○○が追加されました。', states: 'new', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'otherFacility', title: '採用薬に○○が追加されました。', states: '', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'group', title: '採用薬に○○が追加されました。', states: 'new', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'group', title: '採用薬に○○が追加されました。', states: 'new', date: '2021.01.01', viewCount: '12345', linkUrl: '' }
                ]
            };
        },
        // 掲示板の検索結果取得
        getSearchAllBulletinBoardInfo(state) {
            return state.searchAllbulletinBoardInfo = {
                count: "456",
                details: [
                    { group: 'ownFacility', title: '痛み止めとして処方される痛み止めとして処方される痛み止めとして処方される', states: 'new', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'otherFacility', title: 'ロキソニンの用途については◯◯◯◯◯◯◯◯◯◯◯◯◯◯', states: 'new', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'otherFacility', title: 'ロキソニンテープ 50mg の用途ロキソニンテープの用途◯◯◯◯◯◯', states: 'new', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'group', title: 'ロキソニンの用途については◯◯◯◯◯◯◯◯◯◯◯◯◯◯', states: 'update', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'group', title: 'ロキソニンの用途については◯◯◯◯◯◯◯◯◯◯◯◯◯◯', states: 'update', date: '2021.01.01', viewCount: '12345', linkUrl: '' }
                ]
            };
        },
        searchAllGoogle(state) {
            const google = [
                { urlTitle: 'ロキソニン S（詳細）｜第一三共ヘルスケア', overview: '※プロドラッグ製剤とは、成分が体内で吸収されてから活性型に変化し、効果を発揮する仕組みの製剤です。ご利用のポイント．こんな時に。頭痛や生理痛など。突然くるつらい痛みに…', url: '' },
                { urlTitle: 'ロキソニン錠 60mg の基本情報（薬効分類・副作用・添付文書', overview: 'ロキソニン錠 60mg（一般名：ロキソプロフェンナトリウム水和物錠）の薬効分類・副作用・添付文書・薬価などを掲載しています。「処方薬辞典」は日経メディカルが運営する医療・医薬関係者向け医薬品検索データベースです。', url: '' },
                { urlTitle: 'ロキソプロフェン（内用）：ロキソニン', overview: 'ロキソニンとは？ロキソプロフェンの効能、副作用等を説明、ジェネリックや薬価も', url: '' }
            ]
            return google;
        },
        getSearchValue(state) {
            return state.searchKey
        }
    },

    mutations: {
        setSearchAllDiKnowledge(state, info) {
            state.SearchAllDiKnowledge = info
        },
        basic(state, payload) {
            state[payload.key] = payload.value
        },
    },

    actions: {
        saveSearchValue({ commit, state }, value) {
            commit('basic', { key: 'searchKey', value })
        },
        // ========================================
        // DI ナレッジシェアAPI実行
        // ========================================
        async searchOrganization({ rootState, commit }, value) {

            // API呼び出し
            // const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/todos`, {
            //     params: {
            //         token: rootState.apiToken,
            //         user_group_id: value
            //     }
            // })
            // 検索キー格納
            commit('basic', { key: 'searchKey', value })
            const info = {
                count: 1,
                searchResult: [
                    { group: 'ownFacility', title: '痛み止めとして処方される◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯', states: 'new', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'otherFacility', title: 'ロキソニンの用途については◯◯◯◯◯◯◯◯◯◯◯◯◯◯', states: 'new', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'otherFacility', title: 'ロキソニンテープ 50mg の用途◯◯◯◯◯◯◯◯◯◯◯◯◯', states: 'new', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'group', title: 'ロキソニンの用途については◯◯◯◯◯◯◯◯◯◯◯◯◯◯', states: 'update', date: '2021.01.01', viewCount: '12345', linkUrl: '' },
                    { group: 'group', title: 'ロキソニンの用途については◯◯◯◯◯◯◯◯◯◯◯◯◯◯', states: 'update', date: '2021.01.01', viewCount: '12345', linkUrl: '' }
                ]
            }
            // 検索結果格納
            commit('basic', { key: 'organizationInfo', info })
        }
    },
}
