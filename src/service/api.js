import axios from './http'
// import axios from "axios";
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
    async getTopNoticel() {
        const data = await axios('/preavoid/get_topmenu_Noticel_info', {
            method: 'get',
        })

        return data
    },
    //===========================
    // TOP画面　掲示板情報取得
    //===========================
    async getTopBulletinBoard() {
        const data = await axios('/preavoid/get_topmenu_BulletinBoard_info', {
            method: 'get',
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
}
export default serve
