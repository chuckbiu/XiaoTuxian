<script setup>
    import { onMounted } from 'vue'

    import HomePanel from '@/components/HomePanel/index.vue'
    import { useCounterStore } from '@/stores/category.js'
    const CounterSrote = useCounterStore()
    const newList = CounterSrote.newList
    onMounted(()=>{
        CounterSrote.getNewListData()
    })
</script>
<template>
    <HomePanel title="新鲜好物" desc="新鲜出炉 品质靠谱">
        <template #content>
            <ul class="goods-list">
            <li v-for="item in CounterSrote.newList" :key="item.id">
            <RouterLink :to="`/detail/${item.id}`">
                <img :src="item.picture" alt="" />
                <p class="name">{{ item.name }}</p>
                <p class="price">&yen;{{ item.price }}</p>
            </RouterLink>
            </li>
        </ul>
        </template>
    </HomePanel>
</template>
<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>