import MockSuit from '@/lib/main/mock-suit'
import db from './$db'
import $cookie from '@/lib/main/$cookie'
import shortid from 'shortid'
shortid.characters(
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$'
)

MockSuit.extend(
  'ck',
  $cookie(
    (process.env.VUE_APP_MAIN_COOKIE_DOMAIN || '') + '-mock',
    (process.env.VUE_APP_MAIN_COOKIE_VERSION || '') + '-mock'
  )
)
MockSuit.extend('uid', shortid.generate)
MockSuit.extend('db', db)

MockSuit.load(require('./app').default)
MockSuit.load(require('./splash').default)
MockSuit.load(require('./admin/film').default)
MockSuit.load(require('./admin/member').default)
MockSuit.load(require('./admin/comment').default)
