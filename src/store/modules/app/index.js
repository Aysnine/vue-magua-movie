import {
  fetchProfile,
  memberLogin,
  memberRegist,
  memberLogout,
  adminLogin,
  adminLogout
} from '@/api/app'

export default {
  namespaced: true,
  state: {
    user: null,
    roles: [
      { id: 'ROOT_ADMIN', name: '管理员' },
      { id: 'ROOT_MEMBER', name: '会员' }
    ]
  },
  mutations: {
    SET_USER(state, val) {
      state.user = val
    }
  },
  actions: {
    /* 状态初始化 */
    async init({ dispatch }) {
      try {
        let rst = await dispatch('fetchProfile')
        return rst
      } catch (err) {
        throw err
      }
    },
    /* 获取用户信息 */
    async fetchProfile({ commit }) {
      try {
        let rst = await fetchProfile()
        let { data } = rst
        commit('SET_USER', data)
        return rst
      } catch (err) {
        throw err
      }
    },
    /* 会员登陆 */
    async memberLogin({ dispatch }, { account, password }) {
      try {
        let rst = await memberLogin({ account, password })
        await dispatch('fetchProfile')
        return rst
      } catch (err) {
        throw err
      }
    },
    /* 会员注册 */
    async memberRegist(_, { account, nickname, password }) {
      try {
        let rst = await memberRegist({ account, nickname, password })
        return rst
      } catch (err) {
        throw err
      }
    },
    /* 会员退出 */
    async memberLogout({ commit }) {
      try {
        let rst = await memberLogout()
        commit('SET_USER', null)
        return rst
      } catch (err) {
        throw err
      }
    },
    /* 管理员登陆 */
    async adminLogin({ dispatch }, { account, password }) {
      try {
        let rst = await adminLogin({ account, password })
        await dispatch('fetchProfile')
        return rst
      } catch (err) {
        throw err
      }
    },
    /* 管理员退出 */
    async adminLogout({ commit }) {
      try {
        let rst = await adminLogout()
        commit('SET_USER', null)
        return rst
      } catch (err) {
        throw err
      }
    }
  }
}
