<!--
 * @Date: 2023-05-05 23:16:32
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-05 23:37:56
 * @FilePath: /my-uniapp-demo-vite-ts/src/pages/index/components/IndexSwiper.vue
-->

<template class="container">
  <swiper autoplay="true" indicator-dots="true">
    <swiper-item v-for="(item, index) in swiperList" :key="index">
      <image :src="item.imgUrl" />
    </swiper-item>
  </swiper>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const swiperList = ref([
  {
    title: 'xxxx',
    imgUrl: 'https://img.yzcdn.cn/vant/apple-1.jpg',
  },
  {
    title: 'xxxx',
    imgUrl: 'https://img.yzcdn.cn/vant/apple-2.jpg',
  },
  {
    title: 'xxxx',
    imgUrl: 'https://img.yzcdn.cn/vant/apple-3.jpg',
  },
]);
</script>
<style scoped>
.container {
  width: 750rpx;
}

swiper {
  height: 300rpx;
  width: 750rpx;
}
swiper-item {
  height: 300rpx;
  width: 100%;
}
</style>
