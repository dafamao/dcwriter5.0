import { createI18n } from 'vue-i18n';
import en from './en.js';
import zh from './zh.js';

const i18n = createI18n({
    locale: 'en', // 默认是中文
    globalInjection: true, //全局配置$t方法
    messages: { en, zh }, // 需要做国际化的语种
});

export default i18n;
