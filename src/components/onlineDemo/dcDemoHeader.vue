<template>
  <div class="dc-demo-header-container">
    <div class="dc-demo-header-container-box">
      <div class="dc-demo-header-tools-left" @click="toggleToolbarMenu('left')">
        <i class="iconfont icon-zuo-"></i>
      </div>
      <div
        class="dc-demo-header-tools-right"
        @click="toggleToolbarMenu('right')"
      >
        <i class="iconfont icon-you-"></i>
      </div>
      <div class="dc-demo-header-toolbar" ref="toolbar">
        <div class="dc-demo-header-tools-wrap">
          <div
            class="dc-demo-header-tools-item"
            @click="openFile"
            :title="$t('OnlineDemo.openLocalFile')"
          >
            <i class="iconfont icon-dakaiwenjianjia"></i>
          </div>
          <div
            class="dc-demo-header-tools-item"
            @click="saveFile('xml')"
            :title="$t('OnlineDemo.saveXml')"
          >
            <i class="iconfont icon-code-xml"></i>
          </div>
          <div
            class="dc-demo-header-tools-item"
            @click="saveFile('local.pdf')"
            :title="$t('OnlineDemo.savePdf')"
          >
            <i class="iconfont icon-807geshi_wendangpdf"></i>
          </div>
        </div>
        <div class="dc-demo-header-tools-line"></div>
        <div class="dc-demo-header-tools-wrap">
          <div
            :class="`dc-demo-header-tools-item`"
            :title="$t('OnlineDemo.paperSize')"
          >
            <el-popover
              ref="paperSizePopover"
              placement="bottom"
              trigger="click"
              :width="220"
              @hide="handlePaperPopoverHide"
            >
              <template #reference>
                <span
                  ><i class="iconfont icon-zhizhangdaxiao2"></i
                  ><span class="dc-demo-header-tools-item-text">{{
                    $t("OnlineDemo.paperSize")
                  }}</span></span
                >
              </template>
              <div
                v-if="paperOptions && paperOptions.length"
                class="dc-demo-header-tools-page"
              >
                <el-radio-group
                  @change="changePaperSize"
                  v-model="pageSetting.PaperKind"
                >
                  <el-radio
                    v-for="item in paperOptions"
                    :key="item.value"
                    :value="item.value"
                  >
                    <div class="dc-demo-header-tools-page-item">
                      <span class="page-name" v-if="item.value === 'Custom'">{{
                        locale === "en" ? "Custom" : "自定义"
                      }}</span>
                      <span class="page-name" v-if="item.value !== 'Custom'">
                        {{ item.label }}</span
                      >
                      <span v-if="item.value != 'Custom'" class="page-size"
                        >{{ item.datawidth }} x {{ item.dataheight }}
                        {{ $t("OnlineDemo.paperCm") }}</span
                      >
                    </div>
                  </el-radio>
                </el-radio-group>

                <div
                  v-if="pageSetting.PaperKind === 'Custom'"
                  class="paper-custom"
                >
                  <div class="paper-custom-item">
                    <span> {{ $t("OnlineDemo.paperWidth") + "：" }} </span>
                    <el-input
                      min="1"
                      max="10000"
                      type="number"
                      size="small"
                      v-model="pageSetting.PaperWidthInCM"
                    />
                    <span style="margin-left: 5px">
                      {{ $t("OnlineDemo.paperCm") }}</span
                    >
                  </div>
                  <div class="paper-custom-item">
                    <span> {{ $t("OnlineDemo.paperHeight") + "：" }} </span>
                    <el-input
                      min="1"
                      max="10000"
                      type="number"
                      size="small"
                      v-model="pageSetting.PaperHeightInCM"
                    />
                    <span style="margin-left: 5px">
                      {{ $t("OnlineDemo.paperCm") }}</span
                    >
                  </div>
                </div>
                <div
                  v-if="pageSetting.PaperKind === 'Custom'"
                  class="dc-demo-header-tools-footer"
                >
                  <ElButton
                    link
                    type="primary"
                    @click="changeCustomPaperSize"
                    >{{ $t("OnlineDemo.confirm") }}</ElButton
                  >
                </div>
              </div>
            </el-popover>
          </div>
          <div class="dc-demo-header-tools-item">
            <el-popover
              ref="paperMarginPopover"
              :width="'auto'"
              placement="bottom"
              trigger="click"
              @hide="handlePaperPopoverHide"
            >
              <template #reference>
                <span
                  ><i class="iconfont icon-fuwenben-yebianju"></i>
                  <span class="dc-demo-header-tools-item-text">
                    {{ $t("OnlineDemo.paperMargin") }}</span
                  >
                </span>
              </template>
              <div class="dc-demo-header-tools-page-margin">
                <div class="dc-demo-header-tools-page-margin-item">
                  <span>{{ $t("OnlineDemo.leftMargin") + "：" }}</span>
                  <el-input
                    min="0"
                    max="10000"
                    type="number"
                    size="small"
                    v-model="pageSetting.LeftMarginInCM"
                  />
                  <span style="margin-left: 5px">{{
                    $t("OnlineDemo.paperCm")
                  }}</span>
                </div>
                <div class="dc-demo-header-tools-page-margin-item">
                  <span>{{ $t("OnlineDemo.rightMargin") + "：" }}</span>
                  <el-input
                    min="0"
                    max="10000"
                    type="number"
                    size="small"
                    v-model="pageSetting.RightMarginInCM"
                  />
                  <span style="margin-left: 5px">{{
                    $t("OnlineDemo.paperCm")
                  }}</span>
                </div>
                <div class="dc-demo-header-tools-page-margin-item">
                  <span>{{ $t("OnlineDemo.topMargin") + "：" }}</span>
                  <el-input
                    min="0"
                    max="10000"
                    type="number"
                    size="small"
                    v-model="pageSetting.TopMarginInCM"
                  />
                  <span style="margin-left: 5px">{{
                    $t("OnlineDemo.paperCm")
                  }}</span>
                </div>
                <div class="dc-demo-header-tools-page-margin-item">
                  <span>{{ $t("OnlineDemo.bottomMargin") + "：" }}</span>
                  <el-input
                    min="0"
                    max="10000"
                    type="number"
                    size="small"
                    v-model="pageSetting.BottomMarginInCM"
                  />
                  <span style="margin-left: 5px">{{
                    $t("OnlineDemo.paperCm")
                  }}</span>
                </div>
              </div>
              <div class="dc-demo-header-tools-footer">
                <ElButton @click="changePaperMargin" link type="primary">{{
                  $t("OnlineDemo.confirm")
                }}</ElButton>
              </div>
            </el-popover>
          </div>
          <div class="dc-demo-header-tools-item">
            <el-popover
              ref="paperLandscapePopover"
              :width="'auto'"
              placement="bottom"
              @hide="handlePaperPopoverHide"
              trigger="click"
            >
              <template #reference>
                <span
                  ><i class="iconfont icon-zhizhangfangxiang"></i>
                  <span class="dc-demo-header-tools-item-text">
                    {{ $t("OnlineDemo.paperDirection") }}
                  </span>
                </span>
              </template>
              <div>
                <el-radio-group
                  @change="changePaperLandscape"
                  v-model="pageSetting.Landscape"
                >
                  <el-radio :value="false"
                    >{{ $t("OnlineDemo.longitudinal") }}
                  </el-radio>
                  <el-radio :value="true"
                    >{{ $t("OnlineDemo.horizontal") }}
                  </el-radio>
                </el-radio-group>
              </div>
            </el-popover>
          </div>
        </div>

        <div class="dc-demo-header-tools-line"></div>
        <div class="dc-demo-header-tools-wrap">
          <div
            :class="`dc-demo-header-tools-item ${formViewMode !== 'Disable' ? 'active' : ''}`"
            :title="$t('OnlineDemo.formMode')"
          >
            <el-popover
              ref="FormViewModePopover"
              placement="bottom"
              trigger="click"
              width="auto"
            >
              <template #reference>
                <span> <i class="iconfont icon-biaodanmoshi1"></i></span>
              </template>
              <div class="dc-demo-header-tools-number-style">
                <div
                  v-for="(item, index) in FormViewModeList"
                  :key="index"
                  :class="{
                    'dc-demo-header-tools-number-style-item': true,
                    active: formViewMode === item.value,
                  }"
                  @click="changeFormViewMode(item.value)"
                >
                  <div class="dc-number-style-item-icon">
                    {{ $t(`OnlineDemo.${item.title}`) }}
                  </div>
                </div>
              </div>
            </el-popover>
          </div>
        </div>

        <div class="dc-demo-header-tools-line"></div>
        <div class="dc-demo-header-tools-wrap">
          <div
            class="dc-demo-header-tools-item"
            :title="$t('OnlineDemo.insert')"
          >
            <el-popover
              ref="insertPopover"
              :width="'auto'"
              placement="bottom"
              trigger="click"
              @mouseout="handleMouseOut"
              @before-leave="handleMouseOut"
            >
              <template #reference>
                <span>
                  <i class="iconfont icon-charu"></i>
                  <span class="dc-demo-header-tools-item-text">
                    {{ $t("OnlineDemo.insert") }}
                  </span>
                </span>
              </template>
              <div>
                <div
                  class="dc-demo-header-tools-insert-item"
                  @click="openEditDialog('dcTextInput', 'Text')"
                >
                  <i class="iconfont icon-wenbenshurukuang"></i>
                  <span>{{ $t("OnlineDemo.inputfile") }}</span>
                </div>
                <div
                  class="dc-demo-header-tools-insert-item"
                  @click="openEditDialog('dcTextInput', 'DateTime')"
                >
                  <i class="iconfont icon-shuruyu"></i>
                  <span>{{ $t("OnlineDemo.datetimefield") }}</span>
                </div>
                <div
                  class="dc-demo-header-tools-insert-item"
                  @click="openEditDialog('dcTextInput', 'DropdownList')"
                >
                  <i class="iconfont icon-xialaliebiao"></i>
                  <span>{{ $t("OnlineDemo.dropdownfield") }}</span>
                </div>
                <div
                  class="dc-demo-header-tools-insert-item"
                  @click="openEditDialog('dcTextInput', 'Numeric')"
                >
                  <i class="iconfont icon-shuzishurukuang"></i>
                  <span>{{ $t("OnlineDemo.numberfield") }}</span>
                </div>

                <div
                  class="dc-demo-header-tools-insert-item"
                  @click="openEditDialog('dcCheckBox')"
                  @mouseover="handleMouseOut"
                >
                  <i class="iconfont icon-duoxuan"></i>
                  <span>{{ $t("OnlineDemo.checkboxgroup") }}</span>
                </div>
                <div
                  ref="insertTableButton"
                  @mouseover="handleMouseOver"
                  class="dc-demo-header-tools-insert-item dc-demo-header-tools-insert-table"
                >
                  <span
                    ><i class="iconfont icon-biaoge"></i
                    >{{ $t("OnlineDemo.table") }}</span
                  >
                  <i class="iconfont icon-you-"></i>
                </div>
                <div
                  @mouseover="handleMouseOut"
                  class="dc-demo-header-tools-insert-item"
                >
                  <i class="iconfont icon-tianjiagongshi"></i>
                  <span>{{ $t("OnlineDemo.formula") }}</span>
                </div>
                <div
                  @click="insertSpecialChar"
                  class="dc-demo-header-tools-insert-item"
                >
                  <i
                    class="iconfont icon-teshuzifu"
                    style="font-size: 18px"
                  ></i>
                  <span>{{ $t("OnlineDemo.specialcharacter") }}</span>
                </div>
                <div
                  @click="insertImg"
                  class="dc-demo-header-tools-insert-item"
                >
                  <i class="iconfont icon-tupian_huaban"></i>
                  <span>{{ $t("OnlineDemo.image") }}</span>
                </div>
                <div
                  @click="insertVideo"
                  class="dc-demo-header-tools-insert-item"
                >
                  <i class="iconfont icon-shipin"></i>
                  <span>{{ $t("OnlineDemo.video") }}</span>
                </div>
              </div>
            </el-popover>
          </div>
        </div>
        <div class="dc-demo-header-tools-line"></div>
        <div class="dc-demo-header-tools-wrap">
          <div
            class="dc-demo-header-tools-item"
            @click="undo"
            :title="$t('OnlineDemo.undo')"
          >
            <i class="iconfont icon-chehui"></i>
          </div>
          <div
            class="dc-demo-header-tools-item"
            @click="redo"
            :title="$t('OnlineDemo.redo')"
          >
            <i class="iconfont icon-qianjin"></i>
          </div>
          <div
            class="dc-demo-header-tools-item"
            @click="formatBrush"
            :title="$t('OnlineDemo.formatBrush')"
          >
            <i class="iconfont icon-geshishua1"></i>
          </div>
          <div
            class="dc-demo-header-tools-item"
            @click="clearFormat"
            :title="$t('OnlineDemo.clearFormat')"
          >
            <i class="iconfont icon-qingchugeshishua"></i>
          </div>
        </div>

        <div class="dc-demo-header-tools-line"></div>
        <div class="dc-demo-header-tools-wrap">
          <div class="dc-demo-header-tools-item" :title="$t('OnlineDemo.font')">
            <el-select
              v-model="fontName"
              placeholder="Select"
              style="width: 88px; height: 24px"
              size="small"
              @change="changeFontName"
            >
              <el-option
                v-for="(item, index) in supportFontFamilys"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>
          </div>
          <div
            class="dc-demo-header-tools-item"
            :title="$t('OnlineDemo.fontSize')"
          >
            <el-select
              v-model="fontSize"
              placeholder="Select"
              style="width: 88px; height: 24px"
              size="small"
              @change="changeFontSize"
            >
              <el-option
                v-for="(item, index) in FontSizeList"
                :key="index"
                :label="item.title"
                :value="item.number"
              />
            </el-select>
          </div>
          <div
            :class="`dc-demo-header-tools-item ${store.currentStyle.Bold ? 'active' : ''}`"
            @click="handleDCExecuteCommandClick('Bold')"
            :title="$t('OnlineDemo.bold')"
          >
            <i class="iconfont icon-cuti"></i>
          </div>
          <div
            :class="`dc-demo-header-tools-item ${store.currentStyle.Italic ? 'active' : ''}`"
            @click="handleDCExecuteCommandClick('Italic')"
            :title="$t('OnlineDemo.italic')"
          >
            <i class="iconfont icon-italic"></i>
          </div>
          <div
            :class="`dc-demo-header-tools-item ${store.currentStyle.Underline ? 'active' : ''}`"
            @click="handleDCExecuteCommandClick('Underline')"
            :title="$t('OnlineDemo.underline')"
          >
            <i class="iconfont icon-zitixiahuaxian"></i>
          </div>
          <div
            :class="`dc-demo-header-tools-item ${store.currentStyle.Strikeout ? 'active' : ''}`"
            @click="handleDCExecuteCommandClick('Strikeout')"
            :title="$t('OnlineDemo.strikethrough')"
          >
            <i class="iconfont icon-shanchuxian"></i>
          </div>
          <div
            :class="`dc-demo-header-tools-item ${store.currentStyle.Superscript ? 'active' : ''}`"
            @click="handleDCExecuteCommandClick('Superscript')"
            :title="$t('OnlineDemo.superscript')"
          >
            <i class="iconfont icon-shangbiao"></i>
          </div>
          <div
            :class="`dc-demo-header-tools-item ${store.currentStyle.Subscript ? 'active' : ''}`"
            @click="handleDCExecuteCommandClick('Subscript')"
            :title="$t('OnlineDemo.subscript')"
          >
            <i class="iconfont icon-xiabiao"></i>
          </div>
          <div
            class="dc-demo-header-tools-item"
            style="position: relative"
            :title="$t('OnlineDemo.fontColor')"
          >
            <el-color-picker
              v-model="colorString"
              @change="changeColor"
              size="small"
              style="
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -12px;
                margin-top: -12px;
                z-index: 9;
                opacity: 0;
              "
            ></el-color-picker>
            <i
              ref="colorIcon"
              class="iconfont icon-wenziyanse"
              :style="{ color: colorString }"
            ></i>
          </div>
          <div
            class="dc-demo-header-tools-item"
            style="position: relative"
            :title="$t('OnlineDemo.backgroundColor')"
          >
            <el-color-picker
              v-model="backColorString"
              @change="changeBackColor"
              size="small"
              style="
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -12px;
                margin-top: -12px;
                z-index: 9;
                opacity: 0;
              "
            ></el-color-picker>
            <i
              class="iconfont icon-beijingyanse"
              :style="{
                color:
                  backColorString === '#FFFFFF00' ||
                  backColorString === '#FFFFFF'
                    ? 'var(--text-color)'
                    : backColorString,
              }"
            ></i>
          </div>
        </div>
        <div class="dc-demo-header-tools-line"></div>
        <div class="dc-demo-header-tools-wrap">
          <div
            class="dc-demo-header-tools-item"
            :title="$t('OnlineDemo.header')"
          >
            <el-select
              v-model="titleLevel"
              placeholder="Select"
              style="width: 88px; height: 24px"
              size="small"
              @change="changeTitleLevel"
            >
              <el-option
                v-for="(item, index) in TitleLevelList"
                :key="index"
                :label="$t(`OnlineDemo.${item.label}`)"
                :value="item.value"
                :style="`font-size: ${item.fontSize}px; font-weight: ${item.fontWeight};`"
              ></el-option>
            </el-select>
          </div>
        </div>

        <div class="dc-demo-header-tools-line"></div>
        <div class="dc-demo-header-tools-wrap icon-duiqi">
          <div
            :class="`dc-demo-header-tools-item ${store.CurrentParagraphStyle.CurrentParagraphAlign === 'Left' ? 'active' : ''}`"
            @click="handleDCExecuteCommandClick('AlignLeft')"
            :title="$t('OnlineDemo.alignLeft')"
          >
            <i class="iconfont icon-zuoduiqi"></i>
          </div>
          <div
            :class="`dc-demo-header-tools-item ${store.CurrentParagraphStyle.CurrentParagraphAlign === 'Right' ? 'active' : ''}`"
            @click="handleDCExecuteCommandClick('AlignRight')"
            :title="$t('OnlineDemo.alignRight')"
          >
            <i class="iconfont icon-youduiqi"></i>
          </div>
          <div
            :class="`dc-demo-header-tools-item ${store.CurrentParagraphStyle.CurrentParagraphAlign === 'Center' ? 'active' : ''}`"
            @click="handleDCExecuteCommandClick('AlignCenter')"
            :title="$t('OnlineDemo.alignCenter')"
          >
            <i class="iconfont icon-juzhongduiqi"></i>
          </div>

          <div
            class="dc-demo-header-tools-item"
            @click="SetCurrentParagraphStyleLeftIndent"
            :title="$t('OnlineDemo.increaseIndent')"
          >
            <i class="iconfont icon-yousuojin" style="font-size: 16px"></i>
          </div>
          <div
            class="dc-demo-header-tools-item"
            @click="SetCurrentParagraphStyleLeftIndent(false)"
            :title="$t('OnlineDemo.decreaseIndent')"
          >
            <i class="iconfont icon-zuosuojin" style="font-size: 16px"></i>
          </div>
          <div
            :class="`dc-demo-header-tools-item ${lineSpacing !== 1 ? 'active' : ''}`"
            :title="$t('OnlineDemo.lineSpacing')"
          >
            <el-popover
              ref="lineSpacingPopover"
              placement="bottom"
              trigger="click"
              :title="$t('OnlineDemo.lineSpacing')"
            >
              <template #reference>
                <span> <i class="iconfont icon-hangjianju1"></i></span>
              </template>
              <div>
                <el-radio-group
                  @change="changeLineSpacing"
                  v-model="lineSpacing"
                  class="dc-demo-header-tools-line-spacing"
                >
                  <el-radio
                    v-for="item in LineSpacingList"
                    :key="item"
                    :label="item"
                    :value="item"
                  ></el-radio>
                </el-radio-group>
              </div>
            </el-popover>
          </div>
          <div
            class="dc-demo-header-tools-item"
            :title="$t('OnlineDemo.numberedList')"
          >
            <el-popover
              ref="NumberStyleListPopover"
              placement="bottom"
              trigger="click"
              :width="200"
            >
              <template #reference>
                <span> <i class="iconfont icon-youxuliebiao1"></i> </span>
              </template>
              <div class="dc-demo-header-tools-number-style">
                <div
                  v-for="(item, index) in NumberStyleList"
                  :key="index"
                  :class="{
                    'dc-demo-header-tools-number-style-item': true,
                    active:
                      store.CurrentParagraphStyle.ParagraphListStyle ===
                      item.title,
                  }"
                  @click="changeNumberStyle(item)"
                >
                  <div class="dc-number-style-item-icon">{{ item.data }}</div>
                </div>
              </div>
            </el-popover>
          </div>
          <div
            class="dc-demo-header-tools-item"
            :title="$t('OnlineDemo.bulletedList')"
          >
            <el-popover
              ref="BulletStyleListPopover"
              placement="bottom"
              trigger="click"
              :width="210"
            >
              <template #reference>
                <span> <i class="iconfont icon-wuxuliebiao1"></i></span>
              </template>
              <div class="dc-demo-header-tools-number-style">
                <div
                  v-for="(item, index) in BulletStyleList"
                  :key="index"
                  :class="{
                    'dc-demo-header-tools-number-style-item': true,
                    active:
                      store.CurrentParagraphStyle.ParagraphListStyle ===
                      item.title,
                  }"
                  @click="changeNumberStyle(item)"
                >
                  <div class="dc-number-style-item-icon">{{ item.data }}</div>
                </div>
              </div>
            </el-popover>
          </div>
        </div>

        <div class="dc-demo-header-tools-line"></div>
        <div class="dc-demo-header-tools-wrap">
          <div
            class="dc-demo-header-tools-item"
            :title="$t('OnlineDemo.getStructuredData')"
            @click="openEditDialog('dcJsonData')"
          >
            <i class="iconfont icon-shujiegou2"></i>
          </div>
          <div
            class="dc-demo-header-tools-item"
            @click="handlePrintPreview"
            :title="$t('OnlineDemo.print')"
          >
            <i class="iconfont icon-print"></i>
          </div>
          <!-- <div class="dc-demo-header-tools-item" :title="$t('OnlineDemo.find')">
            <i class="iconfont icon-chazhao1"></i>
          </div> -->
          <div
            class="dc-demo-header-tools-item"
            :title="$t('OnlineDemo.about')"
            @click="openEditDialog('dcInfo')"
          >
            <i class="iconfont icon-guanyu"></i>
          </div>
        </div>
      </div>
    </div>
    <dcCurrencyDialog ref="dcCurrencyDialogRef" :isVisible="isShowDialog" />
    <div
      v-show="isInsertTableChoose"
      @mouseover="handleInsertTableChooseOver"
      @mouseleave="handleInsertTableChooseLeave"
      ref="insertTableChoose"
      class="dc-demo-header-tools-insert-table-choose"
      :style="{
        top: `${chooseTablePosition.top}px`,
        left: `${chooseTablePosition.left}px`,
      }"
    >
      <div v-for="rowIndex in 10" :key="`row-${rowIndex}`" class="table-row">
        <div
          v-for="colIndex in 10"
          :key="`cell-${rowIndex}-${colIndex}`"
          :class="`${getCellActiveClass(rowIndex, colIndex)}`"
          :title="`(${rowIndex},${colIndex})`"
          @click="handleInsertTableChooseClick(rowIndex, colIndex)"
          @mouseover="handleCellMouseOver(rowIndex, colIndex)"
          @mouseleave="handleCellMouseOut(rowIndex, colIndex)"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import {
  FontSizeList,
  TitleLevelList,
  LineSpacingList,
  NumberStyleList,
  BulletStyleList,
  FormViewModeList,
} from "../../assets/js/onlineDemo.js";
import dcCurrencyDialog from "./dcCurrencyDialog.vue";
import {
  ElSelect,
  ElOption,
  ElPopover,
  ElRadioGroup,
  ElRadio,
  ElInput,
  ElButton,
  ElColorPicker,
} from "element-plus";
import { useCounterStore } from "../../stores/counter.js";
const store = useCounterStore();

