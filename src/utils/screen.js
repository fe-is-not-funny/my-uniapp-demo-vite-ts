//
// Date: 2023-05-06 00:01:11
// LastEditors: ibegyourpardon
// LastEditTime: 2023-05-06 00:03:22
// FilePath: /my-uniapp-demo-vite-ts/src/utils/screen.js
//
// create a function to get miniprogram screen width and height

export function getScreenSize() {
  const { windowWidth, windowHeight } = wx.getSystemInfoSync();
  return {
    width: windowWidth,
    height: windowHeight,
  };
}

// create a function to get miniprogram capsule button size and position
export function getCapsuleButtonInfo() {
  const { top, height, right, width } = wx.getMenuButtonBoundingClientRect();
  return {
    top,
    height,
    right,
    width,
  };
}