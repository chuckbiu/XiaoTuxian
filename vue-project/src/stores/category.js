import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { getList, getSecondList, getBannerList, findNewAPI } from "@/apis/home"
export const useCounterStore = defineStore("category", () => {
    // 获取分类列表
    const navLists = ref([])

    const getListData = async () => {
        const res = await getList()
        navLists.value = res.data.result
    }
    // 获取二级分类列表
    const categorySecondlist = ref([])

    const getSecondListData = async (params) => {
        const res = await getSecondList(params)
        categorySecondlist.value = res.data.result
    }
    // 获取轮播图
    const Bannerlist = ref([])

    const getBannerListData = async () => {
        const res = await getBannerList()
        Bannerlist.value = res.data.result
    }
    // 获取新鲜好物
    const newList = ref([])

    const getNewListData = async () => {
        const res = await findNewAPI()
        newList.value = res.data.result
    }
    return {
        navLists,
        getListData,
        categorySecondlist,
        getSecondListData,
        Bannerlist,
        getBannerListData,
        newList,
        getNewListData
    };
});
