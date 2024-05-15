import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { loginAPI } from "@/apis/login"
import { useCartStore } from "@/stores/cart"
export const useCounterStore = defineStore("userinfo", () => {

    const cart = useCartStore()
    const userinfo = ref({})
    const getLoginData = async (params) => {
        const res = await loginAPI(params)
        userinfo.value = res.data.result
           // 合并购物车
        await  cart.mergeCart()

        cart.getCartlist()
    }
    const clearUserInfo = async () => {
        userinfo.value = {}
    }
    return {
        userinfo,
        getLoginData,
        clearUserInfo
    };
}, {
    persist: true, // 开启持久化存储
});
