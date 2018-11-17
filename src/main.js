import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Transitions from 'vue2-transitions'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/components/auto'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/style/index.styl'

Vue.use(BootstrapVue)
Vue.use(Transitions)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
