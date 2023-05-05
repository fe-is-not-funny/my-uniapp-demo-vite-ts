<!--
 * @Date: 2023-05-05 23:11:11
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-05 23:11:57
 * @FilePath: /my-uniapp-demo-vite-ts/src/pages/profile/components/nickname.vue
-->
<template>
  <view>
    <text>nickname: {{ nickname }}</text>
  </view>
</template>
<script setup lang="ts">
/* __vue_virtual_code_placeholder__ */
import type { PropType } from 'vue';
const props = defineProps({
  nickname: {
    type: String as PropType<string>,
    default: 'default nickname',
  },
});

</script>