<template>
    <div class="home">
        <div class="container">
            <HomeCategory/>
            <HomeBanner/>
        </div>
        <HomeNew></HomeNew>
        <HomeHot></HomeHot>
        <homeProduct></homeProduct>
    </div>
</template>
<script setup>
    import HomeCategory from './components/HomeCategory/index.vue'
    import HomeBanner from './components/HomeBanner/index.vue'
    import HomeNew from './components/HomeNew/index.vue'
    import HomeHot from './components/HomeHot/index.vue'
    import homeProduct from './components/HomeProduct/index.vue'


</script>
<style lang="scss" scoped>
    .home {
        
        .container{
            display: flex;
        }
    }
</style>