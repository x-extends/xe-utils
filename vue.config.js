module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/xe-utils/' : '/',
  outputDir: 'docs',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    }
  }
}
