<script setup>
import { ref, computed, onMounted } from 'vue'
import { journalData } from '@/assets/js/journal'
defineOptions({
    name: 'updateLog',
})
onMounted(() => {
    console.log(journalData.length);
    let yearFlag = ''
    for (let i = 0; i < journalData.length; i++) {
        if (journalData[i].year) {
            yearFlag = journalData[i].year
            
        }
        journalData[i].newYear=yearFlag
    }
    timeLienData.value = journalData
})
let timeLienData = ref([])
const activities = [
    {
        content: 'Event start',
        timestamp: '2018-04-15',
    },
    {
        content: 'Approved',
        timestamp: '2018-04-13',
    },
    {
        content: 'Success',
        timestamp: '2018-04-11',
    },
]
</script>
<template>
    <div style="overflow-y: auto;height: 100%;padding: 5px;">
        <el-timeline>
            <el-timeline-item v-for="(activity, index) in timeLienData" :key="index"
                :timestamp="activity.year + '  ' + activity.time" placement="top" :hide-timestamp="true" :size="activity.year?'large':'normal'" :type="activity.year?'primary':'info'" :hollow="activity.year?false:true">
                <el-card>
                    <template #header>
                        <div style="display: flex;">
                            <h3>{{activity.newYear}}</h3>
                            <h4 style="margin-left: 15px;">{{activity.time}}</h4>
                        </div>
                        
                    </template>
                    <pre class="pre-box">{{ activity.pre }}</pre>
                    <!-- <template #footer>{{Footer content}}</template> -->

                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>

</template>
<style scoped>

:deep(.el-card__body){
    padding: 0 20px;
}
:deep(.el-card__header){
    padding: 0 20px;
}
.pre-box{
    font-family:Inter, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial, sans-serif;
    line-height: 28px;font-size: 16px;
}
</style>
