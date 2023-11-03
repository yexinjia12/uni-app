import XtxSwiper from './XtxSwiper.vue'

// 添加组件类型声明
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}
