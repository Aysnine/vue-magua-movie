<template lang="pug">
  b-card.card.mb-1(@click='$router.push({ path: "/detail", query: { id: data.id }})', :img-src='"./cover/" + data.cover', img-alt='Image', img-top='', tag='article', style='max-width: 20rem;', body-class='film-item-body')
    router-link(:to='{ path: "/detail", query: { id: data.id }}')
      small {{ data.title }}
    br
    small.text-muted {{ data.subtitle }}
</template>

<script>
export default {
  props: ['data'],
  name: 'FilmItem'
}
</script>

<style lang="stylus" scoped>
.film-item-body
  padding 5px 10px
.card
  cursor pointer
</style>
