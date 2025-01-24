<template>
  <div class="dc-demo-footer">
    <div class="dc-demo-footer-left">
      <div
        :class="`dc-demo-footer-left-item `"
        @click="changeCtlTitleListVisible"
        :title="$t('OnlineDemo.tableOfContents')"
      >
        <i
          :class="`iconfont icon-xiangmufuhao ${store.ctlTitleListVisible ? 'active' : ''}`"
        ></i>
      </div>
      <div
        class="dc-demo-footer-left-item"
        @click="changeView"
        :title="$t('OnlineDemo.continuousView')"
      >
        <i
          :class="`iconfont icon-fenye ${store.pageViewMode === true ? 'active' : ''}`"
        ></i>
      </div>
      <div class="dc-demo-header-tools-line"></div>
      <div class="dc-demo-footer-left-item">
        <span
          >{{
            $t("OnlineDemo.page") + "：" + store.currentPage.currentPageIndex
          }}/{{ store.currentPage.allPageIndex }}</span
        >
      </div>
      <div class="dc-demo-footer-left-item">
        <span>{{ $t("OnlineDemo.wordCount") + "：" + store.totalWords }}</span>
      </div>
    </div>
    <div class="dc-demo-footer-right">
      <div class="dc-demo-footer-left-item dc-demo-footer-left-item-scale">
        <i
          class="iconfont icon-jianshao"
          @click="changeScale(false)"
          :title="$t('OnlineDemo.zoomIn')"
        ></i>
        <div class="dc-demo-footer-left-item-scale-slider">
          <el-popover
            ref="scalePopover"
            placement="top"
            trigger="click"
            :title="$t('OnlineDemo.chooseScale')"
          >
            <template #reference>
              <span
                style="display: inline-block; width: 36px; text-align: center"
              >
                {{ Math.round(store.scale * 100) }}%
              </span>
            </template>
            <div>
              <div class="dc-demo-footer-scale-item" @click="setScale(400)">
                400%
              </div>
              <div class="dc-demo-footer-scale-item" @click="setScale(200)">
                200%
              </div>
              <div class="dc-demo-footer-scale-item" @click="setScale(150)">
                150%
              </div>
              <div class="dc-demo-footer-scale-item" @click="setScale(100)">
                100%
              </div>
              <div class="dc-demo-footer-scale-item" @click="setScale(75)">
                75%
              </div>
              <div class="dc-demo-footer-scale-item" @click="setScale(10)">
                10%
              </div>
            </div>
          </el-popover>
        </div>
        <i
          class="iconfont icon-zengjia"
          style="padding-left: 0"
          :title="$t('OnlineDemo.zoomOut')"
          @click="changeScale(true)"
        ></i>
      </div>

      <div
        class="dc-demo-footer-left-item"
        :title="
          store.isFullScreen
            ? $t('OnlineDemo.exitFullscreen')
            : $t('OnlineDemo.fullscreen')
        "
      >
        <i
          @click="fullScreen()"
          :class="`iconfont ${store.isFullScreen ? 'icon-icon_suofang' : 'icon-quanping'} `"
          style="font-size: 12px"
        ></i>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { ElPopover } from "element-plus";
import { useCounterStore } from "../../stores/counter.js";
const store = useCounterStore();
//显示大纲列表
const changeCtlTitleListVisible = () => {
  store.changeCtlTitleListVisible(!store.ctlTitleListVisible);
};

const changeView = () => {
  if (store.ctl) {
    store.pageViewMode === true
      ? store.ctl.DCExecuteCommand("PageViewMode", true, null)
      : store.ctl.DCExecuteCommand("NormalViewMode", false, null);
    store.changePageViewMode(!store.pageViewMode);
  }
};

const scalePopover = ref(null);
//加减缩放
const changeScale = (isAdd) => {
  let scale = store.scale;
  scale = scale * 100;

  if (isAdd && scale < 500) {
    scale += 10;
  } else if (!isAdd && scale > 10) {
    scale -= 10;
  }
  setScale(scale);
};

//比例
const setScale = (value) => {
  let scale = value / 100;
  //不要小数位
  scale = Math.round(scale * 10) / 10;
  store.ctl.SetZoomRate(scale);
  store.changeScale(scale);
  if (scalePopover.value) {
    scalePopover.value.hide(); //隐藏弹出框
  }
};
// 全屏
const isFullScreen = ref(false);

const fullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    isFullScreen.value = false;
  } else {
    document.documentElement.requestFullscreen();
    isFullScreen.value = true;
  }
  store.changeIsFullScreen(isFullScreen.value);
};
</script>
<style scoped>
.dc-demo-footer {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  padding: 0 4px 0 20px;
  box-sizing: border-box;
  border-top: 1px solid var(--tools-bar-bg);
}
.dc-demo-footer-left,
.dc-demo-footer-right {
  display: flex;
  align-items: center;
}

.dc-demo-footer-left .dc-demo-footer-left-item {
  margin-right: 10px;
}
.dc-demo-footer-right .dc-demo-footer-left-item {
  margin-left: 10px;
}
.dc-demo-header-tools-line {
  margin-right: 14px;
}
.iconfont {
  cursor: pointer;
  padding: 2px 5px;
  border-radius: 2px;
}
.iconfont.active {
  background: #0d0d0d0f;
}

.dc-demo-footer-left-item-scale {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.icon-jianshao,
.icon-zengjia {
  border-radius: 2px;
}
.icon-zengjia:hover,
.icon-jianshao:hover {
  background: #0d0d0d0f;
}
.dc-demo-footer-left-item-scale-slider {
  margin: 0 5px;
}
.dc-demo-footer-scale-item {
  line-height: 40px;
  padding: 0 10px;
  cursor: pointer;
  border-radius: 5px;
}
.dc-demo-footer-scale-item:hover {
  color: #409eff;
  background: #f3f5f7;
}
</style>
