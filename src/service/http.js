import axios from "axios";
import router from "../router";
import store from '../store';

const service = axios.create({
    baseURL: import.meta.env.VITE_APP_PREAVOID_API_URL,
    timeout: 10000 // request timeout
})

service.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token')
    token && (config.headers.Authorzation = token)
    store.dispatch('setIsLoadingShow', true)
    return config
}, error => {
    return Promise.reject(error)
})

service.interceptors.response.use(response => {
    store.dispatch('setIsLoadingShow', false)
    return Promise.resolve(response)
}, error => {
    store.dispatch('setIsLoadingShow', false)
    const { response } = error
    if (response) {
        switch (response.status) {
            case 400:
                router.push({ name: 'error', params: { errorMessage: 'invalid access token error' } })
                break
            case 500:
                router.push({ name: 'error', params: { errorMessage: 'Internal Server Error' } })
                break
        }
    }
    return Promise.reject(error)
})

export default service


