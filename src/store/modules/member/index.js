export default {
  namespaced: true,
  getters: {
    // ...
  },
  state: {
    // ...
  },
  mutations: {
    // ...
  },
  actions: {
    async fetch({ commit, dispatch }) {
      try {
        // let rst = await xxx()
        // return rst
      } catch (err) {
        throw err
      }
    }
  }
}
