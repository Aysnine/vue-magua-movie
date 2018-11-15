<template lang="pug">
  .layout-wrap
    h1 后台管理页面
    #nav
      router-link(to='/admin/dash') 控制面板
      | |
      router-link(to='/admin/film') 影片管理
      | |
      router-link(to='/admin/member') 会员管理
      | |
      router-link(to='/admin/comment') 影评管理
    router-view
</template>
