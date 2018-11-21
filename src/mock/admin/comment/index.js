export default [
  /* 发布评论 */
  {
    path: /\/comment\/addComment.*/,
    method: 'post',
    handle({ body, db, ck, uid }) {
      let member_id = ck.get('current_user_id') || null
      let { content, rate, film_id } = body
      let has = db
        .get('comment')
        .find({ member_id, film_id })
        .value()
      if (has) return { code: 1, msg: '已评论过该电影，请勿重复评论' }
      db.get('comment')
        .push({ id: uid(), member_id, content, rate: parseInt(rate), film_id })
        .write()
      return {
        code: 0,
        msg: '完成'
      }
    }
  },
  /* 查询评论 */
  {
    path: /\/comment\/fetchComment.*/,
    method: 'post',
    handle({ body, db, ck }) {
      let member_id = ck.get('current_user_id') || null
      let { searchFeild, searchValue, mine, film } = body
      searchValue = searchValue ? searchValue.trim() : searchValue
      let chain = db.get('comment')
      chain = mine ? chain.filter(i => i.member_id == member_id) : chain
      chain = film ? chain.filter(i => i.film_id == film) : chain
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
  /* 删除评论 */
  {
    path: /\/comment\/deleteComment.*/,
    method: 'post',
    handle({ body, db }) {
      let { list } = body
      db.get('comment')
        .remove(i => list.indexOf(i.id) > -1)
        .write()
      return {
        code: 0,
        msg: '删除成功'
      }
    }
  }
]
