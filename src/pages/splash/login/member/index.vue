<template lang="pug">
  .page-wrap
    .hero-wrap
      b-container.mt-5.mb-4
        h3.mt-5.mb-5.text-center 会员登陆
        b-form.form(@submit='onSubmit')
          b-form-group(label='账号 / Account', description='在注册账号时填写的账号名')
            b-form-input(type='text', v-model='form.account', minlength='5', maxlength='32', required, placeholder='请输入您的账号')
          b-form-group(label='密码 / Password')
            b-form-input(type='password', v-model='form.password', minlength='5', maxlength='32', required, placeholder='请输入登陆密码')
          //- b-form-group.text-center
          //-   b-form-checkbox-group(v-model='form.checked')
          //-     b-form-checkbox(value='me') 是否记住登陆？
          .text-center
            b-button.w-100(type='submit', variant='success') 确认登陆
          .text-center.mt-5
            small.text-muted 没有账号？
            b-link(to='/regist/member') 前往注册
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    if (this.$route.query.account) {
      return {
        form: {
          account: this.$route.query.account,
          password: '',
          checked: []
        }
      }
    }
    return {
      form: {
        account: this.$env__is_preview ? 'damagua1' : '',
        password: this.$env__is_preview ? 'damagua1' : '',
        checked: []
      }
    }
  },
  methods: {
    ...mapActions('app', ['memberLogin']),
    async onSubmit(evt) {
      evt.preventDefault()
      try {
        await this.memberLogin(this.form)
        this.$router.push('/member/profile')
        // alert(rst.msg || '登陆成功')
      } catch (err) {
        alert(err.msg || '登陆失败')
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
