<template>
  <div class="page-home">
    <van-config-provider :theme-vars="themeNavbar">
      <van-nav-bar title="wechat" placeholder fixed safe-area-inset-top />
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-config-provider>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { themeNavbar } from '@/config/theme-vars'

const list = ref([])
const loading = ref(false)
const finished = ref(false)
const onLoad = () => {
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1)
    }

    // 加载状态结束
    loading.value = false

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true
    }
  }, 1000)
}
</script>

<style lang="scss" scoped></style>
