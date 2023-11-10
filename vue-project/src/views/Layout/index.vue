<template>
    <div>
        
        <App_TopNav/>
        
        <app_-header></app_-header>
        
        首页
        <router-view></router-view>
        <App_Footer/>
    </div>
</template>
<script setup>
    import App_TopNav  from '@/components/App_TopNav/index.vue'
    import App_Header from '@/components/App_Header/index.vue'
    import App_Footer from '@/components/App_Footer/index.vue'
</script>