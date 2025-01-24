<script setup>
import { ref, computed, onMounted } from 'vue'
defineOptions({
    name: 'dcInfo',
})
</script>
<template>
    <div style="width: 470px;text-align:center">
        <div class="info-box" style="width: 400px;">
            <div><img style="width: 100px;" src="@/assets/img/DC-Logo2.png" alt="" /> </div>
            <div>
                <h4>{{ $t('DcWriterSetting.ProductName') }}</h4>
            </div>
            <div>
                <span class="info-label">{{ $t('DcWriterSetting.Version') }}：</span>
                
                <span class="info-content">DCWriter5.0(2024-48w)</span>
            </div>
            <div>
                <span class="info-label">
                    {{ $t('DcWriterSetting.Releases') }}：
                </span>
                <span class="info-content">2024-11-30 11:24:36</span>
            </div>
            <div>
                <span class="info-label">{{ $t('DcWriterSetting.Contact') }}：</span>
                <span class="info-content">{{ $t('DcWriterSetting.ContactContent') }}</span>
            </div>
            <div>
                <span  class="info-label">{{ $t('DcWriterSetting.CompanyName') }}：</span>
                <span class="info-content">{{ $t('DcWriterSetting.CompanyNameContent') }}</span>
            </div>
            
            <div>
                <span class="info-label">{{ $t('DcWriterSetting.Explain') }}：</span>
                <span class="info-content">{{ $t('DcWriterSetting.ExplainContent') }}</span>
            </div>
        </div>

    </div>
</template>

<style scoped>
.info-box{
    width: 400px;
    line-height: 28px;
    .info-label{
        font-size: 12px;
        font-weight: 600;
    }
}
.info-content{
    font-size: 12px;
}
</style>
