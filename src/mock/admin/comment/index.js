export default [
  /* 获取电影名单 */
  {
    path: /\/film\/fetchComment.*/,
    method: 'post',
    handle({ body, db, ck }) {
      let member_id = ck.get('current_user_id') || null
      let { searchFeild, searchValue, mine, film } = body
      searchValue = searchValue ? searchValue.trim() : searchValue
      let chain = db.get('comment')
      chain = mine ? chain.filter(i => (i.member_id = member_id)) : chain
      chain = film ? chain.filter(i => (i.film_id = film)) : chain
      chain =
        searchFeild && searchValue && ['content'].indexOf(searchFeild) > -1
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
  },
  {
    path: /\/film\/deleteFilm.*/,
    method: 'post',
    handle({ body, db }) {
      let { list } = body
      db.get('film')
        .remove(i => list.indexOf(i.id) > -1)
        .write()
      return {
        code: 0,
        msg: '删除成功'
      }
    }
  }
]
