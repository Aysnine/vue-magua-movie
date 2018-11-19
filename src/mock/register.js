import MockSuit from '@/lib/main/mock-suit'
import db from './$db'
import $cookie from '@/lib/main/$cookie'
import shortid from 'shortid'
shortid.characters(
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$'
)

import app from '@/mock/app'
import splash from '@/mock/splash'

MockSuit.extend(
  'ck',
  $cookie(
    (process.env.VUE_APP_MAIN_COOKIE_DOMAIN || '') + '-mock',
    (process.env.VUE_APP_MAIN_COOKIE_VERSION || '') + '-mock'
  )
)
MockSuit.extend('uid', shortid.generate)
MockSuit.extend('db', db)

MockSuit.load(app)
MockSuit.load(splash)
