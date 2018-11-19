<template lang="pug">
  .page-wrap
    .jumbotron
      b-jumbotron(header='麻瓜影评 🥒', lead='FrontEnd build by Bootstrap 4 & Vue.js 2')
        p 九月加急名单，了解一下？
        b-btn.mr-sm-2(variant='success') 立刻安排
        b-btn(variant='outline-success') 算了
    .hero-wrap
      h3 热门电影
      template(v-for='group in groupedFilmTop')
        b-card-group.mb-4(deck, columns)
          template(v-for='item in group')
            film-item(:data='item')
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created() {
    this.fetch()
  },
  computed: {
    ...mapGetters('splash', ['list']),
    groupedFilmTop() {
      return this.list.reduce(
        (x, item, index) => (
          index % 5 ? x[x.length - 1].push(item) : x.push([item]), x
        ),
        []
      )
    }
  },
  methods: {
    ...mapActions('splash', ['fetch'])
  }
}
</script>

<style lang="stylus" scoped>
.jumbotron
  text-align center
  padding 1.5em 1em .5em
</style>
