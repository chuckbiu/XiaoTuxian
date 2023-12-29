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
