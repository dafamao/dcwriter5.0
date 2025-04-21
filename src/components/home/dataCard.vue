<template>
  <div class="dc-data-card">
    <div class="dc-data-card-header">{{ $t("RealDCWriter5uantity") }}</div>
    <div class="dc-data-card-sub-header" style="margin-bottom: 10px">
      {{ $t("RealDCWriter5uantityVersion") }}
    </div>
    <el-card class="dc-data-card-box" shadow="always">
      <!-- <template #header>
        <div class="dc-data-card-header">DCWriter5.0接口数量实时统计</div>
        <div class="dc-data-card-sub-header">
          DCWriter5.0最新版本：2024年11月稳定版（DCWriter5.0.2411）
        </div>
      </template> -->
      <div class="dc-data-card-content">
        <div class="dc-data-card-item">
          <div class="dc-data-card-item-title">{{ $t("PublicFunction") }}</div>
          <div
            class="dc-data-card-item-value counter"
            :style="{ opacity: opacity }"
          >
            {{ count1 }}
          </div>
          <div
            :style="{ opacity: opacity }"
            class="counter dc-data-card-item-change"
          >
            <span>1.3%</span>
            <svg
              t="1735203690163"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="18107"
              width="10"
              height="10"
            >
              <path
                d="M409.6 0m68.266667 0l0 0q68.266667 0 68.266666 68.266667l0 887.466666q0 68.266667-68.266666 68.266667l0 0q-68.266667 0-68.266667-68.266667l0-887.466666q0-68.266667 68.266667-68.266667Z"
                fill="green"
                p-id="18108"
              ></path>
              <path
                d="M795.803016 482.708656m48.271823-48.271823l0 0q48.271823-48.271823 0-96.543646l-289.630937-289.630938q-48.271823-48.271823-96.543646 0l0 0q-48.271823 48.271823 0 96.543646l289.630937 289.630938q48.271823 48.271823 96.543646 0Z"
                fill="green"
                p-id="18109"
              ></path>
              <path
                d="M68.254589 386.145425m48.271823 48.271823l0 0q48.271823 48.271823 96.543646 0l289.630937-289.630938q48.271823-48.271823 0-96.543645l0 0q-48.271823-48.271823-96.543646 0l-289.630937 289.630937q-48.271823 48.271823 0 96.543646Z"
                fill="green"
                p-id="18110"
              ></path>
            </svg>
            <span style="color: grey; margin-left: 5px"
              >more than last version
            </span>
          </div>
        </div>
        <div class="dc-data-card-item">
          <div class="dc-data-card-item-title">
            {{ $t("PublicAttributes") }}
          </div>
          <div
            class="dc-data-card-item-value counter"
            :style="{ opacity: opacity }"
          >
            {{ count2 }}
          </div>
          <div
            :style="{ opacity: opacity }"
            class="counter dc-data-card-item-change"
          >
            <span>1%</span>
            <svg
              t="1735203690163"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="18107"
              width="10"
              height="10"
            >
              <path
                d="M409.6 0m68.266667 0l0 0q68.266667 0 68.266666 68.266667l0 887.466666q0 68.266667-68.266666 68.266667l0 0q-68.266667 0-68.266667-68.266667l0-887.466666q0-68.266667 68.266667-68.266667Z"
                fill="green"
                p-id="18108"
              ></path>
              <path
                d="M795.803016 482.708656m48.271823-48.271823l0 0q48.271823-48.271823 0-96.543646l-289.630937-289.630938q-48.271823-48.271823-96.543646 0l0 0q-48.271823 48.271823 0 96.543646l289.630937 289.630938q48.271823 48.271823 96.543646 0Z"
                fill="green"
                p-id="18109"
              ></path>
              <path
                d="M68.254589 386.145425m48.271823 48.271823l0 0q48.271823 48.271823 96.543646 0l289.630937-289.630938q48.271823-48.271823 0-96.543645l0 0q-48.271823-48.271823-96.543646 0l-289.630937 289.630937q-48.271823 48.271823 0 96.543646Z"
                fill="green"
                p-id="18110"
              ></path>
            </svg>
            <span style="color: grey; margin-left: 5px"
              >more than last version
            </span>
          </div>
        </div>
        <div class="dc-data-card-item">
          <div class="dc-data-card-item-title">
            {{ $t("PublicDocumentOptions") }}
          </div>
          <div
            class="dc-data-card-item-value counter"
            :style="{ opacity: opacity }"
          >
            {{ count3 }}
          </div>
          <div
            :style="{ opacity: opacity }"
            class="counter dc-data-card-item-change"
          >
            <span>1.1%</span>
            <svg
              t="1735203690163"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="18107"
              width="10"
              height="10"
            >
              <path
                d="M409.6 0m68.266667 0l0 0q68.266667 0 68.266666 68.266667l0 887.466666q0 68.266667-68.266666 68.266667l0 0q-68.266667 0-68.266667-68.266667l0-887.466666q0-68.266667 68.266667-68.266667Z"
                fill="green"
                p-id="18108"
              ></path>
              <path
                d="M795.803016 482.708656m48.271823-48.271823l0 0q48.271823-48.271823 0-96.543646l-289.630937-289.630938q-48.271823-48.271823-96.543646 0l0 0q-48.271823 48.271823 0 96.543646l289.630937 289.630938q48.271823 48.271823 96.543646 0Z"
                fill="green"
                p-id="18109"
              ></path>
              <path
                d="M68.254589 386.145425m48.271823 48.271823l0 0q48.271823 48.271823 96.543646 0l289.630937-289.630938q48.271823-48.271823 0-96.543645l0 0q-48.271823-48.271823-96.543646 0l-289.630937 289.630937q-48.271823 48.271823 0 96.543646Z"
                fill="green"
                p-id="18110"
              ></path>
            </svg>
            <span style="color: grey; margin-left: 5px"
              >more than last version
            </span>
          </div>
        </div>
        <div class="dc-data-card-item">
          <div class="dc-data-card-item-title">{{ $t("PublicEvent") }}</div>
          <div
            class="dc-data-card-item-value counter"
            :style="{ opacity: opacity }"
          >
            {{ count4 }}
          </div>
          <div
            :style="{ opacity: opacity }"
            class="counter dc-data-card-item-change"
          >
            <span>2%</span>
            <svg
              t="1735203690163"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="18107"
              width="10"
              height="10"
            >
              <path
                d="M409.6 0m68.266667 0l0 0q68.266667 0 68.266666 68.266667l0 887.466666q0 68.266667-68.266666 68.266667l0 0q-68.266667 0-68.266667-68.266667l0-887.466666q0-68.266667 68.266667-68.266667Z"
                fill="green"
                p-id="18108"
              ></path>
              <path
                d="M795.803016 482.708656m48.271823-48.271823l0 0q48.271823-48.271823 0-96.543646l-289.630937-289.630938q-48.271823-48.271823-96.543646 0l0 0q-48.271823 48.271823 0 96.543646l289.630937 289.630938q48.271823 48.271823 96.543646 0Z"
                fill="green"
                p-id="18109"
              ></path>
              <path
                d="M68.254589 386.145425m48.271823 48.271823l0 0q48.271823 48.271823 96.543646 0l289.630937-289.630938q48.271823-48.271823 0-96.543645l0 0q-48.271823-48.271823-96.543646 0l-289.630937 289.630937q-48.271823 48.271823 0 96.543646Z"
                fill="green"
                p-id="18110"
              ></path>
            </svg>
            <span style="color: grey; margin-left: 5px"
              >more than last version
            </span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script setup>