//打开文件
const openFile = () => {
  if (store.ctl) {
    let file = document.createElement("input");
    file.setAttribute("id", "dcInputFile");
    file.setAttribute("type", "file");
    file.setAttribute("accept", ".xml,.json,.rtf,.html,.htm,.odt,.ofd");
    file.style.display = "none";

    store.ctl.appendChild(file);
    file.click();
    //file文件选中事件
    file.onchange = function () {
      let fileList = this.files;
      if (fileList.length > 0) {
        let reader = new FileReader();
        var isodt = fileList[0].name.toLowerCase().endsWith("odt") === true;
        var isofd = fileList[0].name.toLowerCase().endsWith("ofd") === true;
        if (isodt || isofd) {
          reader.readAsArrayBuffer(fileList[0]);
        } else {
          reader.readAsText(fileList[0], "UTF-8");
        }
        reader.onload = function (e) {
          //获取到文件内容
          let strFileContent = e.target.result;
          let fileFormat = "xml";
          fileFormat = fileList[0].name.substring(
            fileList[0].name.lastIndexOf(".") + 1
          );
          store.changexml(strFileContent);
          store.ctl.removeChild(file);
          if (isodt) {
            store.ctl.LoadDocumentFromBinary(
              new Uint8Array(e.target.result),
              "odt"
            );
          } else if (isofd) {
            store.ctl.LoadDocumentFromBinary(
              new Uint8Array(e.target.result),
              "ofd"
            );
          } else {
            store.ctl.LoadDocumentFromString(strFileContent, fileFormat);
          }
        };
      }
    };
  }
};
//保存文件
const saveFile = (format) => {
  if (store.ctl) {
    store.ctl.DownLoadFile(format);
  }
};

