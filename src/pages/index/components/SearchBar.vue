<template>
  <view class="container">
    <input
      type="text"
      placeholder="请输入搜索内容"
      class="search-input"
      @input="handleInput"
    />
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const searchValue = ref('');
const handleInput = (e: any) => {
  searchValue.value = e.target.value;
};
</script>
<style scoped>
.container {
  width: 750rpx;
  height: 200rpx;
  background-color: aqua;
}
</style>