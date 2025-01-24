<template>
  <div
    v-show="store.ctlTitleListVisible"
    class="dc-demo-title-list-box"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseup="stopDrag"
    @mouseleave="stopDrag"
    :style="{ left: boxPosition.x + 'px', top: boxPosition.y + 'px' }"
  >
    <div class="dc-demo-title-list-title">
      <div>{{ $t("OnlineDemo.tableOfContents") }}</div>
      <i class="iconfont icon-guanbi" @click="closeTitleList"></i>
    </div>
    <template v-if="store.ctlTitleList.length">
      <div
        class="dc-demo-title-list-content"
        v-if="TitleList && Object.keys(TitleList).length"
      >
        <div
          class="dc-demo-title-list-item"
          v-for="(item, index) in Object.keys(TitleList)"
          :key="index"
          @click="NavigateByNodeID(item)"
        >
          {{ item }}. {{ TitleList[item] }}
        </div>
      </div>
    </template>
    <div
      style="padding: 0 0 16px 16px; color: #ccc"
      v-else-if="TitleList === null"
    >
      没有找到目录
    </div>
    <div style="padding: 0 0 16px 16px; color: #ccc" v-else>loading...</div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useCounterStore } from "../../stores/counter.js";

const store = useCounterStore();

const TitleList = ref({});
const boxPosition = ref({ x: 20, y: 120 }); // 初始位置
let isDragging = ref(false);
let dragOffset = ref({ x: 0, y: 0 });

// 开始拖拽
const startDrag = (event) => {
  isDragging.value = true;
  dragOffset.value = {
    x: event.clientX - boxPosition.value.x,
    y: event.clientY - boxPosition.value.y,
  };
};

// 拖拽中
const onDrag = (event) => {
  if (isDragging.value) {
    boxPosition.value = {
      x: event.clientX - dragOffset.value.x,
      y: event.clientY - dragOffset.value.y,
    };
  }
};

// 停止拖拽
const stopDrag = () => {
  isDragging.value = false;
};

// 关闭大纲列表
const closeTitleList = () => {
  store.changeCtlTitleListVisible(false);
};

// 根据节点ID导航
const NavigateByNodeID = (nodeId) => {
  if (store.ctl && nodeId) {
    store.ctl.NavigateByNodeID(nodeId);
    // 跳转完后更新其他状态
    store.ctl.ondocumentclick();
  }
};

watch(
  () => store.ctlTitleList,
  (newVal) => {
    if (typeof newVal === "string" && newVal.length) {
      // 将navigateNodes字符串转换成对象
      TitleList.value = newVal.split("&").reduce((result, item) => {
        const [key, value] = item.split("=");
        result[key] = value;
        return result;
      }, {});
    } else {
      TitleList.value = null;
    }
    store.changeCtlTitleListVisible(true);
  }
);

watch(
  () => store.ctlTitleListVisible,
  (newVal) => {
    if (newVal) {
      store.ctl.Focus();
    }
  }
);
</script>

<style>
.dc-demo-title-list-box {
  position: fixed;
  max-height: 590px;
  overflow: hidden;
  width: 240px;
  background: var(--tools-bar-bg);
  padding: 10px;
  padding-right: 16px;
  border-radius: 5px;
  box-shadow:
    rgba(13, 13, 13, 0.06) 0px 0px 8px 6px,
    rgba(13, 13, 13, 0.1) 0px 1px 4px;
  display: flex;
  flex-direction: column;
  cursor: move; /* 添加鼠标样式，提示可以拖拽 */
}

.dc-demo-title-list-item {
  height: 40px;
  line-height: 40px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  padding: 0 6px;
  box-sizing: border-box;
  border-radius: 2px;
}

.dc-demo-title-list-item:hover {
  color: #409eff;
  background: var(--bg3);
}

.dc-demo-title-list-title {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  align-items: center;
  height: 50px;
}

.dc-demo-title-list-title .iconfont {
  font-weight: 0;
  cursor: pointer;
}

.dc-demo-title-list-title .iconfont:hover {
  color: #409eff;
}

.dc-demo-title-list-content {
  overflow-y: auto;
  flex: 1;
}
</style>
