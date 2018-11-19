<template lang="pug">
  .layout-wrap
    b-navbar.navbar(toggleable='md', type='dark', variant='dark', fixed='top')
      b-navbar-toggle(target='nav_collapse')
      b-navbar-brand(to='/') 麻瓜影评
      b-badge.mr-5(variant='success') 后台管理
      b-navbar-nav
        b-nav-item(to='/admin/film') 影片管理
        b-nav-item(to='/admin/member') 会员管理
        b-nav-item(to='/admin/comment') 影评管理
      b-collapse#nav_collapse(is-nav)
        b-navbar-nav.ml-auto
          b-nav-item(@click='hancleClickLogout') 退出登陆
          b-nav-item(to='/') 返回首页
    .layout-main-wrap.has-top-nav
      slide-y-down-transition(:duration='200', mode='out-in')
        router-view
</template>

<script>
export default {
  methods: {
    async hancleClickLogout() {
      try {
        await this.$store.dispatch('app/adminLogout')
        this.$router.push('/')
      } catch (err) {
        // ...
      }
    }
  }
}
</script>
