<template lang="pug">
  #app
    fade-transition(:duration='200', mode='out-in')
      router-view
</template>
