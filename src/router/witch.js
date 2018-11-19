import WitchSuit from '@/lib/main/witch-suit'
import router from '@/router'
import store from '@/store'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const witch = WitchSuit(router)

witch.rules([
  /* base */

  {
    match: '/login/**',
    validator() {
      return !!store.getters.user
    },
    reactor() {
      return '/404'
    }
  },
  {
    match: '/admin/**',
    validator() {
      return !store.getters.user
    },
    reactor() {
      return '/'
    }
  },
  {
    match: '/member/**',
    validator() {
      return !store.getters.user
    },
    reactor() {
      return '/'
    }
  },

  /* role control */

  {
    match: '/admin/**',
    validator({ to }) {
      let user = store.getters.user
      return (
        user &&
        user.role &&
        to.meta &&
        to.meta.role &&
        to.meta.role.indexOf(user.role) == -1
      )
    },
    reactor() {
      return '/404'
    }
  }
])

witch.before(() => {
  NProgress.start()
})

witch.after(() => {
  NProgress.done()
})

export default witch
