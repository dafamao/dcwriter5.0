<script setup>
import { ref, computed, onMounted } from 'vue'
import { journalData } from '@/assets/js/journal'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// import required modules
import { Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules';

defineOptions({
    name: 'quickIntegrationGuide',
})
onMounted(() => {

})
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
let modules = ref([FreeMode, Navigation, Thumbs, Pagination]);
let requireImg = (index) => {
    return new URL(`/src/assets/img/initPPT/都昌产品演示2024_${index + 1}.png`, import.meta.url).href;
}
</script>
<template>
    <div style="overflow-y: auto;height: 100%;padding: 5px;display: flex;align-items: center;
    justify-content: center;flex-direction: column;">
        <div style="max-width: 1100px;height: 100%">
            <swiper :style="{
                // '--swiper-navigation-color': '#fff',
                // '--swiper-pagination-color': '#fff',
            }" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
                class="mySwiper2">
                <swiper-slide v-for="i in 47">
                    <img :src="requireImg(i)" width="100%" height="auto" />
                </swiper-slide>

            </swiper>


        </div>
        <swiper @swiper="setThumbsSwiper" :spaceBetween="15" :slidesPerView="6" :freeMode="true"
            :watchSlidesProgress="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="i in 47">
                <img :src="requireImg(i)" />
            </swiper-slide>
        </swiper>

    </div>

</template>
<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
}

body {
    background: #000;
    color: #000;
}

.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

.mySwiper2 {
    height: 100%;
    width: 100%;
}

.mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}
</style>
