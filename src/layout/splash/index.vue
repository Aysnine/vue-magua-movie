<template lang="pug">
  .layout-wrap
    h1 公共页面
    #nav
      router-link(to='/welcome') 首页
      | |
      router-link(to='/login/admin') 管理员登陆
      | |
      router-link(to='/login/member') 会员登陆
    router-view
</template>
