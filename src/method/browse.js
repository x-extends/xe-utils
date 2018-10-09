'use strict'

var baseExports = require('./base')

/**
  * 获取浏览器内核
  * @return Object
  */
function browse () {
  var result = {
    isNode: false,
    isMobile: /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent),
    isPC: false
  }
  if (typeof window === 'undefined' && typeof process !== 'undefined') {
    result.isNode = true
  } else {
    result.isPC = !result.isMobile
    if (typeof document !== 'undefined') {
      var $dom = document
      var $body = $dom.body || $dom.documentElement
      baseExports.each(['webkit', 'khtml', 'moz', 'ms', 'o'], function (core) {
        result['-' + core] = !!$body[core + 'MatchesSelector']
      })
    }
  }
  return result
}

var browseExports = {
  browse: browse
}

module.exports = browseExports
