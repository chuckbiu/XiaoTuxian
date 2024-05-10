import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { loginAPI } from "@/apis/login"
export const useCounterStore = defineStore("userinfo", () => {
    const userinfo = ref([])
    const getLoginData = async (params) => {
        console.log(params)
        const res = await loginAPI(params)
        userinfo.value = res.data.result
    }

    return {
        userinfo,
        getLoginData
    };
});