//页面设置
const pageSetting = ref({
  PaperKind: "A4",
  Landscape: false,
  LeftMarginInCM: 1.5,
  RightMarginInCM: 1.5,
  TopMarginInCM: 1.5,
  BottomMarginInCM: 1.5,
  PaperHeightInCM: 30,
  PaperWidthInCM: 21,
});
//页面大小改变事件
const paperSizePopover = ref(null); // 定义ref
const changePaperSize = (size) => {
  if (size !== "Custom") {
    const opts = {
      PaperKind: size,
    };
    if (store.ctl) {
      store.ctl.ChangeDocumentSettings(opts);
      store.ctl.RefreshDocument();
      ChangeStorePageSetting(); //更新仓库中的页面设置
    }

    //关闭ref为paperSizePopover的弹出框
    if (paperSizePopover.value) {
      paperSizePopover.value.hide(); // 关闭弹出框
    }
  }
};
//自定义页面大小
const changeCustomPaperSize = () => {
  var opts = {
    PaperKind: "Custom",
    PaperWidthInCM: pageSetting.value.PaperWidthInCM,
    PaperHeightInCM: pageSetting.value.PaperHeightInCM,
  };
  if (store.ctl) {
    store.ctl.ChangeDocumentSettings(opts);
    store.ctl.RefreshDocument();
    ChangeStorePageSetting(); //更新仓库中的页面设置
  }

  //关闭ref为paperSizePopover的弹出框
  if (paperSizePopover.value) {
    paperSizePopover.value.hide(); // 关闭弹出框
  }
};
//页边距
const paperMarginPopover = ref(null); // 定义ref
const changePaperMargin = () => {
  if (store.ctl) {
    store.ctl.ChangeDocumentSettings({
      LeftMarginInCM: pageSetting.value.LeftMarginInCM,
      RightMarginInCM: pageSetting.value.RightMarginInCM,
      TopMarginInCM: pageSetting.value.TopMarginInCM,
      BottomMarginInCM: pageSetting.value.BottomMarginInCM,
    });
    store.ctl.RefreshDocument();
    if (paperMarginPopover.value) {
      paperMarginPopover.value.hide(); // 关闭弹出框
    }
    ChangeStorePageSetting(); //更新仓库中的页面设置
  }
};
//横向纵向切换
const paperLandscapePopover = ref(null); // 定义ref
const changePaperLandscape = () => {
  if (store.ctl) {
    store.ctl.ChangeDocumentSettings({
      Landscape: pageSetting.value.Landscape,
    });
    store.ctl.RefreshDocument();
    if (paperLandscapePopover.value) {
      paperLandscapePopover.value.hide(); // 关闭弹出框
    }
    ChangeStorePageSetting(); //更新仓库中的页面设置
  }
};
//修改仓库中的页面设置
const ChangeStorePageSetting = () => {
  if (store.ctl) {
    var documentPageSettings = store.ctl.GetDocumentPageSettings();
    store.changePageSetting({
      ...documentPageSettings,
      ...pageSetting.value,
    });
  }
};
//隐藏页面设置下拉
const handlePaperPopoverHide = () => {
  let {
    PaperKind,
    Landscape,
    LeftMarginInCM,
    RightMarginInCM,
    TopMarginInCM,
    BottomMarginInCM,
    PaperHeightInCM,
    PaperWidthInCM,
  } = store.pageSetting;
  pageSetting.value = {
    PaperKind,
    Landscape: Landscape == "true" || Landscape == true,
    LeftMarginInCM,
    RightMarginInCM,
    TopMarginInCM,
    BottomMarginInCM,
    PaperHeightInCM,
    PaperWidthInCM,
  };
};

