<template>
  <div v-show="!store.isFullScreen" class="dc-header">
    <div class="dc-hearder-left">
      <img class="dc-logo" src="../../assets/img/logo1.png" alt="" />
    </div>
    <div class="dc-hearder-right">
      <el-dropdown class="dc_header_right_Language">
        <span class="el-dropdown-link">
          <i
            v-if="themeModelSwitch === 'light'"
            class="iconfont icon-zhengchang-mingliangmoshi"
          ></i>
          <i
            v-if="themeModelSwitch === 'dark'"
            class="iconfont icon-icon-heiyemoshi"
          ></i>
          <i
            v-if="themeModelSwitch === 'eye'"
            class="iconfont icon-huyanmoshi"
          ></i>

          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="ThemeClick('light')"
              >{{ $t("OnlineDemo.bright")
              }}<el-icon class="el-icon--right"><Sunny /></el-icon
            ></el-dropdown-item>
            <el-dropdown-item @click="ThemeClick('dark')"
              >{{ $t("OnlineDemo.dark")
              }}<el-icon class="el-icon--right"><Moon /></el-icon
            ></el-dropdown-item>
            <el-dropdown-item @click="ThemeClick('eye')"
              >{{ $t("OnlineDemo.eyeProtection") }}
              <i class="iconfont icon-huyanmoshi"></i>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div class="dc_header_right_Item" @click="changeLanguage()">
        <span
          v-if="locale === 'en'"
          class="iconfont icon-a-zhongyingwenqiehuan-xianshizhongwen11"
        ></span>
        <span
          v-else
          class="iconfont icon-zhongyingwenqiehuan-xianshiyingwen"
        ></span>
      </div>
      <div
        class="dc_header_right_Item"
        onclick="  
          window.open('https://wpa1.qq.com/87987W6g?_type=wpa&qidian=true')
        "
        title="QQ"
      >
        <span class="iconfont icon-qq"></span>
      </div>

      <div class="dc_header_right_Item" title="github" onclick="  
          window.open('https://github.com/dafamao/dcwriter5.0')">
        <span class="iconfont icon-github"></span>
      </div>

      <div class="dc_header_right_Item" title="email">
        <span class="iconfont icon-email"></span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElIcon,
} from "element-plus";
import { useCounterStore } from "../../stores/counter.js";
const store = useCounterStore();

//多语言切换
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
function changeLanguage() {
  if (locale.value === "en") {
    locale.value = "zh";
  } else {
    locale.value = "en";
  }
}

//主题切换
const themeModelSwitch = ref("light");
function ThemeClick(type) {
  themeModelSwitch.value = type;
  document.body.setAttribute("data-theme", type);
}
</script>
<style scoped>
* {
  color: var(--text-color);
  background: var(--bg-color);
}

.iconfont {
  font-size: 16px;
}
.dc-header {
  width: 100%;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  box-sizing: border-box;
}
.dc-hearder-right {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.dc-logo {
  height: 46px;
}

.el-dropdown {
  cursor: pointer;
}
.el-dropdown:hover {
  outline: none; /* 清除外边框 */
  border: none; /* 清除边框 */
}

:focus-visible {
  outline: none !important; /* 删除轮廓 */
}

.dc-hearder-right .el-dropdown,
.dc-hearder-right .dc_header_right_Item {
  margin: 0 12px;
  cursor: pointer;
  user-select: none;
}

.el-dropdown-link {
  user-select: none;
  display: flex;
  align-items: center;
  height: 28px;
  line-height: 28px;
}
</style>
