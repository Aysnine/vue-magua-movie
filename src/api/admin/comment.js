import qs from 'qs'
import request from '@/lib/main/el-request'

export const fetchComment = (form = {}) => {
  return request({
    method: 'post',
    url: '/comment/fetchComment',
    data: qs.stringify(form)
  })
}

export const addComment = ({ film_id, content, rate }) => {
  return request({
    method: 'post',
    url: '/comment/addComment',
    data: qs.stringify({ film_id, content, rate })
  })
}

export const deleteComment = ids => {
  return request({
    method: 'post',
    url: '/comment/deleteComment',
    data: qs.stringify({ list: ids })
  })
}
