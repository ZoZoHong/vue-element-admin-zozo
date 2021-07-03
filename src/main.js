import Vue from 'vue'

//样式
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全局样式
import './styles/index.less'


import App from './App.vue'
import store from './store'
import router from './router'
import less from 'less'




Vue.config.productionTip = false
Vue.use(less)
Vue.use(Element, {
  size: 'medium'
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