import { ElCard } from "element-plus";
import { ref, onMounted } from "vue";

const opacity = ref(0);
const count1 = ref(0);
const count2 = ref(0);
const count3 = ref(0);
const count4 = ref(0);
const defaultValues = {
  count1: 1017,
  count2: 260,
  count3: 107,
  count4: 43,
};
onMounted(() => {
  // 设置透明度动画
  opacity.value = 1;

  // 调用公共方法来更新计数器
  animateCounter(count1, defaultValues.count1);
  animateCounter(count2, defaultValues.count2);
  animateCounter(count3, defaultValues.count3);
  animateCounter(count4, defaultValues.count4);
});
const animateCounter = (counterRef, defaultValue) => {
  let startTime = Date.now();
  let interval = setInterval(() => {
    let currentTime = Date.now();
    let elapsedTime = currentTime - startTime;

    if (elapsedTime < 2000) {
      counterRef.value = Math.floor((elapsedTime / 2000) * defaultValue);
    } else {
      counterRef.value = defaultValue;
      clearInterval(interval);
    }
  }, 10);
};
</script>
<style scoped>
.counter {
  opacity: 0;
  transition: opacity 3s ease-in;
  animation: numberScroll 3s ease-in;
}

@keyframes numberScroll {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  50% {
    transform: translateY(-2px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.dc-data-card {
  max-width: 1300px;
  height: calc(100vh - 700px);
  min-height: 180px;
  overflow-y: auto;
  margin: 80px auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.dc-data-card-header {
  height: 30px;
  font-size: 22px;
  font-weight: bold;
  line-height: 26px;
  padding: 0 10px;
  box-sizing: border-box;

  /* color: #1f2f3d; */
  color: var(--text-color);
}
.dc-data-card-box {
  flex: 1;
}
.el-card {
  background: var(--bg1);
  color: var(--text-color);
  display: flex;
  flex-direction: column;
}

.el-card .el-card__body {
  flex: 1;
}
.dc-data-card-content {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.dc-data-card-sub-header {
  font-size: 14px;
  color: #5e6d82;
  line-height: 20px;
  padding: 0 10px;
  box-sizing: border-box;
}

.dc-data-card-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dc-data-card-item > div {
  display: flex;
  align-items: center;
}

.dc-data-card-item-value {
  font-size: 20px;
  line-height: 40px;
}

.dc-data-card-item-title {
  font-size: 12px;
  color: grey;
}

.dc-data-card-item-change {
  font-size: 12px;
  color: green;
}
@media (min-width: 0) and (max-width: 1300px) {
  .dc-data-card-header {
    height: auto;
    font-size: 18px;
    line-height: 18px;
  }
  .dc-data-card-sub-header {
    font-size: 12px;
    line-height: 12px;
    margin: 10px 0;
  }
  .dc-data-card {
    height: auto;
    padding: 0 20px;
    margin: 40px auto;
  }
  .el-card__body {
    padding: 10px;
    box-sizing: border-box;
  }
  .el-card {
    --el-card-padding: 10px;
  }
  .dc-data-card-item {
    width: 50%;
    min-width: 150px;
    margin-bottom: 10px;
  }
}
</style>
