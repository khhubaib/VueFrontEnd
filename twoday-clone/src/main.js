import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import apiClient from './apiclient'




import { createHead } from '@vueuse/head'

const app = createApp(App).use(router)
const head = createHead()
app.use(head)


app.mount('#app')
