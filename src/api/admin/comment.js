import qs from 'qs'
import request from '@/lib/main/el-request'

export const fetchComment = (form = {}) => {
  return request({
    method: 'post',
    url: '/film/fetchComment',
    data: qs.stringify(form)
  })
}

export const addComment = ({ film_id, content, rate }) => {
  return request({
    method: 'post',
    url: '/film/addFilm',
    data: qs.stringify({ film_id, content, rate })
  })
}

export const deleteComment = ids => {
  return request({
    method: 'post',
    url: '/film/deleteFilm',
    data: qs.stringify({ list: ids })
  })
}
