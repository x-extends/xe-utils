var staticEscapeMap = require('./staticEscapeMap')

var helperFormatEscaper = require('./helperFormatEscaper')

/**
  * 转义HTML字符串，替换&, <, >, ", ', `字符
  *
  * @param {String} str 字符串
  * @return {String}
  */
var escape = helperFormatEscaper(staticEscapeMap)

module.exports = escape
