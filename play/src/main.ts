import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import HjUiPlus from '@hj-ui-plus/hj-ui-plus'

const app = createApp(App)

app.use(HjUiPlus)

app.mount('#app')
