<template lang="pug">
  #app
    #nav
      router-link(to='/') 公共页面
      | |
      router-link(to='/member') 会员个人页面
      | |
      router-link(to='/admin') 后台管理页面
    router-view
</template>
