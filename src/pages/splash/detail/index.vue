<template lang="pug">
  .page-wrap
    .hero-wrap
      b-container.mt-4.mb-4(v-if='data')
        h3 {{ data.title }} 
          small.text-muted(v-if='data.info') ({{ data.info.alias }})
        b-row.mt-4
          b-col(cols='auto')
            img(width='160px', :src='"./cover/" + data.cover')
          b-col
            .film-desc(v-if='data.info')
              span.text-muted 导演: 
              span {{ data.info.director }}
              br
              span.text-muted 编剧: 
              span {{ data.info.scriptwriter }}
              br
              span.text-muted 主演: 
              span {{ data.info.zprotagonist }}
              br
              span.text-muted 类型: 
              span {{ data.info.type }}
              br
              span.text-muted 制片国家/地区: 
              span {{ data.info.production }}
              br
              span.text-muted 语言: 
              span {{ data.info.language }}
              br
              span.text-muted 上映日期: 
              span {{ data.info.release }}
              br
              span.text-muted 片长: 
              span {{ data.info.duration }}
              br
              span.text-muted 又名: 
              span {{ data.info.alias }}
              br
              span.text-muted 播放链接: 
                b-link(:href='data.href', target='_blank') Bilibili
          b-col(cols='auto')
            .film-rate
              span 麻瓜评分
              br
              strong(style='font-size: 2em') {{ rate.avg }} 
              star-rate(:value='rate.avg', type='star1', :star-half='true', disabled)
              br
              span {{ rate.count }} 人评价
              template(v-for='(item, index) in rate.rates')
                b-row(align-v='center')
                  b-col(cols='auto')
                    span.text-muted {{ options.rateLabel[index] }}
                  b-col
                    b-progress(:value='(item/rate.count*100) || 0', :max='100', variant='success', :precision='2', show-value)
        comment-list
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StarRate from 'vue-cute-rate'
import CommentList from './components/CommentList'

export default {
  mounted() {
    this.unset()
    this.fetch(this.$route.query.id)
  },
  data() {
    return {
      options: {
        rateLabel: ['五星', '四星', '三星', '二星', '一星']
      }
    }
  },
  computed: {
    ...mapGetters('splash/detail', ['mine', 'rate', 'data']),
    ...mapGetters(['user', 'role']),
    id() {
      return this.$route.query.id
    }
  },
  methods: {
    ...mapActions('splash/detail', ['unset', 'fetch'])
  },
  components: {
    StarRate,
    CommentList
  }
}
</script>

<style lang="stylus" scoped>
.film-desc
  font-size 14px
</style>
