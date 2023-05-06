/*
 * @Date: 2023-05-06 12:50:35
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-06 12:56:27
 * @FilePath: /my-uniapp-demo-vite-ts/src/store/custom-tab-bar.ts
 */
import { defineStore } from "pinia";

export const useCustomTabBarStore = defineStore("customTabBar", {
  state: () => ({
    isShow: true,
    current: 0,
    list: [{
      "pagePath": "/pages/index/index",
      "text": "首页",
      "iconPath": "/static/images/home.png",
      "selectedIconPath": "/static/images/home-active.png"
  },
  {
      "pagePath": "/pages/sspx/index",
      "text": "赛事培训",
      "iconPath": "/static/images/sspx.png",
      "selectedIconPath": "/static/images/sspx-active.png"
  },
  {
      "pagePath": "/pages/fabu/index",
      "text": "发布",
      "iconPath": "/static/images/fabu.png",
      "selectedIconPath": "/static/images/fabu-active.png"
  },
  {
      "pagePath": "/pages/zl/index",
      "text": "专栏",
      "iconPath": "/static/images/zl.png",
      "selectedIconPath": "/static/images/zl-active.png"
  },
  {
      "pagePath": "/pages/profile/index",
      "text": "我的",
      "iconPath": "/static/images/profile.png",
      "selectedIconPath": "/static/images/profile-active.png"
  }
]
  }),
  getters: {
    getIsShow(): boolean {
      return this.isShow;
    },
    getCurrent(): number {
      return this.current;
    },
    getList(): any[] {
      return this.list;
    }
  },
  actions: {
    setIsShow(isShow: boolean) {
      this.isShow = isShow;
    },
    setCurrent(current: number) {
      this.current = current;
    },
    setList(list: any[]) {
      this.list = list;
    }
  }
});