<script setup>
// useCounterStore
  import { storeToRefs } from "pinia"
import { useCounterStore } from "./stores/counter.js"
// import HelloWorld from "@/";
  const counterStroe = useCounterStore()
  // console.log(counterStroe)
  const { count, doublecount } = storeToRefs(counterStroe)
</script>

<template>
  <div>
    <el-button type="primary">Primary</el-button>
    <button @click="counterStroe.increament">
    {{ count }}
  </button>
    <button >
    {{ doublecount }}
  </button>
  <button @click="counterStroe.loadList">
    获取数据
  </button>
  {{ counterStroe.list }}
  </div>
 

</template>

<style scoped>

</style>
