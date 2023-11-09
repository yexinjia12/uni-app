import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

// 猜你喜欢组合式函数
export const useGuessList = () => {
  // 猜你喜欢数据加载
  const guessRef = ref<XtxGuessInstance>()
  // 滚动元素滚动到触发获取下一页数据
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }
  return {
    guessRef,
    onScrolltolower,
  }
}
