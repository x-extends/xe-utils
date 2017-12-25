import { keys } from './base'

var escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
}

var unescapeMap = {}
keys(escapeMap).forEach(function (key) {
  unescapeMap[escapeMap[key]] = key
})

function formatEscaper (map) {
  var replaceRegexp = new RegExp('(?:' + keys(map).join('|') + ')', 'g')
  return function (str) {
    return String(str || '').replace(replaceRegexp, function (match) {
      return map[match]
    })
  }
}

/**
  * 转义HTML字符串，替换&, <, >, ", ', `字符
  *
  * @param {String} str 字符串
  * @return {String}
  */
export var escape = formatEscaper(escapeMap)

/**
  * 反转escape
  *
  * @param {String} str 字符串
  * @return {String}
  */
export var unescape = formatEscaper(unescapeMap)
