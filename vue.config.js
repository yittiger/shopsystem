
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        css: 'assets/css',
        img: 'assets/img',
        fonts: 'assets/fonts',
        pages: '@/pages',
        components: '@/components',
        network: '@/network'
      }
    }
  }
}
