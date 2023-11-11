import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<any>()

    // 保存会员信息，登录时使用
    const setProfile = (val: any) => {
      profile.value = val
    }

    // 修改昵称
    const setProfileNickname = computed({
      get() {
        return profile.value.nickname
      },
      set(val) {
        profile.value.nickname = val
      },
    })

    const setProfileAvatar = computed({
      get() {
        return profile.value.avatar
      },
      set(val) {
        profile.value.avatar = val
      },
    })

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
    }

    // 记得 return
    return {
      profile,
      setProfileNickname,
      setProfileAvatar,
      setProfile,
      clearProfile,
    }
  },
  // TODO: 持久化
  {
    // 网页版持久化
    // persist: true,
    // 小程序持久化
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
