export default [
  /* 获取电影名单 */
  {
    path: /\/film\/fetchList.*/,
    method: 'get',
    handle({ db }) {
      let data = db
        .get('film')
        .cloneDeep()
        .reverse()
        .value()
      return {
        code: 0,
        data
      }
    }
  }
]
