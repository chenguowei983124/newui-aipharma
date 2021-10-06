import axios from "./http";
const serve = {
    //===========================
    // ログイン
    //===========================
    async postLogin(data) {
        return await axios('/postLogin', {
            method: 'post',
            data: data
        })
    },
    //===========================
    // TOP画面　お知らせ情報
    //===========================
    async getTopNoticel() {
        const data = await axios('/get_topmenu_Noticel_info', {
            method: 'get'
        })

        return data
    },
    //===========================
    // TOP画面　掲示板情報取得
    //===========================
    async getTopBulletinBoard() {
        const data = await axios('/get_topmenu_BulletinBoard_info', {
            method: 'get'
        })

        return data
    },
    //===========================
    // TOP画面　学会情報取得
    //===========================
    async getTopScientifiSociety() {
        const data = await axios('/get_topmenu_scientifiSociety_info', {
            method: 'get'
        })

        return data
    },
    //===========================
    // TOP画面　PDMAリスト情報取得
    //===========================
    async getTopPMDA() {
        const data = await axios('/get_topmenu_PMDA_info', {
            method: 'get'
        })

        return data
    },
    //===========================
    // 組織内DI記録検索結果取得（ID）
    //===========================
    async getOwn({ id }) {
        const data = await axios('/get_organization_search_info', {
            method: 'get',
            params: {
                id: id
            }
        })

        return data
    },
    //===========================
    // 組織内DI記録検索結果取得（検索条件）
    //===========================
    async getOwnData(param) {
        const data = await axios('/get_organization_search_info', {
            method: 'get',
            params: param

        })

        return data
    },
    async getOwndIKnowledgeShare(param) {
        const data = await axios('/get_DIKnowledgeShare_search_info', {
            method: 'get',
            params: param

        })

        return data
    }


}
export default serve
