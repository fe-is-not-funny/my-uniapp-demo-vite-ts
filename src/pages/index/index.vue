<!--
 * @Date: 2023-03-20 15:48:19
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-06 12:13:58
 * @FilePath: /my-uniapp-demo-vite-ts/src/pages/index/index.vue
-->
<template>
  <view class="content">
    <view class="header"
      :style="{
        height: `${capsuleButtonBottom}px`,
        backgroundColor: 'green',
        width: '100%',
        // paddingBottom: '10px'
      }"
    >
      <text class="title">
        班主任能力提升
      </text>
  </view>
    <SearchBar />
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


const title = ref('Hello')

console.log(getCapsuleButtonInfo())

const capsuleButtonBottom = computed(() => {
  return getCapsuleButtonInfo().height + getCapsuleButtonInfo().top + 10
})

</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.title {
  color: #fff;
  font-size: 20px;
  margin-bottom: 10px;
}

</style>
