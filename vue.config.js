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
  }
}
