<template lang="pug">
  #app
    fade-transition(:duration='200', mode='out-in')
      router-view
</template>

<script>
export default {
  async beforeCreate() {
    try {
      await this.$store.dispatch('app/init')
      // ...
    } catch (err) {
      // ...
    }
  }
}
</script>
