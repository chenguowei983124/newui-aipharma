import axios from './http'
// import axios from "axios";
const API_TIMEOUT = 5000
// const API_BASE = 'http://localhost:3000/'
const API_BASE = 'https://ai-pharma-bbs-be-stg.kit-ai.jp/'

const exeAxios = (method, acURL, data) => {
    return axios({
        method: method,
        url: acURL,
        data: data,
        timeout: API_TIMEOUT,
        validateStatus: function (status) {
            return status < 500 // Resolve only if the status code is less than 500
        },
        withCredentials: true,
    })
}
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
            let mtd = 'get'
            let acURL = '/posts/topmenu_info'
            const queryString = new URLSearchParams(queryStringData).toString()
            const url = `${pathJoin([API_BASE, acURL])}?${queryString}`
            console.log('getTopNoticel_url', url)
            const response = await exeAxios(mtd, url, null)
            if (response.status == 200) {
                data = response.data
                console.log('getTopNoticel', data)
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
            console.log('getTopBulletinBoard', data)
        } else {
            const queryStringData = {
                code: code,
                page: 1,
                limit: 5,
                division: 'BBS',
            }
            // API-index
            let mtd = 'get'
            let acURL = '/posts/topmenu_info'
            const queryString = new URLSearchParams(queryStringData).toString()
            const url = `${pathJoin([API_BASE, acURL])}?${queryString}`
            console.log('getTopBulletinBoard_url', url)
            const response = await exeAxios(mtd, url, null)
            if (response.status == 200) {
                data = response.data
                console.log('getTopBulletinBoard', data)
            }
        }
        return data
    },
    //===========================
    // お知らせ,掲示板のtagsマスタデータ
    //===========================
    async getTagsMaster(code) {
        let data = []
        if (!!code) {
            const queryStringData = {
                code: code,
            }
            // API-index
            let mtd = 'get'
            let acURL = '/tags'
            const queryString = new URLSearchParams(queryStringData).toString()
            const url = `${pathJoin([API_BASE, acURL])}?${queryString}`
            console.log('getTagsMaster_url', url)
            const response = await exeAxios(mtd, url, null)
            if (response.status == 200) {
                const tags = response.data.tags
                tags.map(map => {
                    data.push(map.name)
                })
            }
        }

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
    // 一括検索結果画面　DI ナレッジシェア情報取得
    //===========================
    async getALLDiKnowledgeInfo(params) {
        const data = await axios('/api/qa/get_bunch_DiKnowledge_info', {
            method: 'get',
            data: params,
        })

        return data
    },
    //===========================
    // 一括検索結果画面　組織内 DI 記録情報取得
    //===========================
    async getALLOrganizationInfo() {
        const data = await axios(
            '/api/qa/get_bunch_OrganizationDiDocument_info',
            {
                method: 'get',
            }
        )

        return data
    },
    //===========================
    // 一括検索結果画面　おくすり事例情報取得
    //===========================
    async getALLMedicineCase_Info() {
        const data = await axios('/api/qa/get_bunch_MedicineCase_info', {
            method: 'get',
        })

        return data
    },
    //===========================
    // 一括検索結果画面　掲示板情報取得
    //===========================
    async getALLBulletinBoard_Info() {
        const data = await axios('/api/qa/get_bunch_BulletinBoard_info', {
            method: 'get',
        })

        return data
    },
    //===========================
    // 一括検索結果画面　一括検索結果画面のGoogle情報取得
    //===========================
    async getALLGoogle_Info() {
        const data = await axios('/api/external/search_google', {
            method: 'get',
        })

        return data
    },
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
        const data = await axios('/preavoid/get_organization_search_info', {
            method: 'get',
            params: {
                id: id,
            },
        })

        return data
    },
    //===========================
    // 組織内DI記録検索結果取得（検索条件）
    //===========================
    async getOwnData(param) {
        const data = await axios('/preavoid/get_organization_search_info', {
            method: 'get',
            params: param,
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
    async getOwndIKnowledgeShare(param) {
        const data = await axios('/preavoid/get_DIKnowledgeShare_search_info', {
            method: 'get',
            params: param,
        })

        return data
    },
    async getTest() {
        const data = await axios('/preavoid/get_topmenu_Noticel_info_test', {
            method: 'get',
        })

        return data
    },
    async getPostList(queryStringData) {
        const mtd = 'post'
        const acURL = '/posts/search'
        const flt = {
            filter: queryStringData.filter,
        }
        delete queryStringData.filter
        const queryString = new URLSearchParams(queryStringData).toString()
        const url = `${pathJoin([API_BASE, acURL])}?${queryString}`
        console.log('getPostList-filter', flt)
        // return exeAxios(mtd, url, flt)
    },
}
export default serve
