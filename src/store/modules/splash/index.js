import { fetchList } from '@/api/splash'

export default {
  namespaced: true,
  getters: {
    list: state => state.list
  },
  state: {
    list: []
  },
  mutations: {
    SET_LIST(state, v) {
      state.list = v
    }
  },
  actions: {
    async fetch({ dispatch }) {
      try {
        await dispatch('fetchList')
      } catch (err) {
        throw err
      }
    },
    async fetchList({ commit }) {
      try {
        let rst = await fetchList()
        commit('SET_LIST', rst.data)
        return rst
      } catch (err) {
        throw err
      }
    }
  }
}
