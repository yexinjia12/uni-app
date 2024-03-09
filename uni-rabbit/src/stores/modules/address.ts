import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 收获地址Store
export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref<AddressItem>()
  const changeSelectedAddress = (val: AddressItem) => {
    selectedAddress.value = val
  }
  return {
    selectedAddress,
    changeSelectedAddress,
  }
})
