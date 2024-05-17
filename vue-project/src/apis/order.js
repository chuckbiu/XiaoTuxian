import instance from "@/utils/https";

/**
 * 获取结算信息
 */
export const getCheckoutInfoAPI = () => {
    return instance({
      url:'/member/order/pre'
    })
  }


// 创建订单
export const createOrderAPI = (data) => {
    return instance({
      url: '/member/order',
      method: 'POST',
      data
    })
  }
  export const getOrderAPI = (id) => {
    return instance({
      url: `/member/order/${id}`
    })
  }