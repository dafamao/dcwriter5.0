<script setup>
import { ref, reactive, computed, watch, defineProps, defineEmits } from 'vue'
defineOptions({
    name: 'dcCheckBox',
})
const props = defineProps({
    options: {
        type: Object,
        default: {},
    }
});
const emit = defineEmits(['closeParentDialog']);
//组名（名称）、类型<单选、复选>、列表(文本、值)。
const form = ref({
    Name: '',//名称
    Type: 'radio',//类型<单选、复选>
    ListItems: []
})
const formRef = ref('')
const editType = ref('add')
const rules = reactive({
    Name: [
        {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
        },
    ],
    Type: [
        {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
        },
    ]
})
const dc_addTableData = () => {
    form.value.ListItems.push({
        Value: '',
        Text: '',
        ID:''
    })
}
const dc_deleteRowData = (row, rowIndex) => {
    form.value.ListItems.splice(rowIndex, 1)
}

const dc_initData = () => {
    let ctl = document.getElementById('myWriterControl')
    if (Object.keys(props.options)) {
        let type = props.options.hasOwnProperty('type') ? props.options.type : 'add'
        editType.value=type
        form.value = {
            Name: '',//名称
            Type: 'XTextRadioBoxElement',//类型<单选、复选>
            ListItems: []
        }
        if (type == 'edit') {
            let chooseElement = ctl.CurrentElement()
            if (chooseElement) {
                let Props = ctl.GetElementProperties(chooseElement);
                console.log(Props);
                form.value.Name=Props.Name
                form.value.Type=Props.TypeName=="XTextRadioBoxElement"?'radio':'checkbox'
                let listItems = ctl.GetAllCheckboxOrRadio(Props.TypeName == "XTextRadioBoxElement" ? 'radio' : 'checkbox', Props.Name);
                form.value.ListItems = listItems
            }
        }

    }
}
const dc_SaveFuncToParent = () => {

    formRef.value.validate((valid) => {
        if (valid) {
            let ctl = document.getElementById('myWriterControl')
            let options = JSON.parse(JSON.stringify(form.value))
            if (editType.value == 'edit') {
                let chooseElement = ctl.CurrentElement();
                let Props = ctl.GetElementProperties(chooseElement);
                let listItems = ctl.GetAllCheckboxOrRadio(Props.TypeName == "XTextRadioBoxElement" ? 'radio' : 'checkbox', Props.Name);
                console.log(listItems);
                for (let i = 0; i < listItems.length; i++) {
                    const element = listItems[i];
                    ctl.DeleteElement(element.ID);
                }
                for (let i = 0; i < form.value.ListItems.length; i++) {
                    options.ListItems[i].ID=options.Name+'_'+i
                }
                ctl.DCExecuteCommand(
                    'InsertCheckBoxOrRadio',
                    false,
                    options
                );
            } else {
                for (let i = 0; i < options.ListItems.length; i++) {
                    options.ListItems[i].ID=options.Name+'_'+i
                }
                ctl.DCExecuteCommand(
                    'InsertCheckBoxOrRadio',
                    false,
                    options
                );
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
        <el-form :model="form" label-width="auto" label-position="left" style="width: 470px" :rules="rules"
            ref="formRef">
            <el-row>
                <el-col :span="11">
                    <el-form-item  prop="Name" :label="$t('DcElementProps.GroupName') + ':'">
                        <el-input v-model="form.Name" :disabled="editType!='add'"/>
                    </el-form-item>
                </el-col>
                <el-col :span="13">
                    <el-form-item prop="Type" class="item-label" :label="$t('DcElementProps.Type') + ':'">
                        <el-radio-group v-model="form.Type">
                            <el-radio value="radio">{{ $t('DcWriterSetting.Radio') }}</el-radio>
                            <el-radio value="checkbox">{{ $t('DcWriterSetting.CheckBox') }}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div>
            <div style="margin-bottom: 5px;">
                <span style="font-weight: 600; font-size: 15px;color: #000000b8;">
                    {{ $t('DcWriterSetting.CheckBoxOrRadioTableTitle') }}
                </span>
            </div>

            <el-table :data="form.ListItems" border style="width: 450px" height="300" >
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

<style scoped lang="scss">
.el-form-item {
    margin-right: 5px;
}

.item-label {
    :deep(.el-form-item__label-wrap) {
        margin-right: 10px !important;
    }
}

label.el-radio {
    height: 32px;
    margin-right:10px
}
</style>
