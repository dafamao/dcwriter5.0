<template>
  <div class="dc-demo-writer">
    <div v-show="store.isLoafing === false" class="dc-demo-writer-header">
      <DCSimpleHeaderTool></DCSimpleHeaderTool>
    </div>
    <div v-show="store.isLoafing === false" class="dc-demo-writer-header">
      <DCDemoHeader></DCDemoHeader>
    </div>
    <div v-show="store.isLoafing === false" class="dc-demo-writer-content">
      <DCDemoContent></DCDemoContent>
    </div>
    <div v-show="store.isLoafing === false" class="dc-demo-writer-footer">
      <DCDemoFooter></DCDemoFooter>
    </div>
    <DCDemoTitleList></DCDemoTitleList>
    <div v-show="store.isLoafing" class="dc-demo-writer-loading">
      <div class="dc-demo-writer-loading-container">
        <div class="dc-home-body-right">
          <div class="dc-home-body-image-bg"></div>
          <img src="../assets/img/DC-Logo2.png" alt="" />
        </div>
        <div class="loader"></div>
        <div class="dc-demo-writer-loading-text">
          <p style="margin-bottom: 20px">loading...</p>
          {{ $t("OnlineDemo.loadingText") }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import DCSimpleHeaderTool from "@/components/onlineDemo/dcSimpleHeaderTool.vue";
import DCDemoHeader from "@/components/onlineDemo/dcDemoHeader.vue";
import DCDemoFooter from "@/components/onlineDemo/dcDemoFooter.vue";
import DCDemoContent from "@/components/onlineDemo/dcDemoContent.vue";
import { useCounterStore } from "../stores/counter.js";
const store = useCounterStore();
import { onMounted } from "vue";
onMounted(() => {
  // document.documentElement 是全局变量时
  const el = document.documentElement;
  // const el = document.getElementById('xxx')

  // 获取 css 变量
  getComputedStyle(el).getPropertyValue(`--el-color-primary`);

  // 设置 css 变量
  el.style.setProperty("--el-color-primary", "#3b64fc");
});
import DCDemoTitleList from "@/components/onlineDemo/dcDemoTitleList.vue";
</script>
<style>
div::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

div::-webkit-scrollbar-thumb {
  border-radius: 10px;
  opacity: 0.2;
  background: #9093994d;
}

div::-webkit-scrollbar-track {
  border-radius: 0;
  border-right: 0px solid #f6f6f6;
  background: transparent;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
html,
body,
.dc-demo-writer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--bg3);
}
.dc-demo-writer {
  display: flex;
  flex-direction: column;
}
.dc-demo-writer-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px 0 transparent;
}
.dc-demo-writer-content {
  flex: 1;
  overflow: hidden;
}
.el-select__selection {
  height: 22px;
}

.dc-demo-writer-loading {
  width: 100%;
  height: 100%;
}
.dc-demo-writer-loading-container {
  width: 700px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.dc-home-body-right img {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
}
.dc-home-body-image-bg {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-image: linear-gradient(-45deg, #259e8461 50%, #8dbe4175 50%);
  filter: blur(72px);
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
}

.dc-demo-writer-loading-text {
  text-align: center;
  color: var(--text-color-secondary);
  position: absolute;
  top: calc(50% - 20px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.dc-demo-writer-loading-loading-text {
  text-align: center;
  color: var(--text-color-secondary);
  position: absolute;
  top: calc(50% + 50px);
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader {
  position: absolute;
  top: calc(20% - 66px);
  left: calc(50% - 130px);
  transform: translate(-50%, -20%);
  border: 4px solid #ffffff;
  border-top: 2px solid #259e84;
  border-radius: 50%;
  width: 260px;
  height: 260px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
