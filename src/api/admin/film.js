import qs from 'qs'
import request from '@/lib/main/el-request'

export const fetchFilm = (form = {}) => {
  return request({
    method: 'post',
    url: '/film/fetchFilm',
    data: qs.stringify(form)
  })
}

export const fetchRate = id => {
  return request({
    method: 'post',
    url: '/film/fetchRate',
    data: qs.stringify({ id })
  })
}

export const addFilm = form => {
  return request({
    method: 'post',
    url: '/film/addFilm',
    data: qs.stringify(form)
  })
}

export const deleteFilm = ids => {
  return request({
    method: 'post',
    url: '/film/deleteFilm',
    data: qs.stringify({ list: ids }, { arrayFormat: 'repeat' })
  })
}
