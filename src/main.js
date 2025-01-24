import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import App from './App.vue';
import router from './router';
import i18n from '@/language';
import JsonViewer from 'vue-json-viewer'

import * as ElementPlusIconsVue from '@element-plus/icons-vue';
//  const app = createApp(App);
 let app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(i18n);
app.use(ElementPlus)
app.use(JsonViewer)
app.mount('#app');

