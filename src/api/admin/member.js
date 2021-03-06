import qs from 'qs'
import request from '@/lib/main/el-request'

export const fetchMember = (form = {}) => {
  return request({
    method: 'post',
    url: '/member/fetchMember',
    data: qs.stringify(form)
  })
}
