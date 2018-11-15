<template lang="pug">
  .page-wrap
    .hero-wrap(v-if='data')
      b-container.mt-4.mb-4
        h3 {{ data.name }} 
          small.text-muted ({{ data.info.alias }})
        b-row.mt-4
          b-col(cols='auto')
            img(width='160px', :src='data.cover')
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
              span 片长: 
              span {{ data.info.duration }}
              br
              span.text-muted 又名: 
              span {{ data.info.alias }}
              br
              span.text-muted 播放链接: 
                b-link(href='data.href') Bilibili
          b-col(cols='auto')
            span hello
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      data: {
        id: '5',
        name: '荒岛余生',
        short: '四年没上班的社畜',
        href: 'https://www.bilibili.com/bangumi/play/ss25865/',
        cover:
          'https://i0.hdslb.com/bfs/bangumi/3211c19bb4c136ae6459b94a89f7f3c6ae30116c.jpg@320w_428h.jpg',
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
  }
}
</script>

<style lang="stylus" scoped>
.film-desc
  font-size 14px
</style>
