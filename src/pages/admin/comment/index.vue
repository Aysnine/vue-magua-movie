<template lang="pug">
  b-container.mt-3(fluid)
    .sidebar.pr-3
      b-list-group
        b-list-group-item(:variant='active == 0 ? "success":""', @click='active = 0') 评论列表
    b-card.main(no-body)
      b-tabs.tab(card, fixed, nav-wrapper-class='d-none', v-model='active')
        b-tab
          tabu-table
</template>

<script>
import TabuTable from './components/TabuTable'

export default {
  data() {
    return {
      active: 0
    }
  },
  components: {
    TabuTable
  }
}
</script>

<style lang="stylus" scoped>
.sidebar
  width 200px
  float left
  .list-group-item
    cursor pointer
.main
  position relative
  height calc(100vh - 90px)
  overflow-y auto
</style>
