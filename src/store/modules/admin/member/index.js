import { fetchMember } from '@/api/admin/member'

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
        await dispatch('fetchMember')
      } catch (err) {
        throw err
      }
    },
    async fetchMember({ commit }, form) {
      try {
        let rst = await fetchMember(form)
        commit('SET_LIST', rst.data)
        return rst
      } catch (err) {
        throw err
      }
    }
  }
}
