module.exports = {
  baseUrl: './',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      // nib document http://stylus.github.io/nib/
      stylus: {
        use: [require('nib')()],
        import: ['~nib/lib/nib/index.styl']
      }
    }
  },
  chainWebpack: config => {
    /* for compoennt assets of bootstrap-vue */
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options['transformAssetUrls'] = {
          img: 'src',
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'img-src',
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }
        return options
      })
  }
}
