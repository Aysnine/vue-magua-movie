import { fetchComment, addComment } from '@/api/admin/comment'
import { fetchRate } from '@/api/admin/film'

export default {
  namespaced: true,
  getters: {
    comments: state => state.comments,
    mine: state => state.mine,
    data: state => state.data,
    rate: state => state.rate
  },
  state: {
    data: null,
    rate: null,
    mine: null,
    comments: []
  },
  mutations: {
    SET_DATA(state, v) {
      state.data = v
    },
    SET_COMMENTS(state, v) {
      v.map(i => (i.rate = parseInt(i.rate)))
      state.comments = v
    },
    SET_RATE(state, v) {
      state.rate = {
        rates: v.count,
        count: v.count.reduce((x, i) => x + parseInt(i), 0),
        avg: parseInt(v.rate)
      }
    },
    SET_MINE(state, v) {
      if (v) v.rate = parseInt(v.rate)
      state.mine = v
    }
  },
  actions: {
    async unset({ commit }) {
      commit('SET_DATA', null)
    },
    async fetch({ dispatch }, id) {
      try {
        await dispatch('fetchComment', id)
        await dispatch('fetchMineComment', id)
        await dispatch('fetchRate', id)
      } catch (err) {
        throw err
      }
    },
    async fetchComment({ commit }, id) {
      try {
        let rst = await fetchComment({ film: id })
        commit('SET_COMMENTS', rst.data)
        return rst
      } catch (err) {
        throw err
      }
    },
    async fetchMineComment({ commit }, id) {
      try {
        let rst = await fetchComment({ film: id, mine: 1 })
        commit('SET_MINE', rst.data[0] || null)
        return rst
      } catch (err) {
        throw err
      }
    },
    async fetchRate({ commit }, id) {
      try {
        let rst = await fetchRate(id)
        commit('SET_DATA', rst.data.data)
        commit('SET_RATE', rst.data)
        return rst
      } catch (err) {
        throw err
      }
    },
    async addComment({ dispatch }, form) {
      try {
        let rst = await addComment(form)
        dispatch('fetch', form.film_id)
        return rst
      } catch (err) {
        throw err
      }
    }
  }
}
