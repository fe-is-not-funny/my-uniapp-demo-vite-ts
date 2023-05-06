/*
 * @Date: 2023-05-06 11:41:26
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-06 11:44:18
 * @FilePath: /my-uniapp-demo-vite-ts/src/store/user.ts
 */
import { defineStore } from 'pinia';

export const userStore = defineStore('user', {
  state: () => ({
    name: 'vben',
    isLogin: false,
  }),
  getters: {
    getLoginState(): boolean {
      return this.isLogin;
    }
  },
  actions: {
    login() {
      this.isLogin = true;
    }
  }
});