import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import admin from './modules/admin'
import splash from './modules/splash'
import member from './modules/member'

import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    admin,
    splash,
    member
  },
  getters
})

export default store
