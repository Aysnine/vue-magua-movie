<template lang="pug">
  .page-wrap
    .hero-wrap(v-if='data')
      b-container.mt-4.mb-4
        h3 {{ data.name }} 
          small.text-muted ({{ data.info.alias }})
        b-row.mt-4
          b-col(cols='auto')
            img(width='160px', :src='"./cover/" + data.cover')
          b-col
            .film-desc
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
                    b-progress(:value='item/rate.count*100', :max='100', variant='success', :precision='2', show-value)
        comment-list
</template>

<script>
import { mapGetters } from 'vuex'
import StarRate from 'vue-cute-rate'
import CommentList from './components/CommentList'

export default {
  data() {
    return {
      options: {
        rateLabel: ['五星', '四星', '三星', '二星', '一星']
      },
      rate: {
        avg: 3.6,
        count: 126,
        rates: [50, 45, 21, 9, 1]
      },
      data: {
        id: '5',
        name: '荒岛余生',
        subtitle: '四年没上班的社畜',
        href: 'https://www.bilibili.com/bangumi/play/ss25865/',
        cover: '3211c19bb4c136ae6459b94a89f7f3c6ae30116c.jpg@320w_428h.jpg',
        info: {
          director: '罗伯特·泽米吉斯',
          scriptwriter: '小威廉·保尔斯',
          zprotagonist: '汤姆·汉克斯 / 海伦·亨特 / 克里斯·诺斯 / 尼克·西塞',
          type: '剧情 / 冒险',
          production: '美国',
          language: '英语 / 俄语',
          release: '2000-12-22(美国)',
          duration: '143分钟',
          alias: '浩劫重生(台) / 劫后重生(港) / 荒岛男人'
        }
      }
    }
  },
  computed: {
    ...mapGetters(['filmTop']),
    groupedFilmTop() {
      return this.filmTop.reduce(
        (x, item, index) => (
          index % 5 ? x[x.length - 1].push(item) : x.push([item]), x
        ),
        []
      )
    },
    id() {
      return this.$route.query.id
    }
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
