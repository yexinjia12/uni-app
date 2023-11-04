/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
// import 'vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'

// 添加组件类型声明
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}
