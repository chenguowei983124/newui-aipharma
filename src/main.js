import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import constant from './constants'
import serve from './service/api'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

import VueSweetalert2 from 'vue-sweetalert2'
const options = {
    width: 355,
    backdrop: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    reverseButtons: true,
    customClass: {
        htmlContainer: 'sweet_titleImportant',
        popup: 'sweet_popupImportant',
        title: 'sweet_titleImportant',
        confirmButton: 'sweet_confirmbuttonImportant',
        cancelButton: 'sweet_cancelbuttonImportant',
    },
}

const app = createApp(App)
app.config.productionTip = false
app.use(router)
app.use(store)
app.use(VueToast)

app.use(VueSweetalert2, options)

app.config.globalProperties.$constant = constant
app.config.globalProperties.$serve = serve
app.mount('#app')
