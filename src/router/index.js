import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    /* 公共页面 */
    {
      path: '/',
      name: 'LayoutSplash',
      redirect: '/welcome',
      component: () =>
        import(/* webpackChunkName: "LayoutSplash" */ '@/layout/splash'),
      children: [
        {
          path: '/welcome',
          name: 'SplashWelcome',
          component: () =>
            import(/* webpackChunkName: "SplashWelcome" */ '@/pages/splash/welcome')
        },
        {
          path: '/detail',
          name: 'SplashDetail',
          component: () =>
            import(/* webpackChunkName: "SplashDetail" */ '@/pages/splash/detail')
        },
        /* 会员注册 */
        {
          path: '/regist/member',
          name: 'RegistMember',
          component: () =>
            import(/* webpackChunkName: "RegistMember" */ '@/pages/splash/regist/member')
        },
        /* 会员登陆 */
        {
          path: '/login/member',
          name: 'LoginMember',
          component: () =>
            import(/* webpackChunkName: "LoginMember" */ '@/pages/splash/login/member')
        },
        /* 管理员登陆 */
        {
          path: '/login/admin',
          name: 'LoginAdmin',
          component: () =>
            import(/* webpackChunkName: "LoginAdmin" */ '@/pages/splash/login/admin')
        }
      ]
    },
    /* 会员个人页面 */
    {
      path: '/member',
      name: 'LayoutMember',
      redirect: '/member/profile',
      component: () =>
        import(/* webpackChunkName: "LayoutMemberr" */ '@/layout/member'),
      children: [
        {
          path: '/member/profile',
          name: 'MemberProfile',
          component: () =>
            import(/* webpackChunkName: "MemberProfile" */ '@/pages/member/profile')
        }
      ]
    },
    /* 后台管理页面 */
    {
      path: '/admin',
      name: 'LayoutAdmin',
      redirect: '/admin/film',
      component: () =>
        import(/* webpackChunkName: "LayoutAdmin" */ '@/layout/admin'),
      children: [
        {
          path: '/admin/film',
          name: 'AdminFilm',
          component: () =>
            import(/* webpackChunkName: "AdminFilm" */ '@/pages/admin/film')
        },
        {
          path: '/admin/member',
          name: 'AdminMember',
          component: () =>
            import(/* webpackChunkName: "AdminMember" */ '@/pages/admin/member')
        },
        {
          path: '/admin/comment',
          name: 'AdminComment',
          component: () =>
            import(/* webpackChunkName: "AdminComment" */ '@/pages/admin/comment')
        }
      ]
    },

    /* 404 页面 */
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () =>
        import(/* webpackChunkName: "LoginAdmin" */ '@/pages/404')
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