//撤销
const undo = () => {
  if (store.ctl) {
    store.ctl.Undo();
  }
};
//重做
const redo = () => {
  if (store.ctl) {
    store.ctl.Redo();
  }
};
//格式刷
const formatBrush = () => {
  if (store.ctl) {
    store.ctl.DCExecuteCommand("FormatBrush", true, null);
  }
};
//清空格式
const clearFormat = () => {
  if (store.ctl) {
    store.ctl.DCExecuteCommand("ClearFormat", true, null);
  }
};

// 字体列表数据
const supportFontFamilys = computed(() => {
  return store.ctl
    ? (store.ctl.getSupportFontFamilys() &&
        store.ctl.getSupportFontFamilys().sort()) ||
        []
    : [];
});
// 字体名称
const fontName = ref("Calibri");
//更改字体样式
const changeFontName = () => {
  if (store.ctl) {
    store.ctl.DCExecuteCommand("FontName", false, fontName.value);
  }
};

// 字体大小
const fontSize = ref(14.25);
//更改字体大小
const changeFontSize = () => {
  if (store.ctl) {
    store.ctl.DCExecuteCommand("FontSize", false, fontSize.value);
  }
};

//字体样式事件
const handleDCExecuteCommandClick = (type) => {
  if (store.ctl) {
    store.ctl.DCExecuteCommand(type, false, null);
    if (["AlignLeft", "AlignRight", "AlignCenter"].includes(type)) {
      let CurrentParagraphAlign = store.ctl.CurrentParagraphAlign; //段落对齐方式
      //存储段落样式
      store.changeCurrentParagraphStyle({
        ...store.CurrentParagraphStyle,
        CurrentParagraphAlign,
      });
    }
  }
};

