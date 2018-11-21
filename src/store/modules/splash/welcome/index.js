import { fetchFilm } from '@/api/admin/film'

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
        await dispatch('fetchFilm')
      } catch (err) {
        throw err
      }
    },
    async fetchFilm({ commit }) {
      try {
        let rst = await fetchFilm()
        commit('SET_LIST', rst.data)
        return rst
      } catch (err) {
        throw err
      }
    }
  }
}
