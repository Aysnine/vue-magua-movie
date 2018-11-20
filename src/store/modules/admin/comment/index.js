import { fetchComment, deleteComment } from '@/api/admin/comment'

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
        await dispatch('fetchComment')
      } catch (err) {
        throw err
      }
    },
    async fetchComment({ commit }, form) {
      try {
        let rst = await fetchComment(form)
        commit('SET_LIST', rst.data)
        return rst
      } catch (err) {
        throw err
      }
    },
    async deleteComment({ dispatch }, form) {
      try {
        let rst = await deleteComment(form)
        dispatch('fetch')
        return rst
      } catch (err) {
        throw err
      }
    }
  }
}
