import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
const db = low(new LocalStorage('mock-default-db'))

db.defaults({
  admin: require('./data/admin.json'),
  member: require('./data/member.json'),
  film: require('./data/film.json'),
  roles: [{ id: 'ADMIN', name: '管理员' }, { id: 'MEMBER', name: '会员' }]
}).write()

export default db
