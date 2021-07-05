import Vue from 'vue'

import Cookies from 'js-cookie'

//样式
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全局样式
import '@/styles/index.scss' // global css


import App from './App.vue'
import store from './store'
import router from './router'


import './icons' // icon
import './permission' // permission control 导入并运行



const { mockXHR } = require('../mock')
mockXHR()




Vue.config.productionTip = false

Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

