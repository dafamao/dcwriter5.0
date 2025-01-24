<script setup>
import dcCheckBox from './dialogCurrencyComponents/dcCheckBox.vue';
import dcTextInput from './dialogCurrencyComponents/dcTextInput.vue';
import dcInfo from './dialogCurrencyComponents/dcInfo.vue';
import dcJsonData from './dialogCurrencyComponents/dcJsonData.vue';
import { defineProps, ref, nextTick } from 'vue'
defineOptions({
  name: 'dcCurrencyDialog',
  components:{
    dcCheckBox,
    dcTextInput,
    dcInfo,
    dcJsonData
  }
})

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
    required: true
  }
});
let dialogVisible = ref(false)

{/* watch(()=>props.isVisible, (nVal,oVal) => {
  dialogVisible.value=nVal
}) */}

let dialogWidth = ref(500)
let title = ref('')
let currentComponent = ref('dcTextInput')
let dynamicComponent=ref(null)
let childOptions=ref({})
const showDialog = (typeName,options) => {
  if (typeName) {
    switch (typeName) {
      case 'dcTextInput':
      title.value='DcWriterSetting.InputFieldSetting'
        break;
      case 'dcCheckBox':
      title.value='DcWriterSetting.CheckBoxOrRadioSetting'
        break;
      case 'dcInfo':
      title.value='DcWriterSetting.AboutInfo'
        break;
      case 'dcJsonData':
      title.value='DcWriterSetting.JsonDataShow'
        break;
      default:
        break;
    }
    childOptions.value={}
    if (options) {
      childOptions.value=options
    }
    dialogVisible.value = true
    currentComponent.value=typeName
    nextTick(() => {
        dialogWidth.value=dynamicComponent.value.$el.style.width
    });
  }
};
const dc_confirmDialog=()=>{
  if (dynamicComponent.value.dc_SaveFuncToParent) {
    dynamicComponent.value.dc_SaveFuncToParent()
  }else{
    dialogVisible.value = false
  }
  
  
}

const dc_closeParentDialog=()=>{
  dialogVisible.value=false
}
defineExpose({ showDialog })


</script>

<template>
  <el-dialog v-model="dialogVisible" :title="$t(title)" :width="dialogWidth" @close="dialogVisible = false" class='dc_dialog-box' :close-on-press-escape="false" :close-on-click-modal="false">
    <template #header>
      <span style="font-weight: 600;
    font-size: 16px;">{{ $t(title) }}</span>
    </template>
    <div class="dc_dialog_wrapper">
      <component ref="dynamicComponent" :is="currentComponent" :options="childOptions" @closeParentDialog="dc_closeParentDialog"></component>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">{{$t('DcWriterSetting.Cancel')}}</el-button>
        <el-button type="primary" @click="dc_confirmDialog">
          {{$t('DcWriterSetting.Comfirm')}}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style>
.dc_dialog-box {
  border-radius: 10px;
  padding: 24px;

  .dc_dialog_wrapper {
    margin: 0;
    padding: 0;
  }

  .el-dialog__body {
    height: auto;
    max-height: 500px;
  }
  /* .el-select__selection{
    height: 22px;
  } */
}
</style>
