module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'compoents': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}