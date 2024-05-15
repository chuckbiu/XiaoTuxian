import instance from "@/utils/https";

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
    return instance({
      url: '/member/cart',
      method: 'POST',
      data: {
        skuId,
        count
      }
    })
  }

// 删除购物车
export const delCartAPI = (ids) => {
    return instance({
      url: '/member/cart',
      method: 'DELETE',
      data: {
        ids
      }
    })
  }

// 购物车列表
export const updateNewList = () => {
    return instance({
        url: '/member/cart',
        method: 'GET'
    })
}
// 合并购物车
export const mergeCartList = (data) => {
  return instance({
      url: '/member/cart/merge',
      method: 'POST',
      data
  })
}