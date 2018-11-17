<template lang="pug">
  b-container.mt-3(fluid='')
    b-row
      b-col(cols='auto')
        .sidebar
          b-list-group
            b-list-group-item(:variant='active == 0 ? "success":""', @click='active = 0') 会员列表
            b-list-group-item(:variant='active == 1 ? "success":""', @click='active = 1') 新增会员
            b-list-group-item(:variant='active == 2 ? "success":""', @click='active = 2') 查找会员
      b-col.pl-0
        b-card.main(no-body)
          b-tabs(card, nav-wrapper-class='d-none', v-model='active')
            b-tab(title='Tab 0') Tab Contents 0
            b-tab(title='Tab 1') Tab Contents 1
            b-tab(title='Tab 2') Tab Contents 1
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      text: `
        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
        tempor. Laborum consequat non elit enim exercitation cillum aliqua
        consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
        laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
        Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
        nisi sit est tempor laborum mollit labore officia laborum excepteur
        commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
        ipsum commodo tempor sunt in proident.
      `
    }
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
