import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import constant from './constants'
// import serve from './service/api'
// Vue.prototype.$serve = serve
// Vue.globalProperties.$constant = constant

const app = createApp(App)
app.use(router)
app.use(store)

app.config.globalProperties.$constant = constant
app.mount('#app')
