<!--
 * @Date: 2023-03-20 15:48:19
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-05 23:22:47
 * @FilePath: /my-uniapp-demo-vite-ts/src/pages/index/index.vue
-->
<!--
 * @Date: 2023-03-20 15:48:19
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-05 23:18:37
 * @FilePath: /my-uniapp-demo-vite-ts/src/pages/index/index.vue
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <SearchBar />
    <IndexSwiper />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue';
import IndexSwiper from './components/IndexSwiper.vue';
const title = ref('Hello')
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
