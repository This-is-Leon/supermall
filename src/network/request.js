import axios from 'axios'

// 4.更进一步，直接返回axios实例
export function request(config) {
  
    // 1.创建axios实例
    const instance = axios.create({
      // 笑话链接
      // baseURL: 'https://autumnfish.cn/api/joke/list',
      // baseURL: 'http://123.207.32.32:8000',
      //最新接口20210708
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    })

    // 2.axios的拦截器

    instance.interceptors.request.use(config => {
      // console.log(config);
      return config  //拦截之后记住把config返回，否则信息就发不出去了
    }, err => {
      // console.warn(err);
    });
    //响应拦截
    instance.interceptors.response.use(res => {
      // console.log(res);
      return res.data
    }, err => {
      console.log(err);
    });
    //3.发送真正的网络请求
    return instance(config)
}


