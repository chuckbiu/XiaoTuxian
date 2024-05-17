import instance from "@/utils/https";

export const getLikeListAPI = ({ limit = 4 }) => {
    return instance({
        url:'/goods/relevant',
        params: {
          limit 
        }
    })
}

export const getUserOrder = (params) => {
    return instance({
      url:'/member/order',
      method:'GET',
      params
    })
  }