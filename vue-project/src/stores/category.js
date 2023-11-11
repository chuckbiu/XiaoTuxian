import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { getList } from "@/apis/home"
export const useCounterStore = defineStore("category", () => {
    const navLists = ref([])
    const getListData = async () => {
        const res = await getList()
        navLists.value = res.data.result
    }
    return {
        navLists,
        getListData
    };
});
