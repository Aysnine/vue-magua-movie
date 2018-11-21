<template lang="pug">
  .comment-list-wrap
    h3.text-center.mt-5.mb-5 评论区
    .comment-list-body

      b-card.mt-3(v-if='!mine && user && role=="ROOT_MEMBER"', border-variant='success', header-class='card-head')
        b-row.pt-0(slot='header', align-v='center')
          b-col
            span 我要评论
          b-col(cols='auto')
            span.text-muted 我来打分：
            star-rate(v-model='form.rate', type='star1')
        b-form-textarea#textarea1(v-model='form.content', maxlength='1024', minlength='5', placeholder='写下你的评论，5个字以上，1024字以内', :rows='3', :max-rows='6', required)
        b-row.mt-3(align-v='center')
          b-col.text-right
            b-button(variant='success', :disabled='!validated', @click='handleSubmitComment')
              span.mr-3 ({{ form.content.trim().length }}/1024 字)
              span 提交评论
      b-card.mt-3(v-if='!user || (user && role!="ROOT_MEMBER")')
        p.text-center.text-muted 登陆会员账号才能发表评论哦
      b-card.mt-3(v-if='mine', bg-variant='secondary', text-variant='white', header-class='card-head')
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
      template(v-if='comments.length')
        template(v-for='item in comments')
          b-card.mt-3(bg-variant='light', text-variant='dark', header-class='card-head')
            b-row.pt-0(slot='header', align-v='center')
              b-col
                small.text-muted.mr-3 {{'#' + item.id}}
                //- span {{ item.memberNickname }}
              b-col(cols='auto')
                star-rate(:value='item.rate', type='star1', disabled)
            p.card-text(style='line-height: 1.25em')
              strong(style='font-size: 1.5em') “ 
              small {{ item.content }}
      template(v-else)
        p.text-center.text-muted.m-5.p-5 暂时还没有评论
</template>

<script>
import StarRate from 'vue-cute-rate'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      form: {
        rate: 0,
        content: ''
      }
    }
  },
  computed: {
    ...mapGetters('splash/detail', ['comments', 'mine', 'rate']),
    ...mapGetters(['user', 'role']),
    validated() {
      return this.form.content.length > 5 && this.form.rate > 0
    }
  },
  methods: {
    ...mapActions('splash/detail', ['addComment']),
    async handleSubmitComment() {
      try {
        await this.addComment({
          film_id: this.$route.query.id,
          content: this.form.content,
          rate: this.form.rate
        })
      } catch (err) {
        alert(err.msg || '评论失败')
      }
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
