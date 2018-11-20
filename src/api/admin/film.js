import qs from 'qs'
import request from '@/lib/main/el-request'

export const fetchList = () => {
  return request({
    method: 'get',
    url: '/film/fetchList'
  })
}

export const addFilm = ({ title, subtitle, href, cover }) => {
  return request({
    method: 'post',
    url: '/film/addFilm',
    data: qs.stringify({ title, subtitle, href, cover })
  })
}

export const deleteFilm = ids => {
  return request({
    method: 'post',
    url: '/film/deleteFilm',
    data: qs.stringify({ list: ids })
  })
}
