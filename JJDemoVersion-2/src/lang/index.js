

import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
// 饿了么的 中文 英文语言包引入
import elementEN from 'element-ui/lib/locale/lang/en'
import elementZH from 'element-ui/lib/locale/lang/zh-CN'

import enLocale from './en' // 本地英文包
import zhLocale from './cn' // 本地中文包
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: localStorage.lang || 'cn',
    messages:  {
        en: {
            ...enLocale, // es6的拓展运算符，相当于解析出每个对象
            ...elementEN // 饿了么的英文语言包引入
        },
        cn: {
            ...zhLocale, // es6的拓展运算符，相当于解析出每个对象
            ...elementZH // 饿了么的中文语言包引入
        }
    }
})

// element-ui多语言配置
locale.i18n((key, value) => i18n.t(key, value))

export default i18n