/*
 * @Date: 2023-05-06 11:44:41
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-06 11:53:51
 * @FilePath: /my-uniapp-demo-vite-ts/src/router/index.ts
 */
import { userStore } from "@/store/user";

const user = userStore();


const whiteList = [
  '/pages/index/index',
  '/pages/profile/index'
];

// create a class which includes router define for uniapp
// add an interceptor to check login status
// if not login, redirect to profile page

class Router {
  beforeEach(to: any, from: any, next: any) {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      if (user.isLogin) {
        next();
      } else {
        uni.showToast({
          title: '请先登录',
          icon: 'none'
        });
        // uni.redirectTo({
        //   url: '/pages/profile/index'
        // });
      }
    }
  }

  // goToFabu, check login status, if not login, redirect to profile page
  goToFabu() {
    if (user.isLogin) {
      uni.navigateTo({
        url: '/pages/fabu/index'
      });
    } else {
      uni.showToast({
        title: '请先登录',
        icon: 'none'
      });
      // uni.redirectTo({
      //   url: '/pages/profile/index'
      // });
    }
  }
}