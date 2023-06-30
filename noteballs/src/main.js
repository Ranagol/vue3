import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from '@/router/index.js';
import { createPinia } from 'pinia';//1 step: importing Pinia into our app

createApp(App)
    .use(createPinia())//2 step create Pinia, when creating our app
    .use(router)
    .mount('#app');
