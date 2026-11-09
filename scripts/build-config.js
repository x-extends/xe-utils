const path = require('path')
const pkg = require('../package.json')

const root = path.resolve(__dirname, '..')
const resolve = (p) => path.resolve(root, p)

module.exports = {
  srcDir: resolve('src'),
  libDir: resolve('lib'),
  esDir: resolve('es'),
  outDir: resolve('dist'),

  // 根目录副本：模拟 npm 发布后的结构，直接覆盖不清理
  rootDir: root,

  fileName: 'xe-utils',
  exportName: 'XEUtils',
  version: pkg.version
}
