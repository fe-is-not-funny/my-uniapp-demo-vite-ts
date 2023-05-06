<!--
 * @Date: 2023-03-20 15:48:19
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-06 12:55:32
 * @FilePath: /my-uniapp-demo-vite-ts/src/App.vue
-->
<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
  // uni.hideTabBar()

});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
