import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/index.css";

const app = createApp(App)

import userStore from '@/stores/user.js'
import popUpStore from '@/stores/popup.js'
const store = {
  install: function (app) {
    app.config.globalProperties.$userStore = userStore;
    app.config.globalProperties.$popUpStore = popUpStore;
  }
};
app.use(store)

app.use(router)

app.mount('#app')

// src/main.js
