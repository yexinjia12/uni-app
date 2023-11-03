import { useMemberStore } from '@/stores/modules/member'
// 请求基地址
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 拼接基础地址 非http开头的url需要拼接基础地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2. 设置超时时间 默认60s
    options.timeout = 10000
    // 3. 添加请求头标识
    options.header = {
      'source-client': 'miniapp',
      ...options.header,
    }
    // 4. 添加 token
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

// request请求、uploadFile上传文件拦截
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

/**封装 Promise 请求函数
 * 
1. 返回 Promise 对象，用于处理返回值类型
2. 成功 resolve
   1. 提取数据
   2. 添加泛型
3. 失败 reject
   1. 401 错误
   2. 其他错误
   3. 网络错误
 */

//  添加泛型
interface Data<T> {
  code: string
  msg: string
  result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        resolve(res.data as Data<T>)
      },
    })
  })
}
