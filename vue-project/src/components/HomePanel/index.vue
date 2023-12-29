<script setup>
//props 写法
defineProps({
  title: {
    type: String,
    default: "新鲜好物",
  },
  desc: {
    type: String,
    default: "新鲜出炉 品质靠谱",
  },
});
</script>
<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small>{{ desc }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>
