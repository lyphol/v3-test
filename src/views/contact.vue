<template>
  <div class="page-contact">
    <van-config-provider :theme-vars="themeNavbar">
      <van-nav-bar title="联系人" placeholder fixed safe-area-inset-top z-index="2" />
      <van-index-bar :sticky="false">
        <van-index-anchor index="A" />
        <van-cell title="阿三" />

        <van-index-anchor index="B" />
        <van-cell title="白木" />
        <van-cell title="半糖" />
        <van-cell title="白木" />
        <van-cell title="半糖" />
        <van-cell title="白木" />
        <van-cell title="半糖" />
        <van-cell title="白木" />
        <van-cell title="半糖" />
        <van-cell title="白木" />
        <van-cell title="半糖" />

        <van-index-anchor index="Y" />
        <van-cell title="杨洋" />
        <van-cell title="杨洋" />
        <van-cell title="杨洋" />
        <van-cell title="杨洋" />
        <van-cell title="杨洋" />
        <van-cell title="杨洋" />
        <van-cell title="杨洋" />
        <van-cell title="杨洋" />

        <van-index-anchor index="Z" />
        <van-cell title="赵芳" />
        <van-cell title="赵芳" />
        <van-cell title="赵芳" />
        <van-cell title="赵芳" />
        <van-cell title="赵芳" />
        <van-cell title="赵芳" />
        <van-cell title="赵芳" />
      </van-index-bar>
    </van-config-provider>
  </div>
</template>

<script setup>
import { themeNavbar } from '@/config/theme-vars'
</script>

<style lang="scss" scoped></style>
