<template lang="pug">
  .layout-wrap
    b-navbar.navbar(toggleable='md', type='dark', variant='dark', sticky)
      b-navbar-toggle(target='nav_collapse')
      b-navbar-brand(to='/') 麻瓜影评
      b-collapse#nav_collapse(is-nav='')
        b-navbar-nav
          b-nav-form
            b-form-input.mr-sm-2(size='sm', type='text', placeholder='输入关键字、电影名')
            b-button.my-2.my-sm-0(size='sm', variant='outline-success') Search
        b-navbar-nav.ml-auto
          // 管理可见
          b-nav-item-dropdown(right)
            template(slot='button-content')
              span 后台管理
            b-dropdown-item(to='/admin') 进入后台
            b-dropdown-item(href='#') 退出登录
          // 会员可见
          b-nav-item-dropdown(right)
            template(slot='button-content')
              span 我的会员
            b-dropdown-item(to='/member/profile') 我的资料
            b-dropdown-item(href='#') 退出登录
          // 未登录可见
          b-nav-item-dropdown(right)
            template(slot='button-content')
              span 会员
            b-dropdown-item(to='/login/member') 会员登陆
            b-dropdown-item(to='/regist/member') 会员注册
    router-view
</template>
