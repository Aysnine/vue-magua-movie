import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
const db = low(new LocalStorage('mock-default-db'))

db.defaults({
  admin: require('./data/admin.json'),
  member: require('./data/member.json'),
  film: require('./data/film.json'),
  roles: [
    { id: 'ROOT_ADMIN', name: '管理员' },
    { id: 'ROOT_MEMBER', name: '会员' }
  ]
}).write()

export default db
