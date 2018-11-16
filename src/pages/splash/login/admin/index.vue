<template lang="pug">
  .page-wrap
    .hero-wrap
      b-container.mt-5.mb-4
        h3.mt-5.mb-5.text-center 管理员登陆
        b-form.form(@submit='onSubmit')
          b-form-group(label='账号 / Account')
            b-form-input(type='text', v-model='form.account', minlength='6', maxlength='32', required, placeholder='请输入管理员账号')
          b-form-group(label='密码 / Password')
            b-form-input(type='password', v-model='form.password', minlength='6', maxlength='32', required, placeholder='请输入登陆密码')
          b-form-group.text-center
            b-form-checkbox-group(v-model='form.checked')
              b-form-checkbox(value='me') 是否记住登陆？
          .text-center
            b-button.w-100(type='submit', variant='secondary') 确认登陆
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: '',
        password: '',
        checked: []
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
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
