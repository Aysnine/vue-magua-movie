export default [
  /* 拉取用户信息（会员/管理员） */
  {
    path: /\/film\/fetchList.*/,
    method: 'get',
    handle({ db }) {
      let data = db
        .get('film')
        .cloneDeep()
        .value()
      return {
        code: 0,
        data
      }
    }
  }
]