//字体颜色
const colorString = ref("#000000");
//修改颜色事件
const changeColor = () => {
  if (store.ctl) {
    store.ctl.DCExecuteCommand("Color", false, colorString.value);
    console.log("修改：", colorString.value);
    store.changeCurrentStyle({
      ...store.currentStyle,
      ColorString: colorString.value,
    });
  }
};

//背景颜色
const backColorString = ref("#FFFFFF");
//修改背景颜色事件
const changeBackColor = () => {
  if (store.ctl) {
    store.ctl.DCExecuteCommand("BackColor", false, backColorString.value);
    console.log("修改背景颜色：", backColorString.value);
    store.changeCurrentStyle({
      ...store.currentStyle,
      BackgroundColorString: backColorString.value,
    });
  }
};

//标题
const titleLevel = ref(-1);
//标题级别
const changeTitleLevel = () => {
  if (store.ctl) {
    TitleLevelList.filter((item) => {
      if (item.value === titleLevel.value) {
        if (item.value === -1) {
          store.ctl.ExecuteCommand("TitleLevel", false, titleLevel.value);
          store.ctl.DCExecuteCommand("bold", false, false);
          store.ctl.DCExecuteCommand("fontSize", false, item.fontSize);
        } else {
          store.ctl.ExecuteCommand("TitleLevel", false, titleLevel.value);
          store.ctl.DCExecuteCommand("bold", false, true);
          store.ctl.DCExecuteCommand("fontSize", false, item.fontSize);
        }
        //更新仓库中的样式
        store.changeCurrentStyle({
          ...store.ctl.CurrentStyle,
        });
      }
    });
  }
};

