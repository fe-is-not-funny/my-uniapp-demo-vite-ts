<!--
 * @Date: 2023-04-27 15:20:34
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-04-27 15:22:03
 * @FilePath: \my-uniapp-demo-vite-ts\src\pages\profile\index.vue
-->
<template>
  <view>
    profile index
    <view>
      {{ title }} </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref('Profile');

</script>