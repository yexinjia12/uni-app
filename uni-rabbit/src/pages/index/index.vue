<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'

// 获取banner轮播图
const homeBannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  homeBannerList.value = res.result
}

// 获取首页-前台分类
const homeCategoryList = ref([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  // homeCategoryList.value = res.result
}
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="homeBannerList" />
  <!-- 分类面板 -->
  <CategoryPanel />
</template>

<style lang="scss">
.page {
  background-color: #f7f7f7;
}
</style>
