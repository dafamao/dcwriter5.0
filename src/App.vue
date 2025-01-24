<!--
 * @Author: lxy x13141668665@163.com
 * @Date: 2024-12-23 09:35:10
 * @LastEditors: lxy x13141668665@163.com
 * @LastEditTime: 2024-12-26 14:34:31
 * @FilePath: \20241223_Vue3\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <RouterView />
</template>
<script setup>
import { onMounted, onBeforeUnmount } from "vue";
onMounted(() => {
  const setRem = () => {
    const width = window.innerWidth;
    document.documentElement.style.fontSize = (width / 375) * 16 + "px"; // 假设设计稿宽度为375px
  };

  setRem();
  window.addEventListener("resize", setRem);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", this.setRem);
});
</script>
