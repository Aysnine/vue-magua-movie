export default [
  /* 拉取用户信息（会员/管理员） */
  {
    path: /\/profile.*/,
    method: 'get',
    handle({ db, ck }) {
      let id = ck.get('current_user_id') || null
      let user =
        db
          .get('member')
          .find({ id })
          .cloneDeep()
          .value() ||
        db
          .get('admin')
          .find({ id })
          .cloneDeep()
          .value()
      if (user) {
        delete user.password
      }
      return user
        ? {
            code: 0,
            msg: '欢迎回来',
            data: user
          }
        : {
            code: 1,
            msg: '登陆过期，请重新登陆'
          }
    }
  },
  /* 会员登陆 */
  {
    path: /\/login\/member.*/,
    method: 'post',
    handle({ body, db, ck }) {
      let { account, password } = body
      let user = db
        .get('member')
        .find({ account, password })
        .cloneDeep()
        .value()
      if (user) {
        ck.set('current_user_id', user.id)
        delete user.password
      }
      return user
        ? {
            code: 0,
            msg: '欢迎回来',
            data: user
          }
        : {
            code: 1,
            msg: '登陆失败'
          }
    }
  },
  /* 会员注册 */
  {
    path: /\/regist\/member.*/,
    method: 'post',
    handle({ body, db, uid }) {
      let { account, nickname, password } = body
      db.get('member')
        .push({ id: uid(), account, nickname, password, role: 'MEMBER' })
        .cloneDeep()
        .value()
      return {
        code: 0,
        msg: '注册成功，请登录'
      }
    }
  },
  /* 管理员登陆 */
  {
    path: /\/login\/admin.*/,
    method: 'post',
    handle({ body, db, ck }) {
      let { account, password } = body
      let user = db
        .get('admin')
        .find({ account, password })
        .cloneDeep()
        .value()
      if (user) {
        ck.set('current_user_id', user.id)
        delete user.password
      }
      return user
        ? {
            code: 0,
            msg: '欢迎回来',
            data: user
          }
        : {
            code: 1,
            msg: '登陆失败'
          }
    }
  },
  /* 会员退出 */
  {
    path: /\/logout\/member.*/,
    method: 'post',
    handle({ ck }) {
      ck.remove('current_user_id')
      return {
        code: 0,
        msg: '已退出'
      }
    }
  },
  /* 管理员退出 */
  {
    path: /\/logout\/admin.*/,
    method: 'post',
    handle({ ck }) {
      ck.remove('current_user_id')
      return {
        code: 0,
        msg: '已退出'
      }
    }
  }
]
