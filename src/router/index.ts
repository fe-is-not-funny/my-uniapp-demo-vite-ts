/*
 * @Date: 2023-05-06 11:44:41
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-06 16:10:54
 * @FilePath: /my-uniapp-demo-vite-ts/src/router/index.ts
 */
import { userStore } from "@/store/user";

const user = userStore();


const whiteList = [
  '/pages/index/index',
  '/pages/profile/index'
];

class Router {

  goToSearchPage() {
    uni.navigateTo({
      url: '/pages/search/index'
    })
  }

}

export const router = new Router();