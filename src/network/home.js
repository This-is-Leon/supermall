import {request} from './request';

export function getHomeMultidata() {
  return request({
    // 笑话参数
    // url: '?num=4'
    url: '/home/multidata'
  })
}