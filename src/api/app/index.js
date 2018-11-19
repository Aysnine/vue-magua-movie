import qs from 'qs'
import request from '@/lib/main/el-request'

export const memberLogin = ({ account, password }) => {
  return request({
    method: 'post',
    url: '/login/member',
    data: qs.stringify({ account, password })
  })
}

export const memberRegist = ({ account, nickname, password }) => {
  return request({
    method: 'post',
    url: '/regist/member',
    data: qs.stringify({ account, nickname, password })
  })
}

export const memberLogout = () => {
  return request({
    method: 'post',
    url: '/logout/member'
  })
}

export const adminLogin = ({ account, password }) => {
  return request({
    method: 'post',
    url: '/login/admin',
    data: qs.stringify({ account, password })
  })
}

export const adminLogout = () => {
  return request({
    method: 'post',
    url: '/logout/admin'
  })
}

export const fetchProfile = () => {
  return request({
    method: 'get',
    url: '/profile'
  })
}
