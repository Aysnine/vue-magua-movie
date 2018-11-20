export default [
  /* 获取会员 */
  {
    path: /\/member\/fetchMember.*/,
    method: 'post',
    handle({ body, db }) {
      let { searchFeild, searchValue } = body
      searchValue = searchValue ? searchValue.trim() : searchValue
      let chain = db.get('member')
      chain =
        searchFeild &&
        searchValue &&
        ['account', 'nickname'].indexOf(searchFeild) > -1
          ? chain.filter(
              i => i[searchFeild].toLowerCase().indexOf(searchValue) > -1
            )
          : chain
      return {
        code: 0,
        data: chain
          .cloneDeep()
          .reverse()
          .value()
      }
    }
  }
]
