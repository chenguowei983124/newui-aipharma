import axios from 'axios'
import serve from '../../service/api'
export default {
    state: () => ({
        organizationDateSort: [
            { "value": "0", "title": "最終編集日が新しい順" },
            { "value": "1", "title": "最終編集日が古い" },
            { "value": "2", "title": "Goodが多い順" },
            { "value": "3", "title": "Badが多い順" },
            { "value": "4", "title": "コメント数が多い順" },
            { "value": "5", "title": "コメント数が少ない順" },
            { "value": "6", "title": "Q&A-ID昇順" },
            { "value": "7", "title": "Q&A-ID降順" }
        ],
        organizationCountSort: [
            { "value": "0", "title": "20件 表示" },
            { "value": "1", "title": "50件 表示" },
            { "value": "2", "title": "100件 表示" }
        ],
        goodMessageBox: false,
        commentMessageBox: false,
        organizationSearchInfo: {},
        organizationSeartorenndoTab: {},
        isOrganizationSearch: false,
    }),

    getters: {
        getGoodMessageBox(state) {
            return state.goodMessageBox
        },
        getCommentMessageBox(state) {
            return state.commentMessageBox
        },
        getIsOrganizationSearch(state) {
            return state.isOrganizationSearch
        },
        organizationSearchInfo(state) {
            // const organizationSearchInfo = {
            //     "searchWords": [
            //         "ロキソニン",
            //         "用途"
            //     ],
            //     "allCount": 145,
            //     "qas": {
            //         "qa68555": {
            //             "facilityIdentificationNumber": 0,
            //             "id": 68555,
            //             "group": "ownFacility",
            //             "question": "ロキソニンの用途",
            //             "answer": {
            //                 "0": {
            //                     "info": "回答作成待ち000"
            //                 },
            //                 "1": {
            //                     "info": "回答作成待ち001"
            //                 },
            //                 "2": {
            //                     "info": "回答作成待ち002"
            //                 }
            //             },
            //             "facilityQaNumber": 10028380,
            //             "user": "システム管理者",
            //             "createdAt": "2021.09.09",
            //             "updatedUser": "システム管理者",
            //             "updatedAt": "2021.09.09",
            //             "approval": "承認済",
            //             "askedAt": "2021.09.09",
            //             "askedPersonClassName": "患者・患者家族",
            //             "shareScope": "全体公開",
            //             "askedPersonClass": null,
            //             "note": "備考",
            //             "qaClassifyClass": null,
            //             "pubmed": "12345",
            //             "urls": {
            //                 "0": {
            //                     "url": "http://sample",
            //                     "title": "fasdfasd"
            //                 }
            //             },
            //             "medicines": {
            //                 "0": {
            //                     "name": "医薬品テスト"
            //                 },
            //                 "1": {
            //                     "name": "医薬品タグ1"
            //                 }
            //             },
            //             "keywordTags": {
            //                 "0": {
            //                     "name": "キーワードテスト"
            //                 },
            //                 "1": {
            //                     "name": "テスト２"
            //                 }
            //             },
            //             "referenceMaterials": {
            //                 "0": {
            //                     "name": "添付文書"
            //                 },
            //                 "1": {
            //                     "name": "インタビューフォーム"
            //                 }
            //             },
            //             "categories": {
            //                 "0": {
            //                     "name": "小児"
            //                 },
            //                 "1": {
            //                     "name": "高齢者"
            //                 }
            //             },
            //             "viewCount": 54321,
            //             "feedbackGood": 0,
            //             "feedbackBad": 0,
            //             "feedbackComment": 0,
            //             "isMyGoodFeedback": false,
            //             "isMyBadFeedback": false,
            //             "isMyCommentFeedback": 0,
            //             "prefecturesName": "北海道",
            //             "facilityScale": "企業",
            //             "userGroupName": "木村情報技術",
            //             "askedPersonMedicalDepartments": {
            //                 "0": {
            //                     "name": "診療科タグ1"
            //                 },
            //                 "1": {
            //                     "name": "診療科タグ2"
            //                 }
            //             },
            //             "documents": {
            //                 "0": {
            //                     "name": "QAインポート用テンプレート(3).xlsx",
            //                     "url": "/attachments/showDocument?hashKey=6b6d737a904c893a59f7b584bb3071bdb1e67197&id=243"
            //                 }
            //             },
            //             "qaQaClassifyClasses": {
            //                 "0": {
            //                     "name": "医療用医薬品（内服薬）"
            //                 },
            //                 "1": {
            //                     "name": "医療用医薬品（注射薬）"
            //                 }
            //             },
            //             "customDetails": {
            //                 "0": {
            //                     "title": "木村情報技術カスタム項目1",
            //                     "dataType": "text",
            //                     "data": "テキスト"
            //                 },
            //                 "1": {
            //                     "title": "木村情報技術カスタム項目2",
            //                     "dataType": "single",
            //                     "data": "選択肢1"
            //                 },
            //                 "2": {
            //                     "title": "木村情報技術カスタム項目3",
            //                     "dataType": "multiple",
            //                     "data": [
            //                         "選択肢1",
            //                         "選択肢2"
            //                     ]
            //                 },
            //                 "3": {
            //                     "title": "木村情報技術カスタム項目4",
            //                     "dataType": "multiple",
            //                     "data": [
            //                         "選択肢1",
            //                         "選択肢2"
            //                     ]
            //                 },
            //                 "4": {
            //                     "title": "木村情報技術カスタム項目5",
            //                     "dataType": "multiple",
            //                     "data": [
            //                         "選択肢1",
            //                         "選択肢2"
            //                     ]
            //                 }
            //             }
            //         },
            //         "qa50003": {
            //             "facilityIdentificationNumber": 0,
            //             "id": 50003,
            //             "group": "otherFacility",
            //             "question": "質問",
            //             "answer": {
            //                 "0": {
            //                     "info": "回答作成待ち000"
            //                 },
            //                 "1": {
            //                     "info": "回答作成待ち001"
            //                 },
            //                 "2": {
            //                     "info": "回答作成待ち002"
            //                 }
            //             },
            //             "facilityQaNumber": 10010002,
            //             "user": "システム管理者",
            //             "createdAt": "2020.10.23",
            //             "updatedUser": "システム管理者",
            //             "updatedAt": "2020.10.23",
            //             "approval": "承認済",
            //             "askedAt": "2020.05.01",
            //             "askedPersonClassName": "医師",
            //             "shareScope": "全体公開",
            //             "askedPersonClass": null,
            //             "note": "test",
            //             "qaClassifyClass": null,
            //             "pubmed": "123",
            //             "urls": {
            //                 "0": {
            //                     "url": "https://www.k-idea.jp",
            //                     "title": "木村情報技術ホームページ"
            //                 }
            //             },
            //             "medicines": {
            //                 "0": {
            //                     "name": "med3"
            //                 }
            //             },
            //             "keywordTags": {
            //                 "0": {
            //                     "name": "key3"
            //                 }
            //             },
            //             "referenceMaterials": {
            //                 "0": {
            //                     "name": "その他"
            //                 }
            //             },
            //             "categories": {
            //                 "0": {
            //                     "name": "shi3"
            //                 }
            //             },
            //             "viewCount": 12345,
            //             "feedbackGood": 0,
            //             "feedbackBad": 0,
            //             "feedbackComment": 0,
            //             "isMyGoodFeedback": false,
            //             "isMyBadFeedback": false,
            //             "isMyCommentFeedback": 0,
            //             "prefecturesName": "北海道",
            //             "facilityScale": "企業",
            //             "userGroupName": "木村情報技術",
            //             "askedPersonMedicalDepartments": {
            //                 "0": {
            //                     "name": "shinryou3"
            //                 }
            //             },
            //             "documents": {
            //                 "0": {
            //                     "name": "excelTest001-コピー(82).xlsx",
            //                     "url": "/attachments/showDocument?hashKey=849c5146a768999664b4c801f25377affb18ef04&id=182"
            //                 }
            //             },
            //             "qaQaClassifyClasses": {
            //                 "0": {
            //                     "name": "その他"
            //                 }
            //             },
            //             "customDetails": {}
            //         }
            //     }
            // }
            return state.organizationSearchInfo;
        },
        getOrganizationDateSort(state) {
            return state.organizationDateSort
        },
        getOrganizationCountSort(state) {
            return state.organizationCountSort
        }, getOrganizationSeartorenndoTab(state) {
            const organizationSeartorenndoTab = {
                "torenndoTab": ["ロキソニン", "ロキソ", "用途", "痛み止め", "ロキソニン", "ロキソ", "ロキソニン",
                    "ロキソ", "用途", "痛み止め", "ロキソニン", "ロキソ", "ロキソニン", "ロキソ",
                    "用途", "痛み止め", "ロキソニン", "ロキソ"]
            }
            return organizationSeartorenndoTab
        },
    },

    mutations: {
        basic(state, payload) {
            state[payload.key] = payload.value
            // state[payload.key] = payload.info.data
            // console.log(payload.info.data)
            // console.log(state[payload.key])
        },
        setOrganizationSearchInfo(state, info) {
            state.organizationSearchInfo = info.data
        },
    },

    actions: {
        async getOrganizationSearchInfo({ rootState, commit }, { inputSearchValue, tagValue, id }) {
            console.log(inputSearchValue)
            const info = await serve.getOwn({ id: id })
            // console.log(inputSearchValue)
            console.log(info)
            // console.log(id)
            // const info = await axios.get(`http://mock-api.com/ZzRpqmne.mock/preavoid/get_organization_search_info`, {
            //     // const info = await axios.get(`${import.meta.env.VITE_APP_PREAVOID_API_URL}/get_organization_search_info`, {
            //     params: {
            //         id: id
            //     }
            // })
            // console.log('getOrganizationSearchInfo', info)
            // commit('basic', { key: 'organizationSearchInfo', info })
            commit('setOrganizationSearchInfo', info)
        },
        setOrganizationSeartorenndoTab({ commit, state }, value) {
            commit('basic', { key: 'organizationSeartorenndoTab', value })
            // console.log(value)
        },

        setOrganizationSearchInfo({ rootState, commit }, info) {
            console.log("setOrganizationSearchInfo", info)
            commit('setOrganizationSearchInfo', info)
        },
        clearOrganizationSearchInfo({ rootState, commit }) {
            commit('setOrganizationSearchInfo', {})
        },
        setGoodMessageBox({ commit, state }, value) {
            commit('basic', { key: 'goodMessageBox', value })
            // console.log(value)
        },

        setCommentMessageBox({ commit, state }, value) {
            commit('basic', { key: 'commentMessageBox', value })
            // console.log(value)
        },
        setIsOrganizationSearch({ commit, state }, value) {
            commit('basic', { key: 'isOrganizationSearch', value })
            // console.log(value)
        },
    },
}
