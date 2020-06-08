var staticEscapeMap = require('./staticEscapeMap')

var helperFormatEscaper = require('./helperFormatEscaper')

var each = require('./each')

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
