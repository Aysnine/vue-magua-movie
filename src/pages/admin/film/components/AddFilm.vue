<template lang="pug">
  .wrap
    b-row
      b-col(cols='auto')
        b-card(v-if='form.cover.trim().length', style='width: 14rem', no-body, header='封面预览', :img-src='form.cover', img-bottom)
        b-card(v-else, style='width: 14rem', header='封面预览', img-bottom)
          span.text-muted 请先输入封面地址
      b-col
        b-form.ml-5(@submit='onSubmit')
          b-form-group(label='影片名:', horizontal, label-cols='2')
            b-form-input(v-model='form.title', required, maxlength='512', placeholder='请输入影片名')
          b-form-group(label='副标题:', horizontal, label-cols='2')
            b-form-input(v-model='form.subtitle', required, maxlength='512', placeholder='请输入副标题')
          b-form-group(label='观看地址:', horizontal, label-cols='2')
            b-form-input(v-model='form.href', required, maxlength='1024', placeholder='http 链接地址')
          b-form-group(label='封面地址:', horizontal, label-cols='2')
            b-form-input(v-model='form.cover', required, maxlength='1024', placeholder='http 链接地址')
          b-row
            b-col(align='center')
              b-button.mr-3.pl-5.pr-5(type='submit', variant='success') 确认提交
</template>

<script>
export default {
  data() {
    if (this.$env__is_preview) {
      let t = +new Date()
      return {
        form: {
          title: '麻瓜大电影' + t,
          subtitle: '即将上映',
          href: 'https://www.bilibili.com/bangumi/play/ep253908',
          cover:
            './cover/7d9b4804226444f90913a9113a0f56f53056500d.jpg@320w_428h.jpg'
        }
      }
    }
    return {
      form: {
        title: '',
        subtitle: '',
        href: '',
        cover: ''
      }
    }
  },
  computed: {
    validated() {
      let { title, subtitle, href, cover } = this.form
      return [title, subtitle, href, cover].every(
        i => i && i.length && i.trim().length
      )
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
    }
  }
}
</script>
