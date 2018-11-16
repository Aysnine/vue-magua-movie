<template lang="pug">
  .layout-wrap
    b-navbar.navbar(toggleable='md', type='dark', variant='dark', sticky)
      b-navbar-toggle(target='nav_collapse')
      b-navbar-brand(to='/') 麻瓜影评
      b-collapse#nav_collapse(is-nav)
        b-navbar-nav.ml-auto
          b-nav-item(href='#') 退出登陆
          b-nav-item(to='/') 返回首页
    router-view
</template>
