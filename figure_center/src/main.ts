import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Parse from 'parse/dist/parse.min.js';

const app = createApp(App)

app.use(createPinia())
app.use(router)

Parse.initialize('FsvR2dstaX3E0zEy3e8Rj69ki8ixCiJENq7DwhHx', 'm8ToA0RNtdmPpPNW6WktPJ3gDEHHdlIzYbQX5Lz1');
Parse.serverURL = 'https://parseapi.back4app.com';

app.mount('#app')
