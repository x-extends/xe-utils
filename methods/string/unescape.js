var staticEscapeMap = require('../static/staticEscapeMap')

var helperFormatEscaper = require('./helperFormatEscaper')

var each = require('../base/each')

var unescapeMap = {}
each(staticEscapeMap, function (item, key) {
  unescapeMap[staticEscapeMap[key]] = key
})

/**
  * 反转escape
  *
  * @param {String} str 字符串
  * @return {String}
  */
var unescape = helperFormatEscaper(unescapeMap)

module.exports = unescape