//监听当前样式
watch(
  () => store.currentStyle,
  (newVal, oldVal) => {
    if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
      // console.log("监听到样式改变", newVal);
      const {
        FontSize,
        FontName,
        ColorString,
        BackgroundColorString,
        TitleLevel,
      } = newVal;
      fontName.value = FontName; //更新字体名称
      fontSize.value = FontSize; //更新字体大小
      colorString.value = ColorString; //更新字体颜色
      backColorString.value = BackgroundColorString; //更新背景颜色
      titleLevel.value = TitleLevel; //更新标题级别

      console.log("监听改变:", colorString.value);
    }
  }
);

//监听段落样式
watch(
  () => store.CurrentParagraphStyle,
  (newVal, oldVal) => {
    if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
      lineSpacing.value = newVal.LineSpacing ? newVal.LineSpacing : 1; //更新行间距
      formViewMode.value = newVal.FormViewMode ? newVal.FormViewMode : "Normal"; //更新表单模式
    }
  }
);

//设置左缩进
const SetCurrentParagraphStyleLeftIndent = (isAdd = true) => {
  if (store.ctl) {
    var leftIndent = store.ctl.GetCurrentParagraphStyle().LeftIndent || 0;
    leftIndent = parseFloat(leftIndent);
    store.ctl.SetCurrentParagraphStyle({
      LeftIndent: isAdd ? leftIndent + 30 : leftIndent - 30,
    });
  }
};

//行间距
const lineSpacing = ref(1);
const lineSpacingPopover = ref(null); // 定义ref
//行间距
const changeLineSpacing = () => {
  if (store.ctl) {
    store.ctl.DCExecuteCommand("Lineheight", false, lineSpacing.value);
    if (lineSpacingPopover.value) {
      lineSpacingPopover.value.hide(); // 关闭弹出框
    }
    //更新段落样式
    var CurrentParagraphStyle = store.ctl.GetCurrentParagraphStyle();
    let CurrentParagraphAlign = store.ctl.CurrentParagraphAlign; //段落对齐方式
    store.changeCurrentParagraphStyle({
      ...CurrentParagraphStyle,
      CurrentParagraphAlign,
    });
  }
};

