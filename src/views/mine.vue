<template>
  <div class="page-mine">
    <h2>设置</h2>
    <div>
      <h2>counter</h2>
      <van-button type="primary" size="large" @click="counter++">counter: {{ counter }}</van-button>
    </div>
    <div class="mt10">
      <h2>字号设置</h2>
      <div class="p10">
        <van-slider v-model="fontSize" />
      </div>
      <div class="show-text">默认字号：{{ app.fontSize }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useAppStore } from '@/stores/app'
const app = useAppStore()

const fontSize = ref(app.font)
watch(fontSize, (val) => {
  app.setFontSize(val)
})

const counter = ref(0)
</script>

<style scoped>
.page-mine {
  padding: 20px;
}
.show-text {
  font-size: v-bind('app.fontSize');
}
.mt10 {
  margin-top: 10px;
}
.p10 {
  padding: 10px;
}
</style>
