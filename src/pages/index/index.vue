<!--
 * @Date: 2023-03-20 15:48:19
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-06 16:50:33
 * @FilePath: /my-uniapp-demo-vite-ts/src/pages/index/index.vue
-->
<template>
  <view class="content">
    <view class="header"
      :style="{
        height: `${capsuleButtonBottom}px`,
        backgroundColor: `rgba(83, 204, 143, ${headerOpacity})`,
        width: '100%',
      }"
    >
      <text class="title">
        班主任能力提升
      </text>
  </view>
  <view class="header-bg"></view>
    <SearchBar />
    <IndexSwiper />
    <IndexSwiper />

    <IndexSwiper />

    <IndexSwiper />

    <IndexSwiper />

    <IndexSwiper />

    <IndexSwiper />

    <IndexSwiper />

    <IndexSwiper />


  </view>
  <CustomTabBar  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SearchBar from './components/SearchBar.vue';
import IndexSwiper from './components/IndexSwiper.vue';
import CustomTabBar from '@/custom-tab-bar/index.vue';

import { getCapsuleButtonInfo } from '@/utils/screen.js';
import { onPageScroll } from '@dcloudio/uni-app';


const headerOpacity = ref(0)

onPageScroll((e) => {
  const { scrollTop } = e
  if (scrollTop <= 200) {
    headerOpacity.value = scrollTop / 200
  } else {
    headerOpacity.value = 1
  }
})

console.log(getCapsuleButtonInfo())

const capsuleButtonBottom = computed(() => {
  return getCapsuleButtonInfo().height + getCapsuleButtonInfo().top + 10
})

</script>

<style scoped>
Page {
  background-color: #000;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

.header-bg {
  background: linear-gradient(180deg, #53CC8F 0%, #cdeacd 100%);
  width: 100%;
  height: 800rpx;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.title {
  color: #fff;
  font-size: 20px;
  margin-bottom: 10px;
}

</style>
