import { queuePostFlushCb } from '@vue/runtime-core'
import axios from 'axios'
import router from '../router'
import store from '../store'

const service = axios.create({
    // baseURL: 'https://ai-pharma-bbs-be-stg.kit-ai.jp/', //import.meta.env.VITE_APP_BBS_API_URL,
    baseURL: import.meta.env.VITE_APP_BBS_API_URL,
    timeout: 50000, // request timeout
    // withCredentials: true,
    // validateStatus: function (status) {
    //     return status < 500 // Resolve only if the status code is less than 500
    // },
})

service.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (store.getters.getDownload == true) {
            store.dispatch('setDownload', false)
            config.responseType = 'blob'
            config.dataType = 'binary'
            config.headers = {
                // 'Authorization': `Bearer ${token}`,
                Accept: 'application/octet-stream',
            }
        } else {
            config.headers = {
                Accept: 'application/json',
            }
        }

        if (store.getters.getLoadingShowFlg) {
            store.dispatch('setIsLoadingShow', true)
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        store.dispatch('setIsLoadingShow', false)
        store.dispatch('setLoadingShowFlg', true)
        // console.log('OK', response.data.status)
        // if (response.data.status !== 'SUCCESS') {
        //     router.push({
        //         name: 'error',
        //         params: {
        //             errorMessage: '存在しないQAを参照しています',
        //         },
        //     })
        // }
        return Promise.resolve(response)
    },
    (error) => {
        console.log('NG')
        store.dispatch('setIsLoadingShow', false)
        store.dispatch('setLoadingShowFlg', true)
        const { response } = error
        if (response) {
            console.log(response)
            switch (response.status) {
                case 400:
                    router.push({
                        name: 'error',
                        params: { errorMessage: 'invalid access token error' },
                    })
                    break
                case 403:
                    router.push({
                        name: 'error',
                        params: { errorMessage: '表示権限がありません' },
                    })
                    break
                case 404:
                    router.push({
                        name: 'error',
                        params: {
                            errorMessage: '存在しないQAを参照しています',
                        },
                    })
                    break
                case 500:
                    router.push({
                        name: 'error',
                        params: { errorMessage: 'Internal Server Error' },
                    })
                    break
            }
        }
        return Promise.reject(error)
    }
)

export default service
