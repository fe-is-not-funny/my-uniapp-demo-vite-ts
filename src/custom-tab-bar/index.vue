<!--
 * @Date: 2023-05-06 12:08:05
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2023-05-06 17:02:47
 * @FilePath: /my-uniapp-demo-vite-ts/src/custom-tab-bar/index.vue
-->
    <template>
        <view>
            <view class="tab-bar"

            >
                <view class="tab-bar-item" v-for="(item, index) in store.list" :key="index" @click="switchTab(index)">
                    <image :src="item.iconPath" class="tab-bar-item-icon" :class="{'tab-bar-item-icon-active': index === selected}"></image>
                    <text class="tab-bar-item-text" :class="{'tab-bar-item-text-active': index === selected}">{{item.text}}</text>
                </view>
            </view>
        </view>
    </template>
    <script setup lang="ts">
    import { computed } from 'vue'
import { ref, onMounted } from 'vue'

    import { useCustomTabBarStore } from '@/store/custom-tab-bar'
    import { userStore } from '@/store/user'

    const user = userStore()

    const store = useCustomTabBarStore()

    const selected = computed(() => store.current)

    const switchTab = (index: number) => {
        if (index === 2 &&!user.isLogin) {
          uni.showToast({
            title: '请先登录',
            icon: 'none',
            duration: 2000,
            success: () => {
              setTimeout(() => {
                store.setCurrent(4)
                uni.switchTab({
              url: '/pages/profile/index'
            })
              }, 1000)

            }
          })
        } else {
          store.setCurrent(index)
          uni.switchTab({
            url: store.list[index].pagePath
        })
        }

    }

  </script>
  <style scoped>
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    bottom: calc(constant(safe-area-inset-bottom) /2);
  padding-bottom: calc(env(safe-area-inset-bottom) /2);
  }

  .tab-bar-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .tab-bar-item-icon {
    width: 24px;
    height: 24px;
  }

  .tab-bar-item-icon-active {
    width: 24px;
    height: 24px;
    color: #007aff;
  }

  .tab-bar-item-text {
    font-size: 10px;
    color: #333;
  }

  .tab-bar-item-text-active {
    font-size: 10px;
    color: #007aff;
  }
</style>