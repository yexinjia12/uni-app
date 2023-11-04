<script setup lang="ts">
import { getHomeBannerAPI } from '@/services/home'
import type { BannerItem } from '@/types/home'
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 获取banner轮播图
const homeBannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  homeBannerList.value = res.result
}
onLoad(() => getHomeBannerData())
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="homeBannerList" />
</template>

<style lang="scss">
//
</style>
