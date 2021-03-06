import axios from './http'
import exeAxios from './bbsHttp'
import store from '../store'
// import axios from "axios";
const API_TIMEOUT = 5000
// const API_BASE = 'http://localhost:3000/'
const API_BASE = 'https://ai-pharma-bbs-be-stg.kit-ai.jp/'

// const exeAxios = (method, acURL, data) => {
//     return axios({
//         method: method,
//         url: acURL,
//         data: data,
//         timeout: API_TIMEOUT,
//         validateStatus: function (status) {
//             return status < 500 // Resolve only if the status code is less than 500
//         },
//         withCredentials: true,
//     })
// }
const pathJoin = (pathArr) => {
    return pathArr
        .map(function (path) {
            if (path[0] === '/') {
                path = path.slice(1)
            }
            if (path[path.length - 1] === '/') {
                path = path.slice(0, path.length - 1)
            }
            return path
        })
        .join('/')
}
const serve = {
    //===========================
    // ログイン
    //===========================
    async postLogin(data) {
        return await axios('/preavoid/postLogin', {
            method: 'post',
            data: data,
        })
    },
    //===========================
    // リーセットパスワードメール送信
    //===========================
    async postResetPasswordMail(data) {
        return await axios('/account/user/password', {
            method: 'post',
            data: data,
        })
    },
    //===========================
    // リーセットパスワード送信
    //===========================
    async postResetPassword(data) {
        return await axios('/account/user/password', {
            method: 'post',

            data: data,
        })
    },
    //===========================
    // セットパスワード送信
    //===========================
    async patchSetPassword(data) {
        return await axios('/account/user/password', {
            method: 'patch',

            data: data,
        })
    },
    //===========================
    // ログアウト
    //===========================
    async postLogout(data) {
        return await axios('/preavoid/postLogout', {
            method: 'post',
            data: data,
        })
    },
    //===========================
    // TOP画面　お知らせ情報
    //===========================
    async getTopNoticel(code) {
        let data
        console.log(code)
        if (!code) {
            data = await axios('/preavoid/get_topmenu_Noticel_info', {
                method: 'get',
            })
        } else {
            const queryStringData = {
                code: code,
                page: 1,
                limit: 5,
            }
            // API-index
            let acURL = '/posts/topmenu_info'
            const queryString = new URLSearchParams(queryStringData).toString()
            const response = await exeAxios(acURL, {
                method: 'get',
                params: queryStringData,
            })
            if (response.status == 200) {
                data = response
            }
        }

        return data
    },
    //===========================
    // TOP画面　掲示板情報取得
    //===========================
    async getTopBulletinBoard(code) {
        let data
        if (!code) {
            data = await axios('/preavoid/get_topmenu_BulletinBoard_info', {
                method: 'get',
            })
        } else {
            const queryStringData = {
                code: code,
                page: 1,
                limit: 5,
                division: 'BBS',
            }
            let acURL = '/posts/topmenu_info'
            // const queryString = new URLSearchParams(queryStringData).toString()
            const response = await exeAxios(acURL, {
                method: 'get',
                params: queryStringData,
            })
            if (response.status == 200) {
                data = response
            }
            // API-index
            // let mtd = 'get'
            // let acURL = '/posts/topmenu_info'
            // const queryString = new URLSearchParams(queryStringData).toString()
            // const url = `${pathJoin([API_BASE, acURL])}?${queryString}`
            // const response = await exeAxios(mtd, url, null)
            // if (response.status == 200) {
            //     data = response
            // }
        }
        return data
    },
    // //===========================
    // // TOP画面　お知らせ情報
    // //===========================
    // async getTopNoticel(code) {
    //     let data
    //     // if (!code) {
    //     //     data = await axios('/preavoid/get_topmenu_Noticel_info', {
    //     //         method: 'get',
    //     //     })
    //     // } else {
    //     // const queryStringData = {
    //     //     code: code,
    //     //     page: 1,
    //     //     limit: 5,
    //     // }
    //     // API-index
    //     // let mtd = 'get'
    //     // let acURL = '/posts/topmenu_info'
    //     // const queryString = new URLSearchParams(queryStringData).toString()
    //     // const url = `${pathJoin([API_BASE, acURL])}?${queryString}`
    //     // const response = await exeAxios(mtd, url, null)
    //     // if (response.status == 200) {
    //     //     data = response
    //     // }

    //     const queryStringData = {
    //         code: code,
    //         page: 1,
    //         limit: 5,
    //     }
    //     // API-index
    //     let acURL = '/posts/topmenu_info'
    //     const queryString = queryStringData
    //     // const queryString = new URLSearchParams(queryStringData).toString()
    //     const response = await exeAxios(acURL, {
    //         method: 'get',
    //         params: queryString,
    //     })
    //     if (response.status == 200) {
    //         data = response
    //     }
    //     // }

    //     return data
    // },
    // //===========================
    // // TOP画面　掲示板情報取得
    // //===========================
    // async getTopBulletinBoard(code) {
    //     let data
    //     // if (!code) {
    //     //     data = await axios('/preavoid/get_topmenu_BulletinBoard_info', {
    //     //         method: 'get',
    //     //     })
    //     // } else {
    //     const queryStringData = {
    //         code: code,
    //         page: 1,
    //         limit: 5,
    //         division: 'BBS',
    //     }
    //     let acURL = '/posts/topmenu_info'
    //     const queryString = queryStringData
    //     // const queryString = new URLSearchParams(queryStringData).toString()
    //     const response = await exeAxios(acURL, {
    //         method: 'get',
    //         params: queryString,
    //     })
    //     if (response.status == 200) {
    //         data = response
    //     }

    //     // const queryStringData = {
    //     //     code: code,
    //     //     page: 1,
    //     //     limit: 5,
    //     //     division: 'BBS',
    //     // }
    //     // API-index
    //     // let mtd = 'get'
    //     // let acURL = '/posts/topmenu_info'
    //     // const queryString = new URLSearchParams(queryStringData).toString()
    //     // const url = `${pathJoin([API_BASE, acURL])}?${queryString}`
    //     // const response = await exeAxios(mtd, url, null)
    //     // if (response.status == 200) {
    //     //     data = response
    //     // }
    //     // }
    //     return data
    // },
    //===========================
    // お知らせ,掲示板のtagsマスタデータ
    //===========================
    async getTagsMaster(code, value) {
        store.dispatch('setLoadingShowFlg', false)
        let data = []
        // if (!!code) {
        const queryStringData = {
            code: code,
            search: value,
        }
        // API-index
        let mtd = 'get'
        let acURL = '/tags'
        const queryString = queryStringData
        // const queryString = new URLSearchParams(queryStringData).toString()
        const response = await exeAxios(acURL, {
            method: 'get',
            params: queryString,
        })

        // const url = `${pathJoin([API_BASE, acURL])}?${queryString}`
        // const response = await exeAxios(mtd, url, null)
        if (response.status == 200) {
            data = response.data.tags
            // tags.map((map) => {
            //     data.push(map.name)
            // })
        }
        // } else {
        //     const response = await axios(`/tags?${value}`, {
        //         method: 'get',
        //     })
        //     data = response.data.tags
        // }

        return data
    },
    //===========================
    // IDによって投稿情報の取得
    //===========================
    async getPostsrforId(code, id) {
        let data = []
        const queryStringData = {
            code: code,
        }
        const queryString = queryStringData
        // const queryString = new URLSearchParams(queryStringData).toString()
        let acURL = `/posts/${id}`
        data = await exeAxios(acURL, {
            method: 'get',
            params: queryString,
        })
        // API-index
        // let mtd = 'get'
        // let acURL = `/posts/${id}`
        // const queryString = new URLSearchParams(queryStringData).toString()
        // const url = `${pathJoin([API_BASE, acURL])}?${queryString}`
        // const response = await exeAxios(mtd, url, null)
        // if (response.status == 200) {
        //     const tags = response.data
        //     tags.map((map) => {
        //         data.push(map.name)
        //     })
        // }
        // } else {
        //     console.log('234567')
        //     data = await axios(`/posts/${id}`, {
        //         method: 'get',
        //     })
        // }

        return data
    },
    //===========================
    // 投稿情報の削除
    //===========================
    async deletePost(code, id) {
        let data = []
        // if (!!code) {
        const queryStringData = {
            code: code,
        }
        // API-index
        // let mtd = 'DELETE'
        let acURL = `/posts/${id}`
        const queryString = queryStringData
        // const queryString = new URLSearchParams(queryStringData).toString()
        data = await exeAxios(acURL, {
            method: 'DELETE',
            params: queryString,
        })
        // const url = `${pathJoin([API_BASE, acURL])}?${queryString}`
        // const response = await exeAxios(mtd, url, null)
        // if (response.status == 200) {
        //     const tags = response.data
        //     tags.map((map) => {
        //         data.push(map.name)
        //     })
        // }
        // } else {
        //     data = await axios(`/posts/${id}`, {
        //         method: 'DELETE',
        //     })
        // }

        return data
    },
    //===========================
    // コメント情報の削除
    //===========================
    async deleteBbsComment(code, post_id, commentId) {
        let data = []
        // if (!!code) {
        const queryStringData = {
            code: code,
            postId: post_id,
            id: commentId,
        }
        console.log('deleteBbsComment', post_id)
        // API-index
        // let mtd = 'DELETE'
        let acURL = `/posts/${post_id}`
        const queryString = queryStringData
        // const queryString = new URLSearchParams(queryStringData).toString()
        data = await exeAxios(acURL, {
            method: 'DELETE',
            params: queryString,
        })

        return data
    },
    //===========================
    // 投稿メッセージ情報の編集
    //===========================
    async putBbsPosts(params, post_id) {
        let data = []
        // if (!!code) {
        const queryStringData = {
            code: params.code,
        }
        delete params.code
        // API-index
        // let mtd = 'DELETE'
        let acURL = `/posts/${post_id}`
        const queryString = queryStringData
        // const queryString = new URLSearchParams(queryStringData).toString()
        data = await exeAxios(acURL, {
            method: 'put',
            params: queryStringData,
            data: params,
        })

        return data
    },
    //===========================
    // コメント情報の編集
    //===========================
    async editBbsComment(code, params) {
        let data = []
        // if (!!code) {
        const queryStringData = {
            code: code,
        }
        console.log('editBbsComment', post_id)
        // API-index
        // let mtd = 'DELETE'
        let acURL = `/posts/${post_id}`
        const queryString = queryStringData
        // const queryString = new URLSearchParams(queryStringData).toString()
        data = await exeAxios(acURL, {
            method: 'put',
            data: params,
        })

        return data
    },
    //===========================
    // 投稿情報の削除
    //===========================
    // async deletefeedbacks(code, id, post_id) {
    //     let data = []
    //     if (!!code) {
    //         const queryStringData = {
    //             code: code,
    //         }
    //         // API-index
    //         let mtd = 'DELETE'
    //         let acURL = `/feedbacks/${id}`
    //         const queryString = new URLSearchParams(queryStringData).toString()
    //         const url = `${pathJoin([API_BASE, acURL])}?${queryString}`
    //         const response = await exeAxios(mtd, url, null)
    //         if (response.status == 200) {
    //             const tags = response.data
    //             tags.map((map) => {
    //                 data.push(map.name)
    //             })
    //         }
    //     } else {
    //         const queryStringData = {
    //             code: code,
    //             feedbackId: id,
    //             post_id: post_id,
    //         }
    //         const queryString = new URLSearchParams(queryStringData).toString()
    //         data = await axios(`/feedbacks/${id}?${queryString}`, {
    //             method: 'DELETE',
    //         })
    //     }

    //     return data
    // },
    //===========================
    // 既読としてフィードバックする
    //===========================
    async postReadfeedbacks(post_id, code) {
        let data = []

        const queryStringData = {
            code: code,
        }
        const queryString = queryStringData
        // const queryString = new URLSearchParams(queryStringData).toString()
        data = await exeAxios(`/posts/${post_id}/feedbacks`, {
            method: 'post',
            params: queryString,
        })

        return data
    },
    //===========================
    // フィードバックの切り替え
    //===========================
    async putfeedbacks(params) {
        let data = []
        let feedback = params.feedback
        const queryString = params
        // const queryString = new URLSearchParams(params).toString()
        data = await exeAxios(`/feedbacks/${params.feedbackId}`, {
            method: 'put',
            params: { code: params.code },
            data: { feedback: feedback },
        })

        return data
    },
    async postPosts(param) {
        let data = []
        let code = { code: param.code }
        delete param.code
        const queryString = param
        // const queryString = new URLSearchParams(params).toString()
        data = await exeAxios(`/posts`, {
            method: 'post',
            params: code,
            data: queryString,
        })

        return data
    },
    // 掲示板検索
    async getPostList(queryStringData) {
        let filter = queryStringData.filter
        delete queryStringData.filter
        const queryString = queryStringData
        // const queryString = new URLSearchParams(queryStringData).toString()
        console.log('queryString', queryString)
        const data = await exeAxios('/posts/search', {
            method: 'post',
            params: queryString,
            data: { filter: filter },
        })
        return data
    },
    //===========================
    // TOP画面　学会情報取得
    //===========================
    async getTopScientifiSociety() {
        const data = await axios(
            '/preavoid/get_topmenu_scientifiSociety_info',
            {
                method: 'get',
            }
        )

        return data
    },
    //===========================
    // TOP画面　PDMAリスト情報取得
    //===========================
    async getTopPMDA() {
        const data = await axios('/preavoid/get_topmenu_PMDA_info', {
            method: 'get',
        })

        return data
    },
    //===========================
    // 各画面の初期表示情報取得
    //===========================
    async getOrgCommonInfo() {
        const data = await axios('/preavoid/get_common_info', {
            method: 'get',
        })
        return data
    },
    //===========================
    // TOP画面　個人情報取得
    //===========================
    async getManagementInfo() {
        const data = await axios('/account/api/general/send_user_info', {
            method: 'post',
        })
        return data
    },
    //===========================
    // 一括検索結果画面　DI ナレッジシェア情報取得
    //===========================
    async getALLDiKnowledgeInfo(params) {
        // const data = await axios('/api/qa/get_bunch_DiKnowledge_info', {
        const data = await axios('/api/qa/search_keyword_q', {
            method: 'post',
            data: params,
        })
        return data
    },
    //===========================
    // 一括検索結果画面　DI ナレッジシェア AI 情報取得
    //===========================
    async getAIDiKnowledgeInfo(params) {
        // const data = await axios('/api/qa/get_bunch_DiKnowledge_info', {
        const data = await axios('/api/nlc/search_similar_q', {
            method: 'post',
            data: params,
        })
        return data
    },
    //===========================
    // 一括検索結果画面　組織内 DI 記録情報取得
    //===========================
    async getALLOrganizationInfo(params) {
        const data = await axios('/api/qa/search_di_record', {
            method: 'post',
            data: params,
        })
        return data
    },
    //===========================
    // 一括検索結果画面　おくすり事例情報取得
    //===========================
    async getALLMedicineCase_Info(params) {
        const data = await axios('/api/qa/get_bunch_MedicineCase_info', {
            method: 'get',
            params: params,
        })

        return data
    },
    //===========================
    // 一括検索結果画面　掲示板情報取得
    //===========================
    async getALLBulletinBoard_Info(params) {
        let data
        // if (!params.searchKey) {
        data = await axios('/api/qa/get_bunch_BulletinBoard_info', {
            method: 'get',
            params: params,
        })
        return data
    },
    //===========================
    // 一括検索結果画面　一括検索結果画面のGoogle情報取得
    //===========================
    async getALLGoogle_Info(params) {
        const data = await axios('/api/external/search_google', {
            method: 'get',
            params: params,
        })

        return data
    },
    //===========================
    // トレンドタグ情報取得 組織内DI記録/DIナレッジシェア（init タグ取得）
    //===========================
    async getTrendTag() {
        const data = await axios('/api/qa/get_trendy_tags', {
            method: 'get',
        })
        return data
    },
    // //===========================
    // // 組織内DI記録検索結果取得（init タグ取得）
    // //===========================
    // async getOwnTab() {
    //     const data = await axios('/api/qa/get_organization_Tab', {
    //         method: 'get',
    //     })
    //     return data
    // },
    //===========================
    // 組織内DI記録検索結果取得（新着QA）
    //===========================
    async getOwnNewQA() {
        const data = await axios('/api/qa/get_organization_new_qa_info', {
            method: 'get',
        })

        return data
    },
    //===========================
    // 組織内DI記録検索 QAの削除
    //===========================
    async deleteQa(params) {
        const data = await axios('/api/qa/delete_qa', {
            method: 'post',
            params: {
                qaId: params,
            },
        })

        return data
    },
    //===========================
    // 組織内DI記録検索結果取得（よく見られているQA）
    //===========================
    async getOwnLookcarefullyQA() {
        const data = await axios(
            '/api/qa/get_organization_lookcarefully_qa_info',
            {
                method: 'get',
            }
        )

        return data
    },
    //===========================
    // DIナレッジシェア検索結果取得（新着QA）
    //===========================
    async getDiKnowledgeShareNewQA() {
        const data = await axios('/api/qa/get_DiKnowledgeShare_new_qa_info', {
            method: 'get',
        })

        return data
    },
    //===========================
    // DIナレッジシェア検索結果取得（よく見られているQA）
    //===========================
    async getDIKnowledgeShareLookcarefullyQA() {
        const data = await axios(
            '/api/qa/get_DiKnowledgeShare_lookcarefully_qa_info',
            {
                method: 'get',
            }
        )

        return data
    },
    //===========================
    // リクエストされたQAのview数をインクリメントする
    //===========================
    async sendViewCount(data) {
        return await axios('/api/qa/increment_view_count', {
            method: 'post',
            data: data,
        })
    },
    //===========================
    // 組織内DI記録検索結果取得（ID）
    //===========================
    async getOwn({ id }) {
        const data = await axios('/api/qa/send_detail_qa_info', {
            method: 'get',
            params: {
                id: id,
                confidence: 'nil',
            },
        })

        return data
    },
    //===========================
    // 組織内DI記録検索結果取得（検索条件）
    //===========================
    async getOwnData(param) {
        var params = {
            class: param.medicine,
            displayed: param.displayed,
            facilityFlag: param.facility_flag,
            freeword: param.search,
            page: param.page,
            qacategory: param.qacategory,
            sort: param.sort,
            tags:
                param.tags.split(',') == ''
                    ? []
                    : param.tags.split(',').map(Number),
            searchSelect: {
                checkQ: param.checkQ == 'true' ? 1 : 0,
                checkA: param.checkA == 'true' ? 1 : 0,
                checkComment: param.checkComment == 'true' ? 1 : 0,
                checkNote: param.checkNote == 'true' ? 1 : 0,
                checkAddFileName: param.checkAddFileName == 'true' ? 1 : 0,
                checkContributor: param.checkContributor == 'true' ? 1 : 0,
                checkLastEditer: param.checkLastEditer == 'true' ? 1 : 0,
                checkFacilityName: param.checkFacilityName == 'true' ? 1 : 0,
            },
        }

        const data = await axios('/api/qa/get_organization_search_info', {
            method: 'post',
            data: params,
        })

        return data
    },
    //===========================
    // 組織内DI記録検索結果取得（QA用のタグをサジェスト）
    //===========================
    async getSuggestTags(param) {
        store.dispatch('setLoadingShowFlg', false)
        const data = await axios('/api/qa/suggest_tags', {
            method: 'post',
            params: { tag_name_cont: param },
        })

        return data
    },
    //===========================
    // 症例検索結果取得（ID）
    //===========================
    async getPreavoidDataById(param) {
        const data = await axios('/api/preavoid/search_preavoids', {
            method: 'get',
            params: param,
        })

        return data
    },
    //===========================
    // 症例検索結果取得（検索条件）
    //===========================
    async getPreavoidDataByParams(param) {
        const data = await axios('/api/preavoid/search_preavoids', {
            method: 'get',
            params: param,
        })

        return data
    },
    //===========================
    // 症例検索結果削除（ID）
    //===========================
    async deletePreavoidData(param) {
        const data = await axios('/api/preavoid/delete_preavoids', {
            method: 'post',
            params: param,
        })

        return data
    },
    //===========================
    // 症例検索結果ダウンロード（ID）
    //===========================
    async downloadPreavoidData(param) {
        const data = await axios('/api/preavoid/download_search_info', {
            method: 'post',
            data: param,
        })

        return data
    },
    //===========================
    // Good/Badの送信
    //===========================
    async sendFeedback(params) {
        const data = await axios('/api/qa/send_qa_feedback', {
            method: 'post',
            data: params,
        })
        return data
    },
    //===========================
    // コメント取得
    //===========================
    async getComment(params) {
        const data = await axios('/api/qa/get_comments_userview', {
            method: 'get',
            params: params,
        })
        return data
    },
    //===========================
    // コメント送信
    //===========================
    async sendComment(params) {
        const data = await axios('/api/qa/send_qa_comment', {
            method: 'post',
            data: params,
        })
        return data
    },
    //===========================
    // コメント送信
    //===========================
    async updateComment(params) {
        const data = await axios('/api/qa/update_qa_comment', {
            method: 'post',
            data: params,
        })
        return data
    },
    //===========================
    // コメント削除
    //===========================
    async deleteComment(params) {
        const data = await axios('/api/qa/delete_comment', {
            method: 'post',
            data: params,
        })
        return data
    },
    //===========================
    // DIナレッジシェア画面の通常検索（キーワード検索、タグ検索など）

    //===========================
    async getDIKnowledgeShare(param) {
        var params = {
            displayed: param.displayed,
            freeword: param.search,
            page: param.page,
            sort: param.sort,
            tags:
                param.tags.split(',') == ''
                    ? []
                    : param.tags.split(',').map(Number),
            searchSelect: {
                checkQ: param.checkQ == 'true' ? 1 : 0,
                checkA: param.checkA == 'true' ? 1 : 0,
                checkComment: param.checkComment == 'true' ? 1 : 0,
                checkNote: param.checkNote == 'true' ? 1 : 0,
                checkAddFileName: param.checkAddFileName == 'true' ? 1 : 0,
                checkContributor: param.checkContributor == 'true' ? 1 : 0,
                checkLastEditer: param.checkLastEditer == 'true' ? 1 : 0,
                checkFacilityName: param.checkFacilityName == 'true' ? 1 : 0,
            },
        }
        const data = await axios(
            '/api/qa/get_DIKnowledgeShare_keyword_search_info',
            {
                method: 'post',
                data: params,
            }
        )
        return data
    },
    //===========================
    // DIナレッジシェア画面のAI検索
    //===========================
    async getDIKnowledgeShareAI(param) {
        const data = await axios(
            '/api/qa/get_DIKnowledgeShare_similar_search_info',
            {
                method: 'post',
                data: { freeword: param.search },
            }
        )

        return data
    },
    //===========================
    // リクエストされたQAの詳細情報を返す DIナレッジシェア（id,confidence）
    //===========================
    async getDIKnowledgeSharedId(params) {
        var confidenceTemp =
            typeof params.confidence == 'undefined' ||
            params.confidence == 'undefined'
                ? 'nil'
                : params.confidence
        const data = await axios('/api/qa/send_detail_qa_info', {
            method: 'get',
            params: {
                id: params.id,
                confidence: confidenceTemp,
            },
        })
        return data
    },
    //===========================
    // 組織DI記録登録画面(投稿)
    //===========================
    async postOwnQA(param) {
        const data = await axios('/api/qa/create_qa', {
            method: 'post',
            data: param,
        })

        return data
    },
    //===========================
    // 組織DI記録登録画面（編集）
    //===========================
    async postUpdateOwnQA(param) {
        const data = await axios('/api/qa/update_qa', {
            method: 'post',
            data: param,
        })

        return data
    },
    async getOwnEditInfo(param) {
        const data = await axios(`/api/qa/watch_qa/${param}`, {
            method: 'get',
        })

        return data
    },
    //===========================
    // 症例入出力エクスポート
    //===========================
    async downloadPreavoidStyle(param, type = 0) {
        let apiName = ''
        if (type == 0) {
            apiName = '/api/preavoid/style_export'
        } else if (type == 1) {
            apiName = '/api/preavoid/export_conversion_form_1'
        } else if (type == 2) {
            apiName = '/api/preavoid/export_conversion_form_2'
        } else if (type == 3) {
            apiName = '/api/preavoid/export_collection_conversion_form'
        } else if (type == 4) {
            apiName = '/api/preavoid/export_collection_conversion_form'
        }
        const data = await axios(apiName, {
            method: 'get',
            params: param,
        })

        return data
    },
    //===========================
    // 症例入出力マニュアルエクスポート
    //===========================
    async downloadPreavoidManual(param) {
        const data = await axios('/api/general/get_aipharma_user_manual', {
            method: 'get',
            params: param,
        })

        return data
    },
    //===========================
    // 症例入出力マニュアルインポート
    //===========================
    async importPreavoidStyle(param) {
        const data = await axios('/api/preavoid/style_import', {
            method: 'post',
            data: param,
        })
        return data
    },
    //===========================
    // 組織内DI記録検索結果取得（検索条件）
    //===========================
    async getMydataOwnData(freeword) {
        var params = {
            freeword: freeword,
        }

        const data = await axios('/api/qa/get_organization_search_info', {
            method: 'post',
            data: params,
        })

        return data
    },
    async getTest() {
        const data = await axios('/preavoid/get_topmenu_Noticel_info_test', {
            method: 'get',
        })

        return data
    },
}
export default serve
