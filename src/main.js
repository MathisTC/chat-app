import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/index.css";

const app = createApp(App)

import userStore from '@/stores/user.js'
const store = {
  install: function (app) {
    app.config.globalProperties.$userStore = userStore;
  }
};
app.use(store)

app.use(router)

app.mount('#app')

// src/main.js
