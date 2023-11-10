<script setup>
// useCounterStore
import { getList } from "./apis/home";  
import { storeToRefs } from "pinia"
import { onMounted } from "vue"
import { useCounterStore } from "./stores/counter.js"
// import HelloWorld from "@/";
  const counterStroe = useCounterStore()
  // console.log(counterStroe)
  const { count, doublecount } = storeToRefs(counterStroe)
</script>

<template>
  <div>
    <router-view></router-view>
 
  </div>
 

</template>

<style scoped lang="scss">
  
</style>
