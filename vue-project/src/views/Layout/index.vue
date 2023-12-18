<template>
    <div>
        
        <App_TopNav/>
        <App_Header_sticky></App_Header_sticky>
        <app_-header></app_-header>
        <router-view></router-view>
        <App_Footer/>
    </div>
</template>
<script setup>
    import App_TopNav  from '@/components/App_TopNav/index.vue'
    import App_Header from '@/components/App_Header/index.vue'
    import App_Footer from '@/components/App_Footer/index.vue'
    // 吸顶导航交互组件
    import App_Header_sticky from './components/app-header-sticky.vue'

    import { useCounterStore } from '@/stores/category'
    import { onMounted } from 'vue'
    const counterStore = useCounterStore()
    const { getListData } = counterStore
    onMounted(()=>{
        counterStore.getListData()
    })
</script>