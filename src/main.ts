import { createApp } from 'vue'
// page 文件路由系统
// import { createRouter, createWebHistory } from 'vue-router'
// import routes from 'virtual:generated-pages'
import App from './App.vue'
import router from '~/router/index'
import { setupStore } from '~/store'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import './styles/nprogress.scss'
import 'uno.css'

const app = createApp(App)
// page 文件路由系统
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes
// })
app.use(router)
setupStore(app)
app.mount('#app')
