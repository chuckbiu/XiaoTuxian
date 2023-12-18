import  instance  from '@/utils/https';

// 获取-全部分类(包含推荐商品)
export function getList() {
    return instance({
        url: 'home/category/head'
    })
}
// 获取-二级分类列表
export function getSecondList(params) {
    return instance({
        url: `category/${params.id}`,
        method: 'get'
    })
}
// 获取轮播图数据
export function getBannerList() {
    return instance({
        url: 'home/banner',
        method: 'get'
    })
}
