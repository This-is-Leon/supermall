import {request} from './request';

export function getHomeMultidata() {
  return request({
    // 笑话参数
    // url: '?num=4'
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}