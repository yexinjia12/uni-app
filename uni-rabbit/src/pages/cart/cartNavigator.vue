<script setup>
import cartMain from './components/cartMain.vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const safeBottom = safeAreaInsets?.bottom + 'px'
</script>
<template>
  <!-- 普通页购物车 -->
  <view class="cart-navigator">
    <cartMain></cartMain>
  </view>
</template>

<style lang="scss">
.cart-navigator {
  .toolbar {
    padding-bottom: v-bind(safeBottom);
  }
}
</style>
