/*
 * @Date: 2023-05-06 11:34:51
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-06 11:37:08
 * @FilePath: /my-uniapp-demo-vite-ts/src/utils/screen.ts
 */
type ScreenSize = {
  width: number;
  height: number;
}

type CapsuleButtonInfo = {
  width: number;
  height: number;
  top: number;
  right: number;
  left: number;
  bottom: number;
}

class getScreenSizeInfo {

  getScreenSize(): ScreenSize {
    let res = uni.getSystemInfoSync();
    let width = res.windowWidth;
    let height = res.windowHeight;
    return { width, height };
  }

  getCapsuleButtonInfo(): CapsuleButtonInfo {
    let res = uni.getMenuButtonBoundingClientRect();
    let width = res.width;
    let height = res.height;
    let top = res.top;
    let right = res.right;
    let left = res.left;
    let bottom = res.bottom;
    return { width, height, top, right, left, bottom };
  }
}