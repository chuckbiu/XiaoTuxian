import instance from "@/utils/https";
/**
 * @description: 获取分类数据
 * @param {*} id 分类id 
 * @return {*}
 */
export const getTopCategoryAPI = (id) => {
    return instance({
      url:'/category',
      params:{
        id
      }
    })
  }
  export function getBannerAPI (params = {}) {
    // 默认为1 商品为2
    const { distributionSite = '1' } = params
    return instance({
      url: '/home/banner',
      params: {
        distributionSite
      }
    })
  }