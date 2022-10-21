import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import NVUI from '../nvui'

const app = createApp(App)

app.use(createPinia())
app.use(NVUI)
app.mount('#app')
