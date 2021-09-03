import { createApp } from 'vue'
// import Vue from "vue";
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'


createApp(App).use(router).use(store).mount('#app')
