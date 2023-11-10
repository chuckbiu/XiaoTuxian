import  instance  from '@/utils/https';

// 获取-全部分类(包含推荐商品)
export function getList() {
    return instance({
        url: 'home/category/head'
    })
}