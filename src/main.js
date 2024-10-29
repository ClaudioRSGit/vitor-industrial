import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import i18n from './i18n';
import VueSmoothScroll from 'vue3-smooth-scroll'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
// 

const app = createApp(App)
app.use(VueSmoothScroll)
app.use(i18n);
app.mount('#app')
