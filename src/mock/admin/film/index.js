export default [
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
      let { ids } = body
      db.get('film')
        .remove(i => ids.indexOf(i.id) > -1)
        .write()
      return {
        code: 0,
        msg: '删除成功'
      }
    }
  }
]
