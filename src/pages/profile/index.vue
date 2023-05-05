<!--
 * @Date: 2023-04-27 15:20:34
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-05 23:12:13
 * @FilePath: /my-uniapp-demo-vite-ts/src/pages/profile/index.vue
-->
<template>
  <view>
    profile index
    <view>
      {{ title }} </view>
    <NickName
      nickname="acbc"
    />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import NickName from './components/nickname.vue';

const title = ref('Profile');

</script>