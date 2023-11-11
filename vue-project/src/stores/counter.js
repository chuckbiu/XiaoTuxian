import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios"
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  function increament() {
    count.value++;
  }

  // getters

  const doublecount = computed(() => {
    // console.log(this)
    return count.value * 2;
  });
  // 定义异步action
  // const API_URL = "https://geek.itheima.net/v1_0/channels";
  //准备数据(state)
  const list = ref([]);

  const loadList = async () => {
    const res = await axios.get(API_URL)
    list.value = res.data.data.channels
  }

  return {
    count,
    increament,
    loadList,
    list,
    doublecount,
  };
});
