<template lang="pug">
  .page-wrap
    .hero-wrap(v-if='data')
      b-container.mt-4.mb-4
        b-card.text-center(img-src='/image/member-hero.jpg', img-alt='Card image', img-top, pills, overlay)
          .pt-3.pb-3(slot='footer')
            .footer
              .avatar
                img(src='@/assets/logo.png')
              strong {{ data.nickname }} 
              br
              b-badge(variant='success') 正式会员
        b-card.mt-3(bg-variant='light')
          b-form-group.mb-0(horizontal='', breakpoint='lg', label='会员信息', label-size='lg', label-class='font-weight-bold pt-0')
            b-form-group(horizontal='', label='账号：', label-class='text-sm-right')
              b-form-input(:value='data.account', disabled)
            b-form-group(horizontal='', label='昵称：', label-class='text-sm-right')
              b-form-input(:value='data.nickname', disabled)
</template>

<script>
export default {
  data() {
    return {
      data: {
        id: '5',
        account: 'damugua',
        nickname: '大麻瓜同学'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
  position relative
.avatar
  position absolute
  top -130px
  width 120px
  height @width
  line-height @height
  left calc(50% - 60px)
  border 2px solid #28a745
  border-radius 50%
  box-shadow 0 0 0 0.2rem rgba(40, 167, 69, 0.5)
  background #fffe
  overflow hidden
  img
    height 50px
</style>
