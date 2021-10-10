import { queuePostFlushCb } from "@vue/runtime-core";
import axios from "axios";
import router from "../router";
import store from '../store';

const service = axios.create({

    baseURL: import.meta.env.VITE_APP_PREAVOID_API_URL,
    timeout: 50000 // request timeout
})

service.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers = {
        // 'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }
    // config.transformRequest = [function (data) {
    //     return qs.stringify(data)
    // }]
    store.dispatch('setIsLoadingShow', true)
    return config
}, error => {
    return Promise.reject(error)
})

service.interceptors.response.use(response => {
    store.dispatch('setIsLoadingShow', false)
    console.log("OK")
    return Promise.resolve(response)
}, error => {
    console.log("NG")
    store.dispatch('setIsLoadingShow', false)
    const { response } = error
    if (response) {
        console.log(response)
        switch (response.status) {
            case 400:
                router.push({ name: 'error', params: { errorMessage: 'invalid access token error' } })
                break
            case 404:
                router.push({ name: '404'})
                break
            case 500:
                router.push({ name: 'error', params: { errorMessage: 'Internal Server Error' } })
                break
        }
    }
    return Promise.reject(error)
})

export default service


