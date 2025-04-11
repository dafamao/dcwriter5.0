<template>
  <!-- <div style="width: 100%; margin: 0; padding: 0; box-sizing: border-box"> -->
  <el-container class="dc-home-container">
    <el-header :class="{ 'box-shadow': isScrolled, 'dc-home-header': true }">
      <div class="dc-home-header-container" v-if="isShowHeader">
        <zhuhe /><zhuhe /><zhuhe />
        南京都昌元旦特惠预通告来啦，产品享7折，限时特惠，欲购从速，详情请咨询13382028281
        <span class="dc-home-header-container-icon" @click="handleHeaderClick">
          <svg
            t="1735538096335"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4220"
            width="12"
            height="12"
          >
            <path
              d="M512 456.310154L94.247385 38.557538a39.542154 39.542154 0 0 0-55.689847 0 39.266462 39.266462 0 0 0 0 55.689847L456.310154 512 38.557538 929.752615a39.542154 39.542154 0 0 0 0 55.689847 39.266462 39.266462 0 0 0 55.689847 0L512 567.689846l417.752615 417.752616c15.163077 15.163077 40.290462 15.36 55.689847 0a39.266462 39.266462 0 0 0 0-55.689847L567.689846 512 985.442462 94.247385a39.542154 39.542154 0 0 0 0-55.689847 39.266462 39.266462 0 0 0-55.689847 0L512 456.310154z"
              fill="#FFFFFF"
              p-id="4221"
            ></path>
          </svg>
        </span>
      </div>
      <DCHeader @changeIndexFun="changeIndexFun"/>
    </el-header>
    <el-main @scroll="onScroll" class="dc-home-main">
      <DCBody @changeIndexFun="changeIndexFun" v-if="changePageIndex == 1"/>
      <DCSubPageBody :subPageIndex="subPageIndex" v-else-if="changePageIndex == 2"/>
    </el-main>
  </el-container>
  <!-- </div> -->
</template>
<script setup>
import { ElContainer, ElHeader, ElMain } from "element-plus";
import DCHeader from "@/components/home/dcHomeHeader.vue";
import DCBody from "@/components/home/dcHomeBody.vue";
import DCSubPageBody from "@/components/subpage/dcDetailPage.vue";
import zhuhe from "@/components/svgComponents/zhuhe.vue";
import { useRoute } from 'vue-router';
import { watch ,ref,onMounted } from "vue";
//滚动事件
const isScrolled = ref(false);
const changePageIndex = ref(1);
const subPageIndex = ref(0);
const route = useRoute();
onMounted(() => {
  console.log(route);
  if (route.query.hasOwnProperty('go')) {
    let jump=route.query['go']
    switch (jump) {
      case 'CustomerConsultation':
      changeIndexFun(2,6)
        break;
    
      default:
        break;
    }
  }
})
const onScroll = (event) => {
  const { scrollTop } = event.target; // 获取滚动位置
  isScrolled.value = scrollTop > 0; // 判断是否滚动
};

const changeIndexFun = (val,indexValue=2) => {
  console.log(val,indexValue);
  changePageIndex.value = val;
  subPageIndex.value = indexValue;
  
}

//顶部展示
const isShowHeader = ref(true);
const handleHeaderClick = () => {
  isShowHeader.value = false;
};
</script>
<style>
.dc-home-container {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.dc-home-header {
  height: auto;
  padding: 0;
  box-sizing: border-box;
  transition: box-shadow 0.3s; /* 添加过渡效果 */
}

.dc-home-header.box-shadow {
  box-shadow: 0 2px 6px 0 rgb(232 237 250 / 65%);
}

.dc-home-main {
  flex: 1;
  overflow: auto;
}
.el-main {
  padding: 0;
}
.dc-home-header-container {
  background-color: #259e84;
  min-height: 30px;
  padding: 5px 60px;
  z-index: 19;
  box-sizing: border-box;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.dc-home-header-container-icon {
  position: absolute;
  right: 20px;
  top: 4px;
  cursor: pointer;
}

@media (min-width: 0) and (max-width: 1300px) {
  .dc-home-header {
    padding: 0 16px;
    box-shadow: none;
  }
}

.el-tabs__item.is-active, .el-tabs__item:hover{
    color: rgb(37, 158, 132);
}
.el-tabs__active-bar {
  background-color: rgb(37, 158, 132);
}
.el-tabs--left .el-tabs__item.is-left{
    justify-content: flex-start;
}
.el-tab-pane{
  height: 100%;
}
</style>
