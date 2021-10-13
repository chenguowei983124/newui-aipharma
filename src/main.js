import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import constant from './constants'
import serve from './service/api'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const app = createApp(App)
app.config.productionTip = false
app.use(router)
app.use(store)
app.use(VueToast)

app.config.globalProperties.$constant = constant
app.config.globalProperties.$serve = serve
app.mount('#app')
