import 'virtual:uno.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

const vuetify = createVuetify({
    components,
    directives,
  })
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)
app.mount('#app')


