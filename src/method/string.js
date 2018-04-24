'use strict'

var { objectKeys, arrayEach } = require('./base')

var escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
}

var unescapeMap = {}
arrayEach(objectKeys(escapeMap), function (key) {
  unescapeMap[escapeMap[key]] = key
})

function formatEscaper (dataMap) {
  var replaceRegexp = new RegExp('(?:' + objectKeys(dataMap).join('|') + ')', 'g')
  return function (str) {
    return String(str || '').replace(replaceRegexp, function (match) {
      return dataMap[match]
    })
  }
}

/**
  * 转义HTML字符串，替换&, <, >, ", ', `字符
  *
  * @param {String} str 字符串
  * @return {String}
  */
var escape = formatEscaper(escapeMap)

/**
  * 反转escape
  *
  * @param {String} str 字符串
  * @return {String}
  */
var unescape = formatEscaper(unescapeMap)

var stringExports = {
  escape: escape,
  unescape: unescape
}

module.exports = stringExports
