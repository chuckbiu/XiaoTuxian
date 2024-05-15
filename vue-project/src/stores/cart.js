// 封装购物车模块
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { insertCartAPI, updateNewList, delCartAPI, mergeCartList } from '@/apis/cart'
import { useCounterStore } from "@/stores/login"
export const useCartStore = defineStore('cart', () => {
  // 1. 定义state - cartList
  const cartList = ref([])

  // 3. 已选择数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
  // 4. 已选择商品价钱合计
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
  // 总价
  const totalPrice = computed(() => {
    let totalPrice = 0;
    cartList.value.map((item) => {
      totalPrice += (item.price * 1) * (item.count)
    })
    return totalPrice
  })
  // 数量
  const total = computed(() => {

    let total = 0
    cartList.value.map((item) => {
      console.log(item)
      total += item.count
    })
    return total
  })


  const userStore = useCounterStore()
  const isLogin = computed(() => userStore.userinfo.token)

  // 2. 定义action - addCart
  const addCart = async (goods) => {
    const { skuId, count } = goods
    // 登录
    if (isLogin.value) {
      // 登录之后的加入购车逻辑
      await insertCartAPI({ skuId, count })
      getCartlist()
    } else {
      // 添加购物车操作
      // 已添加过 - count + 1
      // 没有添加过 - 直接push
      // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
      // 未登录
      const item = cartList.value.find((item) => goods.skuId === item.skuId)

      if (item) {
        // 找到了
        item.count++
      } else {
        // 没找到
        cartList.value.push(goods)
      }
    }


    console.log('添加', goods)


  }

  // 全选按钮
  const allcartList = (e) => {
    cartList.value.map((i) => {
      i.selected = e
    })
  }

  // 删除
  const delCart = async (skuId) => {
    if (isLogin.value) {
      // 调用接口实现接口购物车中的删除功能
      await delCartAPI([skuId])
      const res = await updateNewList()
      cartList.value = res.data.result

    } else {
      // 思路：
      // 1. 找到要删除项的下标值 - splice
      // 2. 使用数组的过滤方法 - filter
      const index = cartList.value.findIndex(item => item.skuId === skuId);
      if (index !== -1) {
        cartList.value.splice(index, 1);
      }
    }


  }

  // 清空购物车
  const clearCart = () => {
    cartList.value = []
  }

  // 合并购物车
  const mergeCart = async () => {
    const query = cartList.value.map((item) => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    })
    const res = await mergeCartList(query)
  }
  // 获取购物车列表
  const getCartlist = async () => {
    const res = await updateNewList()
    cartList.value = res.data.result
  }

  return {
    cartList,
    addCart,
    delCart,
    allcartList,
    selectedCount,
    selectedPrice,
    total,
    totalPrice,
    clearCart,
    mergeCart,
    getCartlist
  }
}, {
  persist: true,
})