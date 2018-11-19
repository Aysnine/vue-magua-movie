<template lang="pug">
  .page-wrap
    .hero-wrap
      b-container.mt-5.mb-4
        h3.mt-5.mb-5.text-center 会员注册
        b-form.form(@submit='onSubmit')
          b-form-group(label='账号 / Account', description='该账号用于登录，由 6-32 位字母、数字、【@】、【_】、【.】组成')
            b-form-input(type='text', v-model='form.account', minlength='5', maxlength='32', required, placeholder='请输入账号名')
          b-form-group(label='昵称 / Nickname', description='输入常用的姓名或称呼')
            b-form-input(type='text', v-model='form.nickname', minlength='5', maxlength='32', required, placeholder='请输入昵称名')
          b-form-group(label='密码 / Password')
            b-form-input(type='password', v-model='form.password', minlength='5', maxlength='32', required, placeholder='请输入登陆密码')
          b-form-group(label='确认密码 / Repeat Password')
            b-form-input(type='password', v-model='form.repassword', minlength='5', maxlength='32', required, placeholder='请再次输入密码输入')
          .text-center
            b-button.w-100(type='submit', variant='success') 立即注册
          .text-center.mt-5
            small.text-muted 已有账号？
            b-link(to='/login/member') 前往登陆
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      form: {
        account: '',
        nickname: '',
        password: '',
        repassword: '',
        checked: []
      }
    }
  },
  methods: {
    ...mapActions('app', ['memberRegist']),
    async onSubmit(evt) {
      evt.preventDefault()
      if (this.form.password !== this.form.repassword) {
        return alert('两次密码输入不一致，请再次确认')
      }
      try {
        let rst = await this.memberRegist(this.form)
        this.$router.push({
          path: '/login/member',
          query: { account: this.form.account }
        })
        alert(rst.msg || '注册成功，请登录')
      } catch (err) {
        alert(err.msg || '注册失败')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.form
  max-width 400px
  position relative
  margin auto
</style>
