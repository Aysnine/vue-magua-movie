export default [
  /* 获取电影名单 */
  {
    path: /\/film\/fetchFilm.*/,
    method: 'post',
    handle({ body, db }) {
      let { searchFeild, searchValue } = body
      searchValue = searchValue ? searchValue.trim() : searchValue
      let chain = db.get('film')
      chain =
        searchFeild &&
        searchValue &&
        ['title', 'subtitle'].indexOf(searchFeild) > -1
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
    path: /\/film\/addFilm.*/,
    method: 'post',
    handle({ body, db, uid }) {
      let { title, subtitle, href, cover } = body
      db.get('film')
        .push({ id: uid(), title, subtitle, href, cover })
        .write()
      return {
        code: 0,
        msg: '添加成功'
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
