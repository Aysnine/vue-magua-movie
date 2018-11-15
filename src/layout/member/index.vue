<template lang="pug">
  .layout-wrap
    h1 会员个人页面
    #nav
      router-link(to='/member/profile') 会员信息
    router-view
</template>
