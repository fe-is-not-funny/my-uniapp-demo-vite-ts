<!--
 * @Date: 2023-05-05 23:21:38
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-06 16:49:11
 * @FilePath: /my-uniapp-demo-vite-ts/src/pages/index/components/SearchBar.vue
-->
<template >
  <view class="container"
    @click="handleTouchStart"
  >
    <input
      type="text"
      placeholder="教师/培训/成果/经验分享"
      class="search-input"
      disabled
    />
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import { router } from '@/router';

const handleTouchStart = (e: any) => {
  router.goToSearchPage();
};


</script>
<style scoped>
.container {
  width: 690rpx;
  height: 40px;
  background-color: transparent;
  margin-top: 120px;
  border-radius: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.search-input {
  width: 100%;
  padding-left: 30rpx;
}
</style>