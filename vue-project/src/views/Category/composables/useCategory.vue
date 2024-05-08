<script>
import { ref, onMounted } from 'vue'
import { getTopCategoryAPI } from '@/apis/category'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
export function useCategory()  {
    const categoryData = ref({})
    const route = useRoute()

    const getCategory = async (id) => {
        // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
        const res = await getTopCategoryAPI(id)
        categoryData.value = res.data.result
    }
    
    onMounted(()=>{
        getCategory(route.params.id)
    })

    onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
    })
    return {
        categoryData
    }
}
</script>
