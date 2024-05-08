import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/Category/SubCategory/index.vue'

export const router = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: VueRouter.createWebHashHistory(),
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '',
            name: 'Layout',
            component: Layout,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: Home
                },
                {
                    //使用占位符
                    path: '/category/:id',
                    name: 'Category',
                    component: Category
                },
                {
                    path: '/category/sub/:id',
                    name: 'SubCategory',
                    component: SubCategory
                }
            ]
        }
    ], // `routes: routes` 的缩写

})