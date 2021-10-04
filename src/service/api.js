import axios from "./http";
const serve = {
    getUser() {
        console.log("getUser")
        return axios('/get_topmenu_bulletinboard_info', {
            method: 'get',
            params: {
                id: 123
            }
        })
    },
    postLogin(data) {
        return axios('/postLogin', {
            method: 'post',
            data: data
        })
    },
    async getOwn({ inputSearchValue, tagValue, id }) {
        const data = await axios('/get_organization_search_info', {
            method: 'get',
            params: {
                id: id
            }
        })

        return data
    }
}
export default serve
