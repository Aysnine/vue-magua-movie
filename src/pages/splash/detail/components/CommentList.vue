<template lang="pug">
  .comment-list-wrap
    h3.text-center.mt-5.mb-5 评论区
    .comment-list-body

      b-card.mt-3(border-variant='success', header-class='card-head')
        b-row.pt-0(slot='header', align-v='center')
          b-col
            span 我要评论
          b-col(cols='auto')
            span.text-muted 我来打分：
            star-rate(v-model='form.rate', type='star1')
        b-form-textarea#textarea1(v-model='form.content', maxlength='1024', minlength='5', placeholder='写下你的评论，5个字以上，1024字以内', :rows='3', :max-rows='6', required)
        b-row.mt-3(align-v='center')
          b-col.text-right
            b-button(variant='success', :disabled='!validated')
              span.mr-3 ({{ form.content.trim().length }}/1024 字)
              span 提交评论
      b-card.mt-3(bg-variant='secondary', text-variant='white', header-class='card-head')
        b-row.pt-0(slot='header', align-v='center')
          b-col
            small.mr-3 {{'#' + mine.id}}
            span 我的评论
          b-col(cols='auto')
            star-rate(:value='mine.rate', type='star1', disabled)
        p.card-text(style='line-height: 1.25em')
          strong(style='font-size: 1.5em') “ 
          small {{ mine.content }}
      hr
      template(v-for='item in list')
        b-card.mt-3(bg-variant='light', text-variant='dark', header-class='card-head')
          b-row.pt-0(slot='header', align-v='center')
            b-col
              small.text-muted.mr-3 {{'#' + item.id}}
              span {{ item.memberNickname }}
            b-col(cols='auto')
              star-rate(:value='item.rate', type='star1', disabled)
          p.card-text(style='line-height: 1.25em')
            strong(style='font-size: 1.5em') “ 
            small {{ item.content }}
</template>

<script>
import StarRate from 'vue-cute-rate'

export default {
  data() {
    return {
      form: {
        rate: 0,
        content: ''
      },
      list: [
        {
          id: '3',
          memberNickname: '会员A',
          content:
            '威尔森是一个普通的名字。我所说的这个名叫威尔森的人出现在太平洋中一个没有名字的荒岛上，他长着圆圆的白脸，脾气很好。他总是一声不响，对于命运逆来顺受，并不抱怨什么。他只有一个亲人名叫恰克，他形影不离地陪伴着恰克，一刻都不曾分离。在恰克钻木取火，点着了第一缕火苗的时候、在恰克用篝火烤熟了螃蟹幸福品尝的时候、在恰克准备用30英尺树皮绳结束自己生命的时候、在恰克造好一个木筏即将远航的前夜、恰克辗转反侧难以入眠的时候、甚至包括恰克对着自己心爱的姑娘诉说衷肠的时候，威尔森都陪伴着恰克，永远耐心地倾听。即使恰克一时暴怒，抓起他从洞口扔进了大海，威尔森依然忠心耿耿地漂浮着、等待恰克后悔莫及地跳进海里找他回去。 ',
          rate: 3.6
        },
        {
          id: '2',
          memberNickname: '会员B',
          content:
            '威尔森陪伴着恰克开始了不可预测的航行。一个接一个巨浪迎面袭来，恰克大喊着：威尔森！坚持住！威尔森果然坚持住了。一日复一日，烈日的暴晒、暴雨的肆虐、鲨鱼来了，又走了，天黑了又亮了。终于有一天，威尔森无力地坠入海中，等到恰克醒来，才发现他已经越漂越远！他是他唯一的伴侣啊！恰克毫不犹豫地跳下海，一边呼唤着威尔森的名字，一边奋力朝他游去。然而距离实在太远了，恰克害怕失去他们的木筏，于是回头来拉着木筏一起追逐威尔森。可是威尔森还是越来越远了，恰克再也无力追赶，他喊着威尔森的名字，喃喃哭道：威尔森，对不起，我对不起你…… ',
          rate: 3.6
        },
        {
          id: '1',
          memberNickname: '会员C',
          content:
            '恰克孤苦伶仃地躺在被海洋折磨得快要散架的木筏上哭泣，他喊着威尔森的名字——因为失去了威尔森，他从此就是一个人了！威尔森，一个普通的名字，一只生来洁白的排球，就是这样被赋予了生命，成为流落到荒岛上的恰克唯一的伴侣。他被恰克画上了脸——其实那张脸不过是恰克受伤了的手被血浸染后盖在排球上的血手印；他的眼睛、鼻子和嘴巴都是血印被擦掉了两小块后露出的白色；他的头发是岛上的一些草叶儿；他没有胳膊、躯干和腿脚。但是谁也不能否认，恰克也一定如此坚定：威尔森是有思想、有灵魂的。难道不是因为他的陪伴，恰克才更坚强和更勇敢的么？失去他，也正如失去了一位朝夕相伴的亲人，否则恰克也不会痛楚如斯。再没有任何人，像威尔森那样了解恰克在荒岛上度过的五年岁月；也再没有任何人，能像威尔森那样给了恰克勇气和希望，艰难然而执著地活了下来，重回人间。 ',
          rate: 3.6
        }
      ],
      mine: {
        id: '4',
        memberNickname: '会员d',
        content:
          '恰克孤苦伶仃地躺在被海洋折磨得快要散架的木筏上哭泣，他喊着威尔森的名字——因为失去了威尔森，他从此就是一个人了！威尔森，一个普通的名字，一只生来洁白的排球，就是这样被赋予了生命，成为流落到荒岛上的恰克唯一的伴侣。他被恰克画上了脸——其实那张脸不过是恰克受伤了的手被血浸染后盖在排球上的血手印；他的眼睛、鼻子和嘴巴都是血印被擦掉了两小块后露出的白色；他的头发是岛上的一些草叶儿；他没有胳膊、躯干和腿脚。但是谁也不能否认，恰克也一定如此坚定：威尔森是有思想、有灵魂的。难道不是因为他的陪伴，恰克才更坚强和更勇敢的么？失去他，也正如失去了一位朝夕相伴的亲人，否则恰克也不会痛楚如斯。再没有任何人，像威尔森那样了解恰克在荒岛上度过的五年岁月；也再没有任何人，能像威尔森那样给了恰克勇气和希望，艰难然而执著地活了下来，重回人间。 ',
        rate: 3.6
      }
    }
  },
  computed: {
    validated() {
      return this.form.content.length > 5 && this.form.rate > 0
    }
  },
  components: {
    StarRate
  }
}
</script>

<style lang="stylus" scoped>
.card-head
  padding-top 0
  padding-bottom 0
</style>
