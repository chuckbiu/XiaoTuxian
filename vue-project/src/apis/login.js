import instance from "@/utils/https";

// 登录
export const loginAPI = (data) => {
    return instance({
      url:'/login',
      method:'POST',
      data
    })
  }