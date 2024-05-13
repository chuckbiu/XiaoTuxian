import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { loginAPI } from "@/apis/login"
export const useCounterStore = defineStore("userinfo", () => {
    const userinfo = ref({})
    const getLoginData = async (params) => {
        const res = await loginAPI(params)
        userinfo.value = res.data.result
    }
    const clearUserInfo = () => {
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
