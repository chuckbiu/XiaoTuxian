import instance from "@/utils/https";

// 获取-全部分类(包含推荐商品)
export function getList() {
  return instance({
    url: "home/category/head",
  });
}
// 获取-二级分类列表
export function getSecondList(params) {
  return instance({
    url: `category/${params.id}`,
    method: "get",
  });
}
// 获取轮播图数据
export function getBannerList() {
  return instance({
    url: "home/banner",
    method: "get",
  });
}
// 获取新鲜好物数据
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return instance({
    url: "/home/new",
    method: "get",
  });
};
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return instance({
    url: "home/hot",
    method: "get"
  });
};
/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return instance({
    url: '/home/goods',
    method: "get"
  })
}

/**
 * 商品详情接口
 * 
 * 
 */
export const getDetail = (id) => {
  return instance({
    url: '/goods',
    params: {
      id
    }
  })
}

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
export const fetchHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return instance({
    url:'/goods/hot',
    params:{
      id, 
      type, 
      limit
    }
  })
}