//数字样式切换
const BulletStyleListPopover = ref(null); // 定义ref
const NumberStyleListPopover = ref(null); // 定义ref
const changeNumberStyle = (type) => {
  if (store.ctl) {
    store.ctl.SetCurrentParagraphStyle({
      ParagraphListStyle: type.title,
    });

    store.changeCurrentParagraphStyle({
      ...store.CurrentParagraphStyle,
      ParagraphListStyle: type.title,
    });
    if (BulletStyleListPopover.value) {
      BulletStyleListPopover.value.hide(); // 关闭弹出框
    }
    if (NumberStyleListPopover.value) {
      NumberStyleListPopover.value.hide(); // 关闭弹出框
    }
  }
};

//表单模式
const FormViewModePopover = ref(null); // 定义ref
const formViewMode = ref("Disable");
const changeFormViewMode = (type) => {
  if (store.ctl) {
    store.ctl.DCExecuteCommand("FormViewMode", false, type);
    store.changeCurrentParagraphStyle({
      ...store.CurrentParagraphStyle,
      FormViewMode: type,
    });
    if (FormViewModePopover.value) {
      FormViewModePopover.value.hide(); // 关闭弹出框
    }
  }
};

//打印
const handlePrintPreview = () => {
  if (store.ctl) {
    store.ctl.PrintDocument({
      CompletedCallback: function () {
        console.log("打印成功");
      },
    });
  }
};
// 引入语言
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const paperOptions = [
  { value: "A3", label: "A3", datawidth: 29.7, dataheight: 42 },
  { value: "A4", label: "A4", datawidth: 21, dataheight: 29.7 },
  { value: "A5", label: "A5", datawidth: 14.8, dataheight: 21 },
  { value: "B4", label: "B4", datawidth: 25.7, dataheight: 36.4 },
  { value: "B5", label: "B5", datawidth: 18.2, dataheight: 25.7 },
  {
    value: "Custom",
    label: "Custom",
    datawidth: 210,
    dataheight: 297,
  }, // 将字符串改为数字
];

//工具条滚动
const toolbar = ref(null);
const toggleToolbarMenu = (type) => {
  if (toolbar.value) {
    // 使用 requestAnimationFrame 来确保在下一帧中应用滚动变化
    requestAnimationFrame(() => {
      if (type === "left") {
        toolbar.value.scrollLeft -= 300;
      } else if (type === "right") {
        toolbar.value.scrollLeft += 300;
      }
    });
  }
};

//插入表格
const insertTableButton = ref(null);
const insertTableChoose = ref(null);
const isInsertTableChoose = ref(false);
const chooseTablePosition = ref({
  top: 0,
  left: 0,
});
const chooseTableCellRowCol = ref({
  row: 1,
  col: 1,
});

//鼠标移入事件
const handleMouseOver = () => {
  isInsertTableChoose.value = true;
  // 获取当前元素对于页面的位置，把值给到弹出框的位置
  const { top, left, width } = insertTableButton.value.getBoundingClientRect();
  chooseTablePosition.value = {
    top: top + 5,
    left: left + width + 5,
  };
};

//鼠标移出事件
const handleMouseOut = () => {
  isInsertTableChoose.value = false;
};
//光标离开弹出框事件
const handleInsertTableChooseLeave = () => {
  isInsertTableChoose.value = false;
};

//光标进入弹框事件
const handleInsertTableChooseOver = () => {
  isInsertTableChoose.value = true;
};

//光标点击弹框事件
const handleInsertTableChooseClick = (row, col) => {
  if (store.ctl) {
    store.ctl.DCExecuteCommand("InsertTable", false, {
      TableID: "table1",
      RowCount: row,
      ColumnCount: col,
    });
    isInsertTableChoose.value = false;
  }
};

//单元格滑动事件
const handleCellMouseOver = (row, col) => {
  chooseTableCellRowCol.value = {
    row: row,
    col: col,
  };
};
//单元格滑动事件
const handleCellMouseOut = () => {
  chooseTableCellRowCol.value = {
    row: 1,
    col: 1,
  };
};
//选中单元格时需要增加的样式
const getCellActiveClass = (row, col) => {
  if (
    row <= chooseTableCellRowCol.value.row &&
    col <= chooseTableCellRowCol.value.col
  ) {
    return "active";
  }
  return "";
};

//插入特殊字符
const insertSpecialChar = () => {
  if (store.ctl) {
    store.ctl.DCExecuteCommand("InsertSpecifyCharacter", true, {});
  }
};

//插入图片
const insertImg = () => {
  if (store.ctl) {
    store.ctl.DCExecuteCommand("InsertImage", true);
  }
};
//插入视频
const insertVideo = () => {
  console.log("插入视频");
  if (store.ctl) {
    console.log("插入视频");

    store.ctl.DCExecuteCommand("insertmediaelement", false, {
      Width: "1871",
      Height: "1000",
      PrintVisibility: "none",
      FileName:
        "http://www.dcsoftcn.com/video/6de0c4c207d6d9fecaf8e6f92bd1b018.mp4",
    });
  }
};

//#region 打开公用弹窗
let isShowDialog = ref(false);
const insertPopover = ref(null);
const dcCurrencyDialogRef = ref(null);
const openEditDialog = (typeName, filedType) => {
  if (dcCurrencyDialogRef.value) {
    dcCurrencyDialogRef.value.showDialog(typeName, {
      type: "add",
      filedType: filedType,
    });
  }
  if (insertPopover.value) {
    insertPopover.value.hide(); // 关闭弹出框
  }
};

//#endregion

const dc_insertMedicalexpression = () => {
  let option = {
    label: "病变下牙",
    ID: "expression14",
    ExpressionStyle: "DiseasedTeethBotton",
    Values: "Value1:1;Value2:2;Value3:2;",
    ValuesCount: 3,
    AutoSize: true,
  };
  store.ctl.DCExecuteCommand("insertmedicalexpression", false, option);
};
</script>
<style>
.dc-demo-header-container {
  width: 100%;
  height: auto;
  color: var(--text-color);
  font-size: 14px;
}

