import  instance  from '@/utils/https';

export function getList() {
    return instance({
        url: 'home/category/head'
    })
}