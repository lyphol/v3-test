<template>
  <van-tabbar class="app-tab-bar" route placeholder>
    <van-tabbar-item :to="{ name: 'PageHome' }" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item :to="{ name: 'PageContact' }" icon="friends-o">联系人</van-tabbar-item>
    <van-tabbar-item :to="{ name: 'PageMine' }" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup></script>

<style lang="scss" scoped></style>
