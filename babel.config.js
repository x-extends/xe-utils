module.exports = {
  presets: !process || !process.env || !process.env.npm_lifecycle_event || process.env.npm_lifecycle_event.indexOf('unit') > -1 ? [] : [
    '@vue/app'
  ]
}
