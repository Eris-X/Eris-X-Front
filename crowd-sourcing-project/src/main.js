import Vue from 'vue'

import Element from 'element-ui'
import './assets/styles/element-variables.scss'

import '@/assets/styles/index.scss' // global css
import App from './App.vue'
// import store from './store'
import router from './router'

import Cookies from 'js-cookie'
import Web3 from 'web3'


Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false
Vue.prototype.Web3 = Web3

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
