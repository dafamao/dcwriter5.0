<script setup>
import { ref, reactive, computed, onMounted, onBeforeMount, defineProps, defineEmits, watch } from 'vue'
defineOptions({
    name: 'dcTextInput',
})
import { ElMessage } from 'element-plus'
import i18n from '@/language';
const { t } = i18n.global;
const props = defineProps({
    options: {
        type: Object,
        default: {},
    }
});
const emit = defineEmits(['closeParentDialog']);
const InnerEditStyleOptions = ref([
    { text: 'DcEditStyle.Text', value: 'Text' },
    { text: 'DcEditStyle.DropdownList', value: 'DropdownList' },
    { text: 'DcEditStyle.Date', value: 'Date' },
    { text: 'DcEditStyle.DateTime', value: 'DateTime' },
    { text: 'DcEditStyle.DateTimeWithoutSecond', value: 'DateTimeWithoutSecond' },
    { text: 'DcEditStyle.Time', value: 'Time' },
    { text: 'DcEditStyle.Numeric', value: 'Numeric' },
])
//编号、名称、背景文字、左边框、右边框、只读、必填、类型（文本、下拉、数字\日期、时间、日期时间、日期时间(不含秒)）、下拉内容<文本、值>（注意事项、默认双击激活）
const form = ref({
    ID: '',//编号
    Name: '',//名称
    BackgroundText: '',//背景文字
    ToolTip: '',//提示信息
    StartBorderText: '',//左边框
    EndBorderText: '',//右边框
    ContentReadonly: 'false',//只读
    Required: 'true',//必填
    InnerEditStyle: '',//类型
    SelectValueType: ''//下拉内容
})

const formRef = ref('')

const rules = reactive({
    ID: [
        {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
        },
    ],
    Name: [
        {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
        },
    ],
    BackgroundText: [
        {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
        },
    ],
})
const dc_addTableData = () => {
    form.value.ListItems.push({
        Value: '',
        Text: '',
    })
}
const dc_deleteRowData = (row, rowIndex) => {
    form.value.ListItems.splice(rowIndex, 1)
}

const dc_initData = () => {
    let ctl = document.getElementById('myWriterControl')
    if (Object.keys(props.options)) {
        let type = props.options.hasOwnProperty('type') ? props.options.type : 'add'
        let filedType = props.options.hasOwnProperty('filedType') ? props.options.filedType : 'Text'
        form.value = {
            ID: '',//编号
            Name: '',//名称
            BackgroundText: '',//背景文字
            ToolTip: '',//提示信息
            StartBorderText: '',//左边框
            EndBorderText: '',//右边框
            ContentReadonly: 'false',//只读
            Required: 'true',//必填
            InnerEditStyle: filedType,//类型
            SelectValueType: '',//下拉内容
            ListItems: []
        }
        if (type == 'edit') {
            let chooseElement = ctl.CurrentInputField()
            if (chooseElement) {
                let Props = ctl.GetElementProperties(chooseElement);
                console.log(Props);
                for (const key in Props) {
                    if (Props.hasOwnProperty(key)) {
                        if (Props[key]) {
                            form.value[key] = Props[key]
                        }

                    }
                }
            }
        }

    }
}
const dc_SaveFuncToParent = () => {
    formRef.value.validate((valid) => {
        if (valid) {
            let ctl = document.getElementById('myWriterControl')
            let type = props.options.hasOwnProperty('type') ? props.options.type : 'add';
            if (type == 'edit') {
                let chooseElement = ctl.CurrentInputField();
                ctl.SetElementProperties(chooseElement, form.value);
            } else {
                let hasEle=ctl.GetElementById(form.value.ID)
                if (hasEle) {
                    ElMessage.error(t('DcMessageTips.HasSameElement'))
                    return
                }
                ctl.DCExecuteCommand("InsertInputField", false, form.value);
            }
            emit('closeParentDialog')
        } else {
            console.log('error submit!')
        }
    })
}

watch(
    () => props.options, // 监听的属性
    (nVal, oVal) => {
        dc_initData();
    },
    { immediate: true }
)
defineExpose({ dc_SaveFuncToParent })
</script>
<template>
    <div style="width: 500px">
        <el-form :model="form" label-width="auto" style="width: 450px" label-position="right" :rules="rules"
            ref="formRef">
            <el-row>
                <el-col :span="12">
                    <el-form-item prop="ID" :label="$t('DcElementProps.ID') + ':'">
                        <el-input v-model="form.ID" style="background-color: --el-tag-bg-color;" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item prop="Name" :label="$t('DcElementProps.Name') + ':'">
                        <el-input v-model="form.Name" />
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item prop="BackgroundText" :label="$t('DcElementProps.BackgroundText') + ':'">
                        <el-input v-model="form.BackgroundText" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item :label="$t('DcElementProps.ToolTip') + ':'">
                        <el-input v-model="form.ToolTip" />
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item :label="$t('DcElementProps.StartBorderText') + ':'">
                        <el-input v-model="form.StartBorderText" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item :label="$t('DcElementProps.EndBorderText') + ':'">
                        <el-input v-model="form.EndBorderText" />
                    </el-form-item>
                </el-col>

            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item :label="$t('DcElementProps.ContentReadonly') + ':'">
                        <el-switch v-model="form.ContentReadonly" active-value="true" inactive-value="false" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item :label="$t('DcElementProps.Required') + ':'">
                        <el-switch v-model="form.Required" active-value="true" inactive-value="false" />
                    </el-form-item>
                </el-col>

            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item :label="$t('DcElementProps.InnerEditStyle') + ':'">
                        <el-select v-model="form.InnerEditStyle" placeholder="请选择" @change="$forceUpdate()"
                            :popper-append-to-body="false">
                            <el-option v-for="item in InnerEditStyleOptions" :label="$t(item.text)"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>
                </el-col>

                <!-- <el-col :span="12">
                    <el-form-item :label="$t('DcElementProps.SelectValueType') + ':'">
                        <el-select v-model="form.SelectValueType">
                            <el-option label="文本" value="text" />
                            <el-option label="值" value="value" />
                        </el-select>
                    </el-form-item>
                </el-col> -->
            </el-row>
        </el-form>
        <div v-if="form.InnerEditStyle == 'DropdownList'">
            <div style="margin-bottom: 5px;">
                <span style="font-weight: 600; font-size: 15px;color: #000000b8;">
                    {{ $t('DcElementProps.SelectValueType') }}
                </span>
            </div>

            <el-table :data="form.ListItems" border style="width: 450px" height="200">
                <el-table-column prop="Value" :label="$t('DcWriterSetting.CheckBoxOrRadioTableValueCol')">
                    <template #default="scope">
                        <el-input v-model="scope.row.Value">

                        </el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="Text" :label="$t('DcWriterSetting.CheckBoxOrRadioTableTextCol')">
                    <template #default="scope">
                        <el-input v-model="scope.row.Text">

                        </el-input>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="" width="120">
                    <template #header>
                        <el-button link type="primary" @click="dc_addTableData">
                            {{ $t('DcWriterSetting.AddData') }}
                        </el-button>
                    </template>
                    <template #default="scope">
                        <el-button link type="danger" size="small" @click="dc_deleteRowData(scope.row, scope.$index)">
                            {{ $t('DcWriterSetting.Delete') }}
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>

</template>

<style scoped>
.el-form-item {
    margin-right: 5px;
}
</style>
