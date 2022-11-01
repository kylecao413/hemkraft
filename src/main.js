import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
Vue.config.devtools = true

//set ElementUI lang to EN
Vue.use(ElementUI, { locale })

new Vue({
  el:'#app',
    router,
  render: h => h(App),
})
