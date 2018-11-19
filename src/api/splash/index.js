import request from '@/lib/main/el-request'

export const fetchList = () => {
  return request({
    method: 'get',
    url: '/film/fetchList'
  })
}
