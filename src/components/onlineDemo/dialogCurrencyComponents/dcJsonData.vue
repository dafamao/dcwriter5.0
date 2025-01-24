<script setup>
import { ref, computed, onMounted } from 'vue'
defineOptions({
    name: 'dcJsonData',
})
onMounted(() => {
    let ctl = document.getElementById('myWriterControl')
    let fields=ctl.GetAllInputFields()
    // treeData.value = ctl.GetAllInputFields()
    for (let i = 0; i < fields.length; i++) {
        const element = fields[i];
        jsonData.value[fields[i].ID]=fields[i].InnerValue
    }

    // console.log(treeData.value);
})
const treeData = ref([])
const jsonData = ref({})
const defaultProps = {
    children: 'children',
    label: 'ID',
}
const handleNodeClick = (data) => {
    console.log(data)
}
</script>
<template>
    <div style="width: 600px;">
        <div style="overflow-y: auto;height: 450px;width: 550px;">
            <json-viewer :value="jsonData" :expanded="true" copyable boxed sort class="w-100%"></json-viewer>
            <!-- <el-tree style="max-width:400px" :data="treeData" :props="defaultProps" @node-click="handleNodeClick">
                <template #default="{ node, data }">
                    <span class="custom-tree-node">
                        <span style="width: 30%">{{ node.label }}：</span>
                        <el-tooltip class="box-item" effect="dark" :content="data.InnerValue" placement="top">
                            <span style="width: 65%">
                                {{ data.InnerValue }}
                            </span>
                        </el-tooltip>
                    </span>
                </template>
            </el-tree> -->
        </div>

    </div>
</template>

<style scoped>
.info-box {
    width: 400px;
    line-height: 28px;

    .info-label {
        font-weight: 600;
    }
}

.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}
:deep(.jv-string){
    color:#218abb !important
}
</style>
