import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/Category/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import OrderPage from "@/views/OrderPage/index.vue"
import OrderPay from '@/views/OrderPay/index.vue'
import PayBack from '@/views/OrderPay/PayBack/index.vue'
import Member from '@/views/Member/index.vue'
import MemberInfo from '@/views/Member/components/UserInfo.vue'
import MemberOrder from '@/views/Member/components/UserOrder.vue'



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
                },
                {
                    //使用占位符
                    path: '/Detail/:id',
                    name: 'Detail',
                    component: Detail
                },
                {
                    //使用占位符
                    path: '/CartList',
                    name: 'CartList',
                    component: CartList
                },

                {
                    //使用占位符
                    path: '/OrderPage',
                    name: 'OrderPage',
                    component: OrderPage
                },
                {
                    path: '/OrderPay',
                    name: 'OrderPay',
                    component: OrderPay
                },
                {
                    path: 'paycallback', // 注意路径，必须是paycallback
                    component: PayBack
                },
                {
                    path: '/member',
                    component: Member,
                    children: [
                        {
                            path: '',
                            component: MemberInfo
                        },
                        {
                            path: 'order',
                            component: MemberOrder
                        }
                    ]
                },
            ]
        }
    ], // `routes: routes` 的缩写
    // 实现定制路由滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 如果有 savedPosition，直接返回保存的滚动位置
        // if (savedPosition) {
        //     return savedPosition;
        //   }
        //   // 如果目标路由配置了scrollToTop为true，则滚动到页面顶部
        //   if (to.meta.scrollToTop) {
        //     return { top: 0 };
        //   }
        //   // 如果目标路由中存在锚点，则滚动到锚点位置
        //   if (to.hash) {
        //     return { selector: to.hash };
        //   }



        // 默认情况下滚动到页面顶部
        return { left: 0, top: 0 };
    }
})