.dc-demo-header-container-box {
  display: flex;
  align-items: center;
  width: calc(100% - 40px);
  background: var(--tools-bar-bg);
  margin: 10px auto;
  border-radius: 5px;
  box-shadow:
    rgba(13, 13, 13, 0.06) 0px 0px 0px 1px,
    rgba(13, 13, 13, 0.1) 0px 1px 4px;
  justify-content: center;
  position: relative;
}

.dc-demo-header-toolbar {
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  justify-content: space-between;
  overflow-x: auto;
  scroll-behavior: smooth;
  /* 添加滚动行为 */
  transition: scroll-left 0.3s ease-out;
  /* 明确指定过渡属性 */
}

.dc-demo-header-toolbar::-webkit-scrollbar {
  display: none;
}

.dc-demo-header-tools-line {
  margin: 0 4px;
  display: inline-block;
  width: 1px;
  height: 16px;
  background-color: #e2e6ed;
}

.dc-demo-header-tools-wrap {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.dc-demo-header-tools-item {
  cursor: pointer;
  padding: 5px;
  box-sizing: border-box;
  margin: 0 2px;
}

.dc-demo-header-tools-item:hover {
  background: var(--tools-bar-hover);
  border-radius: 5px;
}

.dc-demo-header-tools-item.active {
  background: var(--tools-bar-hover);
  border-radius: 5px;
}

.icon-dakaiwenjianjia,
.icon-shangbiao,
.icon-beijingyanse,
.icon-wenziyanse,
.icon-qingchugeshishua,
.icon-a-zuosuojin3x,
.icon-a-yousuojin3x,
.icon-duiqi i.iconfont {
  font-size: 18px;
}

.icon-duiqi i.iconfont.icon-hangjianju1 {
  font-size: 16px;
}

.dc-demo-header-tools-page-item {
  display: flex;
  flex-direction: column;
}

span.page-name {
  font-size: 14px;
}

span.page-size {
  font-size: 12px;
  margin-top: 2px;
  color: #909399;
}

label.el-radio {
  height: 54px;
}

.paper-custom {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: -10px;
  padding-left: 18px;
  box-sizing: border-box;
  flex-direction: column;
}

.paper-custom-item {
  margin-bottom: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
}

.paper-custom-item .el-input.el-input--small {
  flex: 1;
}

.dc-demo-header-tools-page-margin {
  display: flex;
  flex-direction: column;
}

.dc-demo-header-tools-page-margin-item {
  display: flex;
  align-items: center;
  height: 38px;
}

.dc-demo-header-tools-page-margin-item .el-input.el-input--small {
  /* flex: 1; */
  width: 60px;
}

.dc-demo-header-tools-footer {
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  margin-top: 10px;
}

.dc-demo-header-tools-footer .el-button {
  font-size: 12px;
}

.dc-demo-header-tools-insert-item {
  height: 38px;
  cursor: pointer;
  border-radius: 5px;
  line-height: 38px;
  display: flex;
  align-items: center;
}

.dc-demo-header-tools-insert-item:hover {
  background: var(--tools-bar-hover);
}

.dc-demo-header-tools-insert-item .iconfont {
  margin-right: 5px;
  font-size: 20px;
}

.el-select--small .el-select__selection {
  height: 20px !important;
}

.dc-demo-header-tools-line-spacing {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.dc-demo-header-tools-line-spacing .el-radio {
  height: 34px;
}

.dc-demo-header-tools-number-style-item {
  height: 34px;
  line-height: 34px;
  cursor: pointer;
  padding: 0 5px;
  border-radius: 4px;
}

.dc-demo-header-tools-number-style-item.active,
.dc-demo-header-tools-number-style-item:hover {
  color: #409eff;
  background: var(--tools-bar-hover);
}

.dc-demo-header-tools-left,
.dc-demo-header-tools-right {
  width: 30px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  background: var(--tools-bar-bg);
  cursor: pointer;
  user-select: none;
  position: absolute;
  top: 0;
  z-index: 999;
  display: none;
}

.dc-demo-header-tools-left:hover,
.dc-demo-header-tools-right:hover {
  background: #f3f5f7;
}

.dc-demo-header-tools-left:hover i,
.dc-demo-header-tools-right:hover i {
  color: #409eff;
}

.dc-demo-header-tools-left {
  border-right: 1px solid var(--bg3);
  box-shadow: 0px 1px 4px rgba(13, 13, 13, 0.1);
  left: 0;
}

.dc-demo-header-tools-right {
  border-left: 1px solid var(--bg3);
  box-shadow: 0px 1px 4px rgba(13, 13, 13, 0.1);
  right: 0;
}

.dc-demo-header-tools-insert-table {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dc-demo-header-tools-insert-table-choose {
  width: 210px;
  height: 210px;
  padding: 5px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;
  background: var(--tools-bar-bg);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}
.dc-demo-header-tools-insert-table-choose .table-row {
  width: 100%;
  height: 20px;
  display: flex;
  cursor: pointer;
  user-select: none;
}
.dc-demo-header-tools-insert-table-choose .table-row div {
  width: 20px;
  height: 20px;
  border: 1px solid #e2e6ed;
}
.dc-demo-header-tools-insert-table-choose .table-row div.active,
.dc-demo-header-tools-insert-table-choose .table-row div:hover {
  background: #f3f5f7;
}

@media (min-width: 1370px) and (max-width: 1700px) {
  .dc-demo-header-tools-item-text {
    display: none;
  }
}

@media (min-width: 0) and (max-width: 1370px) {
  .dc-demo-header-tools-item-text {
    display: none;
  }

  .dc-demo-header-toolbar {
    padding: 0 40px;
  }

  .dc-demo-header-tools-left,
  .dc-demo-header-tools-right {
    display: block;
  }
}
</style>
