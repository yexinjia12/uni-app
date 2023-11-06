import type { PageParams } from '@/types/global'
import { http } from '@/utils/http'

// 交叉类型 &
type hotParams = PageParams & { subType?: string }
/**
 * 通用热门推荐类型
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url: string, data?: hotParams) => {
  console.log(url)
  return http({
    method: 'GET',
    url,
    data,
  })
}
