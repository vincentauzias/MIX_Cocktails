import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueCookieComply from 'vue-cookie-comply'
import 'vue-cookie-comply/dist/style.css'




const app = createApp(App)
app.use(router)
app.config.globalProperties.$axios = axios;

app.use(VueCookieComply)
app.mount('#app')


 