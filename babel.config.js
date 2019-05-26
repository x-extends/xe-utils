module.exports = {
  presets: process.env.npm_lifecycle_event.indexOf('unit') > -1 ? [] : [
    '@vue/app'
  ]
}
