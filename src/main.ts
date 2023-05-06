/*
 * @Date: 2023-03-20 15:48:19
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-06 11:41:50
 * @FilePath: /my-uniapp-demo-vite-ts/src/main.ts
 */
import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';

export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia());
  return {
    app,
    Pinia, // 此处必须将 Pinia 返回
  };
}
