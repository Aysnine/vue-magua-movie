import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Transitions from 'vue2-transitions'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import '@/components/auto'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/style/index.styl'

if (process.env.VUE_APP_PREVIEW == 'on') {
  require('@/mock/register')
}

import '@/plugin' // 全局使用的插件，如 log、cookie
import '@/router/witch' // 路由权限

Vue.use(BootstrapVue)
Vue.use(Transitions)

Vue.config.productionTip = false
Vue.prototype.$env__is_preview = process.env.VUE_APP_PREVIEW === 'on'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
