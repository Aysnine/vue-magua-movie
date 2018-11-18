<template lang="pug">
  b-container.mt-3(fluid)
    b-row
      b-col(cols='auto')
        .sidebar
          b-list-group
            b-list-group-item(:variant='active == 0 ? "success":""', @click='active = 0') 影片列表
            b-list-group-item(:variant='active == 1 ? "success":""', @click='active = 1') 新增影片
      b-col.pl-0
        b-card.main(no-body)
          b-tabs(card, fixed, nav-wrapper-class='d-none', v-model='active')
            b-tab
              tabu-table
            b-tab
              add-film
</template>

<script>
import TabuTable from './components/TabuTable'
import AddFilm from './components/AddFilm'

export default {
  data() {
    return {
      active: 0
    }
  },
  components: {
    TabuTable,
    AddFilm
  }
}
</script>

<style lang="stylus" scoped>
.sidebar
  width 200px
  .list-group-item
    cursor pointer
.main
  position relative
  height calc(100vh - 90px)
  overflow-y auto
</style